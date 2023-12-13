<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    name: 'SelectType',
    data() {
        return {
            store,
            searchType: '',
        }
    },
    created() {
        axios.get(store.apiURL.defaultURL + store.apiURL.archURL).then((response) => {
            store.archs = response.data;
            console.log(store.archs);
        });
    },
}
</script>

<template>
    <div class="selection">
        <select id="selezione" name="selezione" v-model="searchType">
            <option value="" selected>Seleziona un'opzione</option>
            <option v-for="(arch, index) in store.archs" :value="arch.archetype_name">
                {{ arch.archetype_name }}
            </option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.selection {
    padding: 15px;

    #selezione {
        border-radius: 5px;
        border: 1px solid white;
        height: 30px;
    }

}
</style>