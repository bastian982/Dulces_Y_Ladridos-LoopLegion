import path from 'node:path'

export default {
  root: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~@popperjs/core': path.resolve(__dirname, 'node_modules/@popperjs/core')
    }
  },
  server: {
    port: 8081,
    hot: true
  }
}