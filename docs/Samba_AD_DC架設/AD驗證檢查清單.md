# Samba AD DC 驗證檢查清單

**AD DC IP**: 10.211.55.10  
**網域**: lab1.wilsontt.com  
**Realm**: LAB1.WILSONTT.COM  
**DC 主機名稱**: dc1

---

## 一、快速驗證（使用腳本）

### 本機驗證

```bash
cd docs/Samba_AD_DC架設/
sudo ./verify-ad-dc.sh
```

### 遠端驗證

```bash
cd docs/Samba_AD_DC架設/
sudo ./verify-ad-dc.sh 10.211.55.10
```

---

## 二、手動驗證步驟

### ✅ 1. 服務狀態檢查

```bash
# 檢查服務狀態
sudo systemctl status samba-ad-dc

# 檢查服務是否運行
sudo systemctl is-active samba-ad-dc
```

**預期結果**: `active (running)`

---

### ✅ 2. DNS 功能驗證

```bash
# 查詢主機 A 記錄
host -t A dc1.lab1.wilsontt.com 10.211.55.10

# 查詢網域 A 記錄
host -t A lab1.wilsontt.com 10.211.55.10

# 查詢 LDAP SRV 記錄
host -t SRV _ldap._tcp.lab1.wilsontt.com 10.211.55.10

# 查詢 Kerberos SRV 記錄
host -t SRV _kerberos._tcp.lab1.wilsontt.com 10.211.55.10
```

**預期結果**: 
- 主機 A 記錄應解析到 10.211.55.10
- SRV 記錄應顯示服務資訊

---

### ✅ 3. 網路連線測試

```bash
# 測試 LDAP port (389)
timeout 3 bash -c "cat < /dev/null > /dev/tcp/10.211.55.10/389" && echo "LDAP port 可連線"

# 測試 Kerberos port (88)
timeout 3 bash -c "cat < /dev/null > /dev/tcp/10.211.55.10/88" && echo "Kerberos port 可連線"

# 測試 DNS port (53)
timeout 3 bash -c "cat < /dev/null > /dev/tcp/10.211.55.10/53" && echo "DNS port 可連線"
```

**預期結果**: 所有 port 都應可連線

---

### ✅ 4. Kerberos 認證測試

```bash
# 測試 Kerberos 認證
kinit Administrator@LAB1.WILSONTT.COM
# 輸入 Provision 時設定的密碼

# 查看 ticket
klist

# 清除 ticket
kdestroy
```

**預期結果**: 能成功取得 Kerberos ticket

---

### ✅ 5. 使用者與群組查詢

```bash
# 列出所有使用者
sudo samba-tool user list

# 列出所有群組
sudo samba-tool group list

# 查看 Administrator 詳細資訊
sudo samba-tool user show Administrator

# 查看 Domain Admins 群組成員
sudo samba-tool group listmembers "Domain Admins"
```

**預期結果**: 
- 至少能看到 Administrator 使用者
- 至少能看到 Domain Admins 群組

---

### ✅ 6. LDAP 查詢測試

```bash
# 安裝 ldap-utils（如果尚未安裝）
sudo apt install ldap-utils -y

# 測試 LDAP 連線
ldapsearch -x -H ldap://10.211.55.10 -b "DC=lab1,DC=wilsontt,DC=com" -s base

# 查詢使用者（需要認證）
ldapsearch -x -H ldap://10.211.55.10 \
  -D "CN=Administrator,CN=Users,DC=lab1,DC=wilsontt,DC=com" \
  -W -b "DC=lab1,DC=wilsontt,DC=com" \
  "(objectClass=user)"
```

**預期結果**: 能成功查詢到 LDAP 資料

---

## 三、常見問題排查

### 問題 1: DNS 查詢失敗

**症狀**: `host` 命令無法解析網域

**排查步驟**:

