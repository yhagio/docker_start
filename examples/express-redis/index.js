const redis = require('redis');
const express = require('express');

const app = express();
const client = redis.createClient({
  host: 'redis-server', // The name defined in `docker-compose.yml`
  port: 6379            // Default port for redis
});

client.set('visits', 0);

app.get('/', (_, res) => {
  client.get('visits', (err, visits) => {
    if (err) {
      console.error('>>>>>>> ERROR: ', err);
    }
    res.status(200).send({ visits });
    client.set('visits', parseInt(visits, 10) + 1);
  });
});

app.listen(8081, () => console.log('Started at port 8081'));
