import React from "react";
import Banner from "../../components/UI/Banner";
import Head from "next/head";
import dynamic from "next/dynamic";
import AllPc from "../../components/UI/AllPc";
import { useGetPcQuery } from "@/redux/api/api";



const HomePage = ({allPc}) => {
  const {data,isLoading,isError,error} = useGetPcQuery();
  
  const DynamicBanner = dynamic(() => import('../../components/UI/Banner'), {
    loading: () => <h1>Loading...</h1>,
    ssr:false,
  })
  return (
    <>
       <Head>
        <title>pc-builder</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner></DynamicBanner>
      <AllPc allPc={allPc}></AllPc>
    </>
  );
};

export default HomePage;

export const getServerSideProps= async()=>{
  const res = await fetch("http://localhost:5000/pc");
  const data = await res.json();

  return{
    props:{
      allPc:data,
    },
    // revalidate:10,
  }
}


