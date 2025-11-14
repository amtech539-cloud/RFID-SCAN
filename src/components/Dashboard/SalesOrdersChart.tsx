const SalesOrdersChart = () => {
  // Dummy data for the bar chart
  const data = [
    { day: 'Mon', value: 420, orders: 85 },
    { day: 'Tue', value: 680, orders: 136 },
    { day: 'Wed', value: 530, orders: 106 },
    { day: 'Thu', value: 780, orders: 156 },
    { day: 'Fri', value: 620, orders: 124 },
    { day: 'Sat', value: 890, orders: 178 },
    { day: 'Sun', value: 750, orders: 150 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));
  const totalOrders = data.reduce((sum, d) => sum + d.orders, 0);

  const containerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '1vw',
    padding: '1.5vw',
    flex: '1 1 50%',
    minWidth: '280px',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5vw',
  };

  const titleContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3vw',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(13px, 1vw, 16px)',
    fontWeight: '600',
    color: '#1f2937',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(10px, 0.75vw, 12px)',
    color: '#6b7280',
  };

  const dropdownStyle: React.CSSProperties = {
    padding: '0.4vw 0.8vw',
    borderRadius: '0.4vw',
    border: '1px solid #d1d5db',
    fontSize: 'clamp(10px, 0.8vw, 13px)',
    color: '#6b7280',
    backgroundColor: 'white',
    cursor: 'pointer',
  };

  const chartContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '15vw',
    gap: '0.8vw',
    padding: '1vw 0',
  };

  const barContainerStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5vw',
  };

  const getBarStyle = (value: number): React.CSSProperties => ({
    width: '100%',
    height: `${(value / maxValue) * 100}%`,
    backgroundColor: '#16a085',
    borderRadius: '0.3vw 0.3vw 0 0',
    transition: 'all 0.3s ease',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '0.3vw',
  });

  const valueTextStyle: React.CSSProperties = {
    fontSize: 'clamp(9px, 0.65vw, 11px)',
    color: 'white',
    fontWeight: '600',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 'clamp(9px, 0.7vw, 12px)',
    color: '#6b7280',
    fontWeight: '500',
  };

  const yAxisStyle: React.CSSProperties = {
    position: 'absolute',
    left: '-2vw',
    top: 0,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: 'clamp(9px, 0.7vw, 11px)',
    color: '#9ca3af',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={titleContainerStyle}>
          <h3 style={titleStyle}>Sales / Orders</h3>
          <span style={subtitleStyle}>Total Orders: {totalOrders}</span>
        </div>
        <select style={dropdownStyle}>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={yAxisStyle}>
          <span>900</span>
          <span>675</span>
          <span>450</span>
          <span>225</span>
          <span>0</span>
        </div>
        <div style={chartContainerStyle}>
          {data.map((item, index) => (
            <div key={index} style={barContainerStyle}>
              <div 
                style={getBarStyle(item.value)}
                title={`${item.day}: ${item.value} sales, ${item.orders} orders`}
              >
                <span style={valueTextStyle}>{item.value}</span>
              </div>
              <span style={labelStyle}>{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOrdersChart;
