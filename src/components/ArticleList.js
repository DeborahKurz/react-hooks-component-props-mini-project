import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    // console.log(posts)
    const mapPost = posts.map((post)=>{
        return (
            <Article
            key={post.title}
            title={post.title}
            date={post.date}
            preview={post.preview}
        />
        )
    })
    return(
        <main>
            {mapPost}
        </main>
    )
};

export default ArticleList;
