"use strict";(self["webpackChunkbook_manage_system"]=self["webpackChunkbook_manage_system"]||[]).push([[24],{24:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comment_container"},[t._m(0),e("div",{staticClass:"barrages-drop"},[e("vue-baberrage",{staticStyle:{width:"1330px",height:"750px"},attrs:{isShow:t.barrageIsShow,barrageList:t.barrageList,maxWordCount:t.maxWordCount,throttleGap:t.throttleGap,loop:t.barrageLoop,boxHeight:t.boxHeight,boxWidth:t.boxWidth,messageHeight:t.messageHeight,lanesCount:t.lanesCount}}),e("div",{staticClass:"addMain"},[e("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addContent.apply(null,arguments)}},model:{value:t.input,callback:function(e){t.input="string"===typeof e?e.trim():e},expression:"input"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-edit"},on:{click:t.addContent},slot:"append"})],1)],1)],1)])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"backgroundImg"},[e("img",{attrs:{src:"https://xxx.xiaobaitiao.icu/img/icu/202312211243628.jpg",alt:""}})])}],n=(s(7658),s(4993)),r={data(){return{barrageIsShow:!0,messageHeight:3,barrageLoop:!1,maxWordCount:2,lanesCount:1,boxWidth:1600,boxHeight:200,throttleGap:3e3,input:"",barrageList:[],barrage:{id:"",avatar:"https://img0.baidu.com/it/u=825023390,3429989944&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",msg:"",time:"",type:n.MESSAGE_TYPE.NORMAL,barrageStyle:""}}},methods:{addContent:_.throttle((async function(){if(""===this.input.trim()||/^\d+$/.test(this.input)||/^[a-zA-Z]+$/.test(this.input))return void this.$message.info({message:"请不要输入无意义的内容",duration:1e3});this.barrage.msg=this.input;const{data:t}=await this.$http.post("user/add_comment",this.barrage);if(200!==t.status)return this.$message.error(t.msg);this.getCommentList(),this.input="",this.$message.success(t.msg)}),5e3,{trailing:!1}),async getCommentList(){const{data:t}=await this.$http.get("user/get_commentlist");if(200!==t.status)return this.$message.error(t.msg);this.$message.success(t.msg),this.barrageList=t.data,this.barrageList.push({})}},mounted(){this.getCommentList()}},o=r,u=s(1001),g=(0,u.Z)(o,a,i,!1,null,"b77183be",null),h=g.exports}}]);
//# sourceMappingURL=24.ab3979b9.js.map