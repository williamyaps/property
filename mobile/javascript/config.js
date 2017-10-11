	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#5B5F2C";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#5B5F2C";bookConfig.iconColor="#ffffff";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Show";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="No";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="403";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.bgBeginColor="#CBFF97";bookConfig.bgEndColor="#E6FFCC";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.gif";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#D9FFB3";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=3;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2707;;bookConfig.securityType="2";;bookConfig.singlePasswordMD5="231540F74D38AD8BA9B736014E4EB074";;bookConfig.singlePasswordKey="8F45BD2878B9FFE6838678";;bookConfig.excludeFrontPages="0";bookConfig.bookTitle="All William Yap property";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[0].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoAlphaTransitionBanner","annoId":"201712129216999","alpha":"1","location":{"tannoName":"slider1","x":"0.002777777777777778","y":"0.014778689130274143","width":"0.9888888888888889","height":"0.979088154880662","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.image.TAnnoAlphaTransitionBanner","autoBool":"true","selectBtn":"false","duration":"5","Images":[{"imageName":"","url":"./files/pageConfig/secur05.jpg"},{"imageName":"","url":"./files/pageConfig/secur04.jpg"},{"imageName":"","url":"./files/pageConfig/secur03.jpg"},{"imageName":"","url":"./files/pageConfig/secur02.jpg"},{"imageName":"","url":"./files/pageConfig/secur01.jpg"}]}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129214979","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.290056","y":"0.154992","width":"0.524083","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2010/11/scanning.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129211026","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.290056","y":"0.18181499999999998","width":"0.841472","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2010/12/beauty-of-japan-keindahan-kota-jepang-i.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129214057","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link3","x":"0.290056","y":"0.20863799999999996","width":"0.098","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2010/12/jepun2.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129218093","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link4","x":"0.290056","y":"0.235461","width":"0.276","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2010/12/new-year-2011.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129214501","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link5","x":"0.290056","y":"0.262285","width":"0.285","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/01/hari-kematian-internet.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129211855","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link6","x":"0.290056","y":"0.289108","width":"0.155","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/02/new-shaolin.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129219861","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link7","x":"0.290056","y":"0.315931","width":"0.286","height":"0.02311","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/02/chinese-calender-2011.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129214254","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link8","x":"0.290056","y":"0.34281","width":"0.408417","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/06/tragic-fate-of-school-children.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129212175","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link9","x":"0.290056","y":"0.369633","width":"0.545417","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/06/travel-kota-kota-paling-berbahaya-di.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129217173","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link10","x":"0.290056","y":"0.396457","width":"0.38108299999999995","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/06/perjalanan-terbaik-untuk-2011.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129217925","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link11","x":"0.290056","y":"0.42328000000000005","width":"0.6567500000000001","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/06/8-tempat-menarik-di-cina-yang-bukan.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129213869","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link12","x":"0.290056","y":"0.4501029999999999","width":"0.316667","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/07/awalan-no-gsm-indonesia.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129213818","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link13","x":"0.290056","y":"0.47692700000000005","width":"0.11900000000000001","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/07/tujuan-pesan-ketik-pesan-anda-disini.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129216595","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link14","x":"0.290056","y":"0.50375","width":"0.44241699999999995","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/07/cara-menghentikan-billing-ecafepro.html","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129215551","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link15","x":"0.290056","y":"0.53061","width":"0.263333","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2011/07/cara-kerja-keylogger.html","linkTarget":"Blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201712129217702","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0","y":"0.18181499999999998","width":"0.131528","height":"0.023054999999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"541.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://williamyaps.blogspot.com/2010/12/beauty-of-japan-keindahan-kota-jepang-i.html","linkTarget":"Blank"}}]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
