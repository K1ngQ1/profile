import Link from "next/link";

import Layout from "../components/Layout";

import Button from "react-bootstrap/Button";

export default () => (
  <Layout>
    <div>
      <h1>Contact Page</h1>
      <h3>Email:</h3>
      <p>wigginsquinten@gmail.com</p>
      <h3>LinkedIn:</h3>
      <Button>My LinkedIn</Button>
    </div>
  </Layout>
);
