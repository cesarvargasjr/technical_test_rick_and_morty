import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { InputSearchProvider } from "./context/InputSearch";
import { PaginationProvider } from "./context/Pagination";
import { CharacterProvider } from "./context/Character";

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
  CharacterProvider
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
