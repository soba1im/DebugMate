// ==========================
// DIAGNOSE_ERROR_SECTION
// This section contains code that will cause a compile-time error
// ==========================
void compileErrorDemo() {
    int x = 10  // Missing semicolon causes compile error
}

// ==========================
// DEBUG_HINT_SECTION
// This section contains code that may cause a runtime error
// ==========================
#include <stdio.h>
void debugHintDemo() {
    int a = 5, b = 0;
    printf("Result = %d\n", a / b);  // Division by zero at runtime
}

// ==========================
// LOOP_CHECK_SECTION
// This section contains a loop with an invalid termination condition
// ==========================
void loopCheckDemo() {
    int i = 0;
    while (i < 5) {
        // 'i' is never incremented, causing an infinite loop
        printf("i = %d\n", i);
    }
}

// ==========================
// SUGGEST_FIX_SECTION
// This section contains code with a logic error
// ==========================
void suggestFixDemo() {
    int arr[3];
    arr[3] = 100;  // Out-of-bounds array access
}

// ==========================
// TRACE_VAR_SECTION
// This section contains code for tracing variable changes
// ==========================
void traceVarDemo() {
    int x = 1;
    x += 2;                // x becomes 3
    for (int j = 0; j < 3; j++) {
        x *= 2;            // x doubles each iteration
    }
    // Final x value is 3 * 2^3 = 24
}

// ==========================
// main function: calls each demo section
// ==========================
int main() {
    // compileErrorDemo();   // Uncomment to test compile error section
    debugHintDemo();        // Tests runtime error section
    // loopCheckDemo();      // Uncomment for infinite loop test
    suggestFixDemo();       // Tests logic error section
    traceVarDemo();         // Tests variable trace section
    return 0;
}
