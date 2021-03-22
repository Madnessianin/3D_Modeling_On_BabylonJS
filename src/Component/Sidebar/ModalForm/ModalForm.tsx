import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Form } from "antd";

const ModalForm = ({visible}) => {
  const [visibleMode, setVisibleMode] = useState(visible);

  useEffect((): void => {
    setVisibleMode(visible);
  }, [visible]);

  const onSubmit = (): void => {};

  return (
    <Modal
      title="Изменить масштаб: "
      visible={visibleMode}
      centered
      footer={null}
    >
        
    </Modal>
  );
};

ModalForm.PropTypes = {
    visible: PropTypes.bool
}

const ScaleForm = () => {
    return (
        <Form className="modalForm"
              name="scale">

        </Form>
    )
};

export default ModalForm;
