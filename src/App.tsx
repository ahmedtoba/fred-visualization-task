import { ConfigProvider, Layout } from "antd";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ANTD_THEME } from "./Styles/antdTheme";
import { Outlet } from "@tanstack/react-location";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Components/Routes/Routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
      retry: 1,
    },
  },
});

const { Content } = Layout;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={ANTD_THEME}>
        <Routes>
          <Navbar />
          <Content className="w-full h-[calc(100vh-70px)]">
            <Outlet />
          </Content>
        </Routes>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
