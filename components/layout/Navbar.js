import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session)

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
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
          PC-BUILDER
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
        <Link
          style={{ textDecoration: "none", color: "white" ,marginRight:"20px"}}
          href="/CPU"
        >
          <items>CPU</items>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", marginRight:"20px"}}
          href="/Motherboard"
        >
          <items>Motherboard</items>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" , marginRight:"20px" }}
          href="/RAM"
        >
          <items>RAM</items>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" , marginRight:"20px" }}
          href="/Power Supply Unit "
        >
          <items>Power Supply Unit</items>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", marginRight:"20px" }}
          href="/Storage Device "
        >
          <items>Storage Device</items>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" , }}
          href="/Monitor"
        >
          <items>Monitor</items>
        </Link>
        <Button type="primary" primary  style={{ textDecoration: "none", color: "white" , margin:"20px"}}>
            Pc-Builder
        </Button>
        { session?.user? <items>
          <Button onClick={()=>signOut()} type="primary" danger>
            Logout
          </Button>
        </items>:<Link style={{ textDecoration: "none", color: "white" }} href="/login">
          <items>Login</items>
        </Link>
        }
      </Menu>
    </Header>
  );
};
export default Navbar;
