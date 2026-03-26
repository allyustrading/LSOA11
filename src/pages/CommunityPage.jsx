import { PageBanner, Section, Card } from '../components/Layout'
import forestImg from '../assets/forest-luxury.svg'

export default function CommunityPage() {
  return (
    <>
      <PageBanner
        eyebrow="Community"
        title="A community mission built around participation, dignity, and shared stewardship"
        text="Liuli Society of America aims to foster public learning, volunteer engagement, and mission-aligned partnerships that make environmental responsibility more visible and more actionable."
        image={forestImg}
        alt="Community luxury banner"
      />

      <Section
        eyebrow="Community engagement"
        title="Making ecological responsibility more human, local, and shared"
        text="This page demonstrates how community life and environmental care can be linked through public learning, partnership, and long-term civic participation."
      >
        <div className="grid-3">
          <Card>
            <h3>Public education</h3>
            <p>Events, workshops, and outreach that make sustainability and environmental stewardship easier to understand.</p>
          </Card>
          <Card>
            <h3>Volunteer pathways</h3>
            <p>Mission-aligned opportunities for people who want to contribute time, expertise, and care to a larger public purpose.</p>
          </Card>
          <Card>
            <h3>Civic partnerships</h3>
            <p>Collaborations with schools, nonprofits, community groups, and institutional partners who share the mission.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
