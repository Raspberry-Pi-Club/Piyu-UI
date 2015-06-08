'use strict';

var system = {
	homeClose : function(){
		$("#mainActivityDisplay").slideUp(0).delay(200).html('');
	},
	homeShow : function(){
		$("#mainActivityDisplay").slideDown(200);
	},
	generateHomeFooterIcons : function(){
		return '<span class="app" app="piyu.contacts"><i class="mdi-action-perm-contact-cal"></i></span><span class="app" app="piyu.music"><i class="mdi-av-play-arrow"></i></span><span class="app" app="core.allapps"><i class="mdi-navigation-apps"></i></span><span class="app" app="piyu.browser"><i class="mdi-action-group-work"></i></span><span class="app" app="core.settings"><i class="mdi-action-settings"></i></span>';
	},
	generateHomeMainDisplay : function(){
		return '';
	},
	generateAppNavigation : function(){
		return '<span class="navigation" loc="settings"><i class="mdi-hardware-keyboard-control"></i></span><span class="navigation" loc="home"><i class="mdi-action-home"></i></span><span class="navigation" loc="lock"><i class="mdi-action-lock-open"></i></span><span class="navigation" loc="back"><i class="mdi-content-reply"></i></span>';
	},
	body  	: function(data){
		$('#mainActivityDisplay').html(data);
	},
	footer : function(data){
		$('footer').html(data);
	}
};



var apps = {
	contacts : function(){
		system.homeClose();
		system.body("<h2>Contacts App</h2>");
		system.footer(system.generateAppNavigation());
		system.homeShow();
		console.log("Hello");
	},
	music : function(){

	},
	browser : function(){

	}
};

var core ={
	allapps : function(){

	},
	settings : function(){

	}
};



//Event Listeners
//Body App Click
$("body").on("click",".app",function(){
	var appName = $(this).attr('app');
	if(appName.substr(0,4)=='piyu'){
		var name = appName.substr(5,appName.length);
		console.log(name);
		name = "apps."+ name;
		eval(name)();
	}else if(appName.substr(0,4)=='core'){
		var name = appName.substr(5,appName.length);
		console.log(name);
	}
});
//Body Navigation Click