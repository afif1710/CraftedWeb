import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Template } from '@/data/templates';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Product' | 'ItemList';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type,
          ...data,
        })}
      </script>
    </Helmet>
  );
};

export default StructuredData;
