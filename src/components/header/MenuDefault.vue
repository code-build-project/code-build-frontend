<template>
    <div class="menu">
        <router-link 
            class="menu__link" 
            to="/auth"
        >
            Войти 
        </router-link>

        <v-button
            class="menu__button"
            type="active"
            @click="$router.push('/subscribe')"
        >
            <v-icon 
                class="menu__icon" 
                path="img/premium.svg" 
            />
            Премиум
        </v-button>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';

export default {
    name: 'MenuDefault',

    components: {
        VIcon,
        VButton
    }
};
</script>

<style lang="scss" scoped>
.menu {
    @extend .flex_row-center;
    font-size: 18px;
}

.menu__link {
    color: $color-pink;

    &:hover {
        cursor: pointer;
        color: $color-black;
    }
}

.menu__button {
    width: 168px;
    height: 60px;
    margin-left: 45px;
}

.menu__icon {
    width: 21px;
    height: 21px;
    margin-right: 9px;
    fill: $color-white;
}

@media screen and (max-width: 1160px) {
    .menu__link {
        color: $color-black;
    }

    .menu__button {
        display: none;
    }
}
</style>