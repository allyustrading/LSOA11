import { Hero, Section, Card } from '../components/Layout'
import heroImg from '../assets/hero-luxury.svg'
import forestImg from '../assets/forest-luxury.svg'
import donorImg from '../assets/donor-luxury.svg'

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Liuli Society of America"
        title="A refined philanthropic vision for ecological stewardship and long-term public good"
        text="Liuli Society of America is a nonprofit organization dedicated to protecting nature, advancing eco-conscious thinking, and supporting a more balanced relationship between community wellbeing and the natural environment. This donor-facing version presents the mission with greater elegance, clarity, and foundation-level credibility."
        image={heroImg}
        alt="Luxury donor-facing hero landscape"
      >
        <div className="hero-actions">
          <a href="#/about" className="button button-gold">Explore the mission</a>
          <a href="#/support" className="button button-light">Partner with us</a>
        </div>

        <div className="hero-points">
          <div className="point">
            <strong>Nature protection</strong>
            <span>Supporting a future defined by ecological care, stewardship, and preservation.</span>
          </div>
          <div className="point">
            <strong>Eco-conscious leadership</strong>
            <span>Encouraging values of sustainability, responsibility, and thoughtful daily living.</span>
          </div>
          <div className="point">
            <strong>Public-serving education</strong>
            <span>Translating environmental awareness into learning, civic engagement, and community value.</span>
          </div>
          <div className="point">
            <strong>Donor-ready vision</strong>
            <span>Presenting a mission with the clarity and dignity expected by foundations and major supporters.</span>
          </div>
        </div>
      </Hero>

      <Section
        eyebrow="A foundation-oriented mission"
        title="A philanthropic platform for nature, education, and enduring community impact"
        text="Liuli Society of America is positioned not simply as a nonprofit initiative, but as a long-term civic and educational platform—one that links ecological responsibility, public understanding, and community wellbeing through thoughtful stewardship."
      >
        <div className="grid-3">
          <Card>
            <h3>Environmental stewardship</h3>
            <p>We seek to strengthen public commitment to protecting the natural world through education, community awareness, and a culture of long-term responsibility.</p>
          </Card>
          <Card>
            <h3>Eco-conscious living</h3>
            <p>We encourage sustainable habits, reduced waste, and more mindful patterns of living that reflect care for both people and the environment.</p>
          </Card>
          <Card>
            <h3>Donor-facing public value</h3>
            <p>Our work is presented as mission-led, educational, and community-serving—designed to resonate with philanthropic supporters who prioritize lasting impact.</p>
          </Card>
        </div>

        <div className="feature-band">
          <div className="feature-media">
            <img src={forestImg} alt="Nature stewardship visual" />
          </div>
          <div className="feature-panel">
            <div className="eyebrow">A broader vision</div>
            <h2 className="section-title">Giving ecological values a more visible, more elegant public presence</h2>
            <p className="section-text">
              Liuli Society of America is designed to help people see environmental care
              not as an isolated issue, but as a civic, educational, and cultural responsibility.
              The mission is to inspire more thoughtful communities, more sustainable daily
              choices, and a deeper public respect for the natural world.
            </p>
            <a href="#/impact" className="button button-dark">View impact focus</a>
          </div>
        </div>

        <div className="feature-band">
          <div className="feature-panel">
            <div className="eyebrow">Donor and partner engagement</div>
            <h2 className="section-title">A more compelling invitation to support long-term change</h2>
            <p className="section-text">
              This version is built to appeal to philanthropic audiences seeking clarity of mission,
              institutional tone, and a credible framework for long-term environmental and educational impact.
            </p>
            <a href="#/support" className="button button-dark">Support the mission</a>
          </div>
          <div className="feature-media">
            <img src={donorImg} alt="Donor-facing support visual" />
          </div>
        </div>
      </Section>
    </>
  )
}
