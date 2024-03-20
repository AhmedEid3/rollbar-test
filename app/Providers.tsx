"use client";
import { Provider } from "@rollbar/react"; // Provider imports 'rollbar'
import { PropsWithChildren } from "react";
import Rollbar from "rollbar";

const rollbarConfig: Rollbar.Configuration = {
  accessToken: process.env.NEXT_PUBLIC_ROLLBAR_CLIENT_TOKEN,
  environment: "testenv",
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    client: {
      javascript: {
        code_version: "1.0.0",
        source_map_enabled: true,
      },
    },
  },
};

// Provider instantiates Rollbar client instance handling any uncaught errors or unhandled promises in the browser
// ErrorBoundary catches all React errors in the tree below and logs them to Rollbar
export default function Providers({ children }: PropsWithChildren) {
  return <Provider config={rollbarConfig}>{children}</Provider>;
}
