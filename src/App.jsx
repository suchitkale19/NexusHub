import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/common/Footer";
import Navbar from "./Component/common/Navbar";
import { DataProvider } from "./DataContext";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <DataProvider>
      {/* <MovieProvider> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="details/:title" element={<DetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </MovieProvider> */}
    </DataProvider>
  );
}

export default App;
