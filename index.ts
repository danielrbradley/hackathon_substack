import * as pulumi from "@pulumi/pulumi";
import { SubStack } from "@pulumi/pulumi/runtime/subStack";

const substack1 = new SubStack("sub1", {
  source: "subStack",
  prefixResourceNames: true,
  inputs: {
    stack: "MyStack",
  },
});

const substack2 = new SubStack("sub2", {
  source: "subStack",
  prefixResourceNames: true,
  inputs: {
    stack: substack1.outputs.domainName,
  },
});

export const substack2Outputs = substack2.outputs;
