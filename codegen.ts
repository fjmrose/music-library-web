import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            'http://localhost:3101/graphql': {
                headers: {
                    'x-app-introspect-auth': 'not-setup-yet',
                },
            },
        },
    ],
    documents: './src/**/*.{tsx,graphql}',
    generates: {
        'src/graphql/generated.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
        },
        './graphql.schema.json': { plugins: ['introspection'] },
    },
    config: {
        maybeValue: 'T | null',
    },
}

export default config