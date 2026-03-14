# Crypto Portfolio Tracker

A full-stack web application that allows users to securely manage their cryptocurrency portfolio. The system provides authentication, role-based access control, and CRUD operations for tracking crypto assets.

This project demonstrates backend API design, authentication, database management, and frontend integration using a scalable REST architecture.

---

# Features

## Authentication

* User registration with secure password hashing
* User login with JWT authentication
* Token-based protected routes
* Secure logout functionality

## Role-Based Access

* User roles supported in backend architecture
* Middleware-based authorization system

## Portfolio Management

Users can manage their cryptocurrency portfolio with full CRUD functionality:

* Create a new asset
* View all portfolio assets
* Update asset details
* Delete assets

Each asset stores:

* Coin name
* Symbol
* Quantity
* Buy price
* Current price

## Frontend Interface

A simple frontend UI allows users to interact with the API:

* Landing page with navigation
* Separate pages for login, registration, and dashboard
* Dashboard displaying the user portfolio
* Forms for creating, updating, and deleting assets
* Success and error messages displayed based on API responses

## API Features

* RESTful API design
* Proper HTTP status codes
* Input validation
* Error handling middleware
* API versioning (`/api/v1`)
* JWT-based protected routes

---

# Technology Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Tokens (JWT)
* bcrypt for password hashing

## Frontend

* React
* Vite
* React Router
* Axios for API requests

---

# Project Structure

```
crypto-portfolio-tracker
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── api
│   │   └── components
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Database Schema

## User

```
User
-----
_id
name
email
password
role
createdAt
```

## Portfolio Asset

```
Asset
-----
_id
userId
coinName
symbol
quantity
buyPrice
currentPrice
createdAt
```

Each asset is associated with a specific user.

---

# API Endpoints

## Authentication

### Register User

```
POST /api/v1/auth/register
```

Request body:

```
{
  "name": "John",
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Login User

```
POST /api/v1/auth/login
```

Request body:

```
{
  "email": "john@example.com",
  "password": "password123"
}
```

Returns a JWT token used for protected routes.

---

## Portfolio APIs

### Get Portfolio

```
GET /api/v1/portfolio
```

Returns all assets belonging to the authenticated user.

---

### Create Asset

```
POST /api/v1/portfolio
```

```
{
  "coinName": "Bitcoin",
  "symbol": "BTC",
  "quantity": 0.5,
  "buyPrice": 30000,
  "currentPrice": 42000
}
```

---

### Update Asset

```
PUT /api/v1/portfolio/:id
```

Updates asset details.

---

### Delete Asset

```
DELETE /api/v1/portfolio/:id
```

Removes the asset from the portfolio.

---

# Running the Project Locally

## 1. Clone the Repository

```
git clone https://github.com/yourusername/crypto-portfolio-tracker.git
cd crypto-portfolio-tracker
```

---

## 2. Backend Setup

Navigate to backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## 3. Frontend Setup

Open another terminal.

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start the frontend:

```
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Application Flow

1. User opens the landing page.
2. User can register or log in.
3. After authentication, the user is redirected to the dashboard.
4. The dashboard displays the user's portfolio.
5. Users can create, update, and delete assets.
6. Logout redirects the user back to the landing page.

---

# Security Practices

* Passwords hashed using bcrypt
* JWT authentication for protected routes
* Input validation for API requests
* Role-based access middleware
* Secure token storage on client side

---

# Future Improvements

Possible enhancements include:

* Portfolio profit/loss calculation
* Live cryptocurrency price integration
* Pagination and filtering
* Admin dashboard
* Deployment using containerized environments
* Rate limiting and advanced security controls

---

# Author

Harshatha Rithika
Full Stack Developer

---

If you want, I can also give you a **much stronger “scalability note” section** (microservices, caching, load balancing) which is **specifically something backend interviewers love seeing in READMEs** and will make this assignment look **more senior-level**.
