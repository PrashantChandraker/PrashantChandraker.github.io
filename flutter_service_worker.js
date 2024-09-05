'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ca8126e0cade5cb66c312a48d359e92a",
".git/config": "f159c5dd080e8250cadb7bb999acfcee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "76482be0d87887d4ff9f5acfabc6aeb1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8edcc6b0434c54307bedcea912afcae",
".git/logs/refs/heads/main": "4b79ba244281c14acfbf8d26b7b2a929",
".git/logs/refs/remotes/origin/main": "913a0e5834e61692b1d4998445295222",
".git/objects/02/653167f7a8286c91cd20c512bb4ca2129161ef": "5edd5f146493421ea7b6bb663e2cc42c",
".git/objects/06/0ec3941f9b2b2089cdf912f4020ee2ef95b4ff": "159737ff8fdd9b83f6d6ae1de513113d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/f2012f24c2c140de604d74ccae83c37494099d": "4512c9f308e448184937c37822d5ade9",
".git/objects/11/1885bf4b650a894f2676cde6d9879f84f3a4d5": "148bd6c11b99c165204a72e9fd20274e",
".git/objects/14/b960c6ad5a11dcf7b8959ef60e8ad558e156f1": "710265affe3b6880f81acb2fc0c1cf1b",
".git/objects/1a/0a45dac116efcb5f982ab3040e58690ce55251": "99e155550b69d58276b1ae7ef3202e53",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/e45fb5d524a9628d282ca77ef80a2607f05447": "cffa829eea102834aef42e09d4adefc0",
".git/objects/23/3b7b5024154def284c970193773ed2c95598cd": "47e5d8e74a564f31f1953e33b8b87331",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/742ded52bba04295e486afa4e31f292658e19e": "c2bde627db1c782428d07010a5df32f1",
".git/objects/2d/f501bf446d9b6b856bd418e93ec993a18f89b8": "b8c680b294d57b73baee7c1c669c8c33",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/c7cd0fbfb46824e35349258b4506cba4e489a3": "33c4ad434b7f3dfd42b2ecf4ba6ed591",
".git/objects/37/73efb940556e5d098be7c7770b33294ec18b0f": "c8f9a83239387db1d27dd8d04185fb07",
".git/objects/38/cb339f85d955557876e707d460860ba0ecb1f1": "482c38310b66b5940ca30bcd9cc0ff76",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/c9df7ad903700892f2a19ed803229f2264a5dc": "342e0a25d6141c2b966090ac67295a0e",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/e11d72a2303c590094bd74badf790987f81ca6": "8adacd0561ccef315948f2352565bf06",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/baad26ed0b98a434bc77379116906ce4c705bf": "33e6657dfc1f5d8325e83bb8ccac1abb",
".git/objects/47/c47dc13b70d62da322463ce0334eb25e541c15": "751c395bcb62c39bc40ed7926ec45fce",
".git/objects/49/04bf989958d7e4cceab6befd241bc76b22073a": "a6c49c5d6e6b3866727a8fadcb6d68b9",
".git/objects/4b/3c73ee3d63cca389837df20039e1543b38b1e1": "ae54319dbcbac4718f8f016fb63526ae",
".git/objects/4b/6b1742df5507c4dd90ee8e899773bd55b516e7": "db08bf4074dce86c9b5a9a232ef31d45",
".git/objects/58/9afcb825eb91962d8286787a9f0779ec87fc3a": "ac6b1dc29b3611adf90d02625d335697",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/68/55d8b4dea2d5102c90074e252e92338ebdcc0a": "162aab9da4cd243a333850d0ef06c081",
".git/objects/6b/689917cd77bbf507a5636c74499943c566542d": "8ac6794f7b42e8375cfd37a0eb9aad6e",
".git/objects/6b/c24fb5dd6e24dbfbd212b60ce040dc85797dcb": "996c4778a74b0bf0d3d5d03ced726c59",
".git/objects/6b/dd86012d5641f4abb893c297f2cac0471d6be8": "c6ec5297854a722cfe994e538278d651",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/aee0f61533e4e66c946a63c78f256421dafc3e": "b168b4b8dde2719294316c09f0023dab",
".git/objects/79/f79fd4eb15e7c371f7db4b1f6ea2e891bdb49e": "0d49b15d273cd80f46a714fc48a28ea1",
".git/objects/7a/473abfd4ec407789db40aa6549873c8685ab69": "eae66955b3c296b806ac613305abd556",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/34640e7f2c593a5d12251641f85b8d37789515": "4a2a0810c765b855aeb21dcf57d333a6",
".git/objects/81/e34efd681540ed33832a150d81abcd8659bb81": "ad8fffbbb951c0413c163cc81ceab006",
".git/objects/82/18e506255f47bdb160fb233371fa93ac3dac45": "970a06b8b5161ec8c6029e5ad9834744",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/4e2206f308d71fd0a3478bb1cec0600df656cb": "932935d109f904a705dc6dec867453e3",
".git/objects/86/c5e7a732652bef5f0726eaecb3c76cf7074b1b": "fbef52b165d9970870174c1eba1ee085",
".git/objects/88/437a425a6447f45735dc817bacbe9bd6541afc": "bd6af943a9d0d19b0fee448afd9854fd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/9edcd001d364cc013bef36414c8ab9d32aee6b": "847c22f8bcb16bc20f801e05ecc6fa1a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/df20cfab2562ca129177f4d2eca3b820d1fcdf": "f6ca77b0e7230d210ae86dcc6d27c7f2",
".git/objects/8b/ad639a20b501dd4524f76988e565aa398626f6": "32cb95076a3419da01fbdefd9bb4918f",
".git/objects/8e/24628c0ce49bd884d2b34a3d7684fb69ea753d": "8db4c3b86b9d65d4de1d8e47ad7e3f85",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/b2d1a7e415184484242cb4b6357a92297e1479": "c15475890a63c707536ab5bb7d9955aa",
".git/objects/96/a7f5f9088ab1564b5b1da1243a357b8fecd0c9": "ff2f6c38235ff365b546fd526147e25c",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/5cf858c12a4858fa9f924ed5ac54ae0b62166a": "1401841ea481f92e3d40f5e6170b8805",
".git/objects/9b/b942d3c56d5c3fa0bd3c627ce4521c5d424f1f": "0a7081e177a388a6bc7342f100e7ca34",
".git/objects/9d/69783cd6ef8146fb1c5c0387bf4203f2768be3": "7787e6d540cd788c6b4aefccdcc79538",
".git/objects/a4/074a0a18707b532fb234b0c6912d6577bf6ac3": "c21d91ab320fe83ccc7a38d57720f35b",
".git/objects/a4/312e7052c907342146650a45af816bd28b5f8e": "6a1091eacdf29780535340cea7a5f51d",
".git/objects/a9/85c43cd6ae23e84138d59de6b8c58c8d4b1fd4": "1301a0558cc5cbe6fe132116acf62567",
".git/objects/ad/18c2012a937f39b050ba9f5416fd2ba49b5099": "d41106a5ae51e50b059f80a7cfee60e2",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/f42b393a2a6eaee426230a5cd009abd2aea2a5": "eb67880720bee530a57290e63be9655b",
".git/objects/b5/73fcd8c166f23c7d99a6154c30825489cc02fd": "7f78d2420255df0b83c3dfddacd35269",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/440c17af031075f4409401be8af1dd18e603c8": "b8ac3e1faac0f1f2fe94141770cc4ffc",
".git/objects/c7/95e30d4202e20adc992251e96bceb022f4c506": "b0ef2f6a60f1aa6c29e8c430f9b2c030",
".git/objects/c8/3c7bfceb6a9a715e05a2eb0ca0f18ac7d138d4": "b1ca1702e485222b6ecc74b59c254d38",
".git/objects/c9/53178bf5ed79430f6c09ea0604286eef5cf42d": "a7de75344957543d3b80a8fb37379a06",
".git/objects/ca/6049473a3537cc179ccad5d01b3070e984fada": "69470cb70a84af318dc617af2faa37c1",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/3ffa623346b26d78233377b3cbb19f3b03334a": "34476d2bf6a6547043c6c43d885bcf59",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/e07d2bd27adb9ed41875f5e885877d72da87cb": "daa7a7ff2bcf118f2ca301625adcc404",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/1ade0a796d4f8efc9c223ec7743ac0c74ba0e8": "3cd429ffa580b60d0dc5a7e203957cd4",
".git/objects/e0/57631c7a83869e516ba85b10d6a034002fc7b8": "5f0e5d0704b3eb7d443cb707bcb6f834",
".git/objects/e3/6a54f18384c0fce2f215298b4f7fb405823785": "f58ec84e17f90b13809dec9c2a45ba05",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/469827a94a513c6d6876f7b8177ee337f98f18": "8c568b92e6ad1187f0dffc9013a1e12e",
".git/objects/ee/57581daf195d536b59eac4f9300df89a0e0a62": "4be723d8825bd8a1448d2dcdc1ee5305",
".git/objects/f0/baa122ca3ee98c5b01222dcd56b0026860a9df": "3c7b18150f5ea2f14f7a2db6a0ae0175",
".git/objects/f1/b0fbffdfd23017dc9d9d4d0f2a176dbcd02d7e": "a9af1c0632d5a6c15472a3da6c6a2804",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2e365f3f0e80cd314403277fa864e64777a088": "75f1b77458d9c68bf544168df4459d66",
".git/objects/f4/2217e3b513b88a5e8ca2a2db7399ca3002d3be": "8047c63b31ae071d569c7756d91eaff8",
".git/objects/f5/0f6bd6cab8349e6275249f60d8735a32993756": "83c6297769ef2dfddb5547cc6ca69b8b",
".git/objects/f6/bb5226be9f1e93fcfb155d9d9b582c55620e19": "f0eac8c63d6481adcfdb6b70fc15fb6d",
".git/objects/f7/efed3f246fb7198a4d0eb66b6a45c87a5fdf3d": "d78f631f575a522c88ca9ba351062a8a",
".git/objects/f9/d10c8bddb9615f721e09a489368b6b08eea37c": "d369fb38a93693137d8f77281e71f98c",
".git/objects/fa/f9f8dcdb158ac1aecb9436ec330389aa0c04be": "97709ccdff6ee60b5d050f87155ded80",
".git/objects/fe/d3dd696d7bd21d06824d42ea2a3261c733d3bf": "6de964096d5b05b574c6ac3fc7a219db",
".git/refs/heads/main": "988849ce40b6d0cd936c051122129ad3",
".git/refs/remotes/origin/main": "988849ce40b6d0cd936c051122129ad3",
"assets/AssetManifest.bin": "e23a50070450a4d0846dbdb958f178f6",
"assets/AssetManifest.bin.json": "47b07f0e95219a0bd4d915fb85f06f9b",
"assets/AssetManifest.json": "b7b101a62ee4879089919cd69dc5be7d",
"assets/assets/contact/github.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/assets/contact/gmail.png": "eabc1a70245f1384e30960f25f9b2784",
"assets/assets/contact/instagram.png": "8ce47fd872187bfa8d11505b3bd8944e",
"assets/assets/contact/linkedin.png": "d604727cedcd27fcc981ffdb1f318a66",
"assets/assets/featured_projects/chat.png": "e07bb6a459902839fe677bd8078d7eb2",
"assets/assets/featured_projects/digital-signature.png": "4cec392fa4ecdab0e1bff0d25558bf81",
"assets/assets/featured_projects/money.png": "6e3f09326317b9907ba67c0717f6b41e",
"assets/assets/featured_projects/music-notes.png": "e777e7f6eb82f27cf90d24290cb2b458",
"assets/assets/featured_projects/note.png": "1d0e221c6816d2ee143a3258917cdfbd",
"assets/assets/featured_projects/notes.png": "0b11f4af632105012f46da86da9fddc0",
"assets/assets/featured_projects/qr-code.png": "aa297024eb4ac581f506551930295b22",
"assets/assets/featured_projects/season.png": "5e22cf975b15003e20064a6de1e0d602",
"assets/assets/featured_projects/shopping.png": "786a1911c3fbe48d68602eccd0800de0",
"assets/assets/featured_projects/translate.png": "cafa0382db5589424b92d36d8fdea264",
"assets/assets/featured_projects/ui-design.png": "b371ee2ba98e4aa2734d66a70c5a7dff",
"assets/assets/featured_projects/video.png": "2521c958572f7317b265f7a94d1d6279",
"assets/assets/fonts/BaskervvilleSC-Regular.ttf": "c6c34517afd2f53c6f1174e4fc8ed496",
"assets/assets/fonts/HindSiliguri-Bold.ttf": "09e7451bd892e6af09275b701369b454",
"assets/assets/fonts/HindSiliguri-Light.ttf": "8265fea97f78727b251c512253942467",
"assets/assets/fonts/HindSiliguri-Medium.ttf": "41fd138da9f718913aa98aae255b859b",
"assets/assets/fonts/HindSiliguri-Regular.ttf": "5858488e9870f755271e8a71754eda49",
"assets/assets/fonts/HindSiliguri-SemiBold.ttf": "c75e4224905a200c868801e66480b7d3",
"assets/assets/icons/android.png": "eb9e9538a45596a230a017f02756a109",
"assets/assets/icons/apple.png": "7ddfc140089c7118cb1613c5f474f421",
"assets/assets/icons/flutter.png": "9d5f5f55edd71e589630e24f2d8e3724",
"assets/assets/icons/web.png": "b736989d08e0cf33917d7e4f67a7ba62",
"assets/assets/images/esanchaya.png": "7a2713c54c94381916a6aaf345715fc5",
"assets/assets/images/pellipandiri.jpg": "1aef5b35021a26ca4e0a689698bac1ac",
"assets/assets/images/prashant.jpeg": "9fd5b8552fbb4e651c99fa63475b256d",
"assets/assets/images/priyafoods.jpg": "4474cb9a40db9fd0cd23ec67648c9c42",
"assets/FontManifest.json": "64e86aa294ff6e3159ae759294630566",
"assets/fonts/MaterialIcons-Regular.otf": "048945503ba86afd108d14ccff655f91",
"assets/NOTICES": "654ec721c99bb4aeb1905df8559f0a08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ad759e537774432f0f70fd3ca2f68480",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d236be35dfc1995f3b5001bce43a27f5",
"/": "d236be35dfc1995f3b5001bce43a27f5",
"main.dart.js": "66439165afae38f782c6f2c80cc6d713",
"manifest.json": "7d7458b7b7b38b2594cd6e46f0cf2772",
"version.json": "f27b7b9773bed5f6fbbd259fb72d0eff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
