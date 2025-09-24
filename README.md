

```markdown
# ToDo List Projects 

This repository contains **five versions** of a ToDo List app built with **React**.  
Each folder represents a different implementation with unique features and setups.

---

##  Project Structure

```

root/
│
├─ my-todolist-firebaceapp/           # React + Firebase
├─ my-todolist-placeholder/           # React with placeholder data
├─ my-todolist-redux/                 # React + Redux + JSON Server
├─ my-todolist-serverjson/            # React + JSON Server
├─ result-school-todolist-useContext/ # React + useContext + JSON Server

````

---

## 1️⃣ ToDo List – Firebase Version

**React + Firebase** version. Tasks are stored in Firebase Realtime Database.

**Features:**
- Add, edit, delete tasks  
- Mark tasks as completed  

**Tech:** React 18, Firebase  

**Run:**
```bash
cd my-todolist-firebaceapp
npm install
npm start
````

---

## 2️⃣ ToDo List – Placeholder Version

**React-only** version with placeholder data (no backend).

**Features:**

* Add, edit, delete tasks
* Mark tasks as completed

**Tech:** React 18

**Run:**

```bash
cd my-todolist-placeholder
npm install
npm start
```

---

## 3️⃣ ToDo List – Redux + JSON Server Version

**React + Redux** version. Uses **Redux** for state management and **JSON Server** for backend simulation.

**Features:**

* Add, edit, delete tasks
* Mark tasks as completed
* Persistent data via JSON Server
* Async actions with Redux Thunk

**Tech:** React 18, Redux, React-Redux, Redux-Thunk, JSON Server

**Run:**

```bash
cd my-todolist-redux
npm install
npm run dev
```

> `npm run dev` runs both React app and JSON Server concurrently.

---

## 4️⃣ ToDo List – JSON Server Version

**React** version using **JSON Server** for backend simulation (no Redux).

**Features:**

* Add, edit, delete tasks
* Mark tasks as completed
* Persistent data via JSON Server

**Tech:** React 18, JSON Server

**Run:**

```bash
cd my-todolist-serverjson
npm install
npm run dev
```

> Runs React app on port `3001` and JSON Server on port `3003`.

---

## 5️⃣ ToDo List – useContext + JSON Server Version

**React** version using **useContext** for state management and **JSON Server**.

**Features:**

* Add, edit, delete tasks
* Mark tasks as completed
* Persistent data via JSON Server
* Centralized state via React Context

**Tech:** React 18, useContext, JSON Server

**Run:**

```bash
cd result-school-todolist-useContext
npm install
npm run dev
```

> Runs React app on port `3001` and JSON Server on port `3003`.

---

## Notes

* Default ports may conflict if multiple apps are run simultaneously. Adjust `PORT` in `package.json` if needed.
* Firebase version requires a valid Firebase project and configuration.
* JSON Server versions persist data locally in `db.json`.
* Placeholder version resets data on refresh.


