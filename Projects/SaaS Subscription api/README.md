# 🚀 SaaS Subscription Billing System (Backend)

A secure and scalable backend for a SaaS-based product using **Node.js**, **Express**, **MongoDB**, and **Stripe**.  
This API enables **user authentication**, **subscription management**, and **role-based access** using tokens.

> ✅ Tested via Postman.  
> 🧪 Stripe integration supports local testing via Stripe CLI.

---

## 📦 Features

- 🧑‍💻 **User Authentication (JWT-based)**
- 🔐 **Role-based Access Control** (Free & Premium)
- 💳 **Stripe Billing Integration**
- 📡 **Stripe Webhook Listener**
- 📁 Modular Project Structure
- 🔄 **Refresh Token Support**
- 👮 **Admin Routes for User Management**

---

## 🧰 Tech Stack

| Tech       | Usage                           |
| ---------- | ------------------------------- |
| Node.js    | Runtime                         |
| Express.js | Web Framework                   |
| MongoDB    | NoSQL Database                  |
| Mongoose   | ODM for MongoDB                 |
| Stripe API | Billing & Subscription Handling |
| JWT        | Authentication & Session Mgmt   |
| Dotenv     | Environment Variable Management |

---

## 📂 Project Structure

```
.
├── controller/
│   └── stripeWebhookController.js
├── config/
│   └── db.js
├── middleware/
│   └── (your middleware files)
├── model/
│   └── (your model files)
├── routes/
│   └── admin.route.js
│   └── auth.route.js
│   └── premium.route.js
│   └── stripe.route.js
│   └── stripeWebhook.route.js
│   └── user.route.js
├── app.js
├── server.js
├── .env
└── README.md
```

---

## 🔐 Authentication Workflow

- 🔁 **Register/Login** with `POST /api/auth/register` or `POST /api/auth/login`
- 🎟️ JWT + Refresh Token issued
- 🔐 Use Bearer Token to access protected routes
- 🔄 Refresh token with `POST /api/auth/refresh-token`
- 🚪 Logout with `POST /api/auth/logout`

---

## 💳 Stripe Billing Integration

### ✅ Checkout

```http
POST /api/stripe/create-checkout-session
```

- Requires Authorization Header (JWT)
- Generates Stripe Checkout Session
- Redirects to success or cancel URL

---

### 🔁 Webhook Listener

```http
POST /api/stripe/webhook
```

- Listens to events like:
  - `checkout.session.completed`
  - `invoice.paid`
- Updates user role to `premium` upon successful payment
- Requires raw body parser and Stripe webhook secret

---

## 📄 .env Configuration

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/saas-subscription
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID=price_...
```

---

## 🧪 Local Stripe Testing

1. Login to Stripe CLI:

   ```bash
   stripe login
   ```

2. Start webhook listener:

   ```bash
   stripe listen --forward-to localhost:5000/api/stripe/webhook
   ```

3. Trigger a test event:
   ```bash
   stripe trigger checkout.session.completed
   ```

---

## 👨‍💼 Admin Features

| Route               | Description                 |
| ------------------- | --------------------------- |
| `GET /api/users`    | View all users (admin only) |
| `GET /api/users/me` | View own profile            |

---

## 📆 Routes & Sample Requests

### ✉️ POST `/api/auth/register`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "role": "admin"
}
```

### ✉️ POST `/api/auth/login`

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

### ↳ POST `/api/auth/refresh-token`

```json
{
  "token": "<your_refresh_token>"
}
```

### ❌ POST `/api/auth/logout`

```json
{
  "token": "<your_refresh_token>"
}
```

### 💳 POST `/api/stripe/create-checkout-session`

> Requires `Authorization: Bearer <token>` header. No body needed.

### 🔁 POST `/api/stripe/webhook`

> Handled by Stripe CLI — sends events like `checkout.session.completed` automatically.

### 🔐 GET `/api/users/me`

> Get current logged-in user (protected).

### 💼 GET `/api/users`

> List all users (admin only).

---

## 🗓 API Testing Sample

- Include token in **Authorization** header as:

```
Authorization: Bearer <access_token>
```

---

## ⚖️ License

MIT © 2025

---

### Built with ❤️ by Sanket.
