---
tags: [protocol, routing, bgp, exterior, internet, critical]
---

# BGP

## Definition
**Border Gateway Protocol (BGP)** routes between autonomous systems (AS) — the routing protocol of the internet.

## Key Points
- Path-vector protocol (not distance or link-state)
- TCP port 179 for peering sessions
- Attributes: AS_PATH, NEXT_HOP, LOCAL_PREF, MED
- iBGP (internal) and eBGP (external)

## Cybersecurity Relevance
- BGP Hijacking (announce others' IP prefixes)
- No built-in authentication (relies on TCP MD5)
- Route Leak causes global outages
- RPKI and BGPsec provide cryptographic validation
- China Telecom 2018 incident: 2.5 hours of traffic interception

## Example
In 2008, Pakistan Telecom accidentally announced YouTube's /24 via BGP. The route propagated globally, blackholing YouTube for 2 hours. Malicious hijacking is equally easy without RPKI.

## Links
- [RIP](RIP.md) | [OSPF](OSPF.md) (interior protocols)
- BGP Hijacking | Route Leak | Prefix Hijacking
- RPKI | BGPsec | IRR
- Autonomous System | Peering
- [DDoS Attack](../../Attacks/DDoS-Attack.md) (BGP blackholing for mitigation)
- Internet Infrastructure

---

#protocol #routing #bgp #exterior #internet #critical
