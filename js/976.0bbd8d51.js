"use strict";(self["webpackChunkbook_manage_system"]=self["webpackChunkbook_manage_system"]||[]).push([[976],{4976:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"notice_container"},[e("div",{staticClass:"header"},[e("div",{ref:"scrollText",staticClass:"scroll-text"},[e("i",{staticClass:"el-icon-s-opportunity"}),t._v(" "+t._s(t.text)+" "),e("i",{staticClass:"el-icon-s-opportunity"})])]),e("div",{staticClass:"banner"},[t._m(0),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"banner_main",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},t._l(t.noticeList,(function(i){return e("div",{key:i.noticeId,staticClass:"banner_main_item"},[e("div",{staticClass:"banner_main_item_header"},[e("p",[t._v(" "+t._s(i.noticeTitle)+" "+t._s(i.createTime))])]),e("div",{staticClass:"banner_main_item_main"},[e("p",[t._v(t._s(i.noticeContent))])])])})),0)])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner_header"},[e("p",[t._v("近期公告")])])}],a={data(){return{text:"图书馆公告栏,记得查收公告呀!小项目请勿恶意攻击,谢谢",noticeList:[{noticeId:0,noticeAdminId:Number,noticeTitle:"",noticeContent:"",createTime:"",updateTime:""}],loading:!0}},methods:{async getRuleList(){this.loading=!0;const{data:t}=await this.$http.get("user/get_noticelist");if(200!==t.status)return this.loading=!1,this.$message.error(t.msg);this.$message.success({message:t.msg,duration:1e3}),this.noticeList=t.data,this.loading=!1}},mounted(){const t=this.$refs.scrollText.offsetWidth,e=this.$refs.scrollText.scrollWidth;e>t&&(this.$refs.scrollText.style.animation="scroll 10s linear infinite")},created(){this.getRuleList()}},l=a,o=i(1001),r=(0,o.Z)(l,s,n,!1,null,"13678b8c",null),c=r.exports}}]);
//# sourceMappingURL=976.0bbd8d51.js.map