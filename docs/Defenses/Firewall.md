---
tags: [defense, firewall, perimeter, acl, filtering]
---

# Firewall

## Definition
A **Firewall** controls network traffic based on predetermined security rules, operating at multiple [OSI Model](../Models/OSI-Model.md) layers.

## Types
| Type | Layer | Function |
|------|-------|----------|
| Packet Filter | L3-L4 | IP/port-based ACLs |
| Stateful Inspection | L3-L4 | Tracks connection state |
| Application (WAF) | L7 | HTTP/HTTPS inspection |
| Next-Gen (NGFW) | L3-L7 | App-aware, IPS, threat intel |
| Proxy | L7 | Intermediary for protocols |

## Protocol Interactions
- [TCP](../Protocols/Transport-Layer/TCP.md)/[UDP](../Protocols/Transport-Layer/UDP.md): Port-based rules
- IP: Source/destination filtering
- [ICMP](../Protocols/Network-Layer/ICMP.md): Often blocked (but breaks Path MTU)
- [HTTP](../Protocols/Application-Layer/HTTP.md)/[HTTPS](../Protocols/Application-Layer/HTTPS.md): WAF inspection, SSL decryption
- [DNS](../Protocols/Application-Layer/DNS.md): Filtering malicious domains

## Limitations
- Encrypted traffic (TLS, [QUIC](../Protocols/Wireless-Modern/QUIC.md)) hard to inspect
- DDoS volumetric attacks exceed capacity
- Insider threats bypass perimeter
- Misconfiguration common

## Example
A Next-Gen Firewall blocks outbound [DNS](../Protocols/Application-Layer/DNS.md) to anything except the internal resolver, preventing DNS Tunneling data exfiltration.

## Links
- [IDS-IPS](IDS-IPS.md) | WAF | NGFW
- Network Segmentation | [Zero Trust](Zero-Trust.md)
- DDoS Mitigation | [VPN](VPN.md)
- [OSI Model](../Models/OSI-Model.md) | [TCP-IP Model](../Models/TCP-IP-Model.md)
- Rule Management | Firewall Auditing

---

#defense #firewall #perimeter #acl #filtering
