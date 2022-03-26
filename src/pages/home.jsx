import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";

import { Toolbox } from "../components/Toolbox";
import { SettingsPanel } from "../components/SettingsPanel";
import { Topbar } from "../components/Topbar";

import { Container } from "../components/elements/Container";
import { Button } from "../components/elements/Button";
import { Card, CardTop, CardBottom } from "../components/elements/Card";
import { Text } from "../components/elements/Text";
import { Editor, Frame, Element } from "../../packages/core/src";
import Testing from "../components/Testing";

export default function Home() {
  const json = {
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
      nodes: [
        // "XIgMbH8Ijk",
        "cNbbHVfNvD",
        "tW8lW36ygo",
        "_22-N976az",
        "seHPKG_nlJ",
        "8PX7lQdL1Y",
      ],
      linkedNodes: {},
    },
    "5CZ2sgwUKd": {
      type: "p",
      isCanvas: false,
      props: {
        children: "vero eaque aliquid doloribus et culpa",
        type: "collection-item-value",
        "collection-key": "name",
      },
      displayName: "p",
      custom: {},
      parent: "cNbbHVfNvD",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    JeXyDtwqEW: {
      type: "p",
      isCanvas: false,
      props: {
        children:
          "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et",
        type: "collection-item-value",
        "collection-key": "body",
      },
      displayName: "p",
      custom: {},
      parent: "cNbbHVfNvD",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    cNbbHVfNvD: {
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
      nodes: ["5CZ2sgwUKd", "JeXyDtwqEW"],
      linkedNodes: {},
    },
    BiLz2LOIJa: {
      type: "p",
      isCanvas: false,
      props: {
        children: "vero eaque aliquid doloribus et culpa",
        type: "collection-item-value",
        "collection-key": "name",
      },
      displayName: "p",
      custom: {},
      parent: "tW8lW36ygo",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    "GXdVsj3y-y": {
      type: "p",
      isCanvas: false,
      props: {
        children:
          "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et",
        type: "collection-item-value",
        "collection-key": "body",
      },
      displayName: "p",
      custom: {},
      parent: "tW8lW36ygo",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    tW8lW36ygo: {
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
      nodes: ["BiLz2LOIJa", "GXdVsj3y-y"],
      linkedNodes: {},
    },
    OfoRGmnQJu: {
      type: "p",
      isCanvas: false,
      props: {
        children: "vero eaque aliquid doloribus et culpa",
        type: "collection-item-value",
        "collection-key": "name",
      },
      displayName: "p",
      custom: {},
      parent: "_22-N976az",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    "7nsyr-W5hf": {
      type: "p",
      isCanvas: false,
      props: {
        children:
          "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et",
        type: "collection-item-value",
        "collection-key": "body",
      },
      displayName: "p",
      custom: {},
      parent: "_22-N976az",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    "_22-N976az": {
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
      nodes: ["OfoRGmnQJu", "7nsyr-W5hf"],
      linkedNodes: {},
    },
    Uwm9o6_PxN: {
      type: "p",
      isCanvas: false,
      props: {
        children: "vero eaque aliquid doloribus et culpa",
        type: "collection-item-value",
        "collection-key": "name",
      },
      displayName: "p",
      custom: {},
      parent: "seHPKG_nlJ",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    "SmFsS-w1c9": {
      type: "p",
      isCanvas: false,
      props: {
        children:
          "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et",
        type: "collection-item-value",
        "collection-key": "body",
      },
      displayName: "p",
      custom: {},
      parent: "seHPKG_nlJ",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    seHPKG_nlJ: {
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
      nodes: ["Uwm9o6_PxN", "SmFsS-w1c9"],
      linkedNodes: {},
    },
    "-NajvnvLzv": {
      type: "p",
      isCanvas: false,
      props: {
        children: "vero eaque aliquid doloribus et culpa",
        type: "collection-item-value",
        "collection-key": "name",
      },
      displayName: "p",
      custom: {},
      parent: "8PX7lQdL1Y",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    rPa5RHh5j5: {
      type: "p",
      isCanvas: false,
      props: {
        children:
          "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et",
        type: "collection-item-value",
        "collection-key": "body",
      },
      displayName: "p",
      custom: {},
      parent: "8PX7lQdL1Y",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    "8PX7lQdL1Y": {
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
      nodes: ["-NajvnvLzv", "rPa5RHh5j5"],
      linkedNodes: {},
    },
  };

  let json2 = {
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

  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
          Testing,
        }}
      >
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Topbar />
          <Grid item xs>
            <Frame data={JSON.stringify(json)}>
              {/* <div>
                <Testing />
              </div> */}
              {/* <div>
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit</p>
                <div className="collection-list">
                  <div className="collection-item">
                    <p>title 1</p>
                    <p>description 1 </p>
                  </div>
                  <div className="collection-item">
                    <p>title 2</p>
                    <p>description 2 </p>
                  </div>
                  <div className="collection-item">
                    <p>title 3</p>
                    <p>description 3 </p>
                  </div>
                </div>
              </div> */}
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
