import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset link sent to:', password);
    setIsSubmitted(true);
  };

  const containerStyle: React.CSSProperties = {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '2vw',
    overflow: 'hidden',
  };

  const headerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '1.5vw',
    paddingLeft: '3vw',
    paddingRight: '3vw',
    paddingBottom: '2vw',
    borderBottom: '1px solid #e0e0e0',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8vw',
  };

  const logoIconStyle: React.CSSProperties = {
    width: '2.2vw',
    height: '2.2vw',
    backgroundColor: '#2d3748',
    borderRadius: '0.5vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: '1.5vw',
    fontWeight: 'bold',
    color: '#2d3748',
    margin: 0,
  };

  const userButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5vw',
    padding: '0.6vw 1.2vw',
    border: '1px solid #d4af37',
    borderRadius: '0.5vw',
    backgroundColor: '#fef8e7',
    color: '#b8860b',
    fontSize: '0.9vw',
    cursor: 'pointer',
  };

  const mainContentStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  };

  const cardStyle: React.CSSProperties = {
    width: '57.6vw', 
    padding: '4vw',
    backgroundColor: 'white',
    borderRadius: '1.5vw',
    border: '0.3vw solid #0066ff',
    boxShadow: '0 2vw 4vw rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(18px, 1.4vw, 20px)',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '2.5vw',
    marginTop: '1vw',
  };

  const formStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const labelStyle: React.CSSProperties = {
    alignSelf: 'flex-start',
    fontSize: 'clamp(12px, 0.95vw, 14px)',
    fontWeight: '500',
    color: '#2d3748',
    marginBottom: '0.8vw',
    marginTop: '1.5vw',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '40vw',
    padding: '1vw 1.3vw',
    border: '0.07vw solid #d0d0d0',
    borderRadius: '0.6vw',
    fontSize: 'clamp(12px, 0.95vw, 14px)',
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '40vw',
    padding: '1.1vw',
    marginTop: '3vw',
    marginBottom: '1.5vw',
    backgroundColor: '#16a34a',
    color: 'white',
    border: 'none',
    borderRadius: '0.6vw',
    fontSize: 'clamp(14px, 1vw, 16px)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: 'clamp(12px, 0.95vw, 14px)',
    color: '#6b7280',
    textDecoration: 'none',
    marginBottom: '1.5vw',
  };

  const registerLinkStyle: React.CSSProperties = {
    ...linkStyle,
    color: '#0066ff',
    textDecoration: 'none',
    fontWeight: '600',
    cursor: 'pointer',
  };

  const successMessageStyle: React.CSSProperties = {
    fontSize: 'clamp(13px, 0.95vw, 14px)',
    color: '#16a34a',
    marginTop: '1vw',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
     
      <div style={headerStyle}>
        <div style={logoStyle}>
          <div style={logoIconStyle}>
            <svg style={{ width: '1.4vw', height: '1.4vw', color: 'white' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.31-.02 2.54-.3 3.68-.84-.85-1.15-1.42-2.51-1.61-3.99C11.16 23.5 7 19.77 7 15V9l5-2.18L17 9v6c0 .34-.02.67-.05 1h.05c.34 0 .67-.03 1-.08V7L12 2z"/>
            </svg>
          </div>
          <h1 style={logoTextStyle}>RFID</h1>
        </div>
        <button style={userButtonStyle}>
          <svg style={{ width: '1vw', height: '1vw' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          Test
        </button>
      </div>

     
      <div style={mainContentStyle}>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Enter your New Password</h2>

          <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>New Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="+91- 6789 789 789"
              style={inputStyle}
              required
            />
            
            <label style={labelStyle}>Re-Enter New Password </label>
<input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Update password
            </button>
          </form>

          {isSubmitted && (
            <div style={successMessageStyle}>
              ✓ Password has been updated successfully
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

export default NewPassword;
