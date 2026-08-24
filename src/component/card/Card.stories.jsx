import Card from "./Card";

import Image from "../../assets/image.svg";

export default {
    title: "Atomic/Card/Card Primary",
    component: Card,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        image: Image,
        title: "Title",
        description: "Description of the event/card lorem ipsum dolor sit amet.",
        buttonText: "Button",
    },
};