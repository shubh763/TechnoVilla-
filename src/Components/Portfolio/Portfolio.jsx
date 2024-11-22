import React, { useState } from "react";
import "./Portfolio.css"; // Import CSS for styling

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false); // Manage lightbox visibility
  const [activeImage, setActiveImage] = useState(null); // Manage active image in the lightbox

  // Images for the projects
  const projects = [
    { id: 1, title: "Project 1", imgSrc: "/asset/1.jpg" },
    { id: 2, title: "Project 2", imgSrc: "/asset/2.jpg" },
    { id: 3, title: "Project 3", imgSrc: "/asset/3.jpg" },
    { id: 4, title: "Project 4", imgSrc: "/asset/4.jpg" },
    { id: 5, title: "Project 5", imgSrc: "/asset/5.jpg" },
    { id: 6, title: "Project 6", imgSrc: "/asset/6.jpg" },
    { id: 7, title: "Project 7", imgSrc: "/asset/7.jpg" },
    { id: 8, title: "Project 8", imgSrc: "/asset/8.jpg" },
    { id: 9, title: "Project 9", imgSrc: "/asset/9.jpg" },
    { id: 10, title: "Project 10", imgSrc: "/asset/10.jpg" },
    { id: 11, title: "Project 11", imgSrc: "/asset/11.jpg" },
    { id: 12, title: "Project 12", imgSrc: "/asset/12.jpg" },
  ];

  // Function to open lightbox with the selected image
  const openLightbox = (imgSrc) => {
    setActiveImage(imgSrc);
    setLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };

  return (
    <>
      <div className="portfolio">
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-card" key={project.id}>
              <img
                src={project.imgSrc}
                alt={project.title}
                className="portfolio-image"
                onClick={() => openLightbox(project.imgSrc)}
              />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && activeImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-lightbox" onClick={closeLightbox}>
              &times;
            </span>
            <img src={activeImage} alt="Project" />
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
