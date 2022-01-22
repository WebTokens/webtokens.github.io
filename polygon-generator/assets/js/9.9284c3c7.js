(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{400:function(e,t,n){"use strict";n.r(t);var a=n(54),r=(n(109),n(360),n(185),n(347),n(8),n(187),n(363),n(364),n(107),n(348)),o=(n(36),n(110),n(376)),s=n.n(o),i=n(340),c=n.n(i),l={mixins:[n(349).a],data:function(){return{apiUrl:{mainnet:"https://api.polygonscan.com/api",mumbai:"https://api-testnet.polygonscan.com/api"}}},methods:{verifySourceCode:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.get(e.sourceLink);case 2:return a=n.sent,(r=new FormData).append("apikey",c.a.polygonApiKey),r.append("module","contract"),r.append("action","verifysourcecode"),r.append("contractaddress",e.address),r.append("sourceCode",a.data),r.append("contractname",e.contractName),r.append("compilerversion","v".concat(e.compilerVersion.replace(".Emscripten.clang",""))),r.append("constructorArguements",e.arguments.replace("0x","")),r.append("licenseType",3),r.append("optimizationUsed",1),r.append("runs",200),n.next=17,s.a.post(t.apiUrl[e.network],r);case 17:return o=n.sent,n.abrupt("return",o.data);case 19:case"end":return n.stop()}}),n)})))()}}},u=n(344),p={name:"Generator",mixins:[r.a,l,u.a],data:function(){return{loading:!0,currentNetwork:null,tokenType:"",trx:{hash:"",link:""},transactionStarted:!1,makingTransaction:!1,formDisabled:!1,sourceCodeVerified:!1,verificationCount:0,feeAmount:"0",agreement:"",deployArguments:{},token:{name:"",symbol:"",decimals:18,cap:"",initialBalance:"",supplyType:"Fixed",accessType:"None",transferType:"Unstoppable",mintable:!1,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!1,sourceLink:""}}},mounted:function(){this.tokenType=this.getParam("tokenType")||"SimpleERC20",this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.network.current=e.network.list[e.currentNetwork],t.prev=1,t.next=4,e.initWeb3(e.currentNetwork,!0);case 4:return e.initService(e.currentNetwork),t.next=7,e.loadToken();case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),e.makeToast("Some errors occurred",t.t0,"danger");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},loadToken:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.prototype.hasOwnProperty.call(e.tokenList,e.tokenType)||(e.makeToast("Some errors occurred","Selected token type does not exist!","danger"),e.tokenType="SimpleERC20"),e.initToken(e.tokenType),e.updateTokenDetails(),e.updateSupply(),e.updateCap(),t.prev=5,t.next=8,e.promisify(e.contracts.service.methods.getPrice(e.tokenType).call);case 8:e.feeAmount=t.sent,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(5),console.log(t.t0.message),"mainnet"===e.currentNetwork?(e.makeToast("Warning","We are having an issue with Current Network Provider. Please switch Network or try again later.","warning"),e.feeAmount=e.web3.utils.toWei("0","ether")):e.feeAmount=e.web3.utils.toWei("".concat(e.token.price),"ether");case 15:"mainnet"===e.currentNetwork&&(e.gaSend("ViewContent","".concat(e.tokenType,"_MATIC"),""),e.fbtrack("ViewContent",{content_ids:["".concat(e.tokenType,"_MATIC")],content_type:"product"})),e.loading=!1;case 17:case"end":return t.stop()}}),t,null,[[5,11]])})))()},generateToken:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$refs.observer.validate().then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(n){var a,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=38;break}if(e.metamask.installed){t.next=6;break}return e.makeToast("Warning","To create a Token please install MetaMask!","danger"),t.abrupt("return");case 6:if(e.metamask.netId===e.network.current.id){t.next=9;break}return e.makeToast("Warning","Your MetaMask in on the wrong network. Please switch on ".concat(e.network.current.name," and try again!"),"warning"),t.abrupt("return");case 9:return t.prev=9,e.trx.hash="",e.trx.link="",e.formDisabled=!0,e.makingTransaction=!0,e.sourceCodeVerified=!1,e.verificationCount=0,"mainnet"===e.currentNetwork&&(e.gaSend("AddToCart","".concat(e.tokenType,"_MATIC"),""),e.fbtrack("AddToCart",{content_ids:["".concat(e.tokenType,"_MATIC")],content_type:"product"})),t.next=19,e.web3Provider.request({method:"eth_requestAccounts"});case 19:return a=new e.web3.eth.Contract(e.contracts.token.abi),e.loadDeployArguments(),r={data:e.contracts.token.bytecode,arguments:e.deployArguments.parameters},t.next=24,e.promisify(e.web3.eth.getCoinbase);case 24:return t.t0=t.sent,t.t1=e.feeAmount,o={from:t.t0,value:t.t1},t.next=29,e.estimateDeployGas(a,r,o);case 29:o.gas=t.sent,a.deploy(r).send(o).on("error",(function(t){console.log(t.message),e.makingTransaction=!1,e.formDisabled=!1,e.makeToast("Error!",t.message,"danger")})).on("transactionHash",(function(t){e.transactionStarted=!0,e.trx.hash=t,e.trx.link="".concat(e.network.current.explorerLink,"/tx/").concat(e.trx.hash),"mainnet"===e.currentNetwork&&(e.gaSend("InitiateCheckout","".concat(e.tokenType,"_MATIC"),e.trx.hash),e.fbtrack("InitiateCheckout"))})).on("receipt",(function(t){e.token.address=t.contractAddress,e.token.link="".concat(e.network.current.explorerLink,"/token/").concat(e.token.address),e.token.widget="/search-token/create/?address=".concat(e.token.address,"&network=polygon_").concat(e.currentNetwork),e.$forceUpdate(),e.makeToast("Well done!","Your Token has been deployed!","success"),"mainnet"===e.currentNetwork&&(e.gaSend("Purchase","".concat(e.tokenType,"_MATIC"),e.token.address),e.fbtrack("Purchase",{value:e.web3.utils.fromWei(e.feeAmount,"ether"),currency:"EUR",content_ids:["".concat(e.tokenType,"_MATIC")],content_type:"product"})),"mainnet"===e.currentNetwork&&e.verifyCode()})),t.next=38;break;case 33:t.prev=33,t.t2=t.catch(9),e.makingTransaction=!1,e.formDisabled=!1,e.makeToast("Some error occurred",t.t2.message,"danger");case 38:case"end":return t.stop()}}),t,null,[[9,33]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t),e.makingTransaction=!1,e.makeToast("Some error occurred",t.message,"danger")}));case 1:case"end":return t.stop()}}),t)})))()},updateTokenDetails:function(){var e=this,t=this.tokenDetails.find((function(t){return t.name===e.tokenType}));this.token.customizeDecimals=t.customizeDecimals,this.token.verified=t.verified,this.token.supplyType=t.supplyType,this.token.accessType=t.accessType,this.token.transferType=t.transferType,this.token.mintable=t.mintable,this.token.burnable=t.burnable,this.token.erc1363=t.erc1363,this.token.tokenRecover=t.tokenRecover,this.token.removeCopyright=t.removeCopyright,this.token.price=t.price,this.token.gas=this.web3.utils.toBN(t.gas),this.token.decimals=t.customizeDecimals?this.token.decimals:18,this.token.sourceLink=this.$withBase("/source-code/".concat(this.contracts.token.contractName,".dist.txt"))},updateCap:function(){this.token.cap=["10k","Fixed"].includes(this.token.supplyType)?this.token.initialBalance:this.token.cap},updateSupply:function(){this.token.initialBalance="10k"===this.token.supplyType?1e4:this.token.initialBalance},loadDeployArguments:function(){var e=this.token.name,t=this.token.symbol,n=this.web3.utils.toBN(this.token.decimals),a=this.web3.utils.toBN(this.token.cap).mul(this.web3.utils.toBN(Math.pow(10,this.token.decimals))),r=this.web3.utils.toBN(this.token.initialBalance).mul(this.web3.utils.toBN(Math.pow(10,this.token.decimals))),o={typesArray:["string","string"],parameters:[e,t]};switch(this.tokenType){case"HelloERC20":break;case"SimpleERC20":o.typesArray.push("uint256"),o.parameters.push(r);break;case"StandardERC20":case"BurnableERC20":case"PausableERC20":case"UnlimitedERC20":case"AmazingERC20":o.typesArray.push("uint8"),o.parameters.push(n),o.typesArray.push("uint256"),o.parameters.push(r);break;case"MintableERC20":case"CommonERC20":case"PowerfulERC20":o.typesArray.push("uint8"),o.parameters.push(n),o.typesArray.push("uint256"),o.parameters.push(a),o.typesArray.push("uint256"),o.parameters.push(r);break;default:throw new Error("Invalid Token Type")}o.typesArray.push("address"),o.parameters.push(this.contracts.service.options.address),this.deployArguments=o},estimateDeployGas:function(e,t,n){var r=this;return Object(a.a)(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,r.promisify(e.deploy(t).estimateGas,n);case 3:return o=a.sent,a.abrupt("return",r.web3.utils.toBN(o).muln(1.3));case 7:return a.prev=7,a.t0=a.catch(0),console.log(a.t0),a.abrupt("return",r.token.gas);case 11:case"end":return a.stop()}}),a,null,[[0,7]])})))()},addToMetaMask:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.web3Provider.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e.token.address,symbol:e.token.symbol.substr(0,5),decimals:e.token.decimals}}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},verifyCode:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout(Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.verifySourceCode({network:e.currentNetwork,address:e.token.address,contractName:e.contracts.token.contractName,compilerVersion:e.contracts.token.compiler.version,sourceLink:e.token.sourceLink,arguments:e.web3.eth.abi.encodeParameters(e.deployArguments.typesArray,e.deployArguments.parameters)});case 3:if(n=t.sent,e.gaSend("SourceCode","".concat(e.tokenType,"_MATIC"),"".concat(e.token.address," Result => ").concat(n.result)),"1"!==n.status){t.next=10;break}e.sourceCodeVerified=!0,e.makeToast("Well done!","Your Token Source code has been verified!","success"),t.next=15;break;case 10:if(console.log(n),e.verificationCount++,!(e.verificationCount<4)){t.next=15;break}return t.next=15,e.verifyCode();case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])}))),3e4);case 1:case"end":return t.stop()}}),t)})))()}}},d=n(53),m=Object(d.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{staticClass:"mb-0 purple-gradient",attrs:{"text-variant":"white",header:"Create your ERC20 Token on Polygon",fluid:""},scopedSlots:e._u([{key:"lead",fn:function(){return[e._v("\n            Easily deploy Smart Contract for a Standard, Capped, Mintable, Burnable, Payable ERC20 Token on Polygon Network.\n            "),n("br"),e._v("\n            No login. No setup. No coding required.\n        ")]},proxy:!0}])}),e._v(" "),n("b-row",{staticClass:"mx-0",attrs:{id:"token-generator"}},[n("b-col",{staticClass:"mb-3 p-0",attrs:{lg:"12",xl:"10","offset-xl":"1"}},[e.loading?n("div",{staticClass:"text-center p-5"},[n("ui--loader",{attrs:{loading:!0}})],1):e._e(),e._v(" "),e.loading?e._e():n("b-card",{attrs:{"bg-variant":"transparent","border-variant":"0"}},[e.metamask.installed?e._e():n("b-alert",{attrs:{show:"",variant:"danger"}},[n("h4",{staticClass:"alert-heading"},[e._v("Alert")]),e._v(" "),n("p",[e._v("\n                        To use this app please install "),n("a",{attrs:{href:"https://metamask.io/",target:"_blank"}},[e._v("MetaMask")]),e._v(".\n                        Use any other wallet at your own risk.\n                    ")])]),e._v(" "),e.makingTransaction||e.transactionStarted?n("b-card",{staticClass:"mt-3",attrs:{header:"Making transaction...","header-bg-variant":"info","header-text-variant":"white"}},[e.trx.hash?n("div",[n("h6",{staticClass:"text-success"},[e._v("Well! Transaction done!")]),e._v("\n                        Transaction Hash:\n                        "),n("a",{attrs:{href:e.trx.link,target:"_blank"}},[n("span",{domProps:{innerHTML:e._s(e.trx.hash)}})]),n("br"),e._v(" "),n("hr"),e._v(" "),e.token.address?n("div",[n("h6",{staticClass:"text-info"},[e._v("Your Token:")]),e._v(" "),n("h5",[e._v(e._s(e.token.name)+" ("+e._s(e.token.symbol)+")")]),e._v(" "),n("h6",[e._v("Address: "+e._s(e.token.address))]),e._v(" "),n("small",{staticClass:"text-muted"},[e._v("Supply: "+e._s(e.token.initialBalance)+" "+e._s(e.token.symbol))]),e._v(" "),"mainnet"===e.currentNetwork?[n("hr"),e._v(" "),e.sourceCodeVerified?[n("b-icon-check-circle-fill",{attrs:{variant:"success"}}),e._v("\n                                    Contract Source Code Verified\n                                ")]:4===e.verificationCount?[n("b-icon-x-circle-fill",{attrs:{variant:"warning"}}),e._v("\n                                    Contract Source Code verification failed."),n("br"),e._v(" "),n("small",[e._v("\n                                        Check your contract tab on PolygonScan.\n                                        If it still requires verification, then contact us.\n                                    ")])]:[n("h6",[e._v("Verifying Source Code.")]),e._v(" "),n("p",[e._v("Please wait, it may take up to a minute...")]),e._v(" "),n("ui--loader",{attrs:{loading:!0}})]]:e._e(),e._v(" "),n("hr"),e._v(" "),n("b-link",{staticClass:"btn btn-primary my-2",attrs:{href:e.token.link,target:"_blank"}},[n("b-icon-arrow-up-right-circle-fill"),e._v("\n                                View on PolygonScan\n                            ")],1),e._v(" "),n("b-link",{staticClass:"btn btn-success my-2",on:{click:e.addToMetaMask}},[n("b-icon-plus-circle-fill"),e._v("\n                                Add to MetaMask\n                            ")],1),e._v(" "),n("b-link",{staticClass:"btn btn-dark my-2",attrs:{href:e.token.widget,target:"_blank"}},[n("b-icon-gear-fill"),e._v("\n                                Create Widget\n                            ")],1)],2):n("div",[n("h6",[e._v("Retrieving Token.")]),e._v(" "),n("p",[e._v("Please wait...")]),e._v(" "),n("ui--loader",{attrs:{loading:!0}})],1)]):n("div",[n("p",[e._v("Please wait...")]),e._v(" "),n("ui--loader",{attrs:{loading:!0}})],1)]):e._e(),e._v(" "),e.makingTransaction||e.transactionStarted?e._e():n("ValidationObserver",{ref:"observer",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.generateToken()}}},[n("fieldset",{attrs:{disabled:e.formDisabled}},[n("b-row",[n("b-col",{attrs:{md:"6",lg:"4"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Token Details","header-bg-variant":"dark","header-text-variant":"white"}},[n("ValidationProvider",{attrs:{name:"token name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Choose a name for your token.",label:"Token Name *","label-for":"tokenName"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenName",name:"tokenName",placeholder:"Your token name",size:"lg",maxlength:"30"},model:{value:e.token.name,callback:function(t){e.$set(e.token,"name","string"==typeof t?t.trim():t)},expression:"token.name"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,3102910013)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token symbol",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Choose a symbol for your token (usually 3-5 chars).",label:"Token Symbol *","label-for":"tokenSymbol"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenSymbol",name:"tokenSymbol",placeholder:"Your token symbol",size:"lg",maxlength:"10"},on:{update:function(t){e.token.symbol=e.token.symbol.toUpperCase()}},model:{value:e.token.symbol,callback:function(t){e.$set(e.token,"symbol","string"==typeof t?t.trim():t)},expression:"token.symbol"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,1266156028)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token Decimals",rules:{required:!0,numeric:!0,min_value:0,max_value:36}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Insert the decimal precision of your token. If you don't know what to insert, use 18.",label:"Token decimals *","label-for":"tokenDecimals"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenDecimals",name:"tokenDecimals",placeholder:"Your token decimals",type:"number",disabled:!e.token.customizeDecimals,size:"lg",min:"0",step:"1"},model:{value:e.token.decimals,callback:function(t){e.$set(e.token,"decimals","string"==typeof t?t.trim():t)},expression:"token.decimals"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,1812990632)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token initial supply",rules:{required:!0,numeric:!0,min_value:"Fixed"===e.token.supplyType?1:0,max_value:1e15}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Insert the initial number of tokens available. Will be put in your account.",label:"Initial Supply *","label-for":"tokenInitialBalance"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenInitialBalance",name:"tokenInitialBalance",placeholder:"Your token initial supply",type:"number",size:"lg",disabled:"10k"===e.token.supplyType,min:"0",step:"1"},on:{update:e.updateCap},model:{value:e.token.initialBalance,callback:function(t){e.$set(e.token,"initialBalance","string"==typeof t?t.trim():t)},expression:"token.initialBalance"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,2411694345)}),e._v(" "),"Unlimited"!==e.token.supplyType?n("ValidationProvider",{attrs:{name:"token max supply",rules:{required:!0,numeric:!0,min_value:e.token.initialBalance>0?e.token.initialBalance:1,max_value:1e15}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Insert the maximum number of tokens available.",label:"Total Supply *","label-for":"tokenCap"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenCap",name:"tokenCap",placeholder:"Your token max supply",type:"number",size:"lg",disabled:["10k","Fixed"].includes(e.token.supplyType),min:"1",step:"1"},model:{value:e.token.cap,callback:function(t){e.$set(e.token,"cap","string"==typeof t?t.trim():t)},expression:"token.cap"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,4071022817)}):e._e()],1)],1),e._v(" "),n("b-col",{attrs:{md:"6",lg:"4"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Token Features","header-bg-variant":"dark","header-text-variant":"white"}},[n("b-form-group",{attrs:{description:["10k","Fixed","Unlimited","Capped"].join(", "),label:"Supply Type","label-for":"supplyType"}},[n("b-form-select",{attrs:{id:"supplyType",disabled:"",size:"sm"},model:{value:e.token.supplyType,callback:function(t){e.$set(e.token,"supplyType",t)},expression:"token.supplyType"}},e._l(["10k","Fixed","Unlimited","Capped"],(function(t){return n("option",{domProps:{value:t}},[e._v("\n                                                "+e._s(t)+"\n                                            ")])})),0)],1),e._v(" "),n("b-form-group",{attrs:{description:["None","Ownable","Role Based"].join(", "),label:"Access Type","label-for":"accessType"}},[n("b-form-select",{attrs:{id:"accessType",disabled:"",size:"sm"},model:{value:e.token.accessType,callback:function(t){e.$set(e.token,"accessType",t)},expression:"token.accessType"}},e._l(["None","Ownable","Role Based"],(function(t){return n("option",{domProps:{value:t}},[e._v("\n                                                "+e._s(t)+"\n                                            ")])})),0)],1),e._v(" "),n("b-form-group",{attrs:{description:["Unstoppable","Pausable"].join(", "),label:"Transfer Type","label-for":"transferType"}},[n("b-form-select",{attrs:{id:"transferType",disabled:"",size:"sm"},model:{value:e.token.transferType,callback:function(t){e.$set(e.token,"transferType",t)},expression:"token.transferType"}},e._l(["Unstoppable","Pausable"],(function(t){return n("option",{domProps:{value:t}},[e._v("\n                                                "+e._s(t)+"\n                                            ")])})),0)],1),e._v(" "),n("b-form-group",{attrs:{description:"Your Token Source Code will be automatically verified on PolygonScan."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.verified,callback:function(t){e.$set(e.token,"verified",t)},expression:"token.verified"}},[e._v("\n                                            Verified Source Code\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"Remove the link pointing to this page from your contract."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.removeCopyright,callback:function(t){e.$set(e.token,"removeCopyright",t)},expression:"token.removeCopyright"}},[e._v("\n                                            Remove Copyright\n                                        ")])],1),e._v(" "),n("b-form-group",[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.burnable,callback:function(t){e.$set(e.token,"burnable",t)},expression:"token.burnable"}},[e._v("\n                                            Burnable\n                                        ")])],1),e._v(" "),n("b-form-group",[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.mintable,callback:function(t){e.$set(e.token,"mintable",t)},expression:"token.mintable"}},[e._v("\n                                            Mintable\n                                        ")])],1),e._v(" "),n("b-form-group",[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.erc1363,callback:function(t){e.$set(e.token,"erc1363",t)},expression:"token.erc1363"}},[e._v("\n                                            ERC1363\n                                        ")])],1),e._v(" "),n("b-form-group",[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.tokenRecover,callback:function(t){e.$set(e.token,"tokenRecover",t)},expression:"token.tokenRecover"}},[e._v("\n                                            Token Recover\n                                        ")])],1)],1)],1),e._v(" "),n("b-col",{attrs:{md:"12",lg:"4"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Token Type and Network","header-bg-variant":"dark","header-text-variant":"white"}},[n("b-form-group",{attrs:{description:"Choose your Token Type.",label:"Token Type *","label-for":"tokenType"}},[n("b-form-select",{attrs:{id:"tokenType",size:"sm"},on:{input:e.loadToken},model:{value:e.tokenType,callback:function(t){e.tokenType=t},expression:"tokenType"}},e._l(e.tokenList,(function(t,a){return n("option",{domProps:{value:a}},[e._v("\n                                                "+e._s(t.contractName)+"\n                                            ")])})),0)],1),e._v(" "),n("b-form-group",{attrs:{description:"Choose your Network.",label:"Network *","label-for":"network"}},[n("b-form-select",{attrs:{id:"network",size:"sm"},on:{input:e.initDapp},model:{value:e.currentNetwork,callback:function(t){e.currentNetwork=t},expression:"currentNetwork"}},e._l(e.network.list,(function(t,a){return n("option",{domProps:{value:a}},[e._v(e._s(t.name)+"\n                                            ")])})),0)],1),e._v(" "),"mainnet"!==e.currentNetwork?n("b-alert",{attrs:{show:"",variant:"warning"}},[n("strong",[e._v("\n                                            You selected a TEST Network.\n                                        ")]),e._v(" "),n("hr"),e._v("\n                                        To deploy on Main Network you must select Polygon Mainnet.\n                                    ")]):e._e(),e._v(" "),n("b-link",{attrs:{href:"https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask#add-the-polygon-network-manually",target:"_blank"}},[n("small",[e._v("How to connect MetaMask to Polygon Network?")])])],1),e._v(" "),n("b-card",{staticClass:"mt-3",attrs:{header:"Agreement","header-bg-variant":"dark","header-text-variant":"white"}},[n("ValidationProvider",{attrs:{name:"Token Agreement",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{"label-for":"tokenAgreement"}},[n("b-form-checkbox",{class:{"is-invalid":a.length>0},attrs:{id:"tokenAgreement",name:"tokenAgreement",value:"accepted","unchecked-value":"",size:"sm"},model:{value:e.agreement,callback:function(t){e.agreement=t},expression:"agreement"}},[n("p",[e._v("\n                                                    I have read, understood and agreed to Token Generator's\n                                                    "),n("u",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-terms",modifiers:{"modal-terms":!0}}]},[e._v("Terms of Use")]),e._v(".\n                                                ")])]),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,3156829660)})],1),e._v(" "),n("b-card",{staticClass:"mt-3",attrs:{header:"Transaction","header-bg-variant":"info","header-text-variant":"white","no-body":""}},[n("b-list-group",{staticClass:"payment-box",attrs:{flush:""}},[n("b-list-group-item",{staticClass:"d-flex justify-content-between"},[n("span",[e._v("\n                                                Commission Fee:\n                                                "),n("b-icon-info-circle",{directives:[{name:"b-popover",rawName:"v-b-popover.v-warning.hover.top",value:"Commission will be transferred directly to us through the Polygon Network as part of your payment. Commission will support Token Generator to keep it safe, running and constantly updated.",expression:"\n                                                    'Commission will be transferred directly to us through the ' +\n                                                    'Polygon Network as part of your payment. ' +\n                                                    'Commission will support Token Generator to keep it ' +\n                                                    'safe, running and constantly updated.'",modifiers:{"v-warning":!0,hover:!0,top:!0}}]})],1),e._v(" "),n("b-badge",{attrs:{variant:"success"}},[e._v("\n                                                "+e._s(e.web3.utils.fromWei(e.feeAmount,"ether"))+" MATIC\n                                            ")])],1),e._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between"},[n("span",[e._v("\n                                                Gas Fee:\n                                                "),n("b-icon-info-circle",{directives:[{name:"b-popover",rawName:"v-b-popover.v-warning.hover.top",value:"It depends on Gas Limit and on current Gas price average. MetaMask will suggest both. Do not decrease Gas Limit to avoid transaction to fail. If you want, you can decrease Gas Price but your transaction could remain pending for minutes/hours. Read how to calculate right value in our FAQ. Failed transaction can't be refunded.",expression:"\n                                                    'It depends on Gas Limit and on current Gas price average. ' +\n                                                    'MetaMask will suggest both. ' +\n                                                    'Do not decrease Gas Limit to avoid transaction to fail. ' +\n                                                    'If you want, you can decrease Gas Price but your ' +\n                                                    'transaction could remain pending for minutes/hours. ' +\n                                                    'Read how to calculate right value in our FAQ. ' +\n                                                    'Failed transaction can\\'t be refunded.'",modifiers:{"v-warning":!0,hover:!0,top:!0}}]})],1),e._v(" "),n("b-badge",{attrs:{variant:"info"}},[e._v("\n                                                Variable\n                                            ")])],1)],1)],1),e._v(" "),n("b-button",{staticClass:"mt-3 py-3 px-5 text-uppercase",attrs:{variant:"success",size:"lg",block:"",type:"submit"}},[e._v("\n                                    Confirm\n                                ")])],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=m.exports}}]);