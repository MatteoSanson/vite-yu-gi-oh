<script>
export default {
    name: 'FoundedCard',
}
</script>

<template>
    <div class="founded">
        <h4>
            Found 39 cards
        </h4>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.founded {
    width: 100%;
    background-color: #212529;
    color: $primary-color;
    padding: 15px;
}
</style>