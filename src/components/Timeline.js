import { useEffect, useState } from "react"
import Post from "./Post"

const Timeline = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        // console.log("rendering timeline")
        // IIFE: Immediately invoked function expression
        (async () => {
            let req = await fetch("https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json")
            let res = await req.json();
            setPosts(res)
        })()
    },[])
    
    return (
        <div>
            <h1>Timeline</h1>
            {
                posts.map((post) => {
                    return(
                        <Post post={post}/>
                    )
                }
                )
            }
        </div>
    )
}

export default Timeline
