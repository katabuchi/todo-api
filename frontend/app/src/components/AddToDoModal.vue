<script lang="ts" setup>

const props = defineProps<{
    isOpen: Boolean
}>()

</script>

<template>
    <div
        class="c-todo_add_modal p-todo_add_modal"
        :class="isOpen ? 'show' : 'hide'"
    >
        <h1 class="c-todo_add_modal__title">Add ToDo</h1>
        <div class="c-todo_add_modal__content">
            <input label="ラベル" type="text" class="c-todo_add_modal__text" placeholder="ToDo" />
            <input type="date" class="c-todo_add_modal__date p-todo_add_modal__date" />
        </div>
        <button class="p-todo_add_modal__add">Add</button>
    </div>
</template>

<style scoped lang="scss">
.show {
    display: block;
}

.hide {
    display: none;
}

.c-todo_add_modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;

    &__content {
        display: flex;
        flex-direction: column;
    }

    &__title {
        font-size: 1.5rem;
    }

    &__text {
        border: none;
        border-bottom: 1px solid #ccc;
    }

    &__text:focus {
        outline: 0;
    }

    &__date {
        border: none;
        border-bottom: 1px solid #ccc;
    }

    &__date:focus {
        outline: 0;
    }
}

.p-todo_add_modal {
    width: 300px;
    height: 200px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 20px;

    &__date {
        margin-top: 24px;
    }

    &__add {
        width: 130px;
        height: 30px;
        margin-top: 24px;
        background-color: #42b983;
        color: white;
        border: none;
        border-radius: 5px;
    }
}
</style>
