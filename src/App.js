import React from 'react';
import logo from './logo.svg';
import './App.css';
import Executor from "./Components/executor"
import GithubWrapper from "./GitHubWrapper"

function DeleteGist(formValue){
  formValue.preventDefault()
  let gister = new GithubWrapper()
  gister.deleteGist(formValue.target[0].value)
}
function CreateGist(formValue) {
  formValue.preventDefault()
  let gister = new GithubWrapper()
  let gistPayload = {
    "description":  formValue.target[0].value,
    "public": true,
    "files": {
      "JustFile": {
        "content": "Poprosimy o 5"
          },
      }
  } 
  gister.createGist(gistPayload)
 
}
function App() {
  return (
    <div className="App">
      <Executor executeFunction={CreateGist}/>
      <Executor executeFunction={DeleteGist}/>
    </div>
  );
}

export default App;
