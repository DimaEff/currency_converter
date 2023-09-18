/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_X_RAPID_API_KEY: string;
  readonly VITE_X_RAPID_API_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
