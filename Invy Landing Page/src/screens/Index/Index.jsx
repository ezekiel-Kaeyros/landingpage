import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Avatar } from "../../components/Avatar";
import { Building } from "../../components/Building";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardHeader } from "../../components/CardHeader";
import { DirectboxSend } from "../../components/DirectboxSend";
import { DocumentText } from "../../components/DocumentText";
import { Logo } from "../../components/Logo";
import { Navbar } from "../../components/Navbar";
import { PlayCircle } from "../../components/PlayCircle";
import { Shop } from "../../components/Shop";
import { TestimonyCard } from "../../components/TestimonyCard";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div
        className="phone"
        style={{
          height:
            screenWidth < 834
              ? "6907px"
              : screenWidth >= 834 && screenWidth < 1512
              ? "6025px"
              : screenWidth >= 1512
              ? "5603px"
              : undefined,
          overflow: screenWidth >= 1512 || screenWidth < 834 ? "hidden" : undefined,
          width:
            screenWidth < 834
              ? "425px"
              : screenWidth >= 834 && screenWidth < 1512
              ? "834px"
              : screenWidth >= 1512
              ? "1512px"
              : undefined,
        }}
      >
        {((screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834) && (
          <div
            className="text-hero"
            style={{
              height: screenWidth >= 834 && screenWidth < 1512 ? "737px" : screenWidth < 834 ? "480px" : undefined,
              width: screenWidth >= 834 && screenWidth < 1512 ? "833px" : screenWidth < 834 ? "425px" : undefined,
            }}
          >
            <div
              className="hero-text"
              style={{
                left: screenWidth < 834 ? "26px" : screenWidth >= 834 && screenWidth < 1512 ? "38px" : undefined,
                position:
                  screenWidth < 834 ? "relative" : screenWidth >= 834 && screenWidth < 1512 ? "absolute" : undefined,
                top: screenWidth < 834 ? "140px" : screenWidth >= 834 && screenWidth < 1512 ? "188px" : undefined,
                width: screenWidth < 834 ? "375px" : screenWidth >= 834 && screenWidth < 1512 ? "407px" : undefined,
              }}
            >
              <div className="text-5">
                <p
                  className="control-your-stocks"
                  style={{
                    fontFamily:
                      screenWidth < 834
                        ? "var(--header-sm-font-family)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "'Visby CF-Bold', Helvetica"
                        : undefined,
                    fontSize:
                      screenWidth < 834
                        ? "var(--header-sm-font-size)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "44px"
                        : undefined,
                    fontStyle: screenWidth < 834 ? "var(--header-sm-font-style)" : undefined,
                    fontWeight:
                      screenWidth < 834
                        ? "var(--header-sm-font-weight)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "700"
                        : undefined,
                    letterSpacing:
                      screenWidth < 834
                        ? "var(--header-sm-letter-spacing)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "0"
                        : undefined,
                    lineHeight:
                      screenWidth < 834
                        ? "var(--header-sm-line-height)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "52.8px"
                        : undefined,
                  }}
                >
                  Control your stocks <br />
                  effortlessly and accurately
                </p>
                <p className="p">with our application, control your stocks of goods wherever you are in real time</p>
              </div>
              <div
                className="btn"
                style={{
                  display:
                    screenWidth < 834 ? "flex" : screenWidth >= 834 && screenWidth < 1512 ? "inline-flex" : undefined,
                  gap:
                    screenWidth < 834
                      ? "12px"
                      : screenWidth >= 834 && screenWidth < 1512
                      ? "var(--primitives-spacing-spacing-4-4)"
                      : undefined,
                  width: screenWidth < 834 ? "291px" : undefined,
                }}
              >
                <Button
                  className="button-instance"
                  label="Watch Showcase"
                  outlined={false}
                  override={
                    <PlayCircle
                      className="play-circle-instance"
                      property1="bulk"
                      propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/play-circle@2x.png"
                    />
                  }
                  property1="left-icon"
                  size={screenWidth < 834 ? "mobile" : screenWidth >= 834 && screenWidth < 1512 ? "desktop" : undefined}
                  states="active"
                />
                <Button
                  className={`${screenWidth < 834 && "class"} ${
                    screenWidth >= 834 && screenWidth < 1512 && "button-3"
                  }`}
                  label="Contact Us"
                  outlined={false}
                  property1="default"
                  size={screenWidth < 834 ? "mobile" : screenWidth >= 834 && screenWidth < 1512 ? "desktop" : undefined}
                  states="active"
                  textClassName={`${screenWidth >= 834 && screenWidth < 1512 && "instance-node-2"}`}
                />
              </div>
            </div>
            {screenWidth >= 834 && screenWidth < 1512 && (
              <img
                className="image-2"
                alt="Image"
                src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image-8-1.png"
              />
            )}
          </div>
        )}

        {screenWidth >= 1512 && (
          <>
            <div className="text-hero-2">
              <div className="hero-text-2">
                <div className="text-6">
                  <p className="control-your-stocks-2">
                    Control your stocks <br />
                    effortlessly and accurately
                  </p>
                  <p className="text-wrapper-3">
                    with our application, control your stocks of goods wherever you are in real time
                  </p>
                </div>
                <div className="btn-2">
                  <Button
                    className="button-instance"
                    label="Watch Showcase"
                    outlined={false}
                    override={
                      <PlayCircle
                        className="play-circle-instance"
                        property1="bulk"
                        propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/play-circle@2x.png"
                      />
                    }
                    property1="left-icon"
                    size="desktop"
                    states="active"
                  />
                  <Button
                    className="button-3"
                    label="Contact Us"
                    outlined={false}
                    property1="default"
                    size="desktop"
                    states="active"
                    textClassName="instance-node-2"
                  />
                </div>
              </div>
              <img
                className="capture-d-cran"
                alt="Capture d cran"
                src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/capture-d--cran-2024-01-15-142300-copy-1.png"
              />
            </div>
            <div className="trust-us">
              <div className="text-wrapper-4">Our Trusted Partners</div>
              <div className="our-partener">
                <div className="frame-2" />
                <img
                  className="bwv-logo-tiefschwarz"
                  alt="Bwv logo tiefschwarz"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/bwv-logo-tiefschwarz.png"
                />
                <img
                  className="sechoircam"
                  alt="Sechoircam"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/sechoircam.png"
                />
                <img
                  className="vaanah"
                  alt="Vaanah"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/vaanah.png"
                />
                <img
                  className="woodtech"
                  alt="Woodtech"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/woodtech.png"
                />
                <img
                  className="ease"
                  alt="Ease"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/ease.png"
                />
                <img
                  className="img-3"
                  alt="Kahef"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/kahef.png"
                />
                <img
                  className="img-3"
                  alt="Cohedo"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/cohedo.png"
                />
              </div>
            </div>
            <div className="frame-3">
              <div className="feature">
                <div className="feature-2">
                  <div className="text-wrapper-4">Enjoy Unique Advantages</div>
                  <p className="text-wrapper-5">
                    Our solution will enable you to perform the following tasks within your company
                  </p>
                </div>
              </div>
              <div className="frame-4">
                <div className="frame-5">
                  <div className="frame-6">
                    <div className="truck">
                      <Shop
                        className="instance-node-3"
                        property1="bulk"
                        propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/shop@2x.png"
                      />
                    </div>
                    <div className="content">
                      <div className="text-wrapper-6">Real-Time Inventory Tracking</div>
                      <p className="text-wrapper-7">Keep track of your inventory levels instantly.</p>
                    </div>
                  </div>
                  <img
                    className="phone-2"
                    alt="Phone"
                    src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/phone-2-2.png"
                  />
                </div>
                <div className="frame-7">
                  <div className="frame-8">
                    <div className="container-2">
                      <div className="truck">
                        <DocumentText
                          className="instance-node-3"
                          property1="bulk"
                          propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/document-text@2x.png"
                        />
                      </div>
                      <div className="content">
                        <div className="text-wrapper-8">Invoice management</div>
                        <p className="text-wrapper-7">
                          Generate professional invoices in minutes with our intuitive invoice management feature.
                        </p>
                      </div>
                    </div>
                    <img
                      className="phone-3"
                      alt="Phone"
                      src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/phone-3-2.png"
                    />
                  </div>
                  <div className="frame-9">
                    <div className="frame-10">
                      <div className="container-3">
                        <div className="truck">
                          <Building
                            className="instance-node-3"
                            property1="bulk"
                            property2="building-4"
                            propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/building-4@2x.png"
                          />
                        </div>
                        <div className="content">
                          <div className="text-wrapper-6">Effective Stock Management</div>
                          <p className="text-wrapper-7">
                            Our app scales for businesses of all sizes, from startups to enterprises, adapting to your
                            evolving inventory needs
                          </p>
                        </div>
                      </div>
                      <img
                        className="vector"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/vector@2x.png"
                      />
                    </div>
                    <div className="container-wrapper">
                      <div className="container-4">
                        <div className="truck">
                          <DirectboxSend
                            className="instance-node-3"
                            property1="bulk"
                            propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/directbox-send@2x.png"
                          />
                        </div>
                        <div className="content">
                          <div className="text-wrapper-6">Comprehensive Reporting</div>
                          <p className="text-wrapper-7">
                            Unlock valuable insights with detailed stock reports and analytics. Track trends, sales
                            performance, and make informed decisions to optimize your inventory management.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="group"
              alt="Group"
              src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/group-5@4x.png"
            />
          </>
        )}

        <div
          className="trust-us-2"
          style={{
            gap:
              (screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834
                ? "var(--primitives-spacing-spacing-4-7)"
                : screenWidth >= 1512
                ? "var(--primitives-spacing-spacing-4-9)"
                : undefined,
            left:
              screenWidth < 834
                ? "24px"
                : screenWidth >= 1512
                ? "48px"
                : screenWidth >= 834 && screenWidth < 1512
                ? "40px"
                : undefined,
            top:
              screenWidth < 834
                ? "613px"
                : screenWidth >= 1512
                ? "2802px"
                : screenWidth >= 834 && screenWidth < 1512
                ? "737px"
                : undefined,
            width:
              screenWidth < 834
                ? "377px"
                : screenWidth >= 1512
                ? "1419px"
                : screenWidth >= 834 && screenWidth < 1512
                ? "754px"
                : undefined,
          }}
        >
          <div
            className="our-trusted-partners"
            style={{
              alignItems: screenWidth >= 1512 ? "flex-end" : undefined,
              alignSelf: (screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834 ? "stretch" : undefined,
              color:
                (screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834
                  ? "var(--tokens-colors-text-text-colors)"
                  : undefined,
              display: screenWidth >= 1512 ? "inline-flex" : undefined,
              flex: screenWidth >= 1512 ? "0 0 auto" : undefined,
              flexDirection: screenWidth >= 1512 ? "column" : undefined,
              fontFamily:
                screenWidth < 834
                  ? "var(--header-xs-font-family)"
                  : screenWidth >= 834 && screenWidth < 1512
                  ? "var(--header-sm-font-family)"
                  : undefined,
              fontSize:
                screenWidth < 834
                  ? "var(--header-xs-font-size)"
                  : screenWidth >= 834 && screenWidth < 1512
                  ? "var(--header-sm-font-size)"
                  : undefined,
              fontStyle:
                screenWidth < 834
                  ? "var(--header-xs-font-style)"
                  : screenWidth >= 834 && screenWidth < 1512
                  ? "var(--header-sm-font-style)"
                  : undefined,
              fontWeight:
                screenWidth < 834
                  ? "var(--header-xs-font-weight)"
                  : screenWidth >= 834 && screenWidth < 1512
                  ? "var(--header-sm-font-weight)"
                  : undefined,
              gap: screenWidth >= 1512 ? "var(--primitives-spacing-spacing-4-3)" : undefined,
              justifyContent: screenWidth >= 1512 ? "center" : undefined,
              letterSpacing:
                screenWidth < 834
                  ? "var(--header-xs-letter-spacing)"
                  : screenWidth >= 834 && screenWidth < 1512
                  ? "var(--header-sm-letter-spacing)"
                  : undefined,
              lineHeight:
                screenWidth < 834
                  ? "var(--header-xs-line-height)"
                  : screenWidth >= 834 && screenWidth < 1512
                  ? "var(--header-sm-line-height)"
                  : undefined,
              marginTop: (screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834 ? "-1.00px" : undefined,
              textAlign: (screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834 ? "center" : undefined,
            }}
          >
            {((screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834) && <>Our Trusted Partners</>}

            {screenWidth >= 1512 && <p className="text-wrapper-9">All Your Shops In One Place</p>}
          </div>
          <div
            className="our-partener-2"
            style={{
              alignItems:
                (screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834
                  ? "center"
                  : screenWidth >= 1512
                  ? "flex-start"
                  : undefined,
              gap:
                screenWidth < 834
                  ? "20px"
                  : screenWidth >= 834 && screenWidth < 1512
                  ? "var(--tokens-raduis-xl)"
                  : undefined,
              justifyContent: screenWidth >= 1512 ? "center" : undefined,
              overflow: (screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834 ? "hidden" : undefined,
              overflowX: (screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834 ? "scroll" : undefined,
            }}
          >
            {((screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834) && (
              <div
                className="frame-11"
                style={{
                  height: screenWidth < 834 ? "37px" : screenWidth >= 834 && screenWidth < 1512 ? "45px" : undefined,
                  width:
                    screenWidth < 834 ? "85.38px" : screenWidth >= 834 && screenWidth < 1512 ? "103.85px" : undefined,
                }}
              />
            )}

            {screenWidth >= 1512 && (
              <div className="div-wrapper">
                <p className="text-wrapper-10">
                  You can manage your stores without stress regardless of where they are located,no matter the country
                  or town.
                </p>
              </div>
            )}

            <img
              className="bwv-logo-tiefschwarz-2"
              style={{
                height:
                  screenWidth < 834
                    ? "37.76px"
                    : screenWidth >= 834 && screenWidth < 1512
                    ? "45.31px"
                    : screenWidth >= 1512
                    ? "504px"
                    : undefined,
                width:
                  screenWidth < 834
                    ? "98.17px"
                    : screenWidth >= 834 && screenWidth < 1512
                    ? "117.8px"
                    : screenWidth >= 1512
                    ? "680.2px"
                    : undefined,
              }}
              alt="Bwv logo tiefschwarz"
              src={
                (screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834
                  ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/bwv-logo-tiefschwarz.png"
                  : screenWidth >= 1512
                  ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/image-11.png"
                  : undefined
              }
            />
            {screenWidth >= 1512 && (
              <p className="text-wrapper-11">
                You can manage all of your points of sales, register them in the app to monitor every transaction that
                occurs within your system.
              </p>
            )}

            {((screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834) && (
              <>
                <img
                  className="sechoircam-2"
                  style={{
                    height:
                      screenWidth < 834 ? "37.76px" : screenWidth >= 834 && screenWidth < 1512 ? "45.31px" : undefined,
                    width:
                      screenWidth < 834 ? "107.33px" : screenWidth >= 834 && screenWidth < 1512 ? "128.8px" : undefined,
                  }}
                  alt="Sechoircam"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/sechoircam.png"
                />
                <img
                  className="vaanah-2"
                  style={{
                    height:
                      screenWidth < 834 ? "37.76px" : screenWidth >= 834 && screenWidth < 1512 ? "45.31px" : undefined,
                    width:
                      screenWidth < 834 ? "133.9px" : screenWidth >= 834 && screenWidth < 1512 ? "160.68px" : undefined,
                  }}
                  alt="Vaanah"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/vaanah.png"
                />
                <img
                  className="woodtech-2"
                  style={{
                    height:
                      screenWidth < 834 ? "37.76px" : screenWidth >= 834 && screenWidth < 1512 ? "45.31px" : undefined,
                    width:
                      screenWidth < 834 ? "86.48px" : screenWidth >= 834 && screenWidth < 1512 ? "103.77px" : undefined,
                  }}
                  alt="Woodtech"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/woodtech.png"
                />
                <img
                  className="ease-2"
                  style={{
                    height:
                      screenWidth < 834 ? "37.76px" : screenWidth >= 834 && screenWidth < 1512 ? "45.31px" : undefined,
                    width:
                      screenWidth < 834 ? "76.88px" : screenWidth >= 834 && screenWidth < 1512 ? "92.26px" : undefined,
                  }}
                  alt="Ease"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/ease.png"
                />
                <img
                  className="kahef"
                  style={{
                    height:
                      screenWidth < 834 ? "37.76px" : screenWidth >= 834 && screenWidth < 1512 ? "45.31px" : undefined,
                    width:
                      screenWidth < 834 ? "40.09px" : screenWidth >= 834 && screenWidth < 1512 ? "48.11px" : undefined,
                  }}
                  alt="Kahef"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/kahef.png"
                />
                <img
                  className="cohedo"
                  style={{
                    height:
                      screenWidth < 834 ? "37.76px" : screenWidth >= 834 && screenWidth < 1512 ? "45.31px" : undefined,
                    width:
                      screenWidth < 834 ? "40.09px" : screenWidth >= 834 && screenWidth < 1512 ? "48.11px" : undefined,
                  }}
                  alt="Cohedo"
                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/cohedo.png"
                />
              </>
            )}
          </div>
        </div>
        {screenWidth >= 1512 && (
          <div className="frame-12">
            <img
              className="frame-13"
              alt="Frame"
              src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/frame-2608173@4x.png"
            />
            <div className="frame-14">
              <p className="text-wrapper-12">A Powerful Decision Making Tool</p>
              <div className="frame-15">
                <Card
                  className="card-instance"
                  content="Monitor your shop&#39;s sales performance in real-time with detailed metrics tracking. Analyze sales trends, identify top-selling products"
                  value="01"
                />
                <Card
                  className="card-2"
                  content="Gain insights into your inventory&#39;s performance to optimize stock levels and minimize costs."
                  value="02"
                />
                <Card
                  className="card-3"
                  content="Understand your customers&#39; behavior and preferences by tracking customer purchase patterns"
                  value="03"
                />
                <Card
                  className="card-4"
                  content="Monitor key performance indicators, and identify areas for improvement to drive growth and profitability."
                  value="04"
                />
              </div>
            </div>
          </div>
        )}

        <div
          className="frame-16"
          style={{
            gap:
              (screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834
                ? "40px"
                : screenWidth >= 1512
                ? "var(--primitives-spacing-spacing-4-2)"
                : undefined,
            left:
              screenWidth < 834
                ? "24px"
                : screenWidth >= 834 && screenWidth < 1512
                ? "44px"
                : screenWidth >= 1512
                ? "47px"
                : undefined,
            top:
              screenWidth < 834
                ? "794px"
                : screenWidth >= 834 && screenWidth < 1512
                ? "939px"
                : screenWidth >= 1512
                ? "4286px"
                : undefined,
            width:
              screenWidth < 834
                ? "377px"
                : screenWidth >= 834 && screenWidth < 1512
                ? "747px"
                : screenWidth >= 1512
                ? "1420px"
                : undefined,
          }}
        >
          {((screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834) && (
            <>
              <div
                className="feature-wrapper"
                style={{
                  alignSelf: screenWidth < 834 ? "stretch" : undefined,
                  marginLeft: screenWidth >= 834 && screenWidth < 1512 ? "-4.00px" : undefined,
                  marginRight: screenWidth >= 834 && screenWidth < 1512 ? "-4.00px" : undefined,
                  width: screenWidth < 834 ? "100%" : screenWidth >= 834 && screenWidth < 1512 ? "755px" : undefined,
                }}
              >
                <div className="feature-2">
                  <div className="text-wrapper-13">Enjoy Unique Advantages</div>
                  <p
                    className="text-wrapper-14"
                    style={{
                      alignSelf: screenWidth < 834 ? "stretch" : undefined,
                      width: screenWidth >= 834 && screenWidth < 1512 ? "436px" : undefined,
                    }}
                  >
                    Our solution will enable you to perform the following tasks within your company
                  </p>
                </div>
              </div>
              <div
                className="frame-17"
                style={{
                  alignItems: screenWidth < 834 ? "flex-start" : undefined,
                  alignSelf: screenWidth < 834 ? "stretch" : undefined,
                  display: screenWidth < 834 ? "flex" : undefined,
                  flex: screenWidth < 834 ? "0 0 auto" : undefined,
                  flexDirection: screenWidth < 834 ? "column" : undefined,
                  gap: screenWidth < 834 ? "10px" : undefined,
                  height: screenWidth >= 834 && screenWidth < 1512 ? "691px" : undefined,
                  marginLeft: screenWidth >= 834 && screenWidth < 1512 ? "-3.50px" : undefined,
                  marginRight: screenWidth >= 834 && screenWidth < 1512 ? "-3.50px" : undefined,
                  width: screenWidth < 834 ? "100%" : screenWidth >= 834 && screenWidth < 1512 ? "754px" : undefined,
                }}
              >
                {screenWidth < 834 && (
                  <>
                    <div className="frame-18">
                      <div className="frame-19">
                        <div className="truck-2">
                          <Shop
                            className="instance-node-4"
                            property1="bulk"
                            propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/shop-1@2x.png"
                          />
                        </div>
                        <div className="content">
                          <div className="text-wrapper-15">Real-Time Inventory Tracking</div>
                          <p className="text-wrapper-16">Keep track of your inventory levels instantly.</p>
                        </div>
                      </div>
                      <img
                        className="image-3"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image-6-1.png"
                      />
                    </div>
                    <div className="frame-20">
                      <div className="container-5">
                        <div className="truck-2">
                          <DocumentText
                            className="instance-node-4"
                            property1="bulk"
                            propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/document-text-1@2x.png"
                          />
                        </div>
                        <div className="content">
                          <div className="text-wrapper-17">Invoice management</div>
                          <p className="text-wrapper-16">
                            Generate professional invoices in minutes with our intuitive invoice management feature.
                          </p>
                        </div>
                      </div>
                      <img
                        className="image-4"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image-7-1.png"
                      />
                    </div>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group">
                        <div className="container-6">
                          <div className="truck-2">
                            <Building
                              className="instance-node-4"
                              property1="bulk"
                              property2="building-4"
                              propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/building-4-1@2x.png"
                            />
                          </div>
                          <div className="content">
                            <div className="text-wrapper-18">Effective Stock Management</div>
                            <p className="text-wrapper-16">
                              Our app scales for businesses of all sizes, from startups to enterprises, adapting to your
                              evolving inventory needs
                            </p>
                          </div>
                        </div>
                        <img
                          className="vector-2"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/vector-1@2x.png"
                        />
                      </div>
                    </div>
                    <div className="overlap-wrapper">
                      <div className="overlap">
                        <div className="container-7">
                          <div className="truck-2">
                            <DirectboxSend
                              className="instance-node-4"
                              property1="bulk"
                              propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/directbox-send-1@2x.png"
                            />
                          </div>
                          <div className="content">
                            <div className="text-wrapper-18">Comprehensive Reporting</div>
                            <p className="text-wrapper-16">
                              Unlock valuable insights with detailed stock reports and analytics. Track trends, sales
                              performance, and make informed decisions to optimize your inventory management.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {screenWidth >= 834 && screenWidth < 1512 && (
                  <>
                    <div className="frame-21">
                      <div className="frame-22">
                        <div className="truck-2">
                          <Shop
                            className="instance-node-4"
                            property1="bulk"
                            propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/shop-2@2x.png"
                          />
                        </div>
                        <div className="content">
                          <div className="text-wrapper-15">Real-Time Inventory Tracking</div>
                          <p className="text-wrapper-16">Keep track of your inventory levels instantly.</p>
                        </div>
                      </div>
                      <img
                        className="image-5"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image-10-1.png"
                      />
                    </div>
                    <div className="frame-23">
                      <div className="frame-24">
                        <div className="container-8">
                          <div className="document-text-wrapper">
                            <DocumentText
                              className="instance-node-4"
                              property1="bulk"
                              propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/document-text-2@2x.png"
                            />
                          </div>
                          <div className="content-2">
                            <div className="text-wrapper-17">Invoice management</div>
                            <p className="text-wrapper-16">
                              Generate professional invoices in minutes with our intuitive invoice management feature.
                            </p>
                          </div>
                        </div>
                        <img
                          className="image-6"
                          alt="Image"
                          src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image-9-1.png"
                        />
                      </div>
                      <div className="frame-25">
                        <div className="frame-26">
                          <div className="container-9">
                            <div className="truck-2">
                              <Building
                                className="instance-node-4"
                                property1="bulk"
                                property2="building-4"
                                propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/building-4-2@2x.png"
                              />
                            </div>
                            <div className="content">
                              <div className="text-wrapper-18">Effective Stock Management</div>
                              <p className="text-wrapper-16">
                                Our app scales for businesses of all sizes, from startups to enterprises, adapting to
                                your evolving inventory needs
                              </p>
                            </div>
                          </div>
                          <img
                            className="vector-3"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-2@2x.png"
                          />
                        </div>
                        <div className="frame-27">
                          <div className="container-10">
                            <div className="truck-2">
                              <DirectboxSend
                                className="instance-node-4"
                                property1="bulk"
                                propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/directbox-send-2@2x.png"
                              />
                            </div>
                            <div className="content">
                              <div className="text-wrapper-18">Comprehensive Reporting</div>
                              <p className="text-wrapper-16">
                                Unlock valuable insights with detailed stock reports and analytics. Track trends, sales
                                performance, and make informed decisions to optimize your inventory management.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}

          {screenWidth >= 1512 && <p className="text-wrapper-4">What Our Clients Say About Us</p>}
        </div>
        {screenWidth >= 1512 && (
          <>
            <div className="frame-wrapper">
              <div className="frame-28">
                <TestimonyCard
                  className="testimony-card-instance"
                  image1="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image@2x.png"
                  img3="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/-@2x.png"
                  nameOfTestimoner="Mme Christine Mbong"
                  property1="default"
                  role="PDG of Oschuna"
                  testimony="“I have been extremely happy with the results of working with Invy, and I would highly recommend them to anyone who is looking for a high-quality tool.”"
                />
                <TestimonyCard
                  className="testimony-card-instance"
                  image1="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image-6@2x.png"
                  img2="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/--5@2x.png"
                  property1="variant-2"
                />
                <TestimonyCard
                  className="testimony-card-instance"
                  image1="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image-7@2x.png"
                  img3="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/--6@2x.png"
                  nameOfTestimoner="Mme Christine Mbong"
                  property1="default"
                  role="PDG of Oschuna"
                  testimony="“I have been extremely happy with the results of working with Invy, and I would highly recommend them to anyone who is looking for a high-quality tool.”"
                />
                <TestimonyCard
                  className="testimony-card-instance"
                  image1="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image-8@2x.png"
                  img2="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/--7@2x.png"
                  property1="variant-2"
                />
              </div>
            </div>
            <div className="frame-29">
              <div className="overlap-group-2">
                <div className="frame-30">
                  <div className="feature-3">
                    <div className="feature-2">
                      <div className="text-wrapper-4">Get Started Today !</div>
                      <p className="text-wrapper-19">
                        Ready to take control of your inventory management ? Sign up for a free trial of Invy today.
                        Streamline your operations, and unlock the full potential of your business.
                      </p>
                    </div>
                  </div>
                  <div className="input-feild">
                    <div className="text-7">Enter your email address</div>
                    <img
                      className="img-4"
                      alt="Button"
                      src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/button@2x.png"
                    />
                  </div>
                </div>
                <Avatar
                  avatar2="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-11@2x.png"
                  avatarClassName="avatar-3"
                  className="avatar-instance"
                  online={false}
                  outline={false}
                  sizes="lg"
                />
                <Avatar
                  avatar2="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-12@2x.png"
                  className="avatar-4"
                  online={false}
                  outline={false}
                  sizes="lg"
                />
                <Avatar
                  className="avatar-5"
                  img="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-13@2x.png"
                  online={false}
                  outline={false}
                  sizes="sm"
                />
                <Avatar
                  avatar1="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-14@2x.png"
                  avatarClassName="avatar-3"
                  className="avatar-6"
                  online={false}
                  outline={false}
                  sizes="xs"
                />
                <Avatar
                  avatar="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-15@2x.png"
                  className="avatar-7"
                  online={false}
                  outline={false}
                  sizes="md"
                />
                <Avatar
                  avatar1="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-16@2x.png"
                  avatarClassName="avatar-3"
                  className="avatar-8"
                  online={false}
                  outline={false}
                  sizes="xs"
                />
              </div>
            </div>
            <footer className="footer">
              <div className="container-11">
                <Logo
                  className="logo-2"
                  logo="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/logo-@2x.png"
                />
                <div className="footer-link">
                  <div className="link">Integration</div>
                  <div className="link">Pricing</div>
                </div>
              </div>
              <p className="text-8">
                <span className="span">© 2024 Airo. Design &amp; Developed by </span>
                <span className="text-wrapper-20">Kaeyros Analytics </span>
                <span className="span"> All rights reserved.</span>
              </p>
            </footer>
            <Navbar
              buttonClassName="navbar-2"
              className="navbar-instance"
              iconClassName="navbar-3"
              property1="default"
              textClassName="instance-node-2"
            />
          </>
        )}

        {((screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834) && (
          <>
            <div
              className="frame-31"
              style={{
                left: screenWidth < 834 ? "24px" : screenWidth >= 834 && screenWidth < 1512 ? "40px" : undefined,
                top: screenWidth < 834 ? "3548px" : screenWidth >= 834 && screenWidth < 1512 ? "2624px" : undefined,
                width: screenWidth < 834 ? "377px" : screenWidth >= 834 && screenWidth < 1512 ? "754px" : undefined,
              }}
            >
              <p
                className="text-wrapper-21"
                style={{
                  alignSelf: screenWidth < 834 ? "stretch" : undefined,
                  fontFamily:
                    screenWidth < 834
                      ? "var(--header-xs-font-family)"
                      : screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth < 834
                      ? "var(--header-xs-font-size)"
                      : screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth < 834
                      ? "var(--header-xs-font-style)"
                      : screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth < 834
                      ? "var(--header-xs-font-weight)"
                      : screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth < 834
                      ? "var(--header-xs-letter-spacing)"
                      : screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth < 834
                      ? "var(--header-xs-line-height)"
                      : screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-line-height)"
                      : undefined,
                  width: screenWidth >= 834 && screenWidth < 1512 ? "494px" : undefined,
                }}
              >
                All Your Shops In One Place
              </p>
              <div
                className="frame-32"
                style={{
                  alignItems:
                    screenWidth < 834 ? "center" : screenWidth >= 834 && screenWidth < 1512 ? "flex-start" : undefined,
                  alignSelf: screenWidth >= 834 && screenWidth < 1512 ? "stretch" : undefined,
                  flexDirection: screenWidth < 834 ? "column" : undefined,
                  gap: screenWidth < 834 ? "20px" : undefined,
                  justifyContent: screenWidth >= 834 && screenWidth < 1512 ? "center" : undefined,
                  marginLeft: screenWidth < 834 ? "-0.50px" : undefined,
                  marginRight: screenWidth < 834 ? "-0.50px" : undefined,
                  width: screenWidth < 834 ? "378px" : screenWidth >= 834 && screenWidth < 1512 ? "100%" : undefined,
                }}
              >
                <div
                  className="you-can-manage-all"
                  style={{
                    alignItems: screenWidth >= 834 && screenWidth < 1512 ? "flex-end" : undefined,
                    color: screenWidth < 834 ? "var(--tokens-colors-text-subtitile-text)" : undefined,
                    display: screenWidth >= 834 && screenWidth < 1512 ? "flex" : undefined,
                    flex: screenWidth >= 834 && screenWidth < 1512 ? "1" : undefined,
                    flexGrow: screenWidth >= 834 && screenWidth < 1512 ? "1" : undefined,
                    fontFamily: screenWidth < 834 ? "var(--BTM-font-family)" : undefined,
                    fontSize: screenWidth < 834 ? "var(--BTM-font-size)" : undefined,
                    fontStyle: screenWidth < 834 ? "var(--BTM-font-style)" : undefined,
                    fontWeight: screenWidth < 834 ? "var(--BTM-font-weight)" : undefined,
                    gap: screenWidth >= 834 && screenWidth < 1512 ? "10px" : undefined,
                    justifyContent: screenWidth >= 834 && screenWidth < 1512 ? "center" : undefined,
                    letterSpacing: screenWidth < 834 ? "var(--BTM-letter-spacing)" : undefined,
                    lineHeight: screenWidth < 834 ? "var(--BTM-line-height)" : undefined,
                    marginTop: screenWidth < 834 ? "-1.00px" : undefined,
                    padding: screenWidth >= 834 && screenWidth < 1512 ? "19px 0px" : undefined,
                  }}
                >
                  {screenWidth < 834 && (
                    <p className="text-wrapper-33">
                      You can manage all of your points of sales, register them in the app to monitor every transaction
                      that occurs within your system.
                    </p>
                  )}

                  {screenWidth >= 834 && screenWidth < 1512 && (
                    <p className="text-wrapper-22">
                      You can manage your stores without stress regardless of where they are located,no matter the
                      country or town.
                    </p>
                  )}
                </div>
                <img
                  className="image-7"
                  style={{
                    objectFit: screenWidth >= 834 && screenWidth < 1512 ? "cover" : undefined,
                    width:
                      screenWidth < 834
                        ? "334.22px"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "431.88px"
                        : undefined,
                  }}
                  alt="Image"
                  src={
                    screenWidth < 834
                      ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/image-11-1@2x.png"
                      : screenWidth >= 834 && screenWidth < 1512
                      ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/image-11.png"
                      : undefined
                  }
                />
                <div
                  className="frame-33"
                  style={{
                    alignItems: screenWidth < 834 ? "flex-end" : undefined,
                    alignSelf: screenWidth < 834 ? "stretch" : undefined,
                    color:
                      screenWidth >= 834 && screenWidth < 1512 ? "var(--tokens-colors-text-subtitile-text)" : undefined,
                    display: screenWidth < 834 ? "flex" : undefined,
                    flex: screenWidth < 834 ? "0 0 auto" : screenWidth >= 834 && screenWidth < 1512 ? "1" : undefined,
                    fontFamily: screenWidth >= 834 && screenWidth < 1512 ? "var(--BTM-font-family)" : undefined,
                    fontSize: screenWidth >= 834 && screenWidth < 1512 ? "var(--BTM-font-size)" : undefined,
                    fontStyle: screenWidth >= 834 && screenWidth < 1512 ? "var(--BTM-font-style)" : undefined,
                    fontWeight: screenWidth >= 834 && screenWidth < 1512 ? "var(--BTM-font-weight)" : undefined,
                    gap: screenWidth < 834 ? "10px" : undefined,
                    justifyContent: screenWidth < 834 ? "center" : undefined,
                    letterSpacing: screenWidth >= 834 && screenWidth < 1512 ? "var(--BTM-letter-spacing)" : undefined,
                    lineHeight: screenWidth >= 834 && screenWidth < 1512 ? "var(--BTM-line-height)" : undefined,
                    marginTop: screenWidth >= 834 && screenWidth < 1512 ? "-1.00px" : undefined,
                    width: screenWidth < 834 ? "100%" : undefined,
                  }}
                >
                  {screenWidth < 834 && (
                    <p className="text-wrapper-23">
                      You can manage your stores without stress regardless of where they are located,no matter the
                      country or town.
                    </p>
                  )}

                  {screenWidth >= 834 && screenWidth < 1512 && (
                    <p className="text-wrapper-33">
                      You can manage all of your points of sales, register them in the app to monitor every transaction
                      that occurs within your system.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div
              className="frame-34"
              style={{
                height: screenWidth < 834 ? "1422px" : screenWidth >= 834 && screenWidth < 1512 ? "987px" : undefined,
                left: screenWidth < 834 ? "24px" : screenWidth >= 834 && screenWidth < 1512 ? "43px" : undefined,
                top: screenWidth < 834 ? "4243px" : screenWidth >= 834 && screenWidth < 1512 ? "3186px" : undefined,
                width: screenWidth < 834 ? "378px" : screenWidth >= 834 && screenWidth < 1512 ? "748px" : undefined,
              }}
            >
              <div className="frame-35">
                <div
                  className="overlap-group-3"
                  style={{
                    width: screenWidth < 834 ? "375px" : screenWidth >= 834 && screenWidth < 1512 ? "728px" : undefined,
                  }}
                >
                  {screenWidth >= 834 && screenWidth < 1512 && (
                    <div className="group-2">
                      <div className="overlap-2">
                        <div className="group-wrapper">
                          <div className="group-3">
                            <div className="group-4">
                              <div className="overlap-3">
                                <div className="group-5">
                                  <img
                                    className="vector-4"
                                    alt="Vector"
                                    src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                                  />
                                  <div className="overlap-4">
                                    <img
                                      className="vector-5"
                                      alt="Vector"
                                      src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-10@2x.png"
                                    />
                                    <div className="group-6">
                                      <div className="overlap-group-4">
                                        <img
                                          className="vector-6"
                                          alt="Vector"
                                          src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-12@2x.png"
                                        />
                                        <img
                                          className="vector-6"
                                          alt="Vector"
                                          src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-13@2x.png"
                                        />
                                        <img
                                          className="image-8"
                                          alt="Image"
                                          src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/image-5-1@2x.png"
                                        />
                                      </div>
                                    </div>
                                    <img
                                      className="vector-7"
                                      alt="Vector"
                                      src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-11@2x.png"
                                    />
                                  </div>
                                </div>
                                <img
                                  className="vector-8"
                                  alt="Vector"
                                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-3@2x.png"
                                />
                                <img
                                  className="vector-9"
                                  alt="Vector"
                                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-5@2x.png"
                                />
                                <img
                                  className="vector-10"
                                  alt="Vector"
                                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-7@2x.png"
                                />
                                <img
                                  className="vector-11"
                                  alt="Vector"
                                  src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-8@2x.png"
                                />
                              </div>
                              <img
                                className="vector-12"
                                alt="Vector"
                                src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                              />
                              <img
                                className="vector-13"
                                alt="Vector"
                                src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          className="group-7"
                          alt="Group"
                          src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/group@2x.png"
                        />
                      </div>
                    </div>
                  )}

                  <img
                    className="vector-14"
                    style={{
                      height:
                        screenWidth >= 834 && screenWidth < 1512 ? "384px" : screenWidth < 834 ? "361px" : undefined,
                      left: screenWidth >= 834 && screenWidth < 1512 ? "0" : screenWidth < 834 ? "61px" : undefined,
                      top: screenWidth >= 834 && screenWidth < 1512 ? "0" : screenWidth < 834 ? "11px" : undefined,
                      width:
                        screenWidth >= 834 && screenWidth < 1512 ? "728px" : screenWidth < 834 ? "251px" : undefined,
                    }}
                    alt="Vector"
                    src={
                      screenWidth >= 834 && screenWidth < 1512
                        ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-19-1.png"
                        : screenWidth < 834
                        ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/group-6@4x.png"
                        : undefined
                    }
                  />
                  {screenWidth < 834 && (
                    <img
                      className="vector-15"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/vector-19.png"
                    />
                  )}
                </div>
              </div>
              <div
                className="frame-36"
                style={{
                  alignItems:
                    screenWidth < 834 ? "center" : screenWidth >= 834 && screenWidth < 1512 ? "flex-start" : undefined,
                  marginBottom: screenWidth < 834 ? "-31.00px" : undefined,
                  padding:
                    screenWidth < 834 ? "40px 20px" : screenWidth >= 834 && screenWidth < 1512 ? "40px" : undefined,
                }}
              >
                <p
                  className="text-wrapper-24"
                  style={{
                    alignSelf: screenWidth < 834 ? "stretch" : undefined,
                    fontFamily:
                      screenWidth < 834
                        ? "var(--header-xs-font-family)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "var(--header-sm-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 834
                        ? "var(--header-xs-font-size)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "var(--header-sm-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 834
                        ? "var(--header-xs-font-style)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "var(--header-sm-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 834
                        ? "var(--header-xs-font-weight)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "var(--header-sm-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 834
                        ? "var(--header-xs-letter-spacing)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "var(--header-sm-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 834
                        ? "var(--header-xs-line-height)"
                        : screenWidth >= 834 && screenWidth < 1512
                        ? "var(--header-sm-line-height)"
                        : undefined,
                    width: screenWidth >= 834 && screenWidth < 1512 ? "558px" : undefined,
                  }}
                >
                  A Powerful Decision Making Tool
                </p>
                <div
                  className="frame-37"
                  style={{
                    height:
                      screenWidth < 834 ? "860px" : screenWidth >= 834 && screenWidth < 1512 ? "420px" : undefined,
                  }}
                >
                  <Card
                    className={`${screenWidth < 834 && "class-2"} ${
                      screenWidth >= 834 && screenWidth < 1512 && "class-3"
                    }`}
                    content="Monitor your shop&#39;s sales performance in real-time with detailed metrics tracking. Analyze sales trends, identify top-selling products"
                    headingClassName="card-6"
                    numberClassName="card-5"
                    value="01"
                  />
                  <Card
                    className={`${screenWidth < 834 && "class-4"} ${
                      screenWidth >= 834 && screenWidth < 1512 && "class-5"
                    }`}
                    content="Gain insights into your inventory&#39;s performance to optimize stock levels and minimize costs."
                    value="02"
                  />
                  <Card
                    className={`${screenWidth < 834 && "class-6"} ${
                      screenWidth >= 834 && screenWidth < 1512 && "class-7"
                    }`}
                    content="Understand your customers&#39; behavior and preferences by tracking customer purchase patterns"
                    value="03"
                  />
                  <Card
                    className={`${screenWidth < 834 && "class-8"} ${
                      screenWidth >= 834 && screenWidth < 1512 && "class-9"
                    }`}
                    content="Monitor key performance indicators, and identify areas for improvement to drive growth and profitability."
                    value="04"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {screenWidth >= 834 && screenWidth < 1512 && (
          <div className="frame-38">
            <div className="overlap-5">
              <div className="overlap-group-5">
                <div className="frame-39">
                  <div className="feature-3">
                    <div className="feature-2">
                      <div className="text-wrapper-4">Get Started Today !</div>
                      <p className="text-wrapper-25">
                        Ready to take control of your inventory management ? Sign up for a free trial of Invy today.
                        Streamline your operations, and unlock the full potential of your business.
                      </p>
                    </div>
                  </div>
                  <div className="input-feild-2">
                    <div className="text-9">Enter your email address</div>
                    <img
                      className="img-4"
                      alt="Button"
                      src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/button-1@2x.png"
                    />
                  </div>
                </div>
                <Avatar
                  avatar1="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-14@2x.png"
                  avatarClassName="avatar-3"
                  className="avatar-9"
                  online={false}
                  outline={false}
                  sizes="xs"
                />
              </div>
              <Avatar
                avatar="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-19@2x.png"
                avatarClassName="avatar-3"
                className="avatar-10"
                online={false}
                outline={false}
                sizes="md"
              />
              <Avatar
                className="avatar-11"
                img="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-20@2x.png"
                online={false}
                outline={false}
                sizes="sm"
              />
              <Avatar
                className="avatar-12"
                img="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-13@2x.png"
                online={false}
                outline={false}
                sizes="sm"
              />
              <Avatar
                avatar1="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-16@2x.png"
                avatarClassName="avatar-3"
                className="avatar-13"
                online={false}
                outline={false}
                sizes="xs"
              />
              <Avatar
                avatar="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-15@2x.png"
                className="avatar-14"
                online={false}
                outline={false}
                sizes="md"
              />
            </div>
          </div>
        )}

        {((screenWidth >= 834 && screenWidth < 1512) || screenWidth < 834) && (
          <>
            <div
              className="feature-4"
              style={{
                left: screenWidth >= 834 && screenWidth < 1512 ? "40px" : screenWidth < 834 ? "24px" : undefined,
                top: screenWidth >= 834 && screenWidth < 1512 ? "4413px" : screenWidth < 834 ? "5861px" : undefined,
                width: screenWidth >= 834 && screenWidth < 1512 ? "754px" : screenWidth < 834 ? "378px" : undefined,
              }}
            >
              <p
                className="text-wrapper-26"
                style={{
                  fontFamily:
                    screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-font-family)"
                      : screenWidth < 834
                      ? "var(--header-xs-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-font-size)"
                      : screenWidth < 834
                      ? "var(--header-xs-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-font-style)"
                      : screenWidth < 834
                      ? "var(--header-xs-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-font-weight)"
                      : screenWidth < 834
                      ? "var(--header-xs-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-letter-spacing)"
                      : screenWidth < 834
                      ? "var(--header-xs-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth >= 834 && screenWidth < 1512
                      ? "var(--header-sm-line-height)"
                      : screenWidth < 834
                      ? "var(--header-xs-line-height)"
                      : undefined,
                }}
              >
                What Our Clients Say About Us
              </p>
            </div>
            <div
              className="frame-40"
              style={{
                left: screenWidth >= 834 && screenWidth < 1512 ? "40px" : screenWidth < 834 ? "24px" : undefined,
                top: screenWidth >= 834 && screenWidth < 1512 ? "4496px" : screenWidth < 834 ? "5944px" : undefined,
                width: screenWidth >= 834 && screenWidth < 1512 ? "754px" : screenWidth < 834 ? "378px" : undefined,
              }}
            >
              <TestimonyCard
                className="testimony-card-instance"
                containerClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-13"}`}
                img={
                  screenWidth < 834
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                imgClassName={`${screenWidth < 834 && "class-12"}`}
                nameOfTestimoner="Mme Christine Mbong"
                property1={
                  screenWidth >= 834 && screenWidth < 1512 ? "default" : screenWidth < 834 ? "mobile" : undefined
                }
                role="PDG of Oschuna"
                testimony="“I have been extremely happy with the results of working with Invy, and I would highly recommend them to anyone who is looking for a high-quality tool.”"
                textClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-11"}`}
                tittleClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-10"}`}
              />
              <TestimonyCard
                className="testimony-card-instance"
                containerClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-13"}`}
                image={
                  screenWidth < 834
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                image1={
                  screenWidth >= 834 && screenWidth < 1512
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/image-15@2x.png"
                    : undefined
                }
                imageClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-16"} ${
                  screenWidth < 834 && "class-17"
                }`}
                img1={
                  screenWidth < 834
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                img2={
                  screenWidth >= 834 && screenWidth < 1512
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                imgClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-14"} ${
                  screenWidth < 834 && "class-15"
                }`}
                nameOfTestimoner={screenWidth < 834 ? "Mme Christine Mbong" : undefined}
                property1={
                  screenWidth >= 834 && screenWidth < 1512 ? "variant-2" : screenWidth < 834 ? "light" : undefined
                }
                role={screenWidth < 834 ? "PDG of Oschuna" : undefined}
                testimony={
                  screenWidth < 834
                    ? "“I have been extremely happy with the results of working with Invy, and I would highly recommend them to anyone who is looking for a high-quality tool.”"
                    : undefined
                }
                textClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-11"}`}
                tittleClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-10"}`}
              />
              <TestimonyCard
                className="testimony-card-instance"
                containerClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-13"}`}
                image={
                  screenWidth < 834
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                image1={
                  screenWidth >= 834 && screenWidth < 1512
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                imageClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-20"} ${
                  screenWidth < 834 && "class-21"
                }`}
                img={
                  screenWidth < 834
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                img3={
                  screenWidth >= 834 && screenWidth < 1512
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                imgClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-18"} ${
                  screenWidth < 834 && "class-19"
                }`}
                nameOfTestimoner="Mme Christine Mbong"
                property1={
                  screenWidth >= 834 && screenWidth < 1512 ? "default" : screenWidth < 834 ? "mobile" : undefined
                }
                role="PDG of Oschuna"
                testimony="“I have been extremely happy with the results of working with Invy, and I would highly recommend them to anyone who is looking for a high-quality tool.”"
                textClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-11"}`}
                tittleClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-10"}`}
              />
              <TestimonyCard
                className="testimony-card-instance"
                containerClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-13"}`}
                image={
                  screenWidth < 834
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                image1={
                  screenWidth >= 834 && screenWidth < 1512
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                imageClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-24"} ${
                  screenWidth < 834 && "class-25"
                }`}
                img1={
                  screenWidth < 834
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                img2={
                  screenWidth >= 834 && screenWidth < 1512
                    ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cc7b27e2492e23bea03cb0/img/line-10@2x.png"
                    : undefined
                }
                imgClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-22"} ${
                  screenWidth < 834 && "class-23"
                }`}
                nameOfTestimoner={screenWidth < 834 ? "Mme Christine Mbong" : undefined}
                property1={
                  screenWidth >= 834 && screenWidth < 1512 ? "variant-2" : screenWidth < 834 ? "light" : undefined
                }
                role={screenWidth < 834 ? "PDG of Oschuna" : undefined}
                testimony={
                  screenWidth < 834
                    ? "“I have been extremely happy with the results of working with Invy, and I would highly recommend them to anyone who is looking for a high-quality tool.”"
                    : undefined
                }
                textClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-11"}`}
                tittleClassName={`${screenWidth >= 834 && screenWidth < 1512 && "class-10"}`}
              />
            </div>
          </>
        )}

        {screenWidth >= 834 && screenWidth < 1512 && (
          <>
            <footer className="footer-2">
              <div className="container-11">
                <Logo
                  className="logo-2"
                  logo="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/logo-@2x.png"
                />
                <div className="footer-link">
                  <div className="link">Integration</div>
                  <div className="link">Pricing</div>
                </div>
              </div>
              <p className="text-8">
                <span className="span">© 2024 Airo. Design &amp; Developed by </span>
                <span className="text-wrapper-20">Kaeyros Analytics </span>
                <span className="span"> All rights reserved.</span>
              </p>
            </footer>
            <div className="group-8">
              <div className="overlap-6">
                <div className="group-9">
                  <img
                    className="group-10"
                    alt="Group"
                    src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/group-1@2x.png"
                  />
                  <div className="card-header-2">
                    <img
                      className="img-4"
                      alt="Avatar"
                      src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/avatar-19@4x.png"
                    />
                    <div className="media-content-2">
                      <div className="text-wrapper-27">Anan Rio</div>
                      <div className="text-wrapper-28">Regular Client</div>
                    </div>
                  </div>
                  <CardHeader
                    avatar="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/avatar-20@2x.png"
                    className="card-header-instance"
                    text="Christine Mbong"
                  />
                </div>
                <div className="subtitle">
                  <div className="text-wrapper-29">Client Management Made Easy</div>
                  <p className="text-wrapper-30">
                    Our tool let you manage your clients more successfully. You can add, amend, and generate invoices
                    for them in just a few seconds.
                  </p>
                </div>
              </div>
            </div>
            <Navbar
              buttonClassName="navbar-4"
              className="navbar-5"
              iconClassName="navbar-3"
              property1="tablet"
              textClassName="instance-node-2"
            />
          </>
        )}

        {screenWidth < 834 && (
          <>
            <div className="frame-41">
              <div className="overlap-7">
                <div className="feature-5">
                  <div className="feature-2">
                    <div className="text-wrapper-31">Get Started Today !</div>
                    <p className="text-wrapper-32">
                      Ready to take control of your inventory management ? Sign up for a free trial of Invy today.
                      Streamline your operations, and unlock the full potential of your business.
                    </p>
                  </div>
                </div>
                <div className="input-feild-3">
                  <div className="text-10">Enter your email address</div>
                  <img
                    className="send"
                    alt="Send"
                    src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/send@2x.png"
                  />
                </div>
                <Avatar
                  avatar="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-19@2x.png"
                  avatarClassName="avatar-3"
                  className="avatar-15"
                  online={false}
                  outline={false}
                  sizes="md"
                />
                <Avatar
                  className="avatar-11"
                  img="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-20@2x.png"
                  online={false}
                  outline={false}
                  sizes="sm"
                />
                <Avatar
                  avatar1="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-16@2x.png"
                  avatarClassName="avatar-3"
                  className="avatar-16"
                  online={false}
                  outline={false}
                  sizes="xs"
                />
              </div>
              <Avatar
                avatarClassName="avatar-18"
                className="avatar-17"
                img="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-13@2x.png"
                online={false}
                outline={false}
                sizes="sm"
              />
              <Avatar
                avatar1="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-14@2x.png"
                avatarClassName="avatar-20"
                className="avatar-19"
                online={false}
                outline={false}
                sizes="xs"
              />
              <Avatar
                avatar="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-15@2x.png"
                avatarClassName="avatar-22"
                className="avatar-21"
                online={false}
                outline={false}
                sizes="md"
              />
            </div>
            <footer className="footer-3">
              <div className="container-11">
                <Logo
                  className="logo-2"
                  logo="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/logo-@2x.png"
                />
                <div className="footer-link">
                  <div className="link">Integration</div>
                  <div className="link">Pricing</div>
                </div>
              </div>
              <p className="text-11">
                <span className="span">© 2024 Airo. Design &amp; Developed by </span>
                <span className="text-wrapper-20">Kaeyros Analytics </span>
                <span className="span"> All rights reserved.</span>
              </p>
            </footer>
            <img
              className="group-11"
              alt="Group"
              src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65d32b5268a8bafd15412b96/img/group-5-1@4x.png"
            />
            <Navbar className="navbar-6" property1="mobile" />
          </>
        )}
      </div>
    </div>
  );
};
