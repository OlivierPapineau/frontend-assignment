import { Divider, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { getAllPosts } from "./services"
import { BlogPost } from "./components"

import "./Blogs.scss";

function Blogs() {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(res => {
            setPosts(res)
        })
    }, [])

    useEffect(() => {
        if (loading && posts.length) {
            setLoading(false)
        }
    }, [posts])

    const filteredPosts = useMemo(() => posts.length ? ({
        all: posts,
        author: posts.filter(post => post.authorName === "Damian Kastbauer"),
        latest: posts.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)),
    }) : [], [selectedFilter, posts])

    return (<>
        <header className="blogs-header">
            <Typography variant="h4">Blogs: </Typography>
            <ToggleButtonGroup
                value={selectedFilter}
                exclusive
                onChange={(e) => setSelectedFilter(e.target.value)}
            >
                <ToggleButton value="latest">
                    Latest
                </ToggleButton>
                <ToggleButton value="author">
                    By Damian Kastbauer
                </ToggleButton>
                <ToggleButton value="all">
                    All
                </ToggleButton>
            </ToggleButtonGroup>
        </header>
        <Divider variant="fullWidth"></Divider>
        <section className="blogs">
            
            {loading ? (
                <p>LOADING...</p>
            ) : filteredPosts[selectedFilter]?.map(post => (
                <BlogPost key={post.id} post={post} fitAll={selectedFilter === "all"} />
            ))}
        </section>
    </>);
}
  
export default Blogs;
  