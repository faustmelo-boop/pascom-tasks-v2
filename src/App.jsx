import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexto/AuthContext";
import { FirestoreProvider } from "./contexto/FirestoreContext";

import Sidebar from "./componentes/Sidebar";
import Topbar from "./componentes/Topbar";

import Feed from "./paginas/Feed";
import Workflow from "./paginas/Workflow";
import Schedule from "./paginas/Schedule";
import Team from "./paginas/Team";
import Profile from "./paginas/Profile";
import AuthPage from "./paginas/Auth";

// Componente que protege rotas privadas
function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="p-6 text-center">Carregando...</div>;
  if (!user) return <Navigate to="/auth" />;

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <FirestoreProvider>
        <BrowserRouter>
          <div className="flex h-screen overflow-hidden">

            {/* Sidebar fixa */}
            <Sidebar />

            {/* Conteúdo principal */}
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

                  {/* Página de login */}
                  <Route path="/auth" element={<AuthPage />} />
                </Routes>
              </div>
            </div>

          </div>
        </BrowserRouter>
      </FirestoreProvider>
    </AuthProvider>
  );
}
