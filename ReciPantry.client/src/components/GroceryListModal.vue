<template>
        <div class="modal fade" id="groceryListModal" tabindex="-1" aria-labelledby="groceryListModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fs-2" id="groceryListModalLabel">My <span class="text-success">Grocery</span>
                                List</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-unstyled">
                                <ul class="list-unstyled">
                                    <div class="li-container d-flex flex-row justify-content-between fs-5"
                                        v-for="i in ingredientOnList" :key="i.name">
                                        <li><i class="mdi mdi-food"></i> <span class="text-success">{{ i.name }}</span> -
                                            {{ i.measureAmount }} {{ i.measureUnit }} </li><i
                                            class="mdi mdi-close text-danger fs-2" @click="removeFromList(i.id)"></i>
                                    </div>
                                </ul>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
        </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

    export default {
        setup(){
            return{
            ingredientOnList: computed(() => AppState.groceryList),
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>