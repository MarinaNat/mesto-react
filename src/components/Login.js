import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name: email, value } = e.target;
    this.setState({
      [email]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    // здесь обрабатываем вход в систему
  }
  render() {
    return (
      <div className="login">
        <p className="login__title">Вход</p>
        <form onSubmit={this.handleSubmit} className="login__form">
          <input
            className="login__input"
            required
            id="userEmail"
            name="userEmail"
            type="text"
            value={this.state.userEmail}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <span id="login-email-error" className="error"></span>
          <input
            className="login__input"
            required
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Пароль"
          />
          <span id="login-password-error" className="error"></span>
          
            <button type="submit" className="login__button-container">
              Войти
            </button>
          
        </form>
      </div>
    );
  }
}

export default Login;
