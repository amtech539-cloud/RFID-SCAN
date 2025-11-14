import React, { useState } from 'react';

interface InventoryItem {
  id: string;
  productName: string;
  description: string;
  epcNumber: string;
  value: string;
  locationZone: string;
  hasEPC: boolean;
  highlight?: boolean;
}

const InventoryTable: React.FC = () => {
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const inventoryData: InventoryItem[] = [
    {
      id: '1',
      productName: 'Wireless Sensor Node',
      description: 'IOT device...',
      epcNumber: '1',
      value: '€120.50',
      locationZone: 'Zone A',
      hasEPC: true,
    },
    {
      id: '2',
      productName: 'SKU-5821',
      description: 'IOT device...',
      epcNumber: '1',
      value: '3E8FA...',
      locationZone: 'Zone B',
      hasEPC: true,
    },
    {
      id: '3',
      productName: 'RFID Reader',
      description: 'Handheld scanner',
      epcNumber: '1',
      value: '8450.00',
      locationZone: '€75.00',
      hasEPC: true,
    },
    {
      id: '4',
      productName: 'Antenna Pack',
      description: 'Pack of 4 antennas',
      epcNumber: '1',
      value: '€75.20',
      locationZone: 'Zone C',
      hasEPC: true,
    },
    {
      id: '5',
      productName: 'Antenna Pack',
      description: 'Pack of 100 antenas',
      epcNumber: '1',
      value: 'B9C7D...',
      locationZone: '€15.80',
      hasEPC: true,
      highlight: true,
    },
    {
      id: '6',
      productName: 'Transponder Tags',
      description: 'I',
      epcNumber: '1',
      value: '',
      locationZone: 'C',
      hasEPC: false,
    },
  ];

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.125rem, 1.25vw, 1.5rem)',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const tableContainerStyle: React.CSSProperties = {
    overflowX: 'auto',
    marginTop: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle: React.CSSProperties = {
    backgroundColor: '#e0f2f1',
    textAlign: 'left',
    padding: 'clamp(0.75rem, 1vw, 1rem)',
    color: '#1f2937',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  };

  const tdStyle: React.CSSProperties = {
    padding: 'clamp(0.75rem, 1vw, 1rem)',
    borderBottom: '1px solid #f3f4f6',
    color: '#374151',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
  };

  const highlightRowStyle: React.CSSProperties = {
    backgroundColor: '#fce4ec',
  };

  const iconButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.25rem',
    color: '#6b7280',
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '0.25rem',
  };

  const actionButtonStyle: React.CSSProperties = {
    padding: 'clamp(0.375rem, 0.5vw, 0.5rem) clamp(0.75rem, 1vw, 1rem)',
    backgroundColor: 'transparent',
    color: '#6b7280',
    border: '1px solid #d1d5db',
    borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginLeft: '0.5rem',
  };

  const paginationContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'clamp(1rem, 1.5vw, 1.5rem)',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  const paginationButtonsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
  };

  const pageButtonStyle = (isActive: boolean): React.CSSProperties => ({
    padding: 'clamp(0.375rem, 0.5vw, 0.5rem) clamp(0.75rem, 1vw, 1rem)',
    backgroundColor: isActive ? '#14b8a6' : 'white',
    color: isActive ? 'white' : '#374151',
    border: '1px solid #d1d5db',
    borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    minWidth: '2.5rem',
  });

  const checkboxStyle: React.CSSProperties = {
    width: '1rem',
    height: '1rem',
    cursor: 'pointer',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
    color: '#14b8a6',
    padding: '0.125rem 0.5rem',
    borderRadius: '9999px',
    fontSize: 'clamp(0.75rem, 0.85vw, 0.875rem)',
    fontWeight: '500',
    marginLeft: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Inventory Management</h2>

      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>
                Product Name
                <button 
                  style={iconButtonStyle}
                  onClick={() => handleSort('productName')}
                >
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </button>
              </th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>
                EPC Number
                <button 
                  style={iconButtonStyle}
                  onClick={() => handleSort('epcNumber')}
                >
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
              </th>
              <th style={thStyle}>
                Value
                <button 
                  style={iconButtonStyle}
                  onClick={() => handleSort('value')}
                >
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
              </th>
              <th style={thStyle}>
                Location/Zone
                <button 
                  style={iconButtonStyle}
                  onClick={() => handleSort('locationZone')}
                >
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
              </th>
              <th style={thStyle}>Actions</th>
            </tr>
            <tr>
              <td style={tdStyle}>
                <strong>SKU</strong>
              </td>
              <td style={tdStyle}>
                <strong>SKU</strong>
              </td>
              <td style={tdStyle}>
                <button style={iconButtonStyle}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
              </td>
              <td style={tdStyle}>
                <button style={iconButtonStyle}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
              </td>
              <td style={tdStyle}>
                <button style={iconButtonStyle}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
                <button style={iconButtonStyle}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                  </svg>
                </button>
              </td>
              <td style={tdStyle}>
                <button style={iconButtonStyle}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
                <button style={iconButtonStyle}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </button>
                <button style={iconButtonStyle}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                </button>
                <button style={iconButtonStyle}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr 
                key={item.id}
                style={item.highlight ? highlightRowStyle : {}}
                onMouseOver={(e) => {
                  if (!item.highlight) {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                  }
                }}
                onMouseOut={(e) => {
                  if (!item.highlight) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <td style={tdStyle}>
                  {item.productName}
                  {item.hasEPC && item.productName === 'Wireless Sensor Node' && (
                    <span style={badgeStyle}>✓</span>
                  )}
                </td>
                <td style={tdStyle}>{item.description}</td>
                <td style={tdStyle}>{item.epcNumber}</td>
                <td style={tdStyle}>{item.value}</td>
                <td style={tdStyle}>{item.locationZone}</td>
                <td style={tdStyle}>
                  <button 
                    style={iconButtonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#14b8a6')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#6b7280')}
                  >
                    <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  <button 
                    style={iconButtonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#14b8a6')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#6b7280')}
                  >
                    <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  <button 
                    style={iconButtonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#14b8a6')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#6b7280')}
                  >
                    <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  <button 
                    style={actionButtonStyle}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#f3f4f6';
                      e.currentTarget.style.borderColor = '#14b8a6';
                      e.currentTarget.style.color = '#14b8a6';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.color = '#6b7280';
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={paginationContainerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input type="checkbox" style={checkboxStyle} />
          <span style={{ fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)', color: '#6b7280' }}>
            Export to CSV
          </span>
        </div>

        <div style={paginationButtonsStyle}>
          <span style={{ fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)', color: '#6b7280' }}>Previous</span>
          <button 
            style={pageButtonStyle(true)}
            onMouseOver={(e) => {
              if (!true) {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseOut={(e) => {
              if (!true) {
                e.currentTarget.style.backgroundColor = 'white';
              }
            }}
          >
            1
          </button>
          <button 
            style={pageButtonStyle(false)}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
          >
            2
          </button>
          <button 
            style={pageButtonStyle(false)}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
          >
            3
          </button>
          <span style={{ fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)', color: '#6b7280' }}>Next</span>
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;
