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
import "./../style.scss";
import { PATHS } from "../../../router/routes";
import { checkField, IConditionKey } from "../../../helper/form";
class SignUp extends React.Component<{ signup; authError }> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    email: "",
    password: "",
    displayName: "",
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }
  render() {
    const { email, password, displayName } = this.state;
    const displayNameErrors = checkField(
      [
        {
          type: IConditionKey.REQUIRED,
          message: "Field DisplayName is required",
        },
        {
          type: IConditionKey.MIN_LENGTH,
          message: "Field DisplayName must be more than 4 characters",
          value: 4,
        },
      ],
      displayName,
    );
    const emailErrors = checkField(
      [
        {
          type: IConditionKey.REQUIRED,
          message: "Field Email is required",
        },
        {
          type: IConditionKey.EMAIL,
          message: "Field Email Address must have a valid form",
        },
      ],
      email,
    );
    const passwordErrors = checkField(
      [
        {
          type: IConditionKey.REQUIRED,
          message: "Field Password is required",
        },
        {
          type: IConditionKey.MIN_LENGTH,
          message: "Field Password must be more than 6 characters",
          value: 6,
        },
      ],
      password,
    );
    const errors = [].concat(passwordErrors, emailErrors, displayNameErrors);
    return (
      <div className="login-page">
        <Grid className="ui middle aligned center aligned grid">
          <Grid.Column className="column">
            <Header>
              <Header.Content>Create new account</Header.Content>
            </Header>
            <Form action="" method="get" className="ui large form">
              <Segment textAlign="left" stacked >
                <Form.Input
                  icon="user"
                  label="Your Name:"
                  iconPosition="left"
                  type="text"
                  value={displayName}
                  error={displayNameErrors.length > 0}
                  name="displayName"
                  onChange={this.handleChange}
                  placeholder="Full Name"
                />
                <Form.Input
                  icon="user"
                  label="Your Email:"
                  iconPosition="left"
                  type="text"
                  error={emailErrors.length > 0}
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="E-mail address"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Your Password:"
                  type="password"
                  name="password"
                  error={passwordErrors.length > 0}
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <Button
                  disabled={errors.length > 0}
                  onClick={this.handleSubmit}
                  positive
                  fluid
                  size="large"
                >
                  Sign Up
                </Button>
              </Segment>
            </Form>
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
            <Message className="sign-up-message">
              Have account? <NavLink to={PATHS.LOGIN}>Login</NavLink>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default SignUp;
