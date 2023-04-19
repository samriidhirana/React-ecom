import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column contact-bar-text ">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="grid grid-four-column">
            <div className="footer-about">
              <h3>React Technical</h3>
              <p></p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form>
                <input type="email" placeholder="your e-mail" />
                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow us</h3>
              <div className="footer-social--icons">
                <div className="icon-border">
                  <FaDiscord className="icons" />
                </div>
                <div className="icon-border">
                  <FaInstagram className="icons" />
                </div>
                <div className="icon-border">
                  <FaYoutube className="icons" />
                </div>
              </div>
            </div>
            <div className="footer-contact">
                <h3>Call Us</h3>
                <h3>+91-9647587364</h3>
            </div>
          </div>
        </div>

        <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column contact-bar-text">
                <p>@{new Date().getFullYear} ReactTech. All Rights Reserved</p>
                <div>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS & CONDITIONS</p>
                </div>
            </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-bar-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 4rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 40%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.5rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .icon-border:hover{
    background-color: rgb(98 84 243);
    color: ${({ theme }) => theme.colors.white};
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
