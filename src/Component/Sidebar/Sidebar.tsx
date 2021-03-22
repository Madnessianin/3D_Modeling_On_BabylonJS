import React, { useState } from "react";
import { Menu, Layout, Button } from "antd";
import { SettingOutlined, MenuOutlined } from "@ant-design/icons";
import { styleBtn, styleMenu, styleSidebar } from "./SideBarStyle";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapseMode, setCollapseMode] = useState(false);

  const onClickCollapseeMode = () => {
    setCollapseMode(!collapseMode);
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapseMode}
      style={styleSidebar}
    >
      <Button type="text" onClick={onClickCollapseeMode} style={styleBtn}>
        <MenuOutlined />
        <span
          className={`visible_btn_name ${
            !collapseMode ? "visible_btn_name--visible" : ""
          }`}
        >
          Настройки
        </span>
      </Button>
      <Menu style={styleMenu}>
        <Menu.Item key="1" icon={<SettingOutlined />}>
          Задать масштаб
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
