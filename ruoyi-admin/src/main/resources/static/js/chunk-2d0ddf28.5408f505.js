(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddf28"],{"840f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"纳税人识别号",prop:"taxpayerId"}},[a("el-input",{attrs:{placeholder:"请输入纳税人识别号",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.taxpayerId,callback:function(t){e.$set(e.queryParams,"taxpayerId",t)},expression:"queryParams.taxpayerId"}})],1),a("el-form-item",{attrs:{label:"公司名称",prop:"companyName"}},[a("el-input",{attrs:{placeholder:"请输入公司名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.companyName,callback:function(t){e.$set(e.queryParams,"companyName",t)},expression:"queryParams.companyName"}})],1),a("el-form-item",{attrs:{label:"公司地址",prop:"companyAddress"}},[a("el-input",{attrs:{placeholder:"请输入公司地址",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.companyAddress,callback:function(t){e.$set(e.queryParams,"companyAddress",t)},expression:"queryParams.companyAddress"}})],1),a("el-form-item",{attrs:{label:"联系电话",prop:"contactTel"}},[a("el-input",{attrs:{placeholder:"请输入联系电话",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.contactTel,callback:function(t){e.$set(e.queryParams,"contactTel",t)},expression:"queryParams.contactTel"}})],1),a("el-form-item",{attrs:{label:"银行账户",prop:"bankAccount"}},[a("el-input",{attrs:{placeholder:"请输入银行账户",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.bankAccount,callback:function(t){e.$set(e.queryParams,"bankAccount",t)},expression:"queryParams.bankAccount"}})],1),a("el-form-item",{attrs:{label:"开户行",prop:"depositBank"}},[a("el-input",{attrs:{placeholder:"请输入开户行",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.depositBank,callback:function(t){e.$set(e.queryParams,"depositBank",t)},expression:"queryParams.depositBank"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:info:add"],expression:"['erp:info:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:info:edit"],expression:"['erp:info:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:info:remove"],expression:"['erp:info:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:info:export"],expression:"['erp:info:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini",loading:e.exportLoading},on:{click:e.handleExport}},[e._v("导出")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.infoList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"开票信息 ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"纳税人识别号",align:"center",prop:"taxpayerId"}}),a("el-table-column",{attrs:{label:"公司名称",align:"center",prop:"companyName"}}),a("el-table-column",{attrs:{label:"公司地址",align:"center",prop:"companyAddress"}}),a("el-table-column",{attrs:{label:"联系电话",align:"center",prop:"contactTel"}}),a("el-table-column",{attrs:{label:"银行账户",align:"center",prop:"bankAccount"}}),a("el-table-column",{attrs:{label:"开户行",align:"center",prop:"depositBank"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:info:edit"],expression:"['erp:info:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:info:remove"],expression:"['erp:info:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"纳税人识别号",prop:"taxpayerId"}},[a("el-input",{attrs:{placeholder:"请输入纳税人识别号"},model:{value:e.form.taxpayerId,callback:function(t){e.$set(e.form,"taxpayerId",t)},expression:"form.taxpayerId"}})],1),a("el-form-item",{attrs:{label:"公司名称",prop:"companyName"}},[a("el-input",{attrs:{placeholder:"请输入公司名称"},model:{value:e.form.companyName,callback:function(t){e.$set(e.form,"companyName",t)},expression:"form.companyName"}})],1),a("el-form-item",{attrs:{label:"公司地址",prop:"companyAddress"}},[a("el-input",{attrs:{placeholder:"请输入公司地址"},model:{value:e.form.companyAddress,callback:function(t){e.$set(e.form,"companyAddress",t)},expression:"form.companyAddress"}})],1),a("el-form-item",{attrs:{label:"联系电话",prop:"contactTel"}},[a("el-input",{attrs:{placeholder:"请输入联系电话"},model:{value:e.form.contactTel,callback:function(t){e.$set(e.form,"contactTel",t)},expression:"form.contactTel"}})],1),a("el-form-item",{attrs:{label:"银行账户",prop:"bankAccount"}},[a("el-input",{attrs:{placeholder:"请输入银行账户"},model:{value:e.form.bankAccount,callback:function(t){e.$set(e.form,"bankAccount",t)},expression:"form.bankAccount"}})],1),a("el-form-item",{attrs:{label:"开户行",prop:"depositBank"}},[a("el-input",{attrs:{placeholder:"请输入开户行"},model:{value:e.form.depositBank,callback:function(t){e.$set(e.form,"depositBank",t)},expression:"form.depositBank"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},r=[],l=(a("d81d"),a("b0c0"),a("b775"));function o(e){return Object(l["a"])({url:"/erp/info/list",method:"get",params:e})}function i(e){return Object(l["a"])({url:"/erp/info/"+e,method:"get"})}function s(e){return Object(l["a"])({url:"/erp/info",method:"post",data:e})}function c(e){return Object(l["a"])({url:"/erp/info",method:"put",data:e})}function u(e){return Object(l["a"])({url:"/erp/info/"+e,method:"delete"})}function p(e){return Object(l["a"])({url:"/erp/info/export",method:"get",params:e})}var m={name:"Info",data:function(){return{loading:!0,exportLoading:!1,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,infoList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,taxpayerId:null,companyName:null,companyAddress:null,contactTel:null,bankAccount:null,depositBank:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,o(this.queryParams).then((function(t){e.infoList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,taxpayerId:null,companyName:null,companyAddress:null,contactTel:null,bankAccount:null,depositBank:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加库存开票信息"},handleUpdate:function(e){var t=this;this.reset();var a=e.id||this.ids;i(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改库存开票信息"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.id?c(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):s(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.id||this.ids;this.$modal.confirm('是否确认删除库存开票信息编号为"'+a+'"的数据项？').then((function(){return u(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){var e=this,t=this.queryParams;this.$modal.confirm("是否确认导出所有库存开票信息数据项？").then((function(){return e.exportLoading=!0,p(t)})).then((function(t){e.$download.name(t.msg),e.exportLoading=!1})).catch((function(){}))}}},d=m,f=a("2877"),h=Object(f["a"])(d,n,r,!1,null,null,null);t["default"]=h.exports}}]);