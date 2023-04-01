import { InputSearchProvider } from "./context/inputSearch";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { PaginationProvider } from "./context/pagination";

function App() {
  return (
    <InputSearchProvider>
      <PaginationProvider>
        <Header />
        <Home />
      </PaginationProvider>
    </InputSearchProvider>
  );
}

export default App;
