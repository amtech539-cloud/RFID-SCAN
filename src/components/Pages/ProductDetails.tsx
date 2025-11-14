import React from 'react';
import Navbar from '../Dashboard/Navbar';
import MenuTabs from '../Dashboard/MenuTabs';
import ProductImages from '../Product/ProductImages';
import ProductInfo from '../Product/ProductInfo';
import EPCManagement from '../Product/EPCManagement';
import SupplyChainInfo from '../Product/SupplyChainInfo';
import ProductLifecycle from '../Product/ProductLifecycle';

const ProductDetails: React.FC = () => {
  // Sample data - replace with actual data from API
  const productData = {
    sku: 'SKU-1647',
    title: 'Wireless Sensor Node',
    skuInformation: {
      skuInductName: 'Product Name:',
      productName: 'TechSupply Co.',
      category: 'Electronics',
    },
    basicInformation: {
      sku: 'SKU-1647',
      productName: 'Wireless Sensor Node',
      category: 'Electronics',
    },
    supplyChain: {
      vendor: '',
      distributor: 'Global Logistics Inc',
    },
    financial: {
      gstTaxRatePercent: '18',
      gstTaxRate: '18',
      hsnSacCode: '8517.62',
    },
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f5f7fa',
    display: 'flex',
    flexDirection: 'column',
  };

  const mainContentStyle: React.CSSProperties = {
    padding: 'clamp(1rem, 1.5vw, 2rem)',
    maxWidth: '100%',
    boxSizing: 'border-box',
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 'clamp(0.75rem, 1vw, 1rem)',
  };

  const tabsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    borderBottom: '1px solid #e5e7eb',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const tabStyle = (active: boolean): React.CSSProperties => ({
    padding: 'clamp(0.5rem, 0.75vw, 0.75rem) clamp(0.75rem, 1vw, 1rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 1rem)',
    fontWeight: active ? '600' : '400',
    color: active ? '#14b8a6' : '#6b7280',
    borderBottom: active ? '2px solid #14b8a6' : 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',
    border: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  });

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 'clamp(1rem, 1.5vw, 2rem)',
  };

  const leftColumnStyle: React.CSSProperties = {
    gridColumn: window.innerWidth > 1024 ? 'span 1' : 'span 1',
  };

  const rightColumnStyle: React.CSSProperties = {
    gridColumn: window.innerWidth > 1024 ? 'span 2' : 'span 1',
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <MenuTabs />
      
      <div style={mainContentStyle}>
        {/* Page Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>
            Product Details: {productData.sku} ({productData.title})
          </h1>
          
          {/* Tabs */}
          <div style={tabsContainerStyle}>
            <button style={tabStyle(true)}>
              Products
            </button>
            <button 
              style={tabStyle(false)}
              onMouseOver={(e) => (e.currentTarget.style.color = '#4b5563')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#6b7280')}
            >
              Categories
            </button>
            <button 
              style={tabStyle(false)}
              onMouseOver={(e) => (e.currentTarget.style.color = '#4b5563')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#6b7280')}
            >
              Add New Product
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div style={gridContainerStyle}>
          {/* Left Column - Product Image */}
          <div style={leftColumnStyle}>
            <ProductImages />
          </div>

          {/* Right Column - Product Details */}
          <div style={rightColumnStyle}>
            <ProductInfo
              skuInformation={productData.skuInformation}
              basicInformation={productData.basicInformation}
            />

            <EPCManagement />

            <SupplyChainInfo
              supplyChain={productData.supplyChain}
              financial={productData.financial}
            />

            <ProductLifecycle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
