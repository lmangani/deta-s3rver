/*
 * S3rver on Deta Micro w/ Deta Base (metadata) + Drive (files) storage
 * 
 * ENV BUCKETS = comma separated buckets (test,default,etc)
 * ENV DETA_TOKEN = provided by Micro runtime
 * ENV DETA_RUNTIME = provided by Micro runtime
 * 
 */

const express = require('express')
const app = express()
const S3rver = require('@qxip/s3rver');

// Set Buckets from BUCKETS ENV csv
var BUCKETS = process.env.BUCKETS.split(',').map(name => ({name})) || false;
const s3rver = new S3rver({
    port: 4569,
    address: 'localhost',
    silent: false,
    directory: '/tmp/s3',
    allowMismatchedSignatures: true,
    vhostBuckets: false,
    configureBuckets: BUCKETS || [{ name: 'test'}]
}).run(function(){ console.log('s3rver running')});

// S3 API middleware
app.any('*', (req, res) => { s3rver.getMiddleware()(req, res) })

const isMicro = process.env.DETA_RUNTIME || process.env.DETA_RUNTIME || false;
if (!isMicro) app.listen({port: process.env.PORT || 4568, host: process.env.HOST || "0.0.0.0"})
module.exports = app;
