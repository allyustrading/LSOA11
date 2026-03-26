import { PageBanner, Section, Card } from '../components/Layout'
import donorImg from '../assets/donor-luxury.svg'

export default function SupportPage() {
  return (
    <>
      <PageBanner
        eyebrow="Support"
        title="A philanthropic invitation to help shape a more sustainable and responsible future"
        text="Liuli Society of America welcomes support from donors, foundations, and mission-aligned institutions who believe that ecological stewardship and public education deserve long-term investment."
        image={donorImg}
        alt="Support donor-facing banner"
      />

      <Section
        eyebrow="Why support matters"
        title="Investing in public value, environmental awareness, and long-term mission growth"
        text="Support helps create the capacity for stronger educational programs, broader community engagement, and a more enduring contribution to ecological responsibility."
      >
        <div className="grid-2">
          <Card>
            <h3>Donor partnership</h3>
            <p>We welcome philanthropic relationships that value dignity of mission, institutional clarity, and long-term public benefit.</p>
          </Card>
          <Card>
            <h3>Giving readiness</h3>
            <p>Liuli Society of America is a registered U.S. nonprofit organization. Contributions may be tax-deductible to the extent permitted by law.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
