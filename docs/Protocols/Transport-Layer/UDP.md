---
tags: [protocol, transport-layer, udp, connectionless, fast]
---

# UDP

## Definition
**User Datagram Protocol (UDP)** provides connectionless, unreliable datagram delivery. No handshake, no guaranteed delivery.

## Key Points
- No connection setup overhead
- No congestion control
- Checksum for error detection (optional in IPv4)
- Used for real-time applications

## Cybersecurity Relevance
- UDP Flood [DDoS Attack](../../Attacks/DDoS-Attack.md) (amplification possible)
- [DNS](../Application-Layer/DNS.md) amplification via UDP
- NTP Amplification via UDP
- SSDP Reflection attacks
- Harder to filter than TCP (stateless)
- [QUIC](../Wireless-Modern/QUIC.md) built on UDP for HTTP/3

## Example
An attacker sends 1 Gbps of UDP packets to random ports on a web server. The server wastes resources processing and rejecting them, degrading legitimate TCP service.

## Links
- [TCP](TCP.md) (reliable counterpart)
- [DNS](../Application-Layer/DNS.md) | [NTP](../Application-Layer/NTP.md) | [DHCP](../Application-Layer/DHCP.md) | [SNMP](../Application-Layer/SNMP.md) (UDP-based)
- [DDoS Attack](../../Attacks/DDoS-Attack.md) | UDP Flood | Amplification Attack
- [QUIC](../Wireless-Modern/QUIC.md) (built on UDP)
- [Firewall](../../Defenses/Firewall.md) (stateless UDP filtering challenges)
- [IDS-IPS](../../Defenses/IDS-IPS.md)

---

#protocol #transport-layer #udp #connectionless #fast
