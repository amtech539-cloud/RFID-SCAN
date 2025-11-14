import React from 'react';

interface SupplyChainInfoProps {
  vendor: string;
  distributor: string;
}

interface FinancialInfoProps {
  gstTaxRatePercent: string;
  gstTaxRate: string;
  hsnSacCode: string;
}

const SupplyChainInfo: React.FC<{ supplyChain: SupplyChainInfoProps; financial: FinancialInfoProps }> = ({ 
  supplyChain, 
  financial 
}) => {
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

  const fieldContainerStyle: React.CSSProperties = {
    marginBottom: 'clamp(0.75rem, 1vw, 1rem)',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: '#6b7280',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    marginBottom: 'clamp(0.375rem, 0.5vw, 0.5rem)',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem) clamp(0.75rem, 1vw, 1rem)',
    border: '1px solid #d1d5db',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    backgroundColor: '#f9fafb',
  };

  const selectStyle: React.CSSProperties = {
    width: '100%',
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem) clamp(0.75rem, 1vw, 1rem)',
    border: '1px solid #d1d5db',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    backgroundColor: 'white',
    outline: 'none',
    cursor: 'pointer',
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 'clamp(0.75rem, 1vw, 1rem)',
  };

  const rowLabelStyle: React.CSSProperties = {
    color: '#6b7280',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
  };

  const valueStyle: React.CSSProperties = {
    color: '#1f2937',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    fontWeight: '500',
  };

  const smallSelectStyle: React.CSSProperties = {
    padding: 'clamp(0.375rem, 0.5vw, 0.5rem) clamp(0.75rem, 1vw, 1rem)',
    border: '1px solid #d1d5db',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    backgroundColor: 'white',
    outline: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={gridStyle}>
      {/* Supply Chain */}
      <div style={cardStyle}>
        <h3 style={titleStyle}>Supply Chain</h3>
        <div>
          <div style={fieldContainerStyle}>
            <label style={labelStyle}>Vendor:</label>
            <input
              type="text"
              value={supplyChain.vendor}
              disabled
              style={inputStyle}
            />
          </div>
          <div style={fieldContainerStyle}>
            <label style={labelStyle}>Distributor:</label>
            <select 
              style={selectStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#14b8a6')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
            >
              <option>{supplyChain.distributor}</option>
            </select>
          </div>
          <div style={{ fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)', color: '#6b7280' }}>
            {supplyChain.distributor}
          </div>
        </div>
      </div>

      {/* Financial & Compliance */}
      <div style={cardStyle}>
        <h3 style={titleStyle}>Financial & Compliance</h3>
        <div>
          <div style={rowStyle}>
            <span style={rowLabelStyle}>GST/Tax Rate (%):</span>
            <select 
              style={smallSelectStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#14b8a6')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
            >
              <option>{financial.gstTaxRatePercent}</option>
            </select>
          </div>
          <div style={rowStyle}>
            <span style={rowLabelStyle}>GST/Tax Rate:</span>
            <select 
              style={smallSelectStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#14b8a6')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
            >
              <option>{financial.gstTaxRate}</option>
            </select>
          </div>
          <div style={rowStyle}>
            <span style={rowLabelStyle}>HSN/SAC Code:</span>
            <span style={valueStyle}>{financial.hsnSacCode}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainInfo;
