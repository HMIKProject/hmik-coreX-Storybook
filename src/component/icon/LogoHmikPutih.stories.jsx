import LogoHmikPutih from "./LogoHmikPutih";

export default {
    title: "Atomic/Icon/Logo HMIK Putih",
    component: LogoHmikPutih,

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
        height: 150,
        alt: "Logo HMIK Putih",
    },
};

export const Small = {
    args: {
        width: 50,
        height: 50,
        alt: "Logo HMIK Putih",
    },
};

export const Medium = {
    args: {
        width: 100,
        height: 100,
        alt: "Logo HMIK Putih",
    },
};

export const Large = {
    args: {
        width: 200,
        height: 200,
        alt: "Logo HMIK Putih",
    },
};