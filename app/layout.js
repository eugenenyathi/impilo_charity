import "../styles/styles.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "impiloupliftingchange",
  description: "Charity organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
