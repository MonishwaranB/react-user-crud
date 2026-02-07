User Management System (React CRUD App)
A simple and extensible user management application built using React, Tailwind CSS, and JSON Server.
--------------------------------------------------
Features
- Add new users
- View user list
- Edit user details
- Delete users with confirmation modal
- Form validation using Yup
- Config-driven dynamic form
- Clean and responsive UI
--------------------------------------------------
Tech Stack
- React (Vite)
- Tailwind CSS
- Axios
- React Hook Form
- Yup
- JSON Server
--------------------------------------------------
Setup Instructions
1. Clone Repository
git clone
cd user-crud-app
2. Install Dependencies
npm install
3. Start Backend (JSON Server)
npx json-server --watch db.json --port 3001
4. Start Frontend
npm run dev
Open in browser: http://localhost:5173
--------------------------------------------------
How to Add New Fields
Step 1: Update Form Configuration
Open: src/config/formConfig.js
Add:
{
name: "address",
label: "Address",
type: "text"
}
Step 2: Update Validation
Open: src/validation/userSchema.js
Add:
address: yup.string().required("Address is required"),
After this, the UI updates automatically.
--------------------------------------------------
Design Decisions
- Used configuration-based form rendering for easy extensibility
- Separated API logic into a dedicated service layer
- Used React Hook Form with Yup for validation
- Implemented custom confirmation modal
- Used Tailwind CSS for modern UI
- Used JSON Server for mock backend
--------------------------------------------------
Mock API Setup
Database file: db.json
Start server:
npx json-server --watch db.json --port 3001
--------------------------------------------------
Deployment Note
Frontend deployed using Vercel.
JSON Server runs locally for full functionality.
--------------------------------------------------
Author
Monishwaran