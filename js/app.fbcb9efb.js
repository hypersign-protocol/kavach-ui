(function(){"use strict";var t={7650:function(t,e,a){var s=a(7195),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("MainPage")],1)},n=[],o=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"padding-top":"10px"}},[[e(t.getActiveStep.stepName,{tag:"component"})]],2)},r=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[e("load-ing",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}}),e("NavBar"),e("div",{staticClass:"card-body"},[e("PageHeading",{attrs:{header:"Verify Your Identity Using Aadhaar",subHeader:"Follow these simple instructions to verify"}}),e("div",{},[e("img",{staticClass:"opacity-80",staticStyle:{padding:"20px"},attrs:{src:a(3544),width:"100%"}}),e("div",{staticClass:"d-grid gap-1"},[e("button",{staticClass:"btn btn-outline-dark",on:{click:function(e){return t.nextStep()}}},[t._v(" Let's go! ")])]),e("ConsentBox")],1)],1),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)],1)},l=[],d=function(){var t=this;t._self._c;return t._m(0)},h=[function(){var t=this,e=t._self._c;return e("div",[e("a",{attrs:{href:"https://hypersign.id",target:"_blank"}},[t._v("Powered By "),e("img",{attrs:{src:a(778),width:"70px",height:"20px"}})])])}],u=a(1001),p={},g=(0,u.Z)(p,d,h,!1,null,"13805698",null),m=g.exports,v=a(408),f={name:"AppInstructions",components:{PoweredBy:m},data(){return{isLoading:!1,fullPage:!0}},methods:{...(0,v.OI)(["nextStep"])}},b=f,y=(0,u.Z)(b,c,l,!1,null,null,null),C=y.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[e("load-ing",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}}),e("NavBar"),e("div",{staticClass:"card-body"},[e("PageHeading",{attrs:{header:"Aadhar Verification",subHeader:t.subheading}}),t.isAadhaarQRVerifiedAndDataExtracted?e("div",{staticClass:"table-responsive-sm",attrs:{id:"aadharDataDisplay"}},[e("img",{staticStyle:{opacity:"15%"},attrs:{src:a(476),height:"40"}}),e("table",{staticClass:"table",staticStyle:{"text-align":"left","font-size":"x-small","padding-top":"10px"}},[e("tbody",[e("tr",[e("th",{attrs:{scope:"row"}},[t._v("Name")]),e("th",{attrs:{colspan:"2"}},[t._v(t._s(t.aadharData.name))]),e("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[e("img",{attrs:{src:t.aadharData.jpegImage,height:"45"}})])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("DOB")]),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.aadharData.dob))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("Gender")]),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.aadharData.gender))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("Address")]),e("td",{attrs:{colspan:"3"}},[t._v(" "+t._s(t.aadharData.house)+" "+t._s(t.aadharData.location)+" "+t._s(t.aadharData.state)+" - "+t._s(t.aadharData.pincode)+" ")])])])]),e("div",{staticStyle:{padding:"20px"}},[e("button",{staticClass:"btn btn-outline-dark",on:{click:function(e){return t.proceedNext()}}},[t._v(" Confirm ")]),e("button",{staticClass:"btn btn-link btn-dark",on:{click:function(e){return t.reset()}}},[t._v("Cancel")])])]):e("div",[e("label",{staticClass:"switch"},[e("input",{ref:"torch",attrs:{type:"checkbox",id:"torch"}}),e("span",{staticClass:"slider round"})]),e("div",{staticClass:"scanQR"},[e("div",{attrs:{id:"qr-camera"}},[t.isScan?e("video",{attrs:{id:"camera-preview",refs:"scanner",autoplay:"",playsinline:""}},[t.loading?e("span",[t._v(" waiting for camera")]):t._e()]):e("i",{staticClass:"bi bi-qr-code-scan",staticStyle:{"font-size":"200px",color:"rgb(59, 58, 58)"}}),t.isScan?e("div",{attrs:{id:"qr-overlay"}},[e("div",{attrs:{id:"qr-scan-box"}}),e("div",{attrs:{id:"qr-scan-line"}})]):t._e()])]),e("div",{staticStyle:{padding:"10px"}},[e("select",{attrs:{id:"cameraOptions"},on:{change:t.selectionChange}},[e("option",{attrs:{value:"null",selected:""}},[t._v("Select Camera")])]),e("br"),t.isScan?e("button",{staticClass:"btn btn-link btn-dark",on:{click:t.cancelScanner}},[t._v(" Cancel ")]):e("button",{staticClass:"btn btn-outline-dark",on:{click:t.openScanner}},[e("i",{staticClass:"bi bi-camera"}),t._v(" Scan ")])])])],1),t.isToast?e("MessageBox",{attrs:{msg:t.toastMessage,type:t.toastType}}):t._e(),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)],1)},S=[],_=a(977),P=a.n(_),x={name:"AppScanQR",data(){return{video:{width:{min:1280,ideal:1920,max:3840},height:{min:720,ideal:1080,max:2160}},cameras:[],qrData:"",error:"",loading:!1,isScan:!1,isLoading:!1,fullPage:!0,toastMessage:"",toastType:"success",isToast:!1,isQRVerfied:!1,interval:null,stream:null,torch:!1}},components:{},async mounted(){try{const t=await navigator.permissions.query({name:"camera"});if("denied"==t.state)return void this.toast("Please allow camera permission","error");navigator.mediaDevices.enumerateDevices().then((t=>{this.cameras=t.filter((t=>"videoinput"===t.kind));const e=document.getElementById("cameraOptions");this.cameras.length>1&&this.cameras.forEach((t=>{const a=document.createElement("option");a.value=t.deviceId,a.text=""===t.label?`Camera ${t.deviceId}`:t.label,a.selected=t.deviceId===this.cameras[0].deviceId,e.appendChild(a)}))}))}catch(t){this.toast(navigator.userAgent,"success")}},computed:{...(0,v.rn)(["aadharData"]),isAadhaarQRVerifiedAndDataExtracted(){return this.isQRVerfied&&this.aadharData&&Object.keys(this.aadharData).length>0},subheading(){return this.isAadhaarQRVerifiedAndDataExtracted?"Confirm Your Details":"Scan QR code on your Aadhaar Card"}},methods:{...(0,v.OI)(["nextStep","setQrString","setAadhaarData"]),...(0,v.nv)(["addharQRVerify"]),wait(t=3e3){return new Promise((e=>setTimeout((()=>{e()}),t)))},selectionChange(t){this.cancelScanner();const e=t.target.value;this.video={width:{min:1280,ideal:1920,max:3840},height:{min:720,ideal:1080,max:2160},deviceId:e?{exact:e}:void 0},this.openScanner()},processQrMoz(t){const e=P()(t.data,t.width,t.height,{inversionAttempts:"attemptBoth"});e&&(this.qrData=e.data,this.cancelScanner(),this.onDetect({content:e.data}))},processQr(t,e,a,s){t.grabFrame().then((t=>{const i=document.createElement("canvas");i.width=t.width,i.height=t.height;const n=i.getContext("2d");n.drawImage(t,e,a,s,s,e,a,s,s);const o=n.getImageData(0,0,t.width,t.height),r=P()(o.data,o.width,o.height,{inversionAttempts:"attemptBoth"});r&&(this.qrData=r.data,this.cancelScanner(),this.onDetect({content:r.data}))})).catch((t=>{}))},async onDetect(t){try{const{content:e}=await t;if(!e)throw new Error("Could not scan the QR");{this.setQrString(e),this.toast("Verifying the QR code..."),this.isLoading=!0;const t=await this.addharQRVerify();if(await this.wait(1e3),!t||!0!==t.verified)throw new Error("Invalid QR Code");console.log("QR verified successfully"),this.isQRVerfied=!0,t.aadharData&&(console.log("Setting aadhaar data in localstorage..."),this.setAadhaarData(t.aadharData)),this.isLoading=!1}}catch(e){console.error(e),this.isLoading=!1,this.toast(e.message,"error")}finally{this.cancelScanner()}},proceedNext(){this.nextStep()},onReady(t){console.log("Camera is ready"),console.log(t)},onError(t){"NotAllowedError"===t.name&&(this.error="User denied camera access permission"),"NotFoundError"===t.name&&(this.error="No suitable camera found"),"NotSupportedError"===t.name&&(this.error="Page is not supported to served over HTTPs (or localhost)"),"NotReadableError"===t.name&&(this.error="May be camera already in use"),"OverconstrainedError"===t.name&&(this.error="REquested camera not present"),"StreamApiNotSupportedError"===t.name&&(this.error="Brower seems to be lacking camera feature"),this.toast(this.error,"error")},async openScanner(){this.isScan=!0,navigator.mediaDevices.getUserMedia({video:this.video}).then((t=>{this.stream=t;const e=this.stream.getVideoTracks()[0];if(void 0!==e.getCapabilities){const t=e.getCapabilities();t.focusMode?.includes("continuous")&&e.applyConstraints({advanced:[{focusMode:"continuous"}]}).catch((t=>{console.error(t)})),t.exposureMode?.includes("continuous")&&e.applyConstraints({advanced:[{exposureMode:"continuous"}]}).catch((t=>{console.error(t)})),t.whiteBalanceMode?.includes("continuous")&&e.applyConstraints({advanced:[{whiteBalanceMode:"continuous"}]}).catch((t=>{console.error(t)})),t.torch?(document.getElementsByClassName("switch")[0].style.display="inline-block",this.$refs.torch.addEventListener("change",(t=>{e.applyConstraints({advanced:[{torch:t.target.checked}]}).catch((t=>{console.error(t)}))}))):(this.toast("Torch is not supported","error"),document.getElementsByClassName("switch")[0].style.display="none")}if("ImageCapture"in window){console.log("ImageCapture is supported");const t=new ImageCapture(e),a=e.getSettings().width,s=e.getSettings().height,i=Math.min(a,s),n=(a-i)/2,o=(s-i)/2;this.interval=setInterval((()=>{this.processQr(t,n,o,i)}),0)}else{const t=document.createElement("canvas"),s=t.getContext("2d"),i=e.getSettings().width,n=e.getSettings().height;t.width=i,t.height=n;const o=Math.min(i,n),r=(i-o)/2,c=(n-o)/2;this.interval=setInterval((()=>{s.drawImage(a,0,0,i,n);const t=s.getImageData(r,c,o,o,r,c,o,o);this.processQrMoz(t)}),0)}const a=document.getElementById("camera-preview");void 0!==a.srcObject?a.srcObject=t:void 0!==a.mozSrcObject&&(a.mozSrcObject=t),a.play()})).catch((t=>{this.toast(t.name,"error"),this.cancelScanner()}))},cancelScanner(){this.isScan=!1,clearInterval(this.interval),this.stream&&this.stream.getTracks().forEach((t=>{t.stop()}))},reset(){this.isScan=!1,this.isToast=!1,this.toastMessage="",this.isQRVerfied=!1},toast(t,e="success"){this.isToast=!0,this.toastMessage=t,this.toastType=e,setTimeout((()=>{this.isToast=!1,this.toastMessage=""}),2e3)}}},k=x,T=(0,u.Z)(k,w,S,!1,null,"3648f4cd",null),O=T.exports,A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[e("load-ing",{attrs:{active:t.isLoadingPage,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoadingPage=e}}}),e("NavBar"),e("div",{staticClass:"card-body"},[e("PageHeading",{attrs:{header:"Liveliness Check",subHeader:"Open camera and click your picture"}}),e("div",{staticClass:"scanQR web-camera-container"},[t.isCameraOpen?t._e():e("img",{attrs:{src:a(1658),width:"200",height:"200"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isCameraOpen&&t.isLoading,expression:"isCameraOpen && isLoading"}],staticClass:"camera-loading"},[t._v(" Waiting for camera... ")]),t.isCameraOpen?e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"camera-box",class:{flash:t.isShotPhoto}},[e("div",{staticClass:"camera-shutter",class:{flash:t.isShotPhoto}}),e("video",{directives:[{name:"show",rawName:"v-show",value:!t.isPhotoTaken,expression:"!isPhotoTaken"}],ref:"camera",attrs:{width:250,height:250,autoplay:""}}),e("canvas",{directives:[{name:"show",rawName:"v-show",value:t.isPhotoTaken,expression:"isPhotoTaken"}],ref:"canvas",attrs:{id:"photoTaken",width:250,height:250}})]):t._e()]),e("div",[t.isCameraOpen&&!t.isLoading?e("div",{},[e("button",{staticClass:"btn btn-dark",staticStyle:{"border-radius":"50%"},attrs:{type:"button"},on:{click:t.takePhoto}},[e("i",{staticClass:"bi bi-camera",staticStyle:{color:"white","font-size":"26px"}})])]):t._e(),e("div",{staticStyle:{padding:"10px"}},[t.isPhotoTaken&&t.isCameraOpen?e("button",{staticClass:"btn btn-outline-dark",on:{click:function(e){return t.submit()}}},[t._v(" Next ")]):t._e(),e("button",{staticClass:"btn",class:{"btn-outline-dark":!t.isCameraOpen,"btn-link btn-dark":t.isCameraOpen},attrs:{type:"button"},on:{click:t.toggleCamera}},[t.isCameraOpen?e("span",[t._v("Cancel")]):e("span",[e("i",{staticClass:"bi bi-camera"}),t._v(" Open Camera")])])])])],1),t.isToast?e("MessageBox",{attrs:{msg:t.toastMessage,type:t.toastType}}):t._e(),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)],1)},N=[],I={name:"AppClickPic",components:{PoweredBy:m},data(){return{isCameraOpen:!1,isPhotoTaken:!1,isShotPhoto:!1,isLoading:!1,link:"#",fullPage:!0,isLoadingPage:!1,toastMessage:"",toastType:"success",isToast:!1,width:0,height:0}},methods:{...(0,v.nv)(["addharQRVerify","verifyImage"]),...(0,v.OI)(["nextStep","setImage"]),toggleCamera(){this.isCameraOpen?(this.isCameraOpen=!1,this.isPhotoTaken=!1,this.isShotPhoto=!1,this.stopCameraStream()):(this.isCameraOpen=!0,this.createCameraElement())},createCameraElement(){this.isLoading=!0;const t=window.constraints={audio:!1,video:{facingMode:"user",width:{min:640,ideal:1280,max:1920},height:{min:480,ideal:720,max:1080}}};navigator.mediaDevices.getUserMedia(t).then((t=>{this.isLoading=!1,this.$refs.camera.srcObject=t;const e=t.getVideoTracks()[0];this.width=e.getSettings().width,this.height=e.getSettings().height})).catch((t=>{console.error(t),this.isLoading=!1,this.toast(t.message,"error")}))},stopCameraStream(){let t=this.$refs.camera.srcObject.getTracks();t.forEach((t=>{t.stop()}))},takePhoto(){if(!this.isPhotoTaken){this.isShotPhoto=!0;const t=50;setTimeout((()=>{this.isShotPhoto=!1}),t)}this.isPhotoTaken=!this.isPhotoTaken;const t=this.$refs.canvas,e=this.$refs.canvas.getContext("2d"),a=this.$refs.camera;if(this.isPhotoTaken){const s=Math.min(this.width,this.height),i=(this.width-s)/2,n=(this.height-s)/2;e.drawImage(a,i,n,s,s,5,7,t.width-10,t.height);const o=this.$refs.canvas.toDataURL();this.setImage(o)}},downloadImage(){const t=document.createElement("a");t.download="photo.png",t.href=this.$refs.canvas.toDataURL(),t.click()},wait(){return new Promise((t=>setTimeout((()=>{t()}),3e3)))},async submit(){const t=this;try{this.isLoadingPage=!0;const e=await this.verifyImage();e&&(this.stopCameraStream(),this.isLoadingPage=!1,e.verified?(t.toast("Match Found : "+e.verified+"  "+e.userImageScore+" %"),await t.wait(),this.isLoadingPage=!1,this.nextStep()):(t.toast("Match Not Found : "+e.verified+"  "+e.userImageScore+" %","error"),await t.wait(),this.isLoadingPage=!1,this.toggleCamera()))}catch(e){this.isLoadingPage=!1,this.stopCameraStream(),this.toast(e,"error"),this.toggleCamera()}},toast(t,e="success"){this.isToast=!0,this.toastMessage=t,this.toastType=e,setTimeout((()=>{this.isToast=!1,this.toastMessage=""}),2e3)}}},R=I,D=(0,u.Z)(R,A,N,!1,null,"584a560b",null),B=D.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[e("NavBar"),e("div",{staticClass:"card-body"},[t._m(0),e("h5",{},[t._v("Verified Successfully!")]),e("VerificationDetails")],1),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)],1)},M=[function(){var t=this,e=t._self._c;return e("p",[e("i",{staticClass:"bi bi-check-circle final-msg-icon success"})])}],E=function(){var t=this,e=t._self._c;return t.finalResult&&Object.keys(t.finalResult).length>0?e("div",[e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("ul",{staticClass:"list-group list-group-horizontal position-relative overflow-auto"},[e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"big"},[t._v(t._s(t.finalResult.threshold))]),e("div",{staticClass:"small"},[t._v("Threshold")])]),e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"big"},[t._v(t._s(t.finalResult.score))]),e("div",{staticClass:"small"},[t._v("Score")])]),e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"big"},[1==t.finalResult.verified?e("i",{staticClass:"bi bi-check-lg",staticStyle:{color:"green"}}):e("i",{staticClass:"bi bi-x-circle",staticStyle:{color:"red"}})]),e("div",{staticClass:"small"},[t._v("Verified?")])])])])]),e("ul",{staticClass:"list-group"},t._l(t.finalResult.details,(function(a){return e("li",{key:a.type,staticClass:"list-group-item p-2",staticStyle:{"text-align":"left"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[1==a.status?e("i",{staticClass:"bi bi-check-circle",staticStyle:{color:"green"}}):e("i",{staticClass:"bi bi-x-circle",staticStyle:{color:"red"}})]),e("div",{staticClass:"col-8"},[e("span",{staticStyle:{"font-size":"small",color:""}},[t._v(t._s(a.type))])]),e("div",{staticClass:"col",staticStyle:{"text-align":"right"}},[e("span",{staticClass:"badge"},[t._v(t._s(a.score))])])])])})),0)])]):e("div",[e("span",[t._v("No stats found to displayed")])])},Q=[],z={computed:{...(0,v.rn)(["finalResult"])},data(){return{}}},V=z,j=(0,u.Z)(V,E,Q,!1,null,null,null),Z=j.exports,q={name:"AppFinalSuccess",components:{PoweredBy:m,VerificationDetails:Z}},F=q,H=(0,u.Z)(F,L,M,!1,null,"59f36d64",null),$=H.exports,J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[e("NavBar"),e("div",{staticClass:"card-body"},[t._m(0),e("h5",{},[t._v("Verification Failed!")]),e("VerificationDetails")],1),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)],1)},U=[function(){var t=this,e=t._self._c;return e("p",[e("i",{staticClass:"bi bi-x-circle final-msg-icon fail"})])}],W={name:"AppFinalSuccess",components:{PoweredBy:m,VerificationDetails:Z}},G=W,Y=(0,u.Z)(G,J,U,!1,null,"67565150",null),K=Y.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card maincontainer"},[e("load-ing",{attrs:{active:t.isLoadingPage,"can-cancel":!0,"is-full-page":!0},on:{"update:active":function(e){t.isLoadingPage=e}}}),e("NavBar"),e("div",{staticClass:"card-body"},[e("PageHeading",{attrs:{header:"Verify Phone Number",subHeader:"Provide your Aadhaar linked phone number and verify your OTP"}}),e("div",{staticClass:"col p-2"},[e("label",{staticClass:"form-label",staticStyle:{float:"left"},attrs:{for:"validationCustom01"}},[t._v("Phone Number")]),e("div",{staticClass:"input-group mb-3"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("+91")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"form-control",attrs:{type:"number",id:"validationCustom01",value:"Mark",required:"",disabled:t.isPhoneCheckDone},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),t.isPhoneCheckDone?t._e():e("button",{staticClass:"btn btn-outline-dark",on:{click:function(e){return t.check()}}},[t._v(" Next ")])]),t.isPhoneCheckDone?e("div",{staticClass:"p-2 mb-3"},[e("label",{staticClass:"form-label",staticStyle:{float:"left"},attrs:{for:"validationCustom01"}},[t._v("4 digits OTP ")]),e("div",{staticClass:"input-group"},[e("OtpInput",{ref:"otpInput",staticStyle:{"font-size":"30px"},attrs:{"input-classes":"otp-input",separator:"-","num-inputs":4,"should-auto-focus":!0,"is-input-num":!0},on:{"on-change":t.handleOnChange,"on-complete":t.handleOnComplete}}),e("small",{staticStyle:{color:"grey","text-align":"left"}},[t._v("Note: This feature is coming soon. Enter any 4 digits to test...")])],1),e("button",{staticClass:"btn btn-link btn-dark",on:{click:function(e){return t.handleClearInput()}}},[t._v(" Clear ")])]):t._e()],1),t.isToast?e("MessageBox",{attrs:{msg:t.toastMessage,type:t.toastType}}):t._e(),e("div",{staticClass:"card-footer"},[e("PoweredBy")],1)],1)},tt=[],et=a(1502),at=a.n(et),st={name:"AppOtp",data(){return{isPhoneCheckDone:!1,isLoadingPage:!1,phoneNumber:"",toastMessage:"",toastType:"success",isToast:!1}},components:{OtpInput:at(),PoweredBy:m},computed:{},methods:{...(0,v.nv)(["addharQRVerify","verifyPhoneNumber","getFinalResult"]),...(0,v.OI)(["setPhoneNumber","nextStep","setFinalResult"]),wait(t=3e3){return new Promise((e=>setTimeout((()=>{e()}),t)))},async check(){try{if(10!=this.phoneNumber.length)throw new Error("Phone number should of 10 digits");this.setPhoneNumber(this.phoneNumber),this.isLoadingPage=!0;const t=await this.verifyPhoneNumber();await this.wait(1e3),t&&!0===t.verified?this.isPhoneCheckDone=!0:!1===t.verified&&this.toast("Invalid phone number","error"),this.isLoadingPage=!1}catch(t){this.isLoadingPage=!1,console.log(t),this.toast(t,"error"),console.log(t)}},async handleOnComplete(t){try{console.log("OTP completed: ",t),this.isLoadingPage=!0;const e=await this.getFinalResult();await this.wait(2e3),e&&(this.setFinalResult(e),this.isLoadingPage=!1,!0===e.verified?this.nextStep(4):this.nextStep(5))}catch(e){this.toast(e.message,"error"),console.log(e),this.isLoadingPage=!0}},handleOnChange(t){console.log("OTP changed: ",t)},handleClearInput(){this.$refs.otpInput.clearInput(),this.setPhoneNumber(""),this.isPhoneCheckDone=!1,this.phoneNumber=""},toast(t,e="success"){this.isToast=!0,this.toastMessage=t,this.toastType=e,setTimeout((()=>{this.isToast=!1,this.toastMessage=""}),2e3)}}},it=st,nt=(0,u.Z)(it,X,tt,!1,null,null,null),ot=nt.exports,rt={name:"HelloWorld",components:{AppInstructions:C,AppScanQR:O,AppClickPic:B,AppFinalSuccess:$,AppFinalFail:K,AppOtp:ot},computed:{...(0,v.Se)(["getActiveStep"])}},ct=rt,lt=(0,u.Z)(ct,o,r,!1,null,null,null),dt=lt.exports,ht={name:"App",components:{MainPage:dt},methods:{...(0,v.nv)(["setSession","setJWT"])},async created(){await this.setJWT(),await this.setSession()}},ut=ht,pt=(0,u.Z)(ut,i,n,!1,null,null,null),gt=pt.exports;a(7024),a(3060);const mt="https://api.entity.hypersign.id",vt="0a88981d30e66a8b188760b081c14.02178535aa9c0ee9fe6cf4e2e3902559f12357c93d44df1959229122def5be650303272f2dc4d5443cb7275c25e2566e5",ft="https://stage.hypermine.in/kavach";s.ZP.use(v.ZP);var bt=new v.ZP.Store({state:{qrString:"",phoneNumber:"",finalResult:{},aadharData:{},authorization:null,steps:[{id:0,isActive:!0,stepName:"AppInstructions",previous:0},{id:1,isActive:!0,stepName:"AppScanQR",previous:0},{id:2,isActive:!1,stepName:"AppClickPic",previous:1},{id:3,isActive:!1,stepName:"AppOtp",previous:2},{id:4,isActive:!1,stepName:"AppFinalSuccess",previous:3},{id:5,isActive:!1,stepName:"AppFinalFail",previous:3}]},getters:{getActiveStep:t=>t.steps.find((t=>1==t.isActive))},mutations:{nextStep:(t,e=null)=>{const a=t.steps.find((t=>1==t.isActive)),s=e||a.id+1;t.steps[a.id].isActive=!1,t.steps[s].isActive=!0},previousStep:t=>{const e=t.steps.find((t=>1==t.isActive)),a=e.previous;t.steps[e.id].isActive=!1,t.steps[a].isActive=!0},setAuthorization:(t,e)=>{t.authorization=e,localStorage.setItem("authorization",e)},setQrString:(t,e)=>{t.qrString=e},setImage:(t,e)=>{t.imageData=e},setPhoneNumber:(t,e)=>{t.phoneNumber=e},setFinalResult:(t,e)=>{t.finalResult={...e}},setAadhaarData:(t,e)=>{t.aadharData={...e}}},actions:{addharQRVerify:({state:t})=>new Promise(((e,a)=>{console.log("Inside addharQRVerify");const s=ft+"/api/v1/aadhaar/qr/verify";fetch(s,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Authorization:t.authorization},body:JSON.stringify({qrString:t.qrString})}).then((t=>t.json())).then((t=>{if(400==t.statusCode)throw new Error("Bad Request "+t.message.toString());e(t)})).catch((t=>{a(t.message)}))})),setJWT:({commit:t})=>new Promise(((e,a)=>{const s=mt+"/api/v1/app/oauth";fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-Api-Secret-Key":vt},body:void 0}).then((t=>t.json())).then((a=>{if(400==a.statusCode)throw new Error("Bad Request "+a.message.toString());t("setAuthorization","Bearer "+a.access_token),e()})).catch((t=>{a(t.message),localStorage.removeItem("authorization")}))})),setSession:({state:t})=>new Promise(((e,a)=>{console.log("Inside addharQRVerify");const s=ft+"/api/v1/aadhaar/session";fetch(s,{method:"POST",credentials:"include",headers:{"content-type":"application/json",Authorization:t.authorization},body:void 0}).then((t=>t.json())).then((t=>{if(400==t.statusCode)throw new Error("Bad Request "+t.message.toString());e(t)})).catch((t=>{a(t.message)}))})),verifyPhoneNumber:({state:t})=>new Promise(((e,a)=>{console.log("Inside addharQRVerify");const s=ft+"/api/v1/aadhaar/ph/verify";fetch(s,{method:"POST",credentials:"include",body:JSON.stringify({phoneNumber:t.phoneNumber}),headers:{"content-type":"application/json",Authorization:t.authorization}}).then((t=>t.json())).then((t=>{if(400==t.statusCode)throw new Error("Bad Request "+t.message.toString());e(t)})).catch((t=>{a(t.message)}))})),verifyImage:({state:t})=>new Promise(((e,a)=>{console.log("Inside verifyImage");const s=ft+"/api/v1/aadhaar/img/verify";fetch(s,{method:"POST",credentials:"include",body:JSON.stringify({userImage:t.imageData}),headers:{"content-type":"application/json",Authorization:t.authorization}}).then((t=>t.json())).then((t=>{if(400==t.statusCode)throw new Error("Bad Request "+t.message.toString());e(t)})).catch((t=>{a(t.message)}))})),getFinalResult:({state:t})=>new Promise(((e,a)=>{console.log("Inside addharQRVerify");const s=ft+"/api/v1/aadhaar/result";fetch(s,{method:"GET",credentials:"include",headers:{Authorization:t.authorization,"content-type":"application/json"}}).then((t=>t.json())).then((t=>{if(400==t.statusCode)throw new Error("Bad Request "+t.message.toString());e(t)})).catch((t=>{a(t.message)}))}))}}),yt=a(5244),Ct=a.n(yt),wt=function(){var t=this,e=t._self._c;return"error"===t.type?e("div",{staticStyle:{"background-color":"rgba(253, 170, 170, 0.972)",bottom:"0",width:"100%",height:"20px","border-radius":"2px","z-index":"99999","text-align":"left","padding-left":"5px","padding-right":"5px","font-size":"small",color:"darkslategrey"}},[t._v(" "+t._s(t.shortenMesssage)+" ")]):e("div",{staticStyle:{"background-color":"rgb(184, 230, 184)",bottom:"0",width:"100%",height:"20px","border-radius":"2px","z-index":"99999","text-align":"left","padding-left":"5px","padding-right":"5px","font-size":"small",color:"darkslategrey"}},[t._v(" "+t._s(t.msg)+" ")])},St=[],_t={props:{msg:String,type:{String:String,default:"success"}},computed:{shortenMesssage(){return console.log(this.msg),this.msg.length>40?this.msg.substr(0,40):this.msg}},created(){console.log("Toast created")},mounted(){console.log(this.type)},data(){return{}}},Pt=_t,xt=(0,u.Z)(Pt,wt,St,!1,null,"3c173650",null),kt=xt.exports,Tt=function(){var t=this;t._self._c;return t._m(0)},Ot=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar navbar-expand-md navbar-light"},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e("img",{staticClass:"opacity-80",attrs:{src:a(6949),width:"100px"}})])])])}],At={},Nt=(0,u.Z)(At,Tt,Ot,!1,null,null,null),It=Nt.exports,Rt=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v(t._s(t.header))]),e("h6",{staticStyle:{color:"grey"}},[t._v(" "+t._s(t.subHeader)+" ")])])},Dt=[],Bt={props:{header:String,subHeader:String}},Lt=Bt,Mt=(0,u.Z)(Lt,Rt,Dt,!1,null,null,null),Et=Mt.exports,Qt=function(){var t=this;t._self._c;return t._m(0)},zt=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"consent-message"},[e("span",[t._v(" By continuing, you agree to our "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("terms of use")]),t._v(" and "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("privacy policy")])])])}],Vt={},jt=(0,u.Z)(Vt,Qt,zt,!1,null,"50a256ae",null),Zt=jt.exports;s.ZP.config.productionTip=!1,s.ZP.component("load-ing",Ct()),s.ZP.component("MessageBox",kt),s.ZP.component("NavBar",It),s.ZP.component("PageHeading",Et),s.ZP.component("PoweredBy",m),s.ZP.component("ConsentBox",Zt),new s.ZP({store:bt,render:t=>t(gt)}).$mount("#app")},476:function(t,e,a){t.exports=a.p+"img/aadhaar-logo.50705593.png"},778:function(t,e,a){t.exports=a.p+"img/hypersign_black_transparent_rect.9c12af3a.png"},6949:function(t,e,a){t.exports=a.p+"img/logo.5fb2ab20.png"},3544:function(t,e,a){t.exports=a.p+"img/page0.674a8d63.png"},1658:function(t,e,a){t.exports=a.p+"img/selfi.37a79a81.png"}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,n){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],n=t[d][2];for(var r=!0,c=0;c<s.length;c++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[c])}))?s.splice(c--,1):(r=!1,n<o&&(o=n));if(r){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,i,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,o=s[0],r=s[1],c=s[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(c)var d=c(a)}for(e&&e(s);l<o.length;l++)n=o[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},s=self["webpackChunkcavach"]=self["webpackChunkcavach"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(7650)}));s=a.O(s)})();
//# sourceMappingURL=app.fbcb9efb.js.map