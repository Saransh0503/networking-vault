---
tags: [protocol, network-layer, icmp, diagnostic, control]
---

# ICMP

## Definition
**Internet Control Message Protocol (ICMP)** reports errors and operational information for IP networks.

## Key Points
- Type and Code fields define message purpose
- Common types: Echo Request/Reply (ping), Destination Unreachable, Time Exceeded
- ICMP Redirect can modify routing tables
- Part of [IPv4](IPv4.md) and [IPv6](IPv6.md) (ICMPv6)

## Cybersecurity Relevance
- Ping Flood [DDoS Attack](../../Attacks/DDoS-Attack.md)
- Smurf Attack (ICMP echo to broadcast)
- ICMP Tunneling (covert channel)
- OS Fingerprinting via ICMP behavior
- Often blocked by [Firewall](../../Defenses/Firewall.md) (but breaks Path MTU Discovery)

## Example
An attacker sends ICMP echo requests to a network's broadcast address with the victim's IP spoofed. All hosts reply to the victim, amplifying traffic (Smurf Attack).

## Links
- [IPv4](IPv4.md) | [IPv6](IPv6.md) (carried within)
- Ping | Traceroute (use ICMP)
- [DDoS Attack](../../Attacks/DDoS-Attack.md) | Smurf Attack | ICMP Tunneling
- [Firewall](../../Defenses/Firewall.md) (ICMP filtering policies)
- OS Fingerprinting

---

#protocol #network-layer #icmp #diagnostic #control
