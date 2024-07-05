import Link from 'next/link';
import Image from 'next/image';
import blogPosts from '../data/blogPosts';

const BlogPostList = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {blogPosts.map(post => (
        <div key={post.id} className="mb-8 p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
          <Link href={`/blog/${post.slug}`}>
            <div className="flex items-center">
              <Image
                src={post.image}
                alt={post.title}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <h2 className="text-2xl font-bold text-blue-500 hover:text-blue-700">
                {post.title}
              </h2>
            </div>
          </Link>
          <p className="text-gray-700 mt-2">{post.summary}</p>
          <p className="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
