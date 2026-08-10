import { Button } from './Button';

export default {
    title: 'Atomic/Button/Button Primary',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Primary UI component for user interaction',
            },
        },
    },
    argTypes: {
        variant: {
            description: 'Pilihan gaya visual tombol',
            control: { type: 'select' },
            options: ['primary', 'secondary', 'ghost'],
            table: {
                defaultValue: { summary: 'primary' },
            },
        },
        disabled: {
            description: 'Apakah tombol dalam kondisi tidak aktif?',
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        icon: {
            description: 'Menampilkan ikon panah di sebelah teks',
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        children: {
            description: 'Teks atau konten di dalam tombol',
            control: 'text',
            table: {
                defaultValue: { summary: 'Button' },
            },
        },
    },
};

export const Primary = {
    args: {
        children: 'Button',
        variant: 'primary',
    },
};

export const Secondary = {
    args: {
        children: 'Button',
        variant: 'secondary',
    },
};

export const Ghost = {
    args: {
        children: 'Button',
        variant: 'ghost',
    },
};

export const Disabled = {
    args: {
        children: 'Button',
        variant: 'primary',
        disabled: true,
    },
};