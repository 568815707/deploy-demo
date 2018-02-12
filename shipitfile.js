'use strict'

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  require('shipit-cnpm')(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/tmp/deploy_to',
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
    staging: {
      servers: ['root@39.106.194.105'],
	    branch: 'master'
    }
  }
  });
};
