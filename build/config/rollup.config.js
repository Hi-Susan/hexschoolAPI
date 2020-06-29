import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    plugins: ['@babel/plugin-transform-runtime']
  })
]
const output = {
  banner: '/*! GLP Lucky Draw Platform */',
  dir: 'dist/js/',
  format: 'cjs'
}

export default [
  {
    input: 'build/js/index.js',
    output,
    plugins
  }
]
