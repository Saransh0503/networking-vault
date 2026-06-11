---
tags: [attack, dns, hijacking, redirection, phishing]
---

# DNS Hijacking

## Definition
**DNS Hijacking** redirects DNS queries to malicious servers, sending users to attacker-controlled sites.

## Types
- **Local**: Compromise host's DNS settings
- **Router**: Exploit router admin panel
- **ISP**: Government or malicious ISP redirection
- **Registrar**: Compromise domain registration account
- **Cache Poisoning**: Inject false records into resolver cache

## Protocol Interactions
- Exploits [DNS](../Protocols/Application-Layer/DNS.md) trust model
- Bypasses [HTTPS](../Protocols/Application-Layer/HTTPS.md) if users don't verify certificates
- Combined with Phishing for credential theft

## Defense
- DNSSEC (cryptographic validation)
- DNS over HTTPS (DoH) / DNS over TLS (DoT)
- DNS Filtering (block malicious domains)
- Registrar 2FA and lock domain
- Hosts file monitoring

## Example
The Sea Turtle APT compromised DNS registrars to redirect government and intelligence agency traffic, harvesting credentials from fake login pages.

## Links
- [DNS](../Protocols/Application-Layer/DNS.md) | DNSSEC | DNS over HTTPS
- Phishing | Credential Harvesting
- Cache Poisoning | Kaminsky Attack
- Pi-hole | DNS Filtering
- Sea Turtle | APT

---

#attack #dns #hijacking #redirection #phishing
