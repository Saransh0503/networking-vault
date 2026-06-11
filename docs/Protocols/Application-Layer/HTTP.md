---
tags: [protocol, application-layer, http, web, insecure]
---

# HTTP

## Definition
**Hypertext Transfer Protocol (HTTP)** is an application-layer protocol for transmitting hypermedia documents (web pages). Operates on port 80.

## Key Points
- Stateless protocol (each request independent)
- Methods: GET, POST, PUT, DELETE, PATCH
- Headers carry metadata (User-Agent, Cookie, Authorization)
- Version evolution: HTTP/1.0 → HTTP/1.1 → HTTP/2 → HTTP/3 ([QUIC](../Wireless-Modern/QUIC.md))

## Cybersecurity Relevance
- **Plaintext transmission** → easily intercepted
- [MITM Attack](../../Attacks/MITM-Attack.md) can read/modify HTTP traffic
- Session hijacking via stolen cookies
- XSS and SQL Injection delivered over HTTP
- Upgrade to [HTTPS](HTTPS.md) is mandatory for security

## Example
An attacker on public Wi-Fi uses Wireshark to capture HTTP traffic, extracting plaintext passwords from a login form. This is why [SSL-TLS](../Security-Protocols/SSL-TLS.md) encryption is essential.

## Links
- [HTTPS](HTTPS.md) (secure version)
- [SSL-TLS](../Security-Protocols/SSL-TLS.md) (encryption layer)
- [MITM Attack](../../Attacks/MITM-Attack.md) | XSS | SQL Injection
- [QUIC](../Wireless-Modern/QUIC.md) (HTTP/3 transport)
- [Firewall](../../Defenses/Firewall.md) (can block port 80)
- WAF (protects HTTP/HTTPS)

---

#protocol #application-layer #http #web #insecure
