<template>
        <div class="col-12 p-0 m-0 d-flex flex-row">
            <!-- Search Form - Search by query with filters -->
                <form @submit.prevent="">
                <div class="input-group p-0 m-0 elevation-5 border border-black border-1 bg-transparent rounded">
                <!-- Submit Button -->
                <button type="submit" class="btn bg-light p-0 m-0"><span class="input-group-text p-0 m-0 py-1 px-3" id="basic-addon1"><i class="mdi mdi-magnify fs-2"></i></span></button>
                    <input v-model="reqData" type="text" class="form-control bg-white" placeholder="Search a recipe" aria-label="searchBar" aria-describedby="basic-addon1" @keydown="logQuery()">
                    <!-- FILTER BUTTON - Toggles modal that has all filter options. -->
                    <!-- Filters will be options that will set the reqData to their value -->
                </div>
                </form>
                <button type="button" class="btn btn-grad px-3 py-0 filter-btn ms-2 border border-1 border-black elevation-5">
                    <img src="https://i.imgur.com/Gh9UJij.png" alt="" height="30" data-bs-toggle="modal" data-bs-target="#filterModal" class="p-0 m-0">
                </button>
        </div>
</template>

<script>
    export default {
        setup(){
            return{
                
            }
        }
    }
</script>

<style lang="scss" scoped>

.btn-grad {
    background-color: rgb(156, 211, 185)
}

.filter-btn{
    z-index: 100;
}
</style>