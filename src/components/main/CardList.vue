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
            console.log(response.data);
        });
    }
}
</script>

<template>
    <div>
        <SingleCard v-for="card in cards" />
    </div>
</template>

<style></style>