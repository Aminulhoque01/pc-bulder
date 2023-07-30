import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import React from "react";

const BuildPc = ({ pc }) => {
  return (
    <div>
      <Card style={{margin:"10px"}}>
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
              src={pc?.image}
              width={200}
              height={100}
              responsive
              alt="news image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1 style={{ fontSize: "25px" }}>{pc?.name} </h1>
            <div
              className="line"
              style={{
                height: "5px",
                margin: "20px 0",
                background: "#000",
                
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
              <span className="text-3xl">status:{pc?.status}</span>
              <span className="text-3xl">price:{pc?.price}</span>
            </p>

            <Button>
              build now
            </Button>
            
          </div>
        </Col>
      </Row>
      </Card>
    </div>
  );
};

export default BuildPc;

