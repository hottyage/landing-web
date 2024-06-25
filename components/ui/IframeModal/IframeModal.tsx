/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useRef } from "react";
import { css, jsx } from "@emotion/react";
import * as s from "./styles";
import CLoseIcon from "../../../assests/svg/close-small.svg";
import { motion } from "framer-motion";
import { useDisableBodyScroll } from "../../../hooks/useDisableBodyScroll";
import useOnClickOutside from "../../../hooks/useClickOutside";

const IframeModal = ({ modalHandler }: { modalHandler: () => void }) => {
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
      <div css={s.contentWrapCss}>
        <div css={s.iframeContainerCss} ref={modalContainerRef}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vNGqQ_uEhcY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <button css={s.closeBtnCss} onClick={modalHandler}>
          <CLoseIcon />
        </button>
      </div>
    </motion.div>
  );
};

export default IframeModal;
