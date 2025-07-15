import { WebSocketServer } from "tgrid";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SGlobal } from "../SGlobal";

const main = async (): Promise<void> => {
  const port = Number(SGlobal.env.PORT);
  const server = new WebSocketServer();
  const genAI = new GoogleGenerativeAI(SGlobal.env.GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  console.log(`Gemini function server running on port ${port}`);
  await server.open(port, async (acceptor) => {
    await acceptor.accept({
      async diagnoseError({ errorMessage }: { errorMessage: string }) {
        const prompt = `���� �����Ϸ� ���� �޽����� ����� �����ϱ� ���� �����ϰ�, ���ΰ� �ذ�å�� �������.\n\n${errorMessage}`;
        const result = await model.generateContent(prompt);
        return { explanation: result.response.text() };
      },
      async debugHint({ output }: { output: string }) {
        const prompt = `���� ���α׷� ����� ����, � ������ ������ �����ϰ� ����� ��Ʈ�� ��������.\n\n${output}`;
        const result = await model.generateContent(prompt);
        return { hint: result.response.text() };
      },
    });
    console.log(`Connection accepted: ${acceptor.path}`);
    console.log(`Available controllers: diagnoseError, debugHint`);
  });
  console.log(`WebSocket server running on port ${port}.`);
};
main().catch(console.error);
