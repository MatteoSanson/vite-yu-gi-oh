<script>
import FoundedCards from './FoundedCards.vue';
import CardList from './CardList.vue';
import { store } from '../../store';

export default {
    name: 'ContentMain',
    // props: ['cards'],
    components: {
        FoundedCards,
        CardList,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="content">
        <FoundedCards :cards="store.length" />
        <CardList :cards="store.cards" />
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.content {
    width: 100%;
    background-color: $primary-color;
    padding: 25px;
}
</style>