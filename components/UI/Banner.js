import { Col, Row, Carousel } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import cpu from "@/assets/images/banner-images/cpu.jpeg";
import pcc from "@/assets/images/banner-images/pc.jpeg";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Banner = () => (
  <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
    {/* slider-1 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            Best&apos;S pc
            <br />
            YOUR CAREER
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <span>
              <CalendarOutlined /> FEBRUARY 28, 2023
            </span>
            <span>
              <CommentOutlined /> NO COMMENTS
            </span>
            <span>
              <ProfileOutlined /> HOBBY
            </span>
          </p>

          <p style={{ fontSize: "20px" }}>
          A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. You can also use it to edit or create spreadsheets, presentations, and even videos......
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
            }}
          >
            Keep Reading <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image src={cpu} fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            EAGLE, YOU ARE
            <br />
            NOT ALONE
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <span>
              <CalendarOutlined /> MARCH 30, 2023
            </span>
            <span>
              <CommentOutlined /> 5 COMMENTS
            </span>
            <span>
              <ProfileOutlined /> NATURE
            </span>
          </p>

          <p style={{ fontSize: "20px" }}>
            A spread opened patient and compulsively one placed seagull goodness
            python owing snapped yikes equitable when much the much Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur!...
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
            }}
          >
            Keep Reading <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image
            src={pcc}
            fill
            alt="eagle_image"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>
  </Carousel>
);
export default Banner;
