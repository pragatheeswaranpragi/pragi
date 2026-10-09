import pragiString from "pragi-string";
export const packageModes = [
  {
    id: "titleCase",
    label: "Text",
    example: "hello from pragi",
    hint: "Try a sentence",
    code: "pragiString.titleCase(input, { trim: true })",
  },
  {
    id: "humanizeNumber",
    label: "Numbers",
    example: "1234567",
    hint: "Try a number (0–999,999,999)",
    code: "pragiString.humanizeNumber(input)",
  },
  {
    id: "toDigitalTime",
    label: "Time",
    example: "3665",
    hint: "Try a duration in seconds (0–86,400)",
    code: "pragiString.toDigitalTime(input)",
  },
];
export function transformPackageInput(mode, raw) {
  if (mode === "titleCase")
    return pragiString.titleCase(String(raw).slice(0, 120), { trim: true });
  const text = String(raw).trim();
  if (!/^\d+$/.test(text))
    throw new Error("Enter a whole number, zero or above.");
  const n = Number(text),
    max = mode === "toDigitalTime" ? 86400 : 999999999;
  if (!Number.isSafeInteger(n) || n > max)
    throw new Error(`Enter a number from 0 to ${max.toLocaleString("en-IN")}.`);
  if (mode === "humanizeNumber") return pragiString.humanizeNumber(n);
  if (mode === "toDigitalTime") return pragiString.toDigitalTime(n);
  throw new Error("Choose a supported example.");
}
