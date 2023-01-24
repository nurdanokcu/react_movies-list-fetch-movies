(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(8),a=c.n(i),s=(c(15),c(2)),n=c(1),r=(c(16),c(17),c(18),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},o=c(10),j=c(9),m=c(6),b=c.n(m),u=c(7),h=c.n(u);function v(e){return fetch("".concat("https://www.omdbapi.com/?apikey=8e877a26","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}c(21);var O=function(e){var t=e.addMovie,c=Object(n.useState)(""),i=Object(s.a)(c,2),a=i[0],d=i[1],m=Object(n.useState)(null),u=Object(s.a)(m,2),O=u[0],x=u[1],p=Object(n.useState)(!1),f=Object(s.a)(p,2),N=f[0],g=f[1],y=Object(n.useState)(!1),w=Object(s.a)(y,2),I=w[0],S=w[1],D=Object(n.useState)(!1),F=Object(s.a)(D,2),k=F[0],C=F[1],M=function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),g(!0),v(a).then((function(e){var t;e.imdbID?x({title:(t=e).Title,description:t.Plot,imgUrl:"N/A"===t.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":t.Poster,imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID),imdbId:t.imdbID}):S(!0)})).finally((function(){return g(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:M,children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:h()("input",{"is-danger":I}),value:a,onChange:function(e){d(e.target.value),S(!1),x(null)}})}),I&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:h()("button is-light",{"is-loading":N}),disabled:!a,children:"Find a movie"})}),k&&Object(r.jsx)("p",{className:"help is-danger",children:"This movie is already in the list!"}),O&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return e=O,t((function(t){return t.some((function(t){return t.imdbId===e.imdbId}))?(C(!0),t):[].concat(Object(o.a)(t),[e])})),x(null),void d("");var e},children:"Add to the list"})})]})]}),O&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:O})]})]})},x=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(O,{addMovie:i})})]})};a.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.73f8d79c.chunk.js.map