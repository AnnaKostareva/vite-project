import { Routes, Route } from "react-router-dom";
import { ListingsPage } from "./pages/ListingsPage";
import { ListingViewPage } from "./pages/ListingViewPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListingsPage />} />
      <Route path="/listing/:id" element={<ListingViewPage /> } />
    </Routes>
  );
}

export default App;
