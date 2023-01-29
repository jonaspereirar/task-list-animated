import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <Link href="https://t.me/+NIMLCSMMemg3ODk0">
                <i className="fab fa-telegram fa-3x"></i>
              </Link>
            </div>
            <h5>Telegram</h5>
            <a href="https://t.me/+NIMLCSMMemg3ODk0">
              <p>anapessoa.atelier</p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <Link href="https://www.google.pt/maps/place/Castro+Verde/@37.7175652,-8.2248393,11z/data=!3m1!4b1!4m5!3m4!1s0xd1a61d0b17e2631:0x2e82b3679d4a2d84!8m2!3d37.6991315!4d-8.0858263?hl=pt-PT">
                <i className="fas fa-map-marker-alt fa-2x"></i>
              </Link>
            </div>
            <h5>Localização</h5>
            <a href="https://www.google.pt/maps/place/Castro+Verde/@37.7175652,-8.2248393,11z/data=!3m1!4b1!4m5!3m4!1s0xd1a61d0b17e2631:0x2e82b3679d4a2d84!8m2!3d37.6991315!4d-8.0858263?hl=pt-PT">
              <h6>Castro Verde</h6>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <Link href="https://www.google.pt/maps/place/Castro+Verde/@37.7175652,-8.2248393,11z/data=!3m1!4b1!4m5!3m4!1s0xd1a61d0b17e2631:0x2e82b3679d4a2d84!8m2!3d37.6991315!4d-8.0858263?hl=pt-PT">
                <i className="fas fa-envelope fa-2x"></i>
              </Link>
            </div>
            <h5>Email</h5>
            <a href="mailto:anapessoa.atelier@gmail.com?subject=Olá Ana Pessoa Atelier">
              <p>anapessoa.atelier@</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
