import "./styles/Career.css";

const careers = [
  {
    title: "Perpetual Inventory Clerk / Retail Operations",
    company: "Fortinos (Loblaw Companies Ltd.), Burlington, ON",
    year: "Sept 2023 - Present",
    desc: "Promoted to Perpetual Inventory Clerk; perform SAP-based inventory reconciliation, investigate variance flags, and execute full reclamation program. Built an Excel/VBA predictive production planning tool with 7-day rolling forecasts, automated waste threshold flagging, and macro-driven workflow automation.",
  },
  {
    title: "Business Analyst Intern",
    company: "City of Hamilton, ON",
    year: "May 2025 - June 2025",
    desc: "Delivered an AI integration strategy and scalable adoption roadmap for the Planning Department. Produced a full BRD covering stakeholder analysis, RACI matrix, SWOT, MoSCoW prioritization, 6+ use cases, and risk register. Benchmarked AI adoption across Canadian municipalities.",
  },
  {
    title: "Data Associate – Panel",
    company: "Numerator, Vadodara, India",
    year: "Oct 2020 - June 2023",
    desc: "Analyzed large-scale North American datasets to ensure data quality and validate business logic for marketing insights projects. Built dashboards in Power BI to visualize transactional and demographic trends, enabling data-driven decisions. Collaborated across teams to streamline reporting.",
  }
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careers.map((career, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{career.title}</h4>
                  <h5>{career.company}</h5>
                </div>
                <h3>{career.year}</h3>
              </div>
              <p>{career.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
