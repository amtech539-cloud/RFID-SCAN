import React, { useState } from 'react';

interface AuditEntry {
  date: string;
  audit: string;
  details: string;
  action: string;
  inTransit: string;
  sesioned: string;
}

const ProductLifecycle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'auditTrail' | 'shipmentStatus' | 'sessionLogs'>('auditTrail');

  const auditData: AuditEntry[] = [
    {
      date: 'Uk',
      audit: 'Jane Smith',
      details: 'Received',
      action: 'PO-2024-0156',
      inTransit: 'LAX',
      sesioned: 'Delivered',
    },
    {
      date: 'Use',
      audit: 'Jane Smith',
      details: 'John Doe',
      action: 'Shipped',
      inTransit: 'In Transit',
      sesioned: 'Delivered',
    },
    {
      date: 'Or',
      audit: 'Warehouse Transfer from Sahtsy',
      details: 'John Doe',
      action: 'SEA to LAX',
      inTransit: 'LAX',
      sesioned: '2817.16d',
    },
  ];

  const containerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  };

  const headerStyle: React.CSSProperties = {
    borderBottom: '1px solid #e5e7eb',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
    fontWeight: '600',
    color: '#1f2937',
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
    paddingBottom: 'clamp(0.75rem, 1vw, 1rem)',
  };

  const tabsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'clamp(0.125rem, 0.25vw, 0.25rem)',
    padding: '0 clamp(1rem, 1.5vw, 1.5rem)',
  };

  const tabButtonStyle = (isActive: boolean): React.CSSProperties => ({
    padding: 'clamp(0.625rem, 0.75vw, 0.75rem) clamp(1rem, 1.5vw, 1.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    fontWeight: '500',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem) clamp(0.5rem, 0.6vw, 0.75rem) 0 0',
    transition: 'all 0.2s',
    backgroundColor: isActive ? '#14b8a6' : '#f3f4f6',
    color: isActive ? 'white' : '#6b7280',
    border: 'none',
    cursor: 'pointer',
  });

  const contentStyle: React.CSSProperties = {
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const tableContainerStyle: React.CSSProperties = {
    overflowX: 'auto',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle: React.CSSProperties = {
    textAlign: 'left',
    padding: 'clamp(0.625rem, 0.75vw, 0.75rem) clamp(0.75rem, 1vw, 1rem)',
    color: '#6b7280',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    fontWeight: '600',
    borderBottom: '1px solid #e5e7eb',
  };

  const tdStyle: React.CSSProperties = {
    padding: 'clamp(0.625rem, 0.75vw, 0.75rem) clamp(0.75rem, 1vw, 1rem)',
    color: '#374151',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    borderBottom: '1px solid #f3f4f6',
  };

  const emptyStateStyle: React.CSSProperties = {
    color: '#6b7280',
    padding: 'clamp(2rem, 2.5vw, 3rem) 0',
    textAlign: 'center',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>Product Lifecycle</h3>
        <div style={tabsContainerStyle}>
          <button
            onClick={() => setActiveTab('auditTrail')}
            style={tabButtonStyle(activeTab === 'auditTrail')}
            onMouseOver={(e) => {
              if (activeTab !== 'auditTrail') {
                e.currentTarget.style.backgroundColor = '#e5e7eb';
              }
            }}
            onMouseOut={(e) => {
              if (activeTab !== 'auditTrail') {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            }}
          >
            Audit Trail
          </button>
          <button
            onClick={() => setActiveTab('shipmentStatus')}
            style={tabButtonStyle(activeTab === 'shipmentStatus')}
            onMouseOver={(e) => {
              if (activeTab !== 'shipmentStatus') {
                e.currentTarget.style.backgroundColor = '#e5e7eb';
              }
            }}
            onMouseOut={(e) => {
              if (activeTab !== 'shipmentStatus') {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            }}
          >
            Shipment Status
          </button>
          <button
            onClick={() => setActiveTab('sessionLogs')}
            style={tabButtonStyle(activeTab === 'sessionLogs')}
            onMouseOver={(e) => {
              if (activeTab !== 'sessionLogs') {
                e.currentTarget.style.backgroundColor = '#e5e7eb';
              }
            }}
            onMouseOut={(e) => {
              if (activeTab !== 'sessionLogs') {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            }}
          >
            Session Logs
          </button>
        </div>
      </div>

      <div style={contentStyle}>
        {activeTab === 'auditTrail' && (
          <div style={tableContainerStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Date</th>
                  <th style={thStyle}>Audit</th>
                  <th style={thStyle}>Details</th>
                  <th style={thStyle}>Action</th>
                  <th style={thStyle}>In Transit</th>
                  <th style={thStyle}>Sesioned</th>
                </tr>
              </thead>
              <tbody>
                {auditData.map((entry, index) => (
                  <tr 
                    key={index}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <td style={tdStyle}>{entry.date}</td>
                    <td style={tdStyle}>{entry.audit}</td>
                    <td style={tdStyle}>{entry.details}</td>
                    <td style={tdStyle}>{entry.action}</td>
                    <td style={tdStyle}>{entry.inTransit}</td>
                    <td style={tdStyle}>{entry.sesioned}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'shipmentStatus' && (
          <div style={emptyStateStyle}>
            Shipment status information will be displayed here.
          </div>
        )}

        {activeTab === 'sessionLogs' && (
          <div style={emptyStateStyle}>
            Session logs will be displayed here.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLifecycle;
