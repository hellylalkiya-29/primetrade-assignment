# Primetrade.ai API Evaluation & Security Sandbox

This repository contains the complete technical assessment for the Full-Stack Developer Internship position at Primetrade.ai.

---

## 🚀 Quick Navigation
* 🏢 **Submission Reference Tracking Form:** [Click Here to View Google Form Link / Status Handshake](PASTE_YOUR_GOOGLE_FORM_LINK_HERE)
* 🌐 **Frontend Dashboard Architecture:** Located inside the `/frontend` directory (`index.html`).
* ⚙️ **Backend Runtime Environment:** Located inside the `/backend` cluster directory (`server.js`).

---

## 🛠️ Scalability & Architectural Decisions

* **In-Memory Volatile DB Isolation:** Configured with an elite `mongodb-memory-server` engine blueprint. Evaluators can run the backend seamlessly without any tedious local MongoDB configurations or global software installations.
* **Granular RBAC Protection Hooks:** Implemented state-of-the-art Role-Based Access Control endpoints. Standard users are seamlessly restricted from critical database mutation streams (`Purge Object`), displaying an isolated `403 Forbidden` credential error, while structural Admin profiles retain full cluster-wide permissions.
* **JWT Identity Gateway Verification:** Safely preserves session tokens via advanced browser local memory vector checks, maintaining stateless credential handshakes perfectly across browser reloads.

---

## 🏎️ Local Activation Trace
1. Navigate to the backend branch directory: `cd backend`
2. Launch the node cluster runtime framework: `npm run dev`
3. Simply launch the web surface workspace: Double-click `frontend/index.html` to review live state mutations.
