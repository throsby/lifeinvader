import { useEffect, useState } from "react"
import Post from "./Post"
import CreatePostModal from "./CreatePostModal"

const Timeline = () => {
    const [posts, setPosts] = useState([])
    const [newPostModalVisible, setNewPostModalVisible] = useState(false)
    
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
            <h2>Poe-t8</h2>
            <h2>Timeline</h2>
            <button onClick={()=>{setNewPostModalVisible(!newPostModalVisible)}}>+ New Post</button>
            <i class="fa-solid fa-anchor"></i>
            <CreatePostModal newPostModalVisible={newPostModalVisible}/>
            
            {
                posts.map((post) => {
                    return(
                        <Post key={post.id} post={post}/>
                    )
                }
                )
            }
        </div>
    )
}

export default Timeline
