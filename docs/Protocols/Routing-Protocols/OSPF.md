---
tags: [protocol, routing, ospf, link-state, interior]
---

# OSPF

## Definition
**Open Shortest Path First (OSPF)** is a link-state routing protocol for interior gateway routing.

## Key Points
- Version 2 for [IPv4](../Network-Layer/IPv4.md), OSPFv3 for [IPv6](../Network-Layer/IPv6.md)
- Uses Dijkstra's algorithm for shortest path
- Areas for hierarchical design (backbone = Area 0)
- LSA (Link State Advertisement) flooding

## Cybersecurity Relevance
- Supports MD5 and SHA authentication
- OSPF Spoofing injects false LSAs
- Virtual Link abuse for area bypass
- Stub Area design affects security boundaries
- More secure than [RIP](RIP.md) but complex to harden

## Example
An attacker gains access to an OSPF area and injects Type 7 LSAs into an NSSA. The routes propagate to other areas, redirecting traffic through compromised infrastructure.

## Links
- [RIP](RIP.md) | [BGP](BGP.md) | EIGRP
- OSPF Spoofing | LSA Injection
- [IPv4](../Network-Layer/IPv4.md) | [IPv6](../Network-Layer/IPv6.md) | Area Design
- Interior Gateway Protocol | Autonomous System
- Router Security

---

#protocol #routing #ospf #link-state #interior
