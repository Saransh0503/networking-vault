---
tags: [protocol, security, overview, encryption, authentication]
---

# Security Protocols Overview

## Definition
Security protocols provide confidentiality, integrity, and authentication for network communications.

## Key Protocols
| Protocol | Layer | Purpose |
|----------|-------|---------|
| [SSL-TLS](SSL-TLS.md) | L4-L7 | Transport encryption |
| [IPsec](../Network-Layer/IPsec.md) | L3 | Network-layer encryption |
| [SSH](../Application-Layer/SSH.md) | L7 | Secure remote access |
| [HTTPS](../Application-Layer/HTTPS.md) | L7 | Secure web browsing |

## Selection Criteria
- **Application-specific**: [HTTPS](../Application-Layer/HTTPS.md) for web, [SSH](../Application-Layer/SSH.md) for remote admin
- **Network-wide**: [IPsec](../Network-Layer/IPsec.md) for VPNs
- **Legacy support**: [SSL-TLS](SSL-TLS.md) 1.2 for compatibility
- **Modern**: TLS 1.3, WireGuard

## Links
- [SSL-TLS](SSL-TLS.md) | [IPsec](../Network-Layer/IPsec.md) | [SSH](../Application-Layer/SSH.md) | [HTTPS](../Application-Layer/HTTPS.md)
- Encryption | Authentication | Integrity
- [VPN](../../Defenses/VPN.md) | [Zero Trust](../../Defenses/Zero-Trust.md)
- Cryptography Fundamentals

---

#protocol #security #overview #encryption #authentication
