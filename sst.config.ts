/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'next-auth',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc('Vpc');
    const cluster = new sst.aws.Cluster('Cluster', { vpc });
    const clerkSecretKeySecret = new sst.Secret('ClerkSecretKey');
    const service = cluster.addService('NextAuthApp', {
      ...($dev
        ? {}
        : {
            containers: [
              {
                name: 'next-auth',
                image: {
                  context: '.',
                  dockerfile: 'apps/next-auth/Dockerfile',
                },
                environment: {
                  CLERK_SECRET_KEY: clerkSecretKeySecret.value,
                },
              },
            ],
            loadBalancer: {
              ports: [{ listen: '80/http', forward: '3000/http' }],
            },
            serviceRegistry: {
              port: 80,
            },
          }),
      dev: {
        command: 'pnpm nx run next-auth:dev',
      },
      link: [clerkSecretKeySecret],
    });
    // const api = new sst.aws.ApiGatewayV2('MyApi', {
    //   vpc,
    // });
    // if (!$dev) api.routePrivate('$default', service.nodes.cloudmapService.arn);
  },
});
