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

import ".././style.scss";
import { PATHS } from "../../../router/routes";
class SignUp extends React.Component<{ signup }> {
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
    return (
      <div className="login-page">
        <Grid className="ui middle aligned center aligned grid">
          <Grid.Column className="column">
            <Header>
              <Header.Content>Create new account</Header.Content>
            </Header>
            <Form action="" method="get" className="ui large form">
              <Segment textAlign="left" stacked secondary>
                <Form.Input
                  icon="user"
                  label="Your Name:"
                  iconPosition="left"
                  type="text"
                  vlaue={displayName}
                  name="displayName"
                  onChange={this.handleChange}
                  placeholder="Full Name"
                />
                <Form.Input
                  icon="user"
                  label="Your Email:"
                  iconPosition="left"
                  type="text"
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
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <Button onClick={this.handleSubmit} positive fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>

            <Message>
              Have account? <NavLink to={PATHS.LOGIN}>Login</NavLink>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default SignUp;
