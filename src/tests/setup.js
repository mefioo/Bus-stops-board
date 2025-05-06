import { afterEach, beforeEach, vi } from "vitest";
import * as axios from "axios";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

beforeEach(() => {
  vi.mock("axios");
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
