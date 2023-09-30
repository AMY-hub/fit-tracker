// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
module.exports = {
    reactStrictMode: false,
    compiler: {
    styledComponents: {
      ssr: true,
    },
  },
    // Для пакета @svgr/webpack
    webpack (config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: {
                and: [/\.(js|ts|md)x?$/]
            },
            use: [{
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        plugins: [{
                            name: 'removeViewBox',
                            active: false
                        }]
                    }
                }
            }],
        });
        return config;
    },
};
