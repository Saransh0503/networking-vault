---
tags: [protocol, application-layer, ssh, secure, remote-access, encryption]
---

# SSH

## Definition
**Secure Shell (SSH)** provides encrypted remote login and command execution. Operates on TCP port 22.

## Key Points
- Replaces [Telnet](Telnet.md) and rlogin/rsh
- Public key and password authentication
- Supports tunneling/port forwarding
- SFTP and SCP built on SSH
- OpenSSH most common implementation

## Cybersecurity Relevance
- Brute Force attacks against weak passwords
- Private key theft = complete compromise
- SSH Tunneling used for pivoting in breaches
- Agent forwarding risks (key exposure)
- Fail2ban protects against brute force

## Example
An attacker finds an exposed SSH server with password auth enabled. Using Hydra, they brute-force "root/password123" and gain full system access, then use SSH tunnels to pivot deeper.

## Links
- [Telnet](Telnet.md) (insecure predecessor)
- [SFTP](SFTP.md) | SCP (file transfer over SSH)
- Brute Force | Credential Stuffing
- SSH Tunneling | Pivoting
- Fail2ban | Key-Based Authentication
- [Firewall](../../Defenses/Firewall.md) (port 22 restriction)
- Bastion Host | Jump Server

---

#protocol #application-layer #ssh #secure #remote-access #encryption
