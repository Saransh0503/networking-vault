---
tags: [attack, mitm, interception, spoofing, layer2, layer3]
---

# MITM Attack

## Definition
**Man-in-the-Middle (MITM)** intercepts and potentially modifies communication between two parties without their knowledge.

## Protocol Interactions
| Layer | Protocol | Technique |
|-------|----------|-----------|
| L2 | [ARP](../Protocols/Data-Link-Layer/ARP.md) | [ARP Spoofing](ARP-Spoofing.md) |
| L2 | [Ethernet](../Protocols/Data-Link-Layer/Ethernet.md) | MAC Flooding |
| L3 | [DHCP](../Protocols/Application-Layer/DHCP.md) | Rogue DHCP Server |
| L3 | [DNS](../Protocols/Application-Layer/DNS.md) | DNS Spoofing |
| L3 | IP | IP Spoofing |
| L4 | [TCP](../Protocols/Transport-Layer/TCP.md) | TCP Session Hijacking |
| L7 | [HTTP](../Protocols/Application-Layer/HTTP.md) | SSL Stripping |
| L7 | [HTTPS](../Protocols/Application-Layer/HTTPS.md) | Fake certificates, SSL Downgrade |

## Defense
- [ARP](../Protocols/Data-Link-Layer/ARP.md): Dynamic ARP Inspection, static entries
- [DHCP](../Protocols/Application-Layer/DHCP.md): DHCP Snooping
- [DNS](../Protocols/Application-Layer/DNS.md): DNSSEC, DNS over HTTPS
- [HTTP](../Protocols/Application-Layer/HTTP.md): HSTS, certificate pinning
- General: [VPN](../Defenses/VPN.md), [Zero Trust](../Defenses/Zero-Trust.md), network segmentation

## Example
An attacker uses BetterCAP to perform [ARP Spoofing](ARP-Spoofing.md) on a coffee shop Wi-Fi. They intercept HTTP logins and use SSL Stripping to downgrade HTTPS sites, capturing credentials.

## Links
- [ARP Spoofing](ARP-Spoofing.md) | DNS Spoofing | SSL Stripping
- Rogue DHCP | IP Spoofing | Session Hijacking
- Dynamic ARP Inspection | DHCP Snooping | DNSSEC
- [VPN](../Defenses/VPN.md) | [Zero Trust](../Defenses/Zero-Trust.md) | Network Segmentation
- BetterCAP | Ettercap | Wireshark

---

#attack #mitm #interception #spoofing #layer2 #layer3
