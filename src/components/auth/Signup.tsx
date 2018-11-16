import * as React from "react";
import { Segment, Grid, Header, Message, Form, Button } from "semantic-ui-react";
import './style.scss';
const SignUp = () => {
  return (
    <div className="login-page">
      <Grid className="ui middle aligned center aligned grid">
        <Grid.Column className="column">
          <Header>
            <Header.Content>Create new account</Header.Content>
          </Header>
          <Form
            action=""
            method="get"
            className="ui large form"
          >
            <Segment textAlign='left' stacked secondary>
              <Form.Input
                icon="user"
                label="Your Name:"
                iconPosition="left"
                type="text"
                name="text"
                placeholder="Full Name"
              />
              <Form.Input
                icon="user"
                label="Your Email:"
                iconPosition="left"
                type="text"
                name="email"
                placeholder="E-mail address"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Your Password:"
                type="password"
                name="password"
                placeholder="Password"
              />
              <Button positive fluid size='large'>Sign Up</Button>
            </Segment>

          </Form>

          <Message>
            Have account?{" "}
            <a href="">
              Login
            </a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default SignUp;
