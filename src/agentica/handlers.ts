import { SGlobal } from "../SGlobal";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(SGlobal.env.GEMINI_API_KEY || ""); 

export async function diagnoseError({ errorMessage }: { errorMessage: string }) {
  const prompt = `���� �����Ϸ� ���� �޽����� ����� �����ϱ� ���� �����ϰ�, ���ΰ� �ذ�å�� �������.\n\n${errorMessage}`;
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  return { explanation: result.response.text() };
}

export async function debugHint({ output }: { output: string }) {
  const prompt = `���� ���α׷� ����� ����, � ������ ������ �����ϰ� ����� ��Ʈ�� ��������.\n\n${output}`;
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  return { hint: result.response.text() };
}
