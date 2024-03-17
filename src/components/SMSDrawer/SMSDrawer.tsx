import { Drawer } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setSMSDrawer } from "../../redux/ModalSlice";
import SMSForm from "./SMSForm";

export default function SMSDrawer() {
  const open = useAppSelector(
    (state) => state.ModalSlice.SMSDrawer.isOpen
  );

  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setSMSDrawer(false));
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <SMSForm />
    </Drawer>
  );
}
