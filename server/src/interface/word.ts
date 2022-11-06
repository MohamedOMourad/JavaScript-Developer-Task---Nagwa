export interface Word {
    "id": number,
    "word": string,
    "pos": string
}

export interface WordCategory {
    "noun": Word,
    "verb": Word,
    "adverb": Word,
    "adjective": Word,
}

