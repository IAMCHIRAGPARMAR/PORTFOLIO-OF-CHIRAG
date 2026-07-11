import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section" id="education">
      <div className="education-container">
        <div className="education-title-main">
          <h2>
            My <span>Education</span>
          </h2>
        </div>
        <div className="education-flex">
          <div className="edu-card">
            <div className="edu-details">
              <div className="edu-detail-row">
                <div className="edu-label">Program</div>
                <div className="edu-text">Post-Graduate Certificate, Business Analysis</div>
              </div>
              <div className="edu-detail-row">
                <div className="edu-label">Dates</div>
                <div className="edu-text">Sept 2024 – Jun 2025</div>
              </div>
              <div className="edu-detail-row">
                <div className="edu-label">Institution</div>
                <div className="edu-text">Mohawk College, Hamilton, ON</div>
              </div>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-details">
              <div className="edu-detail-row">
                <div className="edu-label">Program</div>
                <div className="edu-text">Post-Graduate Certificate, International Business Management – Product Management</div>
              </div>
              <div className="edu-detail-row">
                <div className="edu-label">Dates</div>
                <div className="edu-text">Sept 2023 – Mar 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
