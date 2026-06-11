---
tags: [protocol, application-layer, ftp, file-transfer, insecure]
---

# FTP

## Definition
**File Transfer Protocol (FTP)** transfers files between client and server. Uses ports 20 (data) and 21 (control).

## Key Points
- Separate control and data channels
- Active mode (server initiates data) vs Passive mode (client initiates)
- Plaintext authentication and data transfer
- No encryption by default

## Cybersecurity Relevance
- **Credentials transmitted in plaintext** → trivial to sniff
- [MITM Attack](../../Attacks/MITM-Attack.md) can intercept file transfers
- Often blocked by [Firewall](../../Defenses/Firewall.md) due to dynamic port usage
- Replaced by [SFTP](SFTP.md) or FTPS in modern environments

## Example
A legacy system uses FTP for nightly backups. An attacker on the network segment captures the FTP credentials and downloads sensitive backup files.

## Links
- [SFTP](SFTP.md) (secure alternative over SSH)
- [SSH](SSH.md) (underlying protocol for SFTP)
- [MITM Attack](../../Attacks/MITM-Attack.md) | Sniffing
- [Firewall](../../Defenses/Firewall.md) (FTP filtering challenges)
- [Telnet](Telnet.md) (similarly insecure legacy protocol)

---

#protocol #application-layer #ftp #file-transfer #insecure
