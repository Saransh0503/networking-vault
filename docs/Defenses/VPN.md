---
tags: [defense, vpn, encryption, tunnel, remote-access]
---

# VPN

## Definition
**Virtual Private Network (VPN)** extends a private network across public networks, encrypting traffic between endpoints.

## Types
| Type | Protocol | Use Case |
|------|----------|----------|
| Remote Access | [SSL-TLS](../Protocols/Security-Protocols/SSL-TLS.md), [IPsec](../Protocols/Network-Layer/IPsec.md) | Individual users |
| Site-to-Site | [IPsec](../Protocols/Network-Layer/IPsec.md), WireGuard | Branch offices |
| SSL VPN | [HTTPS](../Protocols/Application-Layer/HTTPS.md)-based | Browser access |
| WireGuard | Modern crypto | High performance |

## Protocol Interactions
- [IPsec](../Protocols/Network-Layer/IPsec.md): L3 tunnel, transparent to apps
- [SSL-TLS](../Protocols/Security-Protocols/SSL-TLS.md): L7 tunnel, often browser-based
- WireGuard: UDP-based, minimal overhead
- OpenVPN: [SSL-TLS](../Protocols/Security-Protocols/SSL-TLS.md)-based, highly configurable

## Security Considerations
- Split tunneling risks (bypass corporate controls)
- VPN concentrator vulnerabilities
- DNS Leak exposes queries
- Kill Switch prevents IP exposure
- MFA essential for remote access

## Example
Employees use an IPsec VPN to access corporate resources. An attacker compromises a home router but cannot intercept VPN traffic due to encryption. However, Split Tunneling allows the employee to browse malicious sites outside the VPN.

## Links
- [IPsec](../Protocols/Network-Layer/IPsec.md) | [SSL-TLS](../Protocols/Security-Protocols/SSL-TLS.md) | WireGuard | OpenVPN
- Remote Access | Zero Trust Network Access
- DNS Leak | Kill Switch | Split Tunneling
- MFA | Certificate-Based Authentication
- Network Segmentation | SASE

---

#defense #vpn #encryption #tunnel #remote-access
