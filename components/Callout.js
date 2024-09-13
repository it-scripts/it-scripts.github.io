// src/components/callout.tsx
import cn from "clsx";
import { IconInfoCircle, IconCircleCheck, IconAlertCircle, IconAlertTriangle } from '@tabler/icons-react'
import { jsx, jsxs } from "react/jsx-runtime";
var TypeToEmoji = {
  default: "\u{1F4A1}",
  success: /* @__PURE__ */ jsx(IconCircleCheck, { className: "mt-1 size-5"}),
  error: /* @__PURE__ */ jsx(IconAlertTriangle, { className: "mt-1 size-5" }),
  info: /* @__PURE__ */ jsx(IconInfoCircle, { className: "mt-1 size-5" }),
  warning: /* @__PURE__ */ jsx(IconAlertCircle, { className: "mt-1 size-5" })
};
var classes = {
  default: cn(
    "border border-orange-100 bg-orange-50 text-orange-800 dark:border-0 dark:bg-orange-400/20 dark:text-orange-300"
  ),
  success: cn(
    "border border-green-50 bg-green-50 text-green-900 dark:border-0 dark:bg-green-900/30 dark:text-green-200"
  ),
  error: cn(
    "border border-red-100 bg-red-100 text-red-900 dark:border-0 dark:bg-red-900/30 dark:text-red-200"
  ),
  info: cn(
    "border border-blue-100 bg-blue-100 text-blue-900 dark:border-0 dark:bg-blue-900/30 dark:text-blue-200"
  ),
  warning: cn(
    "border border-yellow-50 bg-yellow-50 text-yellow-900 dark:border-0 dark:bg-yellow-700/30 dark:text-yellow-200"
  )
};
function Callout({
  children,
  type = "default",
  emoji = TypeToEmoji[type]
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4",
        "contrast-more:nx-border-current contrast-more:dark:nx-border-current",
        classes[type]
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",
            style: {
              fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            },
            children: emoji
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "nx-w-full nx-min-w-0 nx-leading-7", children })
      ]
    }
  );
}
export {
  Callout
};
