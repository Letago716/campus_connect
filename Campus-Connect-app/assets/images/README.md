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

