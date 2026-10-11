import React, { useState } from "react";
import InputField from "../input/InputField";
import { Button } from "../button/Button";
import Eyeoff from "../icon/Eyeoff";
import "./LoginCard.css";

const LoginCard = ({ title = "LOGIN", buttonText = "Sign In", onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ email, password });
  };

  return (
    <div className="login-card">
      <h2 className="login-card-title">{title}</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <InputField
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-wrapper">
            <InputField
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Eyeoff
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div className="button-wrapper">
          <Button variant="primary" type="submit">
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;