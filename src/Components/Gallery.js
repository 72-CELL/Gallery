import React, { useState } from 'react';
import Lightbox from './Lightbox';
import './Style.css';  // Ensure the casing and path are correct
import img1 from './Images/download-1.jpeg';
import img2 from './Images/download-2.jpeg';
import img3 from './Images/download-3.jpeg';
import img4 from './Images/download-4.jpeg';
import img5 from './Images/download.jpeg';
import img6 from './Images/subhome-ai.jpeg';

const images = [img1,img1,img2,img3,img4,img5,img6
  // Array of image URLs
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
    
};

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div key={index} className="gallery-item" onClick={() => openLightbox(img)}>
          <img src={img} alt={`Gallery item ${index}`} loading="lazy" />
        </div>
      ))}
      {isOpen && (
        <Lightbox
          image={currentImage}
          onClose={closeLightbox}
          images={images}
        />
      )}
    </div>
  );
};

export default Gallery;
