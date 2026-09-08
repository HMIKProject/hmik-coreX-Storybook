import React from "react";
import Logo from "../../assets/logoHMIK-putih.svg";

const LogoHmikPutih = ({
    width = 62,
    height = 62,
    alt = "Logo HMIK Putih",
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

export default LogoHmikPutih;