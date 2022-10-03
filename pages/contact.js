import Link from "next/link";

import Layout from "../components/Layout";

import Button from "react-bootstrap/Button";

const contact = () => (
    <Layout>
        <div>
            <h1>Contact Page</h1>
            <h3>Email:</h3>
            <p>wigginsquinten@gmail.com</p>
            <h3>LinkedIn:</h3>
            <a href="https://www.linkedin.com/in/quinten-wiggins-83a994229/">
                <Button>My LinkedIn</Button>
            </a>
        </div>
    </Layout>
);

export default contact