(function(){
 var formComponent = {
     controller: "PosController",
     template: `
     <form>
     <input ng-model="$ctrl.word.noun" placeholder="noun">
     <input ng-model="$ctrl.word.adjective" placeholder="adjective">
     <input ng-model="$ctrl.word.verb" placeholder="verb">
     <input ng-model="$ctrl.word.adjective2" placeholder="adjective">
     <input ng-model="$ctrl.word.noun2" placeholder = "noun">
     <input ng-model="$ctrl.word.place" placeholder="place">
     <input ng-model="$ctrl.word.passedtenseverb" placeholder="Past Tense Verb">
     <input ng-model="$ctrl.word.adverb" placeholder = "Adverb">
     <button ng-click = "$ctrl.enterWords($ctrl.word);"> <a href="#!/results">Enter Words</button></a>
     <form>
     `
 };
    angular
    .module("storyApp")
    .component("formComponent", formComponent);
})();
