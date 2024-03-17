import { Drawer } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setSMSDrawer } from "../../redux/isPaymentModalOpenSlice";
import SMSForm from "./SMSForm";

export default function SMSDrawer() {
  const open = useAppSelector(
    (state) => state.isPaymentModalOpen.SMSDrawer.isOpen
  );
  console.log(open);

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
