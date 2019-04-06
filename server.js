const express = require('express');
const expressGrapghQL = require('express-graphql');
const schema = require('./schema');
const app = express();

app.use('graphql', expressGrapghQL({
    schema:schema,
    graphql:true
}));

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});