import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Provider from "../components/Provider";

export const metadata = {
  title: "Solar",
  description: "Website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="app">
            <Nav />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
