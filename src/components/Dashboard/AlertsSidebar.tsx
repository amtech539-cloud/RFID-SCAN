const AlertsSidebar = () => {
  const alerts = [
    {
      type: 'error',
      title: 'Stock Anomaly Detected',
      description: 'Discrepancy in SKU-12647 at Warehouse North (-15 units)',
      time: '04 April, 2021 | 04:00 PM',
      icon: '⚠️',
      color: '#ef4444',
    },
    {
      type: 'warning',
      title: 'Audit Pending Approval',
      description: 'Cycle count for Electronics section requires manager approval',
      time: '04 April, 2021 | 04:00 PM',
      icon: '⚡',
      color: '#f59e0b',
    },
    {
      type: 'success',
      title: 'Shipment Arrived',
      description: 'PO-2024-0156 from TechSupply Co. has been received',
      time: '04 April, 2021 | 04:00 PM',
      icon: '✓',
      color: '#10b981',
    },
    {
      type: 'error',
      title: 'Low Stock Alert',
      description: 'PO-2024-0156 from TechSupply Co. has been received',
      time: '04 April, 2021 | 04:00 PM',
      icon: '⚠️',
      color: '#ef4444',
    },
  ];

  const containerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '0.7vw',
    padding: '0.8vw',
    width: '100%',
    height: 'fit-content',
  };

  const tabsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.7vw', 
    marginBottom: '01vw', 
    borderBottom: '1px solid #e5e7eb',
  };

  const tabStyle = (active: boolean): React.CSSProperties => ({
    fontSize: 'clamp(12px, 0.75vw, 14px)',
    fontWeight: active ? '600' : '400',
    color: active ? '#16a085' : '#6b7280',
    paddingBottom: '0.4vw', 
    borderBottom: active ? '2px solid #16a085' : '2px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.2s',
  });

  const alertsListStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7vw', 
    maxHeight: '20vw', 
    overflowY: 'auto',
  };

  const alertItemStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.6vw', 
    padding: '0.6vw', 
    borderRadius: '0.4vw',
    backgroundColor: '#f9fafb',
    transition: 'all 0.2s',
    cursor: 'pointer',
  };

  const iconContainerStyle = (color: string): React.CSSProperties => ({
    width: '1.5vw', 
    height: '1.5vw',
    borderRadius: '50%',
    backgroundColor: `${color}20`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: 'clamp(8px, 0.8vw, 14px)', 
  });

  const alertContentStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2vw',
  };

  const alertTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(10px, 0.75vw, 18px)', 
    fontWeight: '600',
    color: '#1f2937',
  };

  const alertDescriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(12px, 0.7vw, 20px)', 
    color: '#6b7280',
    lineHeight: '1.5',
  };

  const alertTimeStyle: React.CSSProperties = {
    fontSize: 'clamp(10px, 0.65vw, 12px)',
    color: '#9ca3af',
    marginTop: '0.1vw',
  };

  return (
    <div style={containerStyle}>
      <div style={tabsContainerStyle}>
        <span style={tabStyle(true)}>Alerts</span>
        <span style={tabStyle(false)}>Notifications</span>
      </div>

      <div style={alertsListStyle}>
        {alerts.map((alert, index) => (
          <div
            key={index}
            style={alertItemStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
            }}
          >
            <div style={iconContainerStyle(alert.color)}>
              {alert.icon}
            </div>
            <div style={alertContentStyle}>
              <span style={alertTitleStyle}>{alert.title}</span>
              <span style={alertDescriptionStyle}>{alert.description}</span>
              <span style={alertTimeStyle}>{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsSidebar;
