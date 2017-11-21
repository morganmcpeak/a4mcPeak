(function(){
var storyComponent = {
controller: "ResultsController as pos",
template: `
<p> Today, I woke up and ate an entire {{pos.word.noun}}. After consumption, I realized it made me feel {{pos.word.adjective}},
so I decided that I should {{pos.word.verb}}, which made me feel {{pos.word.adjective2}}. After that, I decided to put my {{pos.word.noun2}} on
and head to {{pos.word.place}}, where I {{pos.word.passedtenseverb}} {{pos.word.adverb}} ever after. </p>
<button><a href = "#!/pos">Restart Story</a></button>`

};
angular
.module("storyApp")
.component("storyComponent", storyComponent);
})();