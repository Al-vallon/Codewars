function howMuchILoveYou(nbPetals) {
    const response = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ];
return response[(nbPetals-1)%6]
}
