(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57ad1fa4"],{"6e10":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[n("el-form-item",{attrs:{label:"客户名称",prop:"clientNickname"}},[n("el-input",{attrs:{placeholder:"请输入客户名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.clientNickname,callback:function(t){e.$set(e.queryParams,"clientNickname",t)},expression:"queryParams.clientNickname"}})],1),n("el-form-item",{attrs:{label:"客户手机",prop:"clientPhone"}},[n("el-input",{attrs:{placeholder:"请输入客户手机",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.clientPhone,callback:function(t){e.$set(e.queryParams,"clientPhone",t)},expression:"queryParams.clientPhone"}})],1),n("el-form-item",{attrs:{label:"客户收货地址",prop:"shippingAddress"}},[n("el-input",{attrs:{placeholder:"请输入客户收货地址",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.shippingAddress,callback:function(t){e.$set(e.queryParams,"shippingAddress",t)},expression:"queryParams.shippingAddress"}})],1),n("el-form-item",{attrs:{label:"性别 先生:0 女士:1",prop:"gender"}},[n("el-input",{attrs:{placeholder:"请输入性别 先生:0 女士:1",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.gender,callback:function(t){e.$set(e.queryParams,"gender",t)},expression:"queryParams.gender"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:client:add"],expression:"['erp:client:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:client:edit"],expression:"['erp:client:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:client:remove"],expression:"['erp:client:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:client:export"],expression:"['erp:client:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini",loading:e.exportLoading},on:{click:e.handleExport}},[e._v("导出")])],1),n("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.clientList},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{label:"客户ID",align:"center",prop:"id"}}),n("el-table-column",{attrs:{label:"客户名称",align:"center",prop:"clientNickname"}}),n("el-table-column",{attrs:{label:"客户手机",align:"center",prop:"clientPhone"}}),n("el-table-column",{attrs:{label:"客户收货地址",align:"center",prop:"shippingAddress"}}),n("el-table-column",{attrs:{label:"性别 先生:0 女士:1",align:"center",prop:"gender"}}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:client:edit"],expression:"['erp:client:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("修改")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:client:remove"],expression:"['erp:client:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"客户名称",prop:"clientNickname"}},[n("el-input",{attrs:{placeholder:"请输入客户名称"},model:{value:e.form.clientNickname,callback:function(t){e.$set(e.form,"clientNickname",t)},expression:"form.clientNickname"}})],1),n("el-form-item",{attrs:{label:"客户手机",prop:"clientPhone"}},[n("el-input",{attrs:{placeholder:"请输入客户手机"},model:{value:e.form.clientPhone,callback:function(t){e.$set(e.form,"clientPhone",t)},expression:"form.clientPhone"}})],1),n("el-form-item",{attrs:{label:"客户收货地址",prop:"shippingAddress"}},[n("el-input",{attrs:{placeholder:"请输入客户收货地址"},model:{value:e.form.shippingAddress,callback:function(t){e.$set(e.form,"shippingAddress",t)},expression:"form.shippingAddress"}})],1),n("el-form-item",{attrs:{label:"性别 先生:0 女士:1",prop:"gender"}},[n("el-input",{attrs:{placeholder:"请输入性别 先生:0 女士:1"},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},r=[],a=(n("d81d"),n("b0c0"),n("746b")),l={name:"Client",data:function(){return{loading:!0,exportLoading:!1,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,clientList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,clientNickname:null,clientPhone:null,shippingAddress:null,gender:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,Object(a["e"])(this.queryParams).then((function(t){e.clientList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,clientNickname:null,clientPhone:null,shippingAddress:null,gender:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加库存客户"},handleUpdate:function(e){var t=this;this.reset();var n=e.id||this.ids;Object(a["d"])(n).then((function(e){t.form=e.data,t.open=!0,t.title="修改库存客户"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.id?Object(a["f"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(a["a"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,n=e.id||this.ids;this.$modal.confirm('是否确认删除库存客户编号为"'+n+'"的数据项？').then((function(){return Object(a["b"])(n)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){var e=this,t=this.queryParams;this.$modal.confirm("是否确认导出所有库存客户数据项？").then((function(){return e.exportLoading=!0,Object(a["c"])(t)})).then((function(t){e.$download.name(t.msg),e.exportLoading=!1})).catch((function(){}))}}},o=l,s=n("2877"),c=Object(s["a"])(o,i,r,!1,null,null,null);t["default"]=c.exports},"746b":function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var i=n("b775");function r(e){return Object(i["a"])({url:"/erp/client/list",method:"get",params:e})}function a(e){return Object(i["a"])({url:"/erp/client/"+e,method:"get"})}function l(e){return Object(i["a"])({url:"/erp/client",method:"post",data:e})}function o(e){return Object(i["a"])({url:"/erp/client",method:"put",data:e})}function s(e){return Object(i["a"])({url:"/erp/client/"+e,method:"delete"})}function c(e){return Object(i["a"])({url:"/erp/client/export",method:"get",params:e})}}}]);