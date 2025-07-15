import { SGlobal } from "../SGlobal";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: SGlobal.env.OPENAI_API_KEY });

export async function diagnoseError({ errorMessage }: { errorMessage: string }) {
  const prompt = `���� �����Ϸ� ���� �޽����� ����� �����ϱ� ���� �����ϰ�, ���ΰ� �ذ�å�� �������.\n\n${errorMessage}`;
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  return { explanation: res.choices[0].message.content };
}

export async function debugHint({ output }: { output: string }) {
  const prompt = `���� ���α׷� ����� ����, � ������ ������ �����ϰ� ����� ��Ʈ�� ��������.\n\n${output}`;
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  return { hint: res.choices[0].message.content };
}
