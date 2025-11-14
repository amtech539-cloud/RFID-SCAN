const AuditStatus = () => {
  const auditData = [
    { status: 'Scheduled', count: 350, total: 450, color: '#16a085' },
    { status: 'Exceptions Flagged', count: 285, total: 450, color: '#5b21b6' },
    { status: 'InProgress', count: 410, total: 450, color: '#f59e0b' },
  ];

  // Weekly chart is currently not rendered; weekly data removed.

  // maxValue removed because weekly chart is not rendered here.

  const containerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '1vw',
    padding: '1.5vw',
    flex: '1 1 45%',
    minWidth: '280px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(13px, 1vw, 16px)',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1.5vw',
  };

  const totalContainerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '1.5vw',
  };

  const totalNumberStyle: React.CSSProperties = {
    fontSize: 'clamp(28px, 2.5vw, 36px)',
    fontWeight: 'bold',
    color: '#1f2937',
    display: 'block',
  };

  const totalLabelStyle: React.CSSProperties = {
    fontSize: 'clamp(11px, 0.85vw, 14px)',
    color: '#6b7280',
    display: 'block',
    marginTop: '0.3vw',
  };

  const progressBarContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '2vw',
    backgroundColor: '#f3f4f6',
    borderRadius: '1vw',
    display: 'flex',
    overflow: 'hidden',
    marginBottom: '1.5vw',
  };

  const getProgressSegmentStyle = (percentage: number, color: string): React.CSSProperties => ({
    width: `${percentage}%`,
    backgroundColor: color,
    transition: 'all 0.3s ease',
  });

  const legendContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8vw',
  };

  const legendItemStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const legendLeftStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5vw',
  };

  const colorDotStyle = (color: string): React.CSSProperties => ({
    width: '0.8vw',
    height: '0.8vw',
    borderRadius: '50%',
    backgroundColor: color,
  });

  const legendTextStyle: React.CSSProperties = {
    fontSize: 'clamp(11px, 0.85vw, 14px)',
    color: '#4b5563',
  };

  const legendValueStyle: React.CSSProperties = {
    fontSize: 'clamp(11px, 0.85vw, 14px)',
    fontWeight: '600',
    color: '#1f2937',
  };

  // Chart layout and bar styles were removed because the chart is not rendered here.
  // If the weekly chart is re-introduced move the chart styles back in.

  const totalAudits = 1350;
  const calculatePercentage = (count: number, total: number) => (count / total) * 100;

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Audit</h3>
      
      <div style={totalContainerStyle}>
        <span style={totalNumberStyle}>{auditData.reduce((acc, item) => acc + item.count, 0)}/{totalAudits}</span>
        <span style={totalLabelStyle}>TOTAL NO.</span>
      </div>

      <div style={progressBarContainerStyle}>
        {auditData.map((item, index) => (
          <div
            key={index}
            style={getProgressSegmentStyle(calculatePercentage(item.count, item.total), item.color)}
          />
        ))}
      </div>

      <div style={{ marginBottom: '1vw' }}>
        <span style={{ fontSize: 'clamp(10px, 0.8vw, 13px)', color: '#6b7280', fontWeight: '500' }}>
          Loan Status in Nos.
        </span>
      </div>

      <div style={legendContainerStyle}>
        {auditData.map((item, index) => (
          <div key={index} style={legendItemStyle}>
            <div style={legendLeftStyle}>
              <div style={colorDotStyle(item.color)} />
              <span style={legendTextStyle}>{item.status}</span>
            </div>
            <span style={legendValueStyle}>{item.count}/{item.total}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5vw' }}>
        <span style={{ fontSize: 'clamp(10px, 0.8vw, 13px)', color: '#6b7280', fontWeight: '500' }}>
          Weekly Audit Activity
        </span>
      </div>

     
    </div>
  );
};

export default AuditStatus;
