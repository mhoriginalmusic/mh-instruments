import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Earnings from "./pages/Earnings";
import Withdrawals from "./pages/Withdrawals";
import BeatStore from "./pages/BeatStore";
import AdminDashboard from "./pages/AdminDashboard";
import Navigation from "./components/Navigation";
import { useAuth } from "./_core/hooks/useAuth";

function ProtectedRoute({ component: Component, ...rest }: any) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <NotFound />;
  }

  return <Component {...rest} />;
}

function AdminRoute({ component: Component, ...rest }: any) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user || user.role !== "admin") {
    return <NotFound />;
  }

  return <Component {...rest} />;
}

function Router() {
  const { isAuthenticated, user } = useAuth();

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/login"} component={Login} />
      <Route path={"/signup"} component={Signup} />
      <Route path={"/dashboard"}>
        {() => <ProtectedRoute component={Dashboard} />}
      </Route>
      <Route path={"/earnings"}>
        {() => <ProtectedRoute component={Earnings} />}
      </Route>
      <Route path={"/withdrawals"}>
        {() => <ProtectedRoute component={Withdrawals} />}
      </Route>
      <Route path={"/beats"} component={BeatStore} />
      <Route path={"/admin"}>
        {() => <AdminRoute component={AdminDashboard} />}
      </Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
