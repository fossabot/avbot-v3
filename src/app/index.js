require('../config/setup');

const dayjs = require('dayjs');
const { ShardingManager } = require('discord.js');
const services = require('../config/services');

const manager = new ShardingManager('src/app/bot.js', {
  totalShards: 'auto',
  token: services.discord.token,
});

manager.on('shardCreate', (shard) =>
  console.log(`${dayjs()} Launched shard ${shard.id}`)
);
manager.spawn();
