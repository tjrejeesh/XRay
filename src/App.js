import React from 'react';
import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import {XrayProvider} from "./XrayContext";

function App() {
  return (
    <XrayProvider>
      <Header/>
      <FileUpload/>
    </XrayProvider>
  );
}

export default App;
