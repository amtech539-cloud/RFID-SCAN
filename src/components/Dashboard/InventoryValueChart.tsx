const InventoryValueChart = () => {
  const data = [
    { day: 'Mon', value: 1250, displayValue: '$125K' },
    { day: 'Tue', value: 1680, displayValue: '$168K' },
    { day: 'Wed', value: 1420, displayValue: '$142K' },
    { day: 'Thu', value: 1890, displayValue: '$189K' },
    { day: 'Fri', value: 1560, displayValue: '$156K' },
    { day: 'Sat', value: 1730, displayValue: '$173K' },
    { day: 'Sun', value: 1980, displayValue: '$198K' },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  const containerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '1vw',
    padding: '1.5vw',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    marginBottom: '1.5vw',
    gap: '4.5vw',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(13px, 1vw, 16px)',
    fontWeight: '600',
    color: '#1f2937',
  };

  const dropdownStyle: React.CSSProperties = {
    padding: '0.5vw 1.5vw 0.5vw 0.8vw', 
    width: '10vw', 
    borderRadius: '0.4vw',
    border: '1px solid #d1d5db',
    fontSize: 'clamp(10px, 0.8vw, 13px)',
    color: '#6b7280',
    backgroundColor: 'white',
    cursor: 'pointer',
    appearance: 'none', 
    backgroundImage:
      'linear-gradient(45deg, transparent 50%, #6b7280 50%), linear-gradient(135deg, #6b7280 50%, transparent 50%)', 
    backgroundPosition: 'calc(100% - 1vw) center, calc(100% - 0.6vw) center',
    backgroundSize: '0.5vw 0.5vw, 0.5vw 0.5vw',
    backgroundRepeat: 'no-repeat',
  };

  const chartWrapperStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    marginLeft: '3vw',
  };

  const chartContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '15vw',
    gap: '0.8vw',
    flex: 1,
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
  });

  const labelStyle: React.CSSProperties = {
    fontSize: 'clamp(9px, 0.7vw, 12px)',
    color: '#6b7280',
    fontWeight: '500',
  };

  const yAxisStyle: React.CSSProperties = {
    position: 'absolute',
    left: '-3vw',
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
        <h3 style={titleStyle}>Inventory Value</h3>
        <select style={dropdownStyle}>
          <option>Last 30 Days</option>
          <option>Last 60 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>

      <div style={chartWrapperStyle}>
        <div style={yAxisStyle}>
          <span>$200K</span>
          <span>$150K</span>
          <span>$100K</span>
          <span>$50K</span>
          <span>$0</span>
        </div>

        <div style={chartContainerStyle}>
          {data.map((item, index) => (
            <div key={index} style={barContainerStyle}>
              <div
                style={getBarStyle(item.value)}
                title={`${item.day}: ${item.displayValue}`}
              />
              <span style={labelStyle}>{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryValueChart;
