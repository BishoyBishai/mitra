import * as React from "react";
import { Segment, Grid, Header, Message, Form, Button } from "semantic-ui-react";
import './style.scss';
const Login = () => {
  return (
    <div className="login-page">
      <Grid className="ui middle aligned center aligned grid">
        <Grid.Column className="column">
          <Header>
            <Header.Content>Log-in to your account</Header.Content>
          </Header>
          <Form
            action=""
            method="get"
            className="ui large form"
          >
            <Segment stacked secondary>
              <Form.Input
                icon="user"
                iconPosition="left"
                type="text"
                name="email"
                placeholder="E-mail address"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                type="password"
                name="password"
                placeholder="Password"
              />
              <Button positive fluid size='large'>Login</Button>
            </Segment>

          </Form>

          <Message>
            New to us?{" "}
            <a href="">
              Register
            </a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default Login;
