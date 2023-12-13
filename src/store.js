import { reactive } from "vue";

export const store = reactive({
    cards: [],
    archs: [],
    // apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=40',
    // apiUrlArch: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    apiURL: {
        defaultURL: 'https://db.ygoprodeck.com/api/v7/',
        cardsURL: 'cardinfo.php?num=30&offset=40',
        archURL: 'archetypes.php',
    }
});