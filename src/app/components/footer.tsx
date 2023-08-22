import Image from 'next/image';

export default function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <span>
        <Image className="logo" src="/vercel.svg" alt="Vercel Logo" width={72} height={16}></Image>
      </span>
      <small className="d-block mt-2 text-uppercase">
        copyright &copy; {date.getFullYear()}
      </small>
    </footer>
  );
}