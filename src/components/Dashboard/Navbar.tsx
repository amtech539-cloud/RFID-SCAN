const Navbar = () => {
  const navbarStyle: React.CSSProperties = {
    width: '100%',
    height: 'clamp(3rem, 3.5vw, 4rem)',
    backgroundColor: 'white',
    borderBottom: '1px solid #e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 clamp(1rem, 2vw, 2.5rem)',
    boxSizing: 'border-box',
  };

  const leftSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(1rem, 2vw, 2.5rem)',
    flex: 1,
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(0.4rem, 0.5vw, 0.6rem)',
  };

  const logoIconStyle: React.CSSProperties = {
    width: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    height: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    backgroundColor: '#2d3748',
    borderRadius: 'clamp(0.25rem, 0.3vw, 0.35rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 1.1vw, 1.25rem)',
    fontWeight: 'bold',
    color: '#2d3748',
  };

  const searchContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(0.4rem, 0.5vw, 0.6rem)',
    padding: 'clamp(0.4rem, 0.5vw, 0.6rem) clamp(0.8rem, 1vw, 1.2rem)',
    backgroundColor: '#f5f7fa',
    borderRadius: 'clamp(0.4rem, 0.5vw, 0.6rem)',
    flex: '0 1 auto',
    minWidth: '150px',
    maxWidth: '300px',
  };

  const searchInputStyle: React.CSSProperties = {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    fontSize: 'clamp(0.875rem, 0.85vw, 1rem)',
    color: '#6b7280',
    width: '100%',
  };

  const searchIconStyle: React.CSSProperties = {
    width: 'clamp(0.875rem, 1vw, 1.125rem)',
    height: 'clamp(0.875rem, 1vw, 1.125rem)',
    color: '#9ca3af',
    flexShrink: 0,
  };

  const userSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(0.4rem, 0.5vw, 0.6rem)',
    cursor: 'pointer',
  };

  const avatarStyle: React.CSSProperties = {
    width: 'clamp(1.75rem, 2vw, 2.25rem)',
    height: 'clamp(1.75rem, 2vw, 2.25rem)',
    borderRadius: '50%',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 'clamp(0.75rem, 0.8vw, 0.875rem)',
    fontWeight: 'bold',
  };

  const userInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const userNameStyle: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 0.9vw, 1rem)',
    fontWeight: '600',
    color: '#1f2937',
  };

  const userRoleStyle: React.CSSProperties = {
    fontSize: 'clamp(0.75rem, 0.7vw, 0.875rem)',
    color: '#6b7280',
  };

  const chevronStyle: React.CSSProperties = {
    width: 'clamp(0.75rem, 0.8vw, 0.875rem)',
    height: 'clamp(0.75rem, 0.8vw, 0.875rem)',
    color: '#6b7280',
  };

  return (
    <nav style={navbarStyle}>
      <div style={leftSectionStyle}>
        {/* Logo */}
        <div style={logoContainerStyle}>
          <div style={logoIconStyle}>
            <svg style={{ width: 'clamp(0.75rem, 0.9vw, 1rem)', height: 'clamp(0.75rem, 0.9vw, 1rem)', color: 'white' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.31-.02 2.54-.3 3.68-.84-.85-1.15-1.42-2.51-1.61-3.99C11.16 23.5 7 19.77 7 15V9l5-2.18L17 9v6c0 .34-.02.67-.05 1h.05c.34 0 .67-.03 1-.08V7L12 2z"/>
            </svg>
          </div>
          <span style={logoTextStyle}>RFID</span>
        </div>

        {/* Search Bar */}
        <div style={searchContainerStyle}>
          <svg style={searchIconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Dashboard"
            style={searchInputStyle}
          />
        </div>
      </div>

      {/* User Section */}
      <div style={userSectionStyle}>
        <div style={avatarStyle}>JD</div>
        <div style={userInfoStyle}>
          <span style={userNameStyle}>LIVEASE</span>
          <span style={userRoleStyle}>Admin</span>
        </div>
        <svg style={chevronStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
