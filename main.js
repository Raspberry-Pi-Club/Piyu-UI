'use strict';

var applications = '[{"name":"Browser","icon":"icons/default.png","action":"apps.browser"},
{"name"}
]';

var system = {
	homeClose : function(){
		$("#mainActivityDisplay").slideUp(0).delay(200).html('');
	},
	homeShow : function(){
		$("#mainActivityDisplay").slideDown(200);
	},
	generateHomeFooterIcons : function(){
		return '<span class="app app-fix" app="piyu.contacts"><i class="mdi-action-perm-contact-cal"></i></span><span class="app app-fix" app="piyu.music"><i class="mdi-av-play-arrow"></i></span><span class="app app-fix" app="core.allapps"><i class="mdi-navigation-apps"></i></span><span class="app app-fix" app="piyu.browser"><i class="mdi-action-group-work"></i></span><span class="app app-fix" app="core.settings"><i class="mdi-action-settings"></i></span>';
	},
	generateHomeMainDisplay : function(){
		return '<div class="headerDateTime"><div class="leftD"><span class="time"><span class="h">10 : </span><span class="m">45</span><span class="ap">AM</span></span><span class="date">	TUE,&nbsp;MARCH 2019</span></div><div class="rightD"><i class="mdi-file-cloud-queue"></i></div></div>';
	},
	generateAppNavigation : function(){
		return '<span class="navigation" loc="settings"><i class="mdi-hardware-keyboard-control"></i></span><span class="navigation" loc="home"><i class="mdi-action-home"></i></span><span class="navigation" loc="lock" id="lockHandler"><i class="mdi-action-lock-open" id="lockButton"></i></span><span class="navigation" loc="back"><i class="mdi-content-reply"></i></span>';
	},
	body  	: function(data){
		$('#mainActivityDisplay').html(data);
	},
	bodyAppend : function(data){
		$('#mainActivityDisplay').append(data);
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
		console.log("Contats: Load done");
	},
	music : function(){
		system.homeClose();
		system.body("<h2>Musiq Player</h2>");
		system.footer(system.generateAppNavigation());
		system.homeShow();
		console.log("Player : Load done");
	},
	browser : function(){
		system.homeClose();
		system.body("<h2>Browser</h2>");
		system.footer(system.generateAppNavigation());
		system.homeShow();
		console.log("Browser : Load done");
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
$("body").on("click",".navigation",function(){
	var action = $(this).attr('loc');
	if(action=='home'){
		system.homeClose();
		system.body(system.generateHomeMainDisplay());
		system.footer(system.generateHomeFooterIcons());
		system.homeShow();
	}
	else if(action=='lock'){
		system.bodyAppend('<div class="overlay"></div>');
		$("#lockButton").removeClass('mdi-action-lock-open').addClass('mdi-action-lock');
		$("#lockHandler").attr('loc','unlock');
	}
	else if(action=='unlock'){
		$('.overlay').remove();
		$("#lockButton").removeClass('mdi-action-lock').addClass('mdi-action-lock-open');
		$("#lockHandler").attr('loc','lock');
	}
});