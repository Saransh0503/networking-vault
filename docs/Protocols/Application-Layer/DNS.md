---
tags: [protocol, application-layer, dns, naming, critical]
---

# DNS

## Definition
**Domain Name System (DNS)** translates human-readable domain names to IP addresses. Operates on UDP port 53 (queries), TCP port 53 (zone transfers).

## Key Points
- Hierarchical distributed database
- Record types: A, AAAA, MX, NS, TXT, CNAME, PTR, SOA
- Caching at resolver, TTL controls cache duration
- DNSSEC provides cryptographic authentication

## Cybersecurity Relevance
- [DNS Hijacking](../../Attacks/DNS-Hijacking.md) redirects traffic to malicious sites
- DNS Tunneling exfiltrates data via DNS queries
- DNS Spoofing / Cache Poisoning (Kaminsky Attack)
- [DDoS Attack](../../Attacks/DDoS-Attack.md) amplification via DNS (NXDOMAIN floods)
- DNSSEC prevents spoofing but adoption is incomplete

## Example
An attacker compromises a router's DNS settings to redirect `bank.com` to a phishing site. Users see the correct URL but land on the attacker's server.

## Links
- DNSSEC (security extension)
- [DNS Hijacking](../../Attacks/DNS-Hijacking.md) | DNS Spoofing | DNS Tunneling
- [DDoS Attack](../../Attacks/DDoS-Attack.md) (amplification)
- [DHCP](DHCP.md) (often provides DNS servers)
- CDN (uses DNS for routing)
- [Firewall](../../Defenses/Firewall.md) (DNS filtering)
- Pi-hole (DNS-based ad/tracker blocking)

---

#protocol #application-layer #dns #naming #critical
