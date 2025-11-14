import React, { useState } from 'react';

const ProductImages: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    '/placeholder-product-1.png',
    '/placeholder-product-2.png',
    '/placeholder-product-3.png',
    '/placeholder-product-4.png',
  ];

  const containerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const mainImageContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 'clamp(1rem, 1.2vw, 1.25rem)',
    backgroundColor: '#f9fafb',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    height: 'clamp(200px, 16vw, 256px)',
  };

  const imageTextStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const productIconStyle: React.CSSProperties = {
    width: 'clamp(6rem, 8vw, 8rem)',
    height: 'clamp(6rem, 8vw, 8rem)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iconStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    color: '#9ca3af',
  };

  const textStyle: React.CSSProperties = {
    color: '#6b7280',
    fontSize: 'clamp(0.875rem, 0.9vw, 1rem)',
    marginTop: 'clamp(0.5rem, 0.6vw, 0.75rem)',
  };

  const thumbnailContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'clamp(0.75rem, 1vw, 1rem)',
    justifyContent: 'center',
  };

  const thumbnailButtonStyle = (isSelected: boolean): React.CSSProperties => ({
    width: 'clamp(3.5rem, 4vw, 4rem)',
    height: 'clamp(3.5rem, 4vw, 4rem)',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    border: isSelected ? '2px solid #14b8a6' : '2px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    backgroundColor: isSelected ? '#f0fdfa' : '#f9fafb',
    cursor: 'pointer',
    flexShrink: 0,
  });

  const thumbnailIconStyle: React.CSSProperties = {
    width: 'clamp(1.5rem, 2vw, 2rem)',
    height: 'clamp(1.5rem, 2vw, 2rem)',
    color: '#9ca3af',
  };

  return (
    <div style={containerStyle}>
      {/* Main Image */}
      <div style={mainImageContainerStyle}>
        <div style={imageTextStyle}>
          <div style={productIconStyle}>
            <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p style={textStyle}>Wireless Sensor Node</p>
        </div>
      </div>

      {/* Thumbnail Images */}
      <div style={thumbnailContainerStyle}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            style={thumbnailButtonStyle(selectedImage === index)}
            onMouseOver={(e) => {
              if (selectedImage !== index) {
                e.currentTarget.style.borderColor = '#d1d5db';
              }
            }}
            onMouseOut={(e) => {
              if (selectedImage !== index) {
                e.currentTarget.style.borderColor = '#e5e7eb';
              }
            }}
          >
            <svg style={thumbnailIconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
