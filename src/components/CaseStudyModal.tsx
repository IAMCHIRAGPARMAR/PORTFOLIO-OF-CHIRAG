import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MdClose, MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./styles/CaseStudyModal.css";

export interface Resource {
  label: string;
  url: string;
}

export interface ProjectData {
  name: string;
  category: string;
  tools: string;
  problem: string;
  approach: string;
  finding?: string;
  outcome: string;
  disclaimer?: string;
  coverImage: string;
  storyTitle: string;
  story: React.ReactNode;
  screenshots: string[];
  resources: Resource[];
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, project }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setLightboxIndex(null);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === project.screenshots.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? project.screenshots.length - 1 : lightboxIndex - 1);
    }
  };

  return createPortal(
    <div className="cs-modal-overlay" onClick={onClose}>
      <div className="cs-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="cs-modal-close" onClick={onClose} aria-label="Close Case Study">
          <MdClose size={32} />
        </button>

        <div className="cs-modal-layout">
          {/* Left Column: Story */}
          <div className="cs-story-column">
            <div className="cs-story-content">
              <h2 className="cs-title">{project.name}</h2>
              <p className="cs-subtitle">{project.category}</p>
              
              <div className="cs-story-body">
                <h3>{project.storyTitle}</h3>
                <div className="cs-narrative">
                  {project.story}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Media & Resources */}
          <div className="cs-media-column">
            {/* Top 75%: Gallery Grid */}
            <div className="cs-gallery-section">
              {project.screenshots && project.screenshots.length > 0 ? (
                <div className="cs-gallery-grid">
                  {project.screenshots.map((src, idx) => (
                    <div 
                      key={idx} 
                      className="cs-gallery-thumbnail"
                      onClick={() => setLightboxIndex(idx)}
                    >
                      <img src={src} alt={`Screenshot ${idx + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="cs-no-images">
                  <p>Screenshots coming soon</p>
                </div>
              )}
            </div>

            {/* Bottom 25%: Resources Bar */}
            <div className="cs-resources-section">
              <div className="cs-resources-buttons">
                {project.resources && project.resources.length > 0 ? (
                  project.resources.map((res, idx) => (
                    <a 
                      key={idx} 
                      href={res.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cs-resource-btn"
                    >
                      {res.label} <MdArrowOutward size={16} />
                    </a>
                  ))
                ) : (
                  <span className="cs-no-resources">No external resources available</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className="cs-lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <button className="cs-lightbox-close" onClick={() => setLightboxIndex(null)}>
            <MdClose size={32} />
          </button>
          
          <button className="cs-nav-btn prev" onClick={prevLightboxImage}>
            <MdChevronLeft size={48} />
          </button>
          
          <div className="cs-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={project.screenshots[lightboxIndex]} 
              alt={`Full screenshot ${lightboxIndex + 1}`} 
            />
            <div className="cs-lightbox-counter">
              {lightboxIndex + 1} / {project.screenshots.length}
            </div>
          </div>

          <button className="cs-nav-btn next" onClick={nextLightboxImage}>
            <MdChevronRight size={48} />
          </button>
        </div>
      )}
    </div>,
    document.body
  );
};

export default CaseStudyModal;
