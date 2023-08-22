import Link from 'next/link';
import { getSortedByDateData } from '@/lib/markdownToHtml';
import Date from '../components/date';

type MetaData = {
  tag: string
  header: string
}

const metaData: MetaData = {
  tag: '0P3NS0URCE PR0J3CT5',
  header: 'FEATURED BLOGS',
}

type MarkdownData = {
  "slug": string,
  "title": string,
  "date": string
}

export default async function Blogs() {
  const markdownData: MarkdownData[] = await getSortedByDateData();
  return (
    <>
      <small>{metaData.tag}</small>
      <h1 className="mb-4">{metaData.header}</h1>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {markdownData.map(({ slug, title, date }) => (
          <li key={slug} className="mb-2 pb-3">
            <section>
              <Link href={`/blogs/${slug}`}><h6>{title}</h6></Link>
              <small>&#x1F5D3; <Date dateString={date} /></small>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
}