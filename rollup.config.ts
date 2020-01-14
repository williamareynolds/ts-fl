import typescript from '@rollup/plugin-typescript'
// @ts-ignore
import pkg from './package.json'

const lib = 'ts-fl'
const input = `src/${lib}.ts`

export default [
  {
    input,
    output: {
      name: 'tsFl',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      typescript()
    ]
  },
  {
    input,
    output: [
      { file: pkg.main, format: 'es' },
      { file: pkg.module, format: 'cjs' }
    ],
    plugins: [
      typescript()
    ]
  }
]
