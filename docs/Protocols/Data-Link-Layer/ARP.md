---
tags: [protocol, data-link-layer, arp, resolution, lan]
---

# ARP

## Definition
**Address Resolution Protocol (ARP)** maps IP addresses to MAC addresses on local networks.

## Key Points
- ARP Request (broadcast): "Who has this IP?"
- ARP Reply (unicast): "I have this IP, here's my MAC"
- ARP cache stores mappings temporarily
- No authentication in ARP replies

## Cybersecurity Relevance
- [ARP Spoofing](../../Attacks/ARP-Spoofing.md) / Poisoning (false ARP replies)
- Enables [MITM Attack](../../Attacks/MITM-Attack.md) on LAN
- Dynamic ARP Inspection (DAI) prevents spoofing
- Gratuitous ARP used for both legitimate and malicious purposes
- RARP and NDP (IPv6 equivalent)

## Example
An attacker sends gratuitous ARP claiming the router's IP maps to their MAC. All LAN traffic flows through the attacker's machine, enabling [MITM Attack](../../Attacks/MITM-Attack.md) and credential harvesting.

## Links
- [Ethernet](Ethernet.md) | MAC Address
- [ARP Spoofing](../../Attacks/ARP-Spoofing.md) | [MITM Attack](../../Attacks/MITM-Attack.md) | Sniffing
- Dynamic ARP Inspection | DHCP Snooping
- [IPv4](../Network-Layer/IPv4.md) (ARP is IPv4 only)
- NDP (IPv6 equivalent)
- Switch (CAM table)

---

#protocol #data-link-layer #arp #resolution #lan
