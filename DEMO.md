# Concierge Demo Version

This is a demo version of Concierge that doesn't require a database connection. It uses mock data to simulate the functionality of the application.

## Getting Started

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Start the development server
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser
5. Click on the "Try Demo Dashboard" button on the home page to access the demo dashboard

## How It Works

This demo version includes:

- Mock data for organizations, users, and conversations
- Bypass authentication to allow direct access to the dashboard
- Simulated API responses that mimic the real backend

## Demo Credentials

No login is required for the demo version. The system automatically logs you in as a demo user with the following details:

- **Organization**: Demo DAO
- **User**: Demo User (Admin)
- **Email**: demo@example.com

## Features Available in Demo

- View the dashboard with sample analytics
- Navigate through the different dashboard sections
- See sample conversation data
- Interact with the UI components

## Notes

- This demo is for demonstration purposes only and does not connect to any real database
- Any data entered in forms will not be saved
- Some advanced features may be limited in functionality

To switch back to using a real database:

1. Set `USE_MOCK_DATA = false` in `lib/utils/supabase/server.ts`
2. Set `BYPASS_AUTH = false` in `app/middleware.ts`
3. Configure your Supabase environment variables in a `.env.local` file 