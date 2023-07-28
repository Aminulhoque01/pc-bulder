import { Card, Col, Row } from "antd";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const AllPc = ({allPc}) => {
  const { Meta } = Card;
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30ox 0px",
        }}
      >
        #Our pc generation
      </h1>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {allPc?.map((pc) => (
          <Col key={pc.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={pc?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="news image"
                />
              }
            >
              <Meta title={pc?.name} />
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
              />
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
                <span>
                  
                 price: {pc?.price}
                </span>
                <span>
                  
                  Rating:{pc?.rating }
                </span>
                <span>
                  <ProfileOutlined />
                  {pc?.status}
                </span>
              </p>

              <p style={{ fontSize: "15px" }}>
                {pc?.description.length > 100
                  ? pc?.description.slice(0, 70) + "..."
                  : pc?.description}
              </p>
              <Link href={`/pc/${pc?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  keep Reading <ArrowRightOutlined></ArrowRightOutlined>
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllPc;
