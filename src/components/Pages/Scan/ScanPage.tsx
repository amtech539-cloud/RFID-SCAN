// Animated dots component for dynamic effect
function AnimatedDots() {
  const [dots, setDots] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 400);
    return () => clearInterval(interval);
  }, []);
  return <span>{dots}</span>;
}
import React, { useState, useEffect } from 'react';
import Navbar from '../../Dashboard/Navbar';
import MenuTabs from '../../Dashboard/MenuTabs';

const ScanPage: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [autoStop, setAutoStop] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [warehouseList, setWarehouseList] = useState<any[]>([]);
    // Fetch warehouse list on mount
    useEffect(() => {
      const token = localStorage.getItem('authToken');
      fetch('http://lv-backend.ap-south-1.elasticbeanstalk.com/warehouse', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.data)) {
            setWarehouseList(data.data);
          }
        })
        .catch(error => {
          console.error('Error fetching warehouse list:', error);
        });
    }, []);
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedSubzone, setSelectedSubzone] = useState('');
  const [selectedBin, setSelectedBin] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [lastScanTime, setLastScanTime] = useState<string>('');
  const [isMatching, setIsMatching] = useState(false);
  const [matchingComplete, setMatchingComplete] = useState(false);
  
  // New state for EPCs and matching
  const [epcApiData, setEpcApiData] = useState<any[]>([]);
  const [csvEpcs, setCsvEpcs] = useState<string[]>([]);
  const [matchedEpcs, setMatchedEpcs] = useState<string[]>([]);
  const [unmatchedEpcs, setUnmatchedEpcs] = useState<string[]>([]);
  const [csvUploaded, setCsvUploaded] = useState(false);
  const [csvFileName, setCsvFileName] = useState<string>('');
  
  const progress = csvEpcs.length > 0 ? Math.min((matchedEpcs.length + unmatchedEpcs.length) / csvEpcs.length * 100, 100) : 0;
  const deviceId = 'RFID-SCANNER-001';
  const scannerModel = 'Zebra FX9600';

 // Add state for upload success

  useEffect(() => {
    // Auto-stop when progress reaches 100%
    if (autoStop && progress >= 100 && isScanning) {
      setIsScanning(false);
      setLastScanTime(new Date().toLocaleString());
    }
  }, [progress, autoStop, isScanning]);

  // Fetch EPC API data on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    fetch('http://lv-backend.ap-south-1.elasticbeanstalk.com/product/epc?limit=50&page=&sort=', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          setEpcApiData(data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching EPC data:', error);
      });
  }, []);

  const handleStartScan = () => {
    setIsScanning(true);
    setIsPaused(false);
    // Show matching simulation
    setIsMatching(true);
    setMatchingComplete(false);
    setTimeout(() => {
      // Match EPCs from API with CSV EPCs
      const apiEpcs = epcApiData.map(item => item.epcNumber);
      const matched = csvEpcs.filter(epc => apiEpcs.includes(epc));
      const unmatched = csvEpcs.filter(epc => !apiEpcs.includes(epc));
      setMatchedEpcs(matched);
      setUnmatchedEpcs(unmatched);
      setIsMatching(false);
      setMatchingComplete(true);
      setIsScanning(false);
      setLastScanTime(new Date().toLocaleString());
    }, 2000); // 2 second matching simulation
  };

  // CSV upload and parse
  const handleUploadReferenceList = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        setCsvFileName(file.name);
        const reader = new FileReader();
        reader.onload = (event: any) => {
          const text = event.target.result as string;
          const lines = text.split(/\r?\n/);
          const epcs: string[] = lines.map((line: string) => line.split(',')[0].trim()).filter(Boolean);
          setCsvEpcs(epcs);
          setCsvUploaded(true); // Update CSV upload handler to set upload success
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handleStopScan = () => {
    setIsScanning(false);
    setIsPaused(false);
    setLastScanTime(new Date().toLocaleString());
  };

  const handlePauseScan = () => {
    setIsPaused(!isPaused);
  };

  const handleSaveScan = () => {
    alert('Scan log saved successfully! Report generation in progress...');
  };

  const handleVerify = () => {
    setIsVerified(true);
    alert('Scan marked as verified!');
  };



  // Styles
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

  const headerCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 1.75vw, 2rem)',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const headerGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'clamp(1rem, 1.5vw, 1.5rem)',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const selectStyle: React.CSSProperties = {
    width: '100%',
    padding: 'clamp(0.5rem, 0.6vw, 0.625rem)',
    border: '1px solid #e5e7eb',
    borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    color: '#1f2937',
    backgroundColor: 'white',
    outline: 'none',
    cursor: 'pointer',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    color: '#6b7280',
    marginBottom: 'clamp(0.25rem, 0.3vw, 0.375rem)',
    fontWeight: '500',
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'clamp(0.5rem, 0.75vw, 1rem)',
    flexWrap: 'wrap',
    marginTop: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const primaryButtonStyle: React.CSSProperties = {
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
  };

  const secondaryButtonStyle: React.CSSProperties = {
    ...primaryButtonStyle,
    backgroundColor: 'white',
    color: '#6b7280',
    border: '1px solid #e5e7eb',
  };

  const dangerButtonStyle: React.CSSProperties = {
    ...primaryButtonStyle,
    backgroundColor: '#ef4444',
  };

  const successButtonStyle: React.CSSProperties = {
    ...primaryButtonStyle,
    backgroundColor: '#10b981',
  };

  const controlsCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const statsBarStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
    padding: 'clamp(1rem, 1.5vw, 1.5rem)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const progressBarContainerStyle: React.CSSProperties = {
    width: '100%',
    height: 'clamp(1rem, 1.25vw, 1.5rem)',
    backgroundColor: '#e5e7eb',
    borderRadius: '9999px',
    overflow: 'hidden',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const progressBarFillStyle: React.CSSProperties = {
    height: '100%',
    backgroundColor: progress >= 100 ? '#10b981' : '#3b82f6',
    width: `${progress}%`,
    transition: 'width 0.3s ease',
  };

  const statsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: 'clamp(1rem, 1.5vw, 1.5rem)',
    marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const statItemStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 1.75vw, 2rem)',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '0.25rem',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    color: '#6b7280',
  };

  const toggleContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const toggleSwitchStyle: React.CSSProperties = {
    position: 'relative',
    width: '2.75rem',
    height: '1.5rem',
    backgroundColor: autoStop ? '#3b82f6' : '#e5e7eb',
    borderRadius: '9999px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const toggleKnobStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0.125rem',
    left: autoStop ? '1.375rem' : '0.125rem',
    width: '1.25rem',
    height: '1.25rem',
    backgroundColor: 'white',
    borderRadius: '9999px',
    transition: 'left 0.2s',
  };

  const deviceInfoStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    padding: 'clamp(0.75rem, 1vw, 1rem)',
    backgroundColor: '#f9fafb',
    borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
    fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
    color: '#6b7280',
    marginTop: 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <MenuTabs />
      
      <div style={mainContentStyle}>
        {/* Header Section */}
        <div style={headerCardStyle}>
          <h1 style={titleStyle}>RFID Scan Management</h1>
          
          <div style={headerGridStyle}>
            <div>
              <label style={labelStyle}>Company</label>
              <select 
                style={selectStyle}
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
              >
                <option value="">Select Company</option>
                <option value="acme">ACME Corporation</option>
                <option value="techsolutions">Tech Solutions Inc</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Warehouse</label>
              <select 
                style={selectStyle}
                value={selectedWarehouse}
                onChange={(e) => setSelectedWarehouse(e.target.value)}
                // Remove disabling for testing
                // disabled={!selectedCompany}
              >
                <option value="">Select Warehouse</option>
                {warehouseList.length === 0 ? (
                  <option disabled>No warehouses found</option>
                ) : (
                  warehouseList.map((wh: any) => (
                    <option key={wh._id} value={wh._id}>{wh.name || 'Unnamed Warehouse'}</option>
                  ))
                )}
              </select>
            </div>

            <div>
              <label style={labelStyle}>Zone</label>
              <select 
                style={selectStyle}
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                disabled={!selectedWarehouse}
              >
                <option value="">Select Zone</option>
                <option value="a">Zone A</option>
                <option value="b">Zone B</option>
                <option value="c">Zone C</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Subzone</label>
              <select 
                style={selectStyle}
                value={selectedSubzone}
                onChange={(e) => setSelectedSubzone(e.target.value)}
                disabled={!selectedZone}
              >
                <option value="">Select Subzone</option>
                <option value="1">Subzone 1</option>
                <option value="2">Subzone 2</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Bin</label>
              <select 
                style={selectStyle}
                value={selectedBin}
                onChange={(e) => setSelectedBin(e.target.value)}
                disabled={!selectedSubzone}
              >
                <option value="">Select Bin</option>
                <option value="01">Bin 01</option>
                <option value="02">Bin 02</option>
                <option value="03">Bin 03</option>
              </select>
            </div>
          </div>

          <div style={buttonGroupStyle}>
            <button style={{
  padding: 'clamp(0.5rem, 0.6vw, 0.625rem) clamp(1rem, 1.25vw, 1.5rem)',
  backgroundColor: '#10b981', // green
  color: 'white',
  border: 'none',
  borderRadius: 'clamp(0.375rem, 0.5vw, 0.5rem)',
  fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)',
  fontWeight: '500',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  position: 'relative',
}} onClick={handleUploadReferenceList}>
  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
  Upload CSV
  {csvUploaded && (
    <span style={{ marginLeft: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
      <svg style={{ width: '1rem', height: '1rem', color: '#f7f8f8ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      {csvFileName && (
        <span style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.875rem)', color: '#e5f0ecff', fontWeight: '500' }}>
          {csvFileName}
        </span>
      )}
    </span>
  )}
</button>
            <button style={secondaryButtonStyle}>
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Select PO
            </button>
            <button style={secondaryButtonStyle}>
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Select Product List
            </button>
          </div>
        </div>

        {/* Scanner Controls */}
        <div style={controlsCardStyle}>
          <h2 style={{ fontSize: 'clamp(1.125rem, 1.25vw, 1.5rem)', fontWeight: '600', color: '#1f2937', marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
            Scanner Controls
          </h2>
          
          <div style={buttonGroupStyle}>
            {!isScanning ? (
              <button style={successButtonStyle} onClick={handleStartScan}>
                <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Start Scan
              </button>
            ) : (
              <>
                <button style={dangerButtonStyle} onClick={handleStopScan}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                  Stop Scan
                </button>
                <button style={secondaryButtonStyle} onClick={handlePauseScan}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
              </>
            )}
            
            <div style={toggleContainerStyle}>
              <span style={{ fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)', color: '#6b7280' }}>Auto-stop at 100%</span>
              <div 
                style={toggleSwitchStyle}
                onClick={() => setAutoStop(!autoStop)}
              >
                <div style={toggleKnobStyle}></div>
              </div>
            </div>
          </div>

          <div style={deviceInfoStyle}>
            <div>
              <strong>Device ID:</strong> {deviceId}
            </div>
            <div>
              <strong>Model:</strong> {scannerModel}
            </div>
            <div>
              <strong>Status:</strong> <span style={{ color: isScanning ? (isPaused ? '#f59e0b' : '#10b981') : '#6b7280' }}>
                {isScanning ? (isPaused ? 'Paused' : 'Active') : 'Idle'}
              </span>
            </div>
          </div>
        </div>

        {/* Live Stats Bar */}
        <div style={statsBarStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(0.5rem, 0.75vw, 1rem)' }}>
            <h2 style={{ fontSize: 'clamp(1.125rem, 1.25vw, 1.5rem)', fontWeight: '600', color: '#1f2937' }}>
              Live Scan Progress
            </h2>
            <span style={{ fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)', color: '#6b7280' }}>
              {lastScanTime && `Last scan: ${lastScanTime}`}
            </span>
          </div>

          <div style={progressBarContainerStyle}>
            <div style={progressBarFillStyle}></div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
            <span style={{ fontSize: 'clamp(1.25rem, 1.5vw, 1.75rem)', fontWeight: '700', color: progress >= 100 ? '#10b981' : '#3b82f6' }}>
              {progress.toFixed(1)}%
            </span>
            <span style={{ fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)', color: '#6b7280', marginLeft: '0.5rem' }}>
              Complete
            </span>
          </div>

          <div style={statsGridStyle}>
            <div style={statItemStyle}>
              <div style={statValueStyle}>{csvEpcs.length}</div>
              <div style={statLabelStyle}>Total EPCs (CSV)</div>
            </div>
            <div style={statItemStyle}>
              <div style={statValueStyle}>{epcApiData.length}</div>
              <div style={statLabelStyle}>Total EPCs (API)</div>
            </div>
            <div style={statItemStyle}>
              <div style={{ ...statValueStyle, color: '#10b981' }}>{matchedEpcs.length}</div>
              <div style={statLabelStyle}>Matched</div>
            </div>
            <div style={statItemStyle}>
              <div style={{ ...statValueStyle, color: '#ef4444' }}>{unmatchedEpcs.length}</div>
              <div style={statLabelStyle}>Unmatched</div>
            </div>
          </div>
        </div>

        {/* Matching Simulation */}
        {isMatching && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
            padding: 'clamp(2rem, 2.5vw, 3rem)',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
            textAlign: 'center',
          }}>
            <style>
              {`@keyframes spin { 100% { transform: rotate(360deg); } } @keyframes dots { 0%, 20% { content: ''; } 40% { content: '.'; } 60% { content: '..'; } 80%, 100% { content: '...'; } }`}
            </style>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg style={{ width: '3rem', height: '3rem', color: '#3b82f6', animation: 'spin 1s linear infinite' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="4" fill="none" opacity="0.2" />
                <path stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" fill="none" d="M12 2a10 10 0 0 1 10 10" />
              </svg>
            </div>
            <h3 style={{ fontSize: 'clamp(1.25rem, 1.5vw, 1.75rem)', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', display: 'inline-block' }}>
              Matching in Progress
              <span style={{ display: 'inline-block', width: '2em', textAlign: 'left' }}>
                <AnimatedDots />
              </span>
            </h3>
            <p style={{ fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)', color: '#6b7280' }}>
              Comparing {csvEpcs.length} EPCs from CSV with {epcApiData.length} EPCs from API
            </p>
          </div>
        )}

        {/* Matched and Unmatched EPCs Results */}
        {matchingComplete && !isMatching && csvEpcs.length > 0 && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: 'clamp(0.5rem, 0.6vw, 0.75rem)',
            padding: 'clamp(1.5rem, 2vw, 2rem)',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
          }}>
            <h3 style={{ fontSize: 'clamp(1.125rem, 1.25vw, 1.5rem)', fontWeight: '600', color: '#10b981', marginBottom: 'clamp(1rem, 1.25vw, 1.5rem)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Matched EPCs ({matchedEpcs.length})
            </h3>
            <div style={{ maxHeight: '200px', overflowY: 'auto', fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)', color: '#1f2937', backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
              {matchedEpcs.length === 0 ? (
                <span style={{ color: '#6b7280' }}>No matched EPCs found</span>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {matchedEpcs.map((epc, index) => (
                    <code key={index} style={{ backgroundColor: '#dcfce7', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', border: '1px solid #86efac' }}>
                      {epc}
                    </code>
                  ))}
                </div>
              )}
            </div>
            <h3 style={{ fontSize: 'clamp(1.125rem, 1.25vw, 1.5rem)', fontWeight: '600', color: '#ef4444', marginBottom: 'clamp(1rem, 1.25vw, 1.5rem)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Unmatched EPCs ({unmatchedEpcs.length})
            </h3>
            <div style={{ maxHeight: '200px', overflowY: 'auto', fontSize: 'clamp(0.875rem, 0.9vw, 0.95rem)', color: '#1f2937', backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '0.5rem' }}>
              {unmatchedEpcs.length === 0 ? (
                <span style={{ color: '#6b7280' }}>No unmatched EPCs found</span>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {unmatchedEpcs.map((epc, index) => (
                    <code key={index} style={{ backgroundColor: '#fee2e2', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', border: '1px solid #fca5a5' }}>
                      {epc}
                    </code>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Save and Actions */}
        <div style={{ marginTop: 'clamp(1rem, 1.5vw, 1.5rem)', display: 'flex', gap: 'clamp(0.5rem, 0.75vw, 1rem)', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 'clamp(0.5rem, 0.75vw, 1rem)' }}>
            <button style={primaryButtonStyle} onClick={handleSaveScan}>
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              Save Scan Log
            </button>
            <button style={secondaryButtonStyle}>
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Export PDF
            </button>
            <button style={secondaryButtonStyle}>
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export CSV
            </button>
          </div>

          <div style={{ display: 'flex', gap: 'clamp(0.5rem, 0.75vw, 1rem)' }}>
            {!isVerified && (
              <button style={successButtonStyle} onClick={handleVerify}>
                <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mark as Verified
              </button>
            )}
            {isVerified && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: '600' }}>
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verified
              </div>
            )}
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default ScanPage;
