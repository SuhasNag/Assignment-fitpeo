import { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  return (
    <>
        <SidebarProvider>
          <Router>
            <Routes>
              <Route element={<BaseLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </Router>
        </SidebarProvider>
    </>
  );
}

export default App;
