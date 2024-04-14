<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';


</script>

<template>
    
    <div>
        <div class="allinput-homeadd">
            <label for="subjectname">วิชา</label>

            

            <InputGroup>

                <InputText :placeholder="store.state.addschedule.subject.name || ''" disabled/>
                <Button label="เลือกวิชา" @click="router.push({ path: '/add/subject' })" />
                
            </InputGroup>

            <Button label="TEST" @click="store.commit('addschedule/setSubjectName', 'ทดสอบระบบ');"  />
        </div>
    </div>

</template>

<style scoped>
.allinput-homeadd {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 2px;
}
</style>