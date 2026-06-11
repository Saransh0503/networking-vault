---
tags: [defense, zero-trust, architecture, identity, never-trust]
---

# Zero Trust

## Definition
**Zero Trust** assumes breach and verifies every access request regardless of location or network perimeter.

## Principles
1. **Never trust, always verify**
2. **Assume breach** (perimeter is dead)
3. **Least privilege access**
4. **Verify explicitly** (identity + device health)

## Protocol Interactions
- TLS everywhere (encrypt all communications)
- MFA for all access
- Device Posture checks before network access
- Microsegmentation limits lateral movement
- SIEM for continuous monitoring

## Architecture
- SDP (Software-Defined Perimeter)
- ZTN (Zero Trust Network)
- ZTA (Zero Trust Architecture)
- SASE (Secure Access Service Edge)

## Example
A developer tries to access a production database. Even though they're on the corporate network, Zero Trust requires MFA, device certificate, and just-in-time approval. The request is denied without proper authorization.

## Links
- [VPN](VPN.md) (being replaced by ZTNA)
- MFA | Identity Management | PAM
- Microsegmentation | SDP | SASE
- SIEM | SOAR | XDR
- Network Segmentation | Least Privilege
- BeyondCorp | Google Zero Trust

---

#defense #zero-trust #architecture #identity #never-trust
