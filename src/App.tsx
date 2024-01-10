import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { Flowbite } from "flowbite-react";
import Card from "./components/App-Card";
import NavBar from "./components/App-NavBar";
import { customTheme } from "./shared/config/theme";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <React.Fragment>
      <Flowbite theme={{ theme: customTheme }}>
        <NavBar />
        <div className="container mx-auto py-4">
          <Card />
        </div>
      </Flowbite>
    </React.Fragment>
  );
}

export default App;
