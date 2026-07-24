# Next.js Authentication System

A secure authentication application built with **Next.js**, **Firebase Authentication**, **Redux Toolkit**, and **Tailwind CSS**. The application provides email/password authentication, protected routes, session persistence, and centralized state management with a responsive user interface.

## Features

* User Registration
* User Login and Logout
* Firebase Email & Password Authentication
* Protected Routes and Dashboard
* Session Persistence
* Redux Toolkit State Management
* Responsive UI with Tailwind CSS
* Modular Project Structure

## Tech Stack

* Next.js
* React
* Firebase Authentication
* Redux Toolkit
* Tailwind CSS
* JavaScript (ES6+)

## Firebase Setup

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

Enable **Email/Password Authentication** in the Firebase Console before running the application.

## Installation

```bash
npm install
```

## Run the Application

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Folder Structure

```text
app/
components/
context/
firebase/
hooks/
redux/
public/
```

## Future Improvements

* Google Sign-In
* Password Reset
* Email Verification
* User Profile Management
* Dark Mode
* Role-Based Authentication

## License

This project is intended for educational and learning purposes.
