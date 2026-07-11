import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import "./styles/Career.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const timelineData = [
  {
    type: "WORK",
    title: "Perpetual Inventory Clerk, Retail Operations",
    date: "Sept 2023 – Present",
    company: "Fortinos (Loblaw Companies Ltd.), Burlington, ON",
    tag: "Concurrent — worked throughout PG studies & internship",
    desc: "Promoted to Perpetual Inventory Clerk; perform SAP-based inventory reconciliation, investigate variance flags, and execute full reclamation program. Built an Excel/VBA predictive production planning tool with 7-day rolling forecasts, automated waste threshold flagging, and macro-driven workflow automation."
  },
  {
    type: "WORK",
    title: "Business Analyst Intern",
    date: "May 2025 – Jun 2025",
    company: "City of Hamilton, ON",
    desc: "Delivered an AI integration strategy and scalable adoption roadmap for the Planning Department. Produced a full BRD covering stakeholder analysis, RACI matrix, SWOT, MoSCoW prioritization, 6+ use cases, and risk register. Benchmarked AI adoption across Canadian municipalities."
  },
  {
    type: "EDUCATION",
    title: "Post-Graduate Certificate, Business Analysis",
    date: "Sept 2024 – Jun 2025",
    company: "Mohawk College, Hamilton, ON",
    desc: null
  },
  {
    type: "EDUCATION",
    title: "Post-Graduate Certificate, International Business Management – Product Management",
    date: "Sept 2023 – Mar 2024",
    company: "Mohawk College, Hamilton, ON",
    desc: null
  },
  {
    type: "WORK",
    title: "Data Associate – Panel",
    date: "Oct 2020 – Jun 2023",
    company: "Numerator, Vadodara, India",
    desc: "Analyzed large-scale North American datasets to ensure data quality and validate business logic for marketing insights projects. Built dashboards in Power BI to visualize transactional and demographic trends, enabling data-driven decisions. Collaborated across teams to streamline reporting."
  },
  {
    type: "EDUCATION",
    title: "MBA, Marketing",
    date: "Jun 2018 – May 2020",
    company: "Sardar Patel University, Gujarat, India",
    desc: null
  },
  {
    type: "EDUCATION",
    title: "Bachelor of Commerce",
    date: "Jun 2015 – May 2018",
    company: "M.S. University of Baroda, Gujarat, India",
    desc: null
  }
];

const Career = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate spine
    gsap.to(".journey-spine-fill", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".journey-container",
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });

    // Animate nodes sliding in
    const nodes = gsap.utils.toArray(".journey-node-wrapper");
    nodes.forEach((node: any, i) => {
      const isLeft = i % 2 === 0;
      gsap.from(node, {
        opacity: 0,
        x: isLeft ? -50 : 50,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });
  }, { scope: containerRef });

  const toggleExpand = (index: number) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number, hasDesc: boolean) => {
    if (hasDesc && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      toggleExpand(index);
    }
  };

  return (
    <div className="journey-section" id="career" ref={containerRef}>
      <h2>
        My <span>Journey</span>
      </h2>
      <div className="journey-container">
        <div className="journey-spine">
          <div className="journey-spine-fill"></div>
        </div>
        
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isExpanded = expandedNodes.has(index);
          const hasDesc = !!item.desc;

          return (
            <div className={`journey-node-wrapper ${isLeft ? 'left' : 'right'}`} key={index}>
              <div className={`journey-circle ${isExpanded ? 'expanded' : ''}`}>
                {item.type === "WORK" ? <LuBriefcase className="journey-icon" /> : <LuGraduationCap className="journey-icon" />}
              </div>
              <div className="journey-connector"></div>
              
              <div 
                className={`journey-card ${hasDesc ? 'expandable' : ''} ${isExpanded ? 'expanded' : ''}`}
                role={hasDesc ? "button" : undefined}
                tabIndex={hasDesc ? 0 : undefined}
                aria-expanded={hasDesc ? isExpanded : undefined}
                onClick={() => hasDesc && toggleExpand(index)}
                onKeyDown={(e) => handleKeyDown(e, index, hasDesc)}
              >
                <div className="journey-card-header">
                  <div className="journey-card-meta">
                    <div className="journey-meta-left">
                      <span className="journey-category-label">{item.type}</span>
                      <span className="journey-date">{item.date}</span>
                    </div>
                    {hasDesc && (
                      <span className="journey-chevron">
                        {isExpanded ? '▲' : '▼'}
                      </span>
                    )}
                  </div>
                  <h3>{item.title}</h3>
                  <h4>{item.company}</h4>
                  {item.tag && (
                    <div className="journey-tag">{item.tag}</div>
                  )}
                </div>
                
                {hasDesc && (
                  <div className="journey-card-content-wrapper">
                    <div className="journey-card-content-inner">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Career;
