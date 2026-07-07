import { useState } from "react";
import "./styles/Work.css";
import CaseStudyModal, { ProjectData } from "./CaseStudyModal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects: ProjectData[] = [
  {
    name: "Full Stack Business Analysis",
    category: "City of Hamilton, Planning & Economic Development: AI Adoption Roadmap",
    tools: "BRD · RACI · SWOT · MoSCoW · Stakeholder Mgmt",
    problem: "Manual inquiry handling was creating delays and inconsistency amid rising development pressure and housing targets; an initial Archistar e-check AI pilot showed promise but surfaced data and integration gaps.",
    approach: "Stakeholder interviews, BRD, RACI, SWOT, MoSCoW, 6+ use cases, risk register; benchmarked against Kelowna, BC and Burlington, ON.",
    finding: "The Archistar pilot cut compliance-check turnaround but was constrained by data readiness and system integration limits. The real gap wasn't AI capability, it was organizational readiness.",
    outcome: "0-36 month roadmap presented to city stakeholders June 11, 2025, aligned to Hamilton's AI governance guidelines.",
    coverImage: "/images/case-studies/project-1-hamilton/cover photos.jpeg",
    storyTitle: "The Story: Turning a Pilot Into a Roadmap",
    story: (
      <>
        <p>The City of Hamilton's Planning and Economic Development Department had a problem that had nothing to do with technology at first glance: too many inquiries, not enough hours in the day. Developers and residents were reaching out through email, phone, in-person visits, and general inboxes, and none of it was consistent. Rising development pressure and aggressive housing targets meant the volume was only going to climb. Something had to give.</p>
        <p>The city had already taken a first step: a three-month pilot with Archistar's e-check platform, automating zoning compliance checks for low-density residential applications. It worked, in the sense that it produced accurate compliance reports faster than manual review. But it also exposed real problems, including data readiness gaps and system integration issues that no one had fully mapped out. That's the situation I stepped into, not "should the city use AI," but "here's a pilot with real results, good and bad, what's the responsible next move?"</p>
        <p>I started with the people, not the technology. Stakeholder interviews across the department surfaced where the actual friction lived: which inquiries ate the most time, where the Archistar pilot had helped, and where it had quietly created new problems. From there, I built out the full analytical toolkit a decision like this actually requires: a Business Requirements Document, a RACI matrix to remove ambiguity about ownership, a SWOT analysis to stress-test the idea honestly, and MoSCoW prioritization to force the department to say out loud what mattered most.</p>
        <p>I benchmarked against Kelowna, BC and Burlington, ON, two municipalities further along the same road, to understand what "good" actually looked like elsewhere before recommending anything for Hamilton. And because procurement and hands-on AI development were explicitly out of scope, the real deliverable had to be sharper than a generic "roadmap." It needed to be a business case grounded in what the pilot had already proven, aligned to Hamilton's own AI governance guidelines, with a phased 0-36 month path that acknowledged both the promise and the limitations already on the record.</p>
        <p>By June 11, 2025, that work became a presented roadmap, not a pitch for AI adoption in the abstract, but a grounded next step built on real pilot data, real stakeholder input, and real constraints.</p>
        <p>What this project taught me is something that shows up in almost every BA engagement: the hardest part usually isn't proving something could work. It's being honest about where it already didn't quite work, and building a plan that accounts for that instead of pretending it away.</p>
      </>
    ),
    screenshots: [
      "/images/case-studies/project-1-hamilton/cover photos.jpeg",
      "/images/case-studies/project-1-hamilton/1.jpeg",
      "/images/case-studies/project-1-hamilton/2.jpeg",
      "/images/case-studies/project-1-hamilton/3.png",
      "/images/case-studies/project-1-hamilton/4.png",
      "/images/case-studies/project-1-hamilton/5.png",
      "/images/case-studies/project-1-hamilton/6.png",
      "/images/case-studies/project-1-hamilton/7.png",
      "/images/case-studies/project-1-hamilton/8.png",
      "/images/case-studies/project-1-hamilton/9.png",
      "/images/case-studies/project-1-hamilton/10.jpeg",
      "/images/case-studies/project-1-hamilton/13.png",
      "/images/case-studies/project-1-hamilton/14.jpg",
      "/images/case-studies/project-1-hamilton/Screenshot 2026-07-06 195526.png",
      "/images/case-studies/project-1-hamilton/Screenshot 2026-07-06 195732.png",
      "/images/case-studies/project-1-hamilton/Screenshot 2026-07-06 195940.png"
    ],
    resources: [
      { label: "View Documents", url: "https://drive.google.com/drive/folders/1LXqNLQCYKu5fr4u_47ykGZrATnI812aH?usp=drive_link" }
    ]
  },
  {
    name: "Exploratory Data Analysis",
    category: "HEAD Analytics Competition: 3rd of 40 Teams",
    tools: "ArcGIS · Power BI · Spatial Analysis · Demographic Analysis",
    problem: "Identify service gaps across public infrastructure in Hamilton.",
    approach: "Assessed 800,000+ records from Hamilton's Open Data portal; initial analysis flagged consistent service gaps around public destinations, which narrowed the focus to 935 key assets (228 schools, 632 parks, 75 rec centers). Isolated root causes using four variables: distance-to-bus-stop tiers, walkability/transit/bikeability scores, Ward-level population impact, and 2016-2030 population growth trend.",
    finding: "19 schools, 57 parks, and 13 recreation centers were underserved, many over 10 km from the nearest bus stop, affecting roughly 150,000 residents concentrated in Wards 11, 12, 13, and 15. Bikeability scores for schools and recreation centers (around 29) far outpaced transit scores in the same categories (around 1-2), showing the real bottleneck wasn't infrastructure, it was transit access specifically. Hamilton's population is projected to grow 11.14% by 2030, meaning the gap will widen without intervention.",
    outcome: "3rd place out of 40 teams. Advanced through 3 competitive rounds, including an overnight turnaround on a brand-new problem statement, and delivered 6 city-ready recommendations.",
    coverImage: "/images/case-studies/project-2-head-analytics/HEAD_Competition_Team5_Poster_Hamilton_Transit_Access (1)_pages-to-jpg-0001.jpg",
    storyTitle: "The Story: Bridging the Transit Divide",
    story: (
      <>
        <p>Forty teams walked into the HEAD Analytics Competition. Most of them never made it to the stage.</p>
        <p>Our team, four of us thrown together at Mohawk College, picked a problem that sounded simple on paper: figure out where Hamilton's transit network was failing its residents. In practice, it meant wading through hundreds of thousands of records on roads, sidewalks, bus stops, schools, parks, and recreation centers, trying to find a pattern buried in the noise. Somewhere in that mess of coordinates and asset IDs was a story about real people: kids who couldn't safely walk to school, families without a park within reach, seniors cut off from recreation centers by a transit system that hadn't caught up with the city's growth.</p>
        <p>We built our first analysis the way most competition teams do: carefully, over weeks, with time to second-guess every chart. We mapped 935 public assets against bus stop proximity. We layered in walkability, transit, and bikeability scores. We modeled population growth out to 2030 and watched the accessibility gap widen with every year we projected forward. By the time we stood in front of our poster, we had a clear, defensible story: 19 underserved schools, 57 underserved parks, 13 underserved recreation centers, roughly 150,000 residents affected, concentrated hardest in Wards 11, 12, 13, and 15.</p>
        <p>That got us through the first cut. Twenty teams out of forty. Then eight out of twenty.</p>
        <p>And then the ground shifted. The eight finalist teams weren't asked to refine what we'd already built. We were handed a brand new problem statement and given 16 hours to turn it into a live presentation for the judges. No weeks of runway this time, just a single overnight sprint, working off the same instincts and tools we'd spent the earlier rounds sharpening: Power BI, spatial reasoning, the discipline of asking "who does this actually affect" before touching a chart.</p>
        <p>That 16-hour stretch is honestly the part of this project I'm proudest of. It's one thing to build a polished analysis with time to iterate. It's another to strip your process down to what actually matters, the fastest path from raw data to a decision-maker's next move, and execute it under a deadline that doesn't care how tired you are.</p>
        <p>We placed 3rd, out of forty teams, judged not just on the quality of a single analysis, but on whether we could adapt under pressure and still deliver something a city could act on.</p>
        <p>What stuck with me afterward wasn't the placement. It was the reminder that the best analysis isn't the one with the most charts. It's the one that survives contact with a deadline and still tells someone exactly what to do next.</p>
      </>
    ),
    screenshots: [
      "/images/case-studies/project-2-head-analytics/HEAD_Competition_Team5_Poster_Hamilton_Transit_Access (1)_pages-to-jpg-0001.jpg",
      "/images/case-studies/project-2-head-analytics/Screenshot 2025-03-11 235146.png",
      "/images/case-studies/project-2-head-analytics/2.jpeg",
      "/images/case-studies/project-2-head-analytics/3.png",
      "/images/case-studies/project-2-head-analytics/4.jpeg",
      "/images/case-studies/project-2-head-analytics/5.png",
      "/images/case-studies/project-2-head-analytics/6.jpg",
      "/images/case-studies/project-2-head-analytics/7.png",
      "/images/case-studies/project-2-head-analytics/8.jpeg",
      "/images/case-studies/project-2-head-analytics/9.png",
      "/images/case-studies/project-2-head-analytics/10.png",
      "/images/case-studies/project-2-head-analytics/11.jpeg",
      "/images/case-studies/project-2-head-analytics/12.jpeg"
    ],
    resources: [
      { label: "View Documents", url: "https://drive.google.com/drive/folders/1RAxeK0n3yIfCgz55Gdb09vVFIJmaEPwD?usp=drive_link" }
    ]
  },
  {
    name: "Predictive / Operations Analysis",
    category: "Fortinos (Loblaw Companies): Soup & Sandwich Production Tool",
    tools: "Excel/VBA · Forecasting · Automation",
    problem: "As a Soup & Sandwich clerk, I saw firsthand that no forecasting tool existed for the department (44 SKUs across 7 categories), leading to inconsistent production planning and avoidable waste.",
    approach: "Built an Excel/VBA tool with 7-day rolling production forecasts, SKU-level waste threshold flagging, an interactive analytics dashboard with month/week/category filters, and macro-driven automation (one-click history save, auto-updating prediction windows).",
    finding: "The forecast model uses live day-of-week averages from 13+ weeks of production history, refined with a 15% buffer, and improves automatically as more data accumulates. Waste tracking revealed soup categories consistently ran 20%+ above target, while sandwich categories held closer to 5-13%.",
    outcome: "Endorsed by the franchisee, leading to a promotion to Perpetual Inventory Clerk.",
    coverImage: "/images/case-studies/project-3-fortinos/IMAGE_COVER_PHOTO.png",
    storyTitle: "The Story: Applying the BA/DA Toolkit Where No One Was Looking",
    story: (
      <>
        <p>I spent three months, February through April 2026, working as a Soup & Sandwich clerk at Fortinos. It's not a title that screams "business analyst," but the instincts don't turn off just because the job title doesn't ask for them. I was close enough to the daily numbers to see exactly where the process was breaking down, and I approached it the same way I'd approach any BA/DA engagement: understand the current state, find where the friction actually lives, then build something that fixes it.</p>
        <p>The current state was this: production planning across 44 SKUs and 7 categories ran almost entirely on habit and gut feel. There was no structured forecasting, no systematic way to flag waste before it happened, and no documentation anyone could hand to a new hire. That's a requirements gap, even if nobody in that kitchen would call it that.</p>
        <p>Nobody asked me to fix it. But I treated it like a real project anyway. I started with something close to stakeholder discovery, just paying attention to which SKUs consistently ran over or under, where staff were guessing instead of planning, and where waste was quietly accumulating without anyone tracking it systematically. From there I moved into the part that's really data modeling: I built a forecasting engine that reads live production history and calculates a 7-day rolling prediction per SKU, using day-of-week averages with a 15% buffer, refining itself automatically as more data comes in.</p>
        <p>Then I did what I think separates an analyst from someone who just builds a spreadsheet: I designed for the end user, not just for the data. Color-coded thresholds so a five-second glance tells staff whether to scale production up or down. A waste analysis dashboard tracking every category week over week, so patterns show up before they become a habit. And a written onboarding guide, because a tool nobody can operate without me standing there isn't actually a solution, it's a liability with good intentions.</p>
        <p>I built and validated all of it using simulated data, since this was self-initiated work outside any formal project scope. That mattered to me for the same reason it matters in any analytical work: the methodology has to hold up on its own, not just look convincing in a demo.</p>
        <p>When I brought it to my franchisee, the response wasn't just approval, it was a promotion to Perpetual Inventory Clerk. That outcome is the part I keep coming back to. It wasn't "nice tool." It was a direct signal that the analysis was sound enough, and the recommendation clear enough, to change what I was trusted to do.</p>
        <p>What this project reinforced for me is that business analysis and data analysis aren't things that only happen with a formal title and a project charter. They're a way of looking at a process, spotting the gap between what's happening and what should be happening, and building the bridge yourself. I didn't wait for a BA role to think like one.</p>
      </>
    ),
    screenshots: [
      "/images/case-studies/project-3-fortinos/IMAGE_COVER_PHOTO.png",
      "/images/case-studies/project-3-fortinos/Screenshot 2026-07-06 202026.png",
      "/images/case-studies/project-3-fortinos/Screenshot 2026-07-06 202040.png",
      "/images/case-studies/project-3-fortinos/Screenshot 2026-07-06 202056.png",
      "/images/case-studies/project-3-fortinos/Screenshot 2026-07-06 202118.png",
      "/images/case-studies/project-3-fortinos/Screenshot 2026-07-06 202132.png"
    ],
    resources: [
      { label: "View Documents", url: "https://drive.google.com/drive/folders/101uMmqEDVGxVMtDgxeDomiXBr7xr6zrC?usp=sharing" }
    ]
  }
];

