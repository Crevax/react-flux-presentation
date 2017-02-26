// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  Text,
  BlockQuote,
  Quote,
  Cite,
  Image,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import FluxExample from './flux-example';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  fluxDiagram: require("../assets/flux-simple-f8-diagram-with-client-action-1300w.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  pentiary: "#878a92"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What the Flux?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Introduction to Reactive Programming on the Web with React.js
          </Text>
        </Slide>
        <Slide transition={["fade"]}  bgColor="secondary" textColor="primary">
          <Heading size={2} fit caps textColor="quartenary">
            Flux Definition
          </Heading>
          <BlockQuote>
            <Quote textSize="16">
              Flux eschews MVC in favor of a unidirectional data flow. When a user interacts with a React view, the view propagates an action through a central dispatcher, to the various stores that hold the application's data and business logic, which updates all of the views that are affected.
            </Quote>
            <Cite>
              React Documentation
            </Cite>
          </BlockQuote>
          <Image src={images.fluxDiagram} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="pentiary">
          <Heading size={2} fit cap lineHeight={1}>
            It's not new
          </Heading>
          <BlockQuote>
            <Quote textSize="16">
              ...publish–subscribe is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers, but instead characterize published messages into classes without knowledge of which subscribers, if any, there may be. Similarly, subscribers express interest in one or more classes and only receive messages that are of interest, without knowledge of which publishers, if any, there are.
            </Quote>
            <Cite>
              Wikipedia
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary">
          <Heading size={2} fit caps>
            Flux Basics
          </Heading>
          <Text>
            <strong>Store:</strong> Contains application state and logic. Receives events from dispatcher. Determines how state updates.
          </Text>
          <Text>
            <strong>Action:</strong> Identifier and payload to be received by the store.
          </Text>
          <Text>
            <strong>Dispatcher:</strong> A single registry of callbacks. Receives actions. Passes actions to Store.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} fit caps textColor="quartenary">
            How React Fits In
          </Heading>
          <Text>
             HTML becomes a product of state.
          </Text>
          <Text>
            Built from components
          </Text>
          <Table>
            <TableRow>
              <TableHeaderItem>Stateful Components</TableHeaderItem>
              <TableHeaderItem>Stateless Components</TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem>
                Receive State as properties
              </TableItem>
              <TableItem>
                Render properties
              </TableItem>
            </TableRow>
            <TableRow>
              <TableItem>
                Render properties
              </TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Example
          </Heading>
          <FluxExample />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Table>
            <TableRow>
              <TableHeaderItem>Stateful Components</TableHeaderItem>
              <TableHeaderItem>Stateless Components</TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem>
                <CodePane lang="jsx" source={require("raw-loader!./code-examples/stateful-component.example")} textSize="10" />
              </TableItem>
              <TableItem>
                <CodePane lang="jsx" source={require("raw-loader!./code-examples/stateless-component.example")} textSize="10" />
              </TableItem>
            </TableRow>
          </Table>
        </Slide>
      </Deck>
    );
  }
}
