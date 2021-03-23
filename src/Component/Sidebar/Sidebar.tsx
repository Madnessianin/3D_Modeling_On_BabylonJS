import React, { useState } from "react";
import { Menu, Layout, Button } from "antd";
import { SettingOutlined, MenuOutlined } from "@ant-design/icons";
import { styleBtn, styleMenu, styleSidebar } from "./SideBarStyle";
import ModalForm from "./ModalForm/ModalForm";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapseMode, setCollapseMode] = useState(false);

  const onClickCollapseeMode = () => {
    setCollapseMode(!collapseMode);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const onClick = (): void => {
    setModalVisible(!modalVisible);
  };

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
        <Menu.Item key="1" icon={<SettingOutlined />} onClick={onClick}>
          Задать масштаб
        </Menu.Item>
      </Menu>
      <ModalForm visible={modalVisible} />
    </Sider>
  );
};

export default Sidebar;
