---
tags: [attack, arp, spoofing, mitm, layer2]
---

# ARP Spoofing

## Definition
**ARP Spoofing** sends falsified [ARP](../Protocols/Data-Link-Layer/ARP.md) messages to associate the attacker's MAC Address with another host's IP address.

## Key Points
- Exploits trust-based nature of [ARP](../Protocols/Data-Link-Layer/ARP.md)
- Gratuitous ARP used maliciously
- Enables [MITM Attack](MITM-Attack.md), DoS, or Session Hijacking
- Tools: Ettercap, BetterCAP, Cain & Abel

## Protocol Interactions
- Targets [ARP](../Protocols/Data-Link-Layer/ARP.md) at [OSI Model](../Models/OSI-Model.md) L2
- Affects all [IPv4](../Protocols/Network-Layer/IPv4.md) traffic on the LAN
- Can be combined with DNS Spoofing for greater impact

## Defense
- Dynamic ARP Inspection (DAI) on switches
- DHCP Snooping (required for DAI)
- Static ARP entries (impractical at scale)
- Port Security limits MAC addresses
- VLAN segmentation limits broadcast domain

## Example
On a corporate network, an attacker sends ARP replies claiming the default gateway's IP maps to their MAC. All outbound traffic flows through the attacker, who extracts credentials and injects malware.

## Links
- [ARP](../Protocols/Data-Link-Layer/ARP.md) | MAC Address | Gratuitous ARP
- [MITM Attack](MITM-Attack.md) | Session Hijacking | DoS
- Dynamic ARP Inspection | DHCP Snooping
- Ettercap | BetterCAP | Cain & Abel
- VLAN | Port Security | Network Segmentation

---

#attack #arp #spoofing #mitm #layer2
