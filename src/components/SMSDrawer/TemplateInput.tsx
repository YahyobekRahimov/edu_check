import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

interface ITemplateInput {
  index: number;
  message: string;
  handleSetMessage: (message: string) => void;
  handleDeleteTemplate: (messages: string) => void;
  handleUpdateTemplate: (
    prevMessage: string,
    newMessage: string
  ) => void;
}
const TemplateInput: React.FC<ITemplateInput> = ({
  index,
  message,
  handleSetMessage,
  handleDeleteTemplate,
  handleUpdateTemplate,
}) => {
  const [buttonsVisible, setButtonsVisible] =
    useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const handleMouseOver = () => {
    setButtonsVisible(true);
  };
  const handleMouseLeave = () => {
    setButtonsVisible(false);
  };
  useEffect(() => {
    setTimeout(() => {
      if (textAreaRef?.current) {
        textAreaRef?.current?.focus();
      }
    }, 1000);
  }, []);
  useEffect(() => {
    if (isEditing && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [isEditing]);
  const handleOk = () => {
    if (textAreaRef.current) {
      handleUpdateTemplate(message, textAreaRef?.current.value);
    }
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="relative w-max"
    >
      <div className="relative">
        <TextArea
          key={index}
          autoFocus={true}
          disabled={!isEditing}
          className={`bg-[#f0efef] xs:w-[290px] w-[250px] resize-none dark:bg-[var(--dark-background-800)] rounded-lg p-2 cursor-pointer`}
          style={
            !isEditing
              ? {
                  cursor: "pointer",
                  color: "black",
                  pointerEvents: "auto",
                }
              : {}
          }
          autoSize={true}
          onBlur={() => setIsEditing(false)}
          ref={textAreaRef}
        />
        <div
          onClick={() => {
            if (textAreaRef.current) {
              handleSetMessage(
                //@ts-ignore
                textAreaRef.current?.resizableTextArea?.textArea.value
              );
            }
          }}
          className="absolute top-0 left-0 bottom-0 right-0 cursor-pointer"
        ></div>
      </div>
      <div
        className={`absolute bottom-0 left-[50%] duration-200 translate-y-[95%] translate-x-[-50%] flex gap-5 ${
          buttonsVisible && !isEditing
            ? "pointer-events-auto opacity-100 scale-100 z-10"
            : "pointer-events-none opacity-0 z-[-10] scale-0"
        }`}
      >
        <Button
          className="relative"
          type="primary"
          onClick={() => setIsEditing(true)}
        >
          <EditOutlined className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </Button>
        <Button
          className="relative"
          danger
          type="primary"
          onClick={() => handleDeleteTemplate(message)}
        >
          <DeleteOutlined className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </Button>
      </div>
      <Button
        type="primary"
        className={`w-max h-max absolute right-0 bottom-0 translate-x-[100%] ${
          isEditing
            ? "pointer-events-auto opacity-100 scale-100"
            : "pointer-events-none opacity-0 z-[-10] scale-0"
        }`}
        onClick={handleOk}
      >
        OK
      </Button>
    </div>
  );
};

export default TemplateInput;
