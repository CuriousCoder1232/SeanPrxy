module.exports = {
  apps: [
    {
      name: "PetsyProxy",
      script: "./server.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-54-226-180-119.compute-1.amazonaws.com",
      key: "/home/sean/.ssh/PetsyProxy.pem",
      ref: "origin/master",
      repo: "https://github.com/ByeEric/ProxyS.git",
      path: "/home/ubuntu/petsy",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
