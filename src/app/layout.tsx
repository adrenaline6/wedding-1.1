import type { Metadata } from "next";
import "./globals.css";
import dayjs from "dayjs";
require("dayjs/locale/vi");
dayjs.locale("vi"); // switch back to default English locale globally

export const metadata: Metadata = {
  title: "Thiệp cưới Việt Anh & Thu Trang | Save The Date 08/09/2024",
  description:
    "Việt Anh & Thu Trang - Save The Date 08/09/2024 - Hãy trân trọng những giây phút đắm say bên nhau, chia sẻ niềm vui và khắc sâu những kỷ niệm đáng nhớ.",
  openGraph: {
    type: "website",
    url: "https://wedding.adrenaline.io.vn",
    title: "Thiệp cưới Việt Anh & Thu Trang | Save The Date 08/09/2024",
    description:
      "Việt Anh & Thu Trang - Save The Date 08/09/2024 - Hãy trân trọng những giây phút đắm say bên nhau, chia sẻ niềm vui và khắc sâu những kỷ niệm đáng nhớ.",
    images:
      "https://res.cloudinary.com/dl764aic5/image/upload/v1723445667/va-wedding/31_v1ianu.jpg",
  },
};
export const runtime = "edge";
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
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://wedding.adrenaline.io.vn"
        />
        <meta property="twitter:title" content={metadata.title as string} />
        <meta
          property="twitter:description"
          content={metadata.description as string}
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dl764aic5/image/upload/v1723445667/va-wedding/31_v1ianu.jpg"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
