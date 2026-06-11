---
tags: [protocol, application-layer, sftp, secure, file-transfer, ssh]
---

# SFTP

## Definition
**SSH File Transfer Protocol (SFTP)** provides secure file transfer over an [SSH](SSH.md) connection. Operates on port 22.

## Key Points
- Single encrypted channel (unlike FTP's dual channels)
- Uses [SSH](SSH.md) for authentication and encryption
- Supports file management operations (rename, delete, permissions)
- More firewall-friendly than FTP (single port)

## Cybersecurity Relevance
- Eliminates plaintext credential exposure
- Resistant to [MITM Attack](../../Attacks/MITM-Attack.md) when host keys verified
- Key-based authentication more secure than passwords
- Chroot jails can restrict user access

## Example
A DevOps pipeline uses SFTP with SSH keys to deploy artifacts. Even if the network is compromised, the encrypted transfer and key-based auth prevent unauthorized access.

## Links
- [FTP](FTP.md) (insecure predecessor)
- [SSH](SSH.md) (underlying protocol)
- SCP (alternative secure copy)
- [MITM Attack](../../Attacks/MITM-Attack.md) (mitigated by host key verification)
- [Firewall](../../Defenses/Firewall.md) (port 22 management)

---

#protocol #application-layer #sftp #secure #file-transfer #ssh
