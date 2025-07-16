import "dotenv/config";
import { diagnoseError, debugHint } from "./src/agentica/handlers";

async function main() {
  // ����: �����Ϸ� ���� �޽��� �׽�Ʈ
  const errorMessage = "error: expected ';' before 'return'";
  const diagnoseResult = await diagnoseError({ errorMessage });
  console.log("diagnoseError ���:", diagnoseResult.explanation);

  // ����: ���α׷� ��� �׽�Ʈ (debugHint)
  const output = "���α׷��� ���ѷ����� ���� �� �����ϴ�.";
  const debugResult = await debugHint({ output });
  console.log("debugHint ���:", debugResult.hint);
}

main(); 