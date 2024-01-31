import type { SSTConfig } from "sst";
import { IAM } from "~/stacks/IAM";
import { RemixJs } from "~/stacks/RemixJs";

export default {
  config(_input) {
    return {
      profile: "personal",
      name: "remix-js-sst-aws",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(RemixJs);
    app.stack(IAM);
  },
} satisfies SSTConfig;
