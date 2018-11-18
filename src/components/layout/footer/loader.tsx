import * as React from "react";
import { Header, List, Icon, Segment } from "semantic-ui-react";
import "./style.scss";
const technologyStack = [
  { name: "React", repo: "https://github.com/facebook/react/" },
  { name: "Redux", repo: "https://github.com/reduxjs/react-redux" },
  { name: "TypeScript", repo: "https://github.com/Microsoft/TypeScript" },
  {
    name: "Semantic UI",
    repo: "https://github.com/Semantic-Org/Semantic-UI-React",
  },
  {
    name: "Webpack",
    repo: "https://github.com/webpack/webpack",
  },
  {
    name: "Firebase",
    repo: "https://github.com/firebase/",
  },
  {
    name: "Redux-Thunk",
    repo: "https://github.com/reduxjs/redux-thunk",
  },
];
const Footer = () => (
  <Segment inverted className="footer">
    <Header as="h2" textAlign="center" icon>
      <Icon name="computer" />
      Code Challenge
      <Header.Subheader>
        If you have any questions, I can be reached on either my mobile by
        email(bishoy.bishai@gmail.com). 
      </Header.Subheader>
      <Header.Subheader>Technology Stack is</Header.Subheader>
    </Header>
    <ul className="technology-stack">
      {technologyStack.map(tech => (
        <li key={tech.name}>
          <a href={tech.repo}>{tech.name}</a>
        </li>
      ))}
    </ul>
  </Segment>
);

export default Footer;
