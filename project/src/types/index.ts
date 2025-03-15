export interface NavItem {
  title: string;
  href: string;
  icon: string;
}

export interface Building {
  id: string;
  name: string;
  address: string;
}

export interface Owner {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: string;
  buildingId: string;
  supplierId: string;
}

export interface Payment {
  id: string;
  amount: number;
  date: string;
  buildingId: string;
  ownerId: string;
}