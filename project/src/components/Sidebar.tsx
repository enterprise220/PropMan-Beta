import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Building2,
  Users,
  Truck,
  Mail,
  Settings,
  Receipt,
  CreditCard,
  RepeatIcon,
  PiggyBank,
  Building,
  BookOpen,
  History,
  UserCircle
} from 'lucide-react';

const navigation = [
  { name: 'Edificios', href: '/buildings', icon: Building2 },
  { name: 'Propietarios', href: '/owners', icon: Users },
  { name: 'Proveedores', href: '/suppliers', icon: Truck },
  { name: 'Usuarios', href: '/users', icon: UserCircle },
  { name: 'Emails', href: '/emails', icon: Mail },
  { name: 'Configuración', href: '/settings', icon: Settings },
  { name: 'Ingresar Gastos', href: '/expenses/new', icon: Receipt },
  { name: 'Ingresar Pagos', href: '/payments/new', icon: CreditCard },
  { name: 'Gastos Recurrentes', href: '/recurring-expenses', icon: RepeatIcon },
  { name: 'Previsiones y Devoluciones', href: '/provisions', icon: PiggyBank },
  { name: 'Proveedores y Edificios', href: '/suppliers-buildings', icon: Building },
  { name: 'Libro Caja Proveedores', href: '/suppliers-cashbook', icon: BookOpen },
  { name: 'Histórico de Gastos', href: '/expenses-history', icon: History },
];

export default function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Building2 className="h-8 w-8 text-indigo-600" />
          <span className="ml-4 text-xl font-semibold text-gray-900">Admin Panel</span>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          `group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                            isActive
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                          }`
                        }
                      >
                        <Icon className="h-6 w-6 shrink-0" />
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}