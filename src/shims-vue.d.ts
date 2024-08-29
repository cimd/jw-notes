/* eslint-disable */

/// <reference types="vite/client" />

// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@vue/runtime-core' {
  import { IUser } from 'modules/Auth/models/UserInterface';

  interface ComponentCustomProperties {
    $config: { user: IUser }
  }
}
