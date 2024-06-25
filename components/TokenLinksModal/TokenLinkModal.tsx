/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useRef } from "react";
import { css, jsx } from "@emotion/react";
import * as s from "./styles";
import CLoseIcon from "../../assests/svg/close-small.svg";
import SushiSwap from "../../assests/svg/sushiSwapIcon.svg";
import UniSwap from "../../assests/svg/uniSwapIcon.svg";
import { motion } from "framer-motion";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import useOnClickOutside from "../../hooks/useClickOutside";
import { Heading } from "../ui/Heading/Heading";
import { A } from "../ui/A/A";

const TokenLinksModal = ({ modalHandler }: { modalHandler: () => void }) => {
  useDisableBodyScroll(true);
  const modalContainerRef = useRef(null);
  useOnClickOutside(modalContainerRef, modalHandler);
  return (
    <motion.div
      css={s.wrapCss}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div css={s.contentWrapCss} ref={modalContainerRef}>
        <Heading
          label={"Purhase IX Token"}
          variant={"medium"}
          marginBottom={26}
        />
        <div
          className="h-[400px] sm:h-[610px] mt-4"
          css={s.connectIframeWrapperCss}
        >
          <iframe
            src="https://li.finance/embed?fromChain=eth&fromToken=0x0000000000000000000000000000000000000000&toChain=pol&toToken=0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe"
            width="100%"
            style={{
              border: 0,
              borderRadius: "10px",
              margin: "0px auto",
              display: "block",
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          />
        </div>
        <Heading
          label={"Purhase IX Token on Polygon Exchanges"}
          variant={"medium"}
          marginBottom={16}
        />
        <ul css={s.linksList}>
          <li style={{ width: "47%" }}>
            <A
              path={
                "https://quickswap.exchange/#/swap?inputCurrency=0xc2132d05d31c914a87c6611c10748aeb04b58e8f&outputCurrency=0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe"
              }
              label={
                <div css={s.linkCss}>
                  <UniSwap />
                  <Heading label={"QuickSwap"} variant={"small"} />
                </div>
              }
            />
          </li>
          <li style={{ width: "47%" }}>
            <A
              path={"https://app.sushi.com/swap"}
              label={
                <div css={s.linkCss}>
                  <SushiSwap />
                  <Heading label={"SushiSwap"} variant={"small"} />
                </div>
              }
            />
          </li>
        </ul>
        <button css={s.closeBtnCss} onClick={modalHandler}>
          <CLoseIcon />
        </button>
      </div>
    </motion.div>
  );
};

export default TokenLinksModal;
