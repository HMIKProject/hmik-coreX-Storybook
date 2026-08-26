import React from 'react';
import './InputField.css';

export const InputField = ({
    state = 'default',
    placeholder = 'Placeholder text...',
    value,
    onChange,
    disabled = false,
    ...props
}) => {
    const isDisabled = disabled || state === 'disabled';

    return (
        <div className="input-field-wrapper">
            <input
                type="text"
                className={`input-field input-field--${state}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={isDisabled}
                {...props}
            />
        </div>
    );
};