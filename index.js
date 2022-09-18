/* S3rver on deta micro */
/*
 * NOTE: all data is EPHEMERAL until deta base storage is implemented
 *
 */
const express = require('express')
const app = express()
const S3rver = require('s3rver');
const s3rver = new S3rver({
    port: 4569,
    address: 'localhost',
    silent: false,
    directory: '/tmp/s3',
    allowMismatchedSignatures: true,
    vhostBuckets: false,
    configureBuckets: [{ name: 'test'}]
}).run(function(){ console.log('running')});

// S3 API Mapping
app.get('*', (req, res) => { s3rver.getMiddleware()(req, res) })
app.put('*', (req, res) => { s3rver.getMiddleware()(req, res) })
app.post('*',(req, res) => { s3rver.getMiddleware()(req, res) })

const isMicro = process.env.DETA_RUNTIME || process.env.DETA_RUNTIME || false;
if (!isMicro) app.listen({port: process.env.PORT || 4568, host: process.env.HOST || "0.0.0.0"})
module.exports = app;
