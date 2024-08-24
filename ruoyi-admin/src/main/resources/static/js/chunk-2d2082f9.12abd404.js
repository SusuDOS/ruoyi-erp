(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2082f9"],{a45e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[r("el-form-item",{attrs:{label:"产品ID",prop:"productId"}},[r("el-input",{attrs:{placeholder:"请输入产品ID",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.productId,callback:function(t){e.$set(e.queryParams,"productId",t)},expression:"queryParams.productId"}})],1),r("el-form-item",{attrs:{label:"数量",prop:"amount"}},[r("el-input",{attrs:{placeholder:"请输入数量",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.amount,callback:function(t){e.$set(e.queryParams,"amount",t)},expression:"queryParams.amount"}})],1),r("el-form-item",{attrs:{label:"流水类型: 采购入库 00, 零售退货入库 01, 工程退货入库 02, 零售出库 10, 工程出库 11, 采购出库 12",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择流水类型: 采购入库 00, 零售退货入库 01, 工程退货入库 02, 零售出库 10, 工程出库 11, 采购出库 12",clearable:"",size:"small"},model:{value:e.queryParams.type,callback:function(t){e.$set(e.queryParams,"type",t)},expression:"queryParams.type"}},[r("el-option",{attrs:{label:"请选择字典生成",value:""}})],1)],1),r("el-form-item",{attrs:{label:"流水金额",prop:"price"}},[r("el-input",{attrs:{placeholder:"请输入流水金额",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.price,callback:function(t){e.$set(e.queryParams,"price",t)},expression:"queryParams.price"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:flow:add"],expression:"['erp:flow:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:flow:edit"],expression:"['erp:flow:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:flow:remove"],expression:"['erp:flow:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:flow:export"],expression:"['erp:flow:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini",loading:e.exportLoading},on:{click:e.handleExport}},[e._v("导出")])],1),r("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.flowList},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{label:"库存流水ID",align:"center",prop:"id"}}),r("el-table-column",{attrs:{label:"产品ID",align:"center",prop:"productId"}}),r("el-table-column",{attrs:{label:"数量",align:"center",prop:"amount"}}),r("el-table-column",{attrs:{label:"流水类型: 采购入库 00, 零售退货入库 01, 工程退货入库 02, 零售出库 10, 工程出库 11, 采购出库 12",align:"center",prop:"type"}}),r("el-table-column",{attrs:{label:"流水金额",align:"center",prop:"price"}}),r("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark"}}),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:flow:edit"],expression:"['erp:flow:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleUpdate(t.row)}}},[e._v("修改")]),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["erp:flow:remove"],expression:"['erp:flow:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"产品ID",prop:"productId"}},[r("el-input",{attrs:{placeholder:"请输入产品ID"},model:{value:e.form.productId,callback:function(t){e.$set(e.form,"productId",t)},expression:"form.productId"}})],1),r("el-form-item",{attrs:{label:"数量",prop:"amount"}},[r("el-input",{attrs:{placeholder:"请输入数量"},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),r("el-form-item",{attrs:{label:"流水类型: 采购入库 00, 零售退货入库 01, 工程退货入库 02, 零售出库 10, 工程出库 11, 采购出库 12",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择流水类型: 采购入库 00, 零售退货入库 01, 工程退货入库 02, 零售出库 10, 工程出库 11, 采购出库 12"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("el-option",{attrs:{label:"请选择字典生成",value:""}})],1)],1),r("el-form-item",{attrs:{label:"流水金额",prop:"price"}},[r("el-input",{attrs:{placeholder:"请输入流水金额"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},l=[],n=(r("d81d"),r("b0c0"),r("b775"));function o(e){return Object(n["a"])({url:"/erp/flow/list",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/erp/flow/"+e,method:"get"})}function s(e){return Object(n["a"])({url:"/erp/flow",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/erp/flow",method:"put",data:e})}function u(e){return Object(n["a"])({url:"/erp/flow/"+e,method:"delete"})}function p(e){return Object(n["a"])({url:"/erp/flow/export",method:"get",params:e})}var m={name:"Flow",data:function(){return{loading:!0,exportLoading:!1,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,flowList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,productId:null,amount:null,type:null,price:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,o(this.queryParams).then((function(t){e.flowList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,productId:null,amount:null,type:null,price:null,remark:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加库存流水"},handleUpdate:function(e){var t=this;this.reset();var r=e.id||this.ids;i(r).then((function(e){t.form=e.data,t.open=!0,t.title="修改库存流水"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.id?c(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):s(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,r=e.id||this.ids;this.$modal.confirm('是否确认删除库存流水编号为"'+r+'"的数据项？').then((function(){return u(r)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){var e=this,t=this.queryParams;this.$modal.confirm("是否确认导出所有库存流水数据项？").then((function(){return e.exportLoading=!0,p(t)})).then((function(t){e.$download.name(t.msg),e.exportLoading=!1})).catch((function(){}))}}},d=m,f=r("2877"),h=Object(f["a"])(d,a,l,!1,null,null,null);t["default"]=h.exports}}]);