import React, { useEffect, useState } from "react";
import { Menu, Button, Layout } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapseMode, setCollapseMode] = useState(false);

  const onClickCollapseeMode = () => {
    setCollapseMode(!collapseMode);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapseMode} style={{background: '#fff'}}>
      <div className="logo" />
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
