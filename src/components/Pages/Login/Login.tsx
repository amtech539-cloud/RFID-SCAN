import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import rfidLoginImage from '../../../assets/rfid_login_1.png';
import { API_ENDPOINTS } from '../../../config/api';

const Login = () => {
  const [email, setEmail] = useState('testuser@gmail.com');
  const [password, setPassword] = useState('nyKjo2lie3G$');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Store token if provided
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
        // Store user data if provided
        if (data.user) {
          localStorage.setItem('userData', JSON.stringify(data.user));
        }
        // Navigate to dashboard on successful login
        navigate('/dashboard');
      } else {
        // Handle error response
        setError('Invalid credential');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#F5DBC4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '1rem' : 'clamp(1rem, 3vw, 3rem)',
  };

  const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: isMobile ? '100%' : '90rem',
    height: isMobile ? 'auto' : 'clamp(30rem, 85vh, 50rem)',
    backgroundColor: 'white',
    borderRadius: isMobile ? '0.5rem' : 'clamp(0.5rem, 1.2vw, 1.5rem)',
    boxShadow: '0 1.5rem 3rem rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '40fr 60fr',
  };

  const formSectionStyle: React.CSSProperties = {
    padding: isMobile ? '2rem 1.5rem' : 'clamp(1.5rem, 2.5vw, 3rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: isMobile ? 'auto' : '100%',
  };

  const formContainerStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : 'min(28rem, 90%)',
    margin: '0 auto',
    width: '100%',
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: isMobile ? '1.5rem' : 'clamp(1.5rem, 2vw, 2rem)',
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: isMobile ? '0.75rem' : 'clamp(0.75rem, 1vw, 1rem)',
  };

  const logoIconStyle: React.CSSProperties = {
    width: isMobile ? '2rem' : 'clamp(1.8rem, 2vw, 2.5rem)',
    height: isMobile ? '2rem' : 'clamp(1.8rem, 2vw, 2.5rem)',
    backgroundColor: '#1f2937',
    borderRadius: isMobile ? '0.4rem' : 'clamp(0.4rem, 0.5vw, 0.6rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: isMobile ? '0.6rem' : 'clamp(0.6rem, 0.8vw, 1rem)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.5rem' : 'clamp(1.3rem, 2vw, 1.8rem)',
    fontWeight: 'bold',
    color: '#111827',
    margin: 0,
  };

  const welcomeStyle: React.CSSProperties = {
    color: '#6b7280',
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1rem)',
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '1.25rem' : 'clamp(1.25rem, 1.5vw, 1.75rem)',
  };

  const fieldStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1rem)',
    fontWeight: '500',
    color: '#374151',
    marginBottom: isMobile ? '0.5rem' : 'clamp(0.5rem, 0.6vw, 0.7rem)',
    textAlign: 'left',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: isMobile ? '0.75rem 1rem' : 'clamp(0.75rem, 1vw, 1rem) clamp(1rem, 1.2vw, 1.3rem)',
    border: '1px solid #d1d5db',
    borderRadius: isMobile ? '0.5rem' : 'clamp(0.5rem, 0.6vw, 0.7rem)',
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1rem)',
    outline: 'none',
    transition: 'all 0.2s',
  };

  const passwordContainerStyle: React.CSSProperties = {
    position: 'relative',
  };

  const eyeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    right: isMobile ? '0.75rem' : 'clamp(0.75rem, 1vw, 1rem)',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    padding: '0.25rem',
  };

  const checkboxRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    gap: isMobile ? '0.5rem' : '0',
  };

  const checkboxContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };

  const checkboxStyle: React.CSSProperties = {
    width: isMobile ? '1rem' : 'clamp(1rem, 1.1vw, 1.2rem)',
    height: isMobile ? '1rem' : 'clamp(1rem, 1.1vw, 1.2rem)',
    marginRight: isMobile ? '0.5rem' : 'clamp(0.5rem, 0.6vw, 0.7rem)',
    accentColor: '#16a34a',
    cursor: 'pointer',
  };

  const checkboxLabelStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1rem)',
    color: '#374151',
    cursor: 'pointer',
  };

  const forgotLinkStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1rem)',
    color: '#6b7280',
    textDecoration: 'none',
  };

  const loginButtonStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#15803d',
    color: 'white',
    fontWeight: '500',
    padding: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1.1rem)',
    borderRadius: isMobile ? '0.5rem' : 'clamp(0.5rem, 0.6vw, 0.7rem)',
    border: 'none',
    cursor: 'pointer',
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1rem)',
    transition: 'background-color 0.2s',
  };

  const signupButtonStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'transparent',
    color: '#374151',
    fontWeight: '500',
    padding: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1.1rem)',
    borderRadius: isMobile ? '0.5rem' : 'clamp(0.5rem, 0.6vw, 0.7rem)',
    border: '1px solid #d1d5db',
    cursor: 'pointer',
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 1vw, 1rem)',
    transition: 'background-color 0.2s',
  };

  const errorMessageStyle: React.CSSProperties = {
    backgroundColor: '#fee2e2',
    color: '#dc2626',
    padding: isMobile ? '0.75rem' : 'clamp(0.75rem, 0.9vw, 1rem)',
    borderRadius: isMobile ? '0.5rem' : 'clamp(0.5rem, 0.6vw, 0.7rem)',
    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 0.9vw, 1rem)',
    marginBottom: isMobile ? '1rem' : 'clamp(1rem, 1.2vw, 1.5rem)',
    border: '1px solid #fecaca',
  };

    const imageSectionStyle: React.CSSProperties = {
      position: 'relative',
      display: isMobile ? 'none' : 'block',
      overflow: 'hidden',
      height: '100%',
      width: '100%',
    };

    const imageStyle: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} >
        
        <div style={formSectionStyle}>
          <div style={formContainerStyle}>
            
            <div style={headerStyle}>
              <div style={logoContainerStyle}>
                <div style={logoIconStyle}>
                  <svg style={{ width: isMobile ? '1.2rem' : 'clamp(1.2rem, 1.5vw, 1.8rem)', height: isMobile ? '1.2rem' : 'clamp(1.2rem, 1.5vw, 1.8rem)', color: 'white' }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.31-.02 2.54-.3 3.68-.84-.85-1.15-1.42-2.51-1.61-3.99C11.16 23.5 7 19.77 7 15V9l5-2.18L17 9v6c0 .34-.02.67-.05 1h.05c.34 0 .67-.03 1-.08V7L12 2z"/>
                  </svg>
                </div>
                <h1 style={titleStyle}>RFID</h1>
              </div>
              <div style={welcomeStyle}>
                <strong>Welcome,</strong> Please Login to your account
              </div>
            </div>

            
            <form onSubmit={handleLogin} style={formStyle}>
              
              {error && (
                <div style={errorMessageStyle}>
                  {error}
                </div>
              )}

              
              <div style={fieldStyle}>
                <label htmlFor="email" style={labelStyle}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  placeholder="Enter your email"
                  required
                />
              </div>

              
              <div style={fieldStyle}>
                <label htmlFor="password" style={labelStyle}>
                  Password
                </label>
                <div style={passwordContainerStyle}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ ...inputStyle, paddingRight: '3.06vw' }} // 44px equivalent at 1440px
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={eyeButtonStyle}
                  >
                    {showPassword ? (
                      <svg style={{ width: '1.39vw', height: '1.39vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* 20px equivalent at 1440px */}
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m7.757-7.757L21 21" />
                      </svg>
                    ) : (
                      <svg style={{ width: '1.39vw', height: '1.39vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* 20px equivalent at 1440px */}
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

             
              <div style={checkboxRowStyle}>
                <div style={checkboxContainerStyle}>
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={checkboxStyle}
                  />
                  <label htmlFor="remember" style={checkboxLabelStyle}>
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" style={forgotLinkStyle}>
                  Forgot password?
                </Link>
              </div>

              
              <button
                type="submit"
                style={loginButtonStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#166534'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#15803d'}
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>

              
              <button
                type="button"
                style={signupButtonStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        
        <div style={imageSectionStyle}>
          <img
            src={rfidLoginImage}
            alt="RFID Dashboard Preview"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;