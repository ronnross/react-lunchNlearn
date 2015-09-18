import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  petehunt: require("./petehunt.png")
};

preloader([images.petehunt]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            React
          </Heading>
          <Heading size={2} fit caps textColor="black">
            A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
          </Heading>
          <Link href="https://github.com/FormidableLabs/spectacle">
            <Text bold caps textColor="tertiary">Presented by</Text>
          </Link>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Ronn Ross</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="white">
          <Heading size={2} textColor="primary" fit caps>
            What is React?
          </Heading>
          <List>
            <ListItem>A JavaScript library for building user interfaces</ListItem>
            <ListItem><Appear fid="1">The V in MVC</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <BlockQuote>
            <Quote>A bridge between a declarative and an Imperative API</Quote>
            <Cite>Jim Sproch</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="secondary" notes="">
          <Text bold caps textColor="tertiary">Simple component</Text>
          <Text textColor="white">
            Picture if you will an icon with three states. Simple Bell (no messages). Bell with a count (1-99 messages). Bell on fire (99+) messages.
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./codeSamples/message.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" notes="">
          <Heading size={2} fit caps textColor="tertiary">
            Why React?
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary" notes="">
          <Image src={images.petehunt.replace('/','')} margin="0px auto 40px" height="293px"/>
          <Heading size={2} fit textColor="black">
            Virtual DOM
          </Heading>
          <Link href="https://www.youtube.com/watch?v=-DX3vJiqxm4">
            <Text bold caps textColor="tertiary">Pete Hunt - Secrets of React's Virtual DOM</Text>
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Layout>
          <Fill>
            <List >
              <ListItem>Facebook</ListItem>
              <ListItem>Instagram</ListItem>
              <ListItem>Netflix</ListItem>
              <ListItem>Walmart</ListItem>
              <ListItem>Github</ListItem>
              <ListItem>PayPal</ListItem>
              <ListItem>Hip Chat</ListItem>
            </List>
            </Fill>
            <Fill>
            <List>
              <ListItem>Khan Academy</ListItem>
              <ListItem>Yahoo</ListItem>
              <ListItem>AirBnb</ListItem>
              <ListItem>Microsoft</ListItem>
              <ListItem>Twitter (fabric)</ListItem>
              <ListItem>KiteMatic</ListItem>
              <ListItem>And more ...</ListItem>
            </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" notes="">
          <Text bold caps textColor="tertiary">Basic component</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./codeSamples/basic.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" notes="">
          <Text bold caps textColor="tertiary">Compose components</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./codeSamples/twoComps.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" notes="">
          <Text bold caps textColor="tertiary">Data Down</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./codeSamples/data-down.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" notes="">
          <Text bold caps textColor="tertiary">And Down</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./codeSamples/and-down.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" notes="">
          <Text bold caps textColor="tertiary">Components Shorthand</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./codeSamples/compShortHand.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" notes="">
          <Text bold caps textColor="tertiary">Component API</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./codeSamples/compAPI.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" notes="">
          <Text bold caps textColor="tertiary">Component Lifecyle</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./codeSamples/lifecycle.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Demo Time
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit size={1} textColor="black">Rich component ecosystem</Heading>
          <Layout>
            <Fill>
              <Link href="http://react.rocks/">
                <Text bold caps textColor="tertiary">React Rocks</Text>
              </Link>
            </Fill>
            <Fill>
              <Link href="http://react-components.com/">
                <Text bold caps textColor="tertiary">React Components</Text>
              </Link>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["spin", "slide"]} bgColor="secondary">
          <Heading size={1} caps fit textColor="tertiary">
            Thank You
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
