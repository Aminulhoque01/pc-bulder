
import { CalendarOutlined, CommentOutlined, ProfileOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

import Image from "next/image";

const PcDetailPage = ({allPc}) => {
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
              <span>
                <CalendarOutlined />
                {allPc?.release_date}
              </span>
              <span>
                <CommentOutlined />
                {allPc?.comment_count}
              </span>
              <span>
                <ProfileOutlined />
                {allPc?.category}
              </span>
            </p>

            <p style={{ fontSize: "15px" }}>
              {allPc?.description.length > 100
                ? allPc?.description
                : allPc?.description}
            </p>

           
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PcDetailPage;
