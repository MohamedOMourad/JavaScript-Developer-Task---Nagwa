export interface Word {
    "id": number,
    "word": string,
    "pos": string
}

export interface Category {
    "noun": Word,
    "verb": Word,
    "adverb": Word,
    "adjective": Word,
}

