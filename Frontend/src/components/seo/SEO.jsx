import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Tamil Mani Traders - Buy Diwali Crackers Online | Sivakasi',
  description = 'Premium quality crackers from Sivakasi. Tamil Mani Traders offers a wide range of diwali fireworks, atom bombs, sparklers, rockets & combo packs at best prices. Order online now!',
  keywords = 'Tamil Mani Traders Sivakasi, wholesale traders in Sivakasi, fireworks supplier in Sivakasi, best traders in Sivakasi, Sivakasi wholesale market, Sivakasi business directory, fireworks manufacturer Sivakasi, Sivakasi crackers wholesale dealers, buy fireworks online Sivakasi, original Sivakasi crackers factory, cheap and best crackers in Sivakasi, Sivakasi pattasu wholesale, diwali crackers online',
  url = 'https://tamilmanitraders.com',
  image = 'https://tamilmanitraders.com/og-image.jpg',
  type = 'website',
  structuredData = null,
}) => {
  const fullTitle = title.includes('Tamil Mani Traders')
    ? title
    : `${title} | Tamil Mani Traders`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Tamil Mani Traders" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Tamil Mani Traders" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
