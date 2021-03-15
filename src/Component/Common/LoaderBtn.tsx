import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { styleBtn } from './StyleBtn';


const BtnLoader = () => {
    const props = {
      beforeUpload: (file: File) => {
        if (file.type !== 'application/json') {
          message.error(`${file.name} is not a json file`);
        }
        console.log(file.type)
        return file.type === 'data/json' ? true : Upload.LIST_IGNORE;
      }
    };
    return (
      <Upload {...props}>
        <Button style={styleBtn()} type="primary" icon={<UploadOutlined />}>Upload data json</Button>
      </Upload>
    );
};

export default BtnLoader;