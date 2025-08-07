# Unipeers Documentation

### Students Projects
Zeenat
Shipping rate calculator.
History previous rate
Settings: to configure default exchange rates

Love

Excellent
Errand app: a user will post a task and someone can apply to do the job.

Murshidat
Study group app

Chinedu
Laundry tracking app

Muhammad
Signup
Dashboard: show number of overdue task, completed task, and pending task
Creating tasks (screen)

Ejeh

Fahd

Abdulkadir

Osita
Tailor Order Tracking

John
eCommerce Shipment Tracker

### How to Install Nativewind
- Reset project to bare app: 
npm run reset-project

- Installing Tailwind:
npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context

After success of above, run: npx tailwindcss init
Continue with step 2 and more: https://www.nativewind.dev/docs/getting-started/installation
Add "./app/**/*.{js,jsx,ts,tsx}" on content:[]

Step 4: run: npx expo customize metro.config.js

After Step 5: create a file on the root directory: nativewind-env.d.ts and add:
/// <reference types="nativewind/types"/>
This enables Typescript to understand tailwind classes, preventing constant error messages.

Open metro.config.js files and correctly update "./global.css" to "./app/globals.css"

Recommended: after lots of setup restart development server with --clear flag
npx expo start --clear