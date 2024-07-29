import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viet Anh & Thu Trang . 2024",
  description: "Viet Anh - Thu Trang Wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={metadata.title as string} />
        <meta name="description" content={metadata.description as string} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://va-wedding-alpha.vercel.app" />
        <meta property="og:title" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dl764aic5/image/upload/v1722166006/va-wedding/cover_pflqfp.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://va-wedding-alpha.vercel.app"
        />
        <meta property="twitter:title" content={metadata.title as string} />
        <meta
          property="twitter:description"
          content={metadata.description as string}
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dl764aic5/image/upload/v1722166006/va-wedding/cover_pflqfp.jpg"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
