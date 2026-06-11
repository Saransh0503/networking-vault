---
tags: [protocol, network-layer, ipsec, vpn, encryption, tunnel]
---

# IPsec

## Definition
**Internet Protocol Security (IPsec)** provides encrypted, authenticated communications at the IP layer.

## Key Points
- Two modes: Transport (end-to-end) and Tunnel ([VPN](../../Defenses/VPN.md))
- Two protocols: AH (authentication) and ESP (encryption+auth)
- IKE (Internet Key Exchange) manages keys
- Part of [IPv6](IPv6.md), optional for [IPv4](IPv4.md)

## Cybersecurity Relevance
- [VPN](../../Defenses/VPN.md) foundation (site-to-site and remote access)
- Protects against IP Spoofing and Sniffing
- IKE vulnerabilities (CVE-2018-5389)
- Complex configuration leads to misconfigurations
- WireGuard emerging as simpler alternative

## Example
A company uses IPsec VPN between branch offices. An attacker intercepts traffic but cannot decrypt it without the pre-shared key or certificate private key.

## Links
- [VPN](../../Defenses/VPN.md) | IKE | ISAKMP
- [IPv4](IPv4.md) | [IPv6](IPv6.md) (operates at L3)
- [SSL-TLS](../Security-Protocols/SSL-TLS.md) | WireGuard (alternative VPN tech)
- NAT Traversal (IPsec + NAT issues)
- [Firewall](../../Defenses/Firewall.md) (ESP/AH protocol handling)

---

#protocol #network-layer #ipsec #vpn #encryption #tunnel
