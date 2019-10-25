module.exports = {
  apps: [
    {
      name: 'dev',
      script: './bin/www',
      watch: ['./src'],
      env: {
        NODE_ENV: 'development'
      },
      exec_mode: 'cluster',
      instances: 4,
      max_memory_restart: '150M'
    }
  ]
}
