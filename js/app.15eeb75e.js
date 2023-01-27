(function(){"use strict";var e={2687:function(e,t,o){var r=o(9242),n=o(3396);const i={class:"overflow-auto overscroll-auto min-h-screen bg-gradient-to-tr from-[#a8a59f] to-[#ffaaa5] scroll-smooth"},a=(0,n._)("div",{class:"border-b-2 mx-16 mb-2"},null,-1);function s(e,t,o,r,s,l){const c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("h1",{class:"pt-5 mb-2 pl-2 text-3xl font-extrabold text-white text-center drop-shadow-lg",onClick:t[0]||(t[0]=e=>l.showHome())},"Sooo, what did I cook? "),a,(0,n.Wm)(c)])}o(7658);var l={methods:{showHome(){this.$router.push({path:"/"})}}},c=o(89);const d=(0,c.Z)(l,[["render",s]]);var u=d,g=o(2483),p=o(7139);const m={key:0,class:"text-center h-screen pt-20"},h=(0,n._)("div",{role:"status"},[(0,n._)("svg",{"aria-hidden":"true",class:"inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,n._)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),(0,n._)("span",{class:"sr-only"},"Loading...")],-1),f=[h],b={key:1},y={class:"grid grid-cols-2 text-center pb-5"},w=["onClick"],x={class:"text-ellipsis overflow-hidden"},v={class:"grid grid-cols-1 mt-5"};function C(e,t,o,i,a,s){return a.loading?((0,n.wg)(),(0,n.iD)("div",m,f)):((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.categories,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,onClick:t=>s.showCategoryDetail(e.id,e.name),class:"py-10 mx-4 mt-5 border border-black rounded-lg shadow-lg uppercase bg-slate-600 bg-opacity-25 hover:bg-slate-400 font-extrabold text-white flex items-center justify-center break-normal"},[(0,n._)("p",x,(0,p.zw)(e.name),1)],8,w)))),128))]),(0,n._)("div",v,[(0,n.wy)((0,n._)("input",{type:"text",id:"small-input","onUpdate:modelValue":t[0]||(t[0]=e=>a.name=e),placeholder:"Názov kategórie",class:"block w-50% p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mx-2"},null,512),[[r.nr,a.name]]),(0,n._)("button",{onClick:t[1]||(t[1]=e=>s.createCategory()),type:"button",class:"text-white mt-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2"},"+ Pridať")])]))}var k=o(1509),_=(o(4557),o(9476),{apiKey:"AIzaSyCB5B6dCC64GRrjkUhAAdxu1OCnqQJS2JQ",authDomain:"what-did-i-cook.firebaseapp.com",projectId:"what-did-i-cook",storageBucket:"what-did-i-cook.appspot.com",messagingSenderId:"68495017119",appId:"1:68495017119:web:491e9fd150c2a667108eaa",measurementId:"G-Q9RNX19DE6"});k.Z.initializeApp(_);const D=k.Z.firestore();var O={data(){return{categories:[],name:"",loading:!0}},created(){this.loadCategories()},methods:{loadCategories(){this.categories=[],D.collection("categories").get().then((e=>{e.forEach((e=>{this.categories.push({id:e.id,name:e.data().name}),console.log(e.id," => ",e.data())})),this.loading=!1})).catch((e=>{console.log("Error getting documents: ",e)}))},createCategory(){""!==this.name&&(this.loading=!0,D.collection("categories").add({name:this.name}).then((()=>{console.log("Document successfully written!"),this.name="",this.loadCategories()})).catch((e=>{console.error("Error writing document: ",e)})))},showCategoryDetail(e,t){this.$router.push({path:"/category/"+e,query:{name:t}})}}};const E=(0,c.Z)(O,[["render",C]]);var M=E;const R={key:0,class:"text-center h-screen pt-20"},j=(0,n._)("div",{role:"status"},[(0,n._)("svg",{"aria-hidden":"true",class:"inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,n._)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),(0,n._)("span",{class:"sr-only"},"Loading...")],-1),Z=[j],S={key:1},U={class:"pt-5 decoration-1 text-center uppercase text-xl font-semibold text-gray-800 drop-shadow-lg"},z={class:"grid grid-cols-1 pb-5 text-center relative"},B={key:0},P={class:"uppercase font-semibold mb-2 text-md mt-2"},$=["href"],I={key:1,class:"text-sm text-gray-600"},L={key:1},N=(0,n._)("p",{class:"font-extrabold mt-5 text-xl text-gray-800 drop-shadow-sm"},[(0,n.Uk)("Momentálne tu nie sú "),(0,n._)("br"),(0,n.Uk)("žiadne recepty :(")],-1),K=[N],T={class:"grid grid-cols-1 mt-5"},V=(0,n._)("option",{value:"Book"},"Kniha",-1),A=(0,n._)("option",{value:"URL"},"Stránka",-1),H=(0,n._)("option",{value:"Own"},"Vlastný recept",-1),q=[V,A,H];function F(e,t,o,i,a,s){return a.loading?((0,n.wg)(),(0,n.iD)("div",R,Z)):((0,n.wg)(),(0,n.iD)("div",S,[(0,n._)("h1",U,(0,p.zw)(a.categoryName),1),(0,n._)("div",z,[0!=a.recipes.length?((0,n.wg)(),(0,n.iD)("div",B,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.recipes,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,class:"mt-5 bg-white rounded-xl shadow-xl mx-3 bg-opacity-50 border border-solid border-slate-400 pb-2"},[(0,n._)("p",P,(0,p.zw)(e.name),1),"URL"===e.source?((0,n.wg)(),(0,n.iD)("a",{key:0,href:e.sourceDetail,target:"_blank",class:"text-sm text-gray-600"},"Link",8,$)):((0,n.wg)(),(0,n.iD)("p",I,(0,p.zw)(e.sourceDetail),1))])))),128))])):((0,n.wg)(),(0,n.iD)("div",L,K))]),(0,n._)("div",T,[(0,n.wy)((0,n._)("input",{type:"text",id:"small-input","onUpdate:modelValue":t[0]||(t[0]=e=>a.name=e),placeholder:"Názov receptu",class:"block w-50% p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mx-2"},null,512),[[r.nr,a.name]]),(0,n.wy)((0,n._)("select",{id:"countries","onUpdate:modelValue":t[1]||(t[1]=e=>a.source=e),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-2 p-2 mt-2"},q,512),[[r.bM,a.source]]),(0,n.wy)((0,n._)("input",{type:"text",id:"small-input","onUpdate:modelValue":t[2]||(t[2]=e=>a.sourceDetail=e),placeholder:"Kniha, strana, URL, poznámky, ...",class:"block w-50% p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mt-2 mx-2"},null,512),[[r.nr,a.sourceDetail]]),(0,n._)("button",{onClick:t[3]||(t[3]=e=>s.createRecipe()),type:"button",class:"text-white mt-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2"},"+ Pridať")])]))}var Q={data(){return{recipes:[],name:"",source:"Book",sourceDetail:"",loading:!0,categoryName:""}},created(){this.categoryName=this.$route.query.name,this.loadRecipes()},methods:{deleteCategory(){this.recipes.forEach((e=>{D.collection("recipes").doc(e.id).delete().then((()=>{console.log("Document successfully deleted!")})).catch((e=>{console.error("Error removing document: ",e)}))})),D.collection("categories").doc(this.$route.params.id).delete().then((()=>{console.log("Document successfully deleted!"),this.$router.push({path:"/"})})).catch((e=>{console.error("Error removing document: ",e)}))},deleteRecipe(e){this.loading=!0,D.collection("recipes").doc(e).delete().then((()=>{console.log("Document successfully deleted!"),this.loadRecipes()})).catch((e=>{console.error("Error removing document: ",e)}))},loadRecipes(){this.recipes=[],D.collection("recipes").where("category","==",this.$route.params.id).get().then((e=>{e.forEach((e=>{this.recipes.push({id:e.id,name:e.data().name,source:e.data().source,sourceDetail:e.data().sourceDetail}),console.log(e.id," => ",e.data())})),this.loading=!1})).catch((e=>{console.log("Error getting documents: ",e)}))},createRecipe(){""!==this.name&&(this.loading=!0,D.collection("recipes").add({name:this.name,category:this.$route.params.id,source:this.source,sourceDetail:this.sourceDetail}).then((()=>{console.log("Document successfully written!"),this.name="",this.sourceDetail="",this.loadRecipes()})).catch((e=>{console.error("Error writing document: ",e)})))}}};const G=(0,c.Z)(Q,[["render",F]]);var J=G;const Y=[{path:"/",name:"home",component:M},{path:"/category/:id",name:"categoryDetail",component:J}],W=(0,g.p7)({history:(0,g.PO)("/what-did-i-cook/"),routes:Y});var X=W,ee=o(65),te=(0,ee.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),oe=o(55),re=o.n(oe);(0,r.ri)(u).use(te).use(re()).use(X).mount("#app")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,i){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],i=e[d][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,n,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,a=r[0],s=r[1],l=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var d=l(o)}for(t&&t(r);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},r=self["webpackChunkwhat_did_i_cook"]=self["webpackChunkwhat_did_i_cook"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(2687)}));r=o.O(r)})();
//# sourceMappingURL=app.15eeb75e.js.map