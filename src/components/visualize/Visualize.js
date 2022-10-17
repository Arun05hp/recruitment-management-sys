import React, { useState } from "react";
import { Graph } from "react-d3-graph";
import { Navigate } from "react-router-dom";

function EmployeesTo_NodesLinks(empArr) {
  const data = {
    links: [],
    nodes: [],
  };
  for (let anEmp of empArr) {
    /////////////Making EMP Nodes//////////////
    if (!data.nodes.find((aNode) => aNode.id === anEmp.firstName)) {
      data.nodes.push({
        id: anEmp.firstName,
        pKey: anEmp.id,
        color: "yellowgreen",
        symbolType: "square",
      });
    }

    /////////////Making COMP Nodes//////////////
    if (anEmp.company) {
      /* FOr a newly added EMP, not allocated to a company, BUT has a technology!! */
      /* aComp check is required */
      if (!data.nodes.find((aNode) => aNode.id === anEmp.company.name)) {
        data.nodes.push({
          id: anEmp.company.name,
          pKey: anEmp.company.id,
          color: "lightseagreen",
          symbolType: "diamond",
        });
      }
      /////////////Making EMP-COMP Links//////////////
      data.links.push({
        source: anEmp.firstName,
        target: anEmp.company.name,
        color: "#7678ed",
      });
    }

    /////////////Making TECH Nodes//////////////
    for (let aTech of anEmp.technologies) {
      if (!data.nodes.find((aNode) => aNode.id === aTech.name)) {
        data.nodes.push({
          id: aTech.name,
          pKey: aTech.id,
          color: "orangered",
          symbolType: "circle",
        });
      }
      /////////////Making EMP-TECH Links//////////////
      data.links.push({
        source: anEmp.firstName,
        target: aTech.name,
        color: "#ebc0da",
      });
      /////////////Making COMP-TECH Links//////////////
      if (anEmp.company) {
        /* FOr a newly added EMP, not allocated to a company, BUT has a technology!! */
        /* aComp check is required */
        if (
          !data.links.find(
            (aLink) =>
              aLink.source === anEmp.company.name && aLink.target === aTech.name
          )
        ) {
          data.links.push({
            source: anEmp.company.name,
            target: aTech.name,
            color: "#9dbf95",
          });
        }
      }
    }
  }
  // console.log(data);
  return data;
}

export default function Visualize({ employees }) {
  const data = EmployeesTo_NodesLinks(employees);

  const myConfig = {
    automaticRearrangeAfterDropNode: false,
    nodeHighlightBehavior: true,
    linkHighlightBehavior: true,
    collapsible: false,
    directed: false,
    highlightOpacity: 0.35,
    height: 418,
    width: 750,
    maxZoom: 8,
    minZoom: 0.1,
    d3: {
      alphaTarget: 0,
      gravity: -490,
      linkLength: 80,
      linkStrength: 1,
      disableLinkForce: false,
      force: true,
    },
    initialZoom: 1.2,
    node: {
      color: "slategrey",
      size: 266,
      highlightStrokeColor: "darkslategrey",
      highlightStrokeWidth: 3,
      opacity: 1,
      highlightFontSize: 12,
      highlightFontWeight: "bold",
    },
    link: {
      highlightColor: "lawngreen",
    },
  };

  const [selectedNode, setSelectedNode] = useState(null);

  // graph event callbacks
  const onClickGraph = () => {
    window.alert(`Clicked the graph background`);
  };

  const onClickNode = (nodeId) => {
    const selectedNode = data.nodes.find((_) => _.id === nodeId);
    const redirectUrl =
      selectedNode !== null && selectedNode.pKey[0] === "T"
        ? `/technologies/${selectedNode.pKey}/${selectedNode.id}`
        : selectedNode.pKey[0] === "E"
        ? `/employees/${selectedNode.pKey}/${selectedNode.id}`
        : `/companies/${selectedNode.pKey}/${selectedNode.id}`;
    setSelectedNode({ selectedNode, redirectUrl });
  };

  // const onDoubleClickNode = function (nodeId) {
  //   window.alert(`Double clicked node ${nodeId}`);
  // };

  // const onRightClickNode = function (event, nodeId) {
  //   window.alert(`Right clicked node ${nodeId}`);
  // };

  // const onMouseOverNode = function (nodeId) {
  //   window.alert(`Mouse over node ${nodeId}`);
  // };

  // const onMouseOutNode = function (nodeId) {
  //   window.alert(`Mouse out node ${nodeId}`);
  // };

  // const onClickLink = function (source, target) {
  //   window.alert(`Clicked link between ${source} and ${target}`);
  // };

  // const onRightClickLink = function (event, source, target) {
  //   window.alert(`Right clicked link between ${source} and ${target}`);
  // };

  // const onMouseOverLink = function (source, target) {
  //   window.alert(`Mouse over in link between ${source} and ${target}`);
  // };

  // const onMouseOutLink = function (source, target) {
  //   window.alert(`Mouse out link between ${source} and ${target}`);
  // };

  // const onNodePositionChange = function (nodeId, x, y) {
  //   window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
  // };

  return selectedNode ? (
    <Navigate push to={selectedNode.redirectUrl} />
  ) : (
    <>
      <Graph
        id="graph-id"
        data={data}
        config={myConfig}
        onClickGraph={onClickGraph}
        onClickNode={onClickNode}
        //onDoubleClickNode={onDoubleClickNode}
        //onRightClickNode={onRightClickNode}
        //onNodePositionChange={onNodePositionChange}

        //onClickLink={onClickLink}
        //onRightClickLink={onRightClickLink}
        //onMouseOverNode={onMouseOverNode}
        //onMouseOutNode={onMouseOutNode}
        //onMouseOverLink={onMouseOverLink}
        //onMouseOutLink={onMouseOutLink}
      />
    </>
  );
}
