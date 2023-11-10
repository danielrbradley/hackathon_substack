import * as pulumi from "@pulumi/pulumi";

const sub1 = new pulumi.Program("sub1", {
  source: "../subStack",
  config: {
    myTag: pulumi.getStack(),
  },
});

const sub2 = new pulumi.Program("sub2", {
  source:
    "https://github.com/danielrbradley/hackathon_substack/tree/master/subStack",
  config: {
    myTag: sub1.outputs.domainName,
  },
});

export const sub2Outputs = sub2.outputs;
export const sub1Outputs = sub1.outputs;
