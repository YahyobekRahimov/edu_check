import { Button, Tooltip } from "antd";

function GroupsHeader() {
  return (
    <div className="flex items-center justify-between  px-4 py-5 ">
      <div className=" text-[32px] font-semibold">Guruhlar</div>
      <div className="px-4">
        <Tooltip title={"Guruh qo'shish"}>
          <Button className="px-2" type="primary">
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
            </svg>
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default GroupsHeader;
