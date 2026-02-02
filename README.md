---

# 📚 Smart Study Planner  
### Full Stack Web Application — Frontend Phase

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="60"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="60"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="60"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="60"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Frontend%20Completed%20(Day%203)-success"/>
  <img src="https://img.shields.io/badge/Backend-Planned-blue"/>
  <img src="https://img.shields.io/badge/Built%20With-React-informational"/>
</p>

---

## 🚀 Project Overview

**Smart Study Planner** is a full-stack web application aimed at helping students **plan, organize, and track their study sessions efficiently**.

The project is being developed **step-by-step**, following **real-world software development practices** instead of rushing features.

This repository currently represents **Phase 1 — Frontend Foundation**.

> 🔧 Backend (Django REST API) will be integrated in the next phase.

---

## 🎯 Current Phase: Frontend API Integration

In this phase, the focus is on building a **strong frontend foundation** that can later connect seamlessly to a backend.

### ✅ What’s Implemented

✔ Login UI with controlled input fields  
✔ API integration using Axios (`POST` requests)  
✔ Loading state handling with disabled actions  
✔ Error handling without UI crashes  
✔ Clean `async/await` usage  
✔ Real HTTP request–response flow  
✔ Scalable component structure  

> This phase demonstrates **how a real frontend behaves in production environments**.

---

## 🧠 Core Architecture Demonstrated

```text
User Interaction
   ↓
React Component
   ↓
Axios HTTP Request
   ↓
API Endpoint
   ↓
JSON Response
   ↓
React State Update
   ↓
UI Feedback (Loading / Success / Error)
````

This architecture will be reused when integrating the **Django backend**.

---

## 🖥️ Tech Stack (Current Phase)

| Layer           | Technologies      |
| --------------- | ----------------- |
| Frontend        | React.js          |
| Language        | JavaScript (ES6+) |
| API Client      | Axios             |
| Styling         | HTML5, CSS3       |
| Version Control | Git & GitHub      |

---

## 🔐 Authentication Flow (Frontend – Demo)

* User enters login credentials
* Axios sends POST request to API
* Loading indicator appears
* Button is disabled during request
* API response is handled safely
* UI updates without crashing

> 🔹 A dummy API is currently used **only for frontend logic demonstration**
> 🔹 Will be replaced with **Django REST authentication (JWT)**

---

## 📸 UI Preview (Sample)

<p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4G9U9JkZ6M8P7s0z9K7NQ.png" width="650"/>
</p>

<sub>*UI is under active development and will evolve further*</sub>

---

## 📂 Project Structure (Simplified)

```text
src/
 ├── pages/
 │   ├── Login.jsx
 │   └── Dashboard.jsx (upcoming)
 ├── App.js
 └── index.js
```

---

## 🧪 Run Locally

```bash
npm install
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## 📌 What Recruiters Should Notice

* Strong frontend fundamentals
* Real API integration patterns
* Proper loading & error handling
* Clean, readable component logic
* Phase-wise development approach
* Backend-ready architecture

---

## 🛣️ Project Roadmap

* [x] Frontend foundation
* [x] Login flow with API integration
* [ ] Django REST backend
* [ ] JWT authentication
* [ ] Study schedule CRUD APIs
* [ ] Progress analytics dashboard

---

## 👨‍💻 Author

**Abdul Samad**
B.Tech (AI / ML)
Aspiring Full Stack Developer

🔗 GitHub: [https://github.com/Abdul-samad-AI](https://github.com/Abdul-samad-AI)

---

## ⭐ Final Note

This project focuses on **building correct foundations first**, mirroring how real-world engineering teams work.

Each phase adds functionality while maintaining **clean architecture and scalability**.

---
