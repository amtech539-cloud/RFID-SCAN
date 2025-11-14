const WelcomeBanner = () => {
  const bannerStyle: React.CSSProperties = {
    backgroundColor: '#16a085',
    borderRadius: 'clamp(0.6rem, 1vw, 1.2rem)',
    padding: 'clamp(1rem, 1.5vw, 2rem) clamp(1.25rem, 2vw, 2.5rem)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    marginBottom: 'clamp(1rem, 1.5vw, 2rem)',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  const leftSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(1rem, 1.5vw, 2rem)',
    flex: '1 1 auto',
  };

  const avatarStyle: React.CSSProperties = {
    width: 'clamp(2.5rem, 3.5vw, 4rem)',
    height: 'clamp(2.5rem, 3.5vw, 4rem)',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  const userIconStyle: React.CSSProperties = {
    width: 'clamp(1.5rem, 2vw, 2.5rem)',
    height: 'clamp(1.5rem, 2vw, 2.5rem)',
    color: 'white',
  };

  const textContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(0.25rem, 0.3vw, 0.4rem)',
  };

  const welcomeTextStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 1.3vw, 1.375rem)',
    fontWeight: 'bold',
  };

  const lastLoginStyle: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 0.85vw, 1rem)',
    opacity: 0.9,
  };

  const rightSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 'clamp(0.25rem, 0.3vw, 0.4rem)',
    flex: '0 1 auto',
  };

  const orgTextStyle: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 0.85vw, 1rem)',
    opacity: 0.9,
  };

  return (
    <div style={bannerStyle}>
      <div style={leftSectionStyle}>
        <div style={avatarStyle}>
          <svg style={userIconStyle} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <div style={textContainerStyle}>
          <span style={welcomeTextStyle}>Welcome back, John Doe</span>
          <span style={lastLoginStyle}>Last Login: 26th July 2024, 19:05</span>
        </div>
      </div>
      <div style={rightSectionStyle}>
        <span style={orgTextStyle}>Active Organization: <strong>Global Supply Chain Corp</strong></span>
        <span style={orgTextStyle}>Active Site: <strong>Seattle Warehouse</strong></span>
      </div>
    </div>
  );
};

export default WelcomeBanner;
