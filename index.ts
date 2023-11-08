import * as pulumi from "@pulumi/pulumi";

const substack1 = new pulumi.Stack("sub1", {
  source: "subStack",
  prefixResourceNames: true,
  inputs: {
    stack: "MyStack",
  },
});

const substack2 = new pulumi.Stack("sub2", {
  source:
    "https://github.com/danielrbradley/hackathon_substack/tree/master/subStack",
  prefixResourceNames: true,
  inputs: {
    stack: substack1.outputs.domainName,
  },
});

export const substack2Outputs = substack2.outputs;
