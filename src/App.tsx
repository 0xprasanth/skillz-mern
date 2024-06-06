import { BrowserRouter } from "react-router-dom";
import Router from "@/routes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./components/theme-provider";
const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Router />
              <Toaster />
            </TooltipProvider>
          </QueryClientProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
