import React from 'react';
import Helmet from 'react-helmet';
import Thumbnail from '../images/thumbnail.png';
import {
   url,
   email,
   defaultDescription,
   defaultTitle,
   socials,
   keywords,
   legalName,
   foundingDate,
   logo,
} from '../config';

const Meta = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
   const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${email}",
			"contactType": "customer service"
		}],
		"sameAs": [
			"${socials[0].url}",
			"${socials[1].url}",
			"${socials[2].url}",
			"${socials[3].url}"
		]
  	}`;

   return (
      <Helmet>
         <html lang="en" dir="ltr" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta name="description" content={description} />
         <meta name="image" content={Thumbnail} />
         <meta name="google-site-verification" content="Mq1sjpXaWuqdgj76MSPWHbOQvOERD55iNh5llh1h_4Q" />

         <meta property="og:url" content={`${url}${location}`} />
         <meta property="og:site_name" content={url} />
         <meta property="og:type" content="website" />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={Thumbnail} />
         <meta property="og:locale" content="en_US" />

         <meta name="twitter:card" content="summary" />
         <meta name="twitter:creator" content={socials[1].url} />
         <meta name="twitter:site" content={socials[1].handle} />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={description} />
         <meta name="twitter:image:src" content={Thumbnail} />

         <meta content={keywords} name="keywords" />
         <script type="application/ld+json">{structuredDataOrganization}</script>
         <title>{title}</title>
      </Helmet>
   );
};

export default Meta;
