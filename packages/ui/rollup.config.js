import typescript from '@wessberg/rollup-plugin-ts';
import replace from 'rollup-plugin-replace';
import commonJs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const isWatching = !!process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    'react/jsx-runtime',
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    ...(!isWatching
      ? [
          replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
          commonJs(),
          terser(),
        ]
      : []),
    typescript({}),
  ],
};
