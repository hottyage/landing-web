/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows/Arrows";
import * as s from "./styles";
import NewsCard, { NewsCardPropsT } from "../../NewsCard/NewsCard";

const HorizontalSlider = ({ items }: { items: any }) => {
  return (
    <div css={s.mainWrapperCss}>
      <div css={s.sliderWrapperCss}>
        <ScrollMenu
          onWheel={onWheel}
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
        >
          {items.map((item: NewsCardPropsT, index: number) => (
            <NewsCard
              guid={item.guid}
              itemId={item.guid}
              key={item.guid}
              title={item.title}
              link={item.link}
              pubDate={item.pubDate}
              imgSrc={"/images/news-placeholder.svg"}
            />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
};

function onWheel(apiObj: any, ev: React.WheelEvent): void {
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isTouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
export default HorizontalSlider;
