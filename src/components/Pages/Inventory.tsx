import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Dashboard/Navbar';
import MenuTabs from '../Dashboard/MenuTabs';

interface InventoryItem {
  _id: string;
  company: string;
  vendor: string | null;
  name: string;
  description: string;
  sku: string;
  barcode: string;
  barcode_upload: string | null;
  media: string[];
  price: number;
  cost_price: number;
  quantity: number;
  low_quantity_trigger: number;
  tax_percentage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  product: any[];
  productQuantity: number;
}

const Inventory: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('Procurement');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllLocations, setShowAllLocations] = useState(true);
  const [showCategory, setShowCategory] = useState(false);
  const [showHitEck, setShowHitEck] = useState(false);
  const [showProductsWithoutEPC, setShowProductsWithoutEPC] = useState(false);
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const tabs = [
    'All Statuses',
    'RFID Scan',
    'Procurement',
    'Shipments',
    'Sales & POS',
    'Low Stock',
  ];

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem('authToken');
    fetch('http://lv-backend.ap-south-1.elasticbeanstalk.com/product/get?page=null&limit=null&sort=null', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        type: 'company',
        productIds: []
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          setInventoryData(data.data);
        } else {
          setError('Failed to fetch products');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Network error');
        setLoading(false);
      });
  }, []);

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

  const statsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'clamp(1rem, 1.5vw, 1.5rem)',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const statCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    color: '#6b7280',
    marginBottom: 'clamp(0.5rem, 0.6vw, 0.625rem)',
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 1.75vw, 2rem)',
    fontWeight: '700',
    color: '#1f2937',
  };

  const warehouseCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  };

  const dropdownStyle: React.CSSProperties = {
    width: '100%',
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem)',
    border: '1px solid #e5e7eb',
    borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    color: '#6b7280',
    backgroundColor: 'white',
    cursor: 'pointer',
  };

  const inventoryManagementStyle: React.CSSProperties = {
    fontSize: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const tabsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
    flexWrap: 'wrap',
  };

  const tabButtonStyle = (isActive: boolean): React.CSSProperties => ({
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem) clamp(0.75rem, 1vw, 1.25rem)',
    backgroundColor: isActive ? '#e0f2fe' : 'white',
    color: isActive ? '#0369a1' : '#6b7280',
    border: '1px solid',
    borderColor: isActive ? '#0369a1' : '#e5e7eb',
    borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  });

  const actionButtonsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
    flexWrap: 'wrap',
    alignItems: 'center',
  };

  const bulkUploadButtonStyle: React.CSSProperties = {
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem) clamp(1rem, 1.25vw, 1.5rem)',
    backgroundColor: '#374151',
    color: 'white',
    border: 'none',
    borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const createShipmentButtonStyle: React.CSSProperties = {
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem) clamp(1rem, 1.25vw, 1.5rem)',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const rfidScanButtonStyle: React.CSSProperties = {
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem) clamp(1rem, 1.25vw, 1.5rem)',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginLeft: 'auto',
  };

  const filterButtonStyle = (isActive: boolean): React.CSSProperties => ({
    padding: 'clamp(0.375rem, 0.5vw, 0.5rem) clamp(0.75rem, 1vw, 1rem)',
    backgroundColor: isActive ? '#10b981' : 'transparent',
    color: isActive ? 'white' : '#6b7280',
    border: '1px solid',
    borderColor: isActive ? '#10b981' : '#e5e7eb',
    borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  });

  const toggleContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  };

  const toggleSwitchStyle: React.CSSProperties = {
    position: 'relative',
    width: '3rem',
    height: '1.5rem',
    backgroundColor: showProductsWithoutEPC ? '#10b981' : '#d1d5db',
    borderRadius: '9999px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const toggleKnobStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0.125rem',
    left: showProductsWithoutEPC ? '1.625rem' : '0.125rem',
    width: '1.25rem',
    height: '1.25rem',
    backgroundColor: 'white',
    borderRadius: '9999px',
    transition: 'left 0.2s',
  };

  const toggleLabelStyle: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    color: '#6b7280',
  };

  const searchContainerStyle: React.CSSProperties = {
    position: 'relative',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
    maxWidth: '300px',
  };

  const searchInputStyle: React.CSSProperties = {
    width: '100%',
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem) clamp(0.75rem, 1vw, 1rem) clamp(0.5rem, 0.6vw, 0.625rem) clamp(2.5rem, 3vw, 3rem)',
    border: '1px solid #e5e7eb',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    outline: 'none',
  };

  const searchIconStyle: React.CSSProperties = {
    position: 'absolute',
    left: 'clamp(0.75rem, 1vw, 1rem)',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 'clamp(1rem, 1.2vw, 1.25rem)',
    height: 'clamp(1rem, 1.2vw, 1.25rem)',
    color: '#9ca3af',
  };

  const tableContainerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    overflowX: 'auto',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
  };

  const thStyle: React.CSSProperties = {
    textAlign: 'left',
    padding: 'clamp(0.75rem, 1vw, 1rem)',
    color: '#6b7280',
    fontWeight: '500',
    borderBottom: '1px solid #e5e7eb',
    whiteSpace: 'nowrap',
  };

  const tdStyle: React.CSSProperties = {
    padding: 'clamp(0.75rem, 1vw, 1rem)',
    borderBottom: '1px solid #e5e7eb',
    color: '#1f2937',
  };

  const statusIndicatorStyle = (color: string): React.CSSProperties => ({
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '50%',
    backgroundColor: color,
    display: 'inline-block',
    marginRight: '0.5rem',
  });

  const actionButtonStyle: React.CSSProperties = {
    color: '#6b7280',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '0.25rem 0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <MenuTabs />
      
      <div style={mainContentStyle}>
        {/* Stats Cards */}
        <div style={statsContainerStyle}>
          <div style={statCardStyle}>
            <div style={statLabelStyle}>Total Inventory Value</div>
            <div style={statValueStyle}>€1,250,900</div>
          </div>

          <div style={statCardStyle}>
            <div style={statLabelStyle}>Total Products</div>
            <div style={statValueStyle}>1,850 Units</div>
          </div>

          <div style={statCardStyle}>
            <div style={statLabelStyle}>€850 Units</div>
            <div style={statValueStyle}></div>
          </div>

          <div style={warehouseCardStyle}>
            <div style={statLabelStyle}>Warehouse Zone</div>
            <select style={dropdownStyle}>
              <option>All Zones</option>
              <option>Zone A</option>
              <option>Zone B</option>
              <option>Zone C</option>
            </select>
          </div>
        </div>

        {/* Inventory Management Title */}
        <h2 style={inventoryManagementStyle}>Inventory Management</h2>

        {/* Tabs */}
        <div style={tabsContainerStyle}>
          {tabs.map((tab) => (
            <button
              key={tab}
              style={tabButtonStyle(tab === selectedTab)}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Action Buttons and Filters */}
        <div style={actionButtonsContainerStyle}>
          <button style={bulkUploadButtonStyle}>
            <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Bulk Upload (CSV)
          </button>

          <button
            style={filterButtonStyle(showAllLocations)}
            onClick={() => setShowAllLocations(!showAllLocations)}
          >
            <span style={statusIndicatorStyle('#10b981')}></span>
            All Locations
          </button>

          <button
            style={filterButtonStyle(showCategory)}
            onClick={() => setShowCategory(!showCategory)}
          >
            <span style={statusIndicatorStyle('#6b7280')}></span>
            Category
          </button>

          <button
            style={filterButtonStyle(showHitEck)}
            onClick={() => setShowHitEck(!showHitEck)}
          >
            <span style={statusIndicatorStyle('#6b7280')}></span>
            Hit eck
          </button>

          <div style={toggleContainerStyle}>
            <span style={toggleLabelStyle}>Show Products without EPC/</span>
            <div 
              style={toggleSwitchStyle}
              onClick={() => setShowProductsWithoutEPC(!showProductsWithoutEPC)}
            >
              <div style={toggleKnobStyle}></div>
            </div>
          </div>

          <button style={rfidScanButtonStyle} onClick={() => navigate('/scan')}>
            <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            RFID Scan
          </button>

          <button style={createShipmentButtonStyle}>
            <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Shipment
          </button>
        </div>

        {/* Search */}
        <div style={searchContainerStyle}>
          <svg style={searchIconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={searchInputStyle}
          />
        </div>

        {/* Table */}
        <div style={tableContainerStyle}>
          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>Loading products...</div>
          ) : error ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#ef4444' }}>{error}</div>
          ) : (
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}><input type="checkbox" style={{ cursor: 'pointer' }} /></th>
                  <th style={thStyle}>SKU</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Description</th>
                  <th style={thStyle}>Barcode</th>
                  <th style={thStyle}>Price</th>
                  <th style={thStyle}>Quantity</th>
                  <th style={thStyle}>Created At</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr key={item._id}>
                    <td style={tdStyle}><input type="checkbox" style={{ cursor: 'pointer' }} /></td>
                    <td style={tdStyle}>{item.sku}</td>
                    <td style={tdStyle}>{item.name}</td>
                    <td style={tdStyle}>{item.description}</td>
                    <td style={tdStyle}>{item.barcode}</td>
                    <td style={tdStyle}>{item.price}</td>
                    <td style={tdStyle}>{item.quantity}</td>
                    <td style={tdStyle}>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td style={tdStyle}>
                      <a style={actionButtonStyle}>
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
