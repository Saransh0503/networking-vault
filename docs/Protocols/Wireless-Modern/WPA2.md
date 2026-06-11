---
tags: [protocol, wireless, wpa2, wifi, encryption, psk]
---

# WPA2

## Definition
**Wi-Fi Protected Access 2 (WPA2)** secures wireless networks using AES-CCMP encryption. Replaced WEP and WPA.

## Key Points
- Personal mode: PSK (Pre-Shared Key)
- Enterprise mode: 802.1X + RADIUS
- 4-way handshake for key derivation
- CCMP (Counter Mode with Cipher Block Chaining Message Authentication Code Protocol)

## Cybersecurity Relevance
- KRACK Attack (Key Reinstallation Attack, 2017)
- WPS Pin brute force bypasses strong PSK
- PMKID capture enables offline PSK cracking
- Aircrack-ng suite for auditing
- Being replaced by [WPA3](WPA3.md)

## Example
An attacker captures the WPA2 4-way handshake and uses `hashcat` with a GPU to brute-force the PSK from a weak password dictionary, gaining network access.

## Links
- [WPA3](WPA3.md) (successor)
- WEP | WPA (predecessors)
- KRACK Attack | WPS Attack | PMKID
- 802.1X | RADIUS | EAP
- Aircrack-ng | Wi-Fi Auditing
- Wireless Security

---

#protocol #wireless #wpa2 #wifi #encryption #psk
