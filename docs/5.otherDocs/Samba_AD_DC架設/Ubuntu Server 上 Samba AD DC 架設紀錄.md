# Ubuntu Server 上 Samba AD DC 架設紀錄

> **重要說明**：本專案採用 **Ubuntu Server 直接安裝** 的方式部署 Samba AD DC，**不使用 Docker 容器化部署**。  
> 如需在 Ubuntu Server 上快速安裝，請使用 `install-samba-ad.sh` 腳本。

## 一、環境概況

* **主機**：MacBook M4 Max
* **虛擬化**：Parallels Desktop
* **VM OS**：Ubuntu Server 22.04 ARM64
* **AD 服務**：Samba AD DC（內建 DNS）
* **網段**：Parallels NAT 10.211.55.x
* **測試端**：Win11 VM（10.211.55.8）

> 注意：此網域環境僅適用於開發測試，非正式生產環境。

---

## 二、完整實作步驟

### 1️⃣ 安裝前準備

```bash
sudo hostnamectl set-hostname dc1
```

編輯 `/etc/hosts`：

```
127.0.0.1   localhost
10.211.55.10   dc1.lab1.wilsontt.com   dc1
```

暫時停掉系統 DNS，避免衝突：

```bash
sudo systemctl stop systemd-resolved
sudo systemctl disable systemd-resolved
sudo rm -f /etc/resolv.conf
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
ping www.hinet.net  # 測試外網解析
```

---

### 2️⃣ 安裝 Samba AD 相關套件

```bash
sudo apt update
sudo apt install samba krb5-user winbind smbclient -y
```

Kerberos Realm 輸入：`LAB1.WILSONTT.COM`
Kerberos 伺服器與 admin server：`dc1.lab1.wilsontt.com`

---

### 3️⃣ 清除舊 AD / Samba 設定（如需重建環境）

```bash
sudo systemctl stop samba-ad-dc smbd nmbd winbind
sudo rm -rf /etc/samba/smb.conf /var/lib/samba/* /var/cache/samba/* /var/run/samba/*
sudo rm -rf /etc/krb5.conf
```

---

### 4️⃣ Provision AD DC

```bash
sudo samba-tool domain provision \
  --use-rfc2307 \
  --realm=LAB1.WILSONTT.COM \
  --domain=LAB1 \
  --server-role=dc \
  --dns-backend=SAMBA_INTERNAL \
  --host-ip=10.211.55.10 \
  --adminpass='你的密碼'
```

---

### 5️⃣ 啟動 AD DC

```bash
sudo systemctl unmask samba-ad-dc
sudo systemctl enable samba-ad-dc
sudo systemctl restart samba-ad-dc
sudo systemctl status samba-ad-dc
```

---

### 6️⃣ 設定 Ubuntu 內部 DNS 指向 AD DC

```bash
sudo rm -f /etc/resolv.conf
echo "nameserver 127.0.0.1" | sudo tee /etc/resolv.conf
sudo systemctl restart samba-ad-dc
```

---

### 7️⃣ 測試 AD DC 功能

```bash
host -t A dc1.lab1.wilsontt.com
host -t A lab1.lab1.wilsontt.com
host -t SRV _ldap._tcp.lab1.wilsontt.com
host -t SRV _kerberos._tcp.lab1.wilsontt.com
kinit Administrator
klist
sudo samba-tool user list
sudo samba-tool computer list
```

---

### 8️⃣ Windows 11 加入網域

1. 設定 DNS → 指向 Ubuntu DC：`10.211.55.10`
2. 網域名稱：`LAB1.WILSONTT.COM`
3. 帳號：`Administrator`
4. 密碼：Provision 時設定的密碼
5. 驗證：

```powershell
whoami
systeminfo | findstr /B /C:"Domain"
nslookup dc1.lab1.wilsontt.com
```

---

## 三、實作中遇到的問題與排解

| 問題                                               | 原因                                  | 解法                                                          |
| ------------------------------------------------ | ----------------------------------- | ----------------------------------------------------------- |
| Install-ADDSForest / PowerShell 無法在 Win11 ARM 執行 | Win11 ARM 不支援 Windows Server AD DC  | 改用 Ubuntu Samba AD DC                                       |
| samba-tool: command not found                    | Ubuntu Server 上沒有安裝 samba-tools      | 在 Ubuntu Server 上執行: `sudo apt install samba-tools`                |
| DNS / host / kinit 失敗                            | systemd-resolved / bind9 占用 53 port | 停止 systemd-resolved 或 bind9，改 /etc/resolv.conf 指向 127.0.0.1 |
| Provision 遇到 NetBIOS 名稱錯誤                        | hostname 包含大小寫或非標準字符                | 確認 hostname 只有字母數字，不含 `-` 或空格，建議 dc1                        |
| Windows join domain 失敗                           | Windows DNS 沒指向 AD DC               | Windows 網路介面 DNS 設定指向 Ubuntu AD DC IP                       |
| Ubuntu Server 上 DNS / samba-tool 失敗              | port 53 被佔用或工具未安裝                   | 停止佔用服務，確保 Ubuntu Server 上安裝 samba-tools                    |

---

## 四、快速檢查清單（Ubuntu + Windows）

### Ubuntu AD DC

```bash
sudo systemctl status samba-ad-dc
host -t A dc1.lab1.wilsontt.com
host -t A lab1.wilsontt.com
host -t SRV _ldap._tcp.lab1.wilsontt.com
host -t SRV _kerberos._tcp.lab1.wilsontt.com
kinit Administrator
klist
sudo samba-tool user list
sudo samba-tool computer list
```

### Windows 11

```powershell
ping dc1.lab1.wilsontt.com
nslookup dc1.lab1.wilsontt.com
nslookup -type=SRV _ldap._tcp.lab1.wilsontt.com
# 加入網域
# Domain: LAB1.WILSONTT.COM
# User: Administrator
# Password: <Provision 密碼>
whoami
systeminfo | findstr /B /C:"Domain"
klist
net group "Domain Admins" /domain
```



### 一條龍命令腳本
可以在乾淨 Ubuntu Server 22.04 上一次完成 Samba AD DC 安裝、Provision、
內建 DNS 設定，以及基本測試。腳本會加上說明註解。
檔名：install-samba-ad.sh
給予可執行權限：
```sh
chmod +x install-samba-ad.sh
```
使用 sudo 執行：
```sh
sudo ./install-samba-ad.sh
```
注意：腳本中 ADMINPASS 請修改成你想要的 Administrator 密碼，Ubuntu VM 的 IP 也要固定，與你網路設定一致。