import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { InputSearchProvider } from "./context/SearchInput";
import { PaginationProvider } from "./context/PaginationCharacters";
import { CharacterProvider } from "./context/Character";
import { FilterProvider } from "./context/Filters";

const composeProviders =
  (
    ...providers: {
      ({ children }: any): JSX.Element;
    }[]
  ) =>
  (props: { children: any }) =>
    providers.reduceRight(
      (children, Provider) => <Provider {...props}>{children}</Provider>,
      props.children
    );

const AllProviders = composeProviders(
  InputSearchProvider,
  PaginationProvider,
  CharacterProvider,
  FilterProvider
);

function App() {
  return (
    <AllProviders>
      <Header />
      <Home />
    </AllProviders>
  );
}

export default App;
