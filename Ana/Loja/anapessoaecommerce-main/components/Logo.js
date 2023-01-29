import Link from 'next/link';

export default function Logo() {
  return (
    <>
      <Link href="/">
        <a className="logo">Ana Pessoa Atelier</a>
      </Link>
      <style jsx>{`
        .logo {
          font-style: normal;
          font-weight: 900;
          font-size: 21px;
          line-height: 60px;
          letter-spacing: 1.65px;
          text-transform: uppercase;
          color: #00E4F7;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}