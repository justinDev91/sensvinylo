import { useRouter } from 'next/router';
import blogPosts from '../data/blogPosts';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
};

export default BlogPost;