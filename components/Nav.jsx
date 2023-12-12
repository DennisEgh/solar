"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import img from "./assets/account.svg";
import { Avatar } from "@mui/material";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProvider] = useState(null);

  useEffect(() => {
    const setUpProvider = async () => {
      const response = await getProviders();

      setProvider(response);
    };
    setUpProvider();
  }, []);

  return (
    <nav>
      <div className="nav__bar--container">
        <div className="nav__bar--right">
          <div className="nav__bar--item">
            <Link href="/" className="nav__bar--link">
              <Image
                src="https://logos-download.com/wp-content/uploads/2016/03/Tesla_logo_silver.svg"
                alt="Solar Logo"
                width={100}
                height={25}
              />
            </Link>
          </div>
        </div>
        <div className="nav__bar--middle">
          <div className="nav__bar--item">
            <Link href="/" className="nav__bar--link">
              <span className="nav__bar--para">Solar Panels</span>
            </Link>
          </div>
          <div className="nav__bar--item">
            <Link href="/" className="nav__bar--link">
              <span className="nav__bar--para">Services</span>
            </Link>
          </div>
          <div className="nav__bar--item">
            <Link href="/" className="nav__bar--link">
              <span className="nav__bar--para">About Us</span>
            </Link>
          </div>
        </div>
        <div className="nav__bar--left">
          <div className="nav__bar--item">
            <Link href="/" className="nav__bar--link">
              <div className="nav__bar--contact">
                <span className="nav__bar--contact--para">Contact</span>
              </div>
            </Link>
          </div>
          {session?.user ? (
            <div className="nav__bar--item">
              <div className="nav__bar--contact">
                <span className="nav__bar--contact--para" onClick={signOut}>
                  Temp sign out
                </span>
              </div>
            </div>
          ) : null}
          <div className="nav__bar--item">
            {session?.user ? (
              <Link href="/profile" className="nav__bar--link">
                <Avatar alt="Profile" src={session?.user.image} />
              </Link>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <Image
                      className="nav__bar--image"
                      src={img}
                      width={35}
                      height={35}
                      alt="Account"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                    />
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
