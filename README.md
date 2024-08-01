# React + TypeScript + Vite

# Simple Blog Application

## Overview
This project is a simple blog application developed as part of a QT Practical Test for Software Developers (Interns). It features user authentication, blog post management, and comment functionality.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js
- **Database:** PostgreSQL

## Project Structure
- **Frontend Code:** Located in the `frontend` directory
- **Backend Code:** Located in the `backend` directory

## Features
- **User Authentication:**
  - Registration and login functionality
  - Secure storage of authentication tokens

- **Blog Post Management:**
  - Create, view, edit, and delete blog posts (authenticated users only)
  - Add comments to posts (authenticated users only)
  - View individual posts with comments

## Setup Instructions

### Backend Setup
1. **Navigate to the backend directory:**
   - cd backend
   - run npm install
   - create postgres database
   - copy connection string
   - run npx prisma migrate dev
   - run npm start,

1. **Navigate to the frontend directory:**
  - cd frontend
  - copy backend host and replace it in as dotenv example shown
  - sign up
  - sign in
  - go to the posts
   - create a post


