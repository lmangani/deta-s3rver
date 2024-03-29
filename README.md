<a href="https://deta.space/discovery/r/btsgyxlypadef6yv" target="_blank">
<img src="https://raw.githubusercontent.com/deta/.github/main/profile/deta.svg" width=200>
</a>a>

# S3: deta-s3rver
:rocket: [s3rver](https://github.com/jamhall/s3rver) S3 compatible adaptor running on [Deta Space](https://deta.space/) 

> S3rver is a lightweight server that responds to some of the same calls Amazon S3 responds to. It is extremely useful for testing S3 in a sandbox environment without actually making calls to Amazon. The goal of S3rver is to minimise runtime dependencies and be more of a development tool to test S3 calls in your code/CI.

<br>

**s3rver** emulates a basic **S3** API on top of Deta Space **Drive** and **Base**.<br>
Data and Metadata is safely stored in your personal Deta Space storage, ready to use. 

![image](https://github.com/lmangani/deta-s3rver/assets/1423657/72d2a6aa-0f1a-4813-85a7-cf1479538bd6)



### :gear: Supported Features 
#### 🧱 Storage
- [x] Ephemeral storage using [`/tmp`](https://docs.deta.sh/docs/micros/faqs_micros#why-can-i-not-write-to-the-filesystem-in-a-micro) _(instance idle expiration)_
- [x] Persistent file storage using Deta Drive
- [x] Persistent metadata and listing using Deta Base
#### 🧱 Buckets
- [x] Create bucket
- [x] Delete bucket
- [x] List buckets
- [x] List content of buckets _(prefix, delimiter, marker and max keys, common prefixes)_
#### 🧱 Objects
- [x] Put object _(support for metadata, including ContentEncoding (gzipped files)_
- [x] Post object _(multipart)_
- [x] Delete object(s)
- [x] Get object _(including using the HEAD method)_
- [x] Get dummy ACLs for an object
- [x] Copy object _(including updating of metadata)_
- [x] Listen to Put, Copy, Post and Delete events.

<hr>

#### 🧪 Validation
Test your deta-s3rver using a [supported S3 client](https://github.com/jubos/fake-s3/wiki/Supported-Clients)

S3rver source and API documentation are available at [jamhall/s3rver](https://github.com/jamhall/s3rver)

<hr>

### <img src="https://docs.deta.sh/img/logo.svg" width=25> About Deta 
This project is powered by [Deta](https://deta.sh), a free cloud crafted with the developer and user experience at heart :heart:
