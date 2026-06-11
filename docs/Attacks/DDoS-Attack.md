---
tags: [attack, ddos, availability, flooding, amplification]
---

# DDoS Attack

## Definition
**Distributed Denial of Service (DDoS)** overwhelms a target with traffic from multiple sources, exhausting resources and denying service.

## Key Points
- **Volumetric**: Saturate bandwidth (UDP Flood, ICMP Flood)
- **Protocol**: Exhaust state tables (SYN Flood, Ping of Death)
- **Application**: Target layer 7 (HTTP Flood, Slowloris)
- **Amplification**: Small request → large response (DNS Amplification, NTP Amplification)

## Protocol Interactions
| Protocol | Attack Vector |
|----------|--------------|
| [TCP](../Protocols/Transport-Layer/TCP.md) | SYN Flood, connection exhaustion |
| [UDP](../Protocols/Transport-Layer/UDP.md) | UDP Flood, amplification |
| [ICMP](../Protocols/Network-Layer/ICMP.md) | Ping Flood, Smurf Attack |
| [DNS](../Protocols/Application-Layer/DNS.md) | DNS Amplification, NXDOMAIN floods |
| [NTP](../Protocols/Application-Layer/NTP.md) | NTP Amplification (monlist) |
| [HTTP](../Protocols/Application-Layer/HTTP.md) | HTTP Flood, Slowloris |
| [SNMP](../Protocols/Application-Layer/SNMP.md) | SNMP Amplification |
| SSDP | SSDP Reflection |

## Defense
- [Firewall](../Defenses/Firewall.md) (rate limiting, ACLs)
- [IDS-IPS](../Defenses/IDS-IPS.md) (anomaly detection)
- CDN / DDoS Mitigation (Cloudflare, Akamai)
- BGP Blackholing (sacrifice availability for stability)
- Scrubbing Centers

## Example
The 2016 Mirai Botnet DDoS attack on Dyn used 100,000+ IoT devices, generating 1.2 Tbps and taking down Twitter, Netflix, and Reddit.

## Links
- DoS | Botnet | Mirai
- SYN Flood | UDP Flood | HTTP Flood
- DNS Amplification | NTP Amplification
- [Firewall](../Defenses/Firewall.md) | [IDS-IPS](../Defenses/IDS-IPS.md) | CDN
- BGP Blackholing | Scrubbing Center

---

#attack #ddos #availability #flooding #amplification
