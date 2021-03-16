import React, { useState } from "react";
import { Menu, Layout, Button } from "antd";
import { SettingOutlined, MenuOutlined } from '@ant-design/icons';
import './Sidebar.scss'
import { styleBtn } from "./SideBarStyle";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapseMode, setCollapseMode] = useState(false);

  const onClickCollapseeMode = () => {
    setCollapseMode(!collapseMode);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapseMode} style={{background: '#fff', height: '100vh', padding: '10px'}}>
      <Button type="text" onClick={onClickCollapseeMode} style={styleBtn}>
        <MenuOutlined />
      </Button>
      <Menu>
        <Menu.Item key="1" icon={<SettingOutlined />}>
          Задать масштаб
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
