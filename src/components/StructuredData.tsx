export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OTZ Group",
    "legalName": "OTZ Group LLC",
    "url": "https://otz.group",
    "logo": "https://otz.group/logo.png",
    "description": "Miami-based AI consulting firm specializing in practical AI implementation for healthcare, retail, and logistics SMBs. Voice agents, automation, and proprietary Nucleus platform with 21-day deployments.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33131",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-305-781-4034",
      "contactType": "sales",
      "email": "matthew@otz.group",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/otz-group"
    ],
    "foundingDate": "2024",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 25.7617,
        "longitude": -80.1918
      },
      "geoRadius": "100 mi"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Voice Agents",
      "Business Automation",
      "Healthcare AI",
      "Retail AI",
      "Logistics AI",
      "Answer Engine Optimization"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "OTZ Group",
    "image": "https://otz.group/og-image.jpg",
    "priceRange": "$$$$",
    "@id": "https://otz.group",
    "url": "https://otz.group",
    "telephone": "+1-305-781-4034",
    "email": "matthew@otz.group",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33131",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.7617,
      "longitude": -80.1918
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": [
      { "@type": "City", "name": "Miami" },
      { "@type": "City", "name": "Fort Lauderdale" },
      { "@type": "City", "name": "West Palm Beach" },
      { "@type": "State", "name": "Florida" }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OTZ Group",
    "url": "https://otz.group",
    "description": "AI consulting and implementation for South Florida SMBs",
    "publisher": {
      "@type": "Organization",
      "name": "OTZ Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://otz.group/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}

export function ServiceSchema({ name, description, url, serviceType }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "name": "OTZ Group",
      "url": "https://otz.group"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 25.7617,
        "longitude": -80.1918
      },
      "geoRadius": "100 mi"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://otz.group/contact",
      "servicePhone": "+1-305-781-4034"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CaseStudySchemaProps {
  name: string;
  description: string;
  url: string;
  industry: string;
  datePublished: string;
}

export function CaseStudySchema({ name, description, url, industry, datePublished }: CaseStudySchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": name,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Organization",
      "name": "OTZ Group"
    },
    "publisher": {
      "@type": "Organization",
      "name": "OTZ Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://otz.group/logo.png"
      }
    },
    "about": {
      "@type": "Thing",
      "name": industry
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServicesListSchema() {
  const services = [
    {
      name: "AI Strategic Guidance",
      description: "Comprehensive AI strategy and roadmap development for SMBs looking to implement AI solutions effectively.",
      url: "https://otz.group/offerings/ai-strategic-guidance"
    },
    {
      name: "AI Voice Agents",
      description: "24/7 intelligent voice agents for customer service, appointment scheduling, and inbound/outbound calls.",
      url: "https://otz.group/offerings/ai-voice-agents"
    },
    {
      name: "Answer Engine Optimization (AEO)",
      description: "Optimize your digital presence for AI-powered search engines and voice assistants.",
      url: "https://otz.group/offerings/aeo"
    },
    {
      name: "AI Training & Education",
      description: "Custom AI training programs for teams to understand and leverage AI tools effectively.",
      url: "https://otz.group/offerings/teachings"
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "OTZ Group Services",
    "description": "AI consulting and implementation services for South Florida businesses",
    "numberOfItems": services.length,
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "url": service.url,
        "provider": {
          "@type": "Organization",
          "name": "OTZ Group"
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
