<template>
    <div class="filters">
        <div
            v-for="(item, index) in array"
            :key="index"
            class="filters__item"
            :class="{ filters__item_active: value === item.id }"
            @click="$emit('change', item.id)"
        >
            {{ item.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'VFilterGroup',

    model: {
        prop: 'value',
        event: 'change'
    },

    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        array: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="scss" scoped>
.filters {
    @extend .flex_row-center-start;
    flex-wrap: wrap;
}

.filters__item {
    @extend .flex_row-center-center;
    font-size: 18px;
    color: $color-black;
    padding: 1em 1.7em 1em 1.7em;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    transition: all 0.2s linear;
    margin-bottom: 15px;

    &:hover {
        cursor: pointer;
        color: $color-white;
        background: $color-blue;
    }

    &:not(:first-child) {
        margin-left: 15px;
    }
}

// Модификаторы
.filters__item_active {
    color: $color-white;
    background: $color-blue;
}

@media screen and (max-width: 575px) {
    .filters__item {
        font-size: 13px;
        border-radius: 5px;
        margin-bottom: 8px;

        &:not(:first-child) {
            margin-left: 8px;
        }
    }
}
</style>