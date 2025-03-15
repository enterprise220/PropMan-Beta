import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import Sidebar from './Sidebar';
import { supabase } from '../lib/supabase';
import { Button } from './ui/Button';
import { LogOut } from 'lucide-react';

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<LogOut className="h-5 w-5" />}
                onClick={handleLogout}
              >
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>

        <main className="py-8 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}