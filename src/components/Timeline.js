import { useEffect, useState } from "react"


const Timeline = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(async () => {
    console.log("Rendering timeline...")
    let req = await fetch("https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json")
    let res = await req.json();
    setPosts(res)
    },[])

    return (
        <div>
            <h1>Timeline</h1>
            {/* {
                posts.map()
            } */}
        </div>
    )
}

export default Timeline
