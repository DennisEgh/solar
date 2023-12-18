import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "../../styles/globals.css";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const metadata = {
  title: "Solteknik & El Sverige Ab",
  description: "Website",
};

const RootLayout =  ({ children }) => {
  const messages = useMessages();
  const locale = useLocale();
  const locales = ["sv_se", "en_us"];
  const cookieStore = cookies();
  const supabase = createClientComponentClient({
    cookies: () => cookieStore,
  });
 

  if (!locales.includes(locale)) notFound();

  const getUser = async() =>{

    const { data, error } = await supabase.auth.refreshSession()
    const { session, user } = data
    
        console.log( session, user)
  }
  getUser()

  


  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body>
          <main className="app">
            <Nav />

            {children}
            <Footer />
          </main>
        </body>
      </html>
    </NextIntlClientProvider>
  );
};

export default RootLayout;
