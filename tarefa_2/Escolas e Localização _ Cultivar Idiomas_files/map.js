google.maps.__gjsload__('map', function(_){var Jx=function(a,b){var c=Math.pow(2,b.$);b=new _.kc(a.size.b*b.T/c,a.size.f*(.5+(b.U/c-.5)/a.f));c=b.b;var d=b.f;switch((360+-1*a.heading)%360){case 90:c=b.f;d=a.size.f-b.b;break;case 180:c=a.size.b-b.b;d=a.size.f-b.f;break;case 270:c=a.size.b-b.f,d=b.b}return new _.kc(c,d)},Kx=function(a,b){a=_.Pd(new _.Kj(a.b.data[7]),0).slice();return _.Rj(a,function(a){return a+"deg="+b+"&"})},Lx=function(a){var b=Math.round(1E7*a);return 0>a?b+4294967296:b},Nx=function(a){this.data=a||[]},Px=function(a,b){var c=
a.x,d=a.y;switch(b){case 90:a.x=d;a.y=256-c;break;case 180:a.x=256-c;a.y=256-d;break;case 270:a.x=256-d,a.y=c}},Rx=function(a,b){this.j=b||new _.Jf;this.b=new _.Wc(a%360,45);this.l=new _.z(0,0);this.f=!0},Tx=function(a){return _.Kw.fromPointToLatLng(new _.z(a.b,a.f),void 0)},Ux=function(a,b){return new _.Lo([a],b)},Vx=function(a,b,c){return new _.Lo([a,b],c)},Wx=_.ra(".gm-style-pbc{transition:opacity ease-in-out;background-color:rgba(0,0,0,0.45);text-align:center}.gm-style-pbt{font-size:22px;color:white;font-family:Roboto,Arial,sans-serif;position:relative;margin:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}\n"),
Xx=function(a){this.b=a;this.j=_.Y("p",a);this.l=0;_.Xl(a,"gm-style-pbc");_.Xl(this.j,"gm-style-pbt");_.Vm(Wx);a.style.transitionDuration="0";a.style.opacity=0;_.wm(a)},Yx=function(a,b){var c=2==_.X.b?"Use \u2318 e role a tela simultaneamente para aplicar zoom no mapa":"Pressione Ctrl e role a tela simultaneamente para aplicar zoom no mapa";a.j.textContent=(void 0===b?0:b)?c:"Use dois dedos para mover o mapa";a.b.style.transitionDuration="0.3s";a.b.style.opacity=1},Zx=function(a){a.b.style.transitionDuration=
"0.8s";a.b.style.opacity=0},$x=function(a){this.b=new _.Rf;this.f=a},ay=function(a,b){return(a.get("featureRects")||[]).some(function(a){return a.contains(b)})},by=function(a,b){if(!b)return 0;var c=0,d=a.f,e=a.b;b=_.Ea(b);for(var f=b.next();!f.done;f=b.next()){var g=f.value;if(a.intersects(g)){f=g.f;var h=g.b;if(_.wj(g,a))return 1;g=e.contains(h.b)&&h.contains(e.b)&&!e.X(h)?_.uc(h.b,e.f)+_.uc(e.b,h.f):_.uc(e.contains(h.b)?h.b:e.b,e.contains(h.f)?h.f:e.f);c+=g*(Math.min(d.f,f.f)-Math.max(d.b,f.b))}}return c/=
(d.isEmpty()?0:d.f-d.b)*_.vc(e)},cy=function(){return function(a,b){if(a&&b)return.9<=by(a,b)}},dy=function(){var a=!1;return function(b,c){if(b&&c){if(.999999>by(b,c))return a=!1;b=_.Tk(b,(_.Zw-1)/2);return.999999<by(b,c)?a=!0:a}}},ey=function(a,b,c,d,e,f,g){var h=new _.ru;_.su(h,a,b);null!=c&&_.vu(h,c,0,d);g&&g.forEach(function(a){return _.yu(h,a,c)});e&&_.u(e,function(a){return _.xu(h,a)});f&&_.zu(h,f);return h.b},fy=function(a,b,c,d,e,f,g,h,l){var n=[];if(e){var q=new _.sk;q.data[0]=e.type;if(e.params)for(var r in e.params){var v=
_.tk(q);_.rk(v,r);var C=e.params[r];C&&(v.data[1]=C)}n.push(q)}e=new _.sk;e.data[0]=37;_.rk(_.tk(e),"smartmaps");n.push(e);return{Aa:ey(a,b,c,d,n,f,l),Ib:g,scale:h}},gy=function(a,b,c,d,e,f,g,h,l,n,q,r,v,C){_.Sg.call(this);this.B=a;this.l=b;this.projection=c;this.maxZoom=d;this.tileSize=new _.D(256,256);this.name=e;this.alt=f;this.G=g;this.heading=C;this.F=_.x(C);this.Jc=h;this.__gmsd=l;this.ta=n;this.f=null;this.D=q;this.m=r;this.C=v;this.Oc=!0;this.j=_.vd({})},hy=function(a,b,c,d,e){gy.call(this,
a.B,a.l,a.projection,a.maxZoom,a.name,a.alt,a.G,a.Jc,a.__gmsd,a.ta,a.D,a.m,a.C,a.heading);this.l&&this.j.set(fy(this.m,this.C,this.ta,this.D,this.__gmsd,b,c,d,e))},iy=function(a,b,c,d){d=void 0===d?{}:d;this.Z=a;this.f=b;this.b=c.slice(0);this.j=d.za||_.Ja},jy=function(a){var b=this;this.tileSize=a[0].tileSize;this.Ca=a[0].Ca;this.Ua=a[0].Ua;this.b=a;this.rb=a[0].rb;_.Sj(a,function(a){var c=a.tileSize,e=b.tileSize;return c.Na==e.Na&&c.Oa==e.Oa&&a.Ca==b.Ca})},ly=function(a,b,c,d,e,f,g,h){this.Z=a.Z;
this.b=a;this.m=_.Rj(b||[],function(a){return a.replace(/&$/,"")});this.F=c;this.B=d;this.j=e;this.D=f;this.f=g;this.C=h||null;this.l=!1;ky(this)},ky=function(a){if(a.f){var b=Tx(Jx(a.D,{T:a.Z.T+.5,U:a.Z.U+.5,$:a.Z.$}));if(!ay(a.f,b)){a.l=!0;a.f.b.addListenerOnce(function(){return ky(a)});return}}a.l=!1;b=2==a.j||4==a.j?a.j:1;b=Math.min(1<<a.Z.$,b);for(var c=a.F&&4!=b,d=a.Z.$,e=b;1<e;e/=2)d--;if(e=a.B({T:a.Z.T,U:a.Z.U,$:a.Z.$}))d=_.Ul(_.Ul(_.Ul(new _.Ol(_.Bu(a.m,e)),"x",e.T),"y",e.U),"z",d),1!=b&&
_.Ul(d,"w",256/b),c&&(b*=2),1!=b&&_.Ul(d,"scale",b),a.b.setUrl(d.toString(),a.C)},my=function(a,b,c,d,e,f,g,h,l){this.tileSize={Na:b.width,Oa:b.height};this.m=c;this.b=a||[];this.C=b;this.l=d;this.D=e;this.f=f;this.B=g;this.Ca=!0;this.rb=1;this.Ua=h;this.j=l},ny=function(a,b){this.tileSize=a.tileSize;this.Ca=!0;this.f=a;this.b=b;this.Ua=_.$i;this.rb=1},oy=function(a,b,c,d){var e=_.Nj(),f=_.zf(_.R);this.H=b;this.b=c;this.j=new _.Jf;this.f=_.wf(f);this.l=_.xf(f);this.B=_.N(e,14);this.m=_.N(e,15);this.C=
new _.ou(a,e,f);this.D=d},py=function(a,b,c,d){d=void 0===d?{Ga:null}:d;var e=_.x(d.heading),f=("hybrid"==b&&!e||"terrain"==b||"roadmap"==b)&&0!=d.xk,g=d.Ga;return"satellite"==b?(b=e?Kx(a.C,d.heading||0):_.Pd(new _.Kj(a.C.b.data[1]),0).slice(),c=new _.If(new _.kc(256,256),e?45:0,d.heading||0),new my(b,new _.D(256,256),"Sentimos muito, mas n\u00e3o temos imagens daqui.",window.document,f&&1<_.Uk(),_.Ju(d.heading),g&&g.scale||null,c,e?a.D:null)):new _.Iu(_.pu(a.C),new _.D(256,256),"Sentimos muito, mas n\u00e3o temos imagens daqui.",
window.document,f&&1<_.Uk(),_.Ju(d.heading),c,g,d.heading)},qy=function(a){function b(a,b){if(!b||!b.Aa)return b;var c=[];_.Cj(c,b.Aa.data);c=new _.Ft(c);_.st(_.lu(c)).data[0]=a;return{scale:b.scale,Ib:b.Ib,Aa:c}}return function(c){var d=py(a,"roadmap",a.b,{xk:!1,Ga:b(3,c.Ga().get())}),e=py(a,"roadmap",a.b,{Ga:b(18,c.Ga().get())});d=new jy([d,e]);c=py(a,"roadmap",a.b,{Ga:c.Ga().get()});return new ny(d,c)}},ry=function(a){return function(b){var c=b.Ga().get(),d=py(a,"satellite",null,{heading:b.heading,
Ga:c});b=py(a,"hybrid",a.b,{heading:b.heading,Ga:c});return new jy([d,b])}},sy=function(a,b){return new gy(ry(a),a.b,_.Ia(b)?new Rx(b):a.j,_.Ia(b)?21:22,"H\u00edbrido","Mostrar imagens com nomes de rua",_.Dw.hybrid,"m@"+a.B,{type:68,params:{set:"RoadmapSatellite"}},"hybrid",a.m,a.f,a.l,b)},ty=function(a){return function(b){return py(a,"satellite",null,{heading:b.heading,Ga:b.Ga().get()})}},uy=function(a,b){var c=_.Ia(b);return new gy(ty(a),null,_.Ia(b)?new Rx(b):a.j,c?21:22,"Sat\u00e9lite","Mostrar imagens de sat\u00e9lite",
c?"a":_.Dw.satellite,null,null,"satellite",a.m,a.f,a.l,b)},vy=function(a,b){return function(c){return py(a,b,a.b,{Ga:c.Ga().get()})}},wy=function(a,b,c){c=void 0===c?{}:c;var d=[0,90,180,270];if("hybrid"==b)for(b=sy(a),b.f={},d=_.Ea(d),c=d.next();!c.done;c=d.next())c=c.value,b.f[c]=sy(a,c);else if("satellite"==b)for(b=uy(a),b.f={},d=_.Ea(d),c=d.next();!c.done;c=d.next())c=c.value,b.f[c]=uy(a,c);else b="roadmap"==b&&1<_.Uk()&&c.al?new gy(qy(a),a.b,a.j,22,"Mapa","Mostrar mapa de ruas",_.Dw.roadmap,
"m@"+a.B,{type:68,params:{set:"Roadmap"}},"roadmap",a.m,a.f,a.l,void 0):"terrain"==b?new gy(vy(a,"terrain"),a.b,a.j,21,"Relevo","Mostrar mapa de ruas com relevo",_.Dw.terrain,"r@"+a.B,{type:68,params:{set:"Terrain"}},"terrain",a.m,a.f,a.l,void 0):new gy(vy(a,"roadmap"),a.b,a.j,22,"Mapa","Mostrar mapa de ruas",_.Dw.roadmap,"m@"+a.B,{type:68},"roadmap",a.m,a.f,a.l,void 0);return b},xy=_.pa("b"),yy=function(a,b,c,d){function e(){if(!g.b&&!g.f){var n=c.get(),q=b.get("center"),r=b.get("zoom");null!=r&&
q&&n&&n.width&&n.height&&(c.removeListener(e),h.remove(),l.remove(),d.size=n.width+"x"+n.height,d.hadviewport=f,g.f=q,g.m=r,g.b=_.Df("map2",{startTime:f?a:void 0,cn:d}))}}this.H=b;this.j={};this.m=this.f=this.b=null;this.l=!1;var f=!0,g=this,h=b.addListener("center_changed",e),l=b.addListener("zoom_changed",e);c.addListener(e);e();f=!1},zy=function(a,b,c){!a.b||a.j[b]||a.l||(a.f.X(a.H.get("center"))&&a.m==a.H.get("zoom")?(a.j[b]=!0,c.call(a)):a.l=!0)},Ay=function(a,b){zy(a,"staticmap",function(){var a=
{staticmap:b};zy(this,"firstpixel",function(){a.firstpixel=b});zy(this,"allpixels",function(){a.allpixels=b});_.Bf(this.b,a)})},Cy=function(a){var b={};b.firstmap=By;b.hdpi=1<_.Uk();b.mob=!_.X.D;b.staticmap=a;return b},Dy=function(a,b,c,d){var e=new yy(a,b,c,Cy(!!d));By=!1;d&&_.zj(d,function h(a){a&&(d.removeListener(h),Ay(e,a))});_.G.addListenerOnce(b,"tilesloaded",(0,_.p)(e.C,e));return e},Ey=function(){var a,b=new _.K;b.bounds_changed=function(){var c=b.get("bounds");c?a&&_.tj(a,c)||(a=_.rc(c.I-
512,c.J-512,c.K+512,c.L+512),b.set("boundsQ",a)):b.set("boundsQ",c)};return b},Fy=function(a){var b=window.document.createElement("div");_.om(b);_.sm(b,0);a.appendChild(b);this.set("div",b)},Gy=function(a,b){var c=a.__gm;b=new Fy(b);b.bindTo("center",a);b.bindTo("projectionBounds",c);b.bindTo("offset",c);return b},Hy=function(a,b){this.j=a;this.l=b},Iy=function(a,b,c,d){return d?new Hy(a,function(){return b}):_.wg[23]?new Hy(a,function(a){var d=c.get("scale");return 2==d||4==d?b:a}):a},My=function(a,
b,c,d,e,f,g,h,l,n){this.H=a;this.m=g;this.aa=e;this.j=f;this.F=h;this.f=n;this.G=c;this.b=b;this.C=d;this.B=this.l=0;_.G.W(this.b,"contextmenu",this,this.bg);a=new Xx(this.j.get("panBlock"));Jy(this,a);a={cm:_.Qj(_.nn,this.H),Ra:this.j.get("eventCapturer"),mc:a,mode:this.f};l=new _.Mu(this.b,!0,a,l);Ky(this,l);Ly(this,l);l.bindTo("draggable",this);l.bindTo("draggingCursor",this);l.bindTo("draggableCursor",this);_.G.forward(this.m,"forceredraw",this.H);_.G.forward(this.m,"tilesloaded",this.H)},Ny=
function(a){var b=a.get("zoom");var c=b;var d=a.get("zoomRange");d&&(c=_.tv(d,c));b!=c&&a.set("zoom",c)},Ky=function(a,b){_.G.bind(b,"click",a,a.aj);_.G.bind(b,"dblclick",a,a.ym);_.G.bind(b,"mousedown",a,a.bj);_.u(["mouseover","mousemove","mouseout","mousedown","mouseup"],function(c){_.G.addListener(b,c,(0,_.p)(a.fe,a,c))});var c=new _.Wv(b);c.bindTo("disabled",a,"disablePanMomentum");var d=a.j.get("mouseEventTarget");_.u(["movestart","move","moveend"],function(b){_.G.addListener(d,b,function(c){Oy(a,
b,c)});_.G.addListener(c,b,function(c){Oy(a,b,c)})});_.G.forward(b,"mousedown",a.m);_.G.addListener(d,"mousewheel",(0,_.p)(a.qe,a))},Oy=function(a,b,c){c&&(c.latLng=a.aa.fromContainerPixelToLatLng(c.ea));_.G.trigger(a.j,b,c);c&&_.gq(c)||_.G.trigger(a.m,b,c)},Ly=function(a,b){_.G.addListener(b,"movestart",(0,_.p)(function(){_.G.trigger(this.H,"dragstart")},a));_.G.addListener(b,"move",(0,_.p)(function(){_.G.trigger(this.H,"drag")},a));_.G.addListener(b,"moveend",(0,_.p)(function(){_.G.trigger(this.H,
"dragend")},a))},Jy=function(a,b){var c=new _.aw(a.b);_.G.bind(c,"mousewheel",a,a.qe);_.yq(c,"scrollRequiresCtrlKey",Ux(a.f,function(a){return"cooperative"==a?b:null}));_.yq(c,"enabled",Vx(a.f,_.Aq(a,"scrollwheel"),function(a,b){return null!=b?!!b:"none"!=a}))},Py=function(a,b,c,d,e,f,g,h){var l=c.__gm,n=new My(c,a,b,!!c.Y,e,l,d,g,(0,_.p)(f.b,f),h);n.bindTo("draggingCursor",c);n.bindTo("draggableMap",c,"draggable");_.G.addListener(c,"zoom_changed",function(){n.get("zoom")!=c.get("zoom")&&n.set("zoom",
c.get("zoom"))});n.set("zoom",c.get("zoom"));n.bindTo("disablePanMomentum",c);n.bindTo("projectionTopLeft",e);n.bindTo("draggableCursor",l,"cursor");d.bindTo("zoom",n);e.bindTo("zoom",n);return n},Qy=function(a,b){_.G.Sa(window,"resize",a);_.G.forward(a,"resize",b);_.G.bind(b,"resize",this,this.b);this.f=b;this.b()},Ty=function(a,b){this.j=a;this.f=b;this.P=[_.G.bind(b,"insert_at",this,this.l),_.G.bind(b,"remove_at",this,this.m),_.G.bind(b,"set_at",this,this.B)];this.b=[];var c=this;this.f.forEach(function(a){a=
Ry(c,a);c.b.push(a)});Sy(this)},Sy=function(a){_.u(a.b,function(a,c){a.set("zIndex",c)})},Ry=function(a,b){var c=new _.Tu(a.j,null);c.bindTo("size",a);c.bindTo("zoom",a);c.bindTo("offset",a);c.bindTo("projectionBounds",a);_.Wu(c,b);c.listener=b&&_.G.forward(c,"tilesloaded",b);return c},Uy=function(a){a.release();a.listener&&(_.G.removeListener(a.listener),delete a.listener)},Vy=function(a,b){this.j=a;this.f=b;_.G.bind(this,"tilesloaded",this,this.l);this.b=null},Wy=function(a){a.b&&(a.b.ka(),a.b.unbindAll(),
a.b=null)},Xy=function(a){a.b||(a.b=new Ty(a.j,a.f),a.b.bindTo("size",a),a.b.bindTo("zoom",a),a.b.bindTo("offset",a),a.b.bindTo("projectionBounds",a))},Yy=function(a){switch(a.ta){case "roadmap":return"Otm";case "satellite":return"Otk";case "hybrid":return"Oth";case "terrain":return"Otr"}return a instanceof _.Tg?"Ots":"Oto"},Zy=function(a,b){if(!a)return null;var c=!0,d=a.tileSize,e=a.Ca;_.u(b,function(a){if(!a)return null;c=c&&d.Na==a.tileSize.width&&d.Oa==a.tileSize.height&&e==a.Oc});if(!c)return null;
if(0==b.length)return a;var f=[];_.u(b,function(a){if(!a)return null;f.push(a instanceof _.Sg?a.b():new _.Qu(a))});return new jy([a].concat(f))},$y=function(a,b){var c=null,d=null,e=null;return function(f,g,h){if(h)return null;if(d==f&&e==g)return c;d=f;e=g;_.u(f,function(b){b&&a(Yy(b))});c=null;g instanceof _.Sg?c=g.b():g&&(c=new _.Qu(g));(f=Zy(c,f))?(c=f,b&&Wy(b)):b&&Xy(b);return c}},az=function(a,b,c,d,e){this.f=a;var f=_.Aq(this,"apistyle"),g=_.Aq(this,"authUser"),h=_.Aq(this,"baseMapType"),l=
_.Aq(this,"scale"),n=_.Aq(this,"tilt");a=_.Aq(this,"blockingLayerCount");this.b=null;var q=(0,_.p)(this.Fk,this);b=new _.Lo([f,g,b,h,l,n],q);_.yq(this,"tileMapType",b);this.l=_.vd([]);f=(0,_.p)(this.Jn,this,c);_.G.bind(c,"insert_at",this,f);_.G.bind(c,"remove_at",this,f);_.G.bind(c,"set_at",this,f);f();this.B=new _.Lo([this.l,b,a],$y(e,d))},bz=function(a,b){var c=a.__gm,d=a.mapTypes,e=a.__gm;b=new Vy(b,a.overlayMapTypes);b.bindTo("size",e);b.bindTo("zoom",e);b.bindTo("offset",e);b.bindTo("projectionBounds",
e);_.G.forward(a,"tilesloaded",b);d=new az(d,c.b,a.overlayMapTypes,b,_.Qj(_.nn,a));d.bindTo("heading",a);d.bindTo("mapTypeId",a);_.wg[23]&&d.bindTo("scale",a);d.bindTo("apistyle",c);d.bindTo("authUser",c);d.bindTo("tilt",c);d.bindTo("blockingLayerCount",c);return d},cz=_.oa(),hz=function(a){if(!a)return"";var b=[];a=_.Ea(a);for(var c=a.next();!c.done;c=a.next()){var d=c.value,e=d.elementType,f=d.stylers;c=[];d=(d=d.featureType)&&dz[d.toLowerCase()];(d=null!=d?d:null)&&c.push("s.t:"+d);(e=e&&ez[e.toLowerCase()]||
null)&&c.push("s.e:"+e);if(f)for(f=_.Ea(f),d=f.next();!d.done;d=f.next()){a:{e=void 0;d=d.value;for(e in d){var g=d[e],h=e&&fz[e.toLowerCase()]||null;if(h&&(_.x(g)||_.Pb(g)||_.Qb(g))&&g){"color"==e&&gz.test(g)&&(g="#ff"+g.substr(1));e="p."+h+":"+g;break a}}e=void 0}e&&c.push(e)}(c=c.join("|"))&&b.push(c)}b=b.join(",");return 1E3>=b.length?b:""},iz=_.oa(),jz=function(){this.B=new _.Rf;this.l={};this.j={}},lz=function(){kz(this)},kz=function(a){var b=new _.sv(a.get("minZoom")||0,a.get("maxZoom")||30),
c=a.get("mapTypeMinZoom"),d=a.get("mapTypeMaxZoom"),e=a.get("trackerMaxZoom");_.x(c)&&(b.min=Math.max(b.min,c));_.x(e)?b.max=Math.min(b.max,e):_.x(d)&&(b.max=Math.min(b.max,d));a.set("zoomRange",b)},nz=function(a){var b=(b=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection||null)&&b.type;_.nn(a,"Nt",b&&mz[b]||"-na")},oz=function(a,b){function c(c){var d=b.getAt(c);if(d instanceof _.Tg){c=d.get("styles");var f=hz(c);d.b=function(){var b=wy(a,d.f);return(new hy(b,
f,null,null,null)).b()}}}_.G.addListener(b,"insert_at",c);_.G.addListener(b,"set_at",c);b.forEach(function(a,b){return c(b)})},pz=function(a){var b=this;this.b=a;a.addListener(function(){return b.notify("style")})},qz=function(a,b){this.b=a;this.f=b},rz=function(a,b,c){_.Fb(_.Sh,function(d,e){b.set(e,wy(a,e,{al:c}))})},sz=function(a,b){function c(a){switch(a.ta){case "roadmap":return"Tm";case "satellite":return a.F?"Ta":"Tk";case "hybrid":return a.F?"Ta":"Th";case "terrain":return"Tr";default:return"To"}}
_.lk(b,"basemaptype_changed",function(){var d=b.get("baseMapType");d&&_.nn(a,c(d))});var d=a.__gm;_.lk(d,"hascustomstyles_changed",function(){d.get("hasCustomStyles")&&_.nn(a,"Ts")})},tz=function(a){if(a&&_.jm(a.getDiv())&&(_.em()||_.dm())){_.nn(a,"Tdev");var b=window.document.querySelector('meta[name="viewport"]');(b=b&&b.content)&&b.match(/width=device-width/)&&_.nn(a,"Mfp")}},uz=function(a){var b=new _.Ko(_.Qj(_.G.trigger,a,"idle"),300);b.f();_.G.addListener(a,"bounds_changed",(0,_.p)(b.f,b))},
vz=function(){var a=new $x(cy()),b={};b.obliques=new $x(dy());b.report_map_issue=a;return b},wz=function(a){var b=a.get("embedReportOnceLog");if(b){var c=function(){for(;b.getLength();){var c=b.pop();_.nn(a,c)}};_.G.addListener(b,"insert_at",c);c()}else _.G.addListenerOnce(a,"embedreportoncelog_changed",function(){wz(a)})},xz=function(a){var b=a.get("embedFeatureLog");if(b){var c=function(){for(;b.getLength();){var c=b.pop();_.on(a,c)}};_.G.addListener(b,"insert_at",c);c()}else _.G.addListenerOnce(a,
"embedfeaturelog_changed",function(){xz(a)})},yz=_.oa();_.Rf.prototype.b=_.oj(7,function(a){_.qd(this.P,function(b){b(a)})});_.t(Nx,_.M);Nx.prototype.getTile=function(){return new _.tt(this.data[1])};
var fz={hue:"h",saturation:"s",lightness:"l",gamma:"g",invert_lightness:"il",visibility:"v",color:"c",weight:"w"},dz={all:0,administrative:1,"administrative.country":17,"administrative.province":18,"administrative.locality":19,"administrative.neighborhood":20,"administrative.land_parcel":21,poi:2,"poi.business":33,"poi.government":34,"poi.school":35,"poi.medical":36,"poi.attraction":37,"poi.place_of_worship":38,"poi.sports_complex":39,"poi.park":40,road:3,"road.highway":49,"road.highway.controlled_access":785,
"road.arterial":50,"road.local":51,transit:4,"transit.line":65,"transit.station":66,"transit.station.rail":1057,"transit.station.bus":1058,"transit.station.airport":1059,"transit.station.ferry":1060,landscape:5,"landscape.man_made":81,"landscape.natural":82,"landscape.natural.landcover":1313,"landscape.natural.terrain":1314,water:6},ez={all:"",geometry:"g","geometry.fill":"g.f","geometry.stroke":"g.s",labels:"l","labels.icon":"l.i","labels.text":"l.t","labels.text.fill":"l.t.f","labels.text.stroke":"l.t.s"};
Rx.prototype.fromLatLngToPoint=function(a,b){b=this.j.fromLatLngToPoint(a,b);Px(b,this.b.heading());b.y=(b.y-128)/_.Jw+128;return b};Rx.prototype.fromPointToLatLng=function(a,b){var c=this.l;c.x=a.x;c.y=(a.y-128)*_.Jw+128;Px(c,360-this.b.heading());return this.j.fromPointToLatLng(c,b)};Rx.prototype.getPov=_.qa("b");
Xx.prototype.f=function(a){var b=this;(0,window.clearTimeout)(this.l);1==a?(Yx(this,!0),this.l=(0,window.setTimeout)(function(){return Zx(b)},1500)):2==a?Yx(this,!1):3==a?Zx(this):4==a&&(this.b.style.transitionDuration="0.2s",this.b.style.opacity=0)};_.Oj($x,_.K);$x.prototype.changed=function(a){if("available"!=a){"featureRects"==a&&this.b.b(null);a=this.get("viewport");var b=this.get("featureRects");a=this.f(a,b);null!=a&&a!=this.get("available")&&this.set("available",a)}};_.Oj(gy,_.Sg);
gy.prototype.b=function(){return this.B(this)};gy.prototype.Ga=_.qa("j");_.Oj(hy,gy);iy.prototype.ma=_.qa("f");iy.prototype.lb=function(){return _.Sj(this.b,function(a){return a.lb()})};iy.prototype.release=function(){for(var a=_.Ea(this.b),b=a.next();!b.done;b=a.next())b.value.release();this.j()};iy.prototype.freeze=function(){for(var a=_.Ea(this.b),b=a.next();!b.done;b=a.next())b.value.freeze()};
jy.prototype.xa=function(a,b){function c(){b.na&&f.lb()&&b.na()}b=void 0===b?{}:b;var d=_.Ik(window.document,"DIV"),e=_.Rj(this.b,function(b,e){b=b.xa(a,{na:c});var f=b.ma();f.style.position="absolute";f.style.zIndex=e;d.appendChild(f);return b}),f=new iy(a,d,e,{za:b.za});return f};ly.prototype.ma=function(){return this.b.ma()};ly.prototype.lb=function(){return!this.l&&this.b.lb()};ly.prototype.release=function(){this.b.release()};ly.prototype.freeze=function(){this.b.freeze()};
my.prototype.xa=function(a,b){a=new _.Cu(a,this.C,this.l.createElement("div"),{Og:this.m||void 0,za:b&&b.za});return new ly(a,this.b,this.D,this.f,this.B,this.Ua,this.j,b&&b.na)};var zz=[{me:108.25,ke:109.625,pe:49,oe:51.5},{me:109.625,ke:109.75,pe:49,oe:50.875},{me:109.75,ke:110.5,pe:49,oe:50.625},{me:110.5,ke:110.625,pe:49,oe:49.75}];
ny.prototype.xa=function(a,b){a:{var c=a.$;if(!(7>c)){var d=1<<c-7;c=a.T/d;d=a.U/d;for(var e=_.Ea(zz),f=e.next();!f.done;f=e.next())if(f=f.value,c>=f.me&&c<=f.ke&&d>=f.pe&&d<=f.oe){c=!0;break a}}c=!1}return c?this.b.xa(a,b):this.f.xa(a,b)};_.t(xy,_.K);xy.prototype.immutable_changed=function(){var a=this,b=a.get("immutable"),c=a.f;b!=c&&(_.Fb(a.b,function(d){(c&&c[d])!==(b&&b[d])&&a.set(d,b&&b[d])}),a.f=b)};yy.prototype.D=function(){zy(this,"visreq",function(){_.Cf(this.b,"visreq")})};
yy.prototype.F=function(){zy(this,"visres",function(){_.Cf(this.b,"visres")})};yy.prototype.B=function(){zy(this,"firsttile",function(){var a={firsttile:void 0};zy(this,"firstpixel",function(){a.firstpixel=void 0});_.Bf(this.b,a)})};yy.prototype.C=function(){zy(this,"tilesloaded",function(){var a={tilesloaded:void 0};zy(this,"allpixels",function(){a.allpixels=void 0});_.Bf(this.b,a)})};var By=!0;_.t(Fy,_.K);
Fy.prototype.offset_changed=function(){this.set("newCenter",this.get("center"));var a=this.get("projectionBounds"),b=this.get("offset");if(a&&b){var c=this.get("div");_.km(c,new _.z(a.I-b.width,a.J-b.height));_.pm(c)}};Hy.prototype.m=function(a){return this.l(this.j.m(a))};Hy.prototype.f=function(a){return this.l(this.j.f(a))};Hy.prototype.b=function(){return this.j.b()};_.t(My,_.K);_.k=My.prototype;_.k.zoom_changed=function(){Ny(this)};_.k.zoomRange_changed=function(){Ny(this)};
_.k.bg=function(a){var b=_.hk();300>=b-this.B?(this.B=0,b="none"==this.f.get(),this.get("disableDoubleClickZoom")||b||this.qe(_.mn(a,this.b),-1)):(this.B=b,this.fe("rightclick",a));_.Nc(a);_.Oc(a);this.D=!0};_.k.ym=function(a){if(!(1<a.button||_.xj(a)||(this.fe("dblclick",a),_.xj(a)))){this.l=0;var b="none"==this.f.get();this.get("disableDoubleClickZoom")||b||(a=_.mn(a,this.b),this.qe(a,1))}};
_.k.aj=function(a){if(!_.xj(a)&&!this.D){var b=_.hk();300>=b-this.l?this.l=0:(this.l=b,this.fe("click",a));_.pn("Mm","-i",this,this.C)}};
_.k.fe=function(a,b){var c=_.mn(b,this.G),d=_.mn(b,this.b),e=this.aa.fromDivPixelToLatLng(c,!0);if(e){c=new _.F(e.lat(),e.lng());e=this.H.get("projection").fromLatLngToPoint(e);b=new _.mk(c,b,d,e);d=this.j.f;c=_.fm();e=d.l;var f=b.va&&_.xj(b.va);if(d.b){var g=d.b;var h=d.j}else if("mouseout"==a||f)h=g=null;else{for(var l=0;(g=e[l++])&&!(h=g.b(b,!1)););if(!h&&c)for(l=0;(g=e[l++])&&!(h=g.b(b,!0)););}if(g!=d.f||h!=d.m)d.f&&d.f.handleEvent("mouseout",b,d.m),d.f=g,d.m=h,g&&g.handleEvent("mouseover",b,
h);g?"mouseover"==a||"mouseout"==a?h=!1:(g.handleEvent(a,b,h),h=!0):h=!!f;h||(this.set("draggableCursor",this.H.get("draggableCursor")),this.F.get("title")&&this.F.set("title",null),delete b.va,_.G.trigger(this.H,a,b))}};_.k.bj=function(a){this.D=!1;5!=_.X.type||2!=_.X.b||2!=a.button||a.ctrlKey||this.bg(a)};
_.k.qe=function(a,b){b=Math.pow(2,b);var c=new _.dq(0,0,b);_.eq(c,new _.z(-a.x,-a.y));a=new _.cq(b,new _.z(c.x,c.y),a);Oy(this,"movestart",null);Oy(this,"move",a);Oy(this,"moveend",a);_.pn("Mm","-i",this,this.C)};_.t(Qy,_.K);Qy.prototype.b=function(){var a=new _.D(this.f.clientWidth,this.f.clientHeight);a.X(this.get("size"))||this.set("size",a)};_.t(Ty,_.K);Ty.prototype.ka=function(){_.u(this.b,function(a){Uy(a)},this);this.b.length=0;_.u(this.P,function(a){a.remove()})};
Ty.prototype.l=function(a){var b=this.b,c=Ry(this,this.f.getAt(a));b.splice(a,0,c);Sy(this)};Ty.prototype.m=function(a){var b=this.b;Uy(b[a]);b.splice(a,1);Sy(this)};Ty.prototype.B=function(a){Uy(this.b[a]);var b=Ry(this,this.f.getAt(a));b.set("zIndex",a);this.b[a]=b};_.t(Vy,_.K);Vy.prototype.l=function(){this.b||this.f.forEach(function(a){a&&_.G.trigger(a,"tilesloaded")})};_.t(az,_.K);_.k=az.prototype;_.k.mapTypeId_changed=function(){var a=this.get("mapTypeId");this.td(a)};
_.k.heading_changed=function(){var a=this.get("heading");if(_.Ia(a)){var b=_.Jb(90*Math.round(a/90),0,360);a!=b?this.set("heading",b):(a=this.get("mapTypeId"),this.td(a))}};_.k.tilt_changed=function(){var a=this.get("mapTypeId");this.td(a)};_.k.Jn=function(a){this.l.set(a.getArray().slice())};_.k.setMapTypeId=function(a){this.td(a);this.set("mapTypeId",a)};
_.k.td=function(a){var b=this.get("heading")||0,c=this.f.get(a),d=this.get("tilt");if(d&&c&&c instanceof gy&&c.f&&c.f[b])c=c.f[b];else if(0==d&&0!=b){this.set("heading",0);return}c&&c==this.m||(this.j&&(_.G.removeListener(this.j),this.j=null),b=(0,_.p)(this.td,this,a),a&&(this.j=_.G.addListener(this.f,a.toLowerCase()+"_changed",b)),c&&c instanceof _.Tg?(a=c.f,this.set("styles",c.get("styles")),this.set("baseMapType",this.f.get(a))):(this.set("styles",null),this.set("baseMapType",c)),this.set("maxZoom",
c&&c.maxZoom),this.set("minZoom",c&&c.minZoom),this.m=c)};_.k.Fk=function(a,b,c,d,e,f){if(void 0==f)return null;if(d instanceof gy){a=new hy(d,a,b,e,c);if(b=this.b instanceof hy)if(b=this.b,b==a)b=!0;else if(b&&a){if(c=b.heading==a.heading&&b.projection==a.projection&&b.Jc==a.Jc)b=b.j.get(),c=a.j.get(),c=b==c?!0:b&&c?b.scale==c.scale&&b.Ib==c.Ib&&(b.Aa==c.Aa?!0:b.Aa&&c.Aa?b.Aa.X(c.Aa):!1):!1;b=c}else b=!1;b||(this.b=a)}else this.b=d;return this.b};_.t(cz,_.K);
cz.prototype.changed=function(a){if("maxZoomRects"==a||"latLng"==a){a=this.get("latLng");var b=this.get("maxZoomRects");if(a&&b){for(var c=void 0,d=0,e;e=b[d++];)e.Ea.contains(a)&&(c=Math.max(c||0,e.maxZoom));a=c;a!=this.get("maxZoom")&&this.set("maxZoom",a)}else this.set("maxZoom",void 0)}};var gz=/^#[0-9a-fA-F]{6}$/;_.t(iz,_.K);
iz.prototype.changed=function(a){if("apistyle"!=a&&"hasCustomStyles"!=a){var b=this.get("mapTypeStyles")||this.get("styles");this.set("hasCustomStyles",_.w(b));a=[];_.wg[13]&&a.push({featureType:"poi.business",elementType:"labels",stylers:[{visibility:"off"}]});_.Nb(a,b);b=hz(a);b!=this.b&&(this.b=b,this.notify("apistyle"));a.length&&!b&&_.wb(_.Qj(_.G.trigger,this,"styleerror"))}};iz.prototype.getApistyle=_.qa("b");
jz.prototype.C=function(a){if(_.Sd(a,0)){this.l={};this.j={};for(var b=0;b<_.Sd(a,0);++b){var c=new Nx(_.Ij(a,0,b)),d=c.getTile(),e=d.getZoom(),f=_.N(d,1);d=_.N(d,2);c=_.N(c,2);var g=this.l;g[e]=g[e]||{};g[e][f]=g[e][f]||{};g[e][f][d]=c;this.j[e]=Math.max(this.j[e]||0,c)}this.B.b(null)}};jz.prototype.m=function(a){var b=this.l,c=a.T,d=a.U;a=a.$;return b[a]&&b[a][c]&&b[a][c][d]||0};jz.prototype.f=function(a){return this.j[a]||0};jz.prototype.b=_.qa("B");_.t(lz,_.K);
lz.prototype.changed=function(a){"zoomRange"!=a&&kz(this)};var mz={bluetooth:"-b",cellular:"-c",ethernet:"-e",none:"-n",wifi:"-wf",wimax:"-wm",other:"-o"};_.Oj(pz,_.K);pz.prototype.changed=function(a){"tileMapType"!=a&&"style"!=a&&this.notify("style")};
pz.prototype.getStyle=function(){var a=[],b=this.get("tileMapType");if(b instanceof gy&&(b=b.__gmsd)){var c=new _.sk;c.data[0]=b.type;if(b.params)for(var d in b.params){var e=_.tk(c);_.rk(e,d);var f=b.params[d];f&&(e.data[1]=f)}a.push(c)}d=new _.sk;d.data[0]=37;_.rk(_.tk(d),"smartmaps");a.push(d);this.b.get().forEach(function(b){b.ai&&a.push(b.ai)});return a};_.Oj(qz,_.K);
qz.prototype.getPrintableImageUri=function(a,b,c,d,e){d=void 0===d?0:d;e=void 0===e?1:e;var f=this.get("tileMapType");if(2048<a*e||2048<b*e||!(f instanceof gy))return null;d=d||this.get("zoom");if(null==d)return null;c=c||this.get("center");if(!c)return null;var g=f.Ga().get();if(!g.Aa)return null;var h=new _.ru(g.Aa);_.tu(h,0);var l=this.f.f(d);l&&_.wu(h,l);if("hybrid"==f.ta){_.mu(h.b);for(f=_.Sd(h.b,1)-1;0<f;--f)_.Jj(new _.Ss(_.Ij(h.b,1,f)),new _.Ss(_.Ij(h.b,1,f-1)));f=new _.Ss(_.Ij(h.b,1,0));f.data[0]=
1;_.Gj(f,1);_.Gj(f,2)}if(2==e||4==e)(new _.Us(_.P(h.b,4))).data[4]=e;e=d;d=new _.Bt(_.P(new _.yt(_.Rd(h.b,0)),3));d.setZoom(e);e=new _.bp(_.P(d,2));f=Lx(c.lat());e.data[0]=f;c=Lx(c.lng());e.data[1]=c;d=new _.Ct(_.P(d,0));d.data[0]=a;d.data[1]=b;a=this.b;a+="pb="+(0,window.encodeURIComponent)(_.ku(h.b)).replace(/%20/g,"+");null!=g.Ib&&(a+="&authuser="+g.Ib);return a};yz.prototype.f=function(a,b,c,d,e,f,g){var h=_.wf(_.zf(_.R)),l=a.__gm,n=a.getDiv();if(n){_.G.forward(n,"resize",c);_.G.addDomListenerOnce(c,"mousedown",function(){_.nn(a,"Mi")},!0);var q=new _.Cw({Dg:c,Gg:n,Eg:!0,ih:_.Ej(_.zf(_.R),15),backgroundColor:b.backgroundColor,Lf:!1,Tl:1==_.X.type,Ul:!0}),r=q.f;n=new Qy(c,q.j);_.sm(q.j,0);_.G.forward(a,"resize",c);l.set("panes",q.C);l.set("innerContainer",q.m);var v=Dy(f,a,_.Aq(n,"size"),d&&d.B),C=new cz,A=vz(),y,B;(function(){var b=_.N(_.Nj(),14),c=a.get("noPerTile")&&
_.wg[15],d=new jz;y=Iy(d,b,a,c);B=new _.nw(h,C,A,c?null:d,0,v)})();B.bindTo("tilt",a);B.bindTo("heading",a);B.bindTo("bounds",a);B.bindTo("zoom",a);f=new oy(new _.Mj(_.P(_.R,1)),a,y,A.obliques);rz(f,a.mapTypes,b.enableSplitTiles);l.set("eventCapturer",q.B);l.set("panBlock",q.mc);var E=bz(a,q.C.mapPane);B.bindTo("baseMapType",E);l.ba=null;var I=_.vd(!1);f=_.Oo({draggable:_.Aq(a,"draggable"),Hg:_.Aq(a,"gestureHandling"),dd:I});var H=null;var J=new _.Ev(r,q.b,E.B,v);J.set("panes",q.C);J.bindTo("styles",
a);_.wg[20]&&J.bindTo("animatedZoom",a);_.Q("onion",function(b){b.f(a,y)});_.wg[35]&&(wz(a),xz(a));var ea=new _.mw;ea.bindTo("tilt",a);ea.bindTo("zoom",a);ea.bindTo("mapTypeId",a);ea.bindTo("aerial",A.obliques,"available");l.bindTo("tilt",ea,"actualTilt");_.G.addListener(B,"attributiontext_changed",function(){a.set("mapDataProviders",B.get("attributionText"))});var ta=new iz;ta.bindTo("styles",a);ta.bindTo("mapTypeStyles",E,"styles");l.bindTo("apistyle",ta);l.bindTo("hasCustomStyles",ta);_.G.forward(ta,
"styleerror",a);ta=new pz(l.b);ta.bindTo("tileMapType",E);l.bindTo("style",ta);if(J){var Ba=new _.gw;l.set("projectionController",Ba);J.bindTo("size",n);J.bindTo("projection",Ba);J.bindTo("projectionBounds",Ba);Ba.bindTo("projectionTopLeft",J);Ba.bindTo("offset",J);Ba.bindTo("latLngCenter",a,"center");Ba.bindTo("size",n);Ba.bindTo("projection",a);J.bindTo("fixedPoint",Ba);a.bindTo("bounds",Ba,"latLngBounds",!0)}l.set("mouseEventTarget",{});ta=new _.fw(_.X.j,q.m);ta.bindTo("title",l);var za;J&&(za=
Py(q.m,r,a,J,Ba,g,ta,f));d&&(g=Gy(a,r),d.bindTo("div",g),d.bindTo("center",g,"newCenter"),za&&d.bindTo("zoom",za),d.bindTo("tilt",l),d.bindTo("size",l));za?l.bindTo("zoom",za):l.bindTo("zoom",a);l.bindTo("center",a);l.bindTo("size",n);l.bindTo("baseMapType",E);J&&(l.bindTo("offset",J),l.bindTo("layoutPixelBounds",J),l.bindTo("pixelBounds",J),l.bindTo("projectionTopLeft",J),l.bindTo("projectionBounds",J,"viewProjectionBounds"),l.bindTo("projectionCenterQ",Ba));a.set("tosUrl",_.Pw);J&&(d=Ey(),d.bindTo("bounds",
J,"pixelBounds"),l.bindTo("pixelBoundsQ",d,"boundsQ"));d=new xy({projection:1});d.bindTo("immutable",l,"baseMapType");g=new _.uw({projection:new _.Jf});g.bindTo("projection",d);a.bindTo("projection",g);J&&(_.G.forward(l,"panby",J),_.G.forward(l,"panbynow",J),_.G.forward(l,"panbyfraction",J));_.G.addListener(l,"panto",function(b){if(b instanceof _.F)if(!a.get("center"))a.set("center",b);else{if(J){b=Ba.fromLatLngToDivPixel(b);var c=Ba.get("offset")||_.$h;b.x+=Math.round(c.width)-c.width;b.y+=Math.round(c.height)-
c.height;_.G.trigger(J,"panto",b.x,b.y)}}else throw Error("panTo: latLng must be of type LatLng");});J&&(_.G.forward(l,"pantobounds",J),_.G.addListener(l,"pantolatlngbounds",function(a){if(a instanceof _.Dc)J&&_.G.trigger(J,"pantobounds",_.Sk(Ba.get("projection"),a,Ba.get("zoom"),Ba.get("offset"),Ba.get("center")));else throw Error("panToBounds: latLngBounds must be of type LatLngBounds");}));J&&za&&_.G.addListener(za,"zoom_changed",function(){za.get("zoom")!=a.get("zoom")&&(a.set("zoom",za.get("zoom")),
_.sn(a,"Mm"))});var $a=new lz;$a.bindTo("mapTypeMaxZoom",E,"maxZoom");$a.bindTo("mapTypeMinZoom",E,"minZoom");$a.bindTo("maxZoom",a);$a.bindTo("minZoom",a);$a.bindTo("trackerMaxZoom",C,"maxZoom");J&&za&&(za.bindTo("zoomRange",$a),J.bindTo("zoomRange",$a),za.bindTo("draggable",a),za.bindTo("scrollwheel",a),za.bindTo("disableDoubleClickZoom",a));var mc=new _.vw(_.jm(c));l.bindTo("fontLoaded",mc);d=l.j;d.bindTo("scrollwheel",a);d.bindTo("disableDoubleClickZoom",a);d=function(){var b=a.get("streetView");
b?(a.bindTo("svClient",b,"client"),b.__gm.bindTo("fontLoaded",mc)):(a.unbind("svClient"),a.set("svClient",null))};d();_.G.addListener(a,"streetview_changed",d);if(_.wg[71]){var wc=null;_.lk(a,"floor_changed",function(){var b=a.get("floor");if((wc&&wc.parameters.pid_lv)!=b){var c=wc,d=l.b.get();wc&&(c=null,d=d.gb(wc));b&&(c=new _.nu,c.la="indoor",c.parameters.pid_lv=b,d=_.yj(d,c));wc=c;l.b.set(d)}})}if(!a.Y){H=function(){H=null;_.Q("controls",function(b){var d=new b.ag(q.j);l.set("layoutManager",d);
J&&J.bindTo("layoutBounds",d,"bounds");b.em(d,a,E,q.j,B,A.report_map_issue,$a,ea,c,I,Ba);b.fm(a,q.m);b.Mf(c)})};if(J){var Uf=_.G.addListener(J,"tilesloading_changed",function(){J.get("tilesloading")&&(Uf.remove(),H())});_.G.addListenerOnce(J,"tilesloaded",function(){_.Q("util",function(b){b.f.b();window.setTimeout((0,_.p)(b.b.f,b.b),5E3);b.l(a)})})}_.nn(a,"Mm");b.v2&&_.nn(a,"Mz");_.pn("Mm","-p",a,!(!a||!a.Y));sz(a,E);_.sn(a,"Mm");_.Dm(function(){_.sn(a,"Mm")});tz(a)}uz(a);var ye=_.N(_.Nj(),14);b=
new oy(new _.Mj(_.P(_.R,1)),a,new Hy(y,function(a){return a||ye}),A.obliques);oz(b,a.overlayMapTypes);_.wg[35]&&l.bindTo("card",a);a.Y||nz(a);e&&window.setTimeout(function(){_.G.trigger(a,"projection_changed");_.m(a.get("bounds"))&&_.G.trigger(a,"bounds_changed");_.G.trigger(a,"tilt_changed");_.m(a.get("heading"))&&_.G.trigger(a,"heading_changed")},0);_.wg[15]&&(e=_.pu(_.qu()),e=new qz(e[0],y),e.bindTo("tileMapType",E),e.bindTo("center",a),e.bindTo("zoom",l),a.getPrintableImageUri=(0,_.p)(e.getPrintableImageUri,
e),J&&(a.setFpsMeasurementCallback=(0,_.p)(J.setFpsMeasurementCallback,J),a.bindTo("tilesloading",J)),l.bindTo("authUser",a))}};
yz.prototype.fitBounds=function(a,b,c){function d(){var c=a.getHeading();180==c?(g*=-1,h*=-1):90==c?(c=g,g=h,h=c):270==c&&(c=-g,g=-h,h=c);var d=_.cg(a.getDiv());d.width-=e;d.width=Math.max(1,d.width);d.height-=f;d.height=Math.max(1,d.height);c=a.getProjection();var l=b.getSouthWest(),n=b.getNorthEast(),q=l.lng(),B=n.lng();q>B&&(l=new _.F(l.lat(),q-360,!0));l=c.fromLatLngToPoint(l);q=c.fromLatLngToPoint(n);n=Math.max(l.x,q.x)-Math.min(l.x,q.x);l=Math.max(l.y,q.y)-Math.min(l.y,q.y);d=n>d.width||l>d.height?
0:Math.floor(Math.min(_.fk(d.width+1E-12)-_.fk(n+1E-12),_.fk(d.height+1E-12)-_.fk(l+1E-12)));n=_.Nk(c,b,0);n=_.Lk(c,new _.z((n.I+n.K)/2,(n.J+n.L)/2),0);_.x(d)&&(n=new _.F(n.lat()+h/(_.Qk(c,d)/360),n.lng()+g/(_.Qk(c,d)/360)),a.setCenter(n),a.setZoom(d))}var e=80,f=80,g=0,h=0;if(_.Ia(c))e=f=2*c-.01;else if(c){var l=c.left||0,n=c.right||0,q=c.bottom||0;c=c.top||0;e=l+n-.01;f=c+q-.01;h=c-q;g=l-n}a.getProjection()?d():_.G.addListenerOnce(a,"projection_changed",d)};
yz.prototype.b=function(a,b,c,d,e){a=new _.Cu(a,b,c,{});a.setUrl(d,e);return a};_.je("map",new yz);});
