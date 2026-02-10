import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leistungen from "./pages/Leistungen";
import UnserTeam from "./pages/UnserTeam";
import Kontakt from "./pages/Kontakt";
import WoDuUnsFindest from "./pages/WoDuUnsFindest";
import Impressum from "./pages/Impressum";
import Voraussetzungen from "./pages/Voraussetzungen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/ueber-mich" element={<UnserTeam />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/wo-du-uns-findest" element={<WoDuUnsFindest />} />
          <Route path="/voraussetzungen" element={<Voraussetzungen />} />
          <Route path="/impressum" element={<Impressum />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
