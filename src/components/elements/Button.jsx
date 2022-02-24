import React, { useEffect } from "react";
import { Button as MaterialButton, Divider } from "@material-ui/core";
import { useNode, useEditor, Frame } from "../../../packages/core/src";
import { Text } from "./Text";
import { TextSettings } from "./Text";


export const Button = ({ size, variant, color, children }) => {

  const { connectors: { connect, drag }, currentNode } = useNode((node) => ({
    currentNode: node
  }));

  const { query, actions, nodes } = useEditor((state, query) => ({
    hoveredNodeId: state.events.hovered,
    nodes: state.nodes
  }));

  // useEffect(() => {
  //   console.log(nodes)
  // }, [nodes])

  const renderHtml = async () => {

    // const freshNode = {
    //   data: {
    //     type: Text,
    //     name: 'Text',
    //     displayName: 'Text'
    //   }
    // };

    // // Create a new valid Node object from the fresh Node
    // const testNode = query.parseFreshNode(freshNode).toNode();

    // // actions.add(node, 'ROOT');

    // const nodeList = query.parseReactElement(
    //   <div>
    //     {/* <h1>Hello1<span>sdfsdf</span></h1> */}
    //     <h1 class="hello">Hello2</h1>
    //     {/* <h1>Hello3</h1> */}
    //   </div>
    //     // <h1>Hello3</h1>
    //   // <Text text="heading"></Text>
    // ).toNodeTree();


    // const keys = Object.keys(nodeList.nodes)

    // // console.log(nodeList)

    // const newObj = {...nodeList}

    // for (let d of keys) {
    //   const node = newObj.nodes[d];
    //     node.data.isCanvas = true

    //   if (node.data.type == 'h1') {
    //     node.data.name = 'Text'
    //     node.data.displayName = 'Text'
    //     node.data.type = Text
    //     node.data.isCanvas = true
    //     node.data.props.text = 'Heading'
    //     // node.related = { settings: TextSettings }
    //   }
    //   // console.log(node.data.parent)
    //   // actions.add(testNode, 'ROOT');
    //   // break;
    // }

    // console.log(newObj)


    // // query.getSerializedNodes(nodeList);
    // console.log(query.inContext())

    // actions.addNodeTree(nodeList, 'ROOT');

    const userComponents = {
      'div': { type: 'div', name: 'div', displayName: 'div' },
      'h1': { type: Text, name: 'Text', displayName: 'Text' },
      'span': { type: 'span', name: 'span', displayName: 'span' },
    }


    const nodeList = query.parseReactElement(
      <h1>
        A
        <span>BD</span>
        C
      </h1>
    ).toNodeTree();

    
    // debugger;
    // console.log(nodeList)
    const keys = Object.keys(nodeList.nodes)
    // console.log(nodeList)
    actions.addNodeTree(nodeList, 'ROOT');

    // debugger;
    // let parent = null

    // for (let d of keys) {
    //   const node = nodeList.nodes[d]

    //   // if(node.type == 'span') continue;

    //   const { type, name, displayName } = userComponents[node.data.type]

    // //   // if(chil)

    //   const freshNode = {
    //     data: {
    //       type: type,
    //       name: name,
    //       displayName: displayName,
    //       props: { ...node.data.props},
    //       isCanvas: true,
    //     }
    //   };

    //   const testNode = query.parseFreshNode(freshNode).toNode();

    //   if (nodeList.rootNodeId == node.id) {
    //     actions.add(testNode, 'ROOT');
    //   } else {
    //     actions.add(testNode, node.data.parent);
    //   }

    //   for (let e of keys) {
    //     const node = nodeList.nodes[e]
    //     if(node.data.parent == d){
    //       node.data.parent = testNode.id
    //     }
    //   }
    // }

  }

  return (
    <div ref={ref => connect(drag(ref))}>
      <a onClick={renderHtml}
      >
        Add a new Node from a React Element
      </a>
      <div>
        {children}
      </div>
    </div>

  )
}