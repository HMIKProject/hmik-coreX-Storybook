import React from 'react';
import './Button.css';

export const Button = ({
    children = 'Button',
    variant = 'primary',
    disabled = false,
    icon = false,
    onClick,
    ...props
}) => {
    return (
        <button
            className={`custom-btn btn-${variant}`}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            <span>{children}</span>
            {icon && (
                <svg
                    className="btn-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                </svg>
            )}
        </button>
    );
};