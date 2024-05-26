"use strict";(self["webpackChunkbook_manage_system"]=self["webpackChunkbook_manage_system"]||[]).push([[98],{6098:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search_container"},[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v("首页")]),t("el-breadcrumb-item",[e._v("借阅信息查询")])],1),t("el-card",{attrs:{shadow:"always"}},[t("el-row",[t("el-col",{attrs:{span:6}},[e._v("条件搜索:"),t("el-select",{staticStyle:{"margin-left":"15px"},attrs:{filterable:"",placeholder:"请选择"},model:{value:e.queryInfo.condition,callback:function(t){e.$set(e.queryInfo,"condition",t)},expression:"queryInfo.condition"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-col",{attrs:{span:4}},[t("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getBorrowStatement.apply(null,arguments)}},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getBorrowStatement},slot:"append"})],1)],1),t("el-col",{staticStyle:{float:"right"},attrs:{span:2}},[t("download-excel",{staticClass:"export-excel-wrapper",attrs:{data:e.tableData,fields:e.json_fields,header:e.title,name:"借阅信息查询.xls"}},[t("el-button",{staticClass:"el-icon-printer",attrs:{type:"primary",size:"mini"}},[e._v("导出Excel")])],1)],1),t("el-col",{staticStyle:{float:"right"},attrs:{span:2}},[t("el-button",{staticClass:"el-icon-printer",attrs:{type:"primary",size:"mini"},on:{click:e.downLoad}},[e._v("导出PDF")])],1),t("el-col",{staticStyle:{float:"right"},attrs:{span:2}},[t("el-button",{staticClass:"el-icon-full-screen",attrs:{type:"success",size:"mini"},on:{click:e.fullScreen}},[e._v("全屏")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"",id:"pdfDom","default-sort":{prop:"violationId",order:"ascending"},"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[t("el-table-column",{attrs:{prop:"violationId",label:"ID",sortable:""}}),t("el-table-column",{attrs:{prop:"cardNumber",label:"借阅证号",sortable:""}}),t("el-table-column",{attrs:{prop:"bookNumber",label:"书籍ID",sortable:""}}),t("el-table-column",{attrs:{prop:"borrowDate",label:"借阅时间",sortable:""}}),t("el-table-column",{attrs:{prop:"closeDate",label:"截止时间",sortable:""}}),t("el-table-column",{attrs:{prop:"returnDate",label:"归还时间",sortable:""}}),t("el-table-column",{attrs:{prop:"violationMessage",label:"违章信息"}}),t("el-table-column",{attrs:{prop:"violationAdmin",label:"处理人"}})],1),t("el-pagination",{attrs:{"current-page":e.queryInfo.pageNum,"page-sizes":[1,2,3,4,5],"page-size":e.queryInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:this.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},o=[],r={data(){return{options:[{value:"card_number",label:"借阅证号"},{value:"book_number",label:"书籍ID"},{value:"borrow_date",label:"借阅时间"},{value:"close_date",label:"截止时间"},{value:"return_date",label:"归还时间"},{value:"violation_message",label:"违章信息"}],tableData:[],queryInfo:{pageNum:1,pageSize:5,condition:"",query:""},total:0,title:"借阅信息查询",json_fields:{ID:"violationId","借阅证编号":"cardNumber","书籍编号":"bookNumber","借阅日期":"borrowDate","截止日期":"closeDate","归还日期":"returnDate","违章信息":"violationMessage","处理人":"violationAdmin"},loading:!0}},methods:{handleSizeChange(e){this.queryInfo.pageSize=e,this.getBorrowStatement()},handleCurrentChange(e){this.queryInfo.pageNum=e,this.getBorrowStatement()},async getBorrowStatement(){this.loading=!0;const{data:e}=await this.$http.post("bookadmin/get_borrow_statement",this.queryInfo);if(this.tableData=[],200!==e.status)return this.total=0,this.loading=!1,this.$message.error(e.msg);this.$message.success({message:e.msg,duration:1e3}),this.tableData=e.data.records,this.total=parseInt(e.data.total),this.loading=!1},downLoad(){this.getPdf(this.title)},fullScreen(){let e=document.fullscreenElement;e?document.exitFullscreen():document.documentElement.requestFullscreen()}},created(){this.getBorrowStatement()}},n=r,s=a(1001),i=(0,s.Z)(n,l,o,!1,null,null,null),u=i.exports}}]);
//# sourceMappingURL=98.29b59601.js.map