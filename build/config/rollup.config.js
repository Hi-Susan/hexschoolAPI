import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const plugins = [
  
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    plugins: ['@babel/plugin-transform-runtime']
  }),
  resolve(),
  commonjs(),
]
const output = {
  dir: 'dist/js/',
  format: 'iife'
}

export default [
  {
    input: 'build/js/index.js',
    output,
    plugins
  }
]
