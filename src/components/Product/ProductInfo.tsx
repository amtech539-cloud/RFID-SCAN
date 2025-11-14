import React from 'react';

interface ProductInfoProps {
  skuInformation: {
    skuInductName: string;
    productName: string;
    category: string;
  };
  basicInformation: {
    sku: string;
    productName: string;
    category: string;
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ skuInformation, basicInformation }) => {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(1rem, 1.5vw, 1.5rem)',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 'clamp(0.75rem, 1vw, 1rem)',
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'clamp(0.5rem, 0.75vw, 0.75rem) 0',
  };

  const labelStyle: React.CSSProperties = {
    color: '#6b7280',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
  };

  const valueStyle: React.CSSProperties = {
    color: '#1f2937',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    fontWeight: '500',
  };

  return (
    <div style={gridStyle}>
      {/* SKU Information */}
      <div style={cardStyle}>
        <h3 style={titleStyle}>SKU: Information</h3>
        <div>
          <div style={rowStyle}>
            <span style={labelStyle}>SKU: Induct Name:</span>
            <span style={valueStyle}>{skuInformation.skuInductName}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Product Name:</span>
            <span style={valueStyle}>{skuInformation.productName}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Category:</span>
            <span style={valueStyle}>{skuInformation.category}</span>
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div style={cardStyle}>
        <h3 style={titleStyle}>Basic Information</h3>
        <div>
          <div style={rowStyle}>
            <span style={labelStyle}>SKU:</span>
            <span style={valueStyle}>{basicInformation.sku}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Product Name:</span>
            <span style={valueStyle}>{basicInformation.productName}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Category:</span>
            <span style={valueStyle}>{basicInformation.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
