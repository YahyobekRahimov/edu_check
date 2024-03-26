import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import {
  Form,
  Modal,
  Input,
  Select,
  DatePicker,
  Button,
  App,
} from "antd";
import { setStudentEditModal } from "../../redux/ModalSlice";
import GroupsData from "../../data/groups.json";

export default function () {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const {} = App.useApp();
  const isOpen: boolean = useAppSelector(
    (state) => state.ModalSlice.studentEditModal.isOpen
  );
  const studentData = useAppSelector((state) => state.currentStudent);

  const handleClose = () => {
    dispatch(setStudentEditModal(false));
    form.resetFields(); // Reset form on close
  };

  const handleSave = () => {
    form
      .validateFields() // Validate form before saving
      .then((values) => {
        handleClose();
        console.log(values);
      })
      .catch((errorInfo) => {
        console.error("Form validation failed:", errorInfo);
      });
  };

  return (
    <Modal
      width={400}
      title="O'quvchini tahrirlash"
      open={isOpen} // Use open attribute for visibility (v5+)
      onCancel={handleClose}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          label="Ism"
          name="name"
          initialValue={studentData.name}
          rules={[
            { required: true, message: "Iltimos, ismni kiriting!" },
          ]}
        >
          <Input autoFocus />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          initialValue={studentData.phoneNumber}
          rules={[
            {
              required: true,
              message: "Iltimos, telefon raqamni kiriting!",
            },
          ]}
        >
          <Input type="tel" />
        </Form.Item>
        <Form.Item
          label="Group"
          name="group"
          initialValue={studentData.group}
          rules={[{ required: true }]}
        >
          <Select>
            {GroupsData.map((group) => (
              <Select.Option key={group.name} value={group.id}>
                {group.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Start Date"
          name="date"
          //   initialValue={"2025-03-02"}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
}
