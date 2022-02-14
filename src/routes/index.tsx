import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Details } from "../pages/details";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Details />} />
    </Routes>
  );
}
