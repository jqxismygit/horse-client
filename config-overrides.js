const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            "@primary-color": "#0AB8DE", 
            "@btn-disable-color": "@btn-primary-color", 
            "@btn-disable-bg": "fade(#0AB8DE, 50%)", 
            "@btn-font-weight": "300",
            "@font-size-lg": "@font-size-base"
        },
    })(config, env);
    return config;
};