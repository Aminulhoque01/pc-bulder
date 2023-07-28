import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"


const Footer = () => {
    const { data: session } = useSession();
    console.log(session)
  
    return (
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          height:"30vh"
        }}
      >
        <div className="demo-logo">
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "25px",
            }}
          >
            NEXT AUTH
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            display: "flex",
            fontSize: "20px",
            justifyContent: "space-between",
            margin:"5px"
          }}
        >
         <p>@copy right 2023</p>
          
        
        </Menu>
      </Header>
    );
};

export default Footer;
