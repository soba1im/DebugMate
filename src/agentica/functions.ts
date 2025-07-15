import { diagnoseError, debugHint } from "./handlers";
import typia from "typia";

export class ErrorDiagnosisService {
  async diagnoseError({ errorMessage }: { errorMessage: string }) {
    return diagnoseError({ errorMessage });
  }
  async debugHint({ output }: { output: string }) {
    return debugHint({ output });
  }
}

// typia.llm.application<ErrorDiagnosisService, "chatgpt">()�� agentica�� ����ؼ� ��� 