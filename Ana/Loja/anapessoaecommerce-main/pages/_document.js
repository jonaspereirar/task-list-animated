import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
        <meta name="facebook-domain-verification" content="wrs2vl5k2z6jg7z3jggsa9cv2hzif3" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <meta charSet="utf-8" />
          <meta name="description" content="Adquira os mais lindos produtos feitos  mão" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ecommerce de atersanatos" />
          <meta property="og:description" content="Atersanatos lindos feitos à mão com 💓"/>
          <meta property="og:image" content="https://anapessoa.art/_next/image?url=%2Fanapessoa.png&w=128&q=75"/>
          <meta property="og:image:alt" content="Ecommerce de atersanatos"/>
          <meta property="og:image:width" content="1280"/>
          <meta property="og:image:height" content="720"/>
          <meta property="og:locale" content="pt"/>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"
          ></link>
          <link
            href="https://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css"
            rel="stylesheet"
          ></link>
          <link
            href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
            rel="stylesheet"
          ></link>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
          <script
            src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
