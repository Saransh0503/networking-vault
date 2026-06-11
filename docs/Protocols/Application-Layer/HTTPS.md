---
tags: [protocol, application-layer, https, secure, encryption]
---

# HTTPS

## Definition
**Hypertext Transfer Protocol Secure (HTTPS)** is HTTP encrypted with [SSL-TLS](../Security-Protocols/SSL-TLS.md). Operates on port 443.

## Key Points
- Encrypts entire HTTP communication
- Requires X.509 certificate from Certificate Authority
- HSTS header forces HTTPS connections
- HTTP/2 and HTTP/3 require HTTPS in practice
- Certificate pinning prevents rogue CA attacks

## Cybersecurity Relevance
- Prevents [MITM Attack](../../Attacks/MITM-Attack.md) eavesdropping
- Protects against session hijacking
- SSL Stripping downgrades HTTPS to HTTP
- Certificate validation failures cause browser warnings
- Let's Encrypt provides free certificates

## Example
A banking website uses HTTPS with EV certificate. An attacker attempts SSL Stripping but fails because HSTS is enabled and the site is on the HSTS preload list.

## Links
- [HTTP](HTTP.md) (unencrypted counterpart)
- [SSL-TLS](../Security-Protocols/SSL-TLS.md) (underlying encryption)
- [MITM Attack](../../Attacks/MITM-Attack.md) | SSL Stripping
- Certificate Authority | Public Key Infrastructure
- HSTS | Let's Encrypt
- [Firewall](../../Defenses/Firewall.md) (port 443 filtering)
- WAF (application-layer protection)

---

#protocol #application-layer #https #secure #encryption
