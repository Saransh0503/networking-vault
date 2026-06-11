---
tags: [protocol, application-layer, telnet, insecure, legacy]
---

# Telnet

## Definition
**Telnet** provides remote terminal access over TCP port 23. All communication in plaintext.

## Key Points
- Bidirectional text-based communication
- No encryption, no authentication beyond password
- Superseded by [SSH](SSH.md) in all modern environments
- Still found in legacy industrial/IoT devices

## Cybersecurity Relevance
- **Complete plaintext exposure** of credentials and session
- Trivial [MITM Attack](../../Attacks/MITM-Attack.md) and credential sniffing
- Often enabled by default on old devices
- Compliance violations (PCI-DSS, HIPAA) if used

## Example
A network audit discovers a router with Telnet enabled. The admin password was "admin123" transmitted in plaintext. An attacker on the network captured the credentials weeks ago.

## Links
- [SSH](SSH.md) (secure replacement)
- [MITM Attack](../../Attacks/MITM-Attack.md) | Sniffing
- Legacy Protocol Security
- Network Hardening
- [FTP](FTP.md) (similarly insecure)

---

#protocol #application-layer #telnet #insecure #legacy
