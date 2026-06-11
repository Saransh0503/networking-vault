---
tags: [protocol, application-layer, imap, email, retrieval, sync]
---

# IMAP

## Definition
**Internet Message Access Protocol (IMAP)** synchronizes email across multiple devices while keeping messages on the server. Port 143 (plain), 993 (IMAPS).

## Key Points
- Server-centric (mail stays on server)
- Supports folders, flags, and search
- IDLE push notifications (IMAP4)
- IMAPS uses [SSL-TLS](../Security-Protocols/SSL-TLS.md) on port 993

## Cybersecurity Relevance
- Plaintext IMAP exposes credentials
- [MITM Attack](../../Attacks/MITM-Attack.md) can intercept synchronization
- Server compromise exposes all email
- Brute Force attacks against IMAP login
- IMAP Injection in web applications

## Example
An attacker uses credential stuffing against IMAP (no rate limiting) to access corporate email, then searches for "password" or "invoice" to find sensitive data.

## Links
- [SMTP](SMTP.md) (sending)
- [POP3](POP3.md) (alternative retrieval)
- [SSL-TLS](../Security-Protocols/SSL-TLS.md) | STARTTLS
- [MITM Attack](../../Attacks/MITM-Attack.md) | Brute Force | Credential Stuffing
- Email Security

---

#protocol #application-layer #imap #email #retrieval #sync
