```bash
#!/bin/bash
# ============================================================
# Ubuntu 22.04 Samba AD DC 一條龍安裝腳本（開發環境用）
# ============================================================
# 功能：
# 1. 安裝 Samba AD DC 必要套件
# 2. 清除舊設定 / 舊資料
# 3. Provision AD DC（內建 DNS）
# 4. 設定本機 DNS 指向自己
# 5. 基本測試 AD / DNS / Kerberos
# ============================================================

# -----------------------------
# 1️⃣ 設定 hostname 與 hosts
# -----------------------------
sudo hostnamectl set-hostname dc1
sudo tee /etc/hosts >/dev/null <<EOF
127.0.0.1   localhost
10.211.55.10   dc1.lab1.wilsontt.com   dc1
EOF

# -----------------------------
# 2️⃣ 停用可能衝突的 DNS 服務
# -----------------------------
sudo systemctl stop systemd-resolved
sudo systemctl disable systemd-resolved

# -----------------------------
# 3️⃣ 安裝 Samba AD DC 必要套件
# -----------------------------
sudo apt update
sudo apt install -y samba krb5-user winbind smbclient

# -----------------------------
# 4️⃣ 清理舊 AD / Samba 設定（可選）
# -----------------------------
sudo systemctl stop samba-ad-dc smbd nmbd winbind
sudo rm -rf /etc/samba/smb.conf /var/lib/samba/* /var/cache/samba/* /var/run/samba/*
sudo rm -rf /etc/krb5.conf

# -----------------------------
# 5️⃣ Provision AD DC（請修改 admin 密碼）
# -----------------------------
ADMINPASS='A27622500.zz'
sudo samba-tool domain provision \
  --use-rfc2307 \
  --realm=LAB1.WILSONTT.COM \
  --domain=LAB1 \
  --server-role=dc \
  --dns-backend=SAMBA_INTERNAL \
  --host-ip=10.211.55.10 \
  --adminpass="$ADMINPASS"

# -----------------------------
# 6️⃣ 啟動 AD DC 服務
# -----------------------------
sudo systemctl unmask samba-ad-dc
sudo systemctl enable samba-ad-dc
sudo systemctl restart samba-ad-dc

# -----------------------------
# 7️⃣ 設定本機 DNS 指向自己
# -----------------------------
sudo rm -f /etc/resolv.conf
echo "nameserver 127.0.0.1" | sudo tee /etc/resolv.conf
sudo systemctl restart samba-ad-dc

# -----------------------------
# 8️⃣ 基本測試 AD / DNS / Kerberos
# -----------------------------
echo "====== 測試 DNS A 記錄 ======"
host -t A dc1.lab1.wilsontt.com
host -t A lab1.wilsontt.com

echo "====== 測試 DNS SRV 記錄 ======"
host -t SRV _ldap._tcp.lab1.wilsontt.com
host -t SRV _kerberos._tcp.lab1.wilsontt.com

echo "====== 測試 Kerberos ======"
echo "$ADMINPASS" | kinit Administrator
klist

echo "====== 測試 Samba AD 使用者 / 電腦 ======"
sudo samba-tool user list
sudo samba-tool computer list

echo "🎉 Samba AD DC 安裝與基本測試完成！"
```

---

### 🔹 使用說明

1. **修改 ADMINPASS** 為你想要的 Administrator 密碼
2. **確保 Ubuntu VM IP 固定**（本例使用 10.211.55.10）
3. 執行：

```bash
chmod +x install-samba-ad.sh
sudo ./install-samba-ad.sh
```

4. 測試無誤後，Windows VM 可設定 DNS 指向 Ubuntu DC IP（10.211.55.10）加入網域

---

這份腳本涵蓋了：

* AD DC 安裝與 Provision
* 內建 DNS 啟用
* 系統 DNS 指向本機
* Kerberos 初始化
* Samba 使用者/電腦列表檢查

執行後即可直接得到一個完整可用的開發 AD 環境。
