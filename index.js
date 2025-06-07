import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

// Initialize a counter for unique IDs
let nextId = 1;
let arr = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.render("index.ejs", {
        items: arr // Pass the blog posts
    });
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});


app.get("/create", (req, res) => {
    res.render("create.ejs", {
        items: arr
    });
});

app.get("/edit/:id", (req, res) => {
    // have to find exact blog id that passed from url
    const blogId = parseInt(req.params.id);
    const blogEdit = arr.find(blog => blog.id === blogId);

    res.render("edit.ejs", {
        blog: blogEdit
    })
})

app.post("/edit/:id", (req, res) => {
    const blogId = parseInt(req.params.id);
    const updatedTitle = req.body["blogTitle"];
    const updatedContent = req.body["blogContent"];
    const updatedImage = req.body["blogImage"];

    const blogIndex = arr.findIndex(blog => blog.id === blogId);
    if (blogIndex !== -1) {
        arr[blogIndex].blogTitle = updatedTitle;
        arr[blogIndex].blogContent = updatedContent;
        arr[blogIndex].blogImage = updatedImage;
        res.redirect("/create");
    } else {
        res.status(404).send("Blog not found for update");
    }
})

app.post("/create", (req, res) => {
    arr.push({
        id: nextId++, // Assign a unique ID use for edit and delete
        blogTitle: req.body["blogTitle"],
        blogContent: req.body["blogContent"],
        blogImage: req.body["blogImage"]
    });
    res.redirect("/create");
});

// for deleting post we get id from btn then find that id
app.post("/delete/:id", (req, res) => {
    const blogId = parseInt(req.params.id);
    // get every blog except delete blog then reassign it
    // if dont have parseInt still fine but have to change blog.id !== blogId to blog.id != blogId
    arr = arr.filter(blog => blog.id !== blogId);
    res.redirect("/create");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});