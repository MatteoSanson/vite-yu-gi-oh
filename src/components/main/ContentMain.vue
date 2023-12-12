<script>
import FoundedCards from './FoundedCards.vue';
import CardList from './CardList.vue';

export default {
    name: 'ContentMain',
    components: {
        FoundedCards,
        CardList,
    }
}
</script>

<template>
    <div>
        <FoundedCards />
        <CardList />

    </div>
</template>

<style></style>