'use strict'

module.exports = function (shipit) {
  require('shipit-deploy')(shipit)
  require('shipit-cnpm')(shipit)
  shipit.initConfig({
    default: {
      workspace: '/tmp/deploy/shipit-demo',
      deployTo: '/home/work/shipit-demo',
      repositoryUrl: 'https://github.com/568815707/deploy-demo.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      key: '/path/to/key',
      shallowClone: true,
      cnpm: {
        flags: '--production',
        local: false,
        npm: 'cnpm',
        remote: true
      },
      pm: {
        production: {
          path: '/home/work/deploy-demo/current/pm2/production.json'
        },
        development: {
          path: '/home/work/deploy-demo/current/pm2/development.json'
        }
      }
    },
    production: {
      servers: ['root@39.106.194.105'],
      branch: 'master'
    },
    development: {
      servers: ['root@39.106.194.105'],
      branch: 'test'
    }
  })
}
