import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import { useNode, Element } from "@craftjs/core";
import { yellow } from "@material-ui/core/colors";

export const CardTop = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    <div ref={connect} className="text-only" style={{background: "green"}}>
      {children}
    </div>
  )
}

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Text)
  }
}

export const CardBottom = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    <div ref={connect} style={{background: "yellow"}}>
      {children}
    </div>
  )
}

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn : (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Button)
  }
}

export const Card = ({ background, padding = 20 }) => {
  const { connectors: {connect, drag} } = useNode();
  return (
    <div ref={ref => connect(drag(ref))}>
    <Container background={background} padding={padding}>
      {/* <div className="text-only"> */}
      <Element is={CardTop}  id="text" canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      {/* </div> */}
      {/* <div className="buttons-only"> */}
      <Element id="buttons" is={CardBottom} canvas>
        <Button size="small" variant="contained" color="primary">Learn more</Button>
      </Element>
      {/* </div> */}
    </Container >
    </div>
  )
}