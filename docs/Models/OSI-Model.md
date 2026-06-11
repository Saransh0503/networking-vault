---
tags: [model, osi, networking, fundamental]
---

# OSI Model

## Definition
The **Open Systems Interconnection (OSI) model** is a conceptual framework that standardizes network communication into seven distinct layers, each with specific functions and protocols.

## Key Points
| Layer | Name         | Function             | Example Protocols                       |
| ----- | ------------ | -------------------- | --------------------------------------- |
| 7     | Application  | User interface       | [HTTP](../Protocols/Application-Layer/HTTP.md), [FTP](../Protocols/Application-Layer/FTP.md), [SMTP](../Protocols/Application-Layer/SMTP.md), [DNS](../Protocols/Application-Layer/DNS.md)    |
| 6     | Presentation | Data formatting      | SSL/TLS encryption                      |
| 5     | Session      | Session management   | NetBIOS                                 |
| 4     | Transport    | End-to-end delivery  | [TCP](../Protocols/Transport-Layer/TCP.md), [UDP](../Protocols/Transport-Layer/UDP.md)                        |
| 3     | Network      | Routing & addressing | [IPv4](../Protocols/Network-Layer/IPv4.md), [IPv6](../Protocols/Network-Layer/IPv6.md), [ICMP](../Protocols/Network-Layer/ICMP.md), [IPsec](../Protocols/Network-Layer/IPsec.md) |
| 2     | Data Link    | Frame transmission   | [Ethernet](../Protocols/Data-Link-Layer/Ethernet.md), [ARP](../Protocols/Data-Link-Layer/ARP.md)                   |
| 1     | Physical     | Bit transmission     | Cables, Wi-Fi radio                     |

## Cybersecurity Relevance
- **Layer-specific attacks**: Each layer has unique vulnerabilities
- **Defense in depth**: Security controls at every layer
- [MITM Attack](../Attacks/MITM-Attack.md) often operates at multiple layers simultaneously

## Example
A web request traverses all layers: browser (L7) → TCP (L4) → IP (L3) → Ethernet (L2) → Wi-Fi (L1). A firewall may inspect at L3-L4, while a WAF inspects at L7.

## Links
- [TCP-IP Model](TCP-IP-Model.md) (alternative 4-layer model)
- [TCP](../Protocols/Transport-Layer/TCP.md) | [UDP](../Protocols/Transport-Layer/UDP.md) | [IPv4](../Protocols/Network-Layer/IPv4.md) | [Ethernet](../Protocols/Data-Link-Layer/Ethernet.md)
- [Firewall](../Defenses/Firewall.md) (operates at multiple layers)
- [IDS-IPS](../Defenses/IDS-IPS.md) (can inspect multiple layers)

---

#model #osi #networking #fundamental
