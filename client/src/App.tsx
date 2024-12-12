import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MenuPage from "./pages/MenuPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
