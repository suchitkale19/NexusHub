import Navbar from "./Component/common/Navbar";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <div className="bg-background min-h-screen h-full w-full">
        <Navbar />
      </div>
    </DataProvider>
  );
}

export default App;
