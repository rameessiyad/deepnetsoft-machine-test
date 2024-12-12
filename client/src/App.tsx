import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MenuPage from "./pages/MenuPage";
import Footer from "./components/Footer";
import CreateMenuPage from "./pages/createPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/create" element={<CreateMenuPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
