/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import Image from "next/image";
import { css, jsx } from "@emotion/react";
import * as s from "./styles";
import Arrow from "../../assests/svg/gradient-arrow-small.svg";
import dayjs from "dayjs";

export type NewsCardPropsT = {
  link: string;
  imgSrc: string;
  pubDate: string;
  title: string;
  guid: string;
  itemId: string;
};

const NewsCard = ({ link, imgSrc, pubDate, title }: NewsCardPropsT) => {
  return (
    <a href={link} css={s.mainWrapCss}>
      <div css={s.imageWrapCss}>
        <Image
          layout="fill"
          src={imgSrc || "/"}
          alt={"news_item_image"}
          objectFit="cover"
          priority
        />
      </div>

      <div css={s.footerCss}>
        <p css={s.dateCss}>{dayjs(pubDate).format("YYYY/MM/DD")}</p>
        <div css={s.linkCss}>
          <p css={s.linkTextCss}>{title}</p>
          <Arrow />
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
