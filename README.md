
# Blog Website

## Overview
This project is a fully-featured blog website where users can register, log in, create, update, and delete blogs. Users can also post, update, and delete comments on blogs. The website ensures that users can only modify their own blogs and comments, providing a secure and personalized experience. Additionally, blogs can be filtered by category, allowing users to easily find content that interests them.

## Features
- **User Authentication:** Users can register and log in to access the blog features.
- **Blog Management:** Users can create, update, and delete their own blogs.
- **Comment System:** Users can post comments on blogs and also update or delete their own comments.
- **Authorization:** Users can only edit or delete their own blogs and comments, secured by JSON Web Tokens (JWT).
- **Blog Filtering:** Blogs can be filtered by category for easier navigation.
- **Responsive Design:** Built with MUI and Tailwind CSS for a modern and responsive UI.
- **State Management:** Utilizes Redux for efficient state management across the application.

## Technologies Used
- **Frontend:** React, MUI, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **State Management:** Redux

## Deployment
The project is deployed and can be accessed [here](https://blog-website-lilac.vercel.app/).

## Screenshots
### Homepage
![Screenshot (225)](https://github.com/Hirak7024/MERN-Blog-Application/assets/118119209/a3d572cc-76ec-4a52-ad4f-b17d17d1f72d)

### Login/Register Page
![Screenshot (223)](https://github.com/Hirak7024/MERN-Blog-Application/assets/118119209/22f0d8cc-2348-4135-8ee5-07d48456ec5c)
![Screenshot (224)](https://github.com/Hirak7024/MERN-Blog-Application/assets/118119209/ca2b4f8c-c186-4a7f-b7c3-b49b3ce5d557)

### All Blogs Page
![Screenshot (226)](https://github.com/Hirak7024/MERN-Blog-Application/assets/118119209/7755ef5c-1617-4037-bae2-d4518fb6ab49)

### User Blogs Page
![Screenshot (227)](https://github.com/Hirak7024/MERN-Blog-Application/assets/118119209/da857d07-4d9c-4504-9be4-f13b5b4d3f26)

### Blog Page
![Screenshot (229)](https://github.com/Hirak7024/MERN-Blog-Application/assets/118119209/aedde4dc-9431-4da8-b9ae-d3e82adf299b)

### Comments Section
![Screenshot (231)](https://github.com/Hirak7024/MERN-Blog-Application/assets/118119209/0fc0c77b-48dc-42ef-b646-bf5fc846a50f)

### Create Blog Page
![Screenshot (228)](https://github.com/Hirak7024/MERN-Blog-Application/assets/118119209/a140e3f4-063a-4963-b182-37dbc5b8872a)

## Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Hirak7024/MERN-Blog-Application.git
   cd MERN-Blog-Application
   ```

2. **Set up the server:**
   ```sh
   cd server
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add the following variables:
   ```env
   MONGO_URL = your_mongodb_connection_string
   JWT_KEY = your_jwt_secret
   PORT = port_number
   ```

4. **Start the backend:**
   ```sh
   npm run dev
   ```

5. **Set up the client:**
   ```sh
   cd ../client
   npm i react-scripts
   npm start
   ```
