(function(){"use strict";var t={6827:function(t,e,s){var a=s(7195),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("MainPage")],1)},n=[],o=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"padding-top":"20px"}},[[e(t.getActiveStep.stepName,{tag:"component"})]],2)},r=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[e("load-ing",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}}),e("div",{staticClass:"card-header"},[t._v(" KAVACH ")]),e("img",{staticClass:"card-img opacity-80",staticStyle:{padding:"20px"},attrs:{src:s(3544)}}),e("div",{staticClass:"card-body"},[e("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.nextStep()}}},[t._v(" Let's go! ")])]),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)],1)},l=[],d=function(){var t=this;t._self._c;return t._m(0)},p=[function(){var t=this,e=t._self._c;return e("div",[e("a",{attrs:{href:"https://hypersign.id",target:"_blank"}},[t._v("Powered By Hypersign.id")])])}],u=s(1001),h={},g=(0,u.Z)(h,d,p,!1,null,"2e090c5f",null),m=g.exports,f=s(408),v={name:"AppInstructions",components:{PoweredBy:m},data(){return{isLoading:!1,fullPage:!0}},methods:{...(0,f.OI)(["nextStep"])}},y=v,b=(0,u.Z)(y,c,l,!1,null,"646410c2",null),C=b.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[e("load-ing",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}}),e("div",{staticClass:"card-body"},[e("h4",[t._v("Aadhaar Data")]),e("div",{staticClass:"scanQR"},[t.isScan?e("qrcode-stream",{on:{detect:t.onDetect,init:t.onInit,"camera-on":t.onReady,error:t.onError}},[t.loading?e("span",[t._v("Waiting for camera...")]):t._e()]):e("i",{staticClass:"bi bi-qr-code-scan",staticStyle:{"font-size":"170px",color:"rgb(59, 58, 58)"}})],1),e("span",{},[t._v("Scan QR code on your Addhaar")]),e("span",{},[t._v(t._s(t.error))]),e("div",{staticStyle:{padding:"10px"}},[t.isScan?e("button",{staticClass:"btn btn-link",on:{click:t.cancelScanner}},[t._v(" Cancel ")]):e("button",{staticClass:"btn btn-outline-primary",on:{click:t.openScanner}},[e("i",{staticClass:"bi bi-camera"}),t._v(" Scan ")])]),e("ConsentBox"),e("NextPage")],1),t.isToast?e("MessageBox",{attrs:{msg:t.toastMessage,type:t.toastType}}):t._e(),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)],1)},S=[],w=function(){var t=this;t._self._c;return t._m(0)},_=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"consent-message"},[e("span",[t._v(" Note: You are giving consent of your data to Hypersign. We do not store or log your data, we verify and delete it. ")])])}],x={},k=(0,u.Z)(x,w,_,!1,null,"4ef393df",null),T=k.exports,O=s(4001),N=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"padding-right":"10px","padding-left":"10px"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("span",{staticClass:"nextPriv",staticStyle:{float:"left"},on:{click:function(e){return t.previousStep()}}},[e("i",{staticClass:"bi bi-chevron-left"})]),e("span",{staticClass:"nextPriv",staticStyle:{float:"right"},on:{click:function(e){return t.nextStep()}}},[e("i",{staticClass:"bi bi-chevron-right"})])])])])},A=[],R={methods:{...(0,f.OI)(["nextStep","previousStep"])}},L=R,E=(0,u.Z)(L,N,A,!1,null,"569d959d",null),B=E.exports,I={name:"AppScanQR",data(){return{qrData:"",error:"",loading:!1,isScan:!1,isLoading:!1,fullPage:!0,toastMessage:"",toastType:"success",isToast:!1}},components:{PoweredBy:m,ConsentBox:T,QrcodeStream:O.QrcodeStream,NextPage:B},methods:{...(0,f.OI)(["nextStep","setQrString"]),...(0,f.nv)(["addharQRVerify"]),wait(t=3e3){return new Promise((e=>setTimeout((()=>{e()}),t)))},async onDetect(t){try{const{content:e}=await t;if(!e)throw new Error("Could not scan the QR");{this.setQrString(e),this.toast("Verifying the QR code..."),this.isLoading=!0;const t=await this.addharQRVerify();if(await this.wait(1e3),!t||!0!==t.verified)throw new Error("Invalid QR Code");console.log("QR verified successfully"),this.nextStep(),this.isLoading=!1}}catch(e){console.error(e),this.isLoading=!1,this.toast(e.message,"error")}finally{this.cancelScanner()}},async onInit(t){console.log("On init"),this.loading=!0;try{const{capabilities:e}=await t;console.log(e),this.loading=!1}catch(e){console.error(e),this.toast(e.message,"error")}},onReady(t){console.log("Camera is ready"),console.log(t)},onError(t){"NotAllowedError"===t.name&&(this.error="User denied camera access permission"),"NotFoundError"===t.name&&(this.error="No suitable camera found"),"NotSupportedError"===t.name&&(this.error="Page is not supported to served over HTTPs (or localhost)"),"NotReadableError"===t.name&&(this.error="May be camera already in use"),"OverconstrainedError"===t.name&&(this.error="REquested camera not present"),"StreamApiNotSupportedError"===t.name&&(this.error="Brower seems to be lacking camera feature"),this.toast(this.error,"error")},openScanner(){this.isScan=!0},cancelScanner(){this.isScan=!1},toast(t,e="success"){this.isToast=!0,this.toastMessage=t,this.toastType=e,setTimeout((()=>{this.isToast=!1,this.toastMessage=""}),2e3)}}},Q=I,M=(0,u.Z)(Q,P,S,!1,null,"6e11dfff",null),Z=M.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[e("load-ing",{attrs:{active:t.isLoadingPage,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoadingPage=e}}}),e("div",{staticClass:"card-body"},[e("h4",[t._v("Video KYC")]),e("div",{staticClass:"scanQR web-camera-container"},[t.isCameraOpen?t._e():e("img",{attrs:{src:s(1658),width:"200",height:"200"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isCameraOpen&&t.isLoading,expression:"isCameraOpen && isLoading"}],staticClass:"camera-loading"},[t._v(" Waiting for camera... ")]),t.isCameraOpen?e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"camera-box",class:{flash:t.isShotPhoto}},[e("div",{staticClass:"camera-shutter",class:{flash:t.isShotPhoto}}),e("video",{directives:[{name:"show",rawName:"v-show",value:!t.isPhotoTaken,expression:"!isPhotoTaken"}],ref:"camera",attrs:{width:250,height:250,autoplay:""}}),e("canvas",{directives:[{name:"show",rawName:"v-show",value:t.isPhotoTaken,expression:"isPhotoTaken"}],ref:"canvas",attrs:{id:"photoTaken",width:250,height:250}})]):t._e()]),e("span",{},[t._v("Click Your Picture")]),e("div",[t.isCameraOpen&&!t.isLoading?e("div",{},[e("button",{staticClass:"btn btn-dark",staticStyle:{"border-radius":"50%"},attrs:{type:"button"},on:{click:t.takePhoto}},[e("i",{staticClass:"bi bi-camera",staticStyle:{color:"white","font-size":"26px"}})])]):t._e(),e("div",{staticStyle:{padding:"10px"}},[t.isPhotoTaken&&t.isCameraOpen?e("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.submit()}}},[t._v(" Submit ")]):t._e()]),e("div",[e("button",{staticClass:"btn",class:{"btn-outline-primary":!t.isCameraOpen,"btn-link":t.isCameraOpen},attrs:{type:"button"},on:{click:t.toggleCamera}},[t.isCameraOpen?e("span",[t._v("Cancel")]):e("span",[e("i",{staticClass:"bi bi-camera"}),t._v(" Open Camera")])])])]),e("NextPage")],1),t.isToast?e("MessageBox",{attrs:{msg:t.toastMessage,type:t.toastType}}):t._e(),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)],1)},q=[],F={name:"AppClickPic",components:{PoweredBy:m,NextPage:B},data(){return{isCameraOpen:!1,isPhotoTaken:!1,isShotPhoto:!1,isLoading:!1,link:"#",fullPage:!0,isLoadingPage:!1,toastMessage:"",toastType:"success",isToast:!1}},methods:{...(0,f.nv)(["addharQRVerify","verifyPhoneNumber"]),...(0,f.OI)(["nextStep"]),toggleCamera(){this.isCameraOpen?(this.isCameraOpen=!1,this.isPhotoTaken=!1,this.isShotPhoto=!1,this.stopCameraStream()):(this.isCameraOpen=!0,this.createCameraElement())},createCameraElement(){this.isLoading=!0;const t=window.constraints={audio:!1,video:!0};navigator.mediaDevices.getUserMedia(t).then((t=>{this.isLoading=!1,this.$refs.camera.srcObject=t})).catch((t=>{console.error(t),this.isLoading=!1,this.toast(t.message,"error")}))},stopCameraStream(){let t=this.$refs.camera.srcObject.getTracks();t.forEach((t=>{t.stop()}))},takePhoto(){if(!this.isPhotoTaken){this.isShotPhoto=!0;const t=50;setTimeout((()=>{this.isShotPhoto=!1}),t)}this.isPhotoTaken=!this.isPhotoTaken;const t=this.$refs.canvas.getContext("2d");t.drawImage(this.$refs.camera,10,10,230,230)},downloadImage(){const t=document.getElementById("downloadPhoto"),e=document.getElementById("photoTaken").toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream");t.setAttribute("href",e)},wait(){return new Promise((t=>setTimeout((()=>{t()}),3e3)))},async submit(){try{this.isLoadingPage=!0,await this.wait();const t=await this.addharQRVerify();if(t){if(this.stopCameraStream(),!0!==t.verified)throw new Error("Enter a valid phone number linked with your Addhaar");this.nextStep()}}catch(t){console.error(t),this.stopCameraStream(),this.toast(t.message,"error")}},toast(t,e="success"){this.isToast=!0,this.toastMessage=t,this.toastType=e,setTimeout((()=>{this.isToast=!1,this.toastMessage=""}),2e3)}}},V=F,D=(0,u.Z)(V,j,q,!1,null,"525d621d",null),z=D.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[t._m(0),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)])},H=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-body"},[e("p",[e("i",{staticClass:"bi bi-check-circle final-msg-icon success"})]),e("span",{},[t._v("Successfully verified!")])])}],W={name:"AppFinalSuccess",components:{PoweredBy:m}},Y=W,U=(0,u.Z)(Y,$,H,!1,null,"5fdb3fa6",null),J=U.exports,K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[t._m(0),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)])},G=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-body"},[e("p",[e("i",{staticClass:"bi bi-x-circle final-msg-icon fail"})]),e("span",{},[t._v("Failed to verify!")])])}],X={name:"AppFinalSuccess",components:{PoweredBy:m}},tt=X,et=(0,u.Z)(tt,K,G,!1,null,"b1bf27ee",null),st=et.exports,at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[e("load-ing",{attrs:{active:t.isLoadingPage,"can-cancel":!0,"is-full-page":!0},on:{"update:active":function(e){t.isLoadingPage=e}}}),e("div",{staticClass:"card-body"},[e("h4",[t._v("Phone Number Verification")]),t.isPhoneCheckDone?e("div",{staticClass:"p-2 mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"validationCustom01"}},[t._v("Enter 4 digits OTP: ")]),e("div",{staticClass:"input-group"},[e("OtpInput",{ref:"otpInput",staticStyle:{margin:"0 auto","font-size":"30px"},attrs:{"input-classes":"otp-input",separator:"-","num-inputs":4,"should-auto-focus":!0,"is-input-num":!0},on:{"on-change":t.handleOnChange,"on-complete":t.handleOnComplete}}),e("small",{staticStyle:{color:"grey","text-align":"left"}},[t._v("Note: This feature is coming soon. Enter any 4 digits to test...")])],1),e("button",{staticClass:"btn btn-link",on:{click:function(e){return t.handleClearInput()}}},[t._v("Clear")])]):e("div",{staticClass:"col"},[e("label",{staticClass:"form-label",attrs:{for:"validationCustom01"}},[t._v("Enter Your Aadhaar Linked Phone Number")]),e("div",{staticClass:"input-group mb-3"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("+91")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"form-control",attrs:{type:"number",id:"validationCustom01",value:"Mark",required:""},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),e("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.check()}}},[t._v("Next")])]),e("NextPage")],1),t.isToast?e("MessageBox",{attrs:{msg:t.toastMessage,type:t.toastType}}):t._e(),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)],1)},it=[],nt=s(1502),ot=s.n(nt),rt={name:"AppOtp",data(){return{isPhoneCheckDone:!1,isLoadingPage:!1,phoneNumber:"",toastMessage:"",toastType:"success",isToast:!1}},components:{OtpInput:ot(),PoweredBy:m,NextPage:B},computed:{},methods:{...(0,f.nv)(["addharQRVerify","verifyPhoneNumber","getFinalResult"]),...(0,f.OI)(["setPhoneNumber","nextStep"]),async check(){try{if(10!=this.phoneNumber.length)throw new Error("Phone number should of 10 digits");this.setPhoneNumber(this.phoneNumber),this.isLoadingPage=!0;const t=await this.verifyPhoneNumber();t&&!0===t.verified&&(this.isPhoneCheckDone=!0),this.isLoadingPage=!1}catch(t){this.isLoadingPage=!1,this.toast(t.message,"error"),console.log(t)}},async handleOnComplete(t){try{console.log("OTP completed: ",t);const e=await this.getFinalResult();e&&!0===e.verified&&this.nextStep(5)}catch(e){this.toast(e.message,"error"),console.log(e)}},handleOnChange(t){console.log("OTP changed: ",t)},handleClearInput(){this.$refs.otpInput.clearInput()},toast(t,e="success"){this.isToast=!0,this.toastMessage=t,this.toastType=e,setTimeout((()=>{this.isToast=!1,this.toastMessage=""}),2e3)}}},ct=rt,lt=(0,u.Z)(ct,at,it,!1,null,"2233febc",null),dt=lt.exports,pt={name:"HelloWorld",components:{AppInstructions:C,AppScanQR:Z,AppClickPic:z,AppFinalSuccess:J,AppFinalFail:st,AppOtp:dt},computed:{...(0,f.Se)(["getActiveStep"])}},ut=pt,ht=(0,u.Z)(ut,o,r,!1,null,"0f921392",null),gt=ht.exports;const mt="https://stage.hypermine.in/kavach";var ft={name:"App",components:{MainPage:gt},methods:{...(0,f.nv)(["setSession"])},async created(){const t=await fetch(mt+"/api/v1/aadhaar/session",{method:"Post",headers:{Credentials:"include","Content-Type":"application/json"}}),e=t.headers.get("set-cookie");console.log(e)}},vt=ft,yt=(0,u.Z)(vt,i,n,!1,null,null,null),bt=yt.exports;s(7024),s(3060);a.ZP.use(f.ZP);var Ct=new f.ZP.Store({state:{qrString:"",phoneNumber:"",steps:[{id:0,isActive:!0,stepName:"AppInstructions",previous:0},{id:1,isActive:!0,stepName:"AppScanQR",previous:0},{id:2,isActive:!1,stepName:"AppClickPic",previous:1},{id:3,isActive:!1,stepName:"AppOtp",previous:2},{id:4,isActive:!1,stepName:"AppFinalSuccess",previous:3},{id:5,isActive:!1,stepName:"AppFinalFail",previous:3}]},getters:{getActiveStep:t=>t.steps.find((t=>1==t.isActive))},mutations:{nextStep:(t,e=null)=>{const s=t.steps.find((t=>1==t.isActive)),a=e||s.id+1;t.steps[s.id].isActive=!1,t.steps[a].isActive=!0},previousStep:t=>{const e=t.steps.find((t=>1==t.isActive)),s=e.previous;t.steps[e.id].isActive=!1,t.steps[s].isActive=!0},setQrString:(t,e)=>{t.qrString=e},setPhoneNumber:(t,e)=>{t.phoneNumber=e}},actions:{addharQRVerify:({state:t})=>new Promise(((e,s)=>{console.log("Inside addharQRVerify");const a=mt+"/api/v1/aadhaar/qr/verify";fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({qrString:t.qrString})}).then((t=>t.json())).then((t=>{if(400==t.statusCode)throw new Error("Bad Request "+t.message.toString());e(t)})).catch((t=>{s(t.message)}))})),setSession:()=>new Promise(((t,e)=>{console.log("Inside addharQRVerify");const s=mt+"/api/v1/aadhaar/session";fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Credentials:"include"},body:void 0}).then((t=>(console.log(t.headers.get("set-cookie")),t.json()))).then((e=>{if(console.log(e),400==e.statusCode)throw new Error("Bad Request "+e.message.toString());t(e)})).catch((t=>{e(t.message)}))})),verifyPhoneNumber:({state:t})=>new Promise(((e,s)=>{console.log("Inside addharQRVerify");const a=mt+"/api/v1/aadhaar/ph/verify";fetch(a,{method:"POST",body:JSON.stringify({phoneNumber:t.phoneNumber})}).then((t=>t.json())).then((t=>{if(400==t.statusCode)throw new Error("Bad Request "+t.message.toString());e(t)})).catch((t=>{s(t.message)}))})),getFinalResult:()=>new Promise(((t,e)=>{console.log("Inside addharQRVerify");const s=mt+"/api/v1/aadhaar/result";fetch(s,{method:"GET"}).then((t=>t.json())).then((e=>{if(400==e.statusCode)throw new Error("Bad Request "+e.message.toString());t(e)})).catch((t=>{e(t.message)}))}))}}),Pt=s(5244),St=s.n(Pt),wt=function(){var t=this,e=t._self._c;return"error"===t.type?e("div",{staticStyle:{"background-color":"rgba(253, 170, 170, 0.972)",bottom:"0",width:"100%",height:"20px","border-radius":"2px","z-index":"99999","text-align":"left","padding-left":"5px","padding-right":"5px","font-size":"small",color:"darkslategrey"}},[t._v(" "+t._s(t.shortenMesssage)+" ")]):e("div",{staticStyle:{"background-color":"rgb(184, 230, 184)",bottom:"0",width:"100%",height:"20px","border-radius":"2px","z-index":"99999","text-align":"left","padding-left":"5px","padding-right":"5px","font-size":"small",color:"darkslategrey"}},[t._v(" "+t._s(t.msg)+" ")])},_t=[],xt={props:{msg:String,type:{String:String,default:"success"}},computed:{shortenMesssage(){return this.msg.length>40?this.msg.subStr(0,40):this.msg}},created(){console.log("Toast created")},mounted(){console.log(this.type)},data(){return{}}},kt=xt,Tt=(0,u.Z)(kt,wt,_t,!1,null,"681e9358",null),Ot=Tt.exports;a.ZP.config.productionTip=!1,a.ZP.component("load-ing",St()),a.ZP.component("MessageBox",Ot),new a.ZP({store:Ct,render:t=>t(bt)}).$mount("#app")},3544:function(t,e,s){t.exports=s.p+"img/page0.879d8e2e.png"},1658:function(t,e,s){t.exports=s.p+"img/selfi.37a79a81.png"}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,n){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],n=t[d][2];for(var r=!0,c=0;c<a.length;c++)(!1&n||o>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(r=!1,n<o&&(o=n));if(r){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[a,i,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,o=a[0],r=a[1],c=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(c)var d=c(s)}for(e&&e(a);l<o.length;l++)n=o[l],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(d)},a=self["webpackChunkkavach_plugin"]=self["webpackChunkkavach_plugin"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(6827)}));a=s.O(a)})();
//# sourceMappingURL=app.2770ca61.js.map