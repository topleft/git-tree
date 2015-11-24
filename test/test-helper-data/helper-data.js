
(function(){

  var data = {};

  module.exports = data;

  data.paths = {
    one: [ 'css', 'js', 'test', 'test/lib', 'test/lib/jasmine-2.0.0', 'test/model', 'server' ],
    two: [ 'css', 'js', 'js/main',  'test', 'test/lib', 'test/lib/jasmine-2.0.0' ],
    three: [ 'css', 'js', 'js/main',  'test', 'test/lib', 'test/lib/jasmine-2.0.0', 'server', 'server/test', 'server/test/group', 'server/model' ]
  };

  data.duplicatePaths = {
    one : [ 'css', 'js', 'test', 'test/lib/jasmine-2.0.0', 'css', 'js', 'test', 'test/lib/jasmine-2.0.0' ],
    two : [ 'css', 'js', 'js/main',  'test', 'test/lib', 'test/lib/jasmine-2.0.0', 'css', 'js', 'js/main',  'test', 'test/lib', 'test/lib/jasmine-2.0.0' ],
    three : [ 'css', 'js', 'js/main',  'test', 'test/lib', 'test/lib/jasmine-2.0.0', 'server', 'server/test', 'server/test/group', 'server/model', 'css', 'js', 'js/main',  'test', 'test/lib', 'test/lib/jasmine-2.0.0', 'server', 'server/test', 'server/test/group', 'server/model' ]
  }

  data.deepestPaths = {
    one: [ 'css', 'js', 'test/lib/jasmine-2.0.0', 'test/model', 'server' ],
    two: [ 'css', 'js', 'test/lib/jasmine-2.0.0' ],
    three: [ 'css', 'js/main', 'test/lib/jasmine-2.0.0', 'server/test/group', 'server/model'  ]
  };

  data.fileName = 'test';

  data.file = {
    "sha": "fb46a4fec0d44d014b318f5b00c61e9111898db4",
    "url": "https://api.github.com/repos/topleft/test/trees/fb46a4fec0d44d014b318f5b00c61e9111898db4",
    "tree": [
      {
        "path": "main.js",
        "mode": "100644",
        "type": "blob",
        "sha": "7e5a1f91d9f8531cb94ca839898fca58302a17b4",
        "size": 24,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/7e5a1f91d9f8531cb94ca839898fca58302a17b4"
      }
    ],
    "truncated": false
  };

  data.directoryName = 'test';

  data.directory = {
    "sha": "fb46a4fec0d44d014b318f5b00c61e9111898db4",
    "url": "https://api.github.com/repos/topleft/test/git/trees/fb46a4fec0d44d014b318f5b00c61e9111898db4",
    "tree": [
      {
        "path": "js",
        "mode": "040000",
        "type": "tree",
        "sha": "ed4d85c410cc3a645a470c07d6ec399f13e03346",
        "url": "https://api.github.com/repos/topleft/test/git/trees/ed4d85c410cc3a645a470c07d6ec399f13e03346"
      },
      {
        "path": "js/main.js",
        "mode": "100644",
        "type": "blob",
        "sha": "7e5a1f91d9f8531cb94ca839898fca58302a17b4",
        "size": 24,
        "url": "https://api.github.com/repos/topleft/test/git/blobs/7e5a1f91d9f8531cb94ca839898fca58302a17b4"
      }
    ],
    "truncated": false
  };

  data.smallRepoName = 'rezo-app-v2';

  data.smallRepo = {
    "sha": "b4b46964179d052cc9c88f00e2bf356269df353a",
    "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/trees/b4b46964179d052cc9c88f00e2bf356269df353a",
    "tree": [
      {
        "path": "mobile-wire-frames",
        "mode": "040000",
        "type": "tree",
        "sha": "9efc4aa0d5873158d2889ff2865bf9887d8015f6",
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/trees/9efc4aa0d5873158d2889ff2865bf9887d8015f6"
      },
      {
        "path": "mobile-wire-frames/IMG_3156 2.JPG",
        "mode": "100644",
        "type": "blob",
        "sha": "1ecef8a77f15ab9ba75e4c11d7724e383597d7ab",
        "size": 1530817,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/1ecef8a77f15ab9ba75e4c11d7724e383597d7ab"
      },
      {
        "path": "mobile-wire-frames/IMG_3156.JPG",
        "mode": "100644",
        "type": "blob",
        "sha": "1ecef8a77f15ab9ba75e4c11d7724e383597d7ab",
        "size": 1530817,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/1ecef8a77f15ab9ba75e4c11d7724e383597d7ab"
      },
      {
        "path": "mobile-wire-frames/IMG_3157.JPG",
        "mode": "100644",
        "type": "blob",
        "sha": "dc7c5c397f140e724938b3c9aa6e3de1cac53fd0",
        "size": 1201964,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/dc7c5c397f140e724938b3c9aa6e3de1cac53fd0"
      },
      {
        "path": "mobile-wire-frames/IMG_3158.JPG",
        "mode": "100644",
        "type": "blob",
        "sha": "80b213249ccf36f050534673a18a514908b43e3b",
        "size": 1442473,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/80b213249ccf36f050534673a18a514908b43e3b"
      },
      {
        "path": "mobile-wire-frames/IMG_3161.JPG",
        "mode": "100644",
        "type": "blob",
        "sha": "74c9e8fb7fa8f70280d2608474f0e19c3c485999",
        "size": 1367822,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/74c9e8fb7fa8f70280d2608474f0e19c3c485999"
      },
      {
        "path": "mobile-wire-frames/IMG_3162.JPG",
        "mode": "100644",
        "type": "blob",
        "sha": "a279ad81cd027b68788c62cc5495f3f2a44e8c89",
        "size": 1271968,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/a279ad81cd027b68788c62cc5495f3f2a44e8c89"
      },
      {
        "path": "mobile-wire-frames/IMG_3163.JPG",
        "mode": "100644",
        "type": "blob",
        "sha": "f765f811bf21f1d83b45000c38de1d0e451d3e3b",
        "size": 1200829,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/f765f811bf21f1d83b45000c38de1d0e451d3e3b"
      },
      {
        "path": "mobile-wire-frames/IMG_3164.JPG",
        "mode": "100644",
        "type": "blob",
        "sha": "eb693a30c3b82e4bca63fed8bee88f930ecdfe3f",
        "size": 1189730,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/eb693a30c3b82e4bca63fed8bee88f930ecdfe3f"
      },
      {
        "path": "mobile-wire-frames/IMG_3165.JPG",
        "mode": "100644",
        "type": "blob",
        "sha": "add595dd6a3a0bb5e6f5bb71f7b894461791bf9e",
        "size": 1699125,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/add595dd6a3a0bb5e6f5bb71f7b894461791bf9e"
      },
      {
        "path": "mobile-wire-frames/IMG_3166.JPG",
        "mode": "100644",
        "type": "blob",
        "sha": "2d9b44b6bb2d2fde4298420a8b90c316b258b8f8",
        "size": 1381899,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/2d9b44b6bb2d2fde4298420a8b90c316b258b8f8"
      },
      {
        "path": "notes.md",
        "mode": "100644",
        "type": "blob",
        "sha": "4849374ca2882f38ff613d3ec357f5ad4aa7e3b5",
        "size": 1363,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/4849374ca2882f38ff613d3ec357f5ad4aa7e3b5"
      },
      {
        "path": "proposal.md",
        "mode": "100644",
        "type": "blob",
        "sha": "1048e1916ca574f395fd59d52c39e7de0158b8a7",
        "size": 634,
        "url": "https://api.github.com/repos/topleft/rezo-app-v2/git/blobs/1048e1916ca574f395fd59d52c39e7de0158b8a7"
      }
    ],
    "truncated": false
  };

  

  data.repo = {
    "sha": "fb46a4fec0d44d014b318f5b00c61e9111898db4",
    "url": "https://api.github.com/repos/topleft/js-functions-3/git/trees/fb46a4fec0d44d014b318f5b00c61e9111898db4",
    "tree": [
      {
        "path": "css",
        "mode": "040000",
        "type": "tree",
        "sha": "ed4d85c410cc3a645a470c07d6ec399f13e03346",
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/trees/ed4d85c410cc3a645a470c07d6ec399f13e03346"
      },
      {
        "path": "css/main.css",
        "mode": "100644",
        "type": "blob",
        "sha": "7e5a1f91d9f8531cb94ca839898fca58302a17b4",
        "size": 24,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/7e5a1f91d9f8531cb94ca839898fca58302a17b4"
      },
      {
        "path": "index.html",
        "mode": "100644",
        "type": "blob",
        "sha": "65cb0e7998de471c961e2360e09a6f2d1fc1bb84",
        "size": 379,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/65cb0e7998de471c961e2360e09a6f2d1fc1bb84"
      },
      {
        "path": "js",
        "mode": "040000",
        "type": "tree",
        "sha": "66b2eabc7b3f7ff892bdaca83ff643cccc332f02",
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/trees/66b2eabc7b3f7ff892bdaca83ff643cccc332f02"
      },
      {
        "path": "js/main.js",
        "mode": "100644",
        "type": "blob",
        "sha": "af976cda3804f1b1801729f27c850429d540bfed",
        "size": 1740,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/af976cda3804f1b1801729f27c850429d540bfed"
      },
      {
        "path": "test",
        "mode": "040000",
        "type": "tree",
        "sha": "c310f3bb9129c76427bb17e50afc3cceaefa776c",
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/trees/c310f3bb9129c76427bb17e50afc3cceaefa776c"
      },
      {
        "path": "test/MIT.LICENSE",
        "mode": "100755",
        "type": "blob",
        "sha": "7c435baaec86c0ebe2eb56b0550c11820c181b05",
        "size": 1061,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/7c435baaec86c0ebe2eb56b0550c11820c181b05"
      },
      {
        "path": "test/SpecRunner.html",
        "mode": "100755",
        "type": "blob",
        "sha": "2ffca3c01d63948d6d146353f15daaac22cd6cc4",
        "size": 785,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/2ffca3c01d63948d6d146353f15daaac22cd6cc4"
      },
      {
        "path": "test/lib",
        "mode": "040000",
        "type": "tree",
        "sha": "8b4c8a80ba0bd6aa41145dd05c787a7184fb6739",
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/trees/8b4c8a80ba0bd6aa41145dd05c787a7184fb6739"
      },
      {
        "path": "test/lib/jasmine-2.0.0",
        "mode": "040000",
        "type": "tree",
        "sha": "ab28e7977b85d52e1badbff73917fdc7519f489c",
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/trees/ab28e7977b85d52e1badbff73917fdc7519f489c"
      },
      {
        "path": "test/lib/jasmine-2.0.0/boot.js",
        "mode": "100755",
        "type": "blob",
        "sha": "ec8baa0aa593aa0d36c83419698e13efb02ea9a2",
        "size": 6133,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/ec8baa0aa593aa0d36c83419698e13efb02ea9a2"
      },
      {
        "path": "test/lib/jasmine-2.0.0/console.js",
        "mode": "100755",
        "type": "blob",
        "sha": "33c1698cf14b7045b11c81a809bacea2f23c9e95",
        "size": 4318,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/33c1698cf14b7045b11c81a809bacea2f23c9e95"
      },
      {
        "path": "test/lib/jasmine-2.0.0/jasmine-html.js",
        "mode": "100755",
        "type": "blob",
        "sha": "985d0d1a0a358239433a4aabf87e5cd43406453f",
        "size": 11235,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/985d0d1a0a358239433a4aabf87e5cd43406453f"
      },
      {
        "path": "test/lib/jasmine-2.0.0/jasmine.css",
        "mode": "100755",
        "type": "blob",
        "sha": "f4d35b6e788d50254d5683c09558671c7ca2e343",
        "size": 4233,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/f4d35b6e788d50254d5683c09558671c7ca2e343"
      },
      {
        "path": "test/lib/jasmine-2.0.0/jasmine.js",
        "mode": "100755",
        "type": "blob",
        "sha": "24463ecb83b248db47169ba79822353eab4852f4",
        "size": 62835,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/24463ecb83b248db47169ba79822353eab4852f4"
      },
      {
        "path": "test/lib/jasmine-2.0.0/jasmine_favicon.png",
        "mode": "100755",
        "type": "blob",
        "sha": "3562e278f108d0f6a918d198f21e055e601c7e71",
        "size": 2057,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/3562e278f108d0f6a918d198f21e055e601c7e71"
      },
      {
        "path": "test/spec.js",
        "mode": "100755",
        "type": "blob",
        "sha": "c5dde8647e19490dfc7c20838b06e193e27aab7e",
        "size": 1882,
        "url": "https://api.github.com/repos/topleft/js-functions-3/git/blobs/c5dde8647e19490dfc7c20838b06e193e27aab7e"
      }
    ],
    "truncated": false
  };

  data.largeRepoName = 'git-tree';

  data.largeRepo = {
    "sha": "9c9909999797bb02481bd52d8f4731758f79d348",
    "url": "https://api.github.com/repos/topleft/git-tree/git/trees/9c9909999797bb02481bd52d8f4731758f79d348",
    "tree": [
      {
        "path": ".gitignore",
        "mode": "100644",
        "type": "blob",
        "sha": "1a0c9321c99fcc0dc9b669685327c16560f88dd2",
        "size": 61,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/1a0c9321c99fcc0dc9b669685327c16560f88dd2"
      },
      {
        "path": ".travis.yml",
        "mode": "100644",
        "type": "blob",
        "sha": "68873877b14b16f223b0f08a32506b6e25969414",
        "size": 140,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/68873877b14b16f223b0f08a32506b6e25969414"
      },
      {
        "path": "client",
        "mode": "040000",
        "type": "tree",
        "sha": "e4d8779f36c8aaf190ac5b9fa9d0646b1b78833d",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/e4d8779f36c8aaf190ac5b9fa9d0646b1b78833d"
      },
      {
        "path": "client/public",
        "mode": "040000",
        "type": "tree",
        "sha": "5fe7fe7b4cefae70697672f8444eab83003d94f0",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/5fe7fe7b4cefae70697672f8444eab83003d94f0"
      },
      {
        "path": "client/public/alert",
        "mode": "040000",
        "type": "tree",
        "sha": "6e835ca2642e45a0c3b8a37ecd096df677e20e1d",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/6e835ca2642e45a0c3b8a37ecd096df677e20e1d"
      },
      {
        "path": "client/public/alert/alert-directive.js",
        "mode": "100644",
        "type": "blob",
        "sha": "20150e2f5332b1ee7d993d145cde23002b0a4606",
        "size": 290,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/20150e2f5332b1ee7d993d145cde23002b0a4606"
      },
      {
        "path": "client/public/alert/alert-factory.js",
        "mode": "100644",
        "type": "blob",
        "sha": "8aea5dceeeccbffce383154b8e1100c82bb8c423",
        "size": 570,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/8aea5dceeeccbffce383154b8e1100c82bb8c423"
      },
      {
        "path": "client/public/alert/alert.html",
        "mode": "100644",
        "type": "blob",
        "sha": "2dcf579445dadc247be99d3697e2b0aca3e72606",
        "size": 143,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/2dcf579445dadc247be99d3697e2b0aca3e72606"
      },
      {
        "path": "client/public/app",
        "mode": "040000",
        "type": "tree",
        "sha": "8b58ccfd232e1b32d36d131a467eb7f2024d1447",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/8b58ccfd232e1b32d36d131a467eb7f2024d1447"
      },
      {
        "path": "client/public/app/app.js",
        "mode": "100644",
        "type": "blob",
        "sha": "8b990b3f5b8f10326f6c5b3dabe7e077d58f9d85",
        "size": 615,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/8b990b3f5b8f10326f6c5b3dabe7e077d58f9d85"
      },
      {
        "path": "client/public/app/controllers.js",
        "mode": "100644",
        "type": "blob",
        "sha": "f58bd8ef102eca800275af78ec128f600390ba0c",
        "size": 317,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/f58bd8ef102eca800275af78ec128f600390ba0c"
      },
      {
        "path": "client/public/app/directives.js",
        "mode": "100644",
        "type": "blob",
        "sha": "f25382ec82ff3a5cf130cd9d5d7318158a9ed01b",
        "size": 65,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/f25382ec82ff3a5cf130cd9d5d7318158a9ed01b"
      },
      {
        "path": "client/public/app/factories.js",
        "mode": "100644",
        "type": "blob",
        "sha": "d210531abc6258638432fba29ae384fa4b5c77de",
        "size": 1191,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/d210531abc6258638432fba29ae384fa4b5c77de"
      },
      {
        "path": "client/public/app/filters.js",
        "mode": "100644",
        "type": "blob",
        "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
        "size": 0,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
      },
      {
        "path": "client/public/app/routes.js",
        "mode": "100644",
        "type": "blob",
        "sha": "077e8a20a259fa3478f94646d3ed3a1b8fd315c7",
        "size": 640,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/077e8a20a259fa3478f94646d3ed3a1b8fd315c7"
      },
      {
        "path": "client/public/auth",
        "mode": "040000",
        "type": "tree",
        "sha": "d604e8bd90ba71fe1db2fff02492f31825e66f80",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/d604e8bd90ba71fe1db2fff02492f31825e66f80"
      },
      {
        "path": "client/public/auth/auth-controllers.js",
        "mode": "100644",
        "type": "blob",
        "sha": "63c3c020953e30307b96724e9fb4b6cc1e9fb9ed",
        "size": 751,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/63c3c020953e30307b96724e9fb4b6cc1e9fb9ed"
      },
      {
        "path": "client/public/auth/auth-factory.js",
        "mode": "100644",
        "type": "blob",
        "sha": "cbce8965de78e88ea29a4cb0b172af66cc100b91",
        "size": 2299,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/cbce8965de78e88ea29a4cb0b172af66cc100b91"
      },
      {
        "path": "client/public/auth/login.html",
        "mode": "100644",
        "type": "blob",
        "sha": "b91ab0dc49d6bf819580a12d7998cd260bedbc7f",
        "size": 939,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/b91ab0dc49d6bf819580a12d7998cd260bedbc7f"
      },
      {
        "path": "client/public/css",
        "mode": "040000",
        "type": "tree",
        "sha": "e198259e5e6097d0bf0a3fc03c8f7e1da8452ef5",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/e198259e5e6097d0bf0a3fc03c8f7e1da8452ef5"
      },
      {
        "path": "client/public/css/main.css",
        "mode": "100644",
        "type": "blob",
        "sha": "b2d3306fbdcecc50baf0e56866adbdb319f1d4cd",
        "size": 1008,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/b2d3306fbdcecc50baf0e56866adbdb319f1d4cd"
      },
      {
        "path": "client/public/form",
        "mode": "040000",
        "type": "tree",
        "sha": "6cbc766c9f5b34541e45a0c8bf92895edc93541e",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/6cbc766c9f5b34541e45a0c8bf92895edc93541e"
      },
      {
        "path": "client/public/form/form-directive.js",
        "mode": "100644",
        "type": "blob",
        "sha": "ee5895fe1ad82793a384949871846ce6f6fd9e3b",
        "size": 993,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/ee5895fe1ad82793a384949871846ce6f6fd9e3b"
      },
      {
        "path": "client/public/form/form.html",
        "mode": "100644",
        "type": "blob",
        "sha": "cc8980ab5964cffc1ba7338a868a2538fa8af246",
        "size": 708,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/cc8980ab5964cffc1ba7338a868a2538fa8af246"
      },
      {
        "path": "client/public/js",
        "mode": "040000",
        "type": "tree",
        "sha": "a1ca6c347d3935665248605633eb3c3633eb7b60",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/a1ca6c347d3935665248605633eb3c3633eb7b60"
      },
      {
        "path": "client/public/js/main.js",
        "mode": "100644",
        "type": "blob",
        "sha": "445aa688fbe889da4a6941003fd834538ad4bdef",
        "size": 88,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/445aa688fbe889da4a6941003fd834538ad4bdef"
      },
      {
        "path": "client/public/logout-button",
        "mode": "040000",
        "type": "tree",
        "sha": "a195d11abbccb17270c586d95210ab5aad7f1ddc",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/a195d11abbccb17270c586d95210ab5aad7f1ddc"
      },
      {
        "path": "client/public/logout-button/logout-button-directive.js",
        "mode": "100644",
        "type": "blob",
        "sha": "a4446099ee28e01ac95d44e05353f36022217ea7",
        "size": 1359,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/a4446099ee28e01ac95d44e05353f36022217ea7"
      },
      {
        "path": "client/public/nav",
        "mode": "040000",
        "type": "tree",
        "sha": "6a794e0ec305c53459a130406ed08c84ab27eb51",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/6a794e0ec305c53459a130406ed08c84ab27eb51"
      },
      {
        "path": "client/public/nav/nav-directive.js",
        "mode": "100644",
        "type": "blob",
        "sha": "c729adc8a627ec007f73e563d6c25e3656969b62",
        "size": 189,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/c729adc8a627ec007f73e563d6c25e3656969b62"
      },
      {
        "path": "client/public/nav/nav.html",
        "mode": "100644",
        "type": "blob",
        "sha": "66dfb900b8fed1e6ff602ae9118fce5df80c5199",
        "size": 450,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/66dfb900b8fed1e6ff602ae9118fce5df80c5199"
      },
      {
        "path": "client/public/output",
        "mode": "040000",
        "type": "tree",
        "sha": "405589e7305da83b6eceebcc9411e200f1eabd94",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/405589e7305da83b6eceebcc9411e200f1eabd94"
      },
      {
        "path": "client/public/output/output-directive.js",
        "mode": "100644",
        "type": "blob",
        "sha": "712d92d7224ccd9b8c624202eaf51793f00c1600",
        "size": 1395,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/712d92d7224ccd9b8c624202eaf51793f00c1600"
      },
      {
        "path": "client/public/output/output.html",
        "mode": "100644",
        "type": "blob",
        "sha": "683b9f7a4c6433b2ac991d59e0ae779603cca974",
        "size": 1689,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/683b9f7a4c6433b2ac991d59e0ae779603cca974"
      },
      {
        "path": "client/public/tree",
        "mode": "040000",
        "type": "tree",
        "sha": "816943d112e5599440ace8546dc29d967d9730a0",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/816943d112e5599440ace8546dc29d967d9730a0"
      },
      {
        "path": "client/public/tree/repo-factory.js",
        "mode": "100644",
        "type": "blob",
        "sha": "73e8e5754394da8b9a4a06dda050cfc9da1ce8bb",
        "size": 598,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/73e8e5754394da8b9a4a06dda050cfc9da1ce8bb"
      },
      {
        "path": "client/public/tree/tree-directive.js",
        "mode": "100644",
        "type": "blob",
        "sha": "c4891260743859ee77517a6d115f156a8b3f5ea3",
        "size": 908,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/c4891260743859ee77517a6d115f156a8b3f5ea3"
      },
      {
        "path": "client/public/tree/tree.html",
        "mode": "100644",
        "type": "blob",
        "sha": "5ce4f1220a3749e9e7a92c54db9a0d05f1220f61",
        "size": 728,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/5ce4f1220a3749e9e7a92c54db9a0d05f1220f61"
      },
      {
        "path": "client/public/views",
        "mode": "040000",
        "type": "tree",
        "sha": "b7200cf514378b207cc93c61df0a37a47de210dd",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/b7200cf514378b207cc93c61df0a37a47de210dd"
      },
      {
        "path": "client/public/views/error.html",
        "mode": "100644",
        "type": "blob",
        "sha": "8b137891791fe96927ad78e64b0aad7bded08bdc",
        "size": 1,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/8b137891791fe96927ad78e64b0aad7bded08bdc"
      },
      {
        "path": "client/public/views/index.html",
        "mode": "100644",
        "type": "blob",
        "sha": "a91700cb63b054ec5a5ead94cf0d8a275608ac10",
        "size": 426,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/a91700cb63b054ec5a5ead94cf0d8a275608ac10"
      },
      {
        "path": "client/public/views/layout.html",
        "mode": "100644",
        "type": "blob",
        "sha": "ed0b90af14425655d54a44ee18b6552d08053920",
        "size": 2185,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/ed0b90af14425655d54a44ee18b6552d08053920"
      },
      {
        "path": "client/public/views/visual.html",
        "mode": "100644",
        "type": "blob",
        "sha": "36c976bd7af546603b136959acf3a36e78731ce7",
        "size": 45,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/36c976bd7af546603b136959acf3a36e78731ce7"
      },
      {
        "path": "gulpfile.js",
        "mode": "100644",
        "type": "blob",
        "sha": "253b213202edf5a002cc81a740f3559014fbab76",
        "size": 2838,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/253b213202edf5a002cc81a740f3559014fbab76"
      },
      {
        "path": "package.json",
        "mode": "100644",
        "type": "blob",
        "sha": "8433bf85d5ba4e728c0807cfac04c64e0c24ae9e",
        "size": 1041,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/8433bf85d5ba4e728c0807cfac04c64e0c24ae9e"
      },
      {
        "path": "readme.md",
        "mode": "100644",
        "type": "blob",
        "sha": "62214a07f7041afee48fea83e37bdbca6d63426d",
        "size": 489,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/62214a07f7041afee48fea83e37bdbca6d63426d"
      },
      {
        "path": "server",
        "mode": "040000",
        "type": "tree",
        "sha": "03571ee361f34cbc4dd1f10743b9b885a1d47fa8",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/03571ee361f34cbc4dd1f10743b9b885a1d47fa8"
      },
      {
        "path": "server/_config.js",
        "mode": "100644",
        "type": "blob",
        "sha": "4f68aeed96b0d01ab0a997717f23a4a826ee235b",
        "size": 338,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/4f68aeed96b0d01ab0a997717f23a4a826ee235b"
      },
      {
        "path": "server/app.js",
        "mode": "100644",
        "type": "blob",
        "sha": "56bb57902b85ca6f25a0be556c3ac5d43bfc4457",
        "size": 2432,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/56bb57902b85ca6f25a0be556c3ac5d43bfc4457"
      },
      {
        "path": "server/bin",
        "mode": "040000",
        "type": "tree",
        "sha": "4fa3e2f6e1907cc2fb35652e4a40fe99e32e718f",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/4fa3e2f6e1907cc2fb35652e4a40fe99e32e718f"
      },
      {
        "path": "server/bin/www",
        "mode": "100755",
        "type": "blob",
        "sha": "21a57442d5f3d6446c3efb849bc536663c5d1ae1",
        "size": 1633,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/21a57442d5f3d6446c3efb849bc536663c5d1ae1"
      },
      {
        "path": "server/database.js",
        "mode": "100644",
        "type": "blob",
        "sha": "6c2c9782ec317f074c3e61189377cf1feeadb815",
        "size": 642,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/6c2c9782ec317f074c3e61189377cf1feeadb815"
      },
      {
        "path": "server/logic",
        "mode": "040000",
        "type": "tree",
        "sha": "8c804661e8bcdd9ff59729c139e46015f8a4b17c",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/8c804661e8bcdd9ff59729c139e46015f8a4b17c"
      },
      {
        "path": "server/logic/auth.js",
        "mode": "100644",
        "type": "blob",
        "sha": "7711da0af1158e520569f1fd3e7a4e9c76ce1bc7",
        "size": 1300,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/7711da0af1158e520569f1fd3e7a4e9c76ce1bc7"
      },
      {
        "path": "server/logic/crud.js",
        "mode": "100644",
        "type": "blob",
        "sha": "f7e6c2a69615db3d1b0561197eaccc606a70edd2",
        "size": 1265,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/f7e6c2a69615db3d1b0561197eaccc606a70edd2"
      },
      {
        "path": "server/logic/parse.js",
        "mode": "100644",
        "type": "blob",
        "sha": "cd3945bcee753131ee337580ddacdf34a24de49e",
        "size": 2632,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/cd3945bcee753131ee337580ddacdf34a24de49e"
      },
      {
        "path": "server/routes",
        "mode": "040000",
        "type": "tree",
        "sha": "0dcb5f77ba41a02ac3ec62fad8347d1fa01aaab9",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/0dcb5f77ba41a02ac3ec62fad8347d1fa01aaab9"
      },
      {
        "path": "server/routes/auth.js",
        "mode": "100644",
        "type": "blob",
        "sha": "4e92e31bf6c7868cb77423ee320cdee9a3eaeccc",
        "size": 2878,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/4e92e31bf6c7868cb77423ee320cdee9a3eaeccc"
      },
      {
        "path": "server/routes/git-routes.js",
        "mode": "100644",
        "type": "blob",
        "sha": "c11b6ea23b16fc600104e1d9383e31de5c947edc",
        "size": 1101,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/c11b6ea23b16fc600104e1d9383e31de5c947edc"
      },
      {
        "path": "server/routes/index.js",
        "mode": "100644",
        "type": "blob",
        "sha": "d2990a20a377d1e76a65703aa94aab4393f97268",
        "size": 812,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/d2990a20a377d1e76a65703aa94aab4393f97268"
      },
      {
        "path": "test",
        "mode": "040000",
        "type": "tree",
        "sha": "0b299709da0f7d529b68cc0856f3aa66eefb5609",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/0b299709da0f7d529b68cc0856f3aa66eefb5609"
      },
      {
        "path": "test/crud-tests.js",
        "mode": "100644",
        "type": "blob",
        "sha": "e9930f5c57a9771ffcbd9773dbca363774c04776",
        "size": 2998,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/e9930f5c57a9771ffcbd9773dbca363774c04776"
      },
      {
        "path": "test/git-tests.js",
        "mode": "100644",
        "type": "blob",
        "sha": "fbdad4b237c148dcbe38a0a3aac6f66d2aade405",
        "size": 1408,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/fbdad4b237c148dcbe38a0a3aac6f66d2aade405"
      },
      {
        "path": "test/parse-tests.js",
        "mode": "100644",
        "type": "blob",
        "sha": "e547934f52c934d565bb2ec7704aedb61a471140",
        "size": 2323,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/e547934f52c934d565bb2ec7704aedb61a471140"
      },
      {
        "path": "test/test-helper-data",
        "mode": "040000",
        "type": "tree",
        "sha": "487586f2292d7c3eb291069a7944db7d7cff0b4a",
        "url": "https://api.github.com/repos/topleft/git-tree/git/trees/487586f2292d7c3eb291069a7944db7d7cff0b4a"
      },
      {
        "path": "test/test-helper-data/helper-data.js",
        "mode": "100644",
        "type": "blob",
        "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
        "size": 0,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
      },
      {
        "path": "test/test.html",
        "mode": "100644",
        "type": "blob",
        "sha": "d2d57fb39deda9331f677cfe6455155e6ab8ae86",
        "size": 623,
        "url": "https://api.github.com/repos/topleft/git-tree/git/blobs/d2d57fb39deda9331f677cfe6455155e6ab8ae86"
      }
    ],
    "truncated": false
  }


  })();

  