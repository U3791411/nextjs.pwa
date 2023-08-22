import Link from 'next/link';

type MetaData = {
  tag: string
  header: string
  version?: string
}

const metaData: MetaData = {
  tag: '0P3NS0URCE PR0J3CT5',
  header: 'NEXT.JS | PWA',
  version: 'Version 1.0.0-beta.1'
}

export default function Home() {
  return (
    <div className="container-100vh">
      <div className="center-xy">
        <small className="fw-bold">{metaData.tag}</small>
        <h1 className="pb-3">{metaData.header}</h1>
        <Link className="btn btn-outline-light text-capitalize fw-bold" href="/blogs">read more</Link>
        <div className="d-flex justify-content-end mt-5">
          <small className="fw-bold">&#x1F4E6; {metaData.version}</small>
        </div>
      </div>
    </div>
  );
}