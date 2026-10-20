import InputField from "./InputField";

export default {
  title: "Atomic/InputField/InputField Primary",
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'error', 'warning'],
    },
    disabled: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
};

export const Default = {
  args: {
    placeholder: "Default",
    variant: "default",
  },
};

export const Hover = {
  args: {
    placeholder: "Hover",
    className: "input-hover",
  },
};

export const Active = {
  args: {
    placeholder: "Active",
    className: "input-active",
  },
};

export const Disabled = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
};

export const Success = {
  args: {
    placeholder: "Success",
    variant: "success",
  },
};

export const Error = {
  args: {
    placeholder: "Error",
    variant: "error",
  },
};

export const Warning = {
  args: {
    placeholder: "Warning",
    variant: "warning",
  },
};