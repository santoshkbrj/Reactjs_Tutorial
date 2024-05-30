import { useState } from "react";

function App() {
    const [blogPostData, setblogPostData] = useState({
        title: "",
        body: "",
    });


    console.log(blogPostData)

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (blogPostData.title && blogPostData.body) {
                    try {
                        fetch('https://jsonplaceholder.typicode.com/posts', {
                            method: 'POST',
                            body: JSON.stringify({
                                title: blogPostData.title,
                                body: blogPostData.body,
                                userId: 1,
                            }),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            },
                        })
                    }
                    catch (err) {
                        console.log(err)
                    }
                }
            }}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={blogPostData.title}
                        onChange={(e) => {
                            setblogPostData((currentStateBlogPostData) => ({
                                ...currentStateBlogPostData,
                                title: e.target.value
                            }))
                        }} />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input type="text" id="body" value={blogPostData.body}
                        onChange={(e) => {
                            setblogPostData((currentStateBlogPostData) => ({
                                ...currentStateBlogPostData,
                                body: e.target.value
                            }))
                        }} />
                </div>
                <button>Create Post</button>
            </form>
        </>
    )
}
export default App;