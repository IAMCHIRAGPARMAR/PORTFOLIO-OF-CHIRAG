import React, { useState, useEffect } from 'react';
import { MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './styles/ProjectGallery.css';

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectName: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ isOpen, onClose, images, projectName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'auto';
      setCurrentIndex(0); // Reset index on close
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const hasImages = images && images.length > 0;

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-header">
          <h3>{projectName} - Proof of Work</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close Gallery">
            <MdClose size={28} />
          </button>
        </div>

        <div className="gallery-content">
          {hasImages ? (
            <>
              <button className="nav-btn prev" onClick={prevImage} aria-label="Previous Image">
                <MdChevronLeft size={40} />
              </button>
              
              <div className="image-container">
                <img 
                  src={images[currentIndex]} 
                  alt={`${projectName} screenshot ${currentIndex + 1}`} 
                  className="gallery-image"
                />
              </div>
              
              <button className="nav-btn next" onClick={nextImage} aria-label="Next Image">
                <MdChevronRight size={40} />
              </button>
              
              <div className="gallery-counter">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          ) : (
            <div className="no-images">
              <p>Screenshots coming soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
