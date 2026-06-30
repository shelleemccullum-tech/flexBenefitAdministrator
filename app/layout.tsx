import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://fba-benefits.netlify.app";
const SITE_DOMAIN = "fba-benefits.netlify.app";
const SITE_BRAND = "Flex Benefit Administrator";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_LOGIN_URL),
  title: {
    default: "Flex Benefit Administrator - Client Login",
    template: "%s | Flex Benefit Administrator",
  },
  keywords: [
    "FlexBenefitAdministrator",
    "Flex Benefit Administrator",
    "FlexBenefit Administrator login",
    "FlexBenefitAdministrator login",
    "FlexBenefitAdministrator benefits",
    "FlexBenefitAdministrator benefits portal",
    "FlexBenefitAdministrator employee benefits",
    "FlexBenefitAdministrator employee portal",
    "FlexBenefitAdministrator participant portal",
    "FlexBenefitAdministrator employer portal",
    "FlexBenefitAdministrator secure login",
    "FlexBenefitAdministrator account access",
    "FlexBenefitAdministrator online account",
    "FlexBenefitAdministrator reimbursement account",
    "FlexBenefitAdministrator benefits management",
    "FlexBenefitAdministrator participant login",
    "FlexBenefitAdministrator employer login",
    "FlexBenefitAdministrator healthcare portal",
    "YourFlex Accounts",
    "YourFlex Accounts login",
    "WealthCare Portal",
    "WealthCare benefits portal",
    "WealthCare participant portal",
    "WealthCare employer portal",
    "WealthCare secure login",
    "benefits login",
    "employee benefits login",
    "employee benefits portal",
    "secure benefits login",
    "participant portal login",
    "employer portal login",
    "account access login",
    "online benefits account login",
    "secure portal access",
    "health benefits",
    "health benefits login",
    "health savings account management",
    "HSA login",
    "FSA login",
    "dependent care FSA login",
    "COBRA login",
    "COBRA administration services",
    "employee benefits administration",
    "flexible benefits administration",
    "secure employee benefits portal",
    "benefits management platform",
    "benefits portal password reset",
    "participant portal authentication help",
    "handshake authentication login",
    "secure portal authentication",
  ],
  description: `${SITE_BRAND} – Secure client login for the employee benefits portal. Access your account, manage your health, dependent care, and reimbursement benefits through YourFlex Accounts.`,
  authors: [{ name: SITE_BRAND }],
  creator: SITE_BRAND,
  publisher: SITE_BRAND,
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Flex Benefit Administrator - Client Login",
    description: `${SITE_BRAND} – Secure client login for the employee benefits portal. Access your account, manage your health, dependent care, and reimbursement benefits.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_BRAND} - Employee Benefits Portal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flex Benefit Administrator - Client Login",
    description: `${SITE_BRAND} – Secure client login for the employee benefits portal. Access your account, manage your health, dependent care, and reimbursement benefits.`,
    images: ["/og-banner.jpg"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
  category: "Business",
  alternates: {
    canonical: CANONICAL_LOGIN_URL,
    languages: {
      "en-US": CANONICAL_LOGIN_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#254650",
};

// Schema.org Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  logo: `${CANONICAL_LOGIN_URL}/fbaaa.jpg`,
  description:
    "Flex Benefit Administrator provides secure access to health, dependent care, and reimbursement benefits through the YourFlex Accounts employee benefits portal.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["en"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  description:
    "YourFlex Accounts sign in portal. Login to manage your health and dependent care benefits, view account resources, and access your YourFlex Accounts profile.",
  publisher: {
    "@type": "Organization",
    name: "YourFlex Accounts",
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: `${CANONICAL_LOGIN_URL}?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I login to my Flex Benefit Administrator account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the Flex Benefit Administrator login page and enter your UserId and Password to access your YourFlex Accounts benefits portal.",
      },
    },
    {
      "@type": "Question",
      name: "What can I do through the YourFlex Accounts portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can manage your health benefits, dependent care accounts, FSA, HSA, reimbursement accounts, and view your benefits information through the YourFlex Accounts portal.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reset my Flex Benefit Administrator password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click on the forgot password link on the login page and follow the required verification steps to reset your password.",
      },
    },
    {
      "@type": "Question",
      name: "What is Flex Benefit Administrator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flex Benefit Administrator is a leading provider of employee benefits administration services, offering secure access to manage your flexible spending accounts, health savings accounts, and reimbursement benefits.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: CANONICAL_LOGIN_URL,
    },
  ],
};

const jsonLd = [organizationSchema, websiteSchema, faqSchema, breadcrumbSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="description" content={`${SITE_BRAND} – Secure client login for the employee benefits portal. Access your account, manage your health, dependent care, and reimbursement benefits through YourFlex Accounts.`} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#254650" />
        <link rel="canonical" href={CANONICAL_LOGIN_URL} />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {jsonLd.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
        <Analytics />
      </body>
    </html>
  );
}