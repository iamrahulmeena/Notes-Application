# Notes Manager Application

## Overview
The **Notes Manager Application** is a full-stack application that allows users to securely manage their notes. The application features user authentication, allowing users to create accounts, log in, and manage their notes effectively.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, JWT Authentication

## Features
- User account creation and authentication
- Create, edit, delete, and search notes
- Responsive UI built with Tailwind CSS
- Secure access using JSON Web Tokens (JWT)

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (>= 14.x)
- MongoDB

### Installation

#### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
2. Install the dependencies:
   ```bash
   npm install
### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
2. Install the dependencies:
   ```bash
   npm install
### Running the Application
### Frontend
1. To start the frontend development server:
   ```bash
   npm run dev
### Backend
1. To start the backend server:
   ```bash
   npm start
### API Endpoints
1. POST /api/auth/register - Register a new user
2. POST /api/auth/login - Log in an existing user
3. GET /api/notes  - Get all notes for the logged-in user
4. POST /api/notes - Create a new note
5. PUT /api/notes/ - Update an existing note
6. DELETE /api/notes/ - Delete a note
### License
This project is licensed under the ISC License - see the LICENSE file for details.
### Author
#### Shubham
