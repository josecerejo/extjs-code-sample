Ext.data.JsonP.ExtJSCodeSample_data_event_ModelChangeEvent({"tagname":"class","files":[{"filename":"ModelChangeEvent.js","href":"ModelChangeEvent.html#ExtJSCodeSample-data-event-ModelChangeEvent"}],"aliases":{},"alternateClassNames":[],"members":[{"name":"fieldName","tagname":"property","owner":"ExtJSCodeSample.data.event.ModelChangeEvent","id":"property-fieldName","meta":{"private":true}},{"name":"newValue","tagname":"property","owner":"ExtJSCodeSample.data.event.ModelChangeEvent","id":"property-newValue","meta":{"private":true}},{"name":"oldValue","tagname":"property","owner":"ExtJSCodeSample.data.event.ModelChangeEvent","id":"property-oldValue","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"ExtJSCodeSample.data.event.ModelChangeEvent","id":"method-constructor","meta":{}},{"name":"getFieldName","tagname":"method","owner":"ExtJSCodeSample.data.event.ModelChangeEvent","id":"method-getFieldName","meta":{}},{"name":"getNewValue","tagname":"method","owner":"ExtJSCodeSample.data.event.ModelChangeEvent","id":"method-getNewValue","meta":{}},{"name":"getOldValue","tagname":"method","owner":"ExtJSCodeSample.data.event.ModelChangeEvent","id":"method-getOldValue","meta":{}},{"name":"CHANGED","tagname":"event","owner":"ExtJSCodeSample.data.event.ModelChangeEvent","id":"static-event-CHANGED","meta":{"static":true}}],"extends":"Ext.Base","name":"ExtJSCodeSample.data.event.ModelChangeEvent","mixins":[],"requires":[],"uses":[],"code_type":"ext_define","id":"class-ExtJSCodeSample.data.event.ModelChangeEvent","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>ExtJSCodeSample.data.event.ModelChangeEvent</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ModelChangeEvent.html#ExtJSCodeSample-data-event-ModelChangeEvent' target='_blank'>ModelChangeEvent.js</a></div></pre><div class='doc-contents'><p>Event dispatched by ObservableModel any time the set method is called and the value being passed has changed</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fieldName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.data.event.ModelChangeEvent'>ExtJSCodeSample.data.event.ModelChangeEvent</span><br/><a href='source/ModelChangeEvent.html#ExtJSCodeSample-data-event-ModelChangeEvent-property-fieldName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.data.event.ModelChangeEvent-property-fieldName' class='name expandable'>fieldName</a><span> : String</span><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>{String} fieldName - The name of the field that has changed ...</div><div class='long'><p>{String} fieldName - The name of the field that has changed</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-newValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.data.event.ModelChangeEvent'>ExtJSCodeSample.data.event.ModelChangeEvent</span><br/><a href='source/ModelChangeEvent.html#ExtJSCodeSample-data-event-ModelChangeEvent-property-newValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.data.event.ModelChangeEvent-property-newValue' class='name expandable'>newValue</a><span> : Object</span><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>{Object} newValue - The new value of the field that has changed ...</div><div class='long'><p>{Object} newValue - The new value of the field that has changed</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-oldValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.data.event.ModelChangeEvent'>ExtJSCodeSample.data.event.ModelChangeEvent</span><br/><a href='source/ModelChangeEvent.html#ExtJSCodeSample-data-event-ModelChangeEvent-property-oldValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.data.event.ModelChangeEvent-property-oldValue' class='name expandable'>oldValue</a><span> : Object</span><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>{Object} oldValue - The old value of the field that has changed ...</div><div class='long'><p>{Object} oldValue - The old value of the field that has changed</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.data.event.ModelChangeEvent'>ExtJSCodeSample.data.event.ModelChangeEvent</span><br/><a href='source/ModelChangeEvent.html#ExtJSCodeSample-data-event-ModelChangeEvent-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/ExtJSCodeSample.data.event.ModelChangeEvent-method-constructor' class='name expandable'>ExtJSCodeSample.data.event.ModelChangeEvent</a>( <span class='pre'>fieldName, newValue, oldValue</span> ) : <a href=\"#!/api/ExtJSCodeSample.data.event.ModelChangeEvent\" rel=\"ExtJSCodeSample.data.event.ModelChangeEvent\" class=\"docClass\">ExtJSCodeSample.data.event.ModelChangeEvent</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fieldName</span> : String<div class='sub-desc'><ul>\n<li>Name of field on model that changed</li>\n</ul>\n\n</div></li><li><span class='pre'>newValue</span> : Object<div class='sub-desc'><ul>\n<li>New value on model</li>\n</ul>\n\n</div></li><li><span class='pre'>oldValue</span> : Object<div class='sub-desc'><ul>\n<li>Previous value on model</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ExtJSCodeSample.data.event.ModelChangeEvent\" rel=\"ExtJSCodeSample.data.event.ModelChangeEvent\" class=\"docClass\">ExtJSCodeSample.data.event.ModelChangeEvent</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFieldName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.data.event.ModelChangeEvent'>ExtJSCodeSample.data.event.ModelChangeEvent</span><br/><a href='source/ModelChangeEvent.html#ExtJSCodeSample-data-event-ModelChangeEvent-method-getFieldName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.data.event.ModelChangeEvent-method-getFieldName' class='name expandable'>getFieldName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the name of the field that has changed ...</div><div class='long'><p>Get the name of the field that has changed</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNewValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.data.event.ModelChangeEvent'>ExtJSCodeSample.data.event.ModelChangeEvent</span><br/><a href='source/ModelChangeEvent.html#ExtJSCodeSample-data-event-ModelChangeEvent-method-getNewValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.data.event.ModelChangeEvent-method-getNewValue' class='name expandable'>getNewValue</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the new value for the field that has changed ...</div><div class='long'><p>Get the new value for the field that has changed</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOldValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.data.event.ModelChangeEvent'>ExtJSCodeSample.data.event.ModelChangeEvent</span><br/><a href='source/ModelChangeEvent.html#ExtJSCodeSample-data-event-ModelChangeEvent-method-getOldValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.data.event.ModelChangeEvent-method-getOldValue' class='name expandable'>getOldValue</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the old value for the field that has changed ...</div><div class='long'><p>Get the old value for the field that has changed</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='static-event-CHANGED' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.data.event.ModelChangeEvent'>ExtJSCodeSample.data.event.ModelChangeEvent</span><br/><a href='source/ModelChangeEvent.html#ExtJSCodeSample-data-event-ModelChangeEvent-static-event-CHANGED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.data.event.ModelChangeEvent-static-event-CHANGED' class='name expandable'>CHANGED</a>( <span class='pre'>eOpts</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Dispatched when a property on an ObservableModel has changed ...</div><div class='long'><p>Dispatched when a property on an ObservableModel has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});