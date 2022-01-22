(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{338:function(e,t,n){"use strict";n(8),n(183),n(35),n(108);t.a={data:function(){return{embedded:!1}},mounted:function(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:n,solid:!0})},promisify:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((function(t,r){e.apply(void 0,n.concat([function(e,n){e?r(e):t(n)}]))}))},getParam:function(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,r){t[n]=void 0!==r?r:""})),e?t[e]?t[e]:null:t}}}},339:function(e,t,n){var r=n(342);e.exports={description:"Create a Widget for your ERC20 or BEP20 Token and share it with your users. Add your Token to DApp browsers or MetaMask both on Ethereum, Binance Smart Chain or Polygon Network.",base:"/search-token/",plugins:[["@vuepress/google-analytics",{ga:r.gaId}],["vuepress-plugin-facebook-pixel",{pixelId:r.fbPixelId}]],head:[["link",{rel:"shortcut icon",href:"/favicon.ico"}],["meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}],["meta",{property:"og:type",content:"website"}],["meta",{property:"og:url",content:"https://xtokengen.github.io/search-token"}],["meta",{property:"og:image",content:"https://xtokengen.github.io/search-token/assets/images/search-token.png"}],["meta",{property:"twitter:card",content:"summary_large_image"}],["meta",{property:"twitter:image",content:"https://xtokengen.github.io/search-token/assets/images/search-token.png"}],["meta",{property:"twitter:title",content:"SearchToken | Create a Widget for your ERC20 or BEP20 Token"}],["script",{src:"/assets/js/web3.min.js"}],["script",{src:"https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1",defer:!0}]],defaultNetwork:r.defaultNetwork,infuraProjectId:r.infuraProjectId,bitlyAccessToken:r.bitlyAccessToken}},341:function(e,t,n){"use strict";var r=n(54),a=(n(106),n(183),n(109),n(79),n(107),n(339)),o=n.n(a),s=n(343);t.a={data:function(){return{web3:null,web3Provider:null,metamask:{installed:!1,netId:null},network:{default:o.a.defaultNetwork,current:null,map:{1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan",5:"goerli",56:"bsc_mainnet",97:"bsc_testnet"},list:{mainnet:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://mainnet.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://etherscan.io",explorerName:"Etherscan",id:1,name:"Main Ethereum Network"},ropsten:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://ropsten.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://ropsten.etherscan.io",explorerName:"Etherscan",id:3,name:"Ropsten Test Network"},rinkeby:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://rinkeby.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://rinkeby.etherscan.io",explorerName:"Etherscan",id:4,name:"Rinkeby Test Network"},kovan:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://kovan.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://kovan.etherscan.io",explorerName:"Etherscan",id:42,name:"Kovan Test Network"},goerli:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://goerli.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://goerli.etherscan.io",explorerName:"Etherscan",id:5,name:"Goerli Test Network"},bsc_mainnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://bsc-dataseed.binance.org/",explorerLink:"https://bscscan.com",explorerName:"BscScan",id:56,name:"BSC Mainnet"},bsc_testnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://data-seed-prebsc-1-s1.binance.org:8545/",explorerLink:"https://testnet.bscscan.com",explorerName:"BscScan",id:97,name:"BSC Testnet"},polygon_mainnet:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://polygon-rpc.com/",explorerLink:"https://polygonscan.com",explorerName:"PolygonScan",id:137,name:"Polygon Mainnet"},polygon_mumbai:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://rpc-mumbai.maticvigil.com/",explorerLink:"https://mumbai.polygonscan.com",explorerName:"PolygonScan",id:80001,name:"Matic Mumbai"}},blockchains:["Ethereum","Binance Smart Chain","Polygon"]},contracts:{token:null},instances:{token:null}}},methods:{initWeb3:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Object.prototype.hasOwnProperty.call(n.network.list,e)){r.next=2;break}throw new Error("Failed initializing network ".concat(e,". Allowed values are ").concat(Object.keys(n.network.list),"."));case 2:if(!t||void 0===window.ethereum){r.next=17;break}return console.log("injected ethereum"),n.web3Provider=window.ethereum,n.web3=new Web3(n.web3Provider),n.metamask.installed=n.web3Provider.isMetaMask,r.next=9,n.promisify(n.web3.eth.getChainId);case 9:if(a=r.sent,n.metamask.netId=a,a===n.network.list[e].id){r.next=15;break}return n.network.current=n.network.list[n.network.map[a]],r.next=15,n.initWeb3(e,!1);case 15:r.next=21;break;case 17:console.log("provided ethereum"),n.network.current=n.network.list[e],n.web3Provider=new Web3.providers.HttpProvider(n.network.list[e].web3Provider),n.web3=new Web3(n.web3Provider);case 21:case"end":return r.stop()}}),r)})))()},initContract:function(e){console.log("init ".concat(e," on ").concat(this.network.current.name)),this.instances.token=new this.web3.eth.Contract(s,e)}}}},342:function(e){e.exports=JSON.parse('{"defaultNetwork":"mainnet","gaId":"UA-2","fbPixelId":"UA-3","infuraProjectId":"be402bb729b2472ba828e013468dc626","bitlyAccessToken":"5f9b3f6dc31fa147f4609bcf3af4e5319c7fe6d6"}')},343:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},394:function(e,t,n){"use strict";n.r(t);var r=n(54),a=(n(107),n(184),n(183),n(106),n(338)),o=n(341),s={name:"Generator",mixins:[a.a,o.a],data:function(){return{loaded:!1,loading:!1,currentNetwork:null,token:{address:"",name:"",symbol:"",decimals:"",logo:""}}},computed:{tokenType:function(){return this.network.current?this.network.current.tokenType:"ERC20"},blockchain:function(){return this.network.current?this.network.current.blockchain:"Ethereum"}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.network.current=e.network.list[e.currentNetwork],t.prev=1,t.next=4,e.initWeb3(e.currentNetwork,!0);case 4:e.$validator.extend("eth_address",{getMessage:function(e){return"Insert a valid token address."},validate:function(t){return e.web3.utils.isAddress(t)}}),e.token.address=e.getParam("address")||"",""!==e.token.address&&e.getToken(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),alert(t.t0),document.location.href=e.$withBase("/");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},getToken:function(){var e=this;this.$validator.validateAll().then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=23;break}return t.prev=1,e.loaded=!1,e.loading=!0,e.initContract(e.token.address),t.next=7,e.promisify(e.instances.token.methods.name().call);case 7:return e.token.name=t.sent,t.next=10,e.promisify(e.instances.token.methods.symbol().call);case 10:return e.token.symbol=t.sent,t.next=13,e.promisify(e.instances.token.methods.decimals().call);case 13:e.token.decimals=t.sent.valueOf(),e.token.name&&e.token.symbol&&e.token.decimals?e.loaded=!0:(alert("It seems that it is not a valid Token or you are on the wrong network"),e.loaded=!1),e.loading=!1,t.next=23;break;case 18:t.prev=18,t.t0=t.catch(1),alert("It seems that it is not a valid Token or you are on the wrong network"),e.loaded=!1,e.loading=!1;case 23:case"end":return t.stop()}}),t,null,[[1,18]])})));return function(e){return t.apply(this,arguments)}}())},createTokenPage:function(){var e=this;this.$validator.validateAll().then((function(t){if(t){var n=e.web3.utils.toHex(JSON.stringify({address:e.token.address,logo:e.token.logo}));document.location.href=e.$withBase("/page/?hash=".concat(n,"&network=").concat(e.currentNetwork))}}))}}},i=n(53),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"p-0 pt-4"},[e.loaded||e.loading?e._e():n("b-col",{attrs:{lg:"8","offset-lg":"2"}},[n("b-card",{attrs:{"bg-variant":"light",title:"Create your "+e.tokenType+" Token Widget"}},[n("p",[e._v("\n        Create a Widget for your "),n("b",[e._v(e._s(e.tokenType))]),e._v("\n        Token on "),n("b",[e._v(e._s(e.blockchain))]),e._v("."),n("br"),e._v("\n        Enter your Token details, create a Widget and share it with your users.\n      ")]),e._v(" "),n("b-form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.getToken.apply(null,arguments)}}},[n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Network","label-for":"network"}},[n("b-form-select",{attrs:{id:"network",size:"lg",disabled:e.loading},on:{input:e.initDapp},model:{value:e.currentNetwork,callback:function(t){e.currentNetwork=t},expression:"currentNetwork"}},e._l(e.network.blockchains,(function(t){return n("b-form-select-option-group",{attrs:{label:t}},e._l(e.network.list,(function(r,a){return r.blockchain===t?n("b-form-select-option",{attrs:{value:a}},[e._v("\n                    "+e._s(r.name)+"\n                  ")]):e._e()})),1)})),1)],1)],1),e._v(" "),n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Token Address","label-for":"tokenAddress"}},[n("b-input-group",[n("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|eth_address",expression:"'required|eth_address'"}],class:{"is-invalid":e.errors.has("tokenAddress")},attrs:{name:"tokenAddress",placeholder:"0x123456789...",size:"lg",disabled:e.loading,"data-vv-as":"token address"},model:{value:e.token.address,callback:function(t){e.$set(e.token,"address","string"==typeof t?t.trim():t)},expression:"token.address"}}),e._v(" "),n("b-input-group-append",[n("b-button",{attrs:{disabled:e.loading,type:"submit",variant:"success"}},[n("b-icon-search")],1)],1)],1),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenAddress"),expression:"errors.has('tokenAddress')"}],staticClass:"text-danger"},[e._v("\n                "+e._s(e.errors.first("tokenAddress"))+"\n              ")])],1)],1)],1)],1)],1)],1),e._v(" "),e.loading?n("b-col",{attrs:{lg:"8","offset-lg":"2"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("ui--loader",{attrs:{loading:e.loading}})],1)],1):e._e(),e._v(" "),e.loaded?n("b-col",{attrs:{lg:"8","offset-lg":"2"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("b-form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.createTokenPage.apply(null,arguments)}}},[n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Address","label-for":"tokenAddress"}},[n("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|eth_address",expression:"'required|eth_address'"}],class:{"is-invalid":e.errors.has("tokenAddress")},attrs:{id:"tokenAddress",name:"tokenAddress",placeholder:"Your token address",size:"lg",readonly:"","data-vv-as":"token address"},model:{value:e.token.address,callback:function(t){e.$set(e.token,"address","string"==typeof t?t.trim():t)},expression:"token.address"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenAddress"),expression:"errors.has('tokenAddress')"}],staticClass:"text-danger"},[e._v("\n                "+e._s(e.errors.first("tokenAddress"))+"\n              ")])],1)],1),e._v(" "),n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Name","label-for":"tokenName"}},[n("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("tokenName")},attrs:{id:"tokenName",name:"tokenName",placeholder:"Your token name",size:"lg",readonly:"","data-vv-as":"token name"},model:{value:e.token.name,callback:function(t){e.$set(e.token,"name","string"==typeof t?t.trim():t)},expression:"token.name"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenName"),expression:"errors.has('tokenName')"}],staticClass:"text-danger"},[e._v("\n                "+e._s(e.errors.first("tokenName"))+"\n              ")])],1)],1),e._v(" "),n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Symbol","label-for":"tokenSymbol"}},[n("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("tokenSymbol")},attrs:{id:"tokenSymbol",name:"tokenSymbol",placeholder:"Your token symbol",size:"lg",readonly:"","data-vv-as":"token symbol"},model:{value:e.token.symbol,callback:function(t){e.$set(e.token,"symbol","string"==typeof t?t.trim():t)},expression:"token.symbol"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenSymbol"),expression:"errors.has('tokenSymbol')"}],staticClass:"text-danger"},[e._v("\n                "+e._s(e.errors.first("tokenSymbol"))+"\n              ")])],1)],1),e._v(" "),n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Decimals","label-for":"tokenDecimals"}},[n("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("tokenDecimals")},attrs:{id:"tokenDecimals",name:"tokenDecimals",placeholder:"Your token decimals",size:"lg",readonly:"",type:"number",min:"0",max:"36",step:"1","data-vv-as":"token decimals"},model:{value:e.token.decimals,callback:function(t){e.$set(e.token,"decimals","string"==typeof t?t.trim():t)},expression:"token.decimals"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenDecimals"),expression:"errors.has('tokenDecimals')"}],staticClass:"text-danger"},[e._v("\n                "+e._s(e.errors.first("tokenDecimals"))+"\n              ")])],1)],1),e._v(" "),n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Logo (optional)","label-for":"tokenLogo",description:"Suggested: a square SVG or PNG with transparent background (recommended greater than 64x64px)."}},[n("b-form-input",{attrs:{id:"tokenLogo",placeholder:"Your token logo link",size:"lg"},model:{value:e.token.logo,callback:function(t){e.$set(e.token,"logo","string"==typeof t?t.trim():t)},expression:"token.logo"}})],1)],1)],1),e._v(" "),n("b-row",[n("b-col",{staticClass:"mt-3",attrs:{lg:"12"}},[n("b-button",{attrs:{size:"lg",variant:"outline-success",block:"",type:"submit"}},[e._v("\n              Create Token Widget\n            ")])],1)],1)],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=l.exports}}]);