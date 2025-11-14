import Navbar from '../Dashboard/Navbar';
import MenuTabs from '../Dashboard/MenuTabs';
import WelcomeBanner from '../Dashboard/WelcomeBanner';
import ShipmentsStats from '../Dashboard/ShipmentsStats';
import SalesOrdersChart from '../Dashboard/SalesOrdersChart';
import AuditStatus from '../Dashboard/AuditStatus';
import InventoryValueChart from '../Dashboard/InventoryValueChart';
import AlertsSidebar from '../Dashboard/AlertsSidebar';

const Dashboard = () => {
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f5f7fa',
    display: 'flex',
    flexDirection: 'column',
  };

  const mainContentStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'clamp(1rem, 1.5vw, 2rem)',
    padding: 'clamp(1rem, 1.5vw, 2rem)',
    flexWrap: 'wrap',
    maxWidth: '100%',
    boxSizing: 'border-box',
  };

  const leftSectionStyle: React.CSSProperties = {
    flex: '1 1 calc(67% - 1rem)',
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
  };

  const chartsRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'clamp(1rem, 1.5vw, 2rem)',
    flexWrap: 'wrap',
  };

  const rightSectionStyle: React.CSSProperties = {
    flex: '1 1 calc(30% - 1rem)',
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(1rem, 1.5vw, 2rem)',
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <MenuTabs />
      
      <div style={mainContentStyle}>
        <div style={leftSectionStyle}>
          <WelcomeBanner />
          <ShipmentsStats />
          
          <div style={chartsRowStyle}>
            <SalesOrdersChart />
            <AuditStatus />
          </div>
        </div>

        <div style={rightSectionStyle}>
          <AlertsSidebar />
          <InventoryValueChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
