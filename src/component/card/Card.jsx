import React from "react";
import "./Card.css";
import  { Button }  from "../button/Button";
import Typography from '../typography/Typography';

const Card = ({ image, title, description, buttonText = "Button", onClick, variant = "default" }) => {
    return (
        <div className={`card ${variant !== 'default' ? variant : ''}`}>

            <img
                src={image}
                alt={title}
                className="card-image"
            />

            <div className="card-body">

                <Typography variant="heading3" className="gallery-card-title">{title}</Typography>
                
                {description && <Typography>{description}</Typography>}

                <Button
                    variant="primary"
                    onClick={onClick}
                >
                    {buttonText}
                </Button>

            </div>

        </div>
    );
};

export default Card;