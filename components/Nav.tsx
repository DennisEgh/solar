"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import img from "./assets/account.svg";

const Nav = () => {
  useEffect(() => {
    console.log("test");
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
              <span className="nav__bar--para">Solarpanels</span>
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
              <Image className="nav__bar--image" src={img} width={35} height={35} alt="Account" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
