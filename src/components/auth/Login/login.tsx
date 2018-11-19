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
import ValidateField from "../../common/validate-field/validateField";

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

    return (
      <div className="login-page">
        <Grid className="ui middle aligned center aligned grid">
          <Grid.Column className="column">
            <Header>
              <Header.Content>Log-in to your account</Header.Content>
            </Header>
            <Form className="ui large form">
              <Segment stacked>
                <ValidateField
                  icon="user"
                  type="text"
                  name="email"
                  value={email}
                  validate={validations.email}
                  onChange={this.handleChange}
                  placeholder="E-mail address"
                />
                <ValidateField
                  icon="lock"
                  type="password"
                  name="password"
                  validate={validations.password}
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <Button
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
