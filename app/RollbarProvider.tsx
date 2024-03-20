"use client";

import { Provider } from "@rollbar/react"; // Provider imports 'rollbar'
import { PropsWithChildren } from "react";
import Rollbar from "rollbar";

const rollbarConfig: Rollbar.Configuration = {
  accessToken: process.env.NEXT_PUBLIC_ROLLBAR_CLIENT_TOKEN,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
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

export default function RollbarProvider({ children }: PropsWithChildren) {
  return <Provider config={rollbarConfig}>{children}</Provider>;
}
