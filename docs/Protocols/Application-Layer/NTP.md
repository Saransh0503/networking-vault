---
tags: [protocol, application-layer, ntp, time, synchronization]
---

# NTP

## Definition
**Network Time Protocol (NTP)** synchronizes computer clocks over packet-switched networks. Operates on UDP port 123.

## Key Points
- Stratum levels (0 = atomic clock, 1-15 = servers)
- NTP pool project for public servers
- Critical for TLS certificate validation
- PTP (Precision Time Protocol) for microsecond accuracy

## Cybersecurity Relevance
- NTP Amplification used in [DDoS Attack](../../Attacks/DDoS-Attack.md) (monlist command)
- Time skew can cause TLS certificate validation failures
- NTP Spoofing affects log timestamps and forensics
- Krack Attack exploited time synchronization

## Example
An attacker sends spoofed NTP monlist requests to public servers with the victim's IP as source. The 556x amplification overwhelms the victim's bandwidth.

## Links
- [DDoS Attack](../../Attacks/DDoS-Attack.md) (amplification vector)
- TLS | Certificate Validation
- Digital Forensics (timestamp integrity)
- Network Hardening (disable monlist)
- [UDP](../Transport-Layer/UDP.md) (transport protocol)

---

#protocol #application-layer #ntp #time #synchronization
