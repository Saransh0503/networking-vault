---
tags: [defense, ids, ips, detection, prevention, monitoring]
---

# IDS-IPS

## Definition
**Intrusion Detection System (IDS)** monitors for malicious activity. **Intrusion Prevention System (IPS)** adds automated blocking.

## Types
- **NIDS/NIPS**: Network-based (monitors traffic)
- **HIDS/HIPS**: Host-based (monitors endpoints)
- **Signature-based**: Known attack patterns
- **Anomaly-based**: Baseline deviation detection

## Protocol Interactions
| Protocol | Detection Capability |
|----------|-------------------|
| [TCP](../Protocols/Transport-Layer/TCP.md) | State tracking, flag anomalies |
| [UDP](../Protocols/Transport-Layer/UDP.md) | Stateless, harder to analyze |
| [HTTP](../Protocols/Application-Layer/HTTP.md) | WAF rules, payload inspection |
| [DNS](../Protocols/Application-Layer/DNS.md) | Tunneling detection, DGA domains |
| [ICMP](../Protocols/Network-Layer/ICMP.md) | Tunneling, covert channels |
| [SSL-TLS](../Protocols/Security-Protocols/SSL-TLS.md) | Decryption required for inspection |

## Deployment
- Inline (IPS) vs TAP/SPAN (IDS)
- SSL Inspection for encrypted traffic
- Integration with SIEM for correlation

## Example
An IPS detects a SQL Injection pattern in [HTTP](../Protocols/Application-Layer/HTTP.md) POST data to a login form. It drops the packet and alerts the SOC, preventing database compromise.

## Links
- [Firewall](Firewall.md) | WAF | SIEM
- Snort | Suricata | Zeek
- Signature-Based Detection | Anomaly Detection
- SSL Inspection | Encrypted Traffic Analysis
- SOC | Incident Response
- False Positive | False Negative

---

#defense #ids #ips #detection #prevention #monitoring
