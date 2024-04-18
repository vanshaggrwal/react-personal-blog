import React, { useEffect, useState } from "react";

function SpecialB() {
  const [specialBlogs, setSpecialBlogs] = useState([]);

  useEffect(() => {
    fetch("/special-blogs")
     .then((response) => response.json())
     .then((data) => setSpecialBlogs(data.specialBlogs))
     .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Special Blogs</h1>
      <ul>
        {specialBlogs.map((blog) => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpecialB;