import React from "react";

function DirList(props) {
  const dirPath = props.dirPath;
  const command = props.command;
  const currentSplitDir = dirPath.split("/");
  const commandString = command.replace("cd ", "");
  commandString.split("../").forEach((character) => {
    character !== "" ? currentSplitDir.push(character) : currentSplitDir.pop();
  });
  console.log(currentSplitDir.join("/"));
  return (
    <div>
      <h4>Current Directory Path {dirPath} </h4>
      <h4>Command {command}</h4>
      <h2>Result {currentSplitDir.join("/")}</h2>
    </div>
  );
}

export default DirList;
