# My Simple Blog App

A straightforward and easy-to-use blogging platform built with Node.js, Express, and EJS and CRUD operations.

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
