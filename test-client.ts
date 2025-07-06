import WebSocket from "ws";

const socket = new WebSocket("ws://localhost:3000");

socket.on("open", () => {
  console.log("? WebSocket �����");

  // Agentica �������� �⺻ ��û�� ������ JSON ���� (����)
  const message = {
    id: "1", // ��û ID
    method: "bbs.create",
    params: {
      input: {
        title: "GPT�� ���� ��",
        body: "������ �ڵ� �����߽��ϴ�.",
        thumbnail: null,
      },
    },
  };

  socket.send(JSON.stringify(message));
});

socket.on("message", (data) => {
  console.log("? ���� ����:", data.toString());
});

socket.on("error", (err) => {
  console.error("? ���� �߻�:", err);
});
