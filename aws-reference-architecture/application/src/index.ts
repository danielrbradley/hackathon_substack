import { classic as awsx } from "@pulumi/awsx";
import { Config, getStack } from "@pulumi/pulumi";
import {Application} from "./application";

const config = new Config();

const baseTags = {
    Project: "Pulumi Demo",
    PulumiStack: getStack(),
};

const app = new Application("app", {
    description: `${baseTags.Project} Application`,
    baseTags: baseTags,

    vpcId: config.require("appVpcId"),

    // ALB in public subnets
    albSubnetIds:  config.requireObject("appVpcPublicSubnetIds"),

    // App resources in private subnets
    appSubnetIds:  config.requireObject("appVpcPrivateSubnetIds"),

    appImage: awsx.ecs.Image.fromPath("app", "./src/backend"),
    appPort: 80,

    dbName: config.require("dbName"),
    dbUsername: config.require("dbUsername"),
    dbPassword: config.requireSecret("dbPassword"),
    dbPort: config.require("dbPort"),
    dbHost: config.require("dbAddress"),
});

export const albAddress = app.albAddress();
