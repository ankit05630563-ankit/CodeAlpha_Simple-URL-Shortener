# URL Shortener by Me

A simple URL Shortener API built using **Node.js**, **Express.js**, and **MongoDB**. This application accepts a long URL, generates a unique short code, stores it in MongoDB, and redirects users to the original URL when the short URL is accessed.

---

## Features

- Generate unique short URLs
- Store URL mappings in MongoDB
- Redirect short URLs to the original URL
- RESTful API
- URL validation
- Prevent duplicate URLs (if implemented)
- Clean and modular project structure

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- shortid
- dotenv
- validator

---

## Project Structure

```
URL SHORTENER BY ME
│
├── controllers
│   └── url.controller.js
│
├── routes
│   └── url.routes.js
│
├── src
│   ├── db
│   │   └── db.js
│   │
│   └── models
│       └── url.model.js
│
├── .env
├── app.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ankit05630563-ankit/CodeAlpha_Simple-URL-Shortener.git
```

### 2. Navigate to the project folder

```bash
cd CodeAlpha_Simple-URL-Shortener
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=your_port
MONGO_URI=your_mongodb_connection_string
```

### 5. Start the server

```bash
node server.js
```

or (if using nodemon)

```bash
npm run dev
```

---

## API Endpoints

### Create Short URL

**POST**

```
/shorten
```

### Request Body

```json
{
  "originalUrl": "https://www.google.com"
}
```

### Response

```json
{
  "message": "Short URL Created",
  "shortUrl": "http://localhost:5000/abc123"
}
```

---

### Redirect to Original URL

**GET**

```
/:shortCode
```

Example

```
http://localhost:5000/abc123
```

The server redirects the user to the original URL.

---

## Database Schema

```javascript
{
    originalUrl: String,
    shortCode: String
}
```

---

## Packages Used

- express
- mongoose
- dotenv
- shortid
- validator

---

## Future Improvements

- User Authentication (JWT)
- Custom Short URLs
- QR Code Generation
- Click Analytics
- Expiration Time for URLs
- URL History
- Rate Limiting
- Frontend UI using HTML/CSS/JavaScript or React

---

## Author

**Ankit Kumar**

---

## License

This project is developed for learning purposes and is open for educational use.
