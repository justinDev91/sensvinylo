"use client"

import Navbar from '@/app/components/navbar';
import blogPosts from '@/app/data/blogPosts';

import Image from 'next/image';

const BlogPost = ({
  params,
}
) => {
  const  slug = params.slug;
  const post = slug ? blogPosts.find(post => post.slug === slug) : null;

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <Navbar />
       <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      {post.image && (
        <div className="mb-4">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
    </div>

  );
};

export default BlogPost;
