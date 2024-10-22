import React, { useState } from 'react';

const Lightbox = ({ image, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(images.indexOf(image));

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') onClose();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt="" />
        <button className="prev" onClick={prevImage}>❮</button>
        <button className="next" onClick={nextImage}>❯</button>
      </div>
    </div>
  );
};

export default Lightbox;
