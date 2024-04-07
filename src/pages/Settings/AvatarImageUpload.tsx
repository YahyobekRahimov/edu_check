import { Image, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { GetProp } from "antd/lib";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export default function AvatarImageUpload() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  // @ts-ignore
  const [fileList, setFileList] = useState<UploadFile>({
    uid: "",
    name: "",
    url: "https://",
  });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange = () => {
    axios
      .post(
        "http://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5&source=https://picsum.photos/200/300"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const UploadButton = (
    <button
      className="w-10"
      style={{ border: 0, background: "none" }}
      type="button"
    >
      <PlusOutlined />
    </button>
  );
  return (
    <div className="w-[200px] h-[200px]">
      <Upload
        listType="picture-circle"
        fileList={[fileList]}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {UploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) =>
              !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
}
