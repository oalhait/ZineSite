import { Helmet } from "react-helmet";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Zine - Beta</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zine Beta Application Form</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script src="https://embed.typeform.com/next/embed.js"></script>
      </Helmet>

      <div
        className="iframe"
        data-tf-widget="t1JAMhIz"
        data-tf-opacity="100"
        data-tf-inline-on-mobile
        data-tf-iframe-props="title=Zine Beta Application Form"
        data-tf-transitive-search-params
        data-tf-auto-focus
        data-tf-medium="snippet"
      ></div>
      <footer style={{ right: "5px" }}>
        <h3>
          <a href="/#help">Need Help?</a>
        </h3>
        <p>© 2024 GLEEK LLC. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
