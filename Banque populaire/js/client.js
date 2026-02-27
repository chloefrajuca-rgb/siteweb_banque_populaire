(function(b,c,a){a=function(a,c){if(!a)throw Error("Package name must be defined");if(!c)throw Error("Scope of package must be defined");for(var l=a.split("."),e,b=c,d=void 0;l.length;){e=l.shift();d=b[e];if(void 0===d)d=b[e]={};else if(!(d instanceof Object))throw Error("Bad package");b=d}return d};a(c,b).createPackage=a})(window,"evermaps");(function(b,c,a){a.evermaps.createPackage(c,b)})(evermaps,"jslib",{evermaps:evermaps});(function(b,c){function a(){this.loaded=!1;this._count=0}var f=c.window,h=c.document;a.LOAD_EVENT="evermaps-jslib-load";a.prototype={beginLoad:function(){this.loaded=!1;this._count++},endLoad:function(){this._count--;this._count||(this.loaded=!0,this._emitLoad())},_emitLoad:function(){var a=this;setTimeout(function(){var b=h.createEvent("Event");b.initEvent(a.LOAD_EVENT,!0,!0);f.dispatchEvent(b)},1)},onLoad:function(a){if("function"!==typeof a)throw Error();this.loaded?a.call():f.addEventListener(this.LOAD_EVENT,
function(){a.call()},!1)},loadScripts:function(a,b){for(var c=this,d=h.getElementsByTagName("script")[0],e=d.parentNode,k=0,f=a.length;k<f;k++){var g=h.createElement("script");g.src=a[k];g.async=b;g.onload=function(){c.endLoad()};this.beginLoad();e.insertBefore(g,d)}}};b.Loader=new a})(evermaps.jslib,{window:window,document:document});


evermaps.APP_CONFIG = {
	stat: {
		id: 'bp-sl-v2'
	},
	proxy: {
		url: 'https://agences.banquepopulaire.fr/banque-assurance/proxy'
	}
};

evermaps.jslib.Loader.loadScripts(
	[
		'//fc1.1bis.com/api/?key=aDT99uh1cnZcixFrmvat',
		'https://agences.banquepopulaire.fr/banque-assurance/search-widget/1.0/js/20211202-132058/dist/client.js'
	],
	true
);
