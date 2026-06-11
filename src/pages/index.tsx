import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const categories = [
  { label: 'maps of content', href: '/docs/category/maps-of-content', desc: 'High-level overviews and concept maps connecting networking ideas.' },
  { label: 'models', href: '/docs/category/models', desc: 'OSI, TCP/IP, and conceptual frameworks for understanding networks.' },
  { label: 'protocols', href: '/docs/category/protocols', desc: 'Application, transport, network, link, routing, security & wireless.' },
  { label: 'attacks', href: '/docs/category/attacks', desc: 'ARP spoofing, DDoS, MITM, DNS poisoning & offensive techniques.' },
  { label: 'defenses', href: '/docs/category/defenses', desc: 'Firewalls, IDS/IPS, VPNs, encryption, hardening & blue-team tools.' },
];

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="A comprehensive Zettelkasten knowledge base for computer networking and cybersecurity">
      <main className="hero-wrap">
        <div className="hero">
          <p className="kicker">open knowledge · zettelkasten</p>
          <h1 className="titanic">Networking<br />Vault</h1>
          <p className="hero-sub">
            A comprehensive Zettelkasten knowledge base for computer networking
            and cybersecurity — protocols, attacks, defenses, and conceptual
            models.
          </p>
        </div>

        <div className="content-grid">
          <div className="content-left">
            <figure className="fig">
              <pre>{`┌─────────────────────────────┐
│        NETWORK STACK         │
├─────────────────────────────┤
│  application  ·  HTTP/DNS   │
│  transport    ·  TCP/UDP    │
│  network      ·  IP/ICMP    │
│  data link    ·  Ethernet   │
│  physical     ·  bits/wire  │
└─────────────────────────────┘`}</pre>
              <figcaption>The OSI-inspired layers of this vault</figcaption>
            </figure>

            <figure className="fig">
              <pre>{`┌──────────────────────────────────────────┐
│      OSI MODEL    vs    TCP/IP          │
├──────────────────────────────────────────┤
│  Application ─┐                          │
│  Presentation ─┤── Application           │
│  Session     ─┘                          │
│  Transport       ── Transport            │
│  Network         ── Internet             │
│  Data Link       ── Network Access       │
│  Physical       ─┘                       │
└──────────────────────────────────────────┘`}</pre>
              <figcaption>How the seven OSI layers map to the four-layer TCP/IP model</figcaption>
            </figure>

            <figure className="fig">
              <pre>{`┌────────┬───────────────────────────────────────┐
│ PORT   │   SERVICE                           │
├────────┼───────────────────────────────────────┤
│  21    │   FTP — File Transfer                │
│  22    │   SSH — Secure Shell                  │
│  23    │   Telnet — Remote Login               │
│  25    │   SMTP — Mail Transfer                │
│  53    │   DNS — Name Resolution               │
│  80    │   HTTP — Web                         │
│  443   │   HTTPS — Web (TLS)                   │
│  445   │   SMB — Windows File Sharing          │
│  3306  │   MySQL — Database                    │
│  3389  │   RDP — Remote Desktop                │
│  8080  │   HTTP-alt — Proxy / Dev              │
└────────┴───────────────────────────────────────┘`}</pre>
              <figcaption>Common TCP/UDP ports every network engineer should know</figcaption>
            </figure>
          </div>

          <div className="content-right">
            <div className="lede dropcap">
              <p>
                A curated collection of networking knowledge organized as a
                Zettelkasten — every note is a self-contained atomic idea,
                linked to others through context and category.
              </p>
              <p>
                Browse by model, protocol, attack vector, or defense strategy.
                Each page connects to related concepts so you can follow the
                thread from physical cabling all the way to application-layer
                exploits.
              </p>
            </div>

            <section className="content-section">
              <h2 className="section-heading">Browse by Category</h2>
              <div className="cat-list">
                {categories.map((cat) => (
                  <Link key={cat.label} to={cat.href} className="cat-row">
                    <span className="cat-label">{cat.label}</span>
                    <span className="cat-desc">{cat.desc}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="content-section" style={{borderBottom: 'none'}}>
              <h2 className="section-heading">From the Vault</h2>
              <div className="stats">
                <div className="stat">
                  <span className="stat-num">46</span>
                  <span className="stat-label">atomic notes</span>
                </div>
                <div className="stat">
                  <span className="stat-num">7</span>
                  <span className="stat-label">protocol layers</span>
                </div>
                <div className="stat">
                  <span className="stat-num">5</span>
                  <span className="stat-label">category areas</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
