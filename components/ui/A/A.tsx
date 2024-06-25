/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ReactElement } from "react";
import { jsx } from "@emotion/react";
import * as s from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

export const A = ({
  path,
  label,
  variant,
}: {
  path: string;
  label: string | ReactElement;
  variant?: keyof typeof s;
}) => {
  const { locale } = useRouter();
  const style = variant ? [s[variant]] : [];

  if (path.slice(0, 5) === "https") {
    return (
      <a href={path} css={[style]}>
        {label}
      </a>
    );
  }
  return (
    <Link href={path} locale={locale}>
      <a css={[style]}> {label}</a>
    </Link>
  );
};
