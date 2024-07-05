import Link from 'next/link';
import blogPosts from '../data/blogPosts';


const BlogPostList = () => {
  return (
    <div>
      {blogPosts.map(post => (
        <div key={post.id} className="text-xl mb-6 font-bold hover:text-blue-500">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
          <p className="text-gray-700 mt-2">{post.summary}</p>
          <p className="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;