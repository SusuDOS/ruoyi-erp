(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2ef1232"],{4923:function(e,t,a){"use strict";a.r(t);a("d81d");var n=a("b76a"),o=a.n(n),r=a("a85b"),i={itemBtns:function(e,t,a,n){var o=this.$listeners,r=o.copyItem,i=o.deleteItem;return[e("span",{class:"drawing-item-copy",attrs:{title:"复制"},on:{click:function(e){r(t,n),e.stopPropagation()}}},[e("i",{class:"el-icon-copy-document"})]),e("span",{class:"drawing-item-delete",attrs:{title:"删除"},on:{click:function(e){i(a,n),e.stopPropagation()}}},[e("i",{class:"el-icon-delete"})])]}},l={colFormItem:function(e,t,a,n){var o=this,l=this.$listeners.activeItem,s=this.activeId===t.formId?"drawing-item active-from-item":"drawing-item";return this.formConf.unFocusedComponentBorder&&(s+=" unfocus-bordered"),e("el-col",{attrs:{span:t.span},class:s,nativeOn:{click:function(e){l(t),e.stopPropagation()}}},[e("el-form-item",{attrs:{"label-width":t.labelWidth?"".concat(t.labelWidth,"px"):null,label:t.label,required:t.required}},[e(r["a"],{key:t.renderKey,attrs:{conf:t},on:{input:function(e){o.$set(t,"defaultValue",e)}}})]),i.itemBtns.apply(this,arguments)])},rowFormItem:function(e,t,a,n){var r=this.$listeners.activeItem,l=this.activeId===t.formId?"drawing-row-item active-from-item":"drawing-row-item",c=s.apply(this,arguments);return"flex"===t.type&&(c=e("el-row",{attrs:{type:t.type,justify:t.justify,align:t.align}},[c])),e("el-col",{attrs:{span:t.span}},[e("el-row",{attrs:{gutter:t.gutter},class:l,nativeOn:{click:function(e){r(t),e.stopPropagation()}}},[e("span",{class:"component-name"},[t.componentName]),e(o.a,{attrs:{list:t.children,animation:340,group:"componentsGroup"},class:"drag-wrapper"},[c]),i.itemBtns.apply(this,arguments)])])}};function s(e,t,a,n){var o=this;return Array.isArray(t.children)?t.children.map((function(a,n){var r=l[a.layout];return r?r.call(o,e,a,n,t.children):c()})):null}function c(){throw new Error("没有与".concat(this.element.layout,"匹配的layout"))}var p,u,d={components:{render:r["a"],draggable:o.a},props:["element","index","drawingList","activeId","formConf"],render:function(e){var t=l[this.element.layout];return t?t.call(this,e,this.element,this.index,this.drawingList):c()}},m=d,f=a("2877"),h=Object(f["a"])(m,p,u,!1,null,null,null);t["default"]=h.exports},a85b:function(e,t,a){"use strict";a("e9c4"),a("b64b"),a("d3b7"),a("159b");var n=a("ed08"),o=Object(n["f"])("accept,accept-charset,accesskey,action,align,alt,async,autocomplete,autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,name,contenteditable,contextmenu,controls,coords,data,datetime,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,type,usemap,value,width,wrap");function r(e,t,a){t.props.value=a,t.on.input=function(t){e.$emit("input",t)}}var i={"el-button":{default:function(e,t,a){return t[a]}},"el-input":{prepend:function(e,t,a){return e("template",{slot:"prepend"},[t[a]])},append:function(e,t,a){return e("template",{slot:"append"},[t[a]])}},"el-select":{options:function(e,t,a){var n=[];return t.options.forEach((function(t){n.push(e("el-option",{attrs:{label:t.label,value:t.value,disabled:t.disabled}}))})),n}},"el-radio-group":{options:function(e,t,a){var n=[];return t.options.forEach((function(a){"button"===t.optionType?n.push(e("el-radio-button",{attrs:{label:a.value}},[a.label])):n.push(e("el-radio",{attrs:{label:a.value,border:t.border}},[a.label]))})),n}},"el-checkbox-group":{options:function(e,t,a){var n=[];return t.options.forEach((function(a){"button"===t.optionType?n.push(e("el-checkbox-button",{attrs:{label:a.value}},[a.label])):n.push(e("el-checkbox",{attrs:{label:a.value,border:t.border}},[a.label]))})),n}},"el-upload":{"list-type":function(e,t,a){var n=[];return"picture-card"===t["list-type"]?n.push(e("i",{class:"el-icon-plus"})):n.push(e("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[t.buttonText])),t.showTip&&n.push(e("div",{slot:"tip",class:"el-upload__tip"},["只能上传不超过 ",t.fileSize,t.sizeUnit," 的",t.accept,"文件"])),n}}};t["a"]={render:function(e){var t=this,a={attrs:{},props:{},on:{},style:{}},n=JSON.parse(JSON.stringify(this.conf)),l=[],s=i[n.tag];return s&&Object.keys(s).forEach((function(t){var a=s[t];n[t]&&l.push(a(e,n,t))})),Object.keys(n).forEach((function(e){var i=n[e];"vModel"===e?r(t,a,n.defaultValue):a[e]?a[e]=i:o(e)?a.attrs[e]=i:a.props[e]=i})),e(this.conf.tag,a,l)},props:["conf"]}}}]);