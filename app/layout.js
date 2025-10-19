export const metadata = {
  title: "Finsta",
  description: "Finsta — Share moments. Find friends.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
