import { useState } from "react";
import { Table, Button } from "antd";

export default function Results() {
  const [score, setScore] = useState(0);
  const [buttonPressed1, setButtonPressed1] = useState(false);
  const [buttonPressed2, setButtonPressed2] = useState(false);
  const [buttonPressed3, setButtonPressed3] = useState(false);
  const [buttonPressed4, setButtonPressed4] = useState(false);
  const [buttonPressed5, setButtonPressed5] = useState(false);
  const [ButtonPressed6, setButtonPressed6] = useState(false);
  const [ButtonPressed7, setButtonPressed7] = useState(false);
  const [ButtonPressed8, setButtonPressed8] = useState(false);
  const [ButtonPressed9, setButtonPressed9] = useState(false);

  const handleAddScore = (value: any) => {
    setScore(score + value);
  };

  return (
    <div>
      <p>Ummumiy achko'lar: {score}</p>
      <Table
        className="overflow-auto"
        columns={[
          {
            title: "shaxar tuman musobaqalari",
            dataIndex: "firstHeader",
            key: "firstHeader",
            children: [
              {
                title: "1",
                dataIndex: "firstHeader1",
                key: "firstHeader1",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(5);
                      setButtonPressed1(true);
                    }}
                    disabled={buttonPressed1}
                    style={{
                      backgroundColor: buttonPressed1
                        ? "green"
                        : "unset",
                      color: buttonPressed1 ? "white" : "black", // Matn rangini o'zgartirish
                    }}
                  >
                    5+
                  </Button>
                ),
              },
              {
                title: "2",
                dataIndex: "firstHeader2",
                key: "firstHeader2",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(20);
                      setButtonPressed2(true);
                    }}
                    disabled={buttonPressed2}
                    style={{
                      backgroundColor: buttonPressed2
                        ? "green"
                        : "unset",
                      color: buttonPressed2 ? "white" : "black", // Matn rangini o'zgartirish
                    }}
                  >
                    20+
                  </Button>
                ),
              },
              {
                title: "3",
                dataIndex: "firstHeader3",
                key: "firstHeader3",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(30);
                      setButtonPressed3(true);
                    }}
                    disabled={buttonPressed3}
                    style={{
                      backgroundColor: buttonPressed3
                        ? "green"
                        : "unset",
                      color: buttonPressed3 ? "white" : "black", // Matn rangini o'zgartirish
                    }}
                  >
                    30+
                  </Button>
                ),
              },
            ],
          },
          {
            title: "Viloyat Respublika musobaqalari",
            dataIndex: "firstHeader",
            key: "firstHeader",
            children: [
              {
                title: "1",
                dataIndex: "firstHeader1",
                key: "firstHeader1",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(5);
                      setButtonPressed4(true);
                    }}
                    disabled={buttonPressed4}
                    style={{
                      backgroundColor: buttonPressed4
                        ? "green"
                        : "unset",
                      color: buttonPressed4 ? "white" : "black", // Matn rangini o'zgartirish
                    }}
                  >
                    5+
                  </Button>
                ),
              },
              {
                title: "2",
                dataIndex: "firstHeader2",
                key: "firstHeader2",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(20);
                      setButtonPressed5(true);
                    }}
                    disabled={buttonPressed5}
                    style={{
                      backgroundColor: buttonPressed5
                        ? "green"
                        : "unset",
                      color: buttonPressed5 ? "white" : "black", // Matn rangini o'zgartirish
                    }}
                  >
                    20+
                  </Button>
                ),
              },
              {
                title: "3",
                dataIndex: "firstHeader3",
                key: "firstHeader3",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(30);
                      setButtonPressed6(true);
                    }}
                    disabled={ButtonPressed6}
                    style={{
                      backgroundColor: ButtonPressed6
                        ? "green"
                        : "unset",
                      color: ButtonPressed6 ? "white" : "black", // Matn rangini o'zgartirish
                    }}
                  >
                    30+
                  </Button>
                ),
              },
            ],
          },
          {
            title: "Respublika chempionati va kubogi musobaqalari",
            dataIndex: "firstHeader",
            key: "firstHeader",
            children: [
              {
                title: "1",
                dataIndex: "firstHeader1",
                key: "firstHeader1",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(5);
                      setButtonPressed7(true);
                    }}
                    disabled={ButtonPressed7}
                    style={{
                      backgroundColor: ButtonPressed7
                        ? "green"
                        : "unset",
                      color: ButtonPressed7 ? "white" : "black", // Matn rangini o'zgartirish
                    }}
                  >
                    5+
                  </Button>
                ),
              },
              {
                title: "2",
                dataIndex: "firstHeader2",
                key: "firstHeader2",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(20);
                      setButtonPressed8(true);
                    }}
                    disabled={ButtonPressed8}
                    style={{
                      backgroundColor: ButtonPressed8
                        ? "green"
                        : "unset",
                      color: ButtonPressed8 ? "white" : "black", // Matn rangini o'zgartirish
                    }}
                  >
                    20+
                  </Button>
                ),
              },
              {
                title: "3",
                dataIndex: "firstHeader3",
                key: "firstHeader3",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(30);
                      setButtonPressed9(true);
                    }}
                    disabled={ButtonPressed9}
                    style={{
                      backgroundColor: ButtonPressed9
                        ? "green"
                        : "unset",
                      color: ButtonPressed9 ? "white" : "black",
                    }}
                  >
                    30+
                  </Button>
                ),
              },
            ],
          },
          {
            title: "Respublika chempionati va kubogi musobaqalari",
            dataIndex: "firstHeader",
            key: "firstHeader",
            children: [
              {
                title: "1",
                dataIndex: "firstHeader1",
                key: "firstHeader1",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(5);
                      setButtonPressed7(true);
                    }}
                    disabled={ButtonPressed7}
                    style={{
                      backgroundColor: ButtonPressed7
                        ? "green"
                        : "unset",
                      color: ButtonPressed7 ? "white" : "black", // Matn rangini o'zgartirish
                    }}
                  >
                    5+
                  </Button>
                ),
              },
              {
                title: "2",
                dataIndex: "firstHeader2",
                key: "firstHeader2",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(20);
                      setButtonPressed8(true);
                    }}
                    disabled={ButtonPressed8}
                    style={{
                      backgroundColor: ButtonPressed8
                        ? "green"
                        : "unset",
                      color: ButtonPressed8 ? "white" : "black", // Matn rangini o'zgartirish
                    }}
                  >
                    20+
                  </Button>
                ),
              },
              {
                title: "3",
                dataIndex: "firstHeader3",
                key: "firstHeader3",
                render: () => (
                  <Button
                    type="primary"
                    onClick={() => {
                      handleAddScore(30);
                      setButtonPressed9(true);
                    }}
                    disabled={ButtonPressed9}
                    style={{
                      backgroundColor: ButtonPressed9
                        ? "green"
                        : "unset",
                      color: ButtonPressed9 ? "white" : "black",
                    }}
                  >
                    30+
                  </Button>
                ),
              },
            ],
          },
        ]}
        dataSource={[
          {
            key: "1",
            firstHeader1: "",
            firstHeader2: "",
            firstHeader3: "",
            secondHeader: "",
          },
        ]}
      />
    </div>
  );
}
