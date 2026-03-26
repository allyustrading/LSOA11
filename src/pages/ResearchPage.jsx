import { PageBanner, Section, Card } from '../components/Layout'
import researchImg from '../assets/research-luxury.svg'

export default function ResearchPage() {
  return (
    <>
      <PageBanner
        eyebrow="Research"
        title="Research-informed learning for a more responsible ecological future"
        text="Liuli Society of America supports an approach that combines thoughtful inquiry, environmental education, and practical community relevance."
        image={researchImg}
        alt="Research luxury banner"
      />

      <Section
        eyebrow="Research direction"
        title="A calm and credible platform for inquiry, learning, and collaboration"
        text="This section is intended to communicate seriousness, institutional readiness, and an enduring commitment to public-serving knowledge."
      >
        <div className="grid-2">
          <Card>
            <h3>Educational relevance</h3>
            <p>Research helps communities better understand the environmental consequences of daily choices and the value of long-term stewardship.</p>
          </Card>
          <Card>
            <h3>Strategic innovation</h3>
            <p>Innovation is framed as responsible exploration in support of education, public awareness, and mission-aligned community initiatives.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
