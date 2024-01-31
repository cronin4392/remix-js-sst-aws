import { RemixSite, StackContext } from "sst/constructs";

export function RemixJs({ stack }: StackContext) {
  const site = new RemixSite(stack, "RemixJsSstAws-RemixJsStack");

  stack.addOutputs({
    url: site.url,
  });
}
