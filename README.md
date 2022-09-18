<img src="https://docs.deta.sh/img/logo.svg" width=200>

# S3: deta-s3rver
[s3rver](https://github.com/jamhall/s3rver) running on [Deta Micros](https://www.deta.sh/)

> S3rver is a lightweight server that responds to some of the same calls Amazon S3 responds to. It is extremely useful for testing S3 in a sandbox environment without actually making calls to Amazon. The goal of S3rver is to minimise runtime dependencies and be more of a development tool to test S3 calls in your code rather than a production server looking to duplicate S3 functionality.

<br>

[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy?repo=https://github.com/lmangani/deta-s3rver)

### Features
#### Storage
- [x] Ephemeral storage using `/tmp` _(quick expiration)_
- [ ] Persistent storage using Deta Drive _(no expiration)_
- [ ] Persistent storage using Deta Base _(TTL expiration)_
#### Supported methods
##### Buckets
- [x] Create bucket
- [x] Delete bucket
- [x] List buckets
- [x] List content of buckets _(prefix, delimiter, marker and max keys, common prefixes)_
##### Objects
- [x] Put object _(support for metadata, including ContentEncoding (gzipped files)_
- [x] Post object _(multipart)_
- [x] Delete object(s)
- [x] Get object _(including using the HEAD method)_
- [x] Get dummy ACLs for an object
- [x] Copy object _(including updating of metadata)_
- [x] Listen to Put, Copy, Post and Delete events.

### Testing
Test using a [supported S3 client](https://github.com/jubos/fake-s3/wiki/Supported-Clients)

<br>

##### About Deta 
This project is powered by [Deta](https://deta.sh), a free cloud crafted with the developer and user experience at heart.
