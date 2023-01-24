import React from "react";
import Logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <section id="first">
        <div className="custom-container">
          <div id="logo">
            <img src={Logo} alt="" />
          </div>
          <div id="location">
            <h5>Ünvanlarımız</h5>
            <ul>
              <li>Ak. Həsən Əliyev 82F</li>
              <li>
                Telefon:
                <a href="tel:+994 55 465 22 52"> +994 55 465-22-52</a>
                <br />
                <a href="tel:+994 012 465-22-52">012 465-22-52</a>
              </li>
              <li>
                Email:
                <a href="mailto:officedefendo@gmail.com">
                  {" "}
                  officedefendo@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div id="navbar">
            <h5>De Fendo</h5>
            <ul>
              <li>
                <a href="">Ana səhifə</a>
              </li>
              <li>
                <a href="">Haqqımızda</a>
              </li>
              <li>
                <a href="">Komandamız</a>
              </li>
              <li>
                <a href="">Xidmətlər</a>
              </li>
            </ul>
          </div>
          <div id="useful">
            <h5>Faydalı keçidlər</h5>
            <ul>
              <li>
                <a href="https://www.e-qanun.az/">E-qanun</a>
              </li>
              <li>
                <a href="https://barassociation.az/">Vəkillər kollegiyası</a>
              </li>
              <li>
                <a href="https://supremecourt.gov.az/">
                  Azərbaycan Respublikasının Ali Məhkəməsi
                </a>
              </li>
              <li>
                <a href="https://justice.gov.az/">Ədliyyə nazirliyi</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="second">
        <hr />
        <p>
          Copyright © - {new Date().getFullYear()}. De Fendo saytı, Weblash
          komandası tərəfindən hazırlanıb.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
