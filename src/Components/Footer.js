"use client";
import styles from "./Footer.css";
// import { Lexend } from "next/font/google";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

// const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  const [twitter, setTwitter] = useState(false);
  const [face, setFace] = useState(false);
  const [insta, setInsta] = useState(false);
  const [linked, setLinked] = useState(false);
  const [pin, setPin] = useState(false);

  return (
    <div >
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: "9%", top: "-40%" }}>
          <div className="container">
            <div className="centerAlign">
              <h2 className="communityText">
                Join The Tarzan Way Community
              </h2>
              <p className="communityPara">
                Get Early Bird Deals, Extra Discounts & Priority Customer
                Support.
              </p>
            </div>
            <div className="topCorner"></div>
          </div>
        </div>
        <div>
          <div className="footer">
            <Grid container spacing={6} className="gridContainer">
              <Grid size={3} className="logoContainer">
                <div className="logoContain">
                  <img
                    className="logo"
                    src={
                      "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9sb2dvLW9ubHkuc3ZnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjIsImhlaWdodCI6MTAwLCJmaXQiOiJjb3ZlciJ9fX0="
                    }
                    width={"100%"}
                  />
                  <p className="logoHeader">thetarzanway</p>
                </div>
                <p className="logoPara">
                  The Tarzan Way is a travel based startup with the vision to
                  simplify travel and build immersive travel programs across
                  India.
                </p>
                <div className="socialContainer">
                  <div
                    className="iHOUPX"
                    style={{
                      backgroundColor: twitter ? "#1D9BF0" : "transparent",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={() => setTwitter(true)}
                    onMouseLeave={() => setTwitter(false)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="socialIcon"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </div>
                  <div
                    className="iHOUPX"
                    style={{
                      backgroundColor: face ? "#3b5998" : "transparent",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={() => setFace(true)}
                    onMouseLeave={() => setFace(false)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="socialIcon"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </div>
                  <div
                    className="iHOUPX"
                    style={{
                      backgroundColor: insta ? "#ee2a7b" : "transparent",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={() => setInsta(true)}
                    onMouseLeave={() => setInsta(false)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="socialIcon"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </div>
                  <div
                    className="iHOUPX"
                    style={{
                      backgroundColor: linked ? "#0072b1" : "transparent",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={() => setLinked(true)}
                    onMouseLeave={() => setLinked(false)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="socialIcon"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </div>
                  <div
                    className="iHOUPX"
                    style={{
                      backgroundColor: pin ? "#E60023" : "transparent",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={() => setPin(true)}
                    onMouseLeave={() => setPin(false)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 384 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="socialIcon"
                    >
                      <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                    </svg>
                  </div>
                </div>
                <p className="contact">Contact Us</p>
                <div style={{ display: "flex" }}>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fontSize: "1.15rem", marginRight: "0.5rem" }}
                  >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +91 95821 25476
                </div>
                <div style={{ display: "flex", margin: "0.25rem 0px 0px" }}>
                  <div style={{ display: "flex" }}>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ fontSize: "1.15rem", marginRight: "0.5rem" }}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <div>
                      <a href="mailto:info@thetarzanway.com">
                        info@thetarzanway.com
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
              {/* <Grid size={2}></Grid> */}
              <Grid size={9} className="wellContainer">
                <Grid container spacing={4}>
                  <Grid size={3} className="paraheader">
                    <h2 className="footHeader">Travel Destinations</h2>
                    <p className="footHeaderPara">Europe</p>
                    <p className="footHeaderPara">Asia</p>
                    <p className="footHeaderPara">North America</p>
                    <p className="footHeaderPara">South America</p>
                    <p className="footHeaderPara">
                      Australia & New Zealand
                    </p>
                    <p className="footHeaderPara">Africa</p>
                    <p className="footHeaderPara">Caribbean</p>
                  </Grid>
                  <Grid size={3} className="paraheader">
                    <h2 className="footHeader">Travel Styles</h2>
                    <p className="footHeaderPara">Personalise</p>
                    <p className="footHeaderPara">Workcation</p>
                    <p className="footHeaderPara">Volunteer</p>
                    <p className="footHeaderPara">Road Trips</p>
                    <p className="footHeaderPara">Unique</p>
                  </Grid>
                  <Grid size={3} className="paraheader">
                    <h2 className="footHeader">Company</h2>
                    <p className="footHeaderPara">Blogs</p>
                    <p className="footHeaderPara">For Corporates</p>
                    <p className="footHeaderPara">Testimonials</p>
                    <p className="footHeaderPara">About Us</p>
                    <p className="footHeaderPara">Contact Us</p>
                  </Grid>
                  <Grid size={3} className="paraheader">
                    <h2 className="footHeader">Terms & Policies</h2>
                    <p className="footHeaderPara">Terms of Service</p>
                    <p className="footHeaderPara">Privacy Policy</p>
                    <p className="footHeaderPara">COVID-19 Safetya</p>
                    <p className="footHeaderPara">Subscribe</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
              width: "80%",
              margin: "auto",
            }}
          ></div>
          <div
            className="copyRight"
            style={{
              textAlign: "center",
              backgroundColor: "#1a1a1a",
              color: "#ffffff",
            }}
          >
            Copyright © 2018 - 2024 Tarzan Way Travels Private Limited ® - All
            Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
