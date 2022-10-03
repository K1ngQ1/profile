//component import
import Header from "./Header.js";

// bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = (props) => (
    <div>
        <head>
            {/* link to bootstrap css */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossorigin="anonymous"
            />
        </head>

        {/* globale styling with jsx-styling */}
        <style jsx global>
            {`
                //html components
                //css for body and basic styling of page
                body {
                    margin-top: 2vh;
                    margin-bottom: 2vh;
                    margin-right: 2vw;
                    margin-left: 2vw;
                    padding: 20px;
                    border: 1px solid #ddd;
                    // background-color: black;
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

                // class names
                .mainDiv {
                    position: relative;
                    height: 100%;
                    width: 100%;
                }

                // id's
            `}
        </style>

        {/* main div component and props for rendering */}
        <div className="mainDiv">
            <Header />
            <hr></hr>
            {props.children}
        </div>

        {/* bootstrap script imports */}
        <script
            src="https://unpkg.com/react/umd/react.production.min.js"
            crossorigin
        ></script>

        <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin
        ></script>

        <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin
        ></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
);

export default Layout;
