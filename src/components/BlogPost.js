import "./BlogPost.scss"

import React from "react"
import { Link } from "react-router-dom"

export const BlogPost = (props) => {
    const { post, fitAll } = props

    return (
        <Link className={`blogpost-card ${fitAll ? "blogpost-card--small" : ""}`} to={`/${post.id}`}>
            <div className="blogpost-card__content">
                <h3>{post.title}</h3>
                <img src={post.imageUrl} />
                <p className="blogpost-card__author">Published by: {post.authorName}</p>
                <p className="blogpost-card__date"><i>On {new Date(post.publishedDate).toLocaleString()}</i></p>
            </div>
        </Link>
    )
}
