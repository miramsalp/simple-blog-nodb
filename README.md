# My Simple Blog App

A straightforward and easy-to-use blogging platform built with Node.js, Express, and EJS, demonstrating fundamental web development concepts and CRUD operations.

## Table of Contents

* [About the Project](#about-the-project)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [Usage](#usage)

## About the Project

This project serves as a practical learning experience in full-stack web development. It's a basic blog application where users can create, view, edit, and delete blog posts. The focus is on clarity and simplicity, providing a solid foundation for understanding how server-side rendering with EJS integrates with a Node.js/Express backend and Bootstrap for front-end styling.

## Features

* **Create Blog Posts:** Add new articles with a title, content, and an optional image URL.
* **View All Posts:** See a list of all blog posts on the homepage.
* **Edit Posts:** Modify existing blog posts (title, content, image URL).
* **Delete Posts:** Remove posts from the blog.
* **Responsive Design:** Styled with Bootstrap 5 to look good on various screen sizes.
* **Clean Navigation:** Intuitive navigation bar for easy access to different sections.
* **About Page:** Provides information about the application and credits.

## Technologies Used

* **Backend:**
    * [Node.js](https://nodejs.org/): JavaScript runtime environment.
    * [Express.js](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
    * [EJS (Embedded JavaScript)](https://ejs.com/): Templating engine for generating HTML with JavaScript.
* **Frontend:**
    * [Bootstrap 5](https://getbootstrap.com/): CSS framework for responsive and modern design.
    * [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML): Standard markup language for creating web pages.
    * [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS): Stylesheet language for styling web pages.
    * [Google Fonts](https://fonts.google.com/): For custom typography (Libre Baskerville, Open Sans, Montserrat).
* **Development Tools:**
    * [Nodemon](https://nodemon.io/): (Recommended) For automatically restarting the Node.js server during development.

## Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed.

* [Node.js & npm](https://nodejs.org/en/download/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_GITHUB_REPO_LINK_HERE]
    cd [your-project-folder-name]
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    ```
3.  **Run the application:**
    ```bash
    node index.js
    # OR, if you have Nodemon installed:
    # nodemon index.js
    ```
    The application will typically run on `http://localhost:3000`.

## Usage

* **Homepage (`/`)**: Displays a welcome message and lists all existing blog posts.
* **Create New Post (`/create`)**: Fill out the form to add a new blog post.
* **Edit Post (`/edit/:id`)**: Click the "Edit" button on any post to modify its content.
* **Delete Post (`/delete/:id`)**: Click the "Delete" button on any post to remove it.
* **About Page (`/about`)**: Learn more about this application and its technologies.
