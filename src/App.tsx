import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.less";
import "./App.scss";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <div className="app">
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header">
          <div className="header_inner">
            <div className="header_item"></div>
            <div className="header_item">
              <h1 className="header_title">3D моделирование горной шахты по полученным данным</h1>
            </div>
          </div>
        </Header>
        <Content style={{ padding: "0 180px" }}>
          Content
        </Content>
        <Footer style={{ textAlign: "center" }}>
          3D model mining mine ©2021 Created by Alex
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
