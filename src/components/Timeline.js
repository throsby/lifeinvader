import { useEffect, useState } from "react"


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
                posts.map((element) => {
                    return(
                        <div>
                            <p>Post by {element.username}</p>
                            <p>{element.content}</p>
                        </div>
                    )
                }

                )
            }
        </div>
    )
}

export default Timeline
