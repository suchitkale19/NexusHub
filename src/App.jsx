import Footer from "./Component/common/Footer";
import Navbar from "./Component/common/Navbar";
import { DataProvider } from "./DataContext";
import HomePage from "./Pages/homePage";

function App() {
  return (
    <DataProvider>
      <div className=" bg-background min-h-screen h-full w-full">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
