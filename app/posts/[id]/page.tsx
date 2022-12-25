

// async function getPost(postId: string) {
//     const res = await fetch(`http://127.0.0.1:8090/api/collections/blog/records/${postId}`,
//     {
//         next: { revalidate: 10 },
//     });

//     const data = await res.json();
//     return data;
// }

export default async function PostPage({ params }: any) {
    return (
        <div>
            <h1>posts/</h1>
            <div>
                <h1>a</h1>
            </div>
        </div>
    )
}