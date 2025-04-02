import React from 'react';

const Gallery = () => {
    return (
        <div className="Gallery-section">
          <h2>Nuestra Comunidad</h2>
          <div className="Gallery">
            <img src="./imgs/community1.jpg" alt="Community 1" className="Gallery-img"/>
            <img src="./imgs/community2.jpg" alt="Community 2" className="Gallery-img"/>
            <img src="./imgs/community3.jpg" alt="Community 3" className="Gallery-img"/>
          </div>
          {/* {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
            ))} */}
        </div>
    );
};

export default Gallery;