import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset link sent to:', email);
    setIsSubmitted(true);
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: isMobile ? '1rem' : 'clamp(1rem, 2vw, 2rem)',
  };

  const headerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isMobile ? '1rem' : 'clamp(1rem, 1.5vw, 2rem) clamp(1.5rem, 3vw, 3rem)',
    borderBottom: '1px solid #e0e0e0',
    flexWrap: 'wrap',
    gap: isMobile ? '1rem' : '0',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.5rem' : 'clamp(0.5rem, 0.8vw, 1rem)',
  };

  const logoIconStyle: React.CSSProperties = {
    width: isMobile ? '2rem' : 'clamp(1.8rem, 2.2vw, 2.5rem)',
    height: isMobile ? '2rem' : 'clamp(1.8rem, 2.2vw, 2.5rem)',
    backgroundColor: '#2d3748',
    borderRadius: isMobile ? '0.4rem' : 'clamp(0.4rem, 0.5vw, 0.6rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.25rem' : 'clamp(1.25rem, 1.5vw, 1.75rem)',
    fontWeight: 'bold',
    color: '#2d3748',
    margin: 0,
  };

  const userButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.4rem' : 'clamp(0.4rem, 0.5vw, 0.6rem)',
    padding: isMobile ? '0.5rem 1rem' : 'clamp(0.5rem, 0.6vw, 0.8rem) clamp(1rem, 1.2vw, 1.5rem)',
    border: '1px solid #d4af37',
    borderRadius: isMobile ? '0.4rem' : 'clamp(0.4rem, 0.5vw, 0.6rem)',
    backgroundColor: '#fef8e7',
    color: '#b8860b',
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 0.9vw, 1rem)',
    cursor: 'pointer',
  };

  const mainContentStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    padding: isMobile ? '1rem' : 'clamp(1rem, 2vw, 2rem)',
  };

  const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: isMobile ? '100%' : 'clamp(30rem, 55vw, 50rem)',
    padding: isMobile ? '2rem 1.5rem' : 'clamp(2rem, 4vw, 4rem)',
    backgroundColor: 'white',
    borderRadius: isMobile ? '0.75rem' : 'clamp(0.75rem, 1.5vw, 2rem)',
    border: isMobile ? '2px solid #0066ff' : 'clamp(2px, 0.3vw, 4px) solid #0066ff',
    boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.125rem' : 'clamp(1.125rem, 1.4vw, 1.5rem)',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: isMobile ? '1.5rem' : 'clamp(1.5rem, 2.5vw, 2.5rem)',
    marginTop: isMobile ? '0.5rem' : 'clamp(0.5rem, 1vw, 1rem)',
  };

  const formStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const labelStyle: React.CSSProperties = {
    alignSelf: 'flex-start',
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 0.95vw, 1rem)',
    fontWeight: '500',
    color: '#2d3748',
    marginBottom: isMobile ? '0.5rem' : 'clamp(0.5rem, 0.8vw, 1rem)',
    marginTop: isMobile ? '1rem' : 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: isMobile ? '100%' : 'clamp(25rem, 40vw, 35rem)',
    padding: isMobile ? '0.875rem 1rem' : 'clamp(0.875rem, 1vw, 1.2rem) clamp(1rem, 1.3vw, 1.5rem)',
    border: '1px solid #d0d0d0',
    borderRadius: isMobile ? '0.5rem' : 'clamp(0.5rem, 0.6vw, 0.75rem)',
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 0.95vw, 1rem)',
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: isMobile ? '100%' : 'clamp(25rem, 40vw, 35rem)',
    padding: isMobile ? '0.875rem' : 'clamp(0.875rem, 1.1vw, 1.3rem)',
    marginTop: isMobile ? '1.5rem' : 'clamp(1.5rem, 3vw, 3rem)',
    marginBottom: isMobile ? '1rem' : 'clamp(1rem, 1.5vw, 1.5rem)',
    backgroundColor: '#16a34a',
    color: 'white',
    border: 'none',
    borderRadius: isMobile ? '0.5rem' : 'clamp(0.5rem, 0.6vw, 0.75rem)',
    fontSize: isMobile ? '1rem' : 'clamp(1rem, 1vw, 1.125rem)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 0.95vw, 1rem)',
    color: '#6b7280',
    textDecoration: 'none',
    marginBottom: isMobile ? '1rem' : 'clamp(1rem, 1.5vw, 1.5rem)',
  };

  const registerLinkStyle: React.CSSProperties = {
    ...linkStyle,
    color: '#0066ff',
    textDecoration: 'none',
    fontWeight: '600',
    cursor: 'pointer',
  };

  const successMessageStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 0.95vw, 1rem)',
    color: '#16a34a',
    marginTop: isMobile ? '0.75rem' : 'clamp(0.75rem, 1vw, 1rem)',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
     
      <div style={headerStyle}>
        <div style={logoStyle}>
          <div style={logoIconStyle}>
            <svg style={{ width: isMobile ? '1rem' : 'clamp(1rem, 1.4vw, 1.6rem)', height: isMobile ? '1rem' : 'clamp(1rem, 1.4vw, 1.6rem)', color: 'white' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.31-.02 2.54-.3 3.68-.84-.85-1.15-1.42-2.51-1.61-3.99C11.16 23.5 7 19.77 7 15V9l5-2.18L17 9v6c0 .34-.02.67-.05 1h.05c.34 0 .67-.03 1-.08V7L12 2z"/>
            </svg>
          </div>
          <h1 style={logoTextStyle}>RFID</h1>
        </div>
        <button style={userButtonStyle}>
          <svg style={{ width: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1.125rem)', height: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1.125rem)' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          Test
        </button>
      </div>

     
      <div style={mainContentStyle}>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Enter Email Id to generate password reset link</h2>

          <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>Email ID/Mobile Number</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="+91- 6789 789 789"
              style={inputStyle}
              required
            />

            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#15803d'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
            >
              Generate Link
            </button>
          </form>

          {isSubmitted && (
            <div style={successMessageStyle}>
              ✓ Password reset link has been sent to your email
            </div>
          )}

          <div style={{ marginTop: '0.5vw' }}>
            <span style={linkStyle}>Don't have an account? </span>
            <Link to="/" style={registerLinkStyle}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
