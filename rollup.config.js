import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'es',
        },
    ],
    plugins: [typescript(), terser()],
};