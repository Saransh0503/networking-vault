---
tags: [protocol, transport, quic, modern, google, http3]
---

# QUIC

## Definition
**Quick UDP Internet Connections (QUIC)** is a transport protocol built on [UDP](../Transport-Layer/UDP.md), developed by Google, standardized as HTTP/3.

## Key Points
- Multiplexed streams without [TCP](../Transport-Layer/TCP.md) head-of-line blocking
- Built-in TLS 1.3 encryption
- Connection migration (IP address changes without drop)
- 0-RTT or 1-RTT connection establishment
- Uses [UDP](../Transport-Layer/UDP.md) port 443 (or dedicated QUIC ports)

## Cybersecurity Relevance
- [Firewall](../../Defenses/Firewall.md) and [IDS-IPS](../../Defenses/IDS-IPS.md) visibility challenges (UDP + encryption)
- 0-RTT replay attack risks
- Connection Migration complicates IP-based tracking
- Google's dominance raises centralization concerns
- Network Management becomes harder

## Example
A corporate [Firewall](../../Defenses/Firewall.md) cannot inspect QUIC traffic because it's encrypted UDP that doesn't follow traditional TCP stream patterns. Shadow IT apps use QUIC to bypass DLP controls.

## Links
- [UDP](../Transport-Layer/UDP.md) (underlying transport)
- TLS 1.3 | [HTTP](../Application-Layer/HTTP.md) | [HTTPS](../Application-Layer/HTTPS.md)
- [HTTP](../Application-Layer/HTTP.md)/3 | Google
- [Firewall](../../Defenses/Firewall.md) (inspection challenges)
- [IDS-IPS](../../Defenses/IDS-IPS.md) (protocol analysis difficulty)
- 0-RTT | Connection Migration

---

#protocol #transport #quic #modern #google #http3
