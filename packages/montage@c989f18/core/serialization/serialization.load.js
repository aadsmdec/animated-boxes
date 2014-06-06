montageDefine("c989f18","core/serialization/serialization",{dependencies:["../core","./serializer/montage-labeler","./deserializer/montage-reviver","frb/parse","frb/stringify"],factory:function(e,t){var n=e("../core").Montage,r=e("./serializer/montage-labeler").MontageLabeler,i=e("./deserializer/montage-reviver").MontageReviver,a=e("frb/parse"),o=e("frb/stringify"),s=n.specialize({_serializationString:{value:null},_serializationObject:{value:null},_serializationLabels:{value:null},initWithString:{value:function(e){return this._serializationString=e,this._serializationObject=null,this._serializationLabels=null,this}},initWithObject:{value:function(e){return this._serializationString=null,this._serializationObject=e,this._serializationLabels=null,this}},clone:{value:function(){var e=new s;return e.initWithString(this.getSerializationString()),e}},getSerializationObject:{value:function(){return this._serializationObject||(this._serializationObject=JSON.parse(this._serializationString)),this._serializationObject}},getSerializationString:{value:function(){return this._serializationString||(this._serializationString=JSON.stringify(this._serializationObject)),this._serializationString}},getSerializationLabels:{value:function(){var e;return this._serializationLabels||(e=this.getSerializationObject())&&(this._serializationLabels=Object.keys(e)),this._serializationLabels}},getExternalObjectLabels:{value:function(){var e=this.getSerializationObject(),t=[];for(var n in e)0===Object.keys(e[n]).length&&t.push(n);return t}},hasSerializationLabel:{value:function(e){return e in this.getSerializationObject()}},isExternalObject:{value:function(e){var t=this.getSerializationObject();return t&&e in t?0===Object.keys(t[e]).length:!1}},isAlias:{value:function(e){var t=this.getSerializationObject();return t&&e in t?"alias"in t[e]:!1}},getElementId:{value:function(e){var t=this.getSerializationObject(),r=n.getPath.call(t,e+".properties.element");return r?r["#"]:void 0}},getSerializationLabelsWithElements:{value:function(e){var t=new u,n=[];return t.initWithSerialization(this),t.visitSerialization(function(t){"Element"===t.type&&e.indexOf(t.data)>=0&&(t=t.parent,t&&"properties"===t.name&&(t=t.parent,t&&"montageObject"===t.type&&n.push(t.label)))}),n}},renameElementReferences:{value:function(e){var t=new u;t.initWithSerialization(this),t.visitSerialization(function(t){"Element"===t.type&&t.data in e&&(t.data=e[t.data])})}},renameSerializationLabels:{value:function(e){var t=new u;t.initWithSerialization(this),t.visitSerialization(function(t){if(t.label){var n=t.label;n in e&&(t.label=e[n])}if("reference"===t.type){var r=t.data;r in e&&(t.data=e[r])}})}},mergeSerialization:{value:function(e,t){return l.mergeSerializations(this,e,t)}},extractSerialization:{value:function(e,t){var n=new c;return n.initWithSerialization(this),n.extractSerialization(e,t)}}}),l=n.specialize(null,{mergeSerializations:{value:function(e,t,n){var r,i,a,o,s,l,u={};a=e.getSerializationLabels(),o=t.getSerializationLabels(),s=this._createCollisionTable(a,o,u,n&&n.labeler),n&&n.willMergeObjectWithLabel&&(l=this._willMergeObjectWithLabel(n,e,t,u),s=s||l),s&&(t=t.clone(),t.renameSerializationLabels(u),o=t.getSerializationLabels()),r=e.getSerializationObject(),i=t.getSerializationObject();for(var c,d=0;c=o[d];d++)-1===a.indexOf(c)&&(r[c]=i[c]);return e.initWithObject(r),u}},_willMergeObjectWithLabel:{value:function(e,t,n,r){var i,a,o,s,l,u=!1,c=n.getSerializationLabels();r&&(o=[],Object.keys(r).forEach(function(e){o.push(r[e])}));for(var d,h=0;d=c[h];h++)if(a=r&&r[d],i=e.willMergeObjectWithLabel(d,a),"string"==typeof i){if(s=this._isLabelValidInSerialization(i,t),s||(l=!this._isLabelValidInSerialization(i,n)&&-1===o.indexOf(i)),!s&&!l)throw Error("willMergeObjectWithLabel either needs to return a label that exists in the destination serialization to indicate it's the same object or return a completely new label to rename the object being merged. \""+i+'"  destination: '+t.getSerializationString()+"\n source: "+n.getSerializationString()+"\n collision table: "+JSON.stringify(r,null,4));u=!0,r[d]=i}return u}},_isLabelValidInSerialization:{value:function(e,t){var n,r;return t.hasSerializationLabel(e)?!0:(r=e.indexOf(":"),r>0&&(n=e.slice(0,r),t.hasSerializationLabel(n))?!0:!1)}},_createCollisionTable:{value:function(e,t,n,i){for(var a,o,s,l,i=i||new r,u=!1,c=Object.create(null),d=0;e.length>d;d++)s=e[d],l=s.indexOf(":"),l>0&&(a=s.slice(0,l),i.addLabel(a),c[a]=1),i.addLabel(s),c[s]=1;for(var d=0;s=t[d];d++)l=s.indexOf(":"),l>0?(a=s.slice(0,l),o=n[a],o?(n[s]=o+":"+s.slice(l+1),u=!0):a in c?(o=i.generateLabel(i.getLabelBaseName(a)),t.indexOf(a)>=0&&(n[a]=o),n[s]=o+s.slice(l),u=!0):i.addLabel(a)):s in c&&!(s in n)?(n[s]=i.generateLabel(i.getLabelBaseName(s)),u=!0):i.addLabel(s);return u}}}),u=n.specialize({initWithSerialization:{value:function(e){this._serialization=e}},visitSerialization:{value:function(e){var t=this._serialization.getSerializationObject();this._walkRootObjects(e,t),this._serialization.initWithObject(t)}},visitSerializationObject:{value:function(e,t){var n=this._serialization.getSerializationObject();if(!(e in n))throw Error('Object "'+e+'" does not exist in '+this._serialization.getSerializationString());this._walkRootObject(t,n,e),this._serialization.initWithObject(n)}},changeLabel:{value:function(e,t){var n,r=this._serialization.getSerializationObject();n=r[e],delete r[e],r[t]=n}},_walkRootObjects:{value:function(e,t){for(var n in t)this._walkRootObject(e,t,n)}},_walkRootObject:{value:function(e,t,n){var r=t[n];"value"in r?this._walkObject(e,r,"value",n):this._walkCustomObject(e,t,n)}},_walkObject:{value:function(e,t,n,r,a){var o,s=t[n],l=i.getTypeOf(s);if(o={type:l},r?o.label=r:o.name=n,a&&(o.parent=a),"number"===l||"string"===l||"null"===l)o.data=s,e(o),t[n]=o.data;else if("regexp"===l)o.data=s["/"],e(o),s["/"]=o.data;else if("reference"===l)o.data=s["@"],e(o),s["@"]=o.data;else if("Element"===l)o.data=s["#"],e(o),s["#"]=o.data;else if("array"===l){o.data=s,e(o),t[n]=s=o.data;for(var u=0,c=s.length;c>u;u++)this._walkObject(e,s,""+u,null,o)}else if("object"===l){o.data=s,e(o),t[n]=s=o.data;for(var n in s)this._walkObject(e,s,n,null,o)}o.label!=r&&this.changeLabel(r,o.label)}},_walkCustomObject:{value:function(e,t,n){var r,i=t[n];r={type:"montageObject",label:n,data:i},e(r),t[n]=i=r.data,r.label!=n&&this.changeLabel(n,r.label),i.properties&&this._walkObject(e,i,"properties",null,r),i.listeners&&this._walkObject(e,i,"listeners",null,r),i.bindings&&this._walkBindings(e,i,null,r),i.localizations&&this._walkLocalizations(e,i,null,r)}},_walkBindings:{value:function(e,t,n){var r,i=t.bindings;r={type:"bindings",data:i,parent:n},e(r),t.bindings=i=r.data;for(var a in i)this._walkBinding(e,i,a,r)}},_walkBinding:{value:function(e,t,n,r){var i,a=t[n];i={type:"binding",name:n,data:a,parent:r},e(i),t[n]=a=i.data,this._walkBindingData(e,a,i)}},_walkBindingData:{value:function(e,t,n){var r,i,s=!1;r=t["<-"]||t["<->"],i=a(r),this._walksBindingReferences(i,function(t){var n={type:"reference",data:t.label};e(n),t.label!==n.data&&(t.label=n.data,s=!0)}),s&&("<-"in t?t["<-"]=o(i):t["<->"]=o(i)),t.converter&&this._walkObject(e,t,"converter",null,n)}},_walkLocalizations:{value:function(e,t,n){var r,i=t.localizations;r={type:"localizations",data:i,parent:n},e(r),t.localizations=i=r.data;for(var a in i)this._walkLocalization(e,i,a,r)}},_walkLocalization:{value:function(e,t,n,r){var i,a,o=t[n];if(i={type:"localization",name:n,data:o,parent:r},e(i),t[n]=o=i.data,"object"==typeof o.key&&this._walkBindingData(e,o.key,i),"object"==typeof o.default&&this._walkBindingData(e,o.default,i),"object"==typeof o.data){a=o.data;for(var n in a)this._walkBindingData(e,a[n],i)}}},_walksBindingReferences:{value:function(e,t){var n=e.args;if("component"===e.type&&t(e),n)for(var r=0,i=n.length;i>r;r++)this._walksBindingReferences(n[r],t)}}}),c=n.specialize({_serialization:{value:null},initWithSerialization:{value:function(e){this._serialization=e}},extractSerialization:{value:function(e,t){var n,r=new u,i={},a=[];n=this._serialization.getSerializationObject(),r.initWithSerialization(this._serialization);for(var o,l=0;o=e[l];l++)i[o]=n[o],r.visitSerializationObject(o,function(t){var n;"reference"===t.type&&(n=t.data,-1===a.indexOf(n)&&-1===e.indexOf(n)&&a.push(n))});if(t)for(var o,l=0;o=t[l];l++)o in n&&!(o in i)&&(i[o]={});for(var o,l=0;o=a[l];l++)i[o]={};return(new s).initWithObject(i)}}});t.Serialization=s,t.SerializationMerger=l,t.SerializationInspector=u,t.SerializationExtractor=c}});