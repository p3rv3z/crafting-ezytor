import axios from "axios";
import { nanoid } from "nanoid";

function Testing() {
  let json = {
    ROOT: {
      type: "div",
      isCanvas: false,
      props: {},
      displayName: "div",
      custom: {},
      hidden: false,
      nodes: ["idIb4cy9_B", "wtdQ-7K12K", "jEJdiXovaw"],
      linkedNodes: {},
    },
    idIb4cy9_B: {
      type: "h1",
      isCanvas: false,
      props: {
        children: "Hello World",
      },
      displayName: "h1",
      custom: {},
      parent: "ROOT",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    "wtdQ-7K12K": {
      type: "p",
      isCanvas: false,
      props: {
        children: "Lorem ipsum dolor sit",
      },
      displayName: "p",
      custom: {},
      parent: "ROOT",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    jEJdiXovaw: {
      type: "div",
      isCanvas: false,
      props: {
        className: "collection-list",
        "is-collection": "true",
        api: "https://jsonplaceholder.typicode.com/posts/1/comments",
      },
      displayName: "div",
      custom: {},
      parent: "ROOT",
      hidden: false,
      nodes: ["XIgMbH8Ijk"],
      linkedNodes: {},
    },
    XIgMbH8Ijk: {
      type: "div",
      isCanvas: false,
      props: {
        className: "collection-item",
        type: "collection-item",
      },
      displayName: "div",
      custom: {},
      parent: "jEJdiXovaw",
      hidden: false,
      nodes: ["532jrThMsh", "1dI70U-Tgz"],
      linkedNodes: {},
    },
    "532jrThMsh": {
      type: "p",
      isCanvas: false,
      props: {
        children: "title 1",
        type: "collection-item-value",
        "collection-key": "name",
      },
      displayName: "p",
      custom: {},
      parent: "XIgMbH8Ijk",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    "1dI70U-Tgz": {
      type: "p",
      isCanvas: false,
      props: {
        children: "body 1 ",
        type: "collection-item-value",
        "collection-key": "body",
      },
      displayName: "p",
      custom: {},
      parent: "XIgMbH8Ijk",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
  };

  const getRandomId = () => nanoid(10);
  const keys = Object.keys(json);
  let collections = [];
  let model = {};

  function traverse(node) {
    // model.push({ [node.id]: node });
    Object.assign(model, { [node.id]: node });
    Object.values(node.nodes).forEach((key) => {
      const node = { id: key, ...json[key] };
      traverse(node);
    });
  }

  function removeDummyModel(id) {
    const node = json[id];
    Object.values(node.nodes).forEach((key) => {
      removeDummyModel(key);
    });
    delete json[id];
  }

  async function fetchData(api) {
    const { data } = await axios.get(api);
    return data;
  }

  async function testJson() {
    let c = [];

    for (let key of keys) {
      const node = { id: key, ...json[key] };
      if (node.props["is-collection"] === "true") {
        const initialChild = {
          id: node.nodes[0],
          ...json[node.nodes[0]],
        };

        traverse(initialChild);

        const data = await fetchData(node.props.api);
        // console.log(data);

        collections.push({
          root: node,
          data: data,
          model: model,
          generatedModel: {},
        });

        model = [];
      }
    }
    return c;
  }

  function setValuesToModel(
    node,
    collectionIndex,
    collectionDataIndex,
    parentId
  ) {
    const { type, "collection-key": collectionKey } = node.props;
    let { root, model, data, generatedModel } = collections[collectionIndex];

    const collectionData = data[collectionDataIndex];

    const newNodeId = getRandomId();

    if (type == "collection-item-value") {
      node.props.children = collectionData[collectionKey];
    }
    // console.log(node.nodes);
    // root.push({ [node.id]: node });

    const newNodes = [];
    Object.values(node.nodes).forEach((key) => {
      const childId = setValuesToModel(
        model[key],
        collectionIndex,
        collectionDataIndex,
        newNodeId
      );

      newNodes.push(childId);
    });

    if (node.parent === root.id) {
      node.parent = root.id;
      root.nodes.push(newNodeId);
    } else {
      node.parent = parentId;
    }

    node.id = newNodeId;
    model[newNodeId] = { ...node };
    delete model[node.id];
    const generatedNode = { ...node, ["nodes"]: newNodes };
    delete generatedNode.id;
    Object.assign(generatedModel, {
      [node.id]: generatedNode,
    });
    // model = { ...model,  };
    // console.log(model);
    return newNodeId;
  }

  async function modifyJson() {
    await testJson();
    const { root, model, data } = collections[0];
    removeDummyModel(root.nodes[0]);

    const collectionData = [...data];

    collectionData.forEach((_, i) => {
      const firstNode = model[Object.keys(model)[0]];
      setValuesToModel(firstNode, 0, i, root.id);
    });

    console.log({ ...json, ...collections[0].generatedModel });
  }

  modifyJson();

  return <div>Testing</div>;
}

export default Testing;

// "-Yk5EBxnlS": {
//     type: "div",
//     isCanvas: false,
//     props: {
//       className: "collection-item",
//     },
//     displayName: "div",
//     custom: {},
//     parent: "jEJdiXovaw",
//     hidden: false,
//     nodes: ["-r2xtYoGiT", "aQ0Ry-MLQQ"],
//     linkedNodes: {},
//   },
//   "-r2xtYoGiT": {
//     type: "p",
//     isCanvas: false,
//     props: {
//       children: "title 2",
//     },
//     displayName: "p",
//     custom: {},
//     parent: "-Yk5EBxnlS",
//     hidden: false,
//     nodes: [],
//     linkedNodes: {},
//   },
//   "aQ0Ry-MLQQ": {
//     type: "p",
//     isCanvas: false,
//     props: {
//       children: "description 2 ",
//     },
//     displayName: "p",
//     custom: {},
//     parent: "-Yk5EBxnlS",
//     hidden: false,
//     nodes: [],
//     linkedNodes: {},
//   },
//   V6NaGrOU8F: {
//     type: "div",
//     isCanvas: false,
//     props: {
//       className: "collection-item",

//     },
//     displayName: "div",
//     custom: {},
//     parent: "jEJdiXovaw",
//     hidden: false,
//     nodes: ["GPThZNLQOD", "OWH3rn04Dv"],
//     linkedNodes: {},
//   },
//   GPThZNLQOD: {
//     type: "p",
//     isCanvas: false,
//     props: {
//       children: "title 3",
//     },
//     displayName: "p",
//     custom: {},
//     parent: "V6NaGrOU8F",
//     hidden: false,
//     nodes: [],
//     linkedNodes: {},
//   },
//   OWH3rn04Dv: {
//     type: "p",
//     isCanvas: false,
//     props: {
//       children: "description 3 ",
//     },
//     displayName: "p",
//     custom: {},
//     parent: "V6NaGrOU8F",
//     hidden: false,
//     nodes: [],
//     linkedNodes: {},
//   },
