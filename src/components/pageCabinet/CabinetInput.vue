<template>
    <div class="input__wrap">
        <label class="input__label">
            <slot>Label</slot>
        </label>

        <div class="input">
            {{ value }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'CabinetInput',

    props: {
        value: {
            type: String,
            default: ''
        }
    },
};
</script>

<style lang="scss" scoped>
.input__label {
    pointer-events: none;
    font-size: 20px;
    letter-spacing: -0.01em;
    color: $color-gray;
}

.input {
    width: 550px;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0px 25px;
    margin-top: 20px;
    border: 1px solid $color-silver;
    border-radius: 18px;
    font-size: 24px;
    letter-spacing: -0.01em;
    color: $color-black;
    background: transparent;
}

@media screen and (max-width: 767px) {
    .input {
        width: 100%;
        height: 58px;
        padding: 0px 18px;
        margin-top: 10px;
        border-radius: 10px;
        font-size: 16px;
    }

    .input__label {
        font-size: 16px;
    }
}
</style>