const Work = () => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

  // Horizontal scrolling removed per user request

  const openGallery = (index: number) => {
    setActiveGalleryIndex(index);
  };

  const closeGallery = () => {
    setActiveGalleryIndex(null);
  };

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container">
          <div className="work-title-main">
            <h2>
              My <span>Work</span>
            </h2>
          </div>
          <div className="work-flex">
            {projects.map((project, index) => (
              <div 
                className="cs-card" 
                key={index} 
                onClick={() => openGallery(index)}
              >
                {/* Cover Image Container */}
                <div className="cs-cover-container">
                  <img src={project.coverImage} alt={project.name} className="cs-cover-image" />
                  <div className="cs-cover-overlay">
                    <span>View Case Study &rarr;</span>
                  </div>
                </div>

                {/* Header Text */}
                <div className="cs-header">
                  <h3>{project.name}</h3>
                  <p>{project.category}</p>
                </div>

                {/* Details Grid */}
                <div className="cs-details">
                  <div className="cs-detail-row">
                    <div className="cs-label">Problem</div>
                    <div className="cs-text">{project.problem}</div>
                  </div>
                  <div className="cs-detail-row">
                    <div className="cs-label">Approach</div>
                    <div className="cs-text">{project.approach}</div>
                  </div>
                  {project.finding && (
                    <div className="cs-detail-row">
                      <div className="cs-label">Finding</div>
                      <div className="cs-text">{project.finding}</div>
                    </div>
                  )}
                  <div className="cs-detail-row">
                    <div className="cs-label">Outcome</div>
                    <div className="cs-text">{project.outcome}</div>
                  </div>
                </div>

                {project.disclaimer && (
                  <div className="cs-disclaimer">
                    {project.disclaimer}
                  </div>
                )}

                {/* Tags Footer */}
                <div className="cs-tags">
                  {project.tools}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CaseStudyModal 
        isOpen={activeGalleryIndex !== null}
        onClose={closeGallery}
        project={activeGalleryIndex !== null ? projects[activeGalleryIndex] : null}
      />
    </>
  );
};

export default Work;
