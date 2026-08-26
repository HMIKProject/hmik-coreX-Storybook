import { InputField } from './InputField';

export default {
    title: 'Atomic/Input/InputField',
    component: InputField,
    tags: ['autodocs'],
    argTypes: {
        state: {
            control: 'select',
            options: ['default', 'hover', 'active', 'disabled', 'success', 'error', 'warning'],
        },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
    },
};

export const Default = {
    args: {
        state: 'default',
        placeholder: 'Default',
    },
};

export const Hover = {
    args: {
        state: 'hover',
        placeholder: 'Hover',
    },
};

export const Active = {
    args: {
        state: 'active',
        placeholder: 'Active',
    },
};

export const Disabled = {
    args: {
        state: 'disabled',
        placeholder: 'Disabled',
        disabled: true,
    },
};

export const Success = {
    args: {
        state: 'success',
        placeholder: 'Success',
    },
};

export const Error = {
    args: {
        state: 'error',
        placeholder: 'Error',
    },
};

export const Warning = {
    args: {
        state: 'warning',
        placeholder: 'Warning',
    },
};