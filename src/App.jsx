import { useState } from "react";

import Landing from "./pages/Landing/Landing";
import Portfolio from "./pages/Portfolio/Portfolio";

export default function App() {

  const [entered, setEntered] = useState(false);

  return (

    <>

      {!entered ? (

        <Landing
          onEnter={() => setEntered(true)}
        />

      ) : (

        <Portfolio />

      )}

    </>

  );

}