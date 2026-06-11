---
tags: [protocol, wireless, wpa3, wifi, modern, sae]
---

# WPA3

## Definition
**Wi-Fi Protected Access 3 (WPA3)** is the current Wi-Fi security standard, addressing WPA2 weaknesses.

## Key Points
- SAE (Simultaneous Authentication of Equals) replaces PSK
- Forward secrecy (session keys not derived from password)
- OWE (Opportunistic Wireless Encryption) for open networks
- 192-bit mode for sensitive environments
- Protected Management Frames (PMF) mandatory

## Cybersecurity Relevance
- Resistant to KRACK Attack and offline dictionary attacks
- Dragonblood vulnerabilities (side-channel attacks on SAE)
- Transition mode (WPA2 + WPA3) has downgrade risks
- Adoption slower than expected due to hardware requirements

## Example
Even if an attacker captures WPA3 traffic, they cannot perform offline cracking because SAE prevents passive observation of password-derived material.

## Links
- [WPA2](WPA2.md) (predecessor)
- SAE | Dragonblood | OWE
- KRACK Attack (mitigated)
- 802.11ax | Wi-Fi 6 (often bundled)
- Wireless Security | Network Hardening

---

#protocol #wireless #wpa3 #wifi #modern #sae
