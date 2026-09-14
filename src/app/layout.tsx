import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Hiren Patel | Data Analyst & Business Analyst',
  description:
    'Portfolio of Hiren Patel, a Data Analyst and Business Analytics professional specializing in SQL, Python, Excel, Power BI, data visualization, data cleaning, and actionable business insights.',
  keywords: [
    'Hiren Patel',
    'Data Analyst',
    'Business Analyst',
    'SQL Analyst',
    'Power BI Dashboards',
    'Python Data Analysis',
    'Excel Analyst',
    'Business Analytics MBA',
    'Data Visualization',
    'Reporting Analyst',
    'BI Analyst'
  ],
  authors: [{ name: 'Hiren Patel' }],
  creator: 'Hiren Patel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hirenpatel-analytics.com',
    title: 'Hiren Patel | Data Analyst & Business Analyst',
    description:
      'Data Analyst and Business Analytics professional transforming raw data into clear business insights, dashboards, and recommendations.',
    siteName: 'Hiren Patel Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiren Patel | Data Analyst & Business Analyst',
    description:
      'Data Analyst and Business Analytics professional specializing in SQL, Python, Excel, and Power BI.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased bg-[#f8fafc] dark:bg-[#0b0f12] text-slate-900 dark:text-slate-100 min-h-screen selection:bg-sky-500 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
