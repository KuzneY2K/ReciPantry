<template>
          <!-- Search Form - Search by query with filters -->
          <form @submit.prevent="">
            <div class="input-group p-0 m-0 mb-3 mt-3 elevation-3 border border-black border-1 bg-transparent rounded">
              <!-- Submit Button -->
              <button type="submit" class="btn bg-light p-0 m-0"><span class="input-group-text p-0 m-0 py-1 px-3" id="basic-addon1"><i class="mdi mdi-magnify fs-2"></i></span></button>
                <input v-model="reqData" type="text" class="form-control bg-white" placeholder="Search a recipe" aria-label="searchBar" aria-describedby="basic-addon1">
                <!-- FILTER BUTTON - Toggles modal that has all filter options. -->
                <!-- Filters will be options that will set the reqData to their value -->
                <button class="btn btn-grad px-3"><img src="https://i.imgur.com/Gh9UJij.png" alt="" height="30"></button>
              </div>
          </form>
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
    background-color: #19875434;
}
</style>