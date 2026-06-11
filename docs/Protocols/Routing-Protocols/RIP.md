---
tags: [protocol, routing, rip, distance-vector, legacy]
---

# RIP

## Definition
**Routing Information Protocol (RIP)** is a distance-vector routing protocol using hop count as metric.

## Key Points
- Versions: RIP v1 (classful), RIP v2 (classless), RIPng (IPv6)
- Maximum 15 hops (16 = unreachable)
- Broadcasts (v1) or multicasts (v2) updates every 30s
- Simple but slow convergence

## Cybersecurity Relevance
- No authentication in RIP v1
- RIP v2 supports plaintext or MD5 auth (weak)
- Routing Table Poisoning injects false routes
- Split Horizon and Poison Reverse mitigate loops
- Replaced by [OSPF](OSPF.md) and EIGRP in enterprise

## Example
An attacker injects a RIP route for 0.0.0.0/0 (default route) with metric 1. Traffic is redirected through the attacker's router for [MITM Attack](../../Attacks/MITM-Attack.md).

## Links
- [OSPF](OSPF.md) | [BGP](BGP.md) | EIGRP (alternatives)
- Routing Table Poisoning | [MITM Attack](../../Attacks/MITM-Attack.md)
- Network Layer | [IPv4](../Network-Layer/IPv4.md) | [IPv6](../Network-Layer/IPv6.md)
- Router Security | Routing Protocol Authentication

---

#protocol #routing #rip #distance-vector #legacy
