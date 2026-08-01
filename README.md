# Personal Portfolio Website

A full-stack personal portfolio workspace comprising a modern React frontend, an Express & MongoDB backend, and a lightweight static HTML/CSS/JS version.

## 📁 Repository Structure

- **[`client/`](./client)**: Modern SPA built with **React 19**, **Vite**, **Framer Motion**, **React Icons**, **React Router DOM**, and **React Type Animation**.
- **[`server/`](./server)**: REST API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** for project management and backend endpoints.
- **[`html-version/`](./html-version)**: Lightweight standalone static site built with pure HTML, CSS, and Vanilla JavaScript.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local MongoDB instance or [MongoDB Atlas Cloud](https://cloud.mongodb.com/))

---

### 1. Frontend Client (`client`)

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start local development server (HMR enabled)
npm run dev
```

> Application runs at **`http://localhost:5173`**.

---

### 2. Backend Server (`server`)

1. **Configure Environment Variables**:
   Create a `.env` file inside the `server/` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.abc.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
   *(For local MongoDB, use `MONGO_URI=mongodb://localhost:27017/portfolio`)*

2. **MongoDB Atlas Connection Checklist**:
   - **IP Whitelist**: In MongoDB Atlas under *Security* -> *Network Access*, add `0.0.0.0/0` (Allow access from anywhere).
   - **Database Permissions**: Ensure your MongoDB database user has `readWriteAnyDatabase` permissions.
   - **Windows DNS Note**: If encountering `querySrv ECONNREFUSED` on Windows, public DNS resolvers (`8.8.8.8`, `1.1.1.1`) are configured in [`server/config/db.js`](./server/config/db.js).

3. **Start the Backend**:
   ```bash
   # Navigate to server directory
   cd server

   # Install dependencies
   npm install

   # Start backend with auto-reload (nodemon)
   npm run dev
   ```

> Express API server runs at **`http://localhost:5000`**.

---

### 3. Building & Testing Production locally

To bundle and test the production build before deployment:

```bash
cd client

# 1. Compile and optimize production assets into dist/
npm run build

# 2. Preview the production build locally
npm run preview
```

> Preview server will run locally at **`http://localhost:4173`**.

---

## 🌐 Deploying to Production

### Deploying Frontend to Vercel (Recommended)

1. Push your repository to **GitHub**.
2. Log in to [Vercel](https://vercel.com/) and click **Add New** $\rightarrow$ **Project**.
3. Import your `my_portfolio` repository.
4. Configure the build settings:
   - **Root Directory**: `client`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will build and host your portfolio with automatic SSL.

---

### Deploying Backend to Render / Railway

1. Sign up at [Render.com](https://render.com/) or [Railway.app](https://railway.app/).
2. Create a **New Web Service** and link your GitHub repository.
3. Configure settings:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Set Environment Variables (`PORT=5000`, `MONGO_URI=...`).
5. Deploy to receive your live backend API URL.

---

## 🛠️ Available Commands Reference

### Client (`/client`)

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite development server at `http://localhost:5173`. |
| `npm run build` | Compiles optimized production bundle into the `dist/` directory. |
| `npm run preview` | Serves the `dist/` production build locally at `http://localhost:4173`. |
| `npm run lint` | Runs ESLint to check for code syntax errors. |

### Server (`/server`)

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs Express server with `nodemon` (auto-restarts on code changes). |
| `npm start` | Runs Express server with standard Node (`node server.js`). |