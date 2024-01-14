import { test, expect } from "vitest";

// @ts-ignore
import React from "https://esm.sh/react@18.2.0";

test("react", async () => {
  expect(React.version).toBe("18.2.0")
});
