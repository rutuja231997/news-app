import { BrowserRouter, Route, Routes } from "react-router-dom";

import Articles from "./Pages/Articles";

const App = () => {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
