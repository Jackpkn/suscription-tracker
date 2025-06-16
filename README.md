# 📦 Subscription Tracker

**Subscription Tracker** is a production-grade backend system designed to manage recurring subscriptions, payments, and users. This project goes beyond basic CRUD and implements real-world features such as JWT authentication, role-based access, secure API design, webhook handling, and more.

## 🚀 Features

- 🔐 JWT Authentication (Access + Refresh Tokens)
- 👥 User Roles (Admin, Customer)
- 💳 Subscription Plans (Free, Premium, Custom)
- 🧾 Payment Integration (Stripe or Razorpay)
- 🧠 Business Logic (auto-cancel, reminders, etc.)
- 📦 Webhook support (real-time payment events)
- 🛠️ Modular & Scalable API structure
- 🧮 Subscription usage tracking
- 🧰 Cron Jobs / Automated cleanup
- 🔒 Security best practices (rate limiting, input sanitization, CORS)

---

## 🛠 Tech Stack

| Layer           | Tech                                     |
|----------------|------------------------------------------|
| Backend         | Node.js, Express.js                      |
| Authentication  | JWT, Bcrypt                              |
| Database        | PostgreSQL / MongoDB (based on setup)    |
| ORM             | Prisma / Mongoose                        |
| Scheduler       | Node-cron / BullMQ                       |
| Deployment      | Docker, Fly.io / Render /       |

---

## 📐 Folder Structure

📦 subscription-tracker/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── services/
│ ├── middlewares/
│ ├── utils/
│ └── config/
├── prisma/ or schemas/
├── scripts/ # Cron jobs, maintenance
├── .env.example
└── README.md


---

## 🔑 Environment Variables

Create a `.env` file from the provided `.env.example`:

```bash
cp .env.*.local .env
```
PORT=5000
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
DATABASE_URL=postgresql://user:pass@host:port/dbname
STRIPE_SECRET_KEY=your_stripe_key
FRONTEND_URL=http://localhost:3000

npm install

Run Database Setup
bash
Copy
Edit
# For Prisma (PostgreSQL)
npx prisma generate
npx prisma migrate dev --name init
npm run dev

