import { useState, useRef, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';

const MenuTabs = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);
  const buttonRefs = useRef<{ [key: string]: React.RefObject<HTMLButtonElement | null> }>({});

  const tabs = [
    { 
      name: 'Dashboard', 
      active: true,
      hasDropdown: false,
    },
    { 
      name: 'Inventory', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'Stock Overview', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { label: 'Product / SKU Lookup', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
        { label: 'Stock Valuation / Breakdown', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { label: 'Bulk Upload (RFID, Product)', icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' },
        { label: 'Adjustments', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
        { label: 'Transfers / Movements', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
        { label: 'Stock Ageing', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
      ]
    },
    { 
      name: 'RFID Scan', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'Start Live Scan', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z' },
        { label: 'Upload Scan Data', icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' },
        { label: 'Scan History', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Exception Log', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
      ]
    },
    { 
      name: 'Audit', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'Schedule Audits', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
        { label: 'My Assigned Audits', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
        { label: 'Conduct Cycle Count', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
        { label: 'Exception Resolution', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
        { label: 'Audit Certificates/Reports', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { label: 'Audit Trail Search', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
      ]
    },
    { 
      name: 'Procurement', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'Purchase Orders', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { label: 'Vendor List', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
        { label: 'Goods Receipts', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
        { label: 'Vendor Returns', icon: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6' },
      ]
    },
    { 
      name: 'Shipments', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'Outbound Orders', icon: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4' },
        { label: 'Create/Manage Shipments', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { label: 'Track Shipments', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
        { label: 'Returns Handling', icon: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6' },
      ]
    },
    { 
      name: 'Sales & POS', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'POS Checkout', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
        { label: 'Returns/Refunds', icon: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6' },
      ]
    },
    { 
      name: 'Reports', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'KPI Dashboards', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
        { label: 'Custom Report Builder', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
        { label: 'Scheduled/Adhoc Reports', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
      ]
    },
    { 
      name: 'Role Management', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'User Directory', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
        { label: 'Role Templates/Assignments', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { label: 'Session Logs', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { label: 'Access Audit Logs', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
        { label: 'Delegated Access Management', icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' },
      ]
    },
    { 
      name: 'System', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'Org/OU Management', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
        { label: 'Document/Barcode Config', icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z' },
        { label: 'Data Retention Policies', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
        { label: 'Integration Endpoints', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
        { label: 'Notification Rules', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
      ]
    },
    { 
      name: 'Quick Action', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'Start Scanning', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z' },
        { label: 'Create PO', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { label: 'Assign Task', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
        { label: 'Schedule Audit', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
        { label: 'Raise Incident', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
        { label: 'Receive Goods', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
        { label: 'Generate Reports', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { label: 'Quick Stock Check', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
      ]
    },
    { 
      name: 'Support', 
      active: false,
      hasDropdown: true,
      dropdownItems: [
        { label: 'Ticketing', icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z' },
        { label: 'FAQs/Docs', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { label: 'Live Chat', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
      ]
    },
  ];

  // Initialize refs for all tabs using useEffect to avoid re-creating on every render
  useEffect(() => {
    tabs.forEach(tab => {
      if (!buttonRefs.current[tab.name]) {
        buttonRefs.current[tab.name] = { current: null };
      }
    });

    // Cleanup timeout on unmount
    return () => {
      if (hoverTimeoutRef.current) {
        window.clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#3f5f5a',
    display: 'flex',
    alignItems: 'center',
    padding: '0 clamp(1rem, 2vw, 2.5rem)',
    gap: 'clamp(0.75rem, 1.5vw, 2rem)',
    overflowX: 'auto',
    overflowY: 'hidden',
    height: 'clamp(2.5rem, 3vw, 3.5rem)',
    position: 'relative',
    WebkitOverflowScrolling: 'touch',
  };

  const tabStyle = (active: boolean): React.CSSProperties => ({
    padding: 'clamp(0.5rem, 0.6vw, 0.75rem) clamp(0.85rem, 1.2vw, 1.5rem)',
    fontSize: 'clamp(0.8rem, 0.85vw, 0.95rem)',
    fontWeight: active ? '600' : '400',
    color: 'white',
    backgroundColor: active ? '#2d4742' : 'transparent',
    borderRadius: 'clamp(0.35rem, 0.4vw, 0.5rem)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(0.25rem, 0.3vw, 0.4rem)',
  });

  const chevronStyle: React.CSSProperties = {
    width: 'clamp(0.65rem, 0.8vw, 0.9rem)',
    height: 'clamp(0.65rem, 0.8vw, 0.9rem)',
    transition: 'transform 0.2s',
  };

  const handleMouseEnter = (tabName: string, hasDropdown: boolean) => {
    if (hasDropdown) {
      // Clear any existing timeout
      if (hoverTimeoutRef.current) {
        window.clearTimeout(hoverTimeoutRef.current);
      }
      // Open dropdown immediately
      setOpenDropdown(tabName);
    }
  };

  const handleMouseLeave = () => {
    // Delay closing to allow moving to dropdown
    hoverTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    // Clear timeout when mouse enters dropdown
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    // Close dropdown when mouse leaves dropdown
    setOpenDropdown(null);
  };

  return (
    <>
      <div style={containerStyle} className="menu-tabs-scrollable">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={buttonRefs.current[tab.name]}
            style={tabStyle(tab.active)}
            onMouseEnter={() => handleMouseEnter(tab.name, tab.hasDropdown)}
            onMouseLeave={handleMouseLeave}
            onMouseOver={(e) => {
              if (!tab.active) {
                e.currentTarget.style.backgroundColor = '#4a6b65';
              }
            }}
            onMouseOut={(e) => {
              if (!tab.active) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {tab.name}
            {tab.hasDropdown && (
              <svg 
                style={{
                  ...chevronStyle,
                  transform: openDropdown === tab.name ? 'rotate(180deg)' : 'rotate(0deg)',
                }} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        ))}
      </div>

      {tabs.map((tab) => 
        tab.hasDropdown && tab.dropdownItems && (
          <DropdownMenu
            key={tab.name}
            items={tab.dropdownItems}
            isOpen={openDropdown === tab.name}
            onClose={() => setOpenDropdown(null)}
            triggerRef={buttonRefs.current[tab.name]}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          />
        )
      )}
    </>
  );
};

export default MenuTabs;
