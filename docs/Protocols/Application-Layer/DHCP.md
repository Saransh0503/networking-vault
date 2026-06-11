---
tags: [protocol, application-layer, dhcp, automation, network-config]
---

# DHCP

## Definition
**Dynamic Host Configuration Protocol (DHCP)** automatically assigns IP addresses and network configuration. Operates on UDP ports 67 (server), 68 (client).

## Key Points
- DORA process: Discover → Offer → Request → Acknowledge
- Leases IP addresses for configurable duration
- Provides subnet mask, gateway, [DNS](DNS.md) servers
- DHCPv6 for [IPv6](../Network-Layer/IPv6.md) networks

## Cybersecurity Relevance
- Rogue DHCP Server assigns attacker-controlled DNS/gateway
- DHCP Starvation exhausts IP pool (DoS)
- DHCP Snooping on switches prevents rogue servers
- Man-in-the-Middle via malicious gateway assignment

## Example
An attacker connects a rogue DHCP server to the network. Clients receive the attacker's IP as the default gateway, routing all traffic through the attacker's machine for [MITM Attack](../../Attacks/MITM-Attack.md).

## Links
- [DNS](DNS.md) (often provided by DHCP)
- [IPv4](../Network-Layer/IPv4.md) | [IPv6](../Network-Layer/IPv6.md) (address assignment)
- Rogue DHCP Server | DHCP Starvation | DHCP Snooping
- [MITM Attack](../../Attacks/MITM-Attack.md) | [ARP Spoofing](../../Attacks/ARP-Spoofing.md) (related layer 2 attacks)
- Network Access Control

---

#protocol #application-layer #dhcp #automation #network-config
