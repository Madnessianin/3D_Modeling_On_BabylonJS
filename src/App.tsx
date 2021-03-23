import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.less";
import "./assets/styles/App.scss";
import { Redirect, Route, Switch } from "react-router";
import ModelArea from "./Component/ModelArea/ModelArea";
import Sidebar from "./Component/Sidebar/Sidebar";
import Header from "./Component/Header/Header";
const { Content, Footer } = Layout;

const App = () => {
  return (
    <div className="app">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Content>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/modelarea" />}
              />
              <Route path="/modelarea" render={() => <ModelArea />} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            3D model mine ©2018 Created by Alex
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
