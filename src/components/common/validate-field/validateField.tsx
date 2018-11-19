import * as React from "react";
import { Form, Message } from "semantic-ui-react";
import { checkField } from "../../../helper/form";
import "./style.scss";

class ValidateField extends React.Component<
  {
    validate;
    value;
    name;
    label?;
    onChange;
    icon?;
    type;
    placeholder?;
    size?;
  },
  any
> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      error: false,
      messages: [],
    };
  }

  handleChange(e) {
    const errors = checkField(this.props.validate, e.target.value);
    this.setState({ error: errors.length > 0, messages: errors });
    this.props.onChange(e);
  }

  render() {
    const { value, name, label, icon, type, placeholder, size } = this.props;
    const { error, messages } = this.state;
    return (
      <div className="form-field-validation">
        <Form.Input
          icon={icon}
          label={label}
          iconPosition="left"
          type={type}
          value={value}
          error={error}
          name={name}
          onChange={this.handleChange}
          placeholder={placeholder}
          size={size || null}
        />
        {error && (
          <Message negative>
            {messages.map(message => (
              <Message.Content key={message}>{message}</Message.Content>
            ))}
          </Message>
        )}
      </div>
    );
  }
}

export default ValidateField;
