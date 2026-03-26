import { PageBanner, Section, Card } from '../components/Layout'
import contactImg from '../assets/contact-luxury.svg'

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Begin a conversation about partnership, philanthropy, or mission-aligned collaboration"
        text="We welcome inquiries from donors, foundations, institutions, educators, community leaders, and partners who share the vision of a more ecologically responsible future."
        image={contactImg}
        alt="Contact luxury banner"
      />

      <Section
        eyebrow="Contact"
        title="Open the next conversation"
        text="This page is intended to support serious, mission-aligned conversations with philanthropic and institutional audiences."
      >
        <div className="grid-2">
          <Card>
            <h3>Inquiry areas</h3>
            <p>Philanthropic support, foundation partnership, environmental education, research collaboration, community engagement, and strategic mission alignment.</p>
          </Card>
          <Card>
            <h3>Contact form preview</h3>
            <div className="form-grid">
              <input className="field" placeholder="Your name" />
              <input className="field" placeholder="Email address" />
              <input className="field" placeholder="Subject" />
              <textarea className="field" rows="6" placeholder="How would you like to connect with Liuli Society of America?" />
              <button className="button button-dark" style={{ width: 'fit-content' }}>Send inquiry</button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}
