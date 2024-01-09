import React, { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import { Button, Flowbite } from "flowbite-react";
import { customTheme } from "./shared/config/theme";
import Card from "./components/App-Card";
import NavBar from "./components/App-NavBar";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <React.Fragment>
      <Flowbite theme={{ theme: customTheme }}>
        <NavBar />
        <Button color="primary">Click me</Button>
        <Button color="primary" className="p-0 rounded-md ring-neutral-100">Get started</Button>
        <Card />
      </Flowbite>
    </React.Fragment>
  );
}

export default App;
