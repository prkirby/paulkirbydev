module.exports = {
  webpack: (config, { defaultLoaders }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config

    config.module.rules.push({
      test: /\.(mp3)$/i,
      loader: 'file-loader',
    })

    // Important: return the modified config
    return config
  },
}
