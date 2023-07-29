import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";

import Image from "next/image";

const PcDetailPage = ({ allPc }) => {
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div>
            <Image
              src={allPc?.image}
              width={500}
              height={300}
              responsive
              alt="news image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1 style={{ fontSize: "25px" }}>{allPc?.name} </h1>
            <div
              className="line"
              style={{
                height: "5px",
                margin: "20px 0",
                background: "#000",
                width: "100%",
              }}
            ></div>

            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                color: "gray",
                margin: "10px 0",
                frontSize: "12px",
              }}
            >
              

              

              <span className="text-3xl">status:{allPc?.status}</span>
              <span className="text-3xl">price:{allPc?.price}</span>
            </p>

            <p style={{ fontSize: "15px" }}>
              {allPc?.description.length > 100
                ? allPc?.description
                : allPc?.description}
            </p>
            <ul className="space-y-1 text-lg">
              <p className="text-2xl mt-5">features:</p>{" "}
              {allPc?.features?.map((feature) => (
                <ol key={feature}>{feature}</ol>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PcDetailPage;



export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/pc/${params.pcId}`);
  const data = await res.json();
  
  return {
    props: {
      allPc: data,
    },
  };
};
