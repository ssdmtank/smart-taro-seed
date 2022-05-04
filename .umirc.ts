import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'smart-taro',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  devServer: {
    host: '0.0.0.0',
    port: 12345,
    https: true,
  },
  define: {
    'process.env.TARO_ENV': 'h5',
    LOCATION_APIKEY: JSON.stringify('J3OBZ-WBJKG-M5DQZ-IJQ4V-FSK2H-BTBZV'),
    BUILD_MODE: JSON.stringify(undefined),
  },
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/ssdmtank/smart-taro' },
    { title: 'Gitee', path: 'https://github.com/ssdmtank/smart-taro' },
    {
      title: '更新日志',
      path: 'https://github.com/ssdmtank/smart-taro/releases',
    },
  ],
  headScripts: [
    {
      'data-name': 'BMC-Widget',
      'data-cfasync': 'false',
      src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
      'data-id': 'innocces',
      'data-description': 'Support me on Buy me a coffee!',
      'data-message': '_(:з」∠)_ thanks',
      'data-color': '#BD5FFF',
      'data-position': 'Right',
      'data-x_margin': '18',
      'data-y_margin': '18',
    },
  ],
  themeConfig: {
    hd: {
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
  // more config: https://d.umijs.org/config
});
