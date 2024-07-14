# Task Management Dashboard
This project is a task management dashboard built with Django for the backend and HTML, TailwindCSS, and jQuery for the frontend. The application allows users to manage tasks with functionalities including adding, editing, deleting, filtering, and dynamically loading tasks. User authentication and authorization are handled using Django's built-in User model.

# Features

## Backend:
- Django-based project with Task and User models.
- CRUD operations for tasks.
- API endpoints to fetch tasks based on their status (In Progress, Completed, Overdue).
- User authentication and authorization.

## Frontend:
- HTML and TailwindCSS for responsive UI design.
- jQuery for dynamic task loading, searching, filtering, sorting, and drag-and-drop functionality.
- Modal dialogs for adding, editing, and deleting tasks.


# Requirements
- Python 3.x
- Django 3.x or higher
- Node.js and npm (for TailwindCSS)
- jQuery

# Setup Instructions

## Backend Setup
1. Clone the Repository:
```bash
git clone https://github.com/devbobnwaka/benmore_tech.git
cd <repository_directory>
```
2. Create and Activate Virtual Environment:
```bash
python -m venv .venv
#for windows
.venv\Scripts\activate
#for mac
source venv/bin/activate
```
3. Install Dependencies:
```bash
pip install -r requirements.txt
```
4. Setup Django Project:
```bash
#Apply migrations
python manage.py migrate
#Create a superuser
python manage.py createsuperuser
#Start the development server
python manage.py runserver

```

## Frontend SetUp
1. Install TailwindCSS
```bash
npm install -D tailwindcss
```
2. Build TailwindCSS
```bash
npx tailwindcss -i src/static/tw-src/tailwind-input.css -o src/static/css/tw-style.css --watch
```
## Running the project
1. Ensure the Backend Server is Running
```bash
python manage.py runserver
```
2. Open the Project in a Browser
- Navigate to http://127.0.0.1:8000/ to see the task management dashboard

## Usage
## User Authentication
Register a new user or log in with the superuser credentials created during setup.

## Managing Tasks
- Add Task: Click on the "Add Task" button to open a modal dialog. Fill in the task details and save.
- Edit Task: Click on the task you want to edit to open the modal dialog with pre-filled details. Modify and save.
- Delete Task: Click on the delete icon next to the task to remove it.
- Filter and Sort Tasks: Use the dropdowns and search bar to filter and sort tasks based on status, priority, due date, and category.
- Drag-and-Drop: Drag tasks between status columns to update their status dynamically.