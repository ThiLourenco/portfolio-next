import Script from 'next/script'
import React from 'react'

const GoogleAnalytics = () => (
  <>
    <Script
      defer
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
    />
    <Script
      id="analytics"
      defer
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
)

export default GoogleAnalytics
