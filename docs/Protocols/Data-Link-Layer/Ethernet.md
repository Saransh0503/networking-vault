---
tags: [protocol, data-link-layer, ethernet, lan, frame]
---

# Ethernet

## Definition
**Ethernet** is the dominant wired LAN technology defining frame format, addressing, and media access control.

## Key Points
- MAC Address (48-bit hardware address)
- CSMA/CD (carrier sense, collision detection)
- Frame: preamble, dest MAC, src MAC, type, payload, FCS
- Speeds: 10 Mbps → 100 Mbps → 1 Gbps → 10/40/100 Gbps

## Cybersecurity Relevance
- MAC Spoofing (change hardware address)
- MAC Flooding overwhelms switch CAM table
- Port Security limits MAC addresses per port
- VLAN segmentation at L2
- Spanning Tree Protocol vulnerabilities

## Example
An attacker floods a switch with random source MAC addresses. The CAM table fills, causing the switch to broadcast all traffic (fail-open), enabling Sniffing.

## Links
- [ARP](ARP.md) (resolves IP to MAC)
- MAC Address | MAC Spoofing | MAC Flooding
- VLAN | Port Security | Spanning Tree
- Switch | Network Interface Card
- [OSI Model](../../Models/OSI-Model.md) L2 | [TCP-IP Model](../../Models/TCP-IP-Model.md) Network Access

---

#protocol #data-link-layer #ethernet #lan #frame
