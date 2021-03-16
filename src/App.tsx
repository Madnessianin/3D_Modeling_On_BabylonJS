import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.less";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router";
import ModelArea from "./Component/ModelArea/ModelArea";
import Sidebar from "./Component/Sidebar/Sidebar";
import Header from "./Component/Header/Header";
const { Content, Footer } = Layout;
const { SubMenu } = Menu;

const App = () => {
  return (
    <div className="app">
      <Layout style={{minHeight: '100vh'}}>
        <Header />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/modelarea" />} />
                <Route path="/modelarea" render={() => <ModelArea />} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          3D model mining mine ©2021 Created by Alex
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
