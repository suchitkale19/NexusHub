import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/common/Footer";
import Navbar from "./Component/common/Navbar";
import { DataProvider } from "./DataContext";
import HomePage from "./Pages/homePage";
import DetailsPage from "./Pages/DetailsPage";
import PageNotFound from "./Pages/PageNotFound";
// import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <DataProvider>
      {/* <MovieProvider> */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="details/:title" element={<DetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* </MovieProvider> */}
    </DataProvider>
  );
}

export default App;
