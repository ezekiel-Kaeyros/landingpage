import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Button } from "../../components/Button";
import { FaqCard } from "../../components/FaqCard";
import { Navbar } from "../../components/Navbar";
import { PricingOffer } from "../../components/PricingOffer";
import { TickCircle39 } from "../../icons/TickCircle39";
import { TickCircle40 } from "../../icons/TickCircle40";

export const Phone = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  return (
    <div className="w-full flex flex-row justify-center bg-white">
      <div
        className={`bg-white relative ${
          screenWidth < 834
            ? "w-[425px]"
            : screenWidth >= 834 && screenWidth < 1440
            ? "w-[834px]"
            : screenWidth >= 1440
            ? "w-[1440px]"
            : ""
        } ${
          screenWidth < 834
            ? "h-[8974px]"
            : screenWidth >= 834 && screenWidth < 1440
            ? "h-[7697px]"
            : screenWidth >= 1440
            ? "h-[7208px]"
            : ""
        }`}
      >
        {(screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440)) && (
          <>
            <div
              className={`flex-col absolute ${screenWidth >= 1440 ? "border border-solid" : ""} ${
                screenWidth >= 1440 ? "border-[#e6e6e6]" : ""
              } ${screenWidth >= 1440 ? "w-[1270px]" : ""} ${
                screenWidth >= 834 && screenWidth < 1440 ? "inline-flex" : screenWidth >= 1440 ? "flex" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "left-[39px]" : screenWidth >= 1440 ? "left-[81px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "items-start" : screenWidth >= 1440 ? "items-center" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "top-[168px]" : screenWidth >= 1440 ? "top-[4057px]" : ""
              } ${screenWidth >= 834 && screenWidth < 1440 ? "gap-[10px]" : screenWidth >= 1440 ? "gap-[50px]" : ""} ${
                screenWidth >= 1440 ? "px-[200px] py-[80px]" : ""
              } ${screenWidth >= 1440 ? "h-[312px]" : ""} ${screenWidth >= 1440 ? "rounded-[16px]" : ""} ${
                screenWidth >= 1440 ? "justify-center" : ""
              } ${screenWidth >= 1440 ? "bg-[#fcfcfd]" : ""}`}
            >
              {screenWidth >= 834 && screenWidth < 1440 && (
                <>
                  <div className="flex flex-col w-[754px] items-center gap-[40px] relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center gap-[10px] px-[150px] py-0 relative flex-[0_0_auto] ml-[-101.00px] mr-[-101.00px]">
                      <p className="self-stretch mt-[-1.00px] text-grey-10 text-[36px] text-center leading-[43.2px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                        Empower Connections,
                        <br />
                        Many Countries, One Sending
                      </p>
                      <p className="w-[656px] font-medium text-grey-30 text-[16px] text-center leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                        Simplify communication for your employees, family, or customers with our fast, reliable, and
                        secure bulk airtime solution.
                      </p>
                    </div>
                    <button className="all-[unset] box-border inline-flex items-center gap-[10px] pl-[18px] pr-[8px] py-[8px] bg-[#65dd91] rounded-[100px] relative flex-[0_0_auto]">
                      <div className="w-fit [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[14px] leading-[21px] whitespace-nowrap relative tracking-[0]">
                        Watch how it works
                      </div>
                      <img className="relative flex-[0_0_auto]" alt="Icon container" src="/img/icon-container-4.svg" />
                    </button>
                  </div>
                  <div className="flex w-[756px] items-end justify-center gap-[11.81px] relative flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-[9.45px] relative flex-1 grow">
                      <img className="h-[183.09px] relative self-stretch w-full" alt="Image" src="/img/image-16.svg" />
                      <div className="flex items-center gap-[5.91px] pl-[3.54px] pr-[11.81px] py-[3.54px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[59.06px] border-[0.59px] border-solid border-white-95">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Icon container"
                          src="/img/icon-container-8.svg"
                        />
                        <div className="w-fit [font-family:'Urbanist',Helvetica] font-semibold text-grey-10 text-[12px] leading-[18px] whitespace-nowrap relative tracking-[0]">
                          Send airtime in bulk
                        </div>
                      </div>
                      <img
                        className="absolute w-[22px] h-[24px] top-[-21px] left-[-17px]"
                        alt="Abstract design"
                        src="/img/abstract-design-11.svg"
                      />
                    </div>
                    <div className="flex flex-col items-end gap-[9.45px] relative flex-1 grow">
                      <img
                        className="absolute w-[16px] h-[18px] top-[-30px] -left-px"
                        alt="Abstract design"
                        src="/img/abstract-design-10.svg"
                      />
                      <div className="flex items-center gap-[5.91px] px-[11.81px] py-[9.45px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[59.06px] border-[0.59px] border-solid border-white-95">
                        <p className="flex-1 mt-[-0.59px] [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[12px] leading-[18px] relative tracking-[0]">
                          Instant Send in one click
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-[2.36px] p-[14.18px] relative self-stretch w-full flex-[0_0_auto] bg-[#65dd91] rounded-[9.45px]">
                        <div className="self-stretch mt-[-0.59px] font-semibold text-[18.9px] leading-[28.3px] relative [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                          2x Faster
                        </div>
                        <p className="self-stretch font-medium text-[#333333] text-[12px] leading-[18px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Send airtime in bulk from in single touch from any location to many destination
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-[9.45px] relative flex-1 grow">
                      <div className="flex flex-col items-center gap-[11.81px] p-[23.62px] relative self-stretch w-full flex-[0_0_auto] bg-[#65dd91] rounded-[9.45px]">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Icon container"
                          src="/img/icon-container-7.svg"
                        />
                        <div className="flex flex-col items-center gap-[2.36px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="self-stretch mt-[-0.59px] text-grey-10 text-[14px] text-center leading-[21px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                            Global Reach
                          </div>
                          <p className="w-[138px] ml-[-2.55px] mr-[-2.55px] font-medium text-[#333333] text-[12px] text-center leading-[18px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            {" "}
                            Top up mobile phones in Airo countries instantly.
                          </p>
                        </div>
                      </div>
                      <button className="all-[unset] box-border flex items-center justify-center gap-[5.91px] px-[11.81px] py-[8.27px] self-stretch w-full bg-white-97 rounded-[59.06px] border-[0.59px] border-solid border-white-95 relative flex-[0_0_auto]">
                        <div className="w-fit mt-[-0.59px] [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[10px] leading-[15px] whitespace-nowrap relative tracking-[0]">
                          One way many destination
                        </div>
                        <img className="relative w-[10.63px] h-[10.63px]" alt="Icon" src="/img/icon-3.svg" />
                      </button>
                    </div>
                    <div className="flex flex-col items-end gap-[9.45px] relative flex-1 grow">
                      <div className="flex items-center justify-center gap-[5.91px] px-[11.81px] py-[8.27px] self-stretch w-full bg-white-97 rounded-[59.06px] border-[0.59px] border-solid border-white-95 relative flex-[0_0_auto]">
                        <p className="w-fit mt-[-0.59px] [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[10px] leading-[15px] whitespace-nowrap relative tracking-[0]">
                          Be in control of activities
                        </p>
                        <img className="relative w-[10.63px] h-[10.63px]" alt="Icon" src="/img/icon-2.svg" />
                      </div>
                      <div className="flex flex-col items-start gap-[14.18px] p-[17.72px] relative self-stretch w-full flex-[0_0_auto] bg-[#65dd91] rounded-[11.81px] overflow-hidden">
                        <div className="flex flex-col items-start gap-[2.36px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="self-stretch mt-[-0.59px] text-grey-10 text-[14px] leading-[21px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                            Notification System
                          </div>
                          <p className="self-stretch font-medium text-[#333333] text-[12px] leading-[18px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            Integrated notification system which is help you to manage your daily activities
                          </p>
                        </div>
                        <img
                          className="absolute w-[24px] h-[24px] top-[12px] left-[145px]"
                          alt="Abstract design"
                          src="/img/abstract-design-9.svg"
                        />
                        <img
                          className="relative w-[162.42px] h-[127px] mr-[-17.72px] object-cover"
                          alt="Image"
                          src="/img/image-12.png"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {screenWidth >= 1440 && (
                <>
                  <div className="flex flex-col h-[104px] items-center justify-center gap-[12px] relative self-stretch w-full">
                    <p className="self-stretch mt-[-2.00px] text-grey-10 text-[38px] text-center leading-[45.6px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                      All in one device integration
                    </p>
                    <p className="w-[505px] font-medium text-grey-30 text-[16px] text-center leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Simplify communication for your employees, family, or customers with our fast, reliable, and
                      secure bulk airtime solution.
                    </p>
                  </div>
                  <div className="absolute w-[14px] h-[78px] top-0 left-[628px]">
                    <div className="relative h-[78px]">
                      <img className="absolute w-px h-[71px] top-0 left-[6px]" alt="Vector" src="/img/vector-432.svg" />
                      <div className="absolute w-[14px] h-[14px] top-[64px] left-0 bg-white rounded-[4px] shadow-[0px_2px_14px_10px_#65dd9166]" />
                    </div>
                  </div>
                  <img
                    className="absolute w-[310px] h-[207px] top-[95px] left-[10px] object-cover"
                    alt="Image"
                    src="/img/image-1-1.png"
                  />
                  <img
                    className="absolute w-[322px] h-[288px] top-[56px] left-[944px] object-cover"
                    alt="Image"
                    src="/img/image-2.png"
                  />
                </>
              )}
            </div>
            <div
              className={`absolute ${
                screenWidth >= 834 && screenWidth < 1440 ? "w-[753px]" : screenWidth >= 1440 ? "w-[1280px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "left-[38px]" : screenWidth >= 1440 ? "left-[80px]" : ""
              } ${screenWidth >= 1440 ? "flex" : ""} ${screenWidth >= 1440 ? "flex-col" : ""} ${
                screenWidth >= 1440 ? "items-center" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "top-[811px]" : screenWidth >= 1440 ? "top-[176px]" : ""
              } ${screenWidth >= 834 && screenWidth < 1440 ? "h-[731px]" : ""}`}
            >
              <div
                className={`flex-col items-center ${screenWidth >= 1440 ? "w-full" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "inline-flex" : screenWidth >= 1440 ? "flex" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "left-0" : ""} ${
                  screenWidth >= 1440 ? "self-stretch" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "top-0" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "gap-[5px]" : screenWidth >= 1440 ? "gap-[40px]" : ""
                } ${screenWidth >= 1440 ? "flex-[0_0_auto]" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "px-[150px] py-0" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "absolute" : screenWidth >= 1440 ? "relative" : ""}`}
              >
                <div
                  className={`relative self-stretch ${screenWidth >= 1440 ? "flex" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "mt-[-1.00px]" : ""
                  } ${screenWidth >= 1440 ? "items-center" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "text-grey-10" : ""
                  } ${screenWidth >= 1440 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 1440 ? "px-[150px] py-0" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "[font-family:'Urbanist',Helvetica]" : ""
                  } ${screenWidth >= 834 && screenWidth < 1440 ? "leading-[36.0px]" : ""} ${
                    screenWidth >= 1440 ? "w-full" : ""
                  } ${screenWidth >= 1440 ? "flex-col" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "font-semibold" : ""
                  } ${screenWidth >= 834 && screenWidth < 1440 ? "text-center" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "text-[30px]" : ""
                  } ${screenWidth >= 1440 ? "gap-[10px]" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "tracking-[0]" : ""
                  }`}
                >
                  {screenWidth >= 834 && screenWidth < 1440 && <>Some Features</>}

                  {screenWidth >= 1440 && (
                    <>
                      <p className="self-stretch mt-[-1.00px] text-grey-10 text-[48px] text-center leading-[57.6px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                        Empower Connections,
                        <br />
                        Many Countries, One Sending
                      </p>
                      <p className="w-[656px] font-medium text-grey-30 text-[16px] text-center leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                        Simplify communication for your employees, family, or customers with our fast, reliable, and
                        secure bulk airtime solution.
                      </p>
                    </>
                  )}
                </div>
                <div
                  className={`relative ${screenWidth >= 1440 ? "inline-flex" : ""} ${
                    screenWidth >= 1440 ? "items-center" : ""
                  } ${screenWidth >= 834 && screenWidth < 1440 ? "text-grey-30" : ""} ${
                    screenWidth >= 1440 ? "flex-[0_0_auto]" : ""
                  } ${screenWidth >= 1440 ? "pl-[18px] pr-[8px] py-[8px]" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "[font-family:'Urbanist',Helvetica]" : ""
                  } ${screenWidth >= 834 && screenWidth < 1440 ? "leading-[24px]" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "font-medium" : ""
                  } ${screenWidth >= 834 && screenWidth < 1440 ? "text-center" : ""} ${
                    screenWidth >= 1440 ? "rounded-[100px]" : ""
                  } ${screenWidth >= 834 && screenWidth < 1440 ? "text-[16px]" : ""} ${
                    screenWidth >= 1440 ? "gap-[10px]" : ""
                  } ${screenWidth >= 1440 ? "bg-[#65dd91]" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "self-stretch" : ""
                  } ${screenWidth >= 834 && screenWidth < 1440 ? "tracking-[0]" : ""}`}
                >
                  {screenWidth >= 834 && screenWidth < 1440 && (
                    <p>Our application will enable you to perform the following actions</p>
                  )}

                  {screenWidth >= 1440 && (
                    <>
                      <div className="w-fit [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[14px] leading-[21px] whitespace-nowrap relative tracking-[0]">
                        Watch how it works
                      </div>
                      <img className="relative flex-[0_0_auto]" alt="Icon container" src="/img/icon-container-4.svg" />
                    </>
                  )}
                </div>
              </div>
              <div
                className={`${screenWidth >= 834 && screenWidth < 1440 ? "border-[3px] border-solid" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "border-[#ebebecfc]" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "w-[759px]" : screenWidth >= 1440 ? "w-full" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "left-[-3px]" : ""
                } ${screenWidth >= 1440 ? "self-stretch" : ""} ${screenWidth >= 1440 ? "flex" : ""} ${
                  screenWidth >= 1440 ? "items-end" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "top-[102px]" : ""} ${
                  screenWidth >= 1440 ? "gap-[20px]" : ""
                } ${screenWidth >= 1440 ? "flex-[0_0_auto]" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "h-[632px]" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "rounded-[16px]" : ""} ${
                  screenWidth >= 1440 ? "justify-center" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "bg-white-99" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "absolute" : screenWidth >= 1440 ? "relative" : ""
                }`}
              >
                {screenWidth >= 834 && screenWidth < 1440 && (
                  <>
                    <div className="absolute w-[753px] h-[347px] top-0 left-0">
                      <div className="absolute w-[361px] h-[347px] top-0 left-0 rounded-[20px]">
                        <div className="w-[341px] gap-[2px] flex flex-col items-start absolute top-[20px] left-[20px]">
                          <div className="self-stretch mt-[-1.00px] font-bold text-[#333333] text-[20px] leading-[30px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            Secure Transactions
                          </div>
                          <p className="w-[281px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            {" "}
                            Our platform ensures your data and transactions are safe
                          </p>
                        </div>
                        <img
                          className="absolute w-[341px] h-[203px] top-[144px] left-[20px] object-cover"
                          alt="Image"
                          src="/img/image-8-1.png"
                        />
                      </div>
                      <img
                        className="absolute w-[3px] h-[347px] top-0 left-[366px]"
                        alt="Line"
                        src="/img/line-10.svg"
                      />
                      <div className="absolute w-[381px] h-[347px] top-0 left-[369px] rounded-[20px]">
                        <div className="w-[341px] gap-[2px] flex flex-col items-start absolute top-[20px] left-[20px]">
                          <div className="self-stretch mt-[-1.00px] font-bold text-[#333333] text-[20px] leading-[30px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            Multiple Payment Options
                          </div>
                          <p className="w-[281px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            Choose your preferred payment method from a variety of secure options.
                          </p>
                        </div>
                        <img
                          className="absolute w-[286px] h-[186px] top-[161px] left-[47px] object-cover"
                          alt="Image"
                          src="/img/image-9.png"
                        />
                      </div>
                      <img className="absolute w-[753px] h-[3px] top-[344px] left-0" alt="Line" src="/img/line-8.svg" />
                    </div>
                    <img
                      className="absolute w-[347px] h-px top-[2958px] left-[-448px]"
                      alt="Line"
                      src="/img/line-9.png"
                    />
                    <img
                      className="absolute w-[347px] h-px top-[2958px] left-[-59px]"
                      alt="Line"
                      src="/img/line-9.png"
                    />
                    <div className="absolute w-[753px] h-[279px] top-[347px] left-0 rounded-[20px] overflow-hidden">
                      <div className="w-[713px] gap-[4px] flex flex-col items-start absolute top-[20px] left-[20px]">
                        <div className="self-stretch mt-[-1.00px] font-bold text-[#333333] text-[20px] leading-[30px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Global Reach
                        </div>
                        <p className="w-[281px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Top up mobile phones in [Number] countries instantly
                        </p>
                      </div>
                      <img
                        className="absolute w-[594px] h-[117px] top-[122px] left-[79px] object-cover"
                        alt="Image"
                        src="/img/image-10.png"
                      />
                    </div>
                  </>
                )}

                {screenWidth >= 1440 && (
                  <>
                    <div className="flex flex-col items-start gap-[16px] relative flex-1 grow">
                      <img className="relative self-stretch w-full h-[310px]" alt="Image" src="/img/image-1.svg" />
                      <div className="items-center gap-[10px] pl-[6px] pr-[20px] py-[6px] self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[100px] border border-solid border-white-95 flex relative">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Icon container"
                          src="/img/icon-container-3.svg"
                        />
                        <div className="w-fit [font-family:'Urbanist',Helvetica] font-semibold text-grey-10 text-[16px] leading-[24px] whitespace-nowrap relative tracking-[0]">
                          Send airtime in bulk
                        </div>
                      </div>
                      <img
                        className="absolute w-[37px] h-[40px] top-[-35px] left-[-29px]"
                        alt="Abstract design"
                        src="/img/abstract-design-5.svg"
                      />
                    </div>
                    <div className="flex flex-col items-end gap-[16px] relative flex-1 grow">
                      <img
                        className="absolute w-[28px] h-[30px] top-[-80px] left-[-2px]"
                        alt="Abstract design"
                        src="/img/abstract-design-4.svg"
                      />
                      <div className="flex items-center gap-[10px] px-[20px] py-[16px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[100px] border border-solid border-white-95">
                        <p className="flex-1 mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[16px] leading-[24px] relative tracking-[0]">
                          Instant Send in one click
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-[4px] p-[24px] relative self-stretch w-full flex-[0_0_auto] bg-[#65dd91] rounded-[16px]">
                        <div className="self-stretch font-semibold text-[32px] leading-[48px] relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                          2x Faster
                        </div>
                        <p className="self-stretch font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Send airtime in bulk from in single touch from any location to many destination
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-[16px] relative flex-1 grow">
                      <div className="flex-col items-center gap-[20px] p-[40px] self-stretch w-full flex-[0_0_auto] bg-[#65dd91] rounded-[16px] flex relative">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Icon container"
                          src="/img/icon-container-2.svg"
                        />
                        <div className="flex flex-col items-center gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="self-stretch mt-[-1.00px] text-grey-10 text-[22px] text-center leading-[33px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                            Global Reach
                          </div>
                          <p className="self-stretch font-medium text-[#333333] text-[16px] text-center leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            {" "}
                            Top up mobile phones in Airo countries instantly.
                          </p>
                        </div>
                      </div>
                      <button className="all-[unset] box-border flex items-center justify-center gap-[10px] px-[20px] py-[14px] self-stretch w-full bg-white-97 rounded-[100px] border border-solid border-white-95 relative flex-[0_0_auto]">
                        <div className="w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[14px] leading-[21px] whitespace-nowrap relative tracking-[0]">
                          One way many destination
                        </div>
                        <img className="relative w-[18px] h-[18px]" alt="Icon" src="/img/icon.svg" />
                      </button>
                    </div>
                    <div className="flex flex-col items-end gap-[16px] relative flex-1 grow">
                      <div className="flex items-center justify-center gap-[10px] px-[20px] py-[14px] self-stretch w-full bg-white-97 rounded-[100px] border border-solid border-white-95 relative flex-[0_0_auto]">
                        <p className="w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[14px] leading-[21px] whitespace-nowrap relative tracking-[0]">
                          Be in control of activities
                        </p>
                        <img className="relative w-[18px] h-[18px]" alt="Icon" src="/img/icon.svg" />
                      </div>
                      <div className="flex-col items-start gap-[24px] p-[30px] self-stretch w-full flex-[0_0_auto] bg-[#65dd91] rounded-[20px] overflow-hidden flex relative">
                        <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="self-stretch mt-[-1.00px] text-grey-10 text-[18px] leading-[27px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                            Notification System
                          </div>
                          <p className="self-stretch font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            Integrated notification system which is help you to manage your daily activities
                          </p>
                        </div>
                        <img
                          className="absolute w-[40px] h-[40px] top-[20px] left-[245px]"
                          alt="Abstract design"
                          src="/img/abstract-design-3.svg"
                        />
                        <img
                          className="relative w-[275px] h-[214px] mr-[-30.00px] object-cover"
                          alt="Image"
                          src="/img/image-7.png"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}

        <div
          className={`flex-col absolute ${screenWidth >= 1440 ? "w-[1280px]" : screenWidth < 834 ? "w-[374px]" : ""} ${
            screenWidth >= 834 && screenWidth < 1440
              ? "left-[40px]"
              : screenWidth >= 1440
              ? "left-[80px]"
              : screenWidth < 834
              ? "left-[27px]"
              : ""
          } ${
            screenWidth >= 834 && screenWidth < 1440
              ? "inline-flex"
              : screenWidth >= 1440 || screenWidth < 834
              ? "flex"
              : ""
          } ${
            (screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834
              ? "items-center"
              : screenWidth >= 1440
              ? "items-start"
              : ""
          } ${
            screenWidth >= 834 && screenWidth < 1440
              ? "top-[1662px]"
              : screenWidth >= 1440
              ? "top-[1030px]"
              : screenWidth < 834
              ? "top-[123px]"
              : ""
          } ${
            screenWidth >= 834 && screenWidth < 1440
              ? "gap-[40px]"
              : screenWidth >= 1440
              ? "gap-[60px]"
              : screenWidth < 834
              ? "gap-[20px]"
              : ""
          }`}
        >
          <div
            className={`flex flex-col items-center flex-[0_0_auto] px-[150px] py-0 relative ${
              screenWidth >= 834 && screenWidth < 1440
                ? "w-[751px]"
                : screenWidth >= 1440
                ? "w-full"
                : screenWidth < 834
                ? "w-[373px]"
                : ""
            } ${screenWidth >= 1440 ? "self-stretch" : ""} ${
              screenWidth >= 834 && screenWidth < 1440
                ? "gap-[5px]"
                : screenWidth >= 1440 || screenWidth < 834
                ? "gap-[10px]"
                : ""
            }`}
          >
            <div
              className={`[font-family:'Urbanist',Helvetica] mt-[-1.00px] tracking-[0] text-grey-10 font-semibold text-center relative ${
                screenWidth < 834 ? "w-[379px]" : ""
              } ${screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440) ? "self-stretch" : ""} ${
                screenWidth >= 834 && screenWidth < 1440
                  ? "text-[30px]"
                  : screenWidth >= 1440
                  ? "text-[38px]"
                  : screenWidth < 834
                  ? "text-[26px]"
                  : ""
              } ${screenWidth < 834 ? "mr-[-153.00px]" : ""} ${screenWidth < 834 ? "ml-[-153.00px]" : ""} ${
                screenWidth >= 834 && screenWidth < 1440
                  ? "leading-[36.0px]"
                  : screenWidth >= 1440
                  ? "leading-[45.6px]"
                  : screenWidth < 834
                  ? "leading-[31.2px]"
                  : ""
              }`}
            >
              {screenWidth >= 834 && screenWidth < 1440 && <>One Click, Many Countries</>}

              {screenWidth >= 1440 && <>Some Features</>}

              {screenWidth < 834 && (
                <p>
                  Empower Connections,
                  <br />
                  Many Countries, One Sending
                </p>
              )}
            </div>
            <div
              className={`[font-family:'Urbanist',Helvetica] tracking-[0] text-[16px] text-grey-30 font-medium text-center leading-[24px] relative ${
                screenWidth >= 834 && screenWidth < 1440 ? "w-[698px]" : screenWidth < 834 ? "w-[322px]" : ""
              } ${screenWidth >= 1440 ? "self-stretch" : ""} ${
                screenWidth >= 834 && screenWidth < 1440 ? "mr-[-123.50px]" : screenWidth < 834 ? "mr-[-124.50px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "ml-[-123.50px]" : screenWidth < 834 ? "ml-[-124.50px]" : ""
              }`}
            >
              {screenWidth >= 834 && screenWidth < 1440 && (
                <p>
                  {" "}
                  We serve a wide range of clients with their airtime needs. We offer some of the most affordable bulk
                  airtime solutions on the market.
                </p>
              )}

              {screenWidth >= 1440 && <p>Our application will enable you to perform the following actions</p>}

              {screenWidth < 834 && (
                <p>
                  Simplify communication for your employees, family, or customers with our fast, reliable, and secure
                  bulk airtime solution.
                </p>
              )}
            </div>
          </div>
          <div
            className={`flex-[0_0_auto] relative ${screenWidth >= 1440 ? "border-[#ebebecfc]" : ""} ${
              (screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834
                ? "inline-flex"
                : screenWidth >= 1440
                ? "flex"
                : ""
            } ${
              screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440)
                ? "items-start"
                : screenWidth < 834
                ? "items-center"
                : ""
            } ${
              screenWidth < 834
                ? "pt-[var(--tokens-spacing-4-pt-half)] pb-[var(--tokens-spacing-4-pt-half)] pl-[16px] pr-[8px]"
                : ""
            } ${screenWidth >= 1440 ? "w-full" : ""} ${screenWidth >= 834 && screenWidth < 1440 ? "flex-col" : ""} ${
              screenWidth >= 1440 ? "mr-[-3.00px]" : ""
            } ${screenWidth >= 1440 ? "rounded-[16px]" : screenWidth < 834 ? "rounded-[100px]" : ""} ${
              screenWidth >= 834 && screenWidth < 1440 ? "gap-[60px]" : screenWidth < 834 ? "gap-[6px]" : ""
            } ${screenWidth >= 1440 ? "ml-[-3.00px]" : ""} ${screenWidth >= 1440 ? "mb-[-3.00px]" : ""} ${
              screenWidth >= 1440 ? "bg-white-99" : screenWidth < 834 ? "bg-[#65dd91]" : ""
            } ${screenWidth >= 1440 ? "border-[3px] border-solid" : ""} ${screenWidth >= 1440 ? "self-stretch" : ""}`}
          >
            {screenWidth >= 834 && screenWidth < 1440 && (
              <>
                <div className="flex flex-col w-[754px] items-center justify-center gap-[40px] relative flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-[20px] p-[40px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[16px] border border-solid border-white-95">
                    <div className="flex items-center gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex-1 mt-[-1.00px] text-grey-10 text-[22px] leading-[33px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                        Vision
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[30px] px-[20px] py-[40px] relative self-stretch w-full flex-[0_0_auto] bg-absolutewhite rounded-[16px] border border-solid border-white-95">
                      <div className="flex flex-col items-start justify-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative w-[434px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-[#1e1e1e] text-[22px] tracking-[0] leading-[33px]">
                          Free transfer anywhere around the world
                        </p>
                        <p className="w-[421px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Experience the freedom of hassle-free airtime transfer with our free transfer admin airtime
                          app. Say goodbye to unnecessary fees and enjoy seamless transactions
                        </p>
                      </div>
                    </div>
                  </div>
                  <img className="relative w-[358px] h-[282px]" alt="Layer" src="/img/layer-1-1.svg" />
                </div>
                <div className="flex flex-col w-[754px] items-center gap-[40px] relative flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-[20px] p-[40px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[16px] border border-solid border-white-95">
                    <div className="flex items-center gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex-1 mt-[-1.00px] text-grey-10 text-[22px] leading-[33px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                        Vision
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[30px] p-[40px] relative self-stretch w-full flex-[0_0_auto] bg-absolutewhite rounded-[16px] border border-solid border-white-95">
                      <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                          <div className="w-[24px] h-[24px] mt-[-1.00px] font-semibold text-[20px] text-center leading-[30px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                            01
                          </div>
                        </div>
                        <p className="flex-1 mt-[-1.00px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Highlight robust security measures (data encryption, secure transactions) and compliance with
                          relevant regulations.
                        </p>
                      </div>
                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Line"
                        src="/img/line-5.svg"
                      />
                      <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                          <div className="w-[24px] h-[24px] mt-[-1.00px] font-semibold text-[20px] text-center leading-[30px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                            02
                          </div>
                        </div>
                        <p className="flex-1 font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          {" "}
                          This fosters trust and assures users of their data and financial safety.
                        </p>
                      </div>
                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Line"
                        src="/img/line-5.svg"
                      />
                      <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                          <div className="w-[24px] h-[24px] mt-[-1.00px] font-semibold text-[20px] text-center leading-[30px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                            03
                          </div>
                        </div>
                        <p className="flex-1 font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Emphasize an intuitive interface for managing and scheduling bulk airtime.
                        </p>
                      </div>
                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Line"
                        src="/img/line-5.svg"
                      />
                      <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                          <div className="w-[24px] h-[24px] mt-[-1.00px] font-semibold text-[20px] text-center leading-[30px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                            04
                          </div>
                        </div>
                        <div className="flex-1 font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Offer transparent tracking and reporting features.
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-[278px] mb-[-8.00px] ml-[-8.00px] mr-[-8.00px] relative self-stretch w-full"
                    alt="Image"
                    src="/img/image-8.svg"
                  />
                </div>
              </>
            )}

            {screenWidth >= 1440 && (
              <>
                <div className="flex flex-col h-[347px] items-center justify-between pl-[20px] pr-0 pt-[20px] pb-0 relative flex-1 grow rounded-[20px]">
                  <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="self-stretch mt-[-1.00px] font-bold text-[#333333] text-[24px] leading-[36px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Secure Transactions
                    </div>
                    <p className="w-[281px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      {" "}
                      Our platform ensures your data and transactions are safe
                    </p>
                  </div>
                  <img
                    className="relative w-[407px] h-[203px] ml-[-0.17px] mr-[-0.17px] object-cover"
                    alt="Image"
                    src="/img/image-4.png"
                  />
                </div>
                <img className="w-[3px] relative self-stretch" alt="Line" src="/img/line-4.svg" />
                <div className="flex flex-col h-[347px] items-center justify-between pt-[20px] pb-0 px-[20px] relative flex-1 grow rounded-[20px]">
                  <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="self-stretch mt-[-1.00px] font-bold text-[#333333] text-[24px] leading-[36px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Multiple Payment Options
                    </div>
                    <p className="w-[281px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Choose your preferred payment method from a variety of secure options.
                    </p>
                  </div>
                  <img className="relative w-[286px] h-[186px] object-cover" alt="Image" src="/img/image-5.png" />
                </div>
                <img className="w-[3px] relative self-stretch" alt="Line" src="/img/line-3.svg" />
                <div className="flex flex-col items-center justify-between pt-[20px] pb-[40px] px-[20px] relative flex-1 self-stretch grow rounded-[20px]">
                  <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="self-stretch mt-[-1.00px] font-bold text-[#333333] text-[24px] leading-[36px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Global Reach
                    </div>
                    <p className="w-[281px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Top up mobile phones in [Number] countries instantly
                    </p>
                  </div>
                  <img
                    className="relative w-[422.5px] h-[117px] ml-[-17.92px] mr-[-17.92px] object-cover"
                    alt="Image"
                    src="/img/image-6.png"
                  />
                </div>
              </>
            )}

            {screenWidth < 834 && (
              <>
                <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                  Watch how it works
                </div>
                <img className="relative flex-[0_0_auto]" alt="Icon container" src="/img/icon-container-13.svg" />
              </>
            )}
          </div>
        </div>
        {(screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440)) && (
          <>
            <div
              className={`flex-col absolute ${screenWidth >= 1440 ? "w-[1280px]" : ""} ${
                screenWidth >= 834 && screenWidth < 1440 ? "inline-flex" : screenWidth >= 1440 ? "flex" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "left-[32px]" : screenWidth >= 1440 ? "left-[80px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "items-center" : screenWidth >= 1440 ? "items-start" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "top-[3600px]" : screenWidth >= 1440 ? "top-[1637px]" : ""
              } ${screenWidth >= 834 && screenWidth < 1440 ? "gap-[40px]" : screenWidth >= 1440 ? "gap-[60px]" : ""}`}
            >
              {screenWidth >= 834 && screenWidth < 1440 && (
                <>
                  <div className="flex flex-col w-[754px] items-center gap-[5px] px-[150px] py-0 relative flex-[0_0_auto]">
                    <div className="self-stretch mt-[-1.00px] text-grey-10 text-[30px] text-center leading-[36.0px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                      Enjoy Unique Advantages
                    </div>
                    <p className="w-[700px] ml-[-123.00px] mr-[-123.00px] font-medium text-grey-30 text-[16px] text-center leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Simplify communication for your employees, family, or customers with our fast, reliable, and
                      secure bulk airtime solution.
                    </p>
                  </div>
                  <img className="relative w-[770px] h-[268.5px] object-cover" alt="Image" src="/img/image-11.png" />
                  <div className="flex flex-col w-[753px] items-center gap-[20px] relative flex-[0_0_auto]">
                    <div className="flex flex-col w-[753px] items-start gap-[20px] p-[40px] relative flex-[0_0_auto] bg-white-97 rounded-[16px] border border-solid border-white-95">
                      <div className="flex items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-start justify-end gap-[20px] p-[30px] relative flex-1 self-stretch grow bg-white-99 rounded-[16px] border border-solid border-white-95">
                          <div className="flex flex-col items-start justify-center gap-[8px] relative flex-1 grow">
                            <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex-1 mt-[-1.00px] text-grey-15 text-[18px] leading-[27px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                                Trusted Network Partnerships
                              </div>
                              <img
                                className="relative w-[27.5px] h-[24.14px] mr-[-1.00px]"
                                alt="Group"
                                src="/img/group-33-1.png"
                              />
                            </div>
                            <p className="self-stretch font-medium text-grey-30 text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                              Benefit from our extensive network of leading mobile operators, ensuring wider coverage
                              and reliable connections.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start justify-end gap-[20px] p-[30px] relative flex-1 self-stretch grow bg-white-99 rounded-[16px] border border-solid border-white-95">
                          <div className="flex flex-col items-start justify-center gap-[8px] relative flex-1 grow">
                            <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex-1 mt-[-1.00px] text-grey-15 text-[18px] leading-[27px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                                Unwavering Security &amp; Compliance:
                              </div>
                              <div className="relative w-[23.22px] h-[24px]">
                                <div className="relative w-[23px] h-[24px]">
                                  <div className="absolute w-[23px] h-[15px] top-[9px] left-0">
                                    <div className="relative w-[24px] h-[15px]">
                                      <img
                                        className="w-[23px] h-[8px] top-[7px] absolute left-0"
                                        alt="Subtract"
                                        src="/img/subtract-11.svg"
                                      />
                                      <div className="absolute w-[23px] h-[14px] top-0 left-0 rounded-[11.61px/7.05px] shadow-[inset_0px_0.5px_1px_#0000001a] [background:radial-gradient(50%_50%_at_50%_50%,rgb(101,221,145)_0%,rgb(205.06,255,223.36)_100%)]" />
                                      <img
                                        className="w-[24px] h-[7px] top-[8px] absolute left-0"
                                        alt="Subtract"
                                        src="/img/subtract-10.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute w-[23px] h-[15px] top-[5px] left-0">
                                    <div className="relative w-[24px] h-[15px]">
                                      <img
                                        className="w-[23px] h-[8px] top-[7px] absolute left-0"
                                        alt="Subtract"
                                        src="/img/subtract-9.svg"
                                      />
                                      <div className="absolute w-[23px] h-[14px] top-0 left-0 bg-[#e4e8f366] rounded-[11.61px/7.05px] shadow-[inset_0px_0.5px_1px_#5759931a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]" />
                                      <img
                                        className="w-[24px] h-[7px] top-[8px] absolute left-0"
                                        alt="Subtract"
                                        src="/img/subtract-8.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute w-[23px] h-[15px] top-0 left-0">
                                    <div className="relative w-[24px] h-[15px]">
                                      <img
                                        className="w-[23px] h-[8px] top-[7px] absolute left-0"
                                        alt="Subtract"
                                        src="/img/subtract-7.svg"
                                      />
                                      <div className="absolute w-[23px] h-[14px] top-0 left-0 bg-[#e4e8f366] rounded-[11.61px/7.05px] shadow-[inset_0px_0.5px_1px_#5759931a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]" />
                                      <img
                                        className="w-[24px] h-[7px] top-[8px] absolute left-0"
                                        alt="Subtract"
                                        src="/img/subtract-6.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="self-stretch font-medium text-grey-30 text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                              Industry-standard security protocols and strict data privacy compliance guarantee peace of
                              mind for every transaction.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex h-[242px] items-start justify-end gap-[20px] p-[30px] relative self-stretch w-full bg-white-99 rounded-[16px] border border-solid border-white-95">
                        <div className="flex flex-col items-start justify-center gap-[8px] relative flex-1 grow">
                          <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex-1 mt-[-1.00px] text-grey-15 text-[18px] leading-[27px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                              Detailed Reporting &amp; Analytics:
                            </div>
                            <img
                              className="relative w-[28.9px] h-[24.17px] mr-[-0.99px]"
                              alt="Group"
                              src="/img/group-25-1.svg"
                            />
                          </div>
                          <p className="self-stretch font-medium text-grey-30 text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            Access comprehensive reports to manage your airtime sending effectively and optimize future
                            transactions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {screenWidth >= 1440 && (
                <>
                  <div className="flex flex-col items-center gap-[10px] px-[150px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="self-stretch mt-[-1.00px] text-grey-10 text-[38px] text-center leading-[45.6px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                      One Click, Many Countries
                    </div>
                    <p className="w-[698px] font-medium text-grey-30 text-[16px] text-center leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      {" "}
                      We serve a wide range of clients with their airtime needs. We offer some of the most affordable
                      bulk airtime solutions on the market.
                    </p>
                  </div>
                  <div className="flex-col items-center gap-[40px] self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="flex flex-col items-start gap-[40px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="items-center justify-center gap-[40px] self-stretch w-full flex-[0_0_auto] flex relative">
                        <div className="flex flex-col items-start gap-[40px] p-[40px] relative flex-1 grow bg-white-97 rounded-[16px] border border-solid border-white-95">
                          <div className="items-center gap-[50px] self-stretch w-full flex-[0_0_auto] flex relative">
                            <div className="flex-1 mt-[-1.00px] text-grey-10 text-[30px] leading-[45px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                              Vision
                            </div>
                          </div>
                          <div className="flex-col h-[218px] items-start justify-around gap-[30px] p-[40px] self-stretch w-full bg-absolutewhite rounded-[16px] border border-solid border-white-95 flex relative">
                            <div className="flex flex-col items-start justify-center gap-[10px] relative self-stretch w-full flex-[0_0_auto] mt-[-17.00px] mb-[-17.00px]">
                              <p className="relative w-[434px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-[#1e1e1e] text-[30px] tracking-[0] leading-[45px]">
                                Free transfer anywhere around the world
                              </p>
                              <p className="w-[421px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                                Experience the freedom of hassle-free airtime transfer with our free transfer admin
                                airtime app. Say goodbye to unnecessary fees and enjoy seamless transactions
                              </p>
                            </div>
                          </div>
                        </div>
                        <img className="relative w-[482px] h-[379px]" alt="Layer" src="/img/layer-1.svg" />
                      </div>
                      <div className="items-start gap-[40px] self-stretch w-full flex-[0_0_auto] flex relative">
                        <img
                          className="relative self-stretch w-[537px] mt-[-8.00px] mb-[-8.00px] ml-[-8.00px]"
                          alt="Image"
                          src="/img/image.svg"
                        />
                        <div className="flex flex-col items-start gap-[40px] p-[40px] relative flex-1 grow bg-white-97 rounded-[16px] border border-solid border-white-95">
                          <div className="items-center gap-[50px] self-stretch w-full flex-[0_0_auto] flex relative">
                            <div className="flex-1 mt-[-1.00px] text-grey-10 text-[30px] leading-[45px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                              Vision
                            </div>
                          </div>
                          <div className="flex-col items-start gap-[30px] p-[40px] self-stretch w-full flex-[0_0_auto] bg-absolutewhite rounded-[16px] border border-solid border-white-95 flex relative">
                            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                                <div className="w-[24px] h-[24px] font-semibold text-[20px] text-center leading-[30px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                                  01
                                </div>
                              </div>
                              <p className="flex-1 mt-[-1.00px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                                Highlight robust security measures (data encryption, secure transactions) and compliance
                                with relevant regulations.
                              </p>
                            </div>
                            <img
                              className="w-full h-px object-cover relative self-stretch"
                              alt="Line"
                              src="/img/line.svg"
                            />
                            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                                <div className="w-[24px] h-[24px] font-semibold text-[20px] text-center leading-[30px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                                  02
                                </div>
                              </div>
                              <p className="flex-1 font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                                {" "}
                                This fosters trust and assures users of their data and financial safety.
                              </p>
                            </div>
                            <img
                              className="w-full h-px object-cover relative self-stretch"
                              alt="Line"
                              src="/img/line.svg"
                            />
                            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                                <div className="w-[24px] h-[24px] font-semibold text-[20px] text-center leading-[30px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                                  03
                                </div>
                              </div>
                              <p className="flex-1 mt-[-1.00px] font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                                Emphasize an intuitive interface for managing and scheduling bulk airtime.
                              </p>
                            </div>
                            <img
                              className="w-full h-px object-cover relative self-stretch"
                              alt="Line"
                              src="/img/line.svg"
                            />
                            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                                <div className="w-[24px] h-[24px] font-semibold text-[20px] text-center leading-[30px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                                  04
                                </div>
                              </div>
                              <div className="flex-1 font-medium text-[#333333] text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                                Offer transparent tracking and reporting features.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div
              className={`absolute ${
                screenWidth >= 834 && screenWidth < 1440 ? "w-[755px]" : screenWidth >= 1440 ? "w-[1280px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "left-[41px]" : screenWidth >= 1440 ? "left-[80px]" : ""
              } ${screenWidth >= 1440 ? "flex" : ""} ${screenWidth >= 1440 ? "flex-col" : ""} ${
                screenWidth >= 1440 ? "items-start" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "top-[5158px]" : screenWidth >= 1440 ? "top-[3057px]" : ""
              } ${screenWidth >= 1440 ? "gap-[42px]" : ""} ${
                screenWidth >= 834 && screenWidth < 1440 ? "h-[732px]" : ""
              }`}
            >
              {screenWidth >= 834 && screenWidth < 1440 && (
                <>
                  <div className="flex flex-col w-[751px] items-center gap-[5px] px-[150px] py-0 absolute top-0 left-[2px]">
                    <div className="self-stretch mt-[-1.00px] text-grey-10 text-[30px] text-center leading-[36.0px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                      Choose Your Pricing plan
                    </div>
                    <p className="w-[751px] ml-[-150.00px] mr-[-150.00px] font-medium text-grey-30 text-[16px] text-center leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Simplify communication for your employees, family, or customers with our fast, reliable, and
                      secure bulk airtime solution.
                    </p>
                  </div>
                  <div className="flex flex-col w-[755px] items-center justify-center gap-[24px] absolute top-[131px] left-0">
                    <div className="inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]">
                      <div className="relative w-fit font-link-link-regular font-[number:var(--link-link-regular-font-weight)] text-black text-[length:var(--link-link-regular-font-size)] tracking-[var(--link-link-regular-letter-spacing)] leading-[var(--link-link-regular-line-height)] whitespace-nowrap [font-style:var(--link-link-regular-font-style)]">
                        Monthly
                      </div>
                      <div className="flex w-[61px] items-center justify-center gap-[10px] relative bg-[#04773b] rounded-[80px]">
                        <div className="flex items-start justify-end gap-[10px] p-[2px] relative flex-1 grow rounded-[220px]">
                          <div className="relative w-[24px] h-[24px] bg-white rounded-[12px]" />
                        </div>
                      </div>
                      <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-link-link-regular font-[number:var(--link-link-regular-font-weight)] text-black text-[length:var(--link-link-regular-font-size)] tracking-[var(--link-link-regular-letter-spacing)] leading-[var(--link-link-regular-line-height)] whitespace-nowrap [font-style:var(--link-link-regular-font-style)]">
                          Annually:
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Articulat_CF-Bold',Helvetica] font-bold text-[#04773b] text-[18px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                          Save 30%
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[754px] h-[549px]">
                      <div className="relative w-[757px] h-[550px] -top-px -left-px">
                        <div className="h-[541px] px-[22px] py-[40px] top-[5px] left-[510px] border-[1.2px] border-solid border-token-border-color inline-flex flex-col items-start justify-between absolute rounded-[var(--primitives-spacing-4-grid-3)]">
                          <img
                            className="relative w-[40.5px] h-[40.5px] object-cover"
                            alt="Image"
                            src="/img/image-15-1.png"
                          />
                          <div className="w-[202px] gap-[5px] flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Visby_CF-Bold',Helvetica] font-bold text-token-colors-text-color text-[18px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                              Enterprise
                            </div>
                            <div className="relative self-stretch [font-family:'Visby_CF-Regular',Helvetica] font-normal text-token-colors-text-color text-[14px] tracking-[0] leading-[16.8px]">
                              Perfect for companies.
                            </div>
                          </div>
                          <div className="inline-flex items-end justify-end gap-[4px] relative flex-[0_0_auto]">
                            <div className="mt-[-1.00px] text-token-colors-text-color text-[24px] leading-[28.8px] relative w-fit [font-family:'Visby_CF-Bold',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                              49,99 $
                            </div>
                            <div className="mt-[-1.00px] text-primitives-colors-rich-black-200 relative w-fit [font-family:'Visby_CF-Regular',Helvetica] font-normal text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                              /month
                            </div>
                          </div>
                          <div className="gap-[20px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                            <PricingOffer
                              className="!flex-[0_0_auto]"
                              divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                              text="Unlimited Numbers"
                            />
                            <PricingOffer
                              className="!flex-[0_0_auto]"
                              divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                              text="Unlimited Recharge Amount"
                            />
                            <PricingOffer
                              className="!flex-[0_0_auto]"
                              divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                              text="50 + Countries"
                            />
                            <PricingOffer
                              className="!flex-[0_0_auto]"
                              divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                              text="Bulk Sending Present"
                            />
                            <PricingOffer
                              className="!flex-[0_0_auto]"
                              divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                              text="50 Sub Clients / Country"
                            />
                          </div>
                          <Button
                            button="Choose Plan"
                            className="!self-stretch !h-[52px] !pt-[var(--primitives-spacing-4-grid-5)] !pb-[var(--primitives-spacing-4-grid-5)] !px-[16px] !flex !w-full"
                            divClassName="!mt-[-4.50px] !mb-[-2.50px]"
                            hasLeftIcon={false}
                            hasRightIcon={false}
                            property1="btn-outline"
                          />
                        </div>
                        <div className="h-[541px] px-[22px] py-[40px] top-[5px] left-0 border-[1.2px] border-solid border-token-border-color inline-flex flex-col items-start justify-between absolute rounded-[var(--primitives-spacing-4-grid-3)]">
                          <img
                            className="relative w-[40.5px] h-[40.5px] object-cover"
                            alt="Image"
                            src="/img/image-15-1.png"
                          />
                          <div className="gap-[5px] self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Visby_CF-Bold',Helvetica] font-bold text-token-colors-text-color text-[18px] tracking-[0] leading-[21.6px]">
                              Standard
                            </div>
                            <p className="relative self-stretch [font-family:'Visby_CF-Regular',Helvetica] font-normal text-token-colors-text-color text-[14px] tracking-[0] leading-[16.8px]">
                              Perfect for individuals and occasional users.
                            </p>
                          </div>
                          <div className="inline-flex items-end justify-end gap-[4px] relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Visby_CF-Bold',Helvetica] font-bold text-token-colors-text-color text-[28px] tracking-[0] leading-[33.6px] whitespace-nowrap">
                              Free
                            </div>
                            <div className="relative w-fit [font-family:'Visby_CF-Regular',Helvetica] font-normal text-primitives-colors-rich-black-200 text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                              /for trial period
                            </div>
                          </div>
                          <div className="gap-[20px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                            <PricingOffer
                              className="!flex-[0_0_auto]"
                              divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                              text="100 Numbers / day"
                            />
                            <PricingOffer
                              className="!flex-[0_0_auto]"
                              divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                              text="$19.99 / Maximum Recharge"
                            />
                            <PricingOffer
                              className="!flex-[0_0_auto]"
                              divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                              text="3 Countries"
                            />
                            <PricingOffer
                              className="!flex-[0_0_auto]"
                              divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                              text="No Bulk Sending"
                            />
                            <PricingOffer
                              className="!flex-[0_0_auto]"
                              divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                              text="No Sub-Clients"
                            />
                          </div>
                          <Button
                            button="Choose Plan"
                            className="!self-stretch !h-[52px] !pt-[var(--primitives-spacing-4-grid-5)] !pb-[var(--primitives-spacing-4-grid-5)] !px-[16px] !flex !w-full"
                            divClassName="!mt-[-4.50px] !mb-[-2.50px]"
                            hasLeftIcon={false}
                            hasRightIcon={false}
                            property1="btn-outline"
                          />
                        </div>
                        <div className="h-[550px] px-[22.49px] py-[40.88px] top-0 left-[242px] bg-[#04773b] border-[1.23px] border-solid border-token-bg-green inline-flex flex-col items-start justify-between absolute rounded-[12px]">
                          <img
                            className="relative w-[41px] h-[41.5px] object-cover"
                            alt="Image"
                            src="/img/image-14-1.png"
                          />
                          <div className="w-[226px] gap-[5.11px] flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="relative self-stretch mt-[-1.02px] [font-family:'Visby_CF-Bold',Helvetica] font-bold text-token-colors-secondary-surface text-[18.4px] tracking-[0] leading-[22.1px]">
                              Business
                            </div>
                            <p className="relative self-stretch [font-family:'Visby_CF-Regular',Helvetica] font-normal text-token-colors-secondary-surface text-[14px] tracking-[0] leading-[16.8px]">
                              Perfect for small businesses and regular users.
                            </p>
                          </div>
                          <div className="inline-flex items-end justify-end gap-[4px] relative flex-[0_0_auto]">
                            <div className="mt-[-1.02px] text-token-colors-secondary-surface text-[28px] leading-[33.6px] relative w-fit [font-family:'Visby_CF-Bold',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                              10,99 $
                            </div>
                            <div className="text-[#ffffffcc] relative w-fit [font-family:'Visby_CF-Regular',Helvetica] font-normal text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                              /month
                            </div>
                          </div>
                          <div className="gap-[20.44px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                            <PricingOffer
                              className="!gap-[5.11px] !flex-[0_0_auto]"
                              divClassName="!mt-[-0.32px] !text-[#ffffffcc] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                              text="200 Numbers / day"
                            />
                            <PricingOffer
                              className="!gap-[5.11px] !flex-[0_0_auto]"
                              divClassName="!mt-[-0.32px] !text-[#ffffffcc] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                              text="20 $ as Maximum Recharge"
                            />
                            <PricingOffer
                              className="!gap-[5.11px] !flex-[0_0_auto]"
                              divClassName="!mt-[-0.32px] !text-[#ffffffcc] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                              text="10 Countries"
                            />
                            <PricingOffer
                              className="!gap-[5.11px] !flex-[0_0_auto]"
                              divClassName="!mt-[-0.32px] !text-[#ffffffcc] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                              text="Bulk Sending Present"
                            />
                            <PricingOffer
                              className="!gap-[5.11px] !flex-[0_0_auto]"
                              divClassName="!mt-[-0.32px] !text-[#ffffffcc] !text-[14px] !leading-[16.8px]"
                              icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                              text="2 Sub-Clients / Country"
                            />
                          </div>
                          <Button
                            button="Choose Plan"
                            className="!self-stretch !h-[43.66px] !pt-[var(--primitives-spacing-4-grid-5)] !pr-[var(--primitives-spacing-4-grid-6)] !pb-[var(--primitives-spacing-4-grid-5)] !pl-[var(--primitives-spacing-4-grid-6)] !flex !bg-[color:var(--token-colors-primary-surface)] !w-full"
                            divClassNameOverride="!mt-[-9.19px] !text-[color:var(--primitives-colors-dark-spring-green-500)] !mb-[-7.15px]"
                            property1="default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {screenWidth >= 1440 && (
                <>
                  <div className="flex flex-col items-center gap-[10px] px-[150px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="self-stretch mt-[-1.00px] text-grey-10 text-[38px] text-center leading-[45.6px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                      Enjoy Unique Advantages
                    </div>
                    <p className="self-stretch font-medium text-grey-30 text-[16px] text-center leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Simplify communication for your employees, family, or customers with our fast, reliable, and
                      secure bulk airtime solution.
                    </p>
                  </div>
                  <img
                    className="relative w-[1296px] h-[434px] mr-[-16.00px] object-cover"
                    alt="Image"
                    src="/img/image-3.png"
                  />
                  <div className="flex-col items-start gap-[20px] self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="flex items-start gap-[20px] p-[40px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[16px] border border-solid border-white-95">
                      <div className="items-start justify-end gap-[20px] p-[30px] flex-1 grow bg-white-99 rounded-[16px] border border-solid border-white-95 flex relative">
                        <div className="flex flex-col items-start justify-center gap-[8px] relative flex-1 grow">
                          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="w-[234px] mt-[-1.00px] text-grey-15 text-[18px] leading-[27px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                              Trusted Network Partnerships
                            </div>
                            <img
                              className="relative w-[27.5px] h-[24.14px] mr-[-1.00px]"
                              alt="Group"
                              src="/img/group-33.png"
                            />
                          </div>
                          <p className="self-stretch font-medium text-grey-30 text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            Benefit from our extensive network of leading mobile operators, ensuring wider coverage and
                            reliable connections.
                          </p>
                        </div>
                      </div>
                      <div className="items-start justify-end gap-[20px] p-[30px] flex-1 self-stretch grow bg-white-99 rounded-[16px] border border-solid border-white-95 flex relative">
                        <div className="flex flex-col items-start justify-center gap-[8px] relative flex-1 grow">
                          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="w-[287px] mt-[-1.00px] text-grey-15 text-[18px] leading-[27px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                              Unwavering Security &amp; Compliance:
                            </div>
                            <div className="relative w-[23.22px] h-[24px]">
                              <div className="relative w-[23px] h-[24px]">
                                <div className="absolute w-[23px] h-[15px] top-[9px] left-0">
                                  <div className="relative w-[24px] h-[15px]">
                                    <img
                                      className="w-[23px] h-[8px] top-[7px] absolute left-0"
                                      alt="Subtract"
                                      src="/img/subtract-5.svg"
                                    />
                                    <div className="absolute w-[23px] h-[14px] top-0 left-0 rounded-[11.61px/7.05px] shadow-[inset_0px_0.5px_1px_#0000001a] [background:radial-gradient(50%_50%_at_50%_50%,rgb(101,221,145)_0%,rgb(205.06,255,223.36)_100%)]" />
                                    <img
                                      className="w-[24px] h-[7px] top-[8px] absolute left-0"
                                      alt="Subtract"
                                      src="/img/subtract-4.svg"
                                    />
                                  </div>
                                </div>
                                <div className="absolute w-[23px] h-[15px] top-[5px] left-0">
                                  <div className="relative w-[24px] h-[15px]">
                                    <img
                                      className="w-[23px] h-[8px] top-[7px] absolute left-0"
                                      alt="Subtract"
                                      src="/img/subtract-3.svg"
                                    />
                                    <div className="absolute w-[23px] h-[14px] top-0 left-0 bg-[#e4e8f366] rounded-[11.61px/7.05px] shadow-[inset_0px_0.5px_1px_#5759931a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]" />
                                    <img
                                      className="w-[24px] h-[7px] top-[8px] absolute left-0"
                                      alt="Subtract"
                                      src="/img/subtract-2.svg"
                                    />
                                  </div>
                                </div>
                                <div className="absolute w-[23px] h-[15px] top-0 left-0">
                                  <div className="relative w-[24px] h-[15px]">
                                    <img
                                      className="w-[23px] h-[8px] top-[7px] absolute left-0"
                                      alt="Subtract"
                                      src="/img/subtract-1.svg"
                                    />
                                    <div className="absolute w-[23px] h-[14px] top-0 left-0 bg-[#e4e8f366] rounded-[11.61px/7.05px] shadow-[inset_0px_0.5px_1px_#5759931a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]" />
                                    <img
                                      className="w-[24px] h-[7px] top-[8px] absolute left-0"
                                      alt="Subtract"
                                      src="/img/subtract.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="self-stretch font-medium text-grey-30 text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            Industry-standard security protocols and strict data privacy compliance guarantee peace of
                            mind for every transaction.
                          </p>
                        </div>
                      </div>
                      <div className="items-start justify-end gap-[20px] p-[30px] flex-1 self-stretch grow bg-white-99 rounded-[16px] border border-solid border-white-95 flex relative">
                        <div className="flex flex-col items-start justify-center gap-[8px] relative flex-1 grow">
                          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="w-[247px] mt-[-1.00px] text-grey-15 text-[18px] leading-[27px] relative [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                              Detailed Reporting &amp; Analytics:
                            </div>
                            <img
                              className="relative w-[28.9px] h-[24.17px] mr-[-0.99px]"
                              alt="Group"
                              src="/img/group-25.svg"
                            />
                          </div>
                          <p className="self-stretch font-medium text-grey-30 text-[16px] leading-[24px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                            Access comprehensive reports to manage your airtime sending effectively and optimize future
                            transactions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div
              className={`flex flex-col gap-[40px] absolute ${
                screenWidth >= 834 && screenWidth < 1440 ? "w-[754px]" : screenWidth >= 1440 ? "w-[1280px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "left-[28px]" : screenWidth >= 1440 ? "left-[80px]" : ""
              } ${screenWidth >= 834 && screenWidth < 1440 ? "items-center" : screenWidth >= 1440 ? "items-end" : ""} ${
                screenWidth >= 834 && screenWidth < 1440 ? "top-[5992px]" : screenWidth >= 1440 ? "top-[5280px]" : ""
              }`}
            >
              <div
                className={`w-full flex self-stretch flex-col items-center flex-[0_0_auto] px-[150px] py-0 relative ${
                  screenWidth >= 834 && screenWidth < 1440 ? "gap-[5px]" : screenWidth >= 1440 ? "gap-[10px]" : ""
                }`}
              >
                <div
                  className={`[font-family:'Urbanist',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-grey-10 relative font-semibold text-center ${
                    screenWidth >= 834 && screenWidth < 1440 ? "text-[30px]" : screenWidth >= 1440 ? "text-[38px]" : ""
                  } ${
                    screenWidth >= 834 && screenWidth < 1440
                      ? "leading-[36.0px]"
                      : screenWidth >= 1440
                      ? "leading-[45.6px]"
                      : ""
                  }`}
                >
                  Frequently Asked Questions
                </div>
                <p
                  className={`[font-family:'Urbanist',Helvetica] tracking-[0] text-[16px] text-grey-30 relative font-medium text-center leading-[24px] ${
                    screenWidth >= 834 && screenWidth < 1440 ? "w-[653px]" : ""
                  } ${screenWidth >= 1440 ? "self-stretch" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "mr-[-99.50px]" : ""
                  } ${screenWidth >= 834 && screenWidth < 1440 ? "ml-[-99.50px]" : ""}`}
                >
                  Curious to know more about ForHelp and our mission? Look no further! We&#39;ve compiled a list of
                  frequently asked questions to provide you with the answers you seek.
                </p>
              </div>
              <div
                className={`border border-solid border-white-95 w-full flex self-stretch flex-col items-start gap-[24px] flex-[0_0_auto] rounded-[16px] bg-white-97 relative ${
                  screenWidth >= 834 && screenWidth < 1440 ? "p-[40px]" : screenWidth >= 1440 ? "p-[60px]" : ""
                }`}
              >
                <FaqCard
                  answer="In all countries in the world ......"
                  className={
                    screenWidth >= 834 && screenWidth < 1440
                      ? "!self-stretch !rounded-[var(--tokens-spacing-4-pt-4)] !gap-[25px] !flex-[0_0_auto] !px-[40px] !py-[20px] !w-full"
                      : screenWidth >= 1440
                      ? "!flex-[0_0_auto]"
                      : undefined
                  }
                  number="01"
                  property1="dropped"
                  question="What countries can I send airtime to?"
                />
                <FaqCard
                  button="/img/button-16.svg"
                  className={
                    screenWidth >= 834 && screenWidth < 1440
                      ? "!self-stretch !rounded-[var(--tokens-spacing-4-pt-4)] !gap-[25px] !flex-[0_0_auto] !px-[40px] !py-[20px] !w-full"
                      : screenWidth >= 1440
                      ? "!flex-[0_0_auto]"
                      : undefined
                  }
                  headingClassNameOverride="!text-[#333333]"
                  number="02"
                  property1="default"
                  question="What are the payment methods available?"
                />
                <FaqCard
                  button="/img/button-16.svg"
                  className={
                    screenWidth >= 834 && screenWidth < 1440
                      ? "!self-stretch !rounded-[var(--tokens-spacing-4-pt-4)] !gap-[25px] !flex-[0_0_auto] !px-[40px] !py-[20px] !w-full"
                      : screenWidth >= 1440
                      ? "!flex-[0_0_auto]"
                      : undefined
                  }
                  headingClassNameOverride="!text-[#333333]"
                  number="03"
                  property1="default"
                  question="Is there a minimum or maximum amount I can send?"
                />
                <FaqCard
                  button="/img/button-16.svg"
                  className={
                    screenWidth >= 834 && screenWidth < 1440
                      ? "!self-stretch !rounded-[var(--tokens-spacing-4-pt-4)] !gap-[25px] !flex-[0_0_auto] !px-[40px] !py-[20px] !w-full"
                      : screenWidth >= 1440
                      ? "!flex-[0_0_auto]"
                      : undefined
                  }
                  headingClassNameOverride="!text-[#333333]"
                  number="04"
                  property1="default"
                  question="Do you offer customer support?"
                />
                <FaqCard
                  button="/img/button-16.svg"
                  className={
                    screenWidth >= 834 && screenWidth < 1440
                      ? "!self-stretch !rounded-[var(--tokens-spacing-4-pt-4)] !gap-[25px] !flex-[0_0_auto] !px-[40px] !py-[20px] !w-full"
                      : screenWidth >= 1440
                      ? "!flex-[0_0_auto]"
                      : undefined
                  }
                  headingClassNameOverride="!text-[#333333]"
                  number="05"
                  property1="default"
                  question="Are there any hidden fees or charges?"
                />
              </div>
            </div>
            <div
              className={`flex flex-col items-center gap-[40px] px-[40px] py-[100px] overflow-hidden rounded-[16px] bg-green-70 absolute ${
                screenWidth >= 834 && screenWidth < 1440 ? "w-[756px]" : screenWidth >= 1440 ? "w-[1280px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "left-[28px]" : screenWidth >= 1440 ? "left-[80px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "top-[6861px]" : screenWidth >= 1440 ? "top-[6404px]" : ""
              }`}
            >
              <div className="w-full flex self-stretch flex-col items-center gap-[10px] flex-[0_0_auto] px-[200px] py-0 relative">
                <p
                  className={`[font-family:'Urbanist',Helvetica] mt-[-1.00px] tracking-[0] text-grey-10 relative font-semibold text-center ${
                    screenWidth >= 834 && screenWidth < 1440 ? "w-[644px]" : ""
                  } ${screenWidth >= 1440 ? "self-stretch" : ""} ${
                    screenWidth >= 1440 ? "text-[38px]" : screenWidth >= 834 && screenWidth < 1440 ? "text-[30px]" : ""
                  } ${screenWidth >= 834 && screenWidth < 1440 ? "mr-[-184.00px]" : ""} ${
                    screenWidth >= 834 && screenWidth < 1440 ? "ml-[-184.00px]" : ""
                  } ${
                    screenWidth >= 1440
                      ? "leading-[45.6px]"
                      : screenWidth >= 834 && screenWidth < 1440
                      ? "leading-[36.0px]"
                      : ""
                  }`}
                >
                  Get Started With All In One Revolutionary Integrated Tool
                </p>
                <p
                  className={`[font-family:'Urbanist',Helvetica] w-[656px] tracking-[0] text-[16px] text-grey-30 relative font-medium text-center leading-[24px] ${
                    screenWidth >= 834 && screenWidth < 1440 ? "mr-[-190.00px]" : ""
                  } ${screenWidth >= 834 && screenWidth < 1440 ? "ml-[-190.00px]" : ""}`}
                >
                  Simplify communication for your employees, family, or customers with our fast, reliable, and secure
                  bulk airtime solution.
                </p>
              </div>
              {screenWidth >= 1440 && (
                <div className="w-[440px] items-center justify-between pl-[24px] pr-[8px] py-[8px] flex-[0_0_auto] bg-green-90 rounded-[100px] flex relative">
                  <div className="w-fit [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[16px] leading-[24px] whitespace-nowrap relative tracking-[0]">
                    Email Address
                  </div>
                  <button className="all-[unset] box-border inline-flex items-center gap-[10px] pl-[20px] pr-[8px] py-[8px] bg-green-70 rounded-[100px] relative flex-[0_0_auto]">
                    <div className="w-fit [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[14px] leading-[21px] whitespace-nowrap relative tracking-[0]">
                      Get Connected
                    </div>
                    <img className="relative flex-[0_0_auto]" alt="Icon container" src="/img/icon-container-1.svg" />
                  </button>
                  <img
                    className="absolute w-[37px] h-[40px] top-[-12px] left-[429px]"
                    alt="Abstract design"
                    src="/img/abstract-design-2.svg"
                  />
                </div>
              )}

              <img
                className={`absolute ${
                  screenWidth >= 834 && screenWidth < 1440 ? "w-[506px]" : screenWidth >= 1440 ? "w-[532px]" : ""
                } ${
                  screenWidth >= 834 && screenWidth < 1440 ? "left-[250px]" : screenWidth >= 1440 ? "left-[748px]" : ""
                } ${
                  screenWidth >= 834 && screenWidth < 1440 ? "top-[125px]" : screenWidth >= 1440 ? "top-[110px]" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "h-[315px]" : screenWidth >= 1440 ? "h-[350px]" : ""}`}
                alt="Abstract design"
                src={
                  screenWidth >= 834 && screenWidth < 1440
                    ? "/img/abstract-design-8.svg"
                    : screenWidth >= 1440
                    ? "/img/abstract-design-1.svg"
                    : undefined
                }
              />
              <img
                className={`left-0 absolute ${
                  screenWidth >= 834 && screenWidth < 1440 ? "w-[509px]" : screenWidth >= 1440 ? "w-[562px]" : ""
                } ${
                  screenWidth >= 834 && screenWidth < 1440 ? "top-[106px]" : screenWidth >= 1440 ? "top-[110px]" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "h-[334px]" : screenWidth >= 1440 ? "h-[350px]" : ""}`}
                alt="Abstract design"
                src={
                  screenWidth >= 834 && screenWidth < 1440
                    ? "/img/abstract-design-7.svg"
                    : screenWidth >= 1440
                    ? "/img/abstract-design.svg"
                    : undefined
                }
              />
              {screenWidth >= 834 && screenWidth < 1440 && (
                <div className="flex w-[440px] items-center justify-between pl-[24px] pr-[8px] py-[8px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                  <div className="w-fit [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[16px] leading-[24px] whitespace-nowrap relative tracking-[0]">
                    Email Address
                  </div>
                  <button className="all-[unset] box-border inline-flex items-center gap-[10px] pl-[20px] pr-[8px] py-[8px] bg-green-70 rounded-[100px] relative flex-[0_0_auto]">
                    <div className="w-fit [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[14px] leading-[21px] whitespace-nowrap relative tracking-[0]">
                      Get Connected
                    </div>
                    <img className="relative flex-[0_0_auto]" alt="Icon container" src="/img/icon-container-1.svg" />
                  </button>
                  <img
                    className="absolute w-[37px] h-[40px] top-[-12px] left-[429px]"
                    alt="Abstract design"
                    src="/img/abstract-design-6.svg"
                  />
                </div>
              )}
            </div>
            <footer
              className={`flex flex-col items-start gap-[24px] pt-0 pb-[20px] px-0 bg-transparent absolute ${
                screenWidth >= 834 && screenWidth < 1440 ? "w-[754px]" : screenWidth >= 1440 ? "w-[1280px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "left-[44px]" : screenWidth >= 1440 ? "left-[80px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "top-[7439px]" : screenWidth >= 1440 ? "top-[7002px]" : ""
              }`}
            >
              <div className="border border-solid border-white-95 w-full flex self-stretch items-center flex-[0_0_auto] p-[16px] rounded-[100px] justify-between bg-white-99 relative">
                <img
                  className="w-[99.37px] object-cover h-[32px] relative"
                  alt="Asset"
                  src="/img/asset-2-300x-1-8.png"
                />
                <div className="inline-flex items-start gap-[16px] flex-[0_0_auto] relative">
                  <div className="[font-family:'Urbanist',Helvetica] w-fit mt-[-1.00px] tracking-[-0.08px] text-[14px] text-grey-15 font-medium leading-[24px] whitespace-nowrap relative">
                    Home
                  </div>
                  <div className="[font-family:'Urbanist',Helvetica] w-fit mt-[-1.00px] tracking-[-0.08px] text-[14px] text-grey-15 font-medium leading-[24px] whitespace-nowrap relative">
                    Integration
                  </div>
                  <div className="[font-family:'Urbanist',Helvetica] w-fit mt-[-1.00px] tracking-[-0.08px] text-[14px] text-grey-15 font-medium leading-[24px] whitespace-nowrap relative">
                    Pricing
                  </div>
                </div>
              </div>
              <p className="[font-family:'Urbanist',Helvetica] self-stretch tracking-[0] text-[14px] text-transparent relative font-normal text-right leading-[21px]">
                <span className="text-[#646467]">© 2024 Airo. Design &amp; Developed by </span>
                <span className="text-[#ff9f2e]">Kaeyros Analytics </span>
                <span className="text-[#646467]"> All rights reserved.</span>
              </p>
            </footer>
            <div
              className={`flex-col absolute ${screenWidth >= 834 && screenWidth < 1440 ? "border border-solid" : ""} ${
                screenWidth >= 834 && screenWidth < 1440 ? "border-[#e6e6e6]" : ""
              } ${screenWidth >= 834 && screenWidth < 1440 ? "w-[755px]" : ""} ${
                screenWidth >= 834 && screenWidth < 1440 ? "flex" : screenWidth >= 1440 ? "inline-flex" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "left-[49px]" : screenWidth >= 1440 ? "left-[80px]" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "items-center" : screenWidth >= 1440 ? "items-start" : ""
              } ${
                screenWidth >= 834 && screenWidth < 1440 ? "top-[4742px]" : screenWidth >= 1440 ? "top-[4489px]" : ""
              } ${screenWidth >= 834 && screenWidth < 1440 ? "gap-[50px]" : screenWidth >= 1440 ? "gap-[42px]" : ""} ${
                screenWidth >= 834 && screenWidth < 1440 ? "px-[200px] py-[40px]" : ""
              } ${screenWidth >= 834 && screenWidth < 1440 ? "h-[312px]" : ""} ${
                screenWidth >= 834 && screenWidth < 1440 ? "rounded-[16px]" : ""
              } ${screenWidth >= 834 && screenWidth < 1440 ? "justify-center" : ""} ${
                screenWidth >= 834 && screenWidth < 1440 ? "bg-[#fcfcfd]" : ""
              }`}
            >
              <div
                className={`flex flex-col items-center flex-[0_0_auto] relative ${
                  screenWidth >= 834 && screenWidth < 1440 ? "w-[563px]" : screenWidth >= 1440 ? "w-full" : ""
                } ${screenWidth >= 1440 ? "self-stretch" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "mr-[-104.00px]" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "gap-[6px]" : screenWidth >= 1440 ? "gap-[10px]" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "ml-[-104.00px]" : ""
                } ${screenWidth >= 1440 ? "px-[150px] py-0" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "justify-center" : ""
                }`}
              >
                <div
                  className={`[font-family:'Urbanist',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-grey-10 relative font-semibold text-center ${
                    screenWidth >= 834 && screenWidth < 1440 ? "text-[30px]" : screenWidth >= 1440 ? "text-[38px]" : ""
                  } ${
                    screenWidth >= 834 && screenWidth < 1440
                      ? "leading-[36.0px]"
                      : screenWidth >= 1440
                      ? "leading-[45.6px]"
                      : ""
                  }`}
                >
                  {screenWidth >= 834 && screenWidth < 1440 && <p>All in one device integration</p>}

                  {screenWidth >= 1440 && <>Choose Your Pricing plan</>}
                </div>
                <p
                  className={`[font-family:'Urbanist',Helvetica] tracking-[0] text-[16px] text-grey-30 relative font-medium text-center leading-[24px] ${
                    screenWidth >= 834 && screenWidth < 1440 ? "w-[505px]" : ""
                  } ${screenWidth >= 1440 ? "self-stretch" : ""}`}
                >
                  Simplify communication for your employees, family, or customers with our fast, reliable, and secure
                  bulk airtime solution.
                </p>
              </div>
              <div
                className={`${screenWidth >= 834 && screenWidth < 1440 ? "w-[14px]" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "left-[371px]" : ""
                } ${screenWidth >= 1440 ? "inline-flex" : ""} ${screenWidth >= 1440 ? "flex-col" : ""} ${
                  screenWidth >= 1440 ? "items-center" : ""
                } ${screenWidth >= 834 && screenWidth < 1440 ? "top-0" : ""} ${
                  screenWidth >= 1440 ? "gap-[24px]" : ""
                } ${screenWidth >= 1440 ? "flex-[0_0_auto]" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "h-[78px]" : ""
                } ${screenWidth >= 1440 ? "justify-center" : ""} ${
                  screenWidth >= 834 && screenWidth < 1440 ? "absolute" : screenWidth >= 1440 ? "relative" : ""
                }`}
              >
                {screenWidth >= 834 && screenWidth < 1440 && (
                  <div className="relative h-[78px]">
                    <img className="absolute w-px h-[71px] top-0 left-[6px]" alt="Vector" src="/img/vector-432-1.svg" />
                    <div className="absolute w-[14px] h-[14px] top-[64px] left-0 bg-white rounded-[4px] shadow-[0px_2px_14px_10px_#65dd9166]" />
                  </div>
                )}

                {screenWidth >= 1440 && (
                  <>
                    <div className="inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]">
                      <div className="relative w-fit font-link-link-regular font-[number:var(--link-link-regular-font-weight)] text-black text-[length:var(--link-link-regular-font-size)] tracking-[var(--link-link-regular-letter-spacing)] leading-[var(--link-link-regular-line-height)] whitespace-nowrap [font-style:var(--link-link-regular-font-style)]">
                        Monthly
                      </div>
                      <div className="flex w-[61px] items-center justify-center gap-[10px] relative bg-[#04773b] rounded-[80px]">
                        <div className="flex items-start justify-end gap-[10px] p-[2px] relative flex-1 grow rounded-[220px]">
                          <div className="relative w-[24px] h-[24px] bg-white rounded-[12px]" />
                        </div>
                      </div>
                      <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-link-link-regular font-[number:var(--link-link-regular-font-weight)] text-black text-[length:var(--link-link-regular-font-size)] tracking-[var(--link-link-regular-letter-spacing)] leading-[var(--link-link-regular-line-height)] whitespace-nowrap [font-style:var(--link-link-regular-font-style)]">
                          Annually:
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Articulat_CF-Bold',Helvetica] font-bold text-[#04773b] text-[18px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                          Save 30%
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[1280px] items-center gap-[12px] relative flex-[0_0_auto]">
                      <div className="h-[541.2px] px-[22px] py-[40px] ml-[-0.60px] border-[1.2px] border-solid border-token-border-color flex flex-col items-start justify-between relative flex-1 grow rounded-[var(--primitives-spacing-4-grid-3)]">
                        <img
                          className="relative w-[40px] h-[40.5px] object-cover"
                          alt="Image"
                          src="/img/image-13.png"
                        />
                        <div className="w-[288px] gap-[5px] flex flex-col items-start relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Visby_CF-Bold',Helvetica] font-bold text-token-colors-text-color text-[18px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                            Standard
                          </div>
                          <p className="relative w-[272px] [font-family:'Visby_CF-Regular',Helvetica] font-normal text-token-colors-text-color text-[16px] tracking-[0] leading-[19.2px]">
                            Perfect for individuals and occasional users.
                          </p>
                        </div>
                        <div className="gap-[8px] inline-flex items-end justify-end relative flex-[0_0_auto]">
                          <div className="mt-[-1.00px] text-token-colors-text-color text-[40px] leading-[48.0px] relative w-fit [font-family:'Visby_CF-Bold',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                            Free
                          </div>
                          <div className="relative w-fit [font-family:'Visby_CF-Regular',Helvetica] font-normal text-primitives-colors-rich-black-200 text-[16px] tracking-[0] leading-[19.2px] whitespace-nowrap">
                            /for trial period
                          </div>
                        </div>
                        <div className="gap-[20px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                          <PricingOffer
                            className="!flex-[0_0_auto]"
                            icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                            text="100 Numbers / day"
                          />
                          <PricingOffer
                            className="!flex-[0_0_auto]"
                            icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                            text="$19.99 / Maximum Recharge"
                          />
                          <PricingOffer
                            className="!flex-[0_0_auto]"
                            icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                            text="3 Countries"
                          />
                          <PricingOffer
                            className="!flex-[0_0_auto]"
                            icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                            text="No Bulk Sending"
                          />
                          <PricingOffer
                            className="!flex-[0_0_auto]"
                            icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                            text="No Sub-Clients"
                          />
                        </div>
                        <Button
                          button="Choose Plan"
                          className="!self-stretch !h-[52px] !pt-[var(--primitives-spacing-4-grid-5)] !pb-[var(--primitives-spacing-4-grid-5)] !px-[16px] !flex !w-full"
                          divClassName="!mt-[-4.50px] !mb-[-2.50px]"
                          hasLeftIcon={false}
                          hasRightIcon={false}
                          property1="btn-outline"
                        />
                      </div>
                      <div className="h-[550.23px] px-[22.49px] py-[40.88px] mt-[-0.61px] mb-[-0.61px] bg-[#04773b] border-[1.23px] border-solid border-token-bg-green flex flex-col items-start justify-between relative flex-1 grow rounded-[12px]">
                        <img
                          className="relative w-[41px] h-[41.5px] object-cover"
                          alt="Image"
                          src="/img/image-14.png"
                        />
                        <div className="w-[294.36px] gap-[5.11px] flex flex-col items-start relative flex-[0_0_auto]">
                          <div className="mt-[-1.02px] text-token-colors-secondary-surface text-[18.4px] leading-[22.1px] relative w-fit [font-family:'Visby_CF-Bold',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                            Business
                          </div>
                          <p className="relative w-[278.01px] [font-family:'Visby_CF-Regular',Helvetica] font-normal text-token-colors-secondary-surface text-[16.4px] tracking-[0] leading-[19.6px]">
                            Perfect for small businesses and regular users.
                          </p>
                        </div>
                        <div className="gap-[8.18px] inline-flex items-end justify-end relative flex-[0_0_auto]">
                          <div className="mt-[-1.02px] text-token-colors-secondary-surface text-[40.9px] leading-[49.1px] relative w-fit [font-family:'Visby_CF-Bold',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                            10,99 $
                          </div>
                          <div className="relative w-fit [font-family:'Visby_CF-Regular',Helvetica] font-normal text-[#ffffffcc] text-[16.4px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                            /month
                          </div>
                        </div>
                        <div className="gap-[20.44px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                          <PricingOffer
                            className="!gap-[5.11px] !flex-[0_0_auto]"
                            divClassName="!mt-[-1.02px] !text-[#ffffffcc] !text-[16.4px] !leading-[19.6px]"
                            icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                            text="200 Numbers / day"
                          />
                          <PricingOffer
                            className="!gap-[5.11px] !flex-[0_0_auto]"
                            divClassName="!mt-[-1.02px] !text-[#ffffffcc] !text-[16.4px] !leading-[19.6px]"
                            icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                            text="20 $ as Maximum Recharge"
                          />
                          <PricingOffer
                            className="!gap-[5.11px] !flex-[0_0_auto]"
                            divClassName="!mt-[-1.02px] !text-[#ffffffcc] !text-[16.4px] !leading-[19.6px]"
                            icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                            text="10 Countries"
                          />
                          <PricingOffer
                            className="!gap-[5.11px] !flex-[0_0_auto]"
                            divClassName="!mt-[-1.02px] !text-[#ffffffcc] !text-[16.4px] !leading-[19.6px]"
                            icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                            text="Bulk Sending Present"
                          />
                          <PricingOffer
                            className="!gap-[5.11px] !flex-[0_0_auto]"
                            divClassName="!mt-[-1.02px] !text-[#ffffffcc] !text-[16.4px] !leading-[19.6px]"
                            icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                            text="2 Sub-Clients / Country"
                          />
                        </div>
                        <Button
                          button="Choose Plan"
                          className="!self-stretch !h-[52px] !pt-[var(--primitives-spacing-4-grid-5)] !pr-[var(--primitives-spacing-4-grid-6)] !pb-[var(--primitives-spacing-4-grid-5)] !pl-[var(--primitives-spacing-4-grid-6)] !flex !bg-[color:var(--token-colors-primary-surface)] !w-full"
                          divClassNameOverride="!mt-[-5.02px] !text-[color:var(--primitives-colors-dark-spring-green-500)] !mb-[-2.98px]"
                          property1="default"
                        />
                      </div>
                      <div className="h-[541.2px] px-[22px] py-[40px] mr-[-0.60px] border-[1.2px] border-solid border-token-border-color flex flex-col items-start justify-between relative flex-1 grow rounded-[var(--primitives-spacing-4-grid-3)]">
                        <img
                          className="relative w-[40.5px] h-[40.5px] object-cover"
                          alt="Image"
                          src="/img/image-15.png"
                        />
                        <div className="w-[288px] gap-[5px] flex flex-col items-start relative flex-[0_0_auto]">
                          <div className="mt-[-1.00px] text-token-colors-text-color text-[18px] leading-[21.6px] relative w-fit [font-family:'Visby_CF-Bold',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                            Enterprise
                          </div>
                          <div className="relative w-[272px] [font-family:'Visby_CF-Regular',Helvetica] font-normal text-token-colors-text-color text-[16px] tracking-[0] leading-[19.2px]">
                            Perfect for companies.
                          </div>
                        </div>
                        <div className="gap-[8px] inline-flex items-end justify-end relative flex-[0_0_auto]">
                          <div className="mt-[-1.00px] text-token-colors-text-color text-[40px] leading-[48.0px] relative w-fit [font-family:'Visby_CF-Bold',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                            49,99 $
                          </div>
                          <div className="relative w-fit [font-family:'Visby_CF-Regular',Helvetica] font-normal text-primitives-colors-rich-black-200 text-[16px] tracking-[0] leading-[19.2px] whitespace-nowrap">
                            /month
                          </div>
                        </div>
                        <div className="gap-[20px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                          <PricingOffer
                            className="!flex-[0_0_auto]"
                            icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                            text="Unlimited Numbers"
                          />
                          <PricingOffer
                            className="!flex-[0_0_auto]"
                            icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                            text="Unlimited Recharge Amount"
                          />
                          <PricingOffer
                            className="!flex-[0_0_auto]"
                            icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                            text="50 + Countries"
                          />
                          <PricingOffer
                            className="!flex-[0_0_auto]"
                            icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                            text="Bulk Sending Present"
                          />
                          <PricingOffer
                            className="!flex-[0_0_auto]"
                            icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                            text="50 Sub Clients / Country"
                          />
                        </div>
                        <Button
                          button="Choose Plan"
                          className="!self-stretch !h-[52px] !pt-[var(--primitives-spacing-4-grid-5)] !pb-[var(--primitives-spacing-4-grid-5)] !px-[16px] !flex !w-full"
                          divClassName="!mt-[-4.50px] !mb-[-2.50px]"
                          hasLeftIcon={false}
                          hasRightIcon={false}
                          property1="btn-outline"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <Navbar
              className={
                screenWidth >= 834 && screenWidth < 1440
                  ? "!pt-[var(--tokens-spacing-4-pt-2)] !pr-[var(--tokens-spacing-4-pt-3)] !pb-[var(--tokens-spacing-4-pt-2)] !pl-[var(--tokens-spacing-4-pt-3)] !fixed !left-[39px] !top-[29px]"
                  : screenWidth >= 1440
                  ? "!fixed !left-[79px] !top-[29px]"
                  : undefined
              }
              property1={
                screenWidth >= 834 && screenWidth < 1440 ? "tablet" : screenWidth >= 1440 ? "default" : undefined
              }
            />
          </>
        )}

        {screenWidth < 834 && (
          <>
            <div className="absolute w-[423px] h-[312px] top-[330px] left-px overflow-hidden overflow-x-scroll">
              <div className="flex flex-col w-[180px] items-start gap-[9.45px] absolute top-[87px] left-[23px]">
                <img className="relative self-stretch w-full h-[183.09px]" alt="Image" src="/img/image-18.svg" />
                <div className="flex items-center gap-[5.91px] pl-[3.54px] pr-[11.81px] py-[3.54px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[59.06px] border-[0.59px] border-solid border-white-95">
                  <img className="relative flex-[0_0_auto]" alt="Icon container" src="/img/icon-container-8.svg" />
                  <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-semibold text-grey-10 text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    Send airtime in bulk
                  </div>
                </div>
                <img
                  className="absolute w-[22px] h-[24px] top-[-21px] left-[-17px]"
                  alt="Abstract design"
                  src="/img/abstract-design-17.svg"
                />
              </div>
              <div className="flex flex-col w-[180px] items-end gap-[9.45px] absolute top-[154px] left-[215px]">
                <img
                  className="absolute w-[16px] h-[18px] top-[-30px] -left-px"
                  alt="Abstract design"
                  src="/img/abstract-design-16.svg"
                />
                <div className="flex items-center gap-[5.91px] px-[11.81px] py-[9.45px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[59.06px] border-[0.59px] border-solid border-white-95">
                  <p className="relative flex-1 mt-[-0.59px] [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[12px] tracking-[0] leading-[18px]">
                    Instant Send in one click
                  </p>
                </div>
                <div className="flex flex-col items-start gap-[2.36px] p-[14.18px] relative self-stretch w-full flex-[0_0_auto] bg-[#65dd91] rounded-[9.45px]">
                  <div className="self-stretch mt-[-0.59px] font-semibold text-[18.9px] leading-[28.3px] relative [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                    2x Faster
                  </div>
                  <p className="relative self-stretch font-medium text-[#333333] text-[12px] leading-[18px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                    Send airtime in bulk from in single touch from any location to many destination
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-[180px] items-end gap-[9.45px] absolute top-[110px] left-[407px]">
                <div className="flex flex-col items-center gap-[11.81px] p-[23.62px] relative self-stretch w-full flex-[0_0_auto] bg-[#65dd91] rounded-[9.45px]">
                  <img className="relative flex-[0_0_auto]" alt="Icon container" src="/img/icon-container-11.png" />
                  <div className="flex flex-col items-center gap-[2.36px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-0.59px] text-grey-10 text-[14px] text-center leading-[21px] [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                      Global Reach
                    </div>
                    <p className="relative w-[138px] ml-[-2.55px] mr-[-2.55px] font-medium text-[#333333] text-[12px] text-center leading-[18px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                      {" "}
                      Top up mobile phones in Airo countries instantly.
                    </p>
                  </div>
                </div>
                <button className="all-[unset] box-border flex items-center justify-center gap-[5.91px] px-[11.81px] py-[8.27px] self-stretch w-full bg-white-97 rounded-[59.06px] border-[0.59px] border-solid border-white-95 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-0.59px] [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
                    One way many destination
                  </div>
                  <img className="relative w-[10.63px] h-[10.63px]" alt="Icon" src="/img/icon-5.png" />
                </button>
              </div>
              <div className="flex flex-col w-[180px] items-end gap-[9.45px] absolute top-0 left-[599px]">
                <div className="flex items-center justify-center gap-[5.91px] px-[11.81px] py-[8.27px] self-stretch w-full bg-white-97 rounded-[59.06px] border-[0.59px] border-solid border-white-95 relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-0.59px] [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
                    Be in control of activities
                  </p>
                  <img className="relative w-[10.63px] h-[10.63px]" alt="Icon" src="/img/icon-4.png" />
                </div>
                <div className="flex flex-col items-start gap-[14.18px] p-[17.72px] relative self-stretch w-full flex-[0_0_auto] bg-[#65dd91] rounded-[11.81px] overflow-hidden">
                  <div className="flex flex-col items-start gap-[2.36px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-0.59px] text-grey-10 text-[14px] leading-[21px] [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                      Notification System
                    </div>
                    <p className="relative self-stretch font-medium text-[#333333] text-[12px] leading-[18px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Integrated notification system which is help you to manage your daily activities
                    </p>
                  </div>
                  <img
                    className="absolute w-[24px] h-[24px] top-[12px] left-[145px]"
                    alt="Abstract design"
                    src="/img/abstract-design-15.png"
                  />
                  <img
                    className="relative w-[163px] h-[127px] mr-[-18.30px] object-cover"
                    alt="Image"
                    src="/img/image-12-1.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[377px] items-center gap-[40px] absolute top-[759px] left-[24px]">
              <div className="flex flex-col items-center gap-[5px] px-[150px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[212px] mt-[-1.00px] ml-[-67.50px] mr-[-67.50px] text-grey-10 text-[28px] text-center leading-[33.6px] [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                  Some Features
                </div>
                <p className="relative w-[337px] ml-[-130.00px] mr-[-130.00px] font-medium text-grey-30 text-[16px] text-center leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                  Our application will enable you to perform the following actions
                </p>
              </div>
              <div className="flex flex-wrap w-[378px] items-start gap-[0px_0px] relative flex-[0_0_auto] mb-[-3.00px] ml-[-0.50px] mr-[-0.50px] bg-white-99 rounded-[16px] border-[3px] border-solid border-[#ebebecfc]">
                <div className="flex flex-col w-[372px] h-[337px] items-end justify-between pl-[20px] pr-0 pt-[20px] pb-0 relative rounded-[20px]">
                  <div className="items-start gap-[2px] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[323px] mt-[-1.00px] font-bold text-[#333333] text-[18px] leading-[27px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Secure Transactions
                    </div>
                    <p className="relative w-[281px] font-medium text-[#333333] text-[16px] leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Our platform ensures your data and transactions are safe
                    </p>
                  </div>
                  <img className="relative w-[286px] h-[180px] object-cover" alt="Image" src="/img/image-8-2.png" />
                </div>
                <img className="relative w-[361px] h-[3px]" alt="Line" src="/img/line-15.svg" />
                <div className="flex flex-col w-[372px] h-[313px] items-center justify-between pt-[20px] pb-0 px-[20px] relative rounded-[20px]">
                  <div className="items-start gap-[2px] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[303px] mt-[-1.00px] font-bold text-[#333333] text-[18px] leading-[27px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Multiple Payment Options
                    </div>
                    <p className="relative w-[281px] font-medium text-[#333333] text-[16px] leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Choose your preferred payment method from a variety of secure options.
                    </p>
                  </div>
                  <img className="relative w-[229px] h-[149px] object-cover" alt="Image" src="/img/image-9-1.png" />
                </div>
                <img className="relative w-[361px] h-[3px]" alt="Line" src="/img/line-15.svg" />
                <div className="flex flex-col w-[372px] h-[303px] items-start justify-between pt-[20px] pb-[40px] px-[20px] relative rounded-[20px] overflow-hidden">
                  <div className="items-start gap-[2px] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[303px] mt-[-1.00px] font-bold text-[#333333] text-[18px] leading-[27px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Global Reach
                    </div>
                    <p className="relative w-[281px] font-medium text-[#333333] text-[16px] leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                      Top up mobile phones in [Number] countries instantly
                    </p>
                  </div>
                  <img
                    className="relative w-[352px] h-[117px] mr-[-20.00px] object-cover"
                    alt="Image"
                    src="/img/image-10-1.png"
                  />
                </div>
              </div>
            </div>
            <div className="top-[1959px] flex flex-col w-[377px] items-center gap-[40px] absolute left-[24px]">
              <div className="flex flex-col items-center gap-[5px] px-[150px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] ml-[-126.00px] mr-[-126.00px] text-grey-10 text-[28px] text-center leading-[33.6px] whitespace-nowrap [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                  One Click, Many Countries
                </div>
                <p className="relative w-[378px] ml-[-150.50px] mr-[-150.50px] font-medium text-grey-30 text-[16px] text-center leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                  {" "}
                  We serve a wide range of clients with their airtime needs. We offer some of the most affordable bulk
                  airtime solutions on the market.
                </p>
              </div>
              <div className="flex flex-col items-start gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center justify-center gap-[40px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-[20px] p-[20px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[16px] border border-solid border-white-95">
                    <div className="flex items-center gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] text-grey-10 text-[20px] leading-[30px] [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                        Vision
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[30px] px-[20px] py-[40px] relative self-stretch w-full flex-[0_0_auto] bg-absolutewhite rounded-[16px] border border-solid border-white-95">
                      <div className="flex flex-col items-start justify-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-[#1e1e1e] text-[20px] tracking-[0] leading-[30px]">
                          Free transfer anywhere around the world
                        </p>
                        <p className="relative self-stretch font-medium text-[#333333] text-[16px] leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Experience the freedom of hassle-free airtime transfer with our free transfer admin airtime
                          app. Say goodbye to unnecessary fees and enjoy seamless transactions
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="relative w-[381px] h-[315px] ml-[-2.00px] mr-[-2.00px]"
                    alt="Layer"
                    src="/img/layer-1-2.svg"
                  />
                </div>
                <div className="flex flex-col items-center gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-[20px] p-[20px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[16px] border border-solid border-white-95">
                    <div className="flex items-center gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] text-grey-10 text-[22px] leading-[33px] [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                        Vision
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[20px] pt-[20px] pb-[40px] px-[20px] relative self-stretch w-full flex-[0_0_auto] bg-absolutewhite rounded-[8px] border border-solid border-white-95">
                      <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                          <div className="w-[24px] h-[24px] mt-[-1.00px] font-semibold text-[16px] text-center leading-[24px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                            01
                          </div>
                        </div>
                        <p className="relative self-stretch font-medium text-[#333333] text-[14px] leading-[21px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Highlight robust security measures (data encryption, secure transactions) and compliance with
                          relevant regulations.
                        </p>
                      </div>
                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Line"
                        src="/img/line-12.svg"
                      />
                      <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                          <div className="w-[24px] h-[24px] mt-[-1.00px] font-semibold text-[18px] text-center leading-[27px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                            02
                          </div>
                        </div>
                        <p className="relative self-stretch font-medium text-[#333333] text-[14px] leading-[21px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                          {" "}
                          This fosters trust and assures users of their data and financial safety.
                        </p>
                      </div>
                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Line"
                        src="/img/line-12.svg"
                      />
                      <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                          <div className="w-[24px] h-[24px] mt-[-1.00px] font-semibold text-[18px] text-center leading-[27px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                            03
                          </div>
                        </div>
                        <p className="relative self-stretch font-medium text-[#333333] text-[14px] leading-[21px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Emphasize an intuitive interface for managing and scheduling bulk airtime.
                        </p>
                      </div>
                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Line"
                        src="/img/line-12.svg"
                      />
                      <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-green-90 rounded-[100px]">
                          <div className="w-[24px] h-[24px] mt-[-1.00px] font-semibold text-[18px] text-center leading-[27px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] text-grey-10 tracking-[0]">
                            04
                          </div>
                        </div>
                        <div className="relative self-stretch font-medium text-[#333333] text-[14px] leading-[21px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                          Offer transparent tracking and reporting features.
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="relative self-stretch w-full h-[278px] mb-[-8.00px] ml-[-8.00px] mr-[-8.00px]"
                    alt="Image"
                    src="/img/image-17.svg"
                  />
                </div>
              </div>
            </div>
            <div className="top-[4045px] flex flex-col w-[377px] items-center gap-[40px] absolute left-[24px]">
              <div className="flex flex-col w-[367px] items-center gap-[5px] px-[150px] py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] ml-[-127.00px] mr-[-127.00px] text-grey-10 text-[28px] text-center leading-[33.6px] whitespace-nowrap [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                  Enjoy Unique Advantages
                </div>
                <p className="relative w-[375px] ml-[-154.00px] mr-[-154.00px] font-medium text-grey-30 text-[16px] text-center leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                  Simplify communication for your employees, family, or customers with our fast, reliable, and secure
                  bulk airtime solution.
                </p>
              </div>
              <img className="relative w-[375px] h-[130px] object-cover" alt="Image" src="/img/image-11-1.png" />
              <div className="flex flex-col items-center gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-[20px] p-[20px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[16px] border border-solid border-white-95">
                  <div className="flex items-start justify-end gap-[20px] p-[15px] relative self-stretch w-full flex-[0_0_auto] bg-white-99 rounded-[16px] border border-solid border-white-95">
                    <div className="flex flex-col items-start justify-center gap-[8px] relative flex-1 grow">
                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-[232px] mt-[-1.00px] text-grey-15 text-[18px] leading-[27px] [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                          Trusted Network Partnerships
                        </div>
                        <img
                          className="relative w-[27.5px] h-[24.14px] mr-[-1.00px]"
                          alt="Group"
                          src="/img/group-33-2.png"
                        />
                      </div>
                      <p className="relative self-stretch font-medium text-grey-30 text-[16px] leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                        Benefit from our extensive network of leading mobile operators, ensuring wider coverage and
                        reliable connections.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start justify-end gap-[20px] p-[15px] relative self-stretch w-full flex-[0_0_auto] bg-white-99 rounded-[16px] border border-solid border-white-95">
                    <div className="flex flex-col items-start justify-center gap-[8px] relative flex-1 grow">
                      <div className="flex items-start justify-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative flex-1 mt-[-1.00px] text-grey-15 text-[18px] leading-[27px] [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                          Unwavering Security &amp; Compliance:
                        </div>
                        <div className="relative w-[23.22px] h-[24px]">
                          <div className="relative w-[23px] h-[24px]">
                            <div className="absolute w-[23px] h-[15px] top-[9px] left-0">
                              <div className="relative w-[24px] h-[15px]">
                                <img
                                  className="w-[23px] h-[8px] top-[7px] absolute left-0"
                                  alt="Subtract"
                                  src="/img/subtract-17.svg"
                                />
                                <div className="absolute w-[23px] h-[14px] top-0 left-0 rounded-[11.61px/7.05px] shadow-[inset_0px_0.5px_1px_#0000001a] [background:radial-gradient(50%_50%_at_50%_50%,rgb(101,221,145)_0%,rgb(205.06,255,223.36)_100%)]" />
                                <img
                                  className="w-[24px] h-[7px] top-[8px] absolute left-0"
                                  alt="Subtract"
                                  src="/img/subtract-16.svg"
                                />
                              </div>
                            </div>
                            <div className="absolute w-[23px] h-[15px] top-[5px] left-0">
                              <div className="relative w-[24px] h-[15px]">
                                <img
                                  className="w-[23px] h-[8px] top-[7px] absolute left-0"
                                  alt="Subtract"
                                  src="/img/subtract-15.svg"
                                />
                                <div className="absolute w-[23px] h-[14px] top-0 left-0 bg-[#e4e8f366] rounded-[11.61px/7.05px] shadow-[inset_0px_0.5px_1px_#5759931a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]" />
                                <img
                                  className="w-[24px] h-[7px] top-[8px] absolute left-0"
                                  alt="Subtract"
                                  src="/img/subtract-14.svg"
                                />
                              </div>
                            </div>
                            <div className="absolute w-[23px] h-[15px] top-0 left-0">
                              <div className="relative w-[24px] h-[15px]">
                                <img
                                  className="w-[23px] h-[8px] top-[7px] absolute left-0"
                                  alt="Subtract"
                                  src="/img/subtract-13.svg"
                                />
                                <div className="absolute w-[23px] h-[14px] top-0 left-0 bg-[#e4e8f366] rounded-[11.61px/7.05px] shadow-[inset_0px_0.5px_1px_#5759931a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]" />
                                <img
                                  className="w-[24px] h-[7px] top-[8px] absolute left-0"
                                  alt="Subtract"
                                  src="/img/subtract-12.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="relative self-stretch font-medium text-grey-30 text-[16px] leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                        Industry-standard security protocols and strict data privacy compliance guarantee peace of mind
                        for every transaction.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start justify-end gap-[20px] p-[15px] relative self-stretch w-full flex-[0_0_auto] bg-white-99 rounded-[16px] border border-solid border-white-95">
                    <div className="flex flex-col items-start justify-center gap-[8px] relative flex-1 grow">
                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-[215px] mt-[-1.00px] text-grey-15 text-[18px] leading-[27px] [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                          Detailed Reporting &amp; Analytics:
                        </div>
                        <img
                          className="relative w-[28.9px] h-[24.17px] mr-[-0.99px]"
                          alt="Group"
                          src="/img/group-25-2.svg"
                        />
                      </div>
                      <p className="relative self-stretch font-medium text-grey-30 text-[16px] leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                        Access comprehensive reports to manage your airtime sending effectively and optimize future
                        transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[377px] items-center gap-[40px] absolute top-[7321px] left-[25px]">
              <div className="flex flex-col w-[389px] items-center gap-[5px] px-[150px] py-0 relative flex-[0_0_auto] ml-[-6.00px] mr-[-6.00px]">
                <div className="relative w-fit mt-[-1.00px] ml-[-127.50px] mr-[-127.50px] text-grey-10 text-[28px] text-center leading-[33.6px] whitespace-nowrap [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                  Frequently Asked Questions
                </div>
                <p className="relative w-[386px] ml-[-148.50px] mr-[-148.50px] font-medium text-grey-30 text-[16px] text-center leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                  Curious to know more about ForHelp and our mission? Look no further! We&#39;ve compiled a list of
                  frequently asked questions to provide you with the answers you seek.
                </p>
              </div>
              <div className="flex flex-col items-start gap-[24px] p-[20px] relative self-stretch w-full flex-[0_0_auto] bg-white-97 rounded-[16px] border border-solid border-white-95">
                <FaqCard
                  answer="In all countries in the world ......"
                  className="!self-stretch !rounded-[var(--tokens-spacing-4-pt-4)] !gap-[12.5px] !flex-[0_0_auto] !p-[20px] !w-full"
                  headingClassName="!text-[16px]"
                  number="01"
                  numberClassName="!text-[31.7px] !w-fit"
                  paragraphClassName="!text-[14px] !leading-[21px]"
                  property1="dropped"
                  question="What countries can I send airtime to?"
                  textContainerClassName="!gap-[7px]"
                />
                <FaqCard
                  className="!self-stretch !rounded-[var(--tokens-spacing-4-pt-4)] !gap-[12.5px] !flex-[0_0_auto] !p-[20px] !w-full"
                  headingClassNameOverride="!text-[#333333] !text-[16px]"
                  number="02"
                  numberClassName="!mt-[unset] !text-[31.7px] !w-fit"
                  property1="default"
                  question="What are the payment methods available?"
                />
                <FaqCard
                  button="/img/button-12.svg"
                  className="!self-stretch !rounded-[var(--tokens-spacing-4-pt-4)] !gap-[12.5px] !flex-[0_0_auto] !p-[20px] !w-full"
                  headingClassNameOverride="!text-[#333333] !text-[16px]"
                  number="03"
                  numberClassName="!mt-[unset] !text-[31.7px] !w-fit"
                  property1="default"
                  question="Is there a minimum or maximum amount I can send?"
                />
                <FaqCard
                  button="/img/button-16.svg"
                  className="!self-stretch !rounded-[var(--tokens-spacing-4-pt-4)] !gap-[12.5px] !flex-[0_0_auto] !p-[20px] !w-full"
                  headingClassNameOverride="!text-[#333333] !text-[16px]"
                  number="04"
                  numberClassName="!mt-[unset] !text-[31.7px] !w-fit"
                  property1="default"
                  question="Do you offer customer support?"
                />
                <FaqCard
                  button="/img/button-16.svg"
                  className="!self-stretch !rounded-[var(--tokens-spacing-4-pt-4)] !gap-[12.5px] !flex-[0_0_auto] !p-[20px] !w-full"
                  headingClassNameOverride="!text-[#333333] !text-[16px]"
                  number="05"
                  numberClassName="!mt-[unset] !text-[31.7px] !w-fit"
                  property1="default"
                  question="Are there any hidden fees or charges?"
                />
              </div>
            </div>
            <div className="flex flex-col w-[377px] items-center gap-[40px] px-[40px] py-[100px] absolute top-[8195px] left-[25px] bg-green-70 rounded-[16px] overflow-hidden">
              <div className="relative self-stretch w-full h-[199px]">
                <p className="absolute w-[281px] -top-px left-[8px] text-grey-10 text-[26px] text-center leading-[31.2px] [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                  Get Started With All In One Revolutionary Integrated Tool
                </p>
                <p className="absolute w-[294px] top-[102px] left-[2px] font-medium text-grey-30 text-[16px] text-center leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                  Simplify communication for your employees, family, or customers with our fast, reliable, and secure
                  bulk airtime solution.
                </p>
              </div>
              <img
                className="absolute w-[377px] h-[309px] top-[200px] left-0"
                alt="Abstract design"
                src="/img/abstract-design-14.svg"
              />
              <img
                className="absolute w-[377px] h-[328px] top-[181px] left-0"
                alt="Abstract design"
                src="/img/abstract-design-13.svg"
              />
              <div className="flex w-[349px] items-center justify-between pl-[24px] pr-[8px] py-[8px] relative flex-[0_0_auto] ml-[-26.00px] mr-[-26.00px] bg-green-90 rounded-[100px]">
                <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                  Email Address
                </div>
                <button className="all-[unset] box-border inline-flex items-center gap-[10px] pl-[20px] pr-[8px] py-[8px] bg-green-70 rounded-[100px] relative flex-[0_0_auto]">
                  <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-grey-10 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                    Get Connected
                  </div>
                  <img className="relative flex-[0_0_auto]" alt="Icon container" src="/img/icon-container-1.svg" />
                </button>
                <img
                  className="absolute w-[25px] h-[40px] top-[-12px] left-[338px]"
                  alt="Abstract design"
                  src="/img/abstract-design-12.svg"
                />
              </div>
            </div>
            <footer className="flex flex-col w-[373px] items-start gap-[30px] pt-0 pb-[20px] px-0 absolute top-[8782px] left-[15px] bg-transparent">
              <div className="flex items-center justify-between p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-white-99 rounded-[100px] border border-solid border-white-95">
                <img
                  className="relative w-[80px] h-[25.76px] object-cover"
                  alt="Asset"
                  src="/img/asset-2-300x-1-6.png"
                />
                <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-15 text-[14px] tracking-[-0.08px] leading-[24px] whitespace-nowrap">
                    Home
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-15 text-[14px] tracking-[-0.08px] leading-[24px] whitespace-nowrap">
                    Integration
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-15 text-[14px] tracking-[-0.08px] leading-[24px] whitespace-nowrap">
                    Pricing
                  </div>
                </div>
              </div>
              <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-transparent text-[14px] text-right tracking-[0] leading-[21px]">
                <span className="text-[#646467]">© 2024 Airo. Design &amp; Developed by </span>
                <span className="text-[#ff9f2e]">Kaeyros Analytics</span>
                <span className="text-[#646467]">
                  {" "}
                  <br />
                  All rights reserved.
                </span>
              </p>
            </footer>
            <div className="flex flex-col w-[375px] items-center gap-[28px] absolute top-[5517px] left-[26px]">
              <div className="flex flex-col w-[377px] items-center gap-[5px] px-[150px] py-0 relative flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px]">
                <div className="relative w-fit mt-[-1.00px] ml-[-115.00px] mr-[-115.00px] text-grey-10 text-[28px] text-center leading-[33.6px] whitespace-nowrap [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                  Choose Your Pricing plan
                </div>
                <p className="relative w-[378px] ml-[-150.50px] mr-[-150.50px] font-medium text-grey-30 text-[16px] text-center leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                  Simplify communication for your employees, family, or customers with our fast, reliable, and secure
                  bulk airtime solution.
                </p>
              </div>
              <div className="items-center justify-center gap-[24px] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]">
                  <div className="relative w-fit font-link-link-regular font-[number:var(--link-link-regular-font-weight)] text-black text-[length:var(--link-link-regular-font-size)] tracking-[var(--link-link-regular-letter-spacing)] leading-[var(--link-link-regular-line-height)] whitespace-nowrap [font-style:var(--link-link-regular-font-style)]">
                    Monthly
                  </div>
                  <div className="flex w-[61px] items-center justify-center gap-[10px] relative bg-[#04773b] rounded-[80px]">
                    <div className="flex items-start justify-end gap-[10px] p-[2px] relative flex-1 grow rounded-[220px]">
                      <div className="relative w-[24px] h-[24px] bg-white rounded-[12px]" />
                    </div>
                  </div>
                  <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-link-link-regular font-[number:var(--link-link-regular-font-weight)] text-black text-[length:var(--link-link-regular-font-size)] tracking-[var(--link-link-regular-letter-spacing)] leading-[var(--link-link-regular-line-height)] whitespace-nowrap [font-style:var(--link-link-regular-font-style)]">
                      Annually:
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Articulat_CF-Bold',Helvetica] font-bold text-[#04773b] text-[18px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                      Save 30%
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-[20px] px-[22px] py-[40px] self-stretch w-full mt-[-0.60px] ml-[-0.60px] mr-[-0.60px] rounded-[var(--primitives-spacing-4-grid-3)] border-[1.2px] border-solid border-token-border-color relative flex-[0_0_auto]">
                    <img
                      className="relative w-[40.5px] h-[40.5px] object-cover"
                      alt="Image"
                      src="/img/image-15-4.png"
                    />
                    <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative self-stretch mt-[-1.00px] [font-family:'Visby_CF-Bold',Helvetica] font-bold text-token-colors-text-color text-[18px] tracking-[0] leading-[21.6px]">
                        Standard
                      </div>
                      <p className="relative self-stretch [font-family:'Visby_CF-Regular',Helvetica] font-normal text-token-colors-text-color text-[14px] tracking-[0] leading-[16.8px]">
                        Perfect for individuals and occasional users.
                      </p>
                    </div>
                    <div className="inline-flex items-end justify-end gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Visby_CF-Bold',Helvetica] font-bold text-token-colors-text-color text-[28px] tracking-[0] leading-[33.6px] whitespace-nowrap">
                        Free
                      </div>
                      <div className="relative w-fit [font-family:'Visby_CF-Regular',Helvetica] font-normal text-primitives-colors-rich-black-200 text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        /for trial period
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                      <PricingOffer
                        className="!flex-[0_0_auto]"
                        divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                        text="100 Numbers / day"
                      />
                      <PricingOffer
                        className="!flex-[0_0_auto]"
                        divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                        text="$19.99 / Maximum Recharge"
                      />
                      <PricingOffer
                        className="!flex-[0_0_auto]"
                        divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                        text="3 Countries"
                      />
                      <PricingOffer
                        className="!flex-[0_0_auto]"
                        divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                        text="No Bulk Sending"
                      />
                      <PricingOffer
                        className="!flex-[0_0_auto]"
                        divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                        text="No Sub-Clients"
                      />
                    </div>
                    <Button
                      button="Choose Plan"
                      className="!self-stretch !h-[52px] !pt-[var(--primitives-spacing-4-grid-5)] !pb-[var(--primitives-spacing-4-grid-5)] !px-[16px] !flex !w-full"
                      divClassName="!mt-[-4.50px] !mb-[-2.50px]"
                      hasLeftIcon={false}
                      hasRightIcon={false}
                      property1="btn-outline"
                    />
                  </div>
                  <div className="px-[22.49px] py-[40.88px] ml-[-0.61px] mr-[-0.61px] bg-[#04773b] border-[1.23px] border-solid border-token-bg-green flex flex-col items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto] rounded-[12px]">
                    <img className="relative w-[41px] h-[41.5px] object-cover" alt="Image" src="/img/image-14-2.png" />
                    <div className="w-[226px] gap-[5.11px] flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative self-stretch mt-[-1.02px] [font-family:'Visby_CF-Bold',Helvetica] font-bold text-token-colors-secondary-surface text-[18.4px] tracking-[0] leading-[22.1px]">
                        Business
                      </div>
                      <p className="relative self-stretch [font-family:'Visby_CF-Regular',Helvetica] font-normal text-token-colors-secondary-surface text-[14px] tracking-[0] leading-[16.8px]">
                        Perfect for small businesses and regular users.
                      </p>
                    </div>
                    <div className="inline-flex items-end justify-end gap-[4px] relative flex-[0_0_auto]">
                      <div className="mt-[-1.02px] text-token-colors-secondary-surface text-[28px] leading-[33.6px] relative w-fit [font-family:'Visby_CF-Bold',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                        10,99 $
                      </div>
                      <div className="text-[#ffffffcc] relative w-fit [font-family:'Visby_CF-Regular',Helvetica] font-normal text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        /month
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[20.44px] relative self-stretch w-full flex-[0_0_auto]">
                      <PricingOffer
                        className="!gap-[5.11px] !flex-[0_0_auto]"
                        divClassName="!mt-[-0.32px] !text-[#ffffffcc] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                        text="200 Numbers / day"
                      />
                      <PricingOffer
                        className="!gap-[5.11px] !flex-[0_0_auto]"
                        divClassName="!mt-[-0.32px] !text-[#ffffffcc] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                        text="20 $ as Maximum Recharge"
                      />
                      <PricingOffer
                        className="!gap-[5.11px] !flex-[0_0_auto]"
                        divClassName="!mt-[-0.32px] !text-[#ffffffcc] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                        text="10 Countries"
                      />
                      <PricingOffer
                        className="!gap-[5.11px] !flex-[0_0_auto]"
                        divClassName="!mt-[-0.32px] !text-[#ffffffcc] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                        text="Bulk Sending Present"
                      />
                      <PricingOffer
                        className="!gap-[5.11px] !flex-[0_0_auto]"
                        divClassName="!mt-[-0.32px] !text-[#ffffffcc] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle39 className="!relative !w-[18.4px] !h-[18.4px]" />}
                        text="2 Sub-Clients / Country"
                      />
                    </div>
                    <Button
                      button="Choose Plan"
                      className="!self-stretch !h-[43.66px] !pt-[var(--primitives-spacing-4-grid-5)] !pr-[var(--primitives-spacing-4-grid-6)] !pb-[var(--primitives-spacing-4-grid-5)] !pl-[var(--primitives-spacing-4-grid-6)] !flex !bg-[color:var(--token-colors-primary-surface)] !w-full"
                      divClassNameOverride="!mt-[-9.19px] !text-[color:var(--primitives-colors-dark-spring-green-500)] !mb-[-7.15px]"
                      property1="default"
                    />
                  </div>
                  <div className="px-[22px] py-[40px] mb-[-0.60px] ml-[-0.60px] mr-[-0.60px] border-[1.2px] border-solid border-token-border-color flex flex-col items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto] rounded-[var(--primitives-spacing-4-grid-3)]">
                    <img
                      className="relative w-[40.5px] h-[40.5px] object-cover"
                      alt="Image"
                      src="/img/image-15-3.png"
                    />
                    <div className="w-[202px] gap-[5px] flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Visby_CF-Bold',Helvetica] font-bold text-token-colors-text-color text-[18px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                        Enterprise
                      </div>
                      <div className="relative self-stretch [font-family:'Visby_CF-Regular',Helvetica] font-normal text-token-colors-text-color text-[14px] tracking-[0] leading-[16.8px]">
                        Perfect for companies.
                      </div>
                    </div>
                    <div className="inline-flex items-end justify-end gap-[4px] relative flex-[0_0_auto]">
                      <div className="mt-[-1.00px] text-token-colors-text-color text-[24px] leading-[28.8px] relative w-fit [font-family:'Visby_CF-Bold',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                        49,99 $
                      </div>
                      <div className="mt-[-1.00px] text-primitives-colors-rich-black-200 relative w-fit [font-family:'Visby_CF-Regular',Helvetica] font-normal text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        /month
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                      <PricingOffer
                        className="!flex-[0_0_auto]"
                        divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                        text="Unlimited Numbers"
                      />
                      <PricingOffer
                        className="!flex-[0_0_auto]"
                        divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                        text="Unlimited Recharge Amount"
                      />
                      <PricingOffer
                        className="!flex-[0_0_auto]"
                        divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                        text="50 + Countries"
                      />
                      <PricingOffer
                        className="!flex-[0_0_auto]"
                        divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                        text="Bulk Sending Present"
                      />
                      <PricingOffer
                        className="!flex-[0_0_auto]"
                        divClassName="!mt-[-0.50px] !text-[14px] !leading-[16.8px]"
                        icon={<TickCircle40 className="!relative !w-[18px] !h-[18px]" />}
                        text="50 Sub Clients / Country"
                      />
                    </div>
                    <Button
                      button="Choose Plan"
                      className="!self-stretch !h-[52px] !pt-[var(--primitives-spacing-4-grid-5)] !pb-[var(--primitives-spacing-4-grid-5)] !px-[16px] !flex !w-full"
                      divClassName="!mt-[-4.50px] !mb-[-2.50px]"
                      hasLeftIcon={false}
                      hasRightIcon={false}
                      property1="btn-outline"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[378px] items-center justify-center gap-[50px] px-[200px] py-[60px] absolute top-[5084px] left-[24px] bg-[#fcfcfd] rounded-[16px] border border-solid border-[#e6e6e6]">
              <div className="flex flex-col w-[298px] items-center justify-center gap-[6px] relative flex-[0_0_auto] ml-[-160.00px] mr-[-160.00px]">
                <p className="relative self-stretch mt-[-1.00px] text-grey-10 text-[28px] text-center leading-[33.6px] [font-family:'Urbanist',Helvetica] font-semibold tracking-[0]">
                  All in one device integration
                </p>
                <p className="relative w-[296px] font-medium text-grey-30 text-[16px] text-center leading-[24px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                  Simplify communication for your employees, family, or customers with our fast, reliable, and secure
                  bulk airtime solution.
                </p>
              </div>
              <div className="absolute w-[10px] h-[57px] top-0 left-[184px]">
                <div className="relative h-[57px]">
                  <img className="absolute w-px h-[52px] top-0 left-[5px]" alt="Vector" src="/img/vector-432-2.svg" />
                  <div className="absolute w-[10px] h-[10px] top-[47px] left-0 bg-white rounded-[4px] shadow-[0px_2px_14px_10px_#65dd9166]" />
                </div>
              </div>
            </div>
            <Navbar
              className="!pr-[var(--tokens-spacing-4-pt-2)] !pl-[var(--tokens-spacing-4-pt-2)] !py-[10px] !fixed !left-[23px] !w-[379px] !top-[17px]"
              property1="variant-3"
            />
          </>
        )}
      </div>
    </div>
  );
};
