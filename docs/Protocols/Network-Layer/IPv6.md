---
tags: [protocol, network-layer, ipv6, addressing, modern]
---

# IPv6

## Definition
**Internet Protocol version 6 (IPv6)** is the successor to [IPv4](IPv4.md) with 128-bit addresses (340 undecillion).

## Key Points
- Hexadecimal format (e.g., 2001:0db8::1)
- Built-in [IPsec](IPsec.md) support (mandatory, not always enabled)
- No broadcast (uses multicast and anycast)
- Auto-configuration (SLAAC)
- Larger header but simpler structure

## Cybersecurity Relevance
- IPv6 Tunneling bypasses [IPv4](IPv4.md)-only [Firewall](../../Defenses/Firewall.md) rules
- NDP (Neighbor Discovery Protocol) replaces [ARP](../Data-Link-Layer/ARP.md) but has similar spoofing risks
- IPv6 Extension Headers can evade [IDS-IPS](../../Defenses/IDS-IPS.md)
- Dual-stack networks increase attack surface
- Many admins lack IPv6 security expertise

## Example
A corporate network monitors IPv4 traffic but ignores IPv6. An attacker uses IPv6 tunneling to exfiltrate data undetected because the IPv6 [Firewall](../../Defenses/Firewall.md) rules are default-allow.

## Links
- [IPv4](IPv4.md) (predecessor)
- [IPsec](IPsec.md) (integrated security)
- NDP | SLAAC | IPv6 Tunneling
- [ARP](../Data-Link-Layer/ARP.md) (IPv4 counterpart, replaced by NDP)
- [Firewall](../../Defenses/Firewall.md) (IPv6 rule management)
- [IDS-IPS](../../Defenses/IDS-IPS.md) (extension header handling)

---

#protocol #network-layer #ipv6 #addressing #modern
