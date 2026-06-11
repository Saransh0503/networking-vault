---
tags: [protocol, network-layer, ipv4, addressing, legacy]
---

# IPv4

## Definition
**Internet Protocol version 4 (IPv4)** provides logical addressing and routing for packets. 32-bit addresses (~4.3 billion).

## Key Points
- Address format: dotted decimal (e.g., 192.168.1.1)
- Classes: A, B, C (unicast), D (multicast), E (reserved)
- NAT extends address space
- Header: version, IHL, TOS, length, ID, flags, TTL, protocol, checksum, src/dst IP

## Cybersecurity Relevance
- IP Spoofing (forge source address)
- Fragmentation Attack (overlapping fragments bypass IDS)
- TTL manipulation for OS fingerprinting
- Private IP Ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
- Exhaustion drove [IPv6](IPv6.md) adoption

## Example
An attacker sends packets with spoofed source IP to a DNS resolver. The resolver sends large responses to the victim (amplification), creating a [DDoS Attack](../../Attacks/DDoS-Attack.md).

## Links
- [IPv6](IPv6.md) (successor)
- [IPsec](IPsec.md) (security extension)
- [ICMP](ICMP.md) (companion protocol)
- NAT | CIDR | Subnetting
- IP Spoofing | Fragmentation Attack
- [OSI Model](../../Models/OSI-Model.md) L3 | [TCP-IP Model](../../Models/TCP-IP-Model.md) Internet layer
- [Firewall](../../Defenses/Firewall.md) (IP-based rules)
- [BGP](../Routing-Protocols/BGP.md) (routes IPv4 prefixes)

---

#protocol #network-layer #ipv4 #addressing #legacy
