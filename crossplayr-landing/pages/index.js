import Head from 'next/head'

export default function Home() {
  const FORM_ACTION = process.env.NEXT_PUBLIC_FORM_ENDPOINT || ''
  return (
    <>
      <Head>
        <title>CrossPlayr — One profile. Every gamer-tag.</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="page">
        <header className="nav">
          <div className="logo"><img src="/logo-wordmark.svg" alt="CrossPlayr" height="44" /></div>
          <nav><a href="#features">Features</a> <a href="#waitlist">Join</a></nav>
        </header>

        <section className="hero">
          <div className="hero-inner">
            <h1>One profile. Every gamer‑tag. All your clips.</h1>
            <p className="sub">A gamers-only network for clipping, LFG, and fast discovery — built to grow small streamers and unite teammates across PC & console.</p>

            <form id="waitlist" className="waitlist" action={FORM_ACTION} method="POST">
              <input name="email" type="email" placeholder="Email" required />
              <input name="gamertag" type="text" placeholder="Primary gamer-tag (optional)" />
              <button type="submit" className="btn">Join the waitlist</button>
            </form>

            <div className="trust">Featured grants for early creators • Gaming-only moderation • Rising slots for seed creators</div>
          </div>

          <div className="hero-carousel">
            <div className="clip">8s clutch — demo clip</div>
            <div className="clip">combo play — demo clip</div>
            <div className="clip">team wipe — demo clip</div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="feature">
            <h3>Unified Profile</h3>
            <p>One place for all your gamer-tags, socials, and clips.</p>
          </div>
          <div className="feature">
            <h3>Clip Discovery</h3>
            <p>Native short-clip feed auto-tagged by game & moment.</p>
          </div>
          <div className="feature">
            <h3>LFG & Teams</h3>
            <p>Find teammates by role, rank, and timezone — build rosters.</p>
          </div>
        </section>

        <footer className="footer">
          <div className="foot-links"><a href="/tos.html">Terms</a> • <a href="/privacy.html">Privacy</a> • <a href="/dmca.html">DMCA</a></div>
          <p className="copy">© CrossPlayr</p>
        </footer>
      </main>
    </>
  )
}
