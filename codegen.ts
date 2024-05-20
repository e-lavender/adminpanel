import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: ['./src/**/*.ts'],
  generates: {
    'src/': {
      config: {
        withHooks: true,
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'shared/appolo-client/Schema.types.ts',
        extension: '.types.tsx',
      },
    },
    'src/shared/appolo-client/Schema.types.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true,
  schema: 'https://inctagram.work/api/v1/graphql',
}

export default config
