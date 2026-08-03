import { Navbar } from './Navbar';

export default {
    title: 'Components/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Navigation bar utama untuk aplikasi HMIK CoreX',
            },
        },
    },
    argTypes: {
        activeMenu: {
            control: { type: 'select' },
            options: ['Beranda', 'Tentang Kami', 'Departemen'],
            description: 'Menu yang sedang aktif saat ini',
        },
    },
};

export const Default = {
    args: {
        activeMenu: 'Beranda',
    },
};