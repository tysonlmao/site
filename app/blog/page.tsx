async function getPosts() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records');
    const data = await res.json();
    return data?.items as any[];
}

export default async function BlogPage() {
    return(
        <div>
            <h1>blog</h1>
        </div>
    )
}