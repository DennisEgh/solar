
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "../../styles/globals.css";
import Provider from "../../components/Provider";
import {useTranslations} from 'next-intl';
import { useServer } from 'next/dist/shared/lib/utils';



export const metadata = {
  title: "Solar",
  description: "Website",
};

const RootLayout = ({ children }) => {
  const t = useTranslations("Index");
  
  

  return (
    <html lang={"en"}>
      <body>
        <Provider>
          <main className="app">
            <Nav t={t('title')}/>
           
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
