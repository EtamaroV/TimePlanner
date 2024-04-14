<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router'

const router = useRouter()

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
    
    <div >
        <div class="allinput-homeadd">
            <label for="subjectname">วิชา</label>
            <Button label="เลือกวิชา"  outlined />
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