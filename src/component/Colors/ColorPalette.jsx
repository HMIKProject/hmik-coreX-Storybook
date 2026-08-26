import React from 'react';
import './ColorPalette.css';

const brandColors = [
    { name: 'Primary', color: 'var(--color-primary)', hex: '#4059AD' },
    { name: 'Secondary', color: 'var(--color-secondary)', hex: '#F4B943' },
];

const stateColors = [
    { name: 'Success', color: 'var(--color-success)', hex: '#27AE60' },
    { name: 'Error', color: 'var(--color-error)', hex: '#E74C3C' },
    { name: 'Warning', color: 'var(--color-warning)', hex: '#E67E22' },
    { name: 'Info', color: 'var(--color-info)', hex: '#3498DB' },
];

const neutralColors = [
    { name: 'Background', color: 'var(--color-background)', hex: '#F0F2F1' },
    { name: 'Text', color: 'var(--color-text)', hex: '#2B2B2B' },
];

export const ColorPalette = () => {
    return (
        <div className="color-palette-wrapper">
            {/* Group 1: Brand Colors */}
            <div className="color-row">
                {brandColors.map((item) => (
                    <div key={item.name} className="color-block-container">
                        <div className="color-swatch" style={{ backgroundColor: item.color }} />
                        <span className="color-label">{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Group 2: State Colors */}
            <div className="color-row">
                {stateColors.map((item) => (
                    <div key={item.name} className="color-block-container">
                        <div className="color-swatch" style={{ backgroundColor: item.color }} />
                        <span className="color-label">{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Group 3: Neutral Colors */}
            <div className="color-row">
                {neutralColors.map((item) => (
                    <div key={item.name} className="color-block-container">
                        <div className="color-swatch" style={{ backgroundColor: item.color }} />
                        <span className="color-label">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};