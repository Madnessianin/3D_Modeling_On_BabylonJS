import React, { FC } from "react";
import { Layout } from "antd";
import BtnLoader from "./../Common/LoaderBtn/LoaderBtn";

const { Header } = Layout;

const HeaderConteiner:FC = () => {
  return (
    <Header className="header">
      <div className="header_inner">
        <div className="header_item">
          <BtnLoader />
        </div>
        <div className="header_item">
          <h1 className="header_title">
            3D моделирование горной шахты по полученным данным
          </h1>
        </div>
      </div>
    </Header>
  );
};

export default HeaderConteiner;
