import { Link } from "react-router-dom";
import {
    HomeOutlined,
    UploadOutlined,
    VideoCameraAddOutlined,
    GlobalOutlined,
    EditOutlined,
    ShoppingCartOutlined,
    AppstoreAddOutlined,
    MessageOutlined,
    RocketOutlined
  } from '@ant-design/icons';
import { Menu } from 'antd';

const linkStyle = {
  marginLeft: 10
}

const Nav = () => {

    const items = [
      {
        to: "/",
        text: "Home",
        icon: <HomeOutlined />,
      },
      {
        to: "/fileUpload",
        text: "File Upload",
        icon: <UploadOutlined />,
      },
      {
        to: "/videoUpload",
        text: "Video Upload",
        icon: <VideoCameraAddOutlined />,
      },
      {
        to: "/map",
        text: "Map",
        icon: <GlobalOutlined />,
      },
      {
        to: "/editor",
        text: "Editor",
        icon: <EditOutlined />,
      },
      {
        to: "/shop",
        text: "Shopping",
        icon: <ShoppingCartOutlined />,
      },
      {
        to: "/optimalPosition",
        text: "Optimal Position",
        icon: <AppstoreAddOutlined />,
      },
      {
        to: "/chat",
        text: "Chat",
        icon: <MessageOutlined />,
      },
      {
        to: "/animation",
        text: "3D Animation",
        icon: <RocketOutlined />,
      },
    ]

    return (
        <>
        <div className="logo" />
        <Menu defaultSelectedKeys={['0']} mode="inline">
          { items.map( (i, index) => (
            <Menu.Item key={index}>
              {i.icon}
              <Link to={i.to} style={linkStyle}>{i.text}</Link>
            </Menu.Item>
          ))}
        </Menu>
        </>
    )

}

export default Nav;