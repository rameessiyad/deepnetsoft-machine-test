import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import MenuPage from "./pages/MenuPage";
import Footer from "./components/Footer";
import AdminPage from "./admin/AdminPage";
import AddMenuForm from "./admin/AddMenuForm";
import ListMenuItems from "./admin/components/ListMenuItems";

const App = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add-menu" element={<AddMenuForm />} />
        <Route path="/admin/menu/:menuId/item" element={<ListMenuItems />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
