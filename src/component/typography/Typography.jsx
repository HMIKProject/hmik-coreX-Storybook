import React from "react";
import "./Typography.css";

const Typography = ({
    variant = "body",
    children = "The quick brown fox jumps over the lazy dog",
    className = "",
    }) => {
    const Tag = {
        heading1: "h1",
        heading2: "h2",
        heading3: "h3",
        body: "p",
        caption: "span",
    }[variant];

    return (
        <Tag className={`typography typography-${variant} ${className}`}>
        {children}
        </Tag>
    );
};

export default Typography;