/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState } from "react";
import Image from "next/image";
import Twitter from "../../../assests/svg/twitter-icon.svg";
import Youtube from "../../../assests/svg/youtube-icon.svg";
import Medium from "../../../assests/svg/medium-icon.svg";
import ArrowRight from "../../../assests/svg/footer-arrow-right.svg";
import Planet from "../../../assests/svg/footer-planet.svg";
import MobilePlanet from "../../../assests/svg/planet-mobile.svg";
import * as s from "./styles";
import { useTranslation } from "react-i18next";
import { FOOTERBTNLINKS, FOOTERLINKS } from "../../../constants/constants";
import { Heading } from "../../ui/Heading/Heading";
import { Subtitle } from "../../ui/Subtitle/Subtitle";
import EmailInput from "../../ui/EmailInput/EmailInput";
import Link from "next/link";
import { useRouter } from "next/router";
import { A } from "../../ui/A/A";
const socialMediaLinks = [
  { icon: Twitter, path: "https://twitter.com/PlanetixO" },
  {
    icon: Youtube,
    path: "https://www.youtube.com/channel/UCONW07NMT43rti7_XRXuGMA",
  },
  { icon: Medium, path: "https://blog.planetix.com/" },
];

export const Footer = ({
  tokenModalHandler,
}: {
  tokenModalHandler: () => void;
}) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const router = useRouter();
  return (
    <div css={s.wrapperCss}>
      <div css={s.containerCss}>
        <div css={s.headerWrapperCss}>
          <A
            variant={"secondary"}
            path={"/"}
            label={
              <div css={s.logoBlockCss}>
                <Image src="/images/logo.png" height={"50px"} width={"44px"} />
                <div>
                  IX
                  <br />
                  <span>Foundation</span>
                </div>
              </div>
            }
          />

          <div css={s.socialMediaBlockWrapperCss}>
            {socialMediaLinks.map((item) => (
              <a href={item.path} key={item.path}>
                <item.icon />
              </a>
            ))}
          </div>
        </div>
        <main css={s.mainContentCss}>
          <div css={s.col}>
            <Heading
              label={t("footer.subscribe.title").capitalize()}
              variant="small"
              marginBottom={3}
            />
            <Subtitle
              label={t("footer.subscribe.subTitle").capitalize()}
              variant="medium"
              marginBottom={14}
            />
            <EmailInput
              placeholder={t(
                "footer.subscribe.email-input.placeholder"
              ).capitalize()}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              addCss={s.inputCss}
            />
            <div css={s.mobileSocialMediaBlockWrapperCss}>
              {socialMediaLinks.map((item) => (
                <a href={item.path} key={item.path}>
                  <item.icon />
                </a>
              ))}
            </div>
            <Subtitle
              label={t("footer.subscribe.disclaimer.title").capitalize()}
              variant="medium"
              addCss={s.disclaimerCss}
            />
            <Subtitle
              label={t("footer.subscribe.disclaimer.text").capitalize()}
              variant="medium"
              addCss={s.disclaimerTextCss}
            />
          </div>
          <div css={s.col}>
            <ul css={s.footerLinksListCss}>
              {FOOTERLINKS.map((link) =>
                link.disabled ? (
                  <li key={link.title}>
                    <div>
                      {t(link.title).capitalize()}
                      {link.disabled && <span>TBA</span>}
                    </div>
                  </li>
                ) : (
                  <li key={link.title}>
                    <a
                      css={router.pathname === link.path && s.activeLinkCss}
                      href={link.path}
                    >
                      {t(link.title).capitalize()}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div css={s.col}>
            <ul>
              <li>
                <button css={s.btnLinkCss} onClick={tokenModalHandler}>
                  <div>
                    <Heading
                      variant="small"
                      label={t("footer.links.buy-token.title").capitalize()}
                    />
                    <Subtitle
                      label={t("footer.links.buy-token.subTitle").capitalize()}
                      variant="medium"
                    />
                  </div>
                  <ArrowRight />
                </button>
              </li>
              <li>
                <a
                  css={s.btnLinkCss}
                  href={"https://wallet.pix.foundation/"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div>
                    <Heading
                      variant="small"
                      label={t(
                        "footer.links.wallet-ix-foundation.title"
                      ).capitalize()}
                    />
                    <Subtitle
                      label={t(
                        "footer.links.wallet-ix-foundation.subtitle"
                      ).capitalize()}
                      variant="medium"
                    />
                  </div>
                  <ArrowRight />
                </a>
              </li>
            </ul>
          </div>
        </main>

        <ul css={s.footerCss}>
          <li> © 2021 Amelia Systems AG.</li>
        </ul>
      </div>
      <Planet css={s.planetCss} />
      <MobilePlanet css={s.mobilePlanetCss} />
    </div>
  );
};
