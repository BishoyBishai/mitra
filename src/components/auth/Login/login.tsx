import * as React from "react";
import {
  Segment,
  Grid,
  Header,
  Message,
  Form,
  Button,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../style.scss";
import { PATHS } from "../../../router/routes";
import { ILoginProps } from "../auth-modals";
import { checkField } from "../../../helper/form";
import { validations } from "../utils";

class Login extends React.Component<ILoginProps> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    email: "",
    password: "",
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }
  render() {
    const { email, password } = this.state;
    const emailErrors = checkField(validations.email, email);
    const passwordErrors = checkField(validations.password, password);
    const errors = [].concat(passwordErrors, emailErrors);
    return (
      <div className="login-page">
        <Grid className="ui middle aligned center aligned grid">
          <Grid.Column className="column">
            <Header>
              <Header.Content>Log-in to your account</Header.Content>
            </Header>
            <Form className="ui large form">
              <Segment stacked>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  type="text"
                  name="email"
                  value={email}
                  error={emailErrors.length > 0}
                  onChange={this.handleChange}
                  placeholder="E-mail address"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  name="password"
                  error={passwordErrors.length > 0}
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <Button
                  disabled={errors.length > 0}
                  onClick={this.handleSubmit}
                  positive
                  fluid
                  size="large"
                >
                  Login
                </Button>
                {this.props.authError && (
                  <Message negative>
                    <Message.Header>Login Error</Message.Header>
                  </Message>
                )}
                {errors.length > 0 && (
                  <Message negative>
                    {errors.map(err => (
                      <Message.Content key={err}>{err}</Message.Content>
                    ))}
                  </Message>
                )}
              </Segment>
            </Form>

            <Message className="sign-up-message">
              New to us? <NavLink to={PATHS.SIGN_UP}>Sign up</NavLink>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
