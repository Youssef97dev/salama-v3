import localFont from "next/font/local";
import "./globals.css";

const garamondBold = localFont({
  src: "./fonts/AGaramondPro-Bold.woff",
  variable: "--font-garamond-bold",
  weight: "100 900",
});
const garamondRegular = localFont({
  src: "./fonts/AGaramondPro-Regular.woff",
  variable: "--font-garamond-regular",
  weight: "100 900",
});

export const metadata = {
  title: "Le Salama",
  description: "Moroccan soul food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${garamondBold.variable} ${garamondRegular.variable}`}>
        {children}
      </body>
    </html>
  );
}
