

async function getPost(postId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/blog/records/${postId}`,
    {
        next: { revalidate: 10 },
    });

    const data = await res.json();
    return data;
}

export default async function PostPage({ params }: any) {
    const post = await getPost(params.id);
    return (
        <div>
            <h1>posts/{post.id}</h1>
            <div>
                <h2>{post.title}</h2>
                <p>{post.created}</p>
                <p>{post.post_content}</p>
            </div>
        </div>
    )
}