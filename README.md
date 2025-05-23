# 🏃 Sportswear Hub

> A modern e-commerce web application for sports enthusiasts in Australia. Built as a prototype of a future all-in-one online platform offering high-quality gear across multiple sports categories.

## 🚀 Project Vision

This project started as a personal dream: to create a platform like Amazon, but dedicated to sports gear. As a passionate developer and sports enthusiast, I envisioned a solution where athletes across Australia could find all their equipment—from running shoes to cricket bats—in one sleek, functional, and secure site.

## 🌟 Key Features

### 🔄 Dynamic Product Catalog

* Products are fetched from a MySQL database using a RESTful API.
* Frontend renders products dynamically using JavaScript and Bootstrap cards.
* Includes fallback image handling and category tagging.

### 🔐 Secure User Registration

* Passwords are hashed using `bcryptjs` before storage.
* Validated via server-side and client-side checks.
* Future-ready for login/authentication system integration.

### 🛒 Add to Cart Functionality

* LocalStorage-based shopping cart.
* Quantity tracking, item removal, and real-time subtotal calculation.
* Structured to support future server-side cart storage.

### 📧 Contact & Feedback Form

* Users can submit questions or feedback via a contact form.
* Includes JavaScript validation for email, phone, and message.
* Submissions are stored in the `contacts` table in the database.

### 🧾 Client-Side Validation

* Real-time error handling for both contact and registration forms.
* Ensures clean user data before it reaches the backend.

### 💾 Alternate Storage Approach

* Products can be loaded from a local JSON file for development/demo use.
* Automated `load_products.js` script supports bulk insert into MySQL.

## 🛠️ Technologies Used

* **Frontend**: HTML, CSS, Bootstrap 5, Vanilla JavaScript
* **Backend**: Node.js with Express
* **Database**: MySQL (via `mysql2/promise`)
* **Security**: `bcryptjs`, validation scripts, minimal exposure

## 🧪 Screenshots

| Screenshot                                                       | Description                                              |
| -----------------------------------------------------------------| --------------------------------------------------------- |
| ![Homepage](./public/images/placeholder.png)                     | Parallax homepage with greeting and featured categories.  |
| ![Categories](./public/images/placeholder.png)                   | Dynamically rendered product cards with Shop Now buttons. |
| ![Product Details](./public/images/placeholder.png)              | Single product page with Add to Cart button.              |
| ![Cart Page](./public/images/placeholder.png)                    | LocalStorage-based shopping cart view.                    |

## ⚙️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/Arjun-deakin/SportswearHub.git
cd SportswearHub
```

2. **Install Dependencies**

```bash
npm install
```

3. **Configure Database**

* Create a MySQL database named `sportswear_hub`
* Run the `schema.sql` script to create required tables.

4. **Run the App**

```bash
node server.js
```

Visit `http://localhost:3000` to view the site.

## 📁 Folder Structure

```
SportswearHub/
│
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
│   └── *.html
│
├── server.js
├── database.js
├── formValidation.js
├── load_products.js
├── products.json
└── schema.sql
```

## 📬 Contact

For questions or contributions:
📧 **[arjun.deakin@github.com](mailto:arjun.deakin@github.com)**

## 📌 License

This project is licensed under the MIT License.
