import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Code, Function , Runtime} from 'aws-cdk-lib/aws-lambda'
import {join} from 'path'

export class ReactStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new Function(this, 'Hello-Lambda', {
      runtime: Runtime.NODEJS_14_X,
      memorySize: 128,
      code: Code.fromAsset(join(__dirname,'../lambdas')),
      handler: 'app.handler'
    });

    
  }
}
