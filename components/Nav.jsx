"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import globelogo from "./assets/Globe_icon.svg";
import { useMessages } from "next-intl";
import { Link } from "../navigation";


const Nav = () => {
const messages = useMessages();

  console.log();
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
              <span className="nav__bar--para">
                {messages?.nav?.Solar_Panels}
              </span>
            </Link>
          </div>
          <div className="nav__bar--item">
            <Link href="/" className="nav__bar--link">
              <span className="nav__bar--para">
                {messages?.nav?.Solar_Panels}
              </span>
            </Link>
          </div>
          <div className="nav__bar--item">
            <Link href="/" className="nav__bar--link">
              <span className="nav__bar--para">
                {messages?.nav?.Solar_Panels}
              </span>
            </Link>
          </div>
          <div className="nav__bar--item">
            <Link href="/" className="nav__bar--link">
              <span className="nav__bar--para">{messages?.nav?.Wallbox}</span>
            </Link>
          </div>
          <div className="nav__bar--item">
            <Link href="/" className="nav__bar--link">
              <span className="nav__bar--para">{messages?.nav?.About_Us}</span>
            </Link>
          </div>
        </div>
        <div className="nav__bar--left">
          <div className="nav__bar--item">
            <Link href="/" className="nav__bar--link">
              <div className="nav__bar--contact">
                <span className="nav__bar--contact--para">
                  {messages?.nav?.Contact}
                </span>
              </div>
            </Link>
          </div>
          <div className="nav__bar--item">
            <Link href="/" locale="sv_se">
              <Image
                className="nav__bar--image"
                src={globelogo}
                width={20}
                height={20}
                alt="Translate"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
