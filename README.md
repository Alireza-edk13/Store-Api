# E-commerce Platform +50 route

This is a full-featured e-commerce platform developed using Node.js, TypeScript, and Express.

If this project have been helpful to you, I’d appreciate your support by giving this repo a Star ⭐.

## Features

- **Authentication** (`/auth`):
  - User registration (`/register`) and login (`/login`).
  - Access user profile (`/me`) and refresh authentication tokens (`/refresh`).
  - Forgot password and reset password functionalities (`/forget-password`, `/reset-password`).

- **User Management** (`/user`):
  - Admin access to view all users (`/`), edit user details (`/edit/:id`), remove users (`/remove/:id`), and ban users (`/ban/:id`).
  - Users can update their own profile (`/update`) and view their order history (`/orders`).
  - Admin can also change user roles (`/role`).

- **Category Management** (`/category`):
  - Admins can create (`/`) and manage product categories.
  - Admins can also update or remove categories by ID (`/:id`).
  - All users can view the available categories.

- **Product Management** (`/product`):
  - Admins can create (`/`) and update (`/:id`) products, including uploading product images.
  - Products can also be removed by ID (`/:id`).
  - All users can view the list of products available.

- **Article Management** (`/article`):
  - Admins can create (`/`) and update articles, including adding cover images.
  - Articles can be published, saved as drafts (`/draft`), and deleted by ID (`/:id`).
  - Users can view all articles or specific articles by their shortname (`/:shortname`).

- **Comment Management** (`/comment`):
  - Users can add comments (`/`), view all comments, and provide answers (`/answer/:id`).
  - Admins can remove comments (`/:id`), accept (`/accept/:id`), or reject (`/reject/:id`) comments.

- **Contact Management** (`/contact`):
  - Users can send inquiries via a contact form (`/`).
  - Admins can view all inquiries and delete inquiries by ID (`/:id`).
  - Admins can also respond to inquiries (`/answer`).

- **Menu Management** (`/menu`):
  - Admins can create and manage website menus (`/`), including topbar links (`/topbar`).
  - All users can view the menu (`/`, `/all`).

- **Discount Management** (`/off`):
  - Admins can create discount codes (`/`) and apply discounts to all products (`/all`).
  - Users can verify discount codes (`/verfiy`), while admins can remove discounts by ID (`/:id`).

- **Order Management** (`/order`):
  - Users can create orders (`/`), and admins can change order status (`/:id`).

- **Search Functionality** (`/search`):
  - Users can search for products, articles, or other resources by value (`/:value`).

- **Support Tickets** (`/ticket`):
  - Users can create support tickets and view their own tickets (`/user`).
  - Admins can manage tickets, answer them (`/answer`), and view all tickets.

- **Wishlist** (`/wishlist`):
  - Users can add products to their wishlist (`/`), view their wishlist, or remove items from it (`/:id`).




## Getting Started

### Installation


1.Clone the `repo` using the following command:
   ```sh
   git clone https://github.com/Alireza-edk13/Store-Api.git
   ```

2.Install node_modules
   ```sh
   npm install
   ```
3.Create .env file and set these
   ```sh
      PORT=3000
      MONGO_URI=mongodb://127.0.0.1:27017/store-api
      NODE_ENV=production
      ACCESS_TOKEN_SECRET_KEY= set a random key like (vzdzkbjcnlaskdvscmmas)
      REFRESH_TOKEN_SECRET_KEY= set a random key like (vzdzkbjcnlaskdvscmmas)
      EMAIL=your-email
      EMAIL_PASSWORD=your-email-pass(not your real pass!)
   ```


*Go to your email settings, search for App Passwords, and generate an app-specific password for EMAIL_PASSWORD



## Api document for postman

if you wnat api doc for postman you can easily send me a message and i send you api doc :)
* Telegram: https://t.me/Alireza_edk13

swagger doc is loading....


