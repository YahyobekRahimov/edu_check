import { DatePicker, Form, Input, Radio, Select } from "antd";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { useState } from "react";

function FormComp() {
  const groupName = useAppSelector(
    (state) => state.ModalSlice.confirm.isGroup,
  );
  const modalData = useAppSelector(
    (state) => state.ModalSlice.userData,
  );

  return (
    <Form
      id='guruhQosh'
      layout='vertical'
      style={{ maxWidth: "100%", width: "100%" }}
    >
      <Form.Item
        initialValue={modalData.name}
        label={groupName ? groupName : "Guruh nomi"}
        className='w-full mt-6 dark:text-[var(--white-text)]'
        name={"guruh"}
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input className='w-full' />
      </Form.Item>
      <Form.Item
        initialValue={modalData.course}
        label='Kurslar'
        name='kurslar'
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Select>
          <Radio value='a'>Inglis-tili</Radio>
          <Radio value='b'>Rus-tili</Radio>
          <Radio value='c'>Matimatika</Radio>
          <Radio value='d'>Fizika</Radio>
        </Select>
      </Form.Item>
      <Form.Item
        initialValue={modalData.teacher}
        label="O'qituvchi"
        name='teacher'
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Select>
          <Radio value='a'>Teshaboyev A</Radio>
        </Select>
      </Form.Item>
      <Form.Item
        initialValue={modalData.opened}
        label='Ochilgan sana'
        rules={[{ required: true, message: "Please input!" }]}
      >
        <DatePicker  />
      </Form.Item>
      <Form.Item
      
        initialValue={modalData.rooms}
        label='Xonalar'
        name='rooms'
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Select >

          <Radio value='a'>4/203</Radio>
          <Radio value='b'>3/405</Radio>
          <Radio value='c'>4/102</Radio>
        </Select>
      </Form.Item>
    </Form>
  );
}

export default FormComp;
