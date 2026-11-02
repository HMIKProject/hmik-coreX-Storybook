import React from "react";
import OTPInputGroup from "./OTPInputGroup";

export default {
  title: "Component/Input/OTPInputGroup",
  component: OTPInputGroup,
  tags: ["autodocs"],
  argTypes: {
    length: {
      control: { type: "number", min: 4, max: 8 },
      description: "Jumlah digit input OTP",
    },
    isError: {
      control: "boolean",
      description: "Status error validasi",
    },
    disabled: {
      control: "boolean",
      description: "Status disabled",
    },
    autoFocus: {
      control: "boolean",
      description: "Auto focus pada digit pertama",
    },
    onChange: { action: "changed" },
    onComplete: { action: "completed" },
  },
};

export const Default = {
  args: {
    length: 6,
    isError: false,
    disabled: false,
    autoFocus: true,
  },
};

export const WithPreFilledValue = {
  args: {
    length: 6,
    value: "101230",
    isError: false,
  },
};

export const ErrorState = {
  args: {
    length: 6,
    value: "9999",
    isError: true,
  },
};

export const FourDigits = {
  args: {
    length: 4,
    isError: false,
  },
};

export const Disabled = {
  args: {
    length: 6,
    value: "123456",
    disabled: true,
  },
};
