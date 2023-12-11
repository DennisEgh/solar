import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../styles/globals.css"
export const metadata = {
  title: "Solar",
  description: "Website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
            <Nav />
            {children}
            <Footer />
            </main>
      </body>
    </html>
  );
};

export default RootLayout;
