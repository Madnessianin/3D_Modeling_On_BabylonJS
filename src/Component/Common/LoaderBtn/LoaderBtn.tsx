import React, { FC, useEffect, useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { styleBtn } from "./StyleBtn";
import { useDispatch } from "react-redux";
import { loadData } from "../../../Redux/mineReducer";

const BtnLoader: FC = () => {
  const dispatch = useDispatch();

  const dispatchFile = (file: File): boolean => {
    if (file.type === "application/json") {
      dispatch(loadData(file.name));
      return true;
    } else {
      message.error("Выбран некорректный файл!");
      return false;
    }
  };

  return (
    <Upload beforeUpload={dispatchFile}>
      <Button style={styleBtn} type="primary" icon={<UploadOutlined />}>
        Загрузите данные
      </Button>
    </Upload>
  );
};

export default BtnLoader;
