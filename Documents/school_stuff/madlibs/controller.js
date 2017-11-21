(function(){
function PosController(StoryService){
    var vm = this;
    vm.enterWords = function(newWord) {
        console.log(newWord);
        StoryService.setWords(newWord);
    };
}
function ResultsController(StoryService){
    var vm = this;
    vm.word = StoryService.getWords();
    console.log(vm.word);
};

angular
    .module("storyApp")
    .controller("PosController", PosController)
    .controller("ResultsController", ResultsController);
})();