# Blog Frontend Built with Sling

This is the frontend for **blog.sling.biz** built using **Sling** — a flexible content management system that allows for easy widget creation, dynamic page routing, and integration with your APIs.

This README outlines how the frontend of `blog.sling.biz` was created using Sling, starting from the creation of page templates, defining page routes, and creating custom widgets that help display blog data dynamically.

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Widgets Created](#widgets-created)
- [Page Templates & Routes](#page-templates--routes)
- [Sample Code & Explanation](#sample-code--explanation)
- [How to Run](#how-to-run)
- [GitHub Repo](#github-repo)

## Introduction

The `blog.sling.biz` site is a blog frontend that dynamically displays blog posts based on categories. It leverages **Sling**, a content management system (CMS), to make the frontend modular, reusable, and easy to maintain. The goal of this project was to allow users to select categories, fetch relevant blog posts from a backend API, and display them seamlessly.

## Tech Stack

- **Frontend**: Sling.biz (with hosted Studio to manage UI)
- **Backend**: Strapi (for managing blog data, categories, etc.)
- **Widgets**: Custom widgets built using Sling
- **Styling**: Material-UI (for UI components)
- **Deployment**: Vercel

## Widgets Created

### 1. **CategoriesLeftBar Widget**

This widget displays a list of categories on the left sidebar. It allows users to select a category, and based on their selection, it fetches the relevant blog posts.

**Key Features:**

- Displays a list of blog categories.
- Users can click on a category to filter the blog posts.
- Dynamically fetches data from Strapi’s API to show blog posts filtered by category.

```javascript
import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, TextField } from "@material-ui/core";
import AppContext from "../../utils/context/AppContext";

const CategoriesLeftBar = () => {
  const [categories, setCategories] = useState([]);
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/categories`
      );
      const { data } = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <Box>
      <Typography variant="h6">Categories</Typography>
      {categories.map((category, index) => (
        <Typography
          key={index}
          onClick={() => setSelectedCategory(category.name)}
          style={{ cursor: "pointer" }}
        >
          {category.name}
        </Typography>
      ))}
    </Box>
  );
};

export default CategoriesLeftBar;
```

### 2. **BlogsList Widget**

This widget displays a list of blog posts based on the selected category. If no category is selected, it displays all posts.

**Key Features:**

- Displays blog posts in a grid layout.
- Each post contains an image, title, author, and read time.
- Fetches blog posts dynamically from the Strapi API based on the selected category.

```javascript
import React, { useState, useEffect, useContext } from "react";
import { Box, Grid, Typography, CircularProgress } from "@material-ui/core";
import AppContext from "../../utils/context/AppContext";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const { selectedCategory } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      let fetchURL = `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/articles?sort[createdAt]=desc`;
      if (selectedCategory) {
        fetchURL = `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/articles?filters[categories][name][$eq]=${selectedCategory}&sort[createdAt]=desc`;
      }
      const response = await fetch(fetchURL);
      const { data } = await response.json();
      setBlogs(data);
      setLoading(false);
    };

    fetchBlogs();
  }, [selectedCategory]);

  return (
    <Box style={{ padding: "16px" }}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress color="primary" />
        </Box>
      ) : blogs.length === 0 ? (
        <Box textAlign="center">
          <Typography variant="h5">No Posts Available</Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Box>
                <img
                  src={blog.image || "/images/default-image.png"}
                  alt={blog.title}
                  style={{ width: "100%" }}
                />
                <Typography variant="h6">{blog.title}</Typography>
                <Typography variant="body2">{blog.author}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default BlogsList;
```

### 3. **BlogDetail Widget**

This widget shows the detailed view of a selected blog post. It fetches the blog post data using its unique `slug` from the Strapi API.

**Key Features:**

- Displays a single blog post's detailed content.
- The content is fetched dynamically based on the `slug` passed in the URL.

```javascript
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";

const BlogDetail = ({ slug }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/articles?filters[slug][$eq]=${slug}`
      );
      const { data } = await response.json();
      setBlog(data[0]);
    };

    fetchBlogDetail();
  }, [slug]);

  if (!blog) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Typography variant="h3">{blog.title}</Typography>
      <Typography variant="body1">{blog.content}</Typography>
    </Box>
  );
};

export default BlogDetail;
```

## Page Templates & Routes

### Page Templates

The project uses page templates in Sling Studio to define the overall structure of the pages. Templates include the layout for the header, footer, and the content area where widgets are rendered.

Example template:
 
### Page Routes

Ceate Page routes from Sling Studio.

 

## How to Run

1. Clone this repository:

   ```bash
   git clone https://github.com/slingbiz/sling-blog-fe.git
   ```

2. Install dependencies:

   ```bash
   cd blog.sling.biz
   npm install
   ```

3. Create your account on [Sling Studio](https://studio.sling.biz) and get your API key.

4. Update your .env file with your API key.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit `http://localhost:4087` in your browser.

## GitHub Repo

You can view and contribute to the repository [here](https://github.com/slingbiz/sling-blog-fe.git).


## Live Blog

Visit live blog at [blog.sling.biz](https://blog.sling.biz) to see the implementation in action.
