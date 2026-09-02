import LogoUPPutih from "./LogoUPPutih";

export default {
    title: "Atomic/Icon/Logo UP Putih",
    component: LogoUPPutih,

    argTypes: {
        width: {
            control: {
                type: "number",
            },
        },

        height: {
            control: {
                type: "number",
            },
        },

        alt: {
            control: "text",
        },
    },
};

export const Default = {
    args: {
        width: 150,
        height: 110,
        alt: "Logo Universitas Pertamina Putih",
    },
};

export const Small = {
    args: {
        width: 50,
        height: 37,
        alt: "Logo Universitas Pertamina Putih",
    },
};

export const Medium = {
    args: {
        width: 100,
        height: 73,
        alt: "Logo Universitas Pertamina Putih",
    },
};

export const Large = {
    args: {
        width: 200,
        height: 147,
        alt: "Logo Universitas Pertamina Putih",
    },
};