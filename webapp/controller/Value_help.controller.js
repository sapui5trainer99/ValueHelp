sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("valuehelp.valuehelp.controller.Value_help", {
            onInit: function() {
                var json = new sap.ui.model.json.JSONModel("model/Data.json");
			var form = this.byId("EmpForm");
			this.getView().setModel(json, "formModel");
			form.bindElement("formModel>/results/0"); //element binding

		},
		onValueHelpId:function(){
			if(!this.fragment1){
				this.fragment1= new sap.ui.xmlfragment( "valuehelp.valuehelp.fragments.EmpIdF4", this);
				var json=new sap.ui.model.json.JSONModel("model/Data.json");
				this.fragment1.setModel(json);
				this.fragment1.addStyleClass("sapUiSizeCompact"); 
				}
			
				this.fragment1.open();
		},
		onValueHelpName:function(){
			if(!this.fragment2){
				this.fragment2= new sap.ui.xmlfragment( "valuehelp.valuehelp.fragments.EmpName", this);
				var json=new sap.ui.model.json.JSONModel("model/Data.json");
				this.fragment2.setModel(json);
				this.fragment2.addStyleClass("sapUiSizeCompact"); 
				}
			
				this.fragment2.open();
		},
		onValueHelpMail:function(){
			if(!this.fragment3){
				this.fragment3= new sap.ui.xmlfragment( "valuehelp.valuehelp.fragments.EmpMail", this);
				var json=new sap.ui.model.json.JSONModel("model/Data.json");
				this.fragment3.setModel(json);
				this.fragment3.addStyleClass("sapUiSizeCompact"); 
				}
			
				this.fragment3.open();
		},
			onCofirmId:function(oEvent){
				
				var Title=oEvent.getParameter('selectedItem').getTitle();
				this.byId("EmpId").setValue(Title);	
			},
			onCofirmName:function(oEvent){
				
				var Title=oEvent.getParameter('selectedItem').getTitle();
				this.byId("EmpName").setValue(Title);	
			},
			onCofirmEmail:function(oEvent){
				
				var Title=oEvent.getParameter('selectedItem').getTitle();
				this.byId("EmpMail").setValue(Title);	
			},
		onChangeId:function(evt){
				var value=evt.getParameter('value');
			var fil = [
								new sap.ui.model.Filter("id", "Contains", value),
								new sap.ui.model.Filter("name", "Contains", value),
								new sap.ui.model.Filter("email", "Contains", value)
								
							];
						
				evt.getSource().getBinding('items').filter(new sap.ui.model.Filter(fil, false));
			},
			
	});
});

