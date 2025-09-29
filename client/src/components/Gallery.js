import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/api/photos');
        const data = await response.json();
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const filterPhotos = (category) => {
    setActiveCategory(category);
  };

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="gallery-page">
      <div className="container">
        <h1>Photo Gallery</h1>
        <p className="gallery-description">Explore the beauty and culture of Kolkata through our lens</p>
        
        <div className="gallery-filter">
          <button 
            className={activeCategory === 'all' ? 'active' : ''} 
            onClick={() => filterPhotos('all')}
          >
            All
          </button>
          <button 
            className={activeCategory === 'landmarks' ? 'active' : ''} 
            onClick={() => filterPhotos('landmarks')}
          >
            Landmarks
          </button>
          <button 
            className={activeCategory === 'culture' ? 'active' : ''} 
            onClick={() => filterPhotos('culture')}
          >
            Culture
          </button>
          <button 
            className={activeCategory === 'food' ? 'active' : ''} 
            onClick={() => filterPhotos('food')}
          >
            Food
          </button>
          <button 
            className={activeCategory === 'street' ? 'active' : ''} 
            onClick={() => filterPhotos('street')}
          >
            Street
          </button>
        </div>
        
        {loading ? (
          <div className="loading">Loading photos...</div>
        ) : filteredPhotos.length === 0 ? (
          <p>No photos found in this category.</p>
        ) : (
          <div className="gallery-grid">
            {filteredPhotos.map(photo => (
              <div key={photo.id} className="gallery-item stagger-item">
                <img src={photo.imageUrl} alt={photo.title} />
                <div className="gallery-item-info">
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;