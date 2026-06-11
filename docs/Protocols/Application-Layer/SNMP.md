---
tags: [protocol, application-layer, snmp, monitoring, management]
---

# SNMP

## Definition
**Simple Network Management Protocol (SNMP)** manages and monitors network devices. Versions: v1 (insecure), v2c (community strings), v3 (encrypted, authenticated).

## Key Points
- Manager polls agents for OID values
- MIB (Management Information Base) defines data structure
- Traps/Inform notifications for events
- Community strings = plaintext passwords (v1/v2c)

## Cybersecurity Relevance
- Default community strings "public"/"private" commonly left unchanged
- SNMP Enumeration reveals network topology
- v1/v2c plaintext exposure of device configuration
- SNMP Amplification used in [DDoS Attack](../../Attacks/DDoS-Attack.md)
- v3 provides encryption but complex to configure

## Example
An attacker scans for SNMP with community string "public" and discovers a switch's CAM table, revealing all connected devices and their MAC addresses for targeted attacks.

## Links
- Network Monitoring | SIEM
- [DDoS Attack](../../Attacks/DDoS-Attack.md) (amplification)
- Enumeration | Reconnaissance
- [Firewall](../../Defenses/Firewall.md) (SNMP filtering)
- Network Hardening

---

#protocol #application-layer #snmp #monitoring #management
