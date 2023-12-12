<script>
export default {
    name: 'SingleCard',
}
</script>

<template>
    <div class="card">
        <div class="immagine">
            <img src="https://images.ygoprodeck.com/images/cards_small/34541863.jpg" alt="">
        </div>
        <div class="title">
            titolo
        </div>
        <div class="type">
            tipo
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.card {
    display: flex;
    flex-direction: column;
    // padding: 0 10px 0 10px;
    width: calc(100% / 5 - 12px);
    background-color: $bg-main-color;
    text-align: center;

    .immagine {
        object-fit: contain;

        img {
            width: 100%;
        }
    }

    .title {
        color: $primary-color;
    }
}
</style>