import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import apiDocsModuleCrd from '@terasky/backstage-plugin-api-docs-module-crd';
import { navModule } from './modules/nav';
import { homeModule } from './modules/home';

export default createApp({
  features: [
    catalogPlugin,
    navModule,
    homeModule,
    apiDocsModuleCrd,
  ],
});
