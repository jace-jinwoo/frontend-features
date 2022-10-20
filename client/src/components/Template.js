import 'antd/dist/antd.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './contents/Home';
import FileUpload from './contents/FileUpload';
import VideoUpload from './contents/VideoUpload';
import Map from './contents/Map';
import Editor from './contents/Editor';
import Shopping from './contents/Shopping';
import OptimalPosition from './contents/OptimalPosition';
import Chat from './contents/Chat';
import Animation from './contents/Animation';
import Nav from "./layout/Nav";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
    position: "relative",
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px #f0f1f2'
  }
  const innerStyle = {
    padding: '20px 0',
    backgroundColor: '#fff'
  }
  const siderStyle = {
    backgroundColor: '#fff'
  }
  const contentStyle = {
    padding: '10px 20px'
  }
  const footerStyle = {
    position: "relative",
    backgroundColor: '#fff',
    boxShadow: '0 -2px 8px #f0f1f2'
}

const Template = () => {

    return (
        <Layout>
            <Header style={headerStyle}>Header</Header>
            <Layout style={innerStyle}>
                <Sider style={siderStyle}><Nav /></Sider>
                <Content style={contentStyle}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/fileUpload" element={<FileUpload />} />
                    <Route path="/videoUpload" element={<VideoUpload />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/shop" element={<Shopping />} />
                    <Route path="/optimalPosition" element={<OptimalPosition />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/animation" element={<Animation />} />
                  </Routes>
                </Content>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    )
}

export default Template;