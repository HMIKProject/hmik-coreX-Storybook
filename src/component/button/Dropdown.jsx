import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

export const Dropdown = ({
  options = [],
  value,
  placeholder = 'Pilih opsi...',
  onChange,
  forceOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMenuOpen = forceOpen !== undefined ? forceOpen : isOpen;

  const handleSelect = (option) => {
    if (onChange) onChange(option);
    setIsOpen(false);
  };

  const displayValue = value || placeholder;

  return (
    <div className="dropdown-wrapper">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn"
      >
        <span>{displayValue}</span>
        <span className="dropdown-icon">
          {isMenuOpen ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 8l7 10 7-10z" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </span>
      </button>

      {isMenuOpen && options.length > 0 && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="dropdown-item"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  /** Array berisi daftar pilihan yang akan dirender */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Nilai opsi yang sedang terpilih */
  value: PropTypes.string,
  /** Teks default yang muncul saat belum ada opsi yang dipilih */
  placeholder: PropTypes.string,
  /** Fungsi callback saat opsi di-klik */
  onChange: PropTypes.func,
  /** Prop opsional untuk Storybook */
  forceOpen: PropTypes.bool,
};