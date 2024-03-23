import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

type NewsProps = {
  news: {
    id: string;
    title: string;
  };
};

const News = memo(({ news }: NewsProps) => {
  return (
    <>
      <AppHead title="News" description="" />
      <div>News</div>
    </>
  );
});
News.displayName = "News";

export default News;
