Overview

PropMan Beta is a Property Management System under active development. It is designed to facilitate the management of properties, financial transactions, suppliers, users, and communications. The system leverages a modern technology stack to ensure scalability, security, and maintainability.

Tech Stack

Frontend (React.js)

Single Page Application (SPA) using React + TypeScript

Responsive design with Tailwind CSS

react-router-dom for navigation

Lucide React for icons

react-hook-form for efficient form handling

date-fns for date manipulation

zod for validation

sonner for toast notifications

Backend (PHP 8)

RESTful API with authentication & authorization

Business logic & database interactions

Email handling

Databases

MySQL/MariaDB for main application data

SQLite for specific local storage features

Features

Core Modules

Property Management: Buildings, Owners

Financial Management: Expenses, Payments, Recurring Expenses

Supplier Management: Tracking and managing suppliers

User Management: Admins, managers, and clients

Email Communications: Notifications & messaging

System Configuration: Settings and customizations

Implemented Features

Admin Dashboard with responsive sidebar navigation

Authentication System:

Login page using Supabase authentication

Protected routes & session management

Logout functionality

Reusable UI Components: Buttons, Inputs, Cards, Tables

Enhanced User Experience:

Loading states

Error handling

Toast notifications

Setup Instructions

1. Backend (PHP & MySQL/MariaDB)

Set up a PHP 8 development environment

Configure MySQL/MariaDB as the primary database

Create API endpoints for data interactions

Implement authentication logic

2. Frontend (React.js)

Clone the repository:

git clone https://github.com/enterprise220/propman-beta.git
cd propman-beta

Install dependencies:

npm install

Start the development server:

npm run dev

3. Supabase Integration

Create a .env file and add your Supabase credentials

Update the supabase.ts file to handle missing environment variables

Click "Connect to Supabase" in the dashboard to finalize setup

Next Steps

Implement API endpoints for CRUD operations

Integrate email notifications

Optimize performance and security

Finalize frontend designs

License

This project is licensed under the MIT License. See LICENSE for details.

Contributions

Contributions are welcome! Please open an issue or submit a pull request if you’d like to contribute.
