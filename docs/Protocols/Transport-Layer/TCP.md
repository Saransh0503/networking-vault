---
tags: [protocol, transport-layer, tcp, reliable, connection-oriented]
---

# TCP

## Definition
**Transmission Control Protocol (TCP)** provides reliable, ordered, error-checked delivery of data streams. Connection-oriented.

## Key Points
- Three-way handshake: SYN → SYN-ACK → ACK
- Sequence numbers and acknowledgments
- Flow control (sliding window) and congestion control
- Connection termination: FIN/ACK four-way handshake

## Cybersecurity Relevance
- SYN Flood exhausts server resources (half-open connections)
- TCP RST Injection terminates connections
- TCP Sequence Prediction enables session hijacking
- Nmap uses TCP flags for OS fingerprinting
- TCP Wrappers provide access control

## Example
A [DDoS Attack](../../Attacks/DDoS-Attack.md) sends millions of SYN packets without completing the handshake. The server's SYN backlog fills, denying service to legitimate users.

## Links
- [UDP](UDP.md) (connectionless alternative)
- SYN Flood | TCP RST Injection | Session Hijacking
- [DDoS Attack](../../Attacks/DDoS-Attack.md) | Nmap
- Three-Way Handshake | TCP Wrappers
- [IPv4](../Network-Layer/IPv4.md) | [IPv6](../Network-Layer/IPv6.md) (network layer)
- [Firewall](../../Defenses/Firewall.md) (stateful inspection)
- [IDS-IPS](../../Defenses/IDS-IPS.md) (anomaly detection)

---

#protocol #transport-layer #tcp #reliable #connection-oriented
