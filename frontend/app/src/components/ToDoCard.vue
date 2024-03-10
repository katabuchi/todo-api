<script setup lang="ts">
import { defineProps, ref } from 'vue'
const props = defineProps<{
    date: string
    title: string
}>()
const isDone = ref(false)


function onClick(e: Event) {
    const target = e.target as HTMLInputElement
    isDone.value = target.checked
}
</script>

<template>
    <div class="c-card p-card">
        <div>
            <input type="checkbox" @click="onClick"/>
        </div>
        <div class="p-card__content" :class="{ 'u-done': isDone }">
            <p class="c-card__title p-card__title">{{ props.title }}</p>
            <p class="c-card__date p-card__date">{{ props.date }}</p>
        </div>
    </div>
</template>


<style scoped lang="scss">
.c-card {
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid #ccc;
    padding: 10px;
    text-align: start;

    &__title {
        font-weight: bold;
    }
}

.p-card {
    margin: 10px;

    &__content {
        margin-left: 10px;
    }

    &__title {
        font-size: 0.8rem;
        margin: 0px;
    }

    &__date {
        font-size: 0.6rem;
        margin: 0px;
        text-align: end;
    }
}

.u-done {
    color: #CCCCCC;
}
</style>