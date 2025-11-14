import React, { useState } from 'react';

const EPCManagement: React.FC = () => {
  const [epcInput, setEpcInput] = useState('');

  const handleScan = () => {
    console.log('Scanning EPC...');
    // Add scan functionality here
  };

  const handleAddEPC = () => {
    console.log('Adding EPC:', epcInput);
    // Add EPC functionality here
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 'clamp(0.75rem, 1vw, 1rem)',
  };

  const inputContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'clamp(0.5rem, 0.75vw, 0.75rem)',
    flexWrap: 'wrap',
  };

  const inputStyle: React.CSSProperties = {
    flex: '1 1 auto',
    minWidth: '200px',
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem) clamp(0.75rem, 1vw, 1rem)',
    border: '1px solid #d1d5db',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    color: '#1f2937',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const buttonStyle: React.CSSProperties = {
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem) clamp(1rem, 1.5vw, 1.5rem)',
    backgroundColor: '#14b8a6',
    color: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    border: 'none',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    whiteSpace: 'nowrap',
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>EPC Management</h3>
      <div style={inputContainerStyle}>
        <input
          type="text"
          placeholder="Scan or enter manually"
          value={epcInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEpcInput(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#14b8a6')}
          onBlur={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
        />
        <button
          onClick={handleScan}
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0d9488')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#14b8a6')}
        >
          SCAN
        </button>
        <button
          onClick={handleAddEPC}
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0d9488')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#14b8a6')}
        >
          Add EPC
        </button>
      </div>
    </div>
  );
};

export default EPCManagement;
