/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as s from "./styles";
import { jsx } from "@emotion/react";
import Logo from "../../../assests/svg/logo.svg";
import HeaderLogo from "../../../assests/svg/logo.svg";
import CloseIcon from "../../../assests/svg/close-small.svg";
import { CustomSelect } from "../../ui/CustomSelect";
import { HEADERNAVITEMS, LANGUAGES } from "../../../constants/constants";

import { A } from "../../ui/A/A";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { useRouter } from "next/router";

const Header = ({ tokenModalHandler }: { tokenModalHandler: () => void }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router;

  const [headerOnTop, setHeaderOnTop] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const listenScrollEvent = (event: Event) => {
    if (window.scrollY < 20) {
      return setHeaderOnTop(true);
    } else if (window.scrollY > 30) {
      return setHeaderOnTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <div css={s.mainCss(headerOnTop)}>
        <div css={s.headerCss}>
          <div css={s.col}>
            <Link href={"/"}>
              <a css={s.headerLogoCss}>
                <HeaderLogo />
              </a>
            </Link>

            <div css={s.selectContainerCss}>
              <CustomSelect
                onChange={(val: any) => {
                  router.push(router.pathname, router.pathname, {
                    locale: val.value,
                  });
                }}
                options={LANGUAGES}
                value={
                  LANGUAGES.find((el) => el.value === i18n?.language) || {
                    label: "English",
                    value: "en",
                  }
                }
              />
            </div>
          </div>

          <div css={s.headerNavWrapCss}>
            <button css={s.headerNavBtnCss} onClick={tokenModalHandler}>
              {t("header.nav.buy-ixt")}
            </button>
            {HEADERNAVITEMS.map((item, index) => (
              <A
                key={item.label}
                path={item.path}
                label={t(`header.nav.${item.label}`)}
                variant="secondary"
              />
            ))}
          </div>
          <div css={s.burgerMenuCss}>
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              <div css={s.burgerIconContainerCss}>
                <div
                  className={`burger-container ${
                    isMobileMenuOpen ? "open" : ""
                  }`}
                >
                  <div className={"burger"}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            css={s.mobileMenuWrapCss}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 700 }}
            transition={{ type: "easeInOut" }}
          >
            <div css={s.mobileMenuContainer}>
              <div css={s.mobileNavHeader}>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <CloseIcon />
                </button>
              </div>
              <div css={s.mobileNavList}>
                <button css={s.headerNavBtnCss} onClick={tokenModalHandler}>
                  {t("header.nav.buy-ixt")}
                </button>
                {HEADERNAVITEMS.map((item, index) => (
                  <A
                    key={item.label}
                    path={item.path}
                    label={t(`header.nav.${item.label}`)}
                    variant={"secondary"}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
