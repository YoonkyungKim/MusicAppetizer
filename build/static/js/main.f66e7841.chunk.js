(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,a,t){},50:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var l=t(4),n=t(0),c=t.n(n),o=t(17),s=t.n(o),i=(t(49),t(40)),u=t(12),r=(t(50),t(41)),b=t.n(r);t(51);var v=function(e){var a=Object(n.useState)(new Audio(e.previewUrl)),t=Object(u.a)(a,1)[0],c=Object(n.useState)(!1),o=Object(u.a)(c,2),s=o[0];return o[1],Object(n.useEffect)((function(){s?t.play():t.pause()}),[s]),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"track-container",children:[e.previewUrl&&Object(l.jsx)("div",{onMouseOver:function(e){var a;a=e,document.getElementById(a).play()},onMouseOut:function(e){var a;a=e,document.getElementById(a).pause()}}),Object(l.jsx)("audio",{id:"song",controls:"controls",src:e.previewUrl,type:"audio/mpeg",style:{display:"none"}}),Object(l.jsx)("img",{className:"track-img",src:e.img.url,alt:e.title,style:{width:100}}),Object(l.jsxs)("div",{className:"track-text-container",children:[Object(l.jsx)("p",{className:"track-text-artist",children:e.artists}),Object(l.jsx)("p",{className:"track-text-title",children:e.title})]})]})})},d=function(e){return Object(l.jsx)("button",{className:"btn getRecommendBtn",onClick:e.recommend,children:"Get recommendation"})},m=t(43),p=t(42),f=[{value:"al",label:"Albania"},{value:"ad",label:"Andorra"},{value:"au",label:"Australia"},{value:"by",label:"Belarus"},{value:"be",label:"Belgium"},{value:"ba",label:"Bosnia and Herzegovina"},{value:"bg",label:"Bulgaria"},{value:"ca",label:"Canada"},{value:"co",label:"Colombia"},{value:"hr",label:"Croatia"},{value:"dk",label:"Denmark"},{value:"ec",label:"Ecuador"},{value:"sv",label:"El Salvador"},{value:"ee",label:"Estonia"},{value:"fr",label:"France"},{value:"hn",label:"Honduras"},{value:"is",label:"Iceland"},{value:"id",label:"Indonesia"},{value:"il",label:"Israel"},{value:"jo",label:"Jordan"},{value:"xk",label:"Kosovo"},{value:"lv",label:"Latvia"},{value:"li",label:"Liechtenstein"},{value:"lu",label:"Luxembourg"},{value:"hu",label:"Magyarorsz\xe1g"},{value:"my",label:"Malaysia"},{value:"ma",label:"Maroc"},{value:"mc",label:"Monaco"},{value:"mx",label:"Mexico"},{value:"nz",label:"New Zealand"},{value:"mk",label:"North Macedonia"},{value:"om",label:"Oman"},{value:"pa",label:"Panama"},{value:"pe",label:"Peru"},{value:"pl",label:"Polska"},{value:"qa",label:"Qatar"},{value:"ro",label:"Romania"},{value:"sa",label:"Saudi Arabia"},{value:"rs",label:"Serbia"},{value:"sk",label:"Slovakia"},{value:"za",label:"South Africa"},{value:"se",label:"Sverige"},{value:"tn",label:"Tunisie"},{value:"us",label:"USA"},{value:"ae",label:"United Arab Emirates"},{value:"uy",label:"Uruguay"},{value:"vn",label:"Vietnam"},{value:"cz",label:"Czech Republic"},{value:"by",label:"Belarus"},{value:"md",label:"Moldova"},{value:"il",label:"Israel"},{value:"ae",label:"United Arab Emirates"},{value:"dz",label:"Algeria"},{value:"ma",label:"Morocco"},{value:"ps",label:"Palestine"},{value:"lb",label:"Lebanon"},{value:"th",label:"Thailand"},{value:"jp",label:"Japan"},{value:"hk",label:"Hong Kong"}];var g=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("a",{href:"http://localhost:8888/spotify_login",children:Object(l.jsx)("button",{className:"btn LoginBtn",children:"Login With Spotify!"})})})},h=new b.a;var j=function(){var e=o(),a=Object(n.useState)(!!e.access_token),t=Object(u.a)(a,2),c=(t[0],t[1]);function o(){for(var e,a={},t=/([^&;=]+)=?([^&;]*)/g,l=window.location.hash.substring(1);e=t.exec(l);)a[e[1]]=decodeURIComponent(e[2]);return a}e.access_token&&h.setAccessToken(e.access_token);var s=Object(n.useState)([]),r=Object(u.a)(s,2),b=r[0],j=r[1],O=Object(n.useState)([]),y=Object(u.a)(O,2),k=y[0],x=y[1],w=Object(n.useState)({danceabilityRange:[0,0],acousticnessRange:[0,0],livenessRange:[0,0],tempoRange:[0,0]}),S=Object(u.a)(w,2),M=S[0],R=S[1],_=Object(n.useState)([]),A=Object(u.a)(_,2),C=A[0],T=A[1],B=Object(n.useState)(null),E=Object(u.a)(B,2),N=E[0],F=E[1];Object(n.useEffect)((function(){0!==k.length&&h.getAudioFeaturesForTracks(k).then((function(e){console.log("Artist's track features"),console.log(e),function(e){var a=e.map((function(e){return e.danceability})),t=e.map((function(e){return e.acousticness})),l=e.map((function(e){return e.liveness})),n=e.map((function(e){return e.tempo}));console.log("artist features arr"),console.log(e),R({danceabilityRange:[Math.min.apply(null,a),Math.max.apply(null,a)],acousticnessRange:[Math.min.apply(null,t),Math.max.apply(null,t)],livenessRange:[Math.min.apply(null,l),Math.max.apply(null,l)],tempoRange:[Math.min.apply(null,n),Math.max.apply(null,n)]})}(e.audio_features)})),N&&P()}),[k]),Object(n.useEffect)((function(){o().access_token?c(!0):c(!1)}),[]);var I=Object(n.useState)([]),L=Object(u.a)(I,2);function P(){var e=[],a=[],t=[];h.searchPlaylists("top 50 ".concat(N.label),{market:N.value}).then((function(l){console.log("".concat(N.label," top 50")),console.log(l);var n,c=!1,o=Object(i.a)(l.playlists.items);try{for(o.s();!(n=o.n()).done;){var s=n.value;"spotifycharts"!==s.owner.display_name&&"Spotify"!==s.owner.display_name||(c=!0,h.getPlaylistTracks(s.id).then((function(l){a=l.items,e=l.items.map((function(e){return e.track.id})),h.getAudioFeaturesForTracks(e).then((function(e){console.log("top 50's track features"),console.log(e);for(var l=0;l<e.audio_features.length;l++)e.audio_features[l].danceability>=M.danceabilityRange[0]&&e.audio_features[l].danceability<=M.danceabilityRange[1]&&e.audio_features[l].acousticness>=M.acousticnessRange[0]&&e.audio_features[l].acousticness<=M.acousticnessRange[1]&&e.audio_features[l].liveness>=M.livenessRange[0]&&e.audio_features[l].liveness<=M.livenessRange[1]&&e.audio_features[l].tempo>=M.tempoRange[0]&&e.audio_features[l].tempo<=M.tempoRange[1]&&!t.includes(a[l])&&t.push(a[l]);console.log(t),console.log(t.length),t.sort((function(e,a){return e.track.name.localeCompare(a.track.name)})),t.reverse(),T(t)}))})))}}catch(u){o.e(u)}finally{o.f()}if(!c){T(["no top list"])}console.log("artist feature range"),console.log(M)})).catch((function(e){console.log(e)}))}L[0],L[1];var U=Object(n.useState)(""),z=Object(u.a)(U,2),J=(z[0],z[1]),H=Object(n.useState)(null),V=Object(u.a)(H,2),q=V[0],D=V[1],G=window.fetch.bind(window);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(g,{}),Object(l.jsx)(p.a,{isMulti:!0,cacheOptions:!0,defaultOptions:!0,value:q,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},loadOptions:function(a){return G("https://api.spotify.com/v1/search/?q=".concat(a,"&type=artist"),{method:"GET",headers:{Authorization:"Bearer "+e.access_token,"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(e){return e.artists.items.map((function(e){return{id:e.id,name:e.name}}))})).catch((function(e){return console.log(e)}))},onInputChange:function(e){J(e)},onChange:function(e){var a;D(e),e&&(a=e[0].name,new Promise((function(e,t){h.searchArtists(a).then((function(l){console.log(l.artists.items),console.log(l),j(l.artists.items.slice(0,1)),h.searchTracks("artist:".concat(a)).then((function(a){x(a.tracks.items.map((function(e){return e.id}))),e()})).catch((function(e){console.log("track: "+e),t()}))})).catch((function(e){console.log(e),t()}))})))},className:"basic-multi-select"}),Object(l.jsx)(m.a,{defaultValue:N,onChange:F,options:f}),Object(l.jsx)("div",{children:void 0!==b?b.map((function(e){return Object(l.jsxs)("div",{children:[e.name," ",e.images[0]?Object(l.jsx)("img",{src:e.images[0].url,alt:e.name,style:{width:100}}):""]})})):"no artist found"}),Object(l.jsx)(d,{recommend:P}),0!==C.length&&"no top list"===C[0]?Object(l.jsx)("p",{children:"No Top List For This Market"}):0!==C.length&&C.map((function(e){return Object(l.jsx)(v,{artists:e.track.artists[0].name,img:e.track.album.images[0],title:e.track.name,previewUrl:e.track.preview_url},e.track.id)}))]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,81)).then((function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,c=a.getLCP,o=a.getTTFB;t(e),l(e),n(e),c(e),o(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),O()}},[[80,1,2]]]);
//# sourceMappingURL=main.f66e7841.chunk.js.map