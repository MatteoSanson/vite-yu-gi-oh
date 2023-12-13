<script>

import SingleCard from './SingleCard.vue';
import { store } from '../../store';

export default {
    name: 'CardList',
    components: {
        SingleCard,
    },
    props: ['cards'],
    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <div class="container">
        <SingleCard v-for="card in cards" :name="card.name" :type="card.archetype" :image="card.card_images[0].image_url"
            :cards="store.cards" />
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
</style>