import { PageBanner, Section, Card } from '../components/Layout'
import aboutImg from '../assets/about-luxury.svg'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About"
        title="A nonprofit institution dedicated to ecological care, public learning, and long-term civic value"
        text="Liuli Society of America exists to advance environmental responsibility, eco-conscious thinking, wellness education, and community-centered support through a mission designed for public good and philanthropic trust."
        image={aboutImg}
        alt="About luxury foundation banner"
      />

      <Section
        eyebrow="Institutional identity"
        title="Why Liuli Society of America exists"
        text="This page is designed to explain the organization in language that is clear, dignified, and aligned with donor, foundation, and public-serving expectations."
      >
        <div className="grid-2">
          <Card>
            <h3>Mission</h3>
            <p>Our mission is to promote ecological stewardship, sustainable thinking, and healthier forms of community life through education, public awareness, and thoughtful action.</p>
          </Card>
          <Card>
            <h3>Vision</h3>
            <p>We envision communities that are more environmentally responsible, more civically engaged, and more deeply connected to the long-term wellbeing of both people and the natural world.</p>
          </Card>
          <Card>
            <h3>Why the nonprofit model matters</h3>
            <p>The nonprofit structure allows the mission to remain centered on public value, education, and stewardship rather than commercial activity or short-term promotion.</p>
          </Card>
          <Card>
            <h3>Why donor confidence matters</h3>
            <p>Strong philanthropic support can help transform environmental awareness into more durable educational programs, public initiatives, and lasting community benefit.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
