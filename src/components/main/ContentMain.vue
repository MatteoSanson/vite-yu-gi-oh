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
    <div class="content">
        <FoundedCards />
        <CardList />
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