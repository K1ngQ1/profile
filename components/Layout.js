//component import
import Header from "./Header.js";
import Script from "next/script.js";
import Head from "next/head.js";

// bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = (props) => (
    <>
        <Head>
            {/* link to bootstrap css */}
            {/* <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossOrigin="anonymous">
            </link> */}
        </Head>

        {/* global styling with jsx-styling */}
        <style jsx global>
            {`
                body {
                    margin-top: 2vh;
                    margin-bottom: 2vh;
                    margin-right: 2vw;
                    margin-left: 2vw;
                    padding: 20px;
                    border: 1px solid #ddd;
                }
                body::before {
                    background-color: black;
                    content: "";
                    background-image: url("/static/images/bg.jpg");
                    background-size: cover;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    opacity: 0.4;
                }

                .mainDiv {
                    position: relative;
                    height: 100%;
                    width: 100%;
                }
            `}
        </style>

        {/* main div component and props for rendering */}
        <div className="mainDiv">
            <Header />
            <hr></hr>
            {props.children}
        </div>

        <Script
            strategy="lazyOnLoad"
            src={`https://www.googletagmanager.com/gtag/js?id=UA-239768263-1`}
        />

        <Script>
            {`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'UA-239768263-1');`}
        </Script>
        {/* bootstrap script imports */}
        <Script
            src="https://unpkg.com/react/umd/react.production.min.js"
            crossOrigin
        ></Script>

        <Script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossOrigin
        ></Script>

        <Script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossOrigin
        ></Script>

        {/* <Script>var Alert = ReactBootstrap.Alert;</Script> */}
    </>
);

export default Layout;
