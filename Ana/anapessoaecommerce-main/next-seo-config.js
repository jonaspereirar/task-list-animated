const title = 'anapessoa.art - Ecommerce produtos de aterzanato.'
const description = 'Adquira os mais lindos produtos feitos a mão'

const SEO = {
  title,
  description,
  canonical: 'https://anapessoa.art',
  openGraph: {
    type: 'Ecommerce',
    locale: 'pt',
    url: 'https://anapessoa.art',
    title,
    description,
    imagens: [
      {
        url: 'https://anapessoa.art/_next/image?url=%2Fanapessoa.png&w=128&q=75',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;