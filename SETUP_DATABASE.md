# Quick Database Setup Guide

## The app needs a PostgreSQL database to run. Here are the fastest options:

### Option 1: Free Neon Database (Recommended - 2 minutes)
1. Go to https://console.neon.tech/signup
2. Sign up (free, no credit card needed)
3. Click "Create Project"
4. Copy the connection string (it will look like: `postgresql://user:password@host/dbname`)
5. Update `.env.local` with your connection string:
   ```
   DATABASE_URL="your-connection-string-here"
   SHADOW_DATABASE_URL="your-connection-string-here"
   ```
6. Run: `npx prisma migrate dev`
7. Restart the dev server: `npm run dev`

### Option 2: Free Supabase Database
1. Go to https://supabase.com
2. Sign up and create a new project
3. Go to Settings > Database
4. Copy the connection string
5. Update `.env.local` and run migrations as above

### Option 3: Local PostgreSQL
If you have PostgreSQL installed:
1. Create a database: `createdb ilaka_events`
2. Update `.env.local` with your local connection string
3. Run: `npx prisma migrate dev`

### Option 4: Docker (if you install Docker Desktop)
```bash
docker compose up -d db
npx prisma migrate dev
```

## After setting up the database:
1. The app will automatically create all tables
2. You can then access the app at http://localhost:3000
3. Create an account to start using the app
