import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import Layout from "components/Common/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./components/Router";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <B1ndToastContainer autoClose={5000} limit={6} />
        <BrowserRouter>
          <GlobalStyle />
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
