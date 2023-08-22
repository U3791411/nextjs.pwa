import { GetStaticPaths, GetStaticProps } from 'next';
import { getMarkdownData } from '@/lib/markdownToHtml';
import Date from '../../components/date';

interface PageProps {
  params: { slug: string }
}

export default async function BlogPost({ params: { slug } }: PageProps) {
  const postData = await getMarkdownData(slug);
  return (
    <>
      <h1 className="display-5">{postData.title}</h1>
      <small>
        <Date dateString={postData.date} />
        <hr className="mb-4" />
        <article dangerouslySetInnerHTML={{__html: postData.contentHtml}}></article>
      </small>
    </>
  );
}