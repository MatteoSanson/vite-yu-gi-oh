<script>
import axios from 'axios';
import SingleCard from './SingleCard.vue';

export default {
    name: 'CardList',
    components: {
        SingleCard,
    },
    data() {
        return {
            cards: [],
            apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
        }
    },
    created() {
        axios.get(this.apiURL).then((response) => {
            this.cards = response.data.data;
        });
    }
}
</script>

<template>
    <div class="container">
        <SingleCard v-for="card in  cards" :name="card.name" :type="card.archetype"
            :image="card.card_images[0].image_url" />
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
</style>