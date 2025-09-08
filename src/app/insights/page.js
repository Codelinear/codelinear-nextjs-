"use client";
import React from "react";
// import Bloghero from "./blogcomponents/blogHero/Bloghero";
// import Featured from "./blogcomponents/featureArticle/Featured";
// import Allblogs from "./blogcomponents/allblog/Allblogs";
// import Head from "next/head";
import Head from "next/head";
import Bloghero from "@/Components/pages/blogpages/blogcomponents/blogHero/Bloghero";
import Featured from "@/Components/pages/blogpages/blogcomponents/featureArticle/Featured";
import Allblogs from "@/Components/pages/blogpages/blogcomponents/allblog/Allblogs";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Codelinear - Insights Page</title>
        <meta
          name="keywords"
          content="services, web development, mobile apps, software consulting, project management, Codelinear, blogs, insights"
        />
        <link rel="canonical" href="https://codelinear.com/insights" />
        <meta
          name="description"
          content="Dive into Codelinear's insights for the latest trends, tips, and best practices in software development. Stay informed with our comprehensive articles, tutorials, and guides covering various topics, including web development, mobile apps, software consulting, project management, and more."
        />
      </Head>
      <Bloghero />
      <Featured />
      <Allblogs />
      {/* <Footer /> */}
    </>
  );
};

export default Blog;
