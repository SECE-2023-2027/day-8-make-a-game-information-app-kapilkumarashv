import "./globals.css";
import NavWrapper from "./components/NavWrapper";

export const metadata = {
  title: "LGDB",
  description: "LGDB APP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavWrapper>{children}</NavWrapper>
      </body>
    </html>
  );
}
