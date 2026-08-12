import React from "react";
import "./Card.css";
import { Button } from "../button/Button";

const Card = ({
    image,
    title,
    description,
    buttonText = "Button",
    onClick,
}) => {
    return (
        <div className="card">

            <img
                src={image}
                alt={title}
                className="card-image"
            />

            <div className="card-body">

                <h2>{title}</h2>

                <p>{description}</p>

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