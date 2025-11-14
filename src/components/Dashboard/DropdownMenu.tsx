import { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  icon?: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const DropdownMenu = ({ items, isOpen, onClose, triggerRef, onMouseEnter, onMouseLeave }: DropdownMenuProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 5,
        left: rect.left,
      });
    }
  }, [isOpen, triggerRef]);

  if (!isOpen) return null;

  const dropdownStyle: React.CSSProperties = {
    position: 'fixed',
    top: `${position.top}px`,
    left: `${position.left}px`,
    backgroundColor: 'white',
    borderRadius: 'clamp(0.4rem, 0.5vw, 0.6rem)',
    boxShadow: '0 0.5rem 1.5rem rgba(0, 0, 0, 0.15)',
    minWidth: 'clamp(12rem, 15vw, 18rem)',
    maxWidth: '20rem',
    zIndex: 1000,
    padding: 'clamp(0.4rem, 0.5vw, 0.6rem) 0',
  };

  const itemStyle: React.CSSProperties = {
    padding: 'clamp(0.65rem, 0.8vw, 1rem) clamp(1rem, 1.2vw, 1.4rem)',
    fontSize: 'clamp(0.875rem, 0.85vw, 1rem)',
    color: '#374151',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(0.65rem, 0.8vw, 1rem)',
    transition: 'background-color 0.2s',
    borderBottom: '1px solid #f3f4f6',
  };

  const iconStyle: React.CSSProperties = {
    width: 'clamp(1rem, 1.2vw, 1.4rem)',
    height: 'clamp(1rem, 1.2vw, 1.4rem)',
    color: '#16a085',
    flexShrink: 0,
  };

  return (
    <div 
      ref={dropdownRef} 
      style={dropdownStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            ...itemStyle,
            borderBottom: index === items.length - 1 ? 'none' : '1px solid #f3f4f6',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#f9fafb';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {item.icon && (
            <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
            </svg>
          )}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
