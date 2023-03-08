import { json } from "@remix-run/node"

const loader = async () => {
    return json({posts: []})
}

const BlogRoute = () => {
    return (
        <>
            <p>blog route</p>
        </>
    )
}

export default BlogRoute
export {loader}
