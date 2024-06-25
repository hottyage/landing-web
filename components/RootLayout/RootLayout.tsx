/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ReactNode, useState } from "react";
import { jsx } from "@emotion/react";
import * as s from "./styles";
import Header from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { AnimatePresence } from "framer-motion";
import TokenLinksModal from "../TokenLinksModal/TokenLinkModal";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  const [isTokenModalShown, setTokenModalShown] = useState(false);
  const tokenModalHandler = () => setTokenModalShown(!isTokenModalShown);
  return (
    <div css={s.baseCss}>
      <Header tokenModalHandler={tokenModalHandler} />
      <div>{children}</div>
      <Footer tokenModalHandler={tokenModalHandler} />
      <AnimatePresence>
        {isTokenModalShown && (
          <TokenLinksModal modalHandler={tokenModalHandler} />
        )}
      </AnimatePresence>
    </div>
  );
};
