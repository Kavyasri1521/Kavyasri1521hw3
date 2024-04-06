var dictionaryData = [
    {
        "word": "hello",
        "phonetic": "həˈləʊ",
        "phonetics": [
            {
                "text": "həˈləʊ",
                "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
            },
            {
                "text": "hɛˈləʊ"
            }
        ],
        "origin": "early 19th century: variant of earlier hollo ; related to holla.",
        "meanings": [
            {
                "partOfSpeech": "exclamation",
                "definitions": [
                    {
                        "definition": "used as a greeting or to begin a phone conversation.",
                        "example": "hello there, Katie!",
                        "synonyms": [],
                        "antonyms": []
                    }
                ]
            },
            {
                "partOfSpeech": "noun",
                "definitions": [
                    {
                        "definition": "an utterance of ‘hello’; a greeting.",
                        "example": "she was getting polite nods and hellos from people",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "an instance of saying or shouting ‘hello’.",
                        "example": "I gave him a quick hello and moved on.",
                        "synonyms": [],
                        "antonyms": []
                    }
                ]
            },
            {
                "partOfSpeech": "verb",
                "definitions": [
                    {
                        "definition": "say or shout ‘hello’.",
                        "example": "I pressed the phone button and helloed",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "to greet or express salutation with ‘hello’.",
                        "example": "She helloed me when I entered the room.",
                        "synonyms": [],
                        "antonyms": []
                    }
                ]
            }
        ]
    },
    {
        "word": "world",
        "phonetic": "wəːld",
        "phonetics": [
            {
                "text": "wəːld",
                "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/world--_gb_1.mp3"
            }
        ],
        "origin": "Old English woruld, weorold, from a Germanic compound meaning ‘age of man’.",
        "meanings": [
            {
                "partOfSpeech": "noun",
                "definitions": [
                    {
                        "definition": "the earth, together with all of its countries, peoples, and natural features.",
                        "example": "he was doing his bit to save the world",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "a particular region or group of countries.",
                        "example": "the English-speaking world",
                        "synonyms": [],
                        "antonyms": []
                    }
                ]
            }
        ]
    },
    {
        "word": "apple",
        "phonetic": "ˈap(ə)l",
        "phonetics": [
            {
                "text": "ˈap(ə)l",
                "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/apple--_gb_1.mp3"
            }
        ],
        "origin": "Old English æppel, of Germanic origin; related to Dutch appel and German Apfel.",
        "meanings": [
            {
                "partOfSpeech": "noun",
                "definitions": [
                    {
                        "definition": "the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.",
                        "example": "he plucked an apple from the tree",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "a round fruit with red or green skin and white flesh that is sweet and crisp.",
                        "example": "I had an apple for lunch.",
                        "synonyms": [],
                        "antonyms": []
                    }
                ]
            }
        ]
    }
];


function searchWord() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var meaningsContainer = document.getElementById("meaningsContainer");
    meaningsContainer.innerHTML = "";

    var foundWord = dictionaryData.find(function(item) {
        return item.word.toLowerCase() === searchInput;
    });

    if (foundWord) {
        foundWord.meanings.forEach(function(meaning) {
            var partOfSpeechHeader = document.createElement("h3");
            partOfSpeechHeader.textContent = meaning.partOfSpeech;
            meaningsContainer.appendChild(partOfSpeechHeader);

            meaning.definitions.forEach(function(definition) {
                var definitionDiv = document.createElement("div");
                definitionDiv.classList.add("definition");
                definitionDiv.innerHTML = "<p><strong>Definition:</strong> " + definition.definition + "</p><p><strong>Example:</strong> " + definition.example + "</p>";
                meaningsContainer.appendChild(definitionDiv);
            });
        });
    } else {
        var notFoundMessage = document.createElement("p");
        notFoundMessage.textContent = "Word not found.";
        meaningsContainer.appendChild(notFoundMessage);
    }
}
