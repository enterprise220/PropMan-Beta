import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/auth/Login';
import Buildings from './pages/Buildings';
import Owners from './pages/Owners';
import { supabase } from './lib/supabase';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login');
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }>
          <Route index element={<Navigate to="/buildings" replace />} />
          <Route path="buildings" element={<Buildings />} />
          <Route path="owners" element={<Owners />} />
          <Route path="suppliers" element={<div>Proveedores</div>} />
          <Route path="users" element={<div>Usuarios</div>} />
          <Route path="emails" element={<div>Emails</div>} />
          <Route path="settings" element={<div>Configuración</div>} />
          <Route path="expenses/new" element={<div>Ingresar Gastos</div>} />
          <Route path="payments/new" element={<div>Ingresar Pagos</div>} />
          <Route path="recurring-expenses" element={<div>Gastos Recurrentes</div>} />
          <Route path="provisions" element={<div>Previsiones y Devoluciones</div>} />
          <Route path="suppliers-buildings" element={<div>Proveedores y Edificios</div>} />
          <Route path="suppliers-cashbook" element={<div>Libro Caja Proveedores</div>} />
          <Route path="expenses-history" element={<div>Histórico de Gastos</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;