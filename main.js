'use strict';
var micState = false;

var applications = '[{"name":"Browser","icon":"icons/browser.png","action":"apps.browser"},{"name":"Contacts","icon":"icons/contacts.png","action":"apps.contacts"},{"name":"Music","icon":"icons/music.png","action":"apps.music"},{"name":"Calendar","icon":"icons/calendar.png","action":"apps.calendar"},{"name":"Clock","icon":"icons/clock.png","action":"apps.clock"},{"name":"Gallery","icon":"icons/gallery.png","action":"apps.gallery"},{"name":"Notes","icon":"icons/notes.png","action":"apps.notes"},{"name":"Facebook","icon":"icons/facebook.png","action":"apps.facebook"}]';

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
		return '<div class="headerDateTime"><div class="leftD"><span class="time"><span class="h">10 : </span><span class="m">45</span><span class="ap">AM</span></span><span class="date">TUE,&nbsp;MARCH 2019</span></div><div class="rightD"><i class="mdi-file-cloud-queue"></i></div></div><div class="mic"><div><i class="mdi-av-mic large"></i></div></div><div class="console"><p></p></div>';
	},
	generateAppNavigation : function(){
		return '<span class="navigation" loc="settings"><i class="mdi-hardware-keyboard-control"></i></span><span class="navigation" loc="home"><i class="mdi-action-home"></i></span><span class="navigation" loc="lock" id="lockHandler"><i class="mdi-action-lock-open" id="lockButton"></i></span><span class="navigation" loc="back"><i class="mdi-content-reply"></i></span>';
	},
	generateAllApps : function(){
		var apps = JSON.parse(applications);
		var data = '';
		var app = {};
		$(apps).each(function(i,app){
				data += "<div class='application' action='"+ app.action +"' ><img src='"+ app.icon+"' /><span>" + app.name + "</div>";

		});
						
	
		return data;
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
	},
	facebook : function(){
		system.homeClose();
		system.body("<h2>Facebook</h2><iframe src='http://mbasic.facebook.com' width='100%' height='100%'></iframe>");
		system.footer(system.generateAppNavigation());
		system.homeShow();
		console.log("Facebook : Load done");
	}
};

var core ={
	allapps : function(){
		system.homeClose();
		system.body(system.generateAllApps());
		system.footer(system.generateAppNavigation());
		system.homeShow();
		console.log("All Apps: Load done");
	},
	settings : function(){
var data = '<ul class="collection settings-list s-app"> <li class="collection-item avatar" app="personal_settings"> <i class="mdi-social-person circle pink"></i>    <p>Personal settings<br/>    <span>configure your personal settings here</span></p>       </li>  <li class="collection-item avatar" app="time_date">      <i class="mdi-device-access-time circle blue"></i>  <p>Time and date settings    <br/>   <span>modify your time and date</span>    </p>       </li>   <li class="collection-item avatar" app="display_settings">    <i class="mdi-action-settings-display circle orange"></i>         <p>Display settings      <br/>      <span>edit your display</span>      </p>          </li>     <li class="collection-item avatar">      <i class="mdi-notification-sync circle purple"></i>      <p>Synchronization Settings      <br/>     <span>configure sync settings</span>      </p>          </li>    <li class="collection-item avatar">      <i class="mdi-av-play-arrow circle red"></i>      <p>Media settings      <br/>      <span>control your music system</span>      </p>      </li>    <li class="collection-item avatar">      <i class="mdi-action-assessment circle green"></i>   <p>About      <br/>      <span>information about piyu</span>      </p>        </li>  </ul>'

      	system.homeClose();
		system.body(data);
		system.footer(system.generateAppNavigation());
		system.homeShow();
		console.log("Settings: Load done");
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
		name = "core."+ name;
		eval(name)();
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

$("body").on("click",".s-app li",function(){
	var location = $(this).attr('app');
	console.log(location);
		system.homeClose();
		system.body('<iframe src="app/'+location + '.html" ></iframe>');
		system.footer(system.generateAppNavigation());
		system.homeShow();
		console.log("Setting load done.");
});

//All apps on click action
$("body").on("click",".application",function(){
	var name = $(this).attr('action');
	eval(name)();
});


setInterval(function(){
$.ajax({
method: "GET",
url: "reader.php",
data: "log"
})
.done(function( msg ) {
	var data = JSON.parse(msg);
	console.log(msg);
	var out = '';
	$(data).each(function(i,d){
		if(i!=0){
			out += d + '<br/>';
		}
		
	});
	$('.console p').html(out);
});
},1000);


//Mic Action
$('.mic').click(function(){
	if(micState == false){
		micState = true;

		$.ajax({
		method: "GET",
		url: "set.php",
		data: {"listen" : 1
			}
		})
		.done(function( msg ) {
			$('.mic').addClass('micRec');
		});	
	}
});