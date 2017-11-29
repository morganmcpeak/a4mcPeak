(function(){
var storyComponent = {
controller: "ResultsController",
template: `
<p> Today, I woke up and ate an entire {{$ctrl.word.noun}}. After consumption, I realized it made me feel {{$ctrl.word.adjective}},
so I decided that I should {{$ctrl.word.verb}}, which made me feel {{$ctrl.word.adjective2}}. After that, I decided to put my {{$ctrl.word.noun2}} on
and head to {{$ctrl.word.place}}, where I {{$ctrl.word.passedtenseverb}} {{$ctrl.word.adverb}} ever after. </p>
<button><a href = "#!/pos">Restart Story</a></button>`

};
angular
.module("storyApp")
.component("storyComponent", storyComponent);
})();
