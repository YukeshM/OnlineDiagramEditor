if(window.urlParams=window.urlParams||{},window.isLocalStorage=window.isLocalStorage||!1,window.mxLoadSettings=window.mxLoadSettings||"1"!=urlParams.configure,window.isSvgBrowser=!0,window.DRAWIO_BASE_URL=window.DRAWIO_BASE_URL||(/.*\.draw\.io$/.test(window.location.hostname)||/.*\.diagrams\.net$/.test(window.location.hostname)?window.location.protocol+"//"+window.location.hostname:"https://app.diagrams.net"),window.DRAWIO_LIGHTBOX_URL=window.DRAWIO_LIGHTBOX_URL||"https://viewer.diagrams.net",window.EXPORT_URL=window.EXPORT_URL||"https://convert.diagrams.net/node/export",window.PLANT_URL=window.PLANT_URL||"https://plant-aws.diagrams.net",window.DRAW_MATH_URL=window.DRAW_MATH_URL||window.DRAWIO_BASE_URL+"/math",window.VSD_CONVERT_URL=window.VSD_CONVERT_URL||"https://convert.diagrams.net/VsdConverter/api/converter",window.EMF_CONVERT_URL=window.EMF_CONVERT_URL||"https://convert.diagrams.net/emf2png/convertEMF",window.REALTIME_URL=window.REALTIME_URL||"cache",window.DRAWIO_GITLAB_URL=window.DRAWIO_GITLAB_URL||"https://gitlab.com",window.DRAWIO_GITLAB_ID=window.DRAWIO_GITLAB_ID||"c9b9d3fcdce2dec7abe3ab21ad8123d89ac272abb7d0883f08923043e80f3e36",window.DRAWIO_GITHUB_URL=window.DRAWIO_GITHUB_URL||"https://github.com",window.DRAWIO_GITHUB_API_URL=window.DRAWIO_GITHUB_API_URL||"https://api.github.com",window.DRAWIO_GITHUB_ID=window.DRAWIO_GITHUB_ID||"Iv1.98d62f0431e40543",window.DRAWIO_DROPBOX_ID=window.DRAWIO_DROPBOX_ID||"libwls2fa9szdji",window.SAVE_URL=window.SAVE_URL||"save",window.OPEN_URL=window.OPEN_URL||"import",window.PROXY_URL=window.PROXY_URL||"proxy",window.DRAWIO_VIEWER_URL=window.DRAWIO_VIEWER_URL||null,window.NOTIFICATIONS_URL=window.NOTIFICATIONS_URL||"https://www.draw.io/notifications",window.SHAPES_PATH=window.SHAPES_PATH||"shapes",window.GRAPH_IMAGE_PATH=window.GRAPH_IMAGE_PATH||"img",window.ICONSEARCH_PATH=window.ICONSEARCH_PATH||((null!=navigator.userAgent&&navigator.userAgent.indexOf("MSIE")>=0||urlParams.dev)&&"file:"!=window.location.protocol?"iconSearch":window.DRAWIO_BASE_URL+"/iconSearch"),window.TEMPLATE_PATH=window.TEMPLATE_PATH||"templates",window.NEW_DIAGRAM_CATS_PATH=window.NEW_DIAGRAM_CATS_PATH||"newDiagramCats",window.PLUGINS_BASE_PATH=window.PLUGINS_BASE_PATH||"",window.RESOURCES_PATH=window.RESOURCES_PATH||"resources",window.RESOURCE_BASE=window.RESOURCE_BASE||RESOURCES_PATH+"/dia",window.DRAWIO_CONFIG=window.DRAWIO_CONFIG||null,window.mxLoadResources=window.mxLoadResources||!1,window.mxLanguage=window.mxLanguage||function(){var a=urlParams.lang;if(null==a&&"undefined"!=typeof JSON&&isLocalStorage)try{var n=localStorage.getItem(".drawio-config");if(null!=n&&(a=JSON.parse(n).language||null),!a&&window.mxIsElectron&&null!=(a=require("@electron/remote").app.getLocale())){var o=a.indexOf("-");o>=0&&(a=a.substring(0,o)),a=a.toLowerCase()}}catch(a){isLocalStorage=!1}return a}(),window.mxLanguageMap=window.mxLanguageMap||{i18n:"",id:"Bahasa Indonesia",ms:"Bahasa Melayu",bs:"Bosanski",bg:"Bulgarian",ca:"Català",cs:"Čeština",da:"Dansk",de:"Deutsch",et:"Eesti",en:"English",es:"Español",eu:"Euskara",fil:"Filipino",fr:"Français",gl:"Galego",it:"Italiano",hu:"Magyar",nl:"Nederlands",no:"Norsk",pl:"Polski","pt-br":"Português (Brasil)",pt:"Português (Portugal)",ro:"Română",fi:"Suomi",sv:"Svenska",vi:"Tiếng Việt",tr:"Türkçe",el:"Ελληνικά",ru:"Русский",sr:"Српски",uk:"Українська",he:"עברית",ar:"العربية",fa:"فارسی",th:"ไทย",ko:"한국어",ja:"日本語",zh:"简体中文","zh-tw":"繁體中文"},void 0===window.mxBasePath&&(window.mxBasePath="mxgraph",window.mxImageBasePath="mxgraph/images"),null==window.mxLanguages)for(var lang in window.mxLanguages=[],mxLanguageMap)"en"!=lang&&window.mxLanguages.push(lang);function setCurrentXml(a,n){null!=window.parent&&null!=window.parent.openFile&&window.parent.openFile.setData(a,n)}"1"==urlParams.extAuth&&/((iPhone|iPod|iPad).*AppleWebKit(?!.*Version)|; wv)/i.test(navigator.userAgent)&&(urlParams.gapi="0",urlParams.noDevice="1","1"!=urlParams.lightbox&&(urlParams.lightbox="1",urlParams.layers="1",urlParams.viewerOnlyMsg="1")),window.location.hostname==DRAWIO_LIGHTBOX_URL.substring(DRAWIO_LIGHTBOX_URL.indexOf("//")+2)&&(urlParams.lightbox="1"),"1"==urlParams.lightbox&&(urlParams.chrome="0"),"1"==urlParams.embedInline&&(urlParams.embed="1",urlParams.ui="sketch",urlParams.plugins="0",urlParams.proto="json",urlParams.prefetchFonts="1"),window.uiTheme=window.uiTheme||function(){var a=urlParams.ui;if("1"==urlParams.extAuth&&(a="sketch"),null==a&&isLocalStorage&&"undefined"!=typeof JSON&&"1"!=urlParams.lightbox)try{var n=localStorage.getItem(".drawio-config");null!=n&&(a=JSON.parse(n).ui||null)}catch(a){isLocalStorage=!1}try{null==a&&(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<=768&&(null==urlParams.pages&&(urlParams.pages="1"),a="sketch")}catch(a){}return"sketch"==a&&(urlParams.sketch="1",a="min"),a}(),function(){if("undefined"!=typeof JSON&&isLocalStorage)try{var a=localStorage.getItem(".drawio-config"),n=!0;null!=a&&(n=JSON.parse(a).showStartScreen),0==n&&(urlParams.splash="0")}catch(a){}var o=urlParams.export;null!=o&&("http://"!=(o=decodeURIComponent(o)).substring(0,7)&&"https://"!=o.substring(0,8)&&(o="http://"+o),EXPORT_URL=o);var i=urlParams.gitlab;null!=i&&("http://"!=(i=decodeURIComponent(i)).substring(0,7)&&"https://"!=i.substring(0,8)&&(i="http://"+i),DRAWIO_GITLAB_URL=i);var r=urlParams["gitlab-id"];null!=r&&(DRAWIO_GITLAB_ID=r),window.DRAWIO_LOG_URL=window.DRAWIO_LOG_URL||"";var w=window.location.host;if("test.draw.io"!=w){var e,t="diagrams.net",s=w.length-t.length;if(-1!==(e=w.lastIndexOf(t,s))&&e===s)window.DRAWIO_LOG_URL="https://log.diagrams.net";else t="draw.io",s=w.length-t.length,-1!==(e=w.lastIndexOf(t,s))&&e===s&&(window.DRAWIO_LOG_URL="https://log.draw.io")}}(),"1"!=urlParams.offline&&"1"!=urlParams.demo&&"1"!=urlParams.stealth&&"1"!=urlParams.local&&"1"!=urlParams.lockdown||(urlParams.picker="0",urlParams.gapi="0",urlParams.db="0",urlParams.od="0",urlParams.gh="0",urlParams.gl="0",urlParams.tr="0"),"se.diagrams.net"==window.location.hostname&&(urlParams.db="0",urlParams.od="0",urlParams.gh="0",urlParams.gl="0",urlParams.tr="0",urlParams.plugins="0",urlParams.mode="google",urlParams.lockdown="1",window.DRAWIO_GOOGLE_APP_ID=window.DRAWIO_GOOGLE_APP_ID||"184079235871",window.DRAWIO_GOOGLE_CLIENT_ID=window.DRAWIO_GOOGLE_CLIENT_ID||"184079235871-pjf5nn0lff27lk8qf0770gmffiv9gt61.apps.googleusercontent.com"),"trello"==urlParams.mode&&(urlParams.tr="1"),"embed.diagrams.net"==window.location.hostname&&(urlParams.embed="1"),(null==window.location.hash||window.location.hash.length<=1)&&null!=urlParams.open&&(window.location.hash=urlParams.open);