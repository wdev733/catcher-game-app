import { resolve } from 'path';

import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: resolve(__dirname, './catcherSwagger.json'),
  apiFile: '../services/catcher',
  apiImport: 'catcherApi',
  outputFile: '../services/catcher/api.ts',
  exportName: 'catcherApi',
  hooks: { queries: true, lazyQueries: true, mutations: true },
};

export default config;
