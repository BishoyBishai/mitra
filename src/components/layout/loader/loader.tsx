import * as React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const PageLoader = () => (
  <div>
    <Segment basic>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>

      <Image centered src="/src/assets/img/short-paragraph.png" />
    </Segment>
  </div>
);

export default PageLoader;
