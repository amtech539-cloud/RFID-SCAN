import { useNavigate } from 'react-router-dom';

interface ShipmentCardProps {
  type: string;
  count: number;
  total: number;
  icon: string;
  color: string;
  percentChange: string;
  isPositive: boolean;
}

const ShipmentCard = ({ type, count, total, icon, color, percentChange, isPositive }: ShipmentCardProps) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.6rem, 0.8vw, 1rem)',
    padding: 'clamp(1rem, 1.2vw, 1.5rem)',
    border: `clamp(1.5px, 0.15vw, 2px) solid ${color}`,
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(0.6rem, 0.8vw, 1rem)',
    flex: '1 1 0',
    minWidth: 'clamp(12rem, 15vw, 18rem)',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const typeTextStyle: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 0.85vw, 1rem)',
    color: '#6b7280',
    fontWeight: '500',
  };

  const iconContainerStyle: React.CSSProperties = {
    width: 'clamp(2rem, 2.5vw, 3rem)',
    height: 'clamp(2rem, 2.5vw, 3rem)',
    borderRadius: 'clamp(0.4rem, 0.5vw, 0.6rem)',
    backgroundColor: `${color}15`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const countContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'baseline',
    gap: 'clamp(0.25rem, 0.3vw, 0.4rem)',
  };

  const countStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 2vw, 2.25rem)',
    fontWeight: 'bold',
    color: '#1f2937',
  };

  const totalStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 1.1vw, 1.25rem)',
    color: '#9ca3af',
    fontWeight: '500',
  };

  const changeContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(0.25rem, 0.3vw, 0.4rem)',
  };

  const changeTextStyle: React.CSSProperties = {
    fontSize: 'clamp(0.75rem, 0.75vw, 0.875rem)',
    color: isPositive ? '#16a34a' : '#dc2626',
    fontWeight: '600',
  };

  const arrowStyle: React.CSSProperties = {
    width: 'clamp(0.7rem, 0.8vw, 0.9rem)',
    height: 'clamp(0.7rem, 0.8vw, 0.9rem)',
    color: isPositive ? '#16a34a' : '#dc2626',
  };

  const getIconPath = (iconType: string) => {
    const icons: { [key: string]: string } = {
      'inbound': 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      'outbound': 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
      'received': 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      'delivered': 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
    };
    return icons[iconType] || icons['inbound'];
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <span style={typeTextStyle}>{type}</span>
        <div style={iconContainerStyle}>
          <svg style={{ width: 'clamp(1.2rem, 1.5vw, 1.8rem)', height: 'clamp(1.2rem, 1.5vw, 1.8rem)', color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIconPath(icon)} />
          </svg>
        </div>
      </div>
      <div style={countContainerStyle}>
        <span style={countStyle}>{count}</span>
        <span style={totalStyle}>/{total}</span>
      </div>
      <div style={changeContainerStyle}>
        <svg style={arrowStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isPositive ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
        </svg>
        <span style={changeTextStyle}>{percentChange} {isPositive ? 'Up' : 'Less'} from yesterday</span>
      </div>
    </div>
  );
};

const ShipmentsStats = () => {
  const navigate = useNavigate();
  
  const shipments = [
    { type: 'Inbound', count: 485, total: 850, icon: 'inbound', color: '#3b82f6', percentChange: '12.5%', isPositive: true },
    { type: 'Outbound', count: 672, total: 950, icon: 'outbound', color: '#ec4899', percentChange: '8.5%', isPositive: true },
    { type: 'Received', count: 540, total: 750, icon: 'received', color: '#10b981', percentChange: '4.3%', isPositive: false },
    { type: 'Delivered', count: 720, total: 820, icon: 'delivered', color: '#ef4444', percentChange: '15.2%', isPositive: true },
  ];

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'clamp(0.75rem, 1vw, 1.25rem)',
    marginBottom: 'clamp(1rem, 1.5vw, 2rem)',
    flexWrap: 'wrap',
  };

  const sectionHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 'clamp(0.75rem, 1vw, 1.25rem)',
    flexWrap: 'wrap',
    gap: '0.75rem',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 1.1vw, 1.25rem)',
    fontWeight: '600',
    color: '#1f2937',
  };

  const dropdownStyle: React.CSSProperties = {
    padding: 'clamp(0.4rem, 0.5vw, 0.6rem) clamp(0.8rem, 1vw, 1.2rem)',
    borderRadius: 'clamp(0.4rem, 0.5vw, 0.6rem)',
    border: '1px solid #d1d5db',
    fontSize: 'clamp(0.875rem, 0.85vw, 1rem)',
    color: '#6b7280',
    backgroundColor: 'white',
    cursor: 'pointer',
  };

  const buttonStyle: React.CSSProperties = {
    padding: 'clamp(0.4rem, 0.5vw, 0.6rem) clamp(0.8rem, 1vw, 1.2rem)',
    borderRadius: 'clamp(0.4rem, 0.5vw, 0.6rem)',
    border: 'none',
    fontSize: 'clamp(0.875rem, 0.85vw, 1rem)',
    color: 'white',
    backgroundColor: '#16a085',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  };

  return (
    <div>
      <div style={sectionHeaderStyle}>
        <h2 style={titleStyle}>Shipments</h2>
        <div style={{ display: 'flex', gap: 'clamp(0.5rem, 0.75vw, 1rem)', alignItems: 'center' }}>
          <select style={dropdownStyle}>
            <option>Warehouses</option>
            <option>Warehouse A</option>
            <option>Warehouse B</option>
          </select>
          <button 
            style={buttonStyle}
            onClick={() => navigate('/Inventory')}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#138f7a'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#16a085'}
          >
            View Inventory
          </button>
        </div>
      </div>
      <div style={containerStyle}>
        {shipments.map((shipment, index) => (
          <ShipmentCard key={index} {...shipment} />
        ))}
      </div>
    </div>
  );
};

export default ShipmentsStats;
