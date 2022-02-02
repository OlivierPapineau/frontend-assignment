import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getPostById } from "./services"

import "./Blog.scss"

export const Blog = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPostById(id).then(res => {
            setBlog(res)
        })
    }, [])

    useEffect(() => {
        if (blog && loading) {
            setLoading(false)
        }
    }, [blog])

    return (
        <>
            {loading ? (
                <p>LOADING...</p>
            ) : (
                <section className="blog-page">
                    <h2>{blog.title}</h2>
                    <p>By <a href={blog.authorUrl}>{blog.authorName}</a></p>
                    <img className="blog-page__image" src={blog.imageUrl} />
                    <p>
                        <a href={blog.url}>Original post link</a>
                    </p>

                    <article>
                        <p>{blog.content}</p>
                    </article>

                    <p>ID: {blog.id}</p>
                    <p>Locale: {blog.locale}</p>
                    
                    {blog.tags.length ? <h3>Tags</h3> : null}
                    <div>
                        {blog.tags?.map(tag => <span>{tag}, </span>)}
                    </div>
                </section>
            )}
        </>
    )
}

export default Blog
