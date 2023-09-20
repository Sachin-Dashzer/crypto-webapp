import React from "react";
import "./services.scss";
import { MdManageAccounts } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { BsCurrencyExchange } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Services = () => {
  return (
    <div id="services">
      <h2>
        Let's change <br />{" "}
        <span style={{ fontWeight: "bolder" }}>the world</span> together
      </h2>
      <h6>
        Embracing the power of cryptocurrency, we can reshape our world by
        fostering financial inclusion, decentralizing systems, and enabling
        innovation. Together, we'll build a more equitable and accessible
        future.
      </h6>

      <div className="servicebox">
        <div className="content">
          <h5><GiWallet /></h5>
          <h3>Secure Payment</h3>
          <p>
            We prioritize the safety of your cryptocurrency transactions. Our
            robust encryption and multi-factor authentication ensure that your
            digital assets remain protected from potential threats.
          </p>
        </div>
        <div className="content">
          <h5><BsCurrencyExchange /></h5>
          <h3>Instant Exchanges</h3>
          <p>
            Enjoy the convenience of instant cryptocurrency exchanges. Whether
            you want to swap, trade, or convert your digital currencies, our
            platform guarantees swift and seamless transactions.
          </p>
        </div>
        <div className="content">
          <h5><MdManageAccounts /></h5>
          <h3>Portfolio Management</h3>
          <p>
            Take control of your crypto investments with our intuitive portfolio
            management tools. Monitor your assets, track performance, and make
            informed decisions to maximize your returns.
          </p>
        </div>
        <div className="content">
          <h5><BiSupport /></h5>
          <h3>24/7 Customer Support</h3>
          <p>
            We're here for you around the clock. Our dedicated support team is
            ready to assist with any inquiries or issues you may encounter while
            using our platform. Your satisfaction is our priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
