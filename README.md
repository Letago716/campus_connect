# SmartCampus Web Application

SmartCampus is a responsive, multi-role web app designed for digital school administration. It supports **students**, **teachers**, and **admins** — streamlining campus life through features like room booking, alerts, grades, and more.

---

## 🌐 Live Pages

- `index.html` – Landing/Login Page  
- `select-account.html` – Role Selector (Deprecated if using suffix login logic)  
- `student.html` – Student Dashboard  
- `teacher.html` – Teacher Dashboard  
- `admin.html` – Admin Dashboard  
- `booking.html` – Book Study Rooms  
- `grades.html` – View Grades  
- `alerts.html` – School Announcements  
- `resources.html` – Downloadable Materials  
- `about.html` – Platform Mission + Map  
- `upload.html` – Teacher Posts Announcement  
- `students.html` – Roster for Teachers  
- `contact.html` – Contact Support  

---

## 🧩 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **VS Code** (Recommended)
- Google Fonts – *Poppins*
- Icons via Emoji or custom images

---

## 👤 Account Detection

When users log in:
- `.s@campus.ac.za` → Student
- `.t@campus.ac.za` → Teacher
- `.admin@campus.ac.za` → Admin

Role redirects are automatic based on login input logic in `auth.js`.

---

## 📁 Folder Structure
SmartCampus/
│
├── index.html                  # Landing page (Login/Signup)
├── select-account.html        # Role selection page (if used)
├── student.html               # Student dashboard
├── teacher.html               # Teacher dashboard
├── admin.html                 # Admin dashboard
│
├── css/
│   ├── style.css              # Main global stylesheet
│   ├── student.css           # Student-specific styling
│   ├── teacher.css           # Teacher-specific styling
│   ├── admin.css             # Admin-specific styling
│
├── js/
│   ├── auth.js               # Login validation & role redirect
│   ├── student.js            # Student dashboard interactions
│   ├── teacher.js            # Teacher dashboard interactions
│   ├── admin.js              # Admin dashboard interactions
│
├── assets/
│   ├── images/               # UI images / hero images
│   ├── icons/                # Icons used across site
│
├── components/
│   ├── navbar.html           # Reusable top navigation bar
│   ├── sidebar.html          # Reusable side menu (role-based)
│
├── README.md                 # Project overview + instructions
├── LICENSE                   # (Optional) Licensing file
└── .gitignore                # Files to ignore when pushing to GitHub

