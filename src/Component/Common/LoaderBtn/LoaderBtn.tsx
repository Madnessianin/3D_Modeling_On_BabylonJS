import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { styleBtn } from "./StyleBtn";

const BtnLoader = () => {
  const props = {
    beforeUpload: (file: File): boolean => {
      if (file.type !== "application/json") {
        message.error(`${file.name} is not a json file`);
      }
      return file.type === "application/json" ? true : false;
    },
  };
  return (
    <Upload {...props}>
      <Button style={styleBtn} type="primary" icon={<UploadOutlined />}>
        Выбирете JSON файл данных шахты
      </Button>
    </Upload>
  );
};

export default BtnLoader;
