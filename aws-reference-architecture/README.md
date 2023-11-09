# AWS StackReference Architecture

This will deploy a Data VPC and an application VPC that is peered. It will deploy an RDS Instance into the Data VPC and it will
run a sample application in ECS that is fronted with an ALB.

The system has the following layers:

1. Networking
2. Database
3. Application

## Pre-Requisites

1. [Install Pulumi](https://www.pulumi.com/docs/reference/install).
1. Install [Node.js](https://nodejs.org/en/download).
1. Install a package manager for Node.js, such as [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/lang/en/docs/install).
1. [Configure AWS Credentials](https://www.pulumi.com/docs/reference/clouds/aws/setup/).
1. Restore packages e.g. `yarn --cwd networking && yarn --cwd database && yarn --cwd application`

## First Run

1. Set AWS region: `pulumi config set aws:region us-west-2`
1. Set database credentials:
    - `pulumi config set dbUsername dbAdmin`
    - `pulumi config set --secret dbPassword $(openssl rand -base64 24)`
    - `pulumi config set dbName mainDb`

## Deploying

Run `pulumi up`
