import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { FirestoreProvider } from "./context/FirestoreContext";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Feed from "./pages/Feed";
import Workflow from "./pages/Workflow";
import Schedule from "./pages/Schedule";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import AuthPage from "./pages/Auth";

// Protect private routes
function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="p-6 text-center text-slate-600">
        Loading...
      </div>
    );
  }

  if (!user) return <Navigate to="/auth" />;

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <FirestoreProvider>
        <BrowserRouter>
          <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex flex-col flex-1">
              <Topbar />

              <div className="flex-1 overflow-y-auto p-4">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <PrivateRoute>
                        <Feed />
                      </PrivateRoute>
                    }
                  />

                  <Route
                    path="/workflow"
                    element={
                      <PrivateRoute>
                        <Workflow />
                      </PrivateRoute>
                    }
                  />

                  <Route
                    path="/schedule"
                    element={
                      <PrivateRoute>
                        <Schedule />
                      </PrivateRoute>
                    }
                  />

                  <Route
                    path="/team"
                    element={
                      <PrivateRoute>
                        <Team />
                      </PrivateRoute>
                    }
                  />

                  <Route
                    path="/profile"
                    element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    }
                  />

                  {/* Public route */}
                  <Route path="/auth" element={<AuthPage />} />

                  {/* Redirect any unknown route */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </div>

          </div>
        </BrowserRouter>
      </FirestoreProvider>
    </AuthProvider>
  );
}

