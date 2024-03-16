import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import HomePageTsx from "./pages/HomePage/HomePage";
// import DetailPage from "./pages/DetailPage/DetailPage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <HomePageTsx />
          {/* <Route path="/" element={<HomePageTsx />}></Route>
          <Route path="/characters/:id" element={<DetailPage />}></Route> */}
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
