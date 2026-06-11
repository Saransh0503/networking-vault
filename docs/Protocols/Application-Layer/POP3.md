---
tags: [protocol, application-layer, pop3, email, retrieval]
---

# POP3

## Definition
**Post Office Protocol v3 (POP3)** retrieves email from server to local client. Operates on port 110 (plain), 995 (POP3S).

## Key Points
- Downloads and typically deletes mail from server
- Offline access to downloaded messages
- Limited synchronization (one device focus)
- POP3S uses [SSL-TLS](../Security-Protocols/SSL-TLS.md) encryption

## Cybersecurity Relevance
- Plaintext POP3 exposes credentials and email content
- No server-side copy = data loss if device compromised
- Less secure than [IMAP](IMAP.md) for multi-device scenarios
- [MITM Attack](../../Attacks/MITM-Attack.md) can intercept unencrypted downloads

## Example
A user configures POP3 without encryption on public Wi-Fi. An attacker captures their email credentials and downloads all messages, including password reset emails.

## Links
- [SMTP](SMTP.md) (sending counterpart)
- [IMAP](IMAP.md) (alternative retrieval)
- [SSL-TLS](../Security-Protocols/SSL-TLS.md) (encryption layer)
- [MITM Attack](../../Attacks/MITM-Attack.md) | Sniffing
- Email Security

---

#protocol #application-layer #pop3 #email #retrieval
