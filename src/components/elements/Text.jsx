import React, { useState, useEffect } from "react";
import { useNode } from "../../../packages/core/src";
import {Slider, FormControl, FormLabel} from "@material-ui/core";
import ContentEditable from 'react-contenteditable'


export const Text = ({text, fontSize, textAlign, children}) => {
  const { connectors: {connect, drag}, selected, dragged,actions: {setProp} } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {!selected && setEditable(false)}, [selected]);

  return (
     <div 
      ref={ref => connect(drag(ref))}
      onClick={e => setEditable(true)}
    >
      {children}
      {/* <ContentEditable
        disabled={!editable}
        html={text} 
        onChange={e => 
          setProp(props => 
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")  
          )
        } 
        tagName="p"
        style={{fontSize: `${fontSize}px`, textAlign}}
      /> */}
      
    </div>
  )
}

export const TextSettings = () => {
  const { actions: {setProp}, fontSize } = useNode((node) => ({
    fontSize: node.data.props.fontSize
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          key={`slider-${fontSize}`}
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp(props => props.fontSize = value);
          }}
        />
      </FormControl>
    </>
  )
}

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20
  },
  related: {
    settings: TextSettings
  }  
}