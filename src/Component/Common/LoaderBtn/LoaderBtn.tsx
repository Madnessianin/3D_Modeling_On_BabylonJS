import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { styleBtn } from "./StyleBtn";

const BtnLoader = () => {
  const [state, setState] = useState('')
  const props = {
    beforeUpload: (file: File): boolean => {
      if (file.type !== "application/json") {
        message.error(`${file.name} is not a json file`);
      }
      setState(file.name)
      return file.type === "application/json" ? true : false;
    },
  };
  console.log(state)
  return (
    <Upload {...props}>
      <Button style={styleBtn} type="primary" icon={<UploadOutlined />}>
        Загрузите данные
      </Button>
    </Upload>
  );
};

export default BtnLoader;
