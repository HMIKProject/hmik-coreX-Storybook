import LoginCard from "./LoginCard";

export default {
  title: "Atomic/Card/LoginCard",
  component: LoginCard,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

export const Default = {
  args: {
    title: "LOGIN",
    buttonText: "Sign in",
  },
};