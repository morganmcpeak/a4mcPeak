(function(){
    function StoryService(){
        var word = {};
    return {
        setWords: setWords,
        getWords: getWords
    };
    function setWords(newWord) {
        word = newWord;
    }
    function getWords(){
        return word;
    }
    }
    angular 
    .module("storyApp")
    .factory("StoryService", StoryService);
})();