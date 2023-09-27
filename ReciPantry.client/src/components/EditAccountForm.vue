<template> 
<form @submit.prevent="editAccount">

</form>
</template>

<script>
import { computed, watchEffect, ref } from 'vue';
import { useRouter } from 'vue-router';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';

export default {
setup() {
    const editable = ref({})
    const router = useRouter()

    watchEffect(() => {
        AppState.account
        editable.value = AppState.account
    })
  return {
    editable,
    account: computed(() => AppState.account),

    async editAccount(){
        try {
            await accountService.editAccount(editable.value)
            Pop.success('Account Updated!')
        } catch (error) {
            Pop.error(error)
        }
    }
  };
},
};
</script>


<style>
</style>