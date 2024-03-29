import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageTsx from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
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
        <header>1111</header>
        <Routes>
          <Route path="/r-m/characters/:id" element={<DetailPage />}></Route>
          <Route path="*" element={<HomePageTsx />}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
