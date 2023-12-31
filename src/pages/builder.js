import React from "react";

import { Col, Row } from "antd";
import { Card } from 'antd';
import Image from "next/image";
import BuildPc from "../../components/UI/BuildPc";
const Builder = ({allPc}) => {
   
  return (
    <div>
     
      
        <Col  className="gutter-row " span={12}>
            {
                allPc?.map((pc)=><BuildPc key={pc.id} pc={pc}></BuildPc>)
            }
        </Col>
        
      
    </div>
  );
};

export default Builder;

export const getServerSideProps= async()=>{
    const res = await fetch("https://pc-builder-aminulhoque01.vercel.app/api/pc");
    const data = await res.json();
  
    return{
      props:{
        allPc:data.data,
      },
      // revalidate:10,
    }
  }