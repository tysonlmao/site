import Link from 'next/link';
import styles from './Blog.module.css';

async function getPosts() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30',
    { cache: 'no-store'}
    );
    const data = await res.json();
    return data?.items as any[];
}

export default async function BlogPage() {
    const posts = await getPosts();
    return(
        <div>
            <p className="center">Site is under construction!</p>
            <div>
                {posts?.map((post) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>
        </div>
    )
}

function Post({ post }: any) {
    const { id, post_title, post_content, created } = post || {};

    return (
        
        <Link href={`/posts/${id}`}>
            <div>
                <h2>{post_title}</h2>
                <p>{post_content}</p>
                <p>{created}</p>   
            </div>
        </Link>
    );
}