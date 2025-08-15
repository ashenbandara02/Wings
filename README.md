# WINGS – WebApp Development

A modern, multilingual, and scalable website for **Wings APS**, designed to promote aeronautical culture and support community activities.  
The platform functions as both an **informational hub** and a **member portal**, featuring membership management, payment integration, pilot resources, and admin controls.

---

## ✈️ Project Overview

The **Wings Web Platform** allows users to:
- Browse institutional pages (About, Blog, Projects, Gallery, Partners)
- Register and submit membership requests
- Pay membership fees via **Stripe**, **PayPal**, or **bank transfer**
- Access restricted resources based on membership level
- View pilot tools such as flight calculators and budget estimators

The admin panel allows authorized personnel to:
- Approve or reject applications
- Manage blog posts, resources, gallery items, and partners
- Monitor and manage user memberships and payments

---

## 🛠 Tech Stack

**Frontend**:
- React
- Tailwind CSS

**Backend**:
- Django
- Django REST Framework

**Database**:
- PostgreSQL

**Authentication**:
- Email & password
- Google OAuth

**Payments**:
- Stripe
- PayPal
- Bank Transfer

**Hosting**:
- Provided by the client

---

## 📌 Features

- **Multilingual Support** 🇮🇹 🇬🇧
- **Responsive Design** for mobile and desktop
- **Membership Flow** with PDF generation & admin approval
- **Donation & Payment Integration**
- **Protected Resources** for members
- **Admin Dashboard** for content and membership management
- **Pilot Tools Integration** (basic HTML+JS tools)
- **Scalable Architecture** (200+ concurrent users)

---

## 📂 Project Structure (Example)

wings-webapp/
│
├── backend/ # Django backend with DRF
│ ├── apps/ # Project apps (users, payments, blog, etc.)
│ ├── settings/ # Environment & config
│ └── ...
│
├── frontend/ # React + Tailwind frontend
│ ├── src/
│ └── public/
│
├── docs/ # Documentation & agreements
├── scripts/ # Deployment / setup scripts
└── README.md



---

## 🚀 Getting Started

### 1️⃣ Prerequisites
- Node.js (>= 18)
- Python (>= 3.10)
- PostgreSQL
- Git

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/username/wings-webapp.git
cd wings-webapp


### 3️⃣ Backend Setup
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

### 4️⃣ Frontend Setup
cd frontend
npm install
npm run dev


📜 License

This project is proprietary. All rights reserved to Wings APS.
Unauthorized distribution, reproduction, or commercial use is prohibited.


🤝 Credits

Client: Lakshi Rajawasala
Developer: Ashen Bandara
UI/UX Designer: H.M. Sanduni Rasikala

