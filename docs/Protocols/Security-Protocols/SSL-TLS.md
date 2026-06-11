---
tags: [protocol, security, ssl, tls, encryption, handshake]
---

# SSL-TLS

## Definition
**Secure Sockets Layer (SSL)** and successor **Transport Layer Security (TLS)** encrypt application-layer communications.

## Key Points
- Versions: SSL 2.0/3.0 (deprecated), TLS 1.0/1.1 (deprecated), TLS 1.2/1.3 (current)
- Handshake: negotiate cipher suite, exchange keys, authenticate server
- Certificate-based server authentication
- Perfect Forward Secrecy (ephemeral keys in TLS 1.3)

## Cybersecurity Relevance
- POODLE (SSL 3.0 padding oracle)
- Heartbleed (OpenSSL buffer over-read)
- BEAST | CRIME | BREACH (compression attacks)
- Certificate Pinning prevents rogue CA
- Let's Encrypt democratized HTTPS

## Example
A server still supports TLS 1.0 for legacy clients. An attacker exploits POODLE to decrypt session cookies, hijacking authenticated sessions.

## Links
- [HTTPS](../Application-Layer/HTTPS.md) | SMTPS | IMAPS (applications)
- Certificate Authority | Public Key Infrastructure
- Heartbleed | POODLE | BEAST | CRIME
- Perfect Forward Secrecy | Certificate Pinning
- [MITM Attack](../../Attacks/MITM-Attack.md) (prevented by proper TLS)
- SSL Stripping (downgrade attack)

---

#protocol #security #ssl #tls #encryption #handshake
