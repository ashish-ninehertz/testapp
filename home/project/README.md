# testapp - Professional Authentication Platform

A modern, secure authentication platform built with React, TypeScript, Vite, and Supabase.

## Features

- 🔐 **Secure Authentication**: Email/password authentication with Supabase
- 👤 **User Profiles**: Complete user profile management
- 📊 **Dashboard**: User dashboard with activity tracking
- 🔍 **Audit Logs**: Comprehensive audit logging for security
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- ⚡ **Fast**: Built with Vite for lightning-fast development
- 🔒 **Row Level Security**: Database-level security with Supabase RLS

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Routing**: React Router v6
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Supabase:
   - Create a new Supabase project at https://supabase.com
   - Copy your project URL and anon key
   - Update `.env` file with your credentials:
     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     VITE_USE_MOCK_DATA=false
     ```

4. Apply database migrations:
   - Click the "Connect to Supabase" button in the UI
   - Or manually run the migrations in your Supabase SQL editor

5. Start the development server:
   ```bash
   npm run dev
   ```

## Database Schema

### Tables

- **profiles**: User profile information
  - Links to auth.users via foreign key
  - Stores name, email, role, avatar_url
  - RLS policies for user privacy

- **audit_logs**: Security audit trail
  - Tracks all user actions
  - Stores metadata, IP address, user agent
  - Queryable by users and admins

- **sessions**: Active user sessions
  - Tracks login sessions
  - Supports session revocation
  - Automatic expiration

### Security

- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Admins have elevated permissions
- Automatic profile creation on signup
- Audit logging for all sensitive actions

## Development

### Project Structure

```
src/
├── components/       # Reusable UI components
├── contexts/        # React contexts (Auth)
├── lib/            # Utilities and Supabase client
├── pages/          # Page components
└── main.tsx        # Application entry point
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

3. Set environment variables in your hosting platform:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_USE_MOCK_DATA=false`

## License

MIT License - see LICENSE file for details

## Support

For support, email support@testapp.com or visit our documentation.
