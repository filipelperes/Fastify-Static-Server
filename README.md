# Static File Server

This project provides a simple static file server designed to demonstrate serving various frontend applications and static content. It features three distinct frontend options: **HTML**, **React**, and **Vue**.

## Features

* **Static File Serving**: Efficiently serves static assets from a designated `public` folder.
* **Multiple Frontend Options**:
    * **HTML**: A straightforward, plain HTML interface.
    * **React**: A dynamic application built with React.
    * **Vue**: A responsive application developed using Vue.js.
* **File Listing API**: An endpoint to list available files.

## Project Structure

Ensure your project structure includes a `public` folder at the root, alongside your `server` and `client` directories. This `public` folder will house all the static files you intend to serve.

├── public/
├── client/
├── dist/
├── server/
└── ...

## Getting Started

This project supports both **development** and **production** modes, allowing you to run the server with hot-reloading for development or with pre-built assets for deployment.

### Development Mode

For development, use the following `npm` scripts to start the server and the respective frontend development servers. Note that in development, React (Vite) runs on port **5173** and Vue (Vite) on port **5172**. The main server will typically run on a different port (e.g., **3333** as a default for production, but it's dynamic in dev).

* **`npm run dev`**: Starts the server, React, and Vue development servers concurrently.
* **`npm run dev:sr`**: Starts the server and React development server concurrently.
* **`npm run dev:sv`**: Starts the server and Vue development server concurrently.
* **`npm run dev:server`**: Starts only the main static file server with hot-reloading.
* **`npm run dev:react`**: Starts only the React development server.
* **`npm run dev:vue`**: Starts only the Vue development server.

### Building for Production

To create optimized production builds of your frontend applications, use the following scripts. The built files will be placed in the **`dist`** folder, ready to be served by the main server.

* **`npm run build`**: Builds both the Vue and React applications for production.
* **`npm run build:server`**: Compiles the server-side TypeScript code.
* **`npm run build:react`**: Builds the React application for production.
* **`npm run build:vue`**: Builds the Vue application for production.

### Running in Production

After building your frontend applications, you can start the server in production mode. By default, the production server runs on port **3333**.

Once the server is running (either in development or production), you can access the different frontends and static files at the following URLs:

* **React**: `http://<YOUR_IP_ADDRESS>:<PORT>/react/`
* **Vue**: `http://<YOUR_IP_ADDRESS>:<PORT>/vue/`
* **HTML**: `http://<YOUR_IP_ADDRESS>:<PORT>/html/`
* **Files**: `http://<YOUR_IP_ADDRESS>:<PORT>/files/`
* **API**: `http://<YOUR_IP_ADDRESS>:<PORT>/api/files`

**Note:** `<YOUR_IP_ADDRESS>` can be `localhost` (127.0.0.1) or your local area network (LAN) IP address. `<PORT>` will be the port your server is configured to run on (e.g., **3333** in production, or a dynamic port in development for the main server, while React and Vue development servers use **5173** and **5172** respectively).