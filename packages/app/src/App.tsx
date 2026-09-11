import { SignInPage } from '@backstage/core-components';
import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { createFrontendModule } from '@backstage/frontend-plugin-api';
import { createApp } from '@backstage/frontend-defaults';
import { SignInPageBlueprint } from '@backstage/plugin-app-react';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import apiDocsModuleCrd from '@terasky/backstage-plugin-api-docs-module-crd';
import { navModule } from './modules/nav';
import { homeModule } from './modules/home';

const signInPage = SignInPageBlueprint.make({
  params: {
    loader: async () => props =>
      (
        <SignInPage
          {...props}
          provider={{
            id: 'github-auth-provider',
            title: 'GitHub',
            message: 'Sign in using GitHub',
            apiRef: githubAuthApiRef,
          }}
        />
      ),
  },
});

export default createApp({
  features: [
    catalogPlugin,
    navModule,
    homeModule,
    createFrontendModule({
      pluginId: 'app',
      extensions: [signInPage],
    }),
    apiDocsModuleCrd,
  ],
});
