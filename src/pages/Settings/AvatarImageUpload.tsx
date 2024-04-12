import { App, Button, Image } from "antd";
import { ChangeEvent, useState } from "react";
import {
  PlusOutlined,
  UserOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setCurrentUserImage } from "../../redux/currentUserSlice";

export default function AvatarImageUpload() {
  const { message, modal } = App.useApp();
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const previewImage = useAppSelector(
    (state) => state.currentUser.image
  );
  const dispatch = useAppDispatch();
  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.["0"]) {
      const url = URL.createObjectURL(e.target.files[0]);
      dispatch(setCurrentUserImage(url));
      message.success("Profilingizga yangi rasm qo'yildi.");
    }
  };
  const handleDelete = () => {
    modal.confirm({
      content: "Shu rasmni o'chirishga ishonchingiz komilmi?",
      onOk: () => {
        dispatch(setCurrentUserImage(""));
        message.success("Rasm o'chirib tashlandi!");
      },
      okText: "Ha",
      cancelText: "Yo'q",
    });
  };
  return (
    <div
      className={`w-[200px] h-[200px] rounded-full relative ${
        previewImage
          ? ""
          : "dark:bg-[rgba(255,255,255,0.25)] bg-[#f2f2f2]"
      }`}
    >
      {previewImage ? (
        <Image
          src={previewImage}
          alt="user image"
          rootClassName={`rounded-full overflow-hidden`}
          wrapperClassName="w-[200px] h-[200px]"
          preview={{
            visible: previewOpen,
            onVisibleChange: (value) => setPreviewOpen(value),
            destroyOnClose: true,
          }}
        />
      ) : (
        <UserOutlined className="text-[150px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      )}
      <Button
        type="primary"
        className="absolute bottom-0 left-[50%] z-10 w-10 h-10 translate-y-[50%] translate-x-[-50%] cursor-pointer"
      >
        <label
          className="absolute top-0 left-0 cursor-pointer w-10 h-10 z-10"
          htmlFor="file-accept-123"
        ></label>
        <input
          id="file-accept-123"
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          className="absolute hidden"
          onChange={handleImgChange}
        />
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-150">
          <PlusOutlined />
        </span>
      </Button>
      <Button
        disabled={previewImage == "" ? true : false}
        onClick={handleDelete}
        type="primary"
        danger
        className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] w-10 h-10 flex items-center justify-center"
      >
        <DeleteOutlined className="scale-150" />
      </Button>
    </div>
  );
}