```bash
# 檢查 DNS 服務是否監聽 53 port
sudo netstat -tuln | grep :53

# 檢查 samba-ad-dc 服務日誌
sudo journalctl -u samba-ad-dc -n 50

# 檢查 DNS 設定
sudo samba-tool dns query localhost lab1.wilsontt.com @ ALL
```

**解決方案**:
- 確認 `/etc/resolv.conf` 指向 127.0.0.1（本機）或 10.211.55.10（遠端）
- 確認 samba-ad-dc 服務正常運行
- 檢查防火牆是否阻擋 53 port

---

### 問題 2: Kerberos 認證失敗

**症狀**: `kinit` 無法取得 ticket

**排查步驟**:

```bash
# 檢查 Kerberos 設定
cat /etc/krb5.conf

# 檢查 KDC 服務
sudo systemctl status samba-ad-dc | grep -i kerberos

# 查看詳細錯誤
kinit -V Administrator@LAB1.WILSONTT.COM
```

**解決方案**:
- 確認 `/etc/krb5.conf` 設定正確
- 確認密碼正確
- 確認網路連線正常

---

### 問題 3: 無法查詢使用者

**症狀**: `samba-tool user list` 無回應或錯誤

**排查步驟**:

```bash
# 檢查 LDAP 服務
sudo netstat -tuln | grep :389

# 測試 LDAP 連線
ldapsearch -x -H ldap://localhost -b "DC=lab1,DC=wilsontt,DC=com" -s base

# 檢查服務日誌
sudo journalctl -u samba-ad-dc -n 100
```

**解決方案**:
- 確認 samba-ad-dc 服務正常運行
- 確認 LDAP port (389) 可連線
- 檢查服務日誌中的錯誤訊息

---

### 問題 4: 遠端無法連線

**症狀**: 從其他機器無法連線到 AD DC

**排查步驟**:

```bash
# 檢查防火牆設定
sudo ufw status
# 或
sudo iptables -L -n

# 測試網路連線
ping 10.211.55.10

# 測試 port 連線
telnet 10.211.55.10 389
telnet 10.211.55.10 88
telnet 10.211.55.10 53
```

**解決方案**:
- 開放必要的 port（389, 88, 53, 445, 135-139）
- 確認網路路由正確
- 確認 AD DC 服務正常運行

---

## 四、驗證檢查清單

完成以下檢查項目：

- [ ] **服務狀態**: `systemctl status samba-ad-dc` 顯示 `active (running)`
- [ ] **DNS A 記錄**: `host -t A dc1.lab1.wilsontt.com` 能解析到 10.211.55.10
- [ ] **DNS SRV 記錄**: `host -t SRV _ldap._tcp.lab1.wilsontt.com` 能查詢到服務
- [ ] **LDAP Port**: port 389 可連線
- [ ] **Kerberos Port**: port 88 可連線
- [ ] **DNS Port**: port 53 可連線
- [ ] **Kerberos 認證**: `kinit Administrator` 能成功取得 ticket
- [ ] **使用者列表**: `samba-tool user list` 能列出使用者
- [ ] **群組列表**: `samba-tool group list` 能列出群組
- [ ] **LDAP 查詢**: `ldapsearch` 能成功查詢資料

---

## 五、驗證通過後的下一步

1. **批次匯入使用者與群組**:
   ```bash
   sudo ./import-users-groups.sh users-groups.csv
   ```

2. **設定 Windows 機器加入網域**:
   - 設定 DNS 指向 10.211.55.10
   - 加入網域: LAB1.WILSONTT.COM
   - 使用 Administrator 帳號

3. **開始 IAM 整合開發**:
   - 參考 `0.2.客戶資料維護與IAM整合設計總結.md`
   - 進行系統與 AD 帳號整合測試

---

## 六、參考文件

- `Ubuntu Server 上 Samba AD DC 架設紀錄.md` - 安裝與設定說明
- `import-users-groups.sh` - 批次匯入腳本
- `批次匯入使用說明.md` - 匯入使用說明
- `verify-ad-dc.sh` - 自動驗證腳本

---

**文件版本**: v1.0  
**最後更新**: 2025-12-05

