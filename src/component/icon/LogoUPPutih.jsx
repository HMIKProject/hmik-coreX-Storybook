import React from "react";
import Logo from "../../assets/logoUP-putih.svg";

const LogoUPPutih = ({
    width = 68,
    height = 50,
    alt = "Logo Universitas Pertamina Putih",
}) => {
    return (
        <img
            src={Logo}
            width={width}
            height={height}
            alt={alt}
        />
    );
};

export default LogoUPPutih;