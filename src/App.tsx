import { Routes, Route } from "react-router-dom";
import { ListingsPage } from "./pages/ListingsPage";
import { ListingViewPage } from "./pages/ListingViewPage";
import { ListingEditPage } from "./pages/ListingEditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListingsPage />} />
      <Route path="/listing/:id" element={<ListingViewPage /> } />
      <Route path="/listing/:id/edit" element={<ListingEditPage />} />
    </Routes>
  );
}

export default App;
