(function(){
 var formComponent = {
     controller: "PosController as pos",
     template: `
     <form>
     <input ng-model="pos.word.noun" placeholder="noun">
     <input ng-model="pos.word.adjective" placeholder="adjective">
     <input ng-model="pos.word.verb" placeholder="verb">
     <input ng-model="pos.word.adjective2" placeholder="adjective">
     <input ng-model="pos.word.noun2" placeholder = "noun">
     <input ng-model="pos.word.place" placeholder="place">
     <input ng-model="pos.word.passedtenseverb" placeholder="Past Tense Verb">
     <input ng-model="pos.word.adverb" placeholder = "Adverb">
     <button ng-click = "pos.enterWords(pos.word);"> <a href="#!/results">Enter Words</button></a>
     <form>
     `
 };
    angular
    .module("storyApp")
    .component("formComponent", formComponent);
})();