(function(){
angular
.module("storyApp", ["ngRoute"])
.config(function($routeProvider){
    $routeProvider
    .when("/pos", {
        template: 
       `<form-component></form-component>`,
    })
    .when("/results", {
        template: `
       <story-component></story-component>
        `
    });
});


})();