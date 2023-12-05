import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import Header from '../../components/Header';
import styles from './Header.module.css';

// Define a type for your frontmatter
interface Frontmatter {
  title: string;
  // Add other frontmatter fields here as needed
}

// Define a type for your component's props
interface PostPageProps {
  source: MDXRemoteSerializeResult;
  frontmatter: Frontmatter;
}

const postsDirectory = path.join(process.cwd(), 'src/pages/blog/posts');

const PostPage: React.FC<PostPageProps> = ({ source, frontmatter }) => {
    return (
      <>
      <Header />
      <main className="min-h-screen overflow-hidden">
        <h1>{frontmatter.title}</h1>
        <article>
          <MDXRemote {...source} />
        </article>
      </main>
      </>

    );
  };

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const postContent = fs.readFileSync(fullPath, 'utf-8');
    const { data: frontmatter, content } = matter(postContent);
    const mdxSource = await serialize(content);

    return {
      props: {
        source: mdxSource,
        frontmatter,
      },
    };
  } catch (err) {
    // If there's an error reading the file or the file doesn't exist, return a 404 page
    console.error(err);
    return {
      notFound: true,
    };
  }
};
  

  export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(postsDirectory);
    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.mdx', ''),
      },
    }));
  
    console.log("Generated paths:", paths); // Add this line
  
    return {
      paths,
      fallback: false,
    };
  };
  

export default PostPage;
