import "./globals.css";
import localFont from 'next/font/local'

export const metadata = {
  title: "Votre projet nous attend",
  description: "Besoin de mettre un projet sur orbite ? Montez la première marche en nous partageant votre idée via ce formulaire de soumission.",
};

const satoshi = localFont({
    src: [
        { path: "./fonts/Satoshi-Black.woff2", weight: "300", style: "normal" },
        { path: "./fonts/Satoshi-Light.woff2", weight: "400", style: "normal" },
        { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
        { path: "./fonts/Satoshi-Black.woff2", weight: "800", style: "normal" },
    ],
    variable: "--font-satoshi",
    display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={satoshi.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
