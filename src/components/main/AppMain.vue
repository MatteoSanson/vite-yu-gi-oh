<script>
import SelectType from './SelectType.vue';
import ContentMain from './ContentMain.vue';

import axios from 'axios';
import { store } from '../../store';

export default {
    name: 'AppMain',
    components: {
        SelectType,
        ContentMain,
    },
    data() {
        return {
            store,
        }
    },
    created() {
        axios.get(store.apiURL.defaultURL + store.apiURL.cardsURL).then((response) => {
            store.cards = response.data.data;
            console.log(store.cards);
        });
    },
}
</script>

<template>
    <main>
        <div class="container">
            <SelectType :cards="store.cards" />
            <ContentMain :cards="store.cards" />
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../../../src/assets/scss/partials/variables.scss' as *;

main {
    background-color: $bg-main-color;

    .container {
        width: 85%;
        margin: 0 auto;
    }
}
</style>