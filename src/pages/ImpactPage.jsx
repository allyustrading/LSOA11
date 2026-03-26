import { PageBanner, Section, Card } from '../components/Layout'
import forestImg from '../assets/forest-luxury.svg'

export default function ImpactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Impact"
        title="An impact framework centered on stewardship, education, and long-term environmental value"
        text="Liuli Society of America presents its work through impact areas that show how ecological responsibility, public education, and donor support can reinforce one another."
        image={forestImg}
        alt="Impact luxury forest banner"
      />

      <Section
        eyebrow="Impact priorities"
        title="Where philanthropic support can create meaningful public benefit"
        text="These themes are designed to communicate not only what the organization values, but where donor partnership can help produce visible and lasting results."
      >
        <div className="grid-3">
          <Card>
            <h3>Environmental awareness</h3>
            <p>Advancing public understanding of ecological care, conservation, and long-term stewardship responsibilities.</p>
          </Card>
          <Card>
            <h3>Sustainable living education</h3>
            <p>Encouraging more responsible daily habits, cleaner living practices, and a stronger culture of environmental responsibility.</p>
          </Card>
          <Card>
            <h3>Community resilience</h3>
            <p>Supporting programs and partnerships that help communities become more informed, more connected, and more prepared for long-term environmental challenges.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
