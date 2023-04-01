import { InputSearchProvider } from "./context/inputSearch";
import { PaginationProvider } from "./context/pagination";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

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

const AllProviders = composeProviders(InputSearchProvider, PaginationProvider);

function App() {
  return (
    <AllProviders>
      <Header />
      <Home />
    </AllProviders>
  );
}

export default App;
