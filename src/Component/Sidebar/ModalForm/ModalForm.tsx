import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { setScale } from "../../../Redux/mineReducer";

const ModalForm = ({ visible }) => {
  const [visibleMode, setVisibleMode] = useState(visible);
  const dispatch = useDispatch();
  useEffect((): void => {
    setVisibleMode(visible);
  }, [visible]);

  const onSubmit = (scale: Object): void => {
    dispatch(setScale(scale));
    setVisibleMode(false);
  };

  return (
    <Modal
      title="Изменить масштаб: "
      visible={visibleMode}
      centered
      width="285px"
      footer={null}
    >
      <ScaleForm onSubmit={onSubmit} />
    </Modal>
  );
};

ModalForm.PropTypes = {
  visible: PropTypes.bool,
};

const ScaleForm = ({ onSubmit }) => {
  return (
    <Form className="modalForm" name="scale" onFinish={onSubmit}>
      <Form.Item name="scaleX" label="Масштаб по оси X: " initialValue={100}>
        <InputNumber min={50} max={200} />
      </Form.Item>
      <Form.Item name="scaleY" label="Масштаб по оси Y: " initialValue={100}>
        <InputNumber min={50} max={200} />
      </Form.Item>
      <Form.Item name="scaleZ" label="Масштаб по оси Z: " initialValue={10}>
        <InputNumber min={5} max={50} />
      </Form.Item>
      <Form.Item>
        <div className="modal_btn">
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
ScaleForm.PropTypes = {
  onSubmit: PropTypes.func,
};
export default ModalForm;
