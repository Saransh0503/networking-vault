---
tags: [protocol, application-layer, smtp, email, messaging]
---

# SMTP

## Definition
**Simple Mail Transfer Protocol (SMTP)** sends email between servers. Operates on port 25 (unencrypted), 587 (submission), 465 (SMTPS).

## Key Points
- Push protocol (sends mail to server)
- Uses [DNS](DNS.md) MX records to find mail servers
- Supports authentication (AUTH LOGIN/PLAIN)
- STARTTLS upgrades plaintext to encrypted

## Cybersecurity Relevance
- Email Spoofing without SPF, DKIM, DMARC
- Open relays exploited for spam
- Phishing attacks delivered via SMTP
- STARTTLS Downgrade attacks
- SMTP Injection in web applications

## Example
An attacker spoofs a CEO's email address (no DMARC policy) and sends wire transfer instructions to finance. The email passes basic checks because the domain lacks authentication records.

## Links
- [POP3](POP3.md) | [IMAP](IMAP.md) (retrieval protocols)
- [DNS](DNS.md) (MX records)
- SPF | DKIM | DMARC (email authentication)
- Phishing | Email Spoofing | SMTP Injection
- STARTTLS | [SSL-TLS](../Security-Protocols/SSL-TLS.md)
- [Firewall](../../Defenses/Firewall.md) (port 25 blocking for clients)

---

#protocol #application-layer #smtp #email #messaging
