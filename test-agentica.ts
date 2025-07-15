import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";
import { SGlobal } from "./src/SGlobal";

async function main() {
  const genAI = new GoogleGenerativeAI(SGlobal.env.GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // ����: �����Ϸ� ���� �޽��� �׽�Ʈ
  const errorMessage = "error: expected ';' before 'return'";
  const prompt = `���� �����Ϸ� ���� �޽����� ����� �����ϱ� ���� �����ϰ�, ���ΰ� �ذ�å�� �������.\n\n${errorMessage}`;
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

main(); 