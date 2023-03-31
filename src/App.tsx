import { InputSearchProvider } from "./context/inputSearch";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <InputSearchProvider>
      <Header />
      <Home />
    </InputSearchProvider>
  );
}

export default App;
