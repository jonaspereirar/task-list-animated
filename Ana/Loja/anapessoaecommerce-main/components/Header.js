import Link from "next/link";
export default function Header() {
  return (
    <div className="Announcement ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center display-none">
            <p>anapessoa.art</p>
          </div>
          <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
            <Link href="https://www.facebook.com/Ana-Pessoa-Atelier-104375582162262/">
              <a>
                <i className="fab fa-facebook-f fa-inverse"></i>
              </a>
            </Link>
            <Link href="https://www.instagram.com/anapessoa.atelier/">
              <a>
                <i className="fab fa-instagram"></i>
              </a>
            </Link>
            <Link href="https://twitter.com/AnaPessoa_Art">
              <a>
                <i className="fab fa-twitter fa-inverse"></i>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UC83Gtuuk5WYTWNKETIj5HFQ/about">
              <a>
                <i className="fab fa-youtube fa-inverse"></i>
              </a>
            </Link>
            <Link href="https://www.pinterest.pt/anapessoaatelier/">
              <a>
                <i className="fab fa-pinterest-p fa-inverse"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
