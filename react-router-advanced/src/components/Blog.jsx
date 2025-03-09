import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h2>Blog</h2>
            <ul>
                <li><Link to="post/1">Post 1</Link></li>
                <li><Link to="post/2">Post 2</Link></li>
            </ul>
            <Routes>
                <Route path="post/:postId" element={<Post />} />
            </Routes>
        </div>
    );
};

const Post = () => {
    const { postId } = useParams();
    return <h3>Blog Post ID: {postId}</h3>;
};

export default Blog;
