# 🔐 Auth API with Role-Based Access Control

This is a secure and reusable backend authentication system built with **Node.js**, **Express**, and **PostgreSQL**. It handles email/password login, issues JWT tokens, supports role-based access (admin, moderator, user), and includes advanced features like refresh tokens, 2FA, and rate limiting.

## 🚀 Features

- Email & Password Authentication  
- JWT Access Tokens  
- Refresh Token Logic  
- Role-Based Access Control (Admin/Mod/User)  
- Basic Two-Factor Authentication (2FA)  
- Rate Limiting for Enhanced Security  
- PostgreSQL Integration using Sequelize ORM  

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- PostgreSQL  
- Sequelize ORM  
- JWT (jsonwebtoken)  
- bcrypt  
- dotenv  
- express-rate-limit  
- speakeasy & qrcode (for 2FA)

## 📦 Setup & Run Locally

1. **Clone the repo**  
   `git clone https://github.com/your-username/auth-api-express.git`

2. **Install dependencies**  
   `npm install`


4. **Start PostgreSQL (if not already running)**

5. **Run the app**  
`npx nodemon app.js`  
or  
`node app.js`

## 🧪 API Endpoints

- `POST /api/signup` – Register a new user  
- `POST /api/login` – Authenticate and get JWT  
- `POST /api/refresh-token` – Get new access token  
- `GET /api/protected` – Protected route (requires token)  
- `GET /api/admin-only` – Admin-only access  

## 🛡️ Security Features

- Password hashing with bcrypt  
- JWT verification middleware  
- Role-based route guards  
- Optional 2FA using TOTP  
- Basic rate limiting to prevent brute-force attacks

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---


