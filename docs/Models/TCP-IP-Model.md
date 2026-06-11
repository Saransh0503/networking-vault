---
tags: [model, tcpip, networking, fundamental]
---

# TCP-IP Model

## Definition
The **TCP/IP model** is a practical, 4-layer framework that predates OSI and forms the foundation of modern internet architecture.

## Key Points
| Layer | Name | Maps to OSI | Key Protocols |
|-------|------|-------------|---------------|
| 4 | Application | L5-L7 | [HTTP](../Protocols/Application-Layer/HTTP.md), [DNS](../Protocols/Application-Layer/DNS.md), [SSH](../Protocols/Application-Layer/SSH.md) |
| 3 | Transport | L4 | [TCP](../Protocols/Transport-Layer/TCP.md), [UDP](../Protocols/Transport-Layer/UDP.md) |
| 2 | Internet | L3 | [IPv4](../Protocols/Network-Layer/IPv4.md), [IPv6](../Protocols/Network-Layer/IPv6.md), [ICMP](../Protocols/Network-Layer/ICMP.md) |
| 1 | Network Access | L1-L2 | [Ethernet](../Protocols/Data-Link-Layer/Ethernet.md), [ARP](../Protocols/Data-Link-Layer/ARP.md), Wi-Fi |

## Cybersecurity Relevance
- More practical than OSI for real-world troubleshooting
- [TCP](../Protocols/Transport-Layer/TCP.md) handshake vulnerabilities (SYN Flood)
- [IPsec](../Protocols/Network-Layer/IPsec.md) operates at Internet layer providing VPN capabilities

## Example
When diagnosing a connection issue, you check: physical cable (L1) → IP address (L2) → port open (L3) → application responding (L4).

## Links
- [OSI Model](OSI-Model.md) (conceptual counterpart)
- [TCP](../Protocols/Transport-Layer/TCP.md) | [UDP](../Protocols/Transport-Layer/UDP.md) | [IPv4](../Protocols/Network-Layer/IPv4.md) | [IPv6](../Protocols/Network-Layer/IPv6.md)
- [IPsec](../Protocols/Network-Layer/IPsec.md) | [VPN](../Defenses/VPN.md)
- SYN Flood (TCP layer attack)

---

#model #tcpip #networking #fundamental
