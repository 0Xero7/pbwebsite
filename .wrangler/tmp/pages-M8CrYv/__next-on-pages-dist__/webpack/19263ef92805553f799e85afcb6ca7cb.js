var M={},yi=(vi,xi,ki)=>(M.__chunk_892=()=>{},M.__chunk_6478=(C,j,k)=>{var m;(()=>{var O={226:function(T,S){(function(h,u){"use strict";var $="function",q="undefined",X="object",B="string",ai="major",e="model",r="name",i="type",o="vendor",a="version",x="architecture",R="console",b="mobile",s="tablet",f="smarttv",z="wearable",J="embedded",G="Amazon",U="Apple",ti="ASUS",ni="BlackBerry",A="Browser",V="Chrome",D="Firefox",W="Google",si="Huawei",K="Microsoft",bi="Motorola",F="Opera",Q="Samsung",li="Sharp",I="Sony",Y="Xiaomi",ii="Zebra",wi="Facebook",di="Chromium OS",ci="Mac OS",gi=function(l,d){var n={};for(var c in l)d[c]&&d[c].length%2==0?n[c]=d[c].concat(l[c]):n[c]=l[c];return n},Z=function(l){for(var d={},n=0;n<l.length;n++)d[l[n].toUpperCase()]=l[n];return d},ui=function(l,d){return typeof l===B&&P(d).indexOf(P(l))!==-1},P=function(l){return l.toLowerCase()},ei=function(l,d){if(typeof l===B)return l=l.replace(/^\s\s*/,""),typeof d===q?l:l.substring(0,350)},L=function(l,d){for(var n,c,y,w,_,t,v=0;v<d.length&&!_;){var ri=d[v],hi=d[v+1];for(n=c=0;n<ri.length&&!_&&ri[n];)if(_=ri[n++].exec(l))for(y=0;y<hi.length;y++)t=_[++c],typeof(w=hi[y])===X&&w.length>0?w.length===2?typeof w[1]==$?this[w[0]]=w[1].call(this,t):this[w[0]]=w[1]:w.length===3?typeof w[1]!==$||w[1].exec&&w[1].test?this[w[0]]=t?t.replace(w[1],w[2]):void 0:this[w[0]]=t?w[1].call(this,t,w[2]):void 0:w.length===4&&(this[w[0]]=t?w[3].call(this,t.replace(w[1],w[2])):void 0):this[w]=t||u;v+=2}},oi=function(l,d){for(var n in d)if(typeof d[n]===X&&d[n].length>0){for(var c=0;c<d[n].length;c++)if(ui(d[n][c],l))return n==="?"?u:n}else if(ui(d[n],l))return n==="?"?u:n;return l},mi={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},pi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[a,[r,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[a,[r,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[r,a],[/opios[\/ ]+([\w\.]+)/i],[a,[r,F+" Mini"]],[/\bopr\/([\w\.]+)/i],[a,[r,F]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[r,a],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[a,[r,"UC"+A]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[a,[r,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[a,[r,"WeChat"]],[/konqueror\/([\w\.]+)/i],[a,[r,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[a,[r,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[a,[r,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[r,/(.+)/,"$1 Secure "+A],a],[/\bfocus\/([\w\.]+)/i],[a,[r,D+" Focus"]],[/\bopt\/([\w\.]+)/i],[a,[r,F+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[a,[r,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[a,[r,"Dolphin"]],[/coast\/([\w\.]+)/i],[a,[r,F+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[a,[r,"MIUI "+A]],[/fxios\/([-\w\.]+)/i],[a,[r,D]],[/\bqihu|(qi?ho?o?|360)browser/i],[[r,"360 "+A]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[r,/(.+)/,"$1 "+A],a],[/(comodo_dragon)\/([\w\.]+)/i],[[r,/_/g," "],a],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[r,a],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[r],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[r,wi],a],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[r,a],[/\bgsa\/([\w\.]+) .*safari\//i],[a,[r,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[a,[r,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[a,[r,V+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[r,V+" WebView"],a],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[a,[r,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[r,a],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[a,[r,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[a,r],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[r,[a,oi,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[r,a],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[r,"Netscape"],a],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[a,[r,D+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[r,a],[/(cobalt)\/([\w\.]+)/i],[r,[a,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[x,"amd64"]],[/(ia32(?=;))/i],[[x,P]],[/((?:i[346]|x)86)[;\)]/i],[[x,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[x,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[x,"armhf"]],[/windows (ce|mobile); ppc;/i],[[x,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[x,/ower/,"",P]],[/(sun4\w)[;\)]/i],[[x,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[x,P]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[o,Q],[i,s]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[e,[o,Q],[i,b]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[e,[o,U],[i,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[o,U],[i,s]],[/(macintosh);/i],[e,[o,U]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[o,li],[i,b]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[e,[o,si],[i,s]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[o,si],[i,b]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[e,/_/g," "],[o,Y],[i,b]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[e,/_/g," "],[o,Y],[i,s]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[o,"OPPO"],[i,b]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[o,"Vivo"],[i,b]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[e,[o,"Realme"],[i,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[o,bi],[i,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[o,bi],[i,s]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[o,"LG"],[i,s]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[o,"LG"],[i,b]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[e,[o,"Lenovo"],[i,s]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[e,/_/g," "],[o,"Nokia"],[i,b]],[/(pixel c)\b/i],[e,[o,W],[i,s]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[o,W],[i,b]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[o,I],[i,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[o,I],[i,s]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[o,"OnePlus"],[i,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[o,G],[i,s]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[o,G],[i,b]],[/(playbook);[-\w\),; ]+(rim)/i],[e,o,[i,s]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[o,ni],[i,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[o,ti],[i,s]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[o,ti],[i,b]],[/(nexus 9)/i],[e,[o,"HTC"],[i,s]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[o,[e,/_/g," "],[i,b]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[o,"Acer"],[i,s]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[o,"Meizu"],[i,b]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,e,[i,b]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[o,e,[i,s]],[/(surface duo)/i],[e,[o,K],[i,s]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[o,"Fairphone"],[i,b]],[/(u304aa)/i],[e,[o,"AT&T"],[i,b]],[/\bsie-(\w*)/i],[e,[o,"Siemens"],[i,b]],[/\b(rct\w+) b/i],[e,[o,"RCA"],[i,s]],[/\b(venue[\d ]{2,7}) b/i],[e,[o,"Dell"],[i,s]],[/\b(q(?:mv|ta)\w+) b/i],[e,[o,"Verizon"],[i,s]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[e,[o,"Barnes & Noble"],[i,s]],[/\b(tm\d{3}\w+) b/i],[e,[o,"NuVision"],[i,s]],[/\b(k88) b/i],[e,[o,"ZTE"],[i,s]],[/\b(nx\d{3}j) b/i],[e,[o,"ZTE"],[i,b]],[/\b(gen\d{3}) b.+49h/i],[e,[o,"Swiss"],[i,b]],[/\b(zur\d{3}) b/i],[e,[o,"Swiss"],[i,s]],[/\b((zeki)?tb.*\b) b/i],[e,[o,"Zeki"],[i,s]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[o,"Dragon Touch"],e,[i,s]],[/\b(ns-?\w{0,9}) b/i],[e,[o,"Insignia"],[i,s]],[/\b((nxa|next)-?\w{0,9}) b/i],[e,[o,"NextBook"],[i,s]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[o,"Voice"],e,[i,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[o,"LvTel"],e,[i,b]],[/\b(ph-1) /i],[e,[o,"Essential"],[i,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[e,[o,"Envizen"],[i,s]],[/\b(trio[-\w\. ]+) b/i],[e,[o,"MachSpeed"],[i,s]],[/\btu_(1491) b/i],[e,[o,"Rotor"],[i,s]],[/(shield[\w ]+) b/i],[e,[o,"Nvidia"],[i,s]],[/(sprint) (\w+)/i],[o,e,[i,b]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[o,K],[i,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[o,ii],[i,s]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[o,ii],[i,b]],[/smart-tv.+(samsung)/i],[o,[i,f]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[o,Q],[i,f]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,"LG"],[i,f]],[/(apple) ?tv/i],[o,[e,U+" TV"],[i,f]],[/crkey/i],[[e,V+"cast"],[o,W],[i,f]],[/droid.+aft(\w)( bui|\))/i],[e,[o,G],[i,f]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[o,li],[i,f]],[/(bravia[\w ]+)( bui|\))/i],[e,[o,I],[i,f]],[/(mitv-\w{5}) bui/i],[e,[o,Y],[i,f]],[/Hbbtv.*(technisat) (.*);/i],[o,e,[i,f]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[o,ei],[e,ei],[i,f]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,f]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[o,e,[i,R]],[/droid.+; (shield) bui/i],[e,[o,"Nvidia"],[i,R]],[/(playstation [345portablevi]+)/i],[e,[o,I],[i,R]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[o,K],[i,R]],[/((pebble))app/i],[o,e,[i,z]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[o,U],[i,z]],[/droid.+; (glass) \d/i],[e,[o,W],[i,z]],[/droid.+; (wt63?0{2,3})\)/i],[e,[o,ii],[i,z]],[/(quest( 2| pro)?)/i],[e,[o,wi],[i,z]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[i,J]],[/(aeobc)\b/i],[e,[o,G],[i,J]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[e,[i,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[e,[i,s]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,s]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,b]],[/(android[-\w\. ]{0,9});.+buil/i],[e,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[a,[r,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[a,[r,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[r,a],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[a,r]],os:[[/microsoft (windows) (vista|xp)/i],[r,a],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[r,[a,oi,mi]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[r,"Windows"],[a,oi,mi]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[a,/_/g,"."],[r,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[r,ci],[a,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[a,r],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[r,a],[/\(bb(10);/i],[a,[r,ni]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[a,[r,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[a,[r,D+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[a,[r,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[a,[r,"watchOS"]],[/crkey\/([\d\.]+)/i],[a,[r,V+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[r,di],a],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[r,a],[/(sunos) ?([\w\.\d]*)/i],[[r,"Solaris"],a],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[r,a]]},g=function(l,d){if(typeof l===X&&(d=l,l=u),!(this instanceof g))return new g(l,d).getResult();var n=typeof h!==q&&h.navigator?h.navigator:u,c=l||(n&&n.userAgent?n.userAgent:""),y=n&&n.userAgentData?n.userAgentData:u,w=d?gi(pi,d):pi,_=n&&n.userAgent==c;return this.getBrowser=function(){var t,v={};return v[r]=u,v[a]=u,L.call(v,c,w.browser),v[ai]=typeof(t=v[a])===B?t.replace(/[^\d\.]/g,"").split(".")[0]:u,_&&n&&n.brave&&typeof n.brave.isBrave==$&&(v[r]="Brave"),v},this.getCPU=function(){var t={};return t[x]=u,L.call(t,c,w.cpu),t},this.getDevice=function(){var t={};return t[o]=u,t[e]=u,t[i]=u,L.call(t,c,w.device),_&&!t[i]&&y&&y.mobile&&(t[i]=b),_&&t[e]=="Macintosh"&&n&&typeof n.standalone!==q&&n.maxTouchPoints&&n.maxTouchPoints>2&&(t[e]="iPad",t[i]=s),t},this.getEngine=function(){var t={};return t[r]=u,t[a]=u,L.call(t,c,w.engine),t},this.getOS=function(){var t={};return t[r]=u,t[a]=u,L.call(t,c,w.os),_&&!t[r]&&y&&y.platform!="Unknown"&&(t[r]=y.platform.replace(/chrome os/i,di).replace(/macos/i,ci)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return c},this.setUA=function(t){return c=typeof t===B&&t.length>350?ei(t,350):t,this},this.setUA(c),this};g.VERSION="1.0.35",g.BROWSER=Z([r,a,ai]),g.CPU=Z([x]),g.DEVICE=Z([e,o,i,R,b,f,s,z,J]),g.ENGINE=g.OS=Z([r,a]),typeof S!==q?(T.exports&&(S=T.exports=g),S.UAParser=g):k.amdO?(m=function(){return g}.call(j,k,j,C))!==void 0&&(C.exports=m):typeof h!==q&&(h.UAParser=g);var E=typeof h!==q&&(h.jQuery||h.Zepto);if(E&&!E.ua){var H=new g;E.ua=H.getResult(),E.ua.get=function(){return H.getUA()},E.ua.set=function(l){H.setUA(l);var d=H.getResult();for(var n in d)E.ua[n]=d[n]}}})(typeof window=="object"?window:this)}},N={};function p(T){var S=N[T];if(S!==void 0)return S.exports;var h=N[T]={exports:{}},u=!0;try{O[T].call(h.exports,h,h.exports,p),u=!1}finally{u&&delete N[T]}return h.exports}p.ab="//";var fi=p(226);C.exports=fi})()},M.__chunk_3481=(C,j,k)=>{"use strict";k.d(j,{z:()=>N,e:()=>O}),k(3857);var m=k(1361);k(6478),typeof URLPattern>"u"||URLPattern;let O=p=>(p instanceof Error?p.message:p&&typeof p=="object"&&"message"in p&&String(p.message),"Something went wrong! Try refreshing and submitting again.");async function N(){try{let p=await fetch("/api/csrf-token",{method:"GET",credentials:"include"});return p.ok?(await p.json()).csrfToken:m.x.json({message:"Failed to fetch CSRF token"})}catch(p){return console.error("Error fetching CSRF token:",p),null}}},M.__chunk_4361=(C,j,k)=>{"use strict";k.d(j,{Z:()=>O});var m=k(5486);function O(N){return(0,m.jsx)("div",{className:"w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8",children:(0,m.jsxs)("div",{className:"flex flex-col p-6 sm:p-8 rounded-lg shadow-lg bg-black bg-opacity-30 backdrop-blur-lg border border-green-500",children:[(0,m.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,m.jsx)("div",{className:"inline-block p-4 bg-green-500 rounded-full animate-bounce",children:(0,m.jsx)("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,m.jsx)("h2",{className:"mt-4 text-2xl sm:text-3xl font-bold text-green-500",children:"Registration Successful!"}),(0,m.jsx)("p",{className:"mt-4 text-lg text-gray-300 leading-relaxed",children:N.message}),(0,m.jsx)("p",{className:"mt-2 text-md text-gray-400 leading-relaxed",children:"Join the WhatsApp Group for further updates immediately."})]}),(0,m.jsx)("div",{className:"flex mx-auto items-center mt-6",children:(0,m.jsx)("a",{href:N.joinLink,className:"w-full",children:(0,m.jsx)("button",{className:"w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50",children:"Join WhatsApp Group!"})})})]})})}},M);export{yi as __getNamedExports};
