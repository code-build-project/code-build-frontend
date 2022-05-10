<template>
    <ul class="dropdown">
        <li class="dropdown__item-first">
            <v-icon
                class="dropdown__icon-user"
                path="img/user.svg"
            />
            <span class="dropdown__name">{{ user.name }}</span>
        </li>

        <li class="dropdown__item" @click="setRoute('/cabinet')">
            Мой профиль
            <v-icon class="dropdown__icon-profile" path="img/profile.svg" />
        </li>

        <li class="dropdown__item" @click="setRoute('/favorites')">
            Избранное
            <v-icon class="dropdown__icon-heart" path="img/heart.svg" />
        </li>

        <li class="dropdown__item-last" @click="onExit()">
            Выйти
            <v-icon class="dropdown__icon-exit" path="img/exit.svg" />
        </li>

        <v-button
            v-if="!user.isPremium"
            class="dropdown__button"
            type="active"
            @click="setRoute('subscribe')"
        >
            <v-icon 
                class="dropdown__icon-premium" 
                path="img/premium.svg" 
            />
            Купить премиум
        </v-button>
    </ul>
</template>

<script>
import { mapState } from 'vuex';
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';

export default {
    name: 'MenuUserDropdown',

    components: {
        VIcon,
        VButton
    },

    computed: {
        ...mapState({
            user: state => state.user,
        })
    },

    methods: {
        setRoute(route) {
            this.$router.push(`${route}`);
            this.$emit('close')
        },

        onExit() {
            this.$service.auth.logOut();
        }
    }
};
</script>

<style lang="scss" scoped>
.dropdown__icon-user {
    @extend .flex_row-center-center;
    width: 44px;
    height: 44px;
    border: 1px solid $color-blue;
    border-radius: 8px;
    stroke: $color-blue;
    padding: 13px;
}

.dropdown__name {
    max-width: 250px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.dropdown {
    @extend .flex_column-start-center;
    position: absolute;
    z-index: 2;
    width: 254px;
    top: 60px;
    right: 10px;
    background: $color-white;
    box-shadow: 0px 0px 17px rgba(163, 163, 163, 0.24);
    border-radius: 8px;
    padding: 7px 24px 8px 24px;
}

.dropdown__item-first {
    width: 100%;
    height: 82px;
    display: none;
}

.dropdown__item {
    @extend .flex_row-center-between;
    width: 100%;
    height: 60px;
    border-top: 1px solid #f2f2f2;

    &:nth-child(2) {
        border-top: none;
    } 

    &:hover {
        cursor: pointer;
        color: $color-blue;

        * {
            stroke: $color-blue;
        }
    }
}

.dropdown__item-last {
    @extend .dropdown__item;
    color: $color-gray;
}

.dropdown__icon-profile {
    width: 18px;
    height: 18px;
    stroke: $color-gray;
}

.dropdown__icon-heart {
    width: 18px;
    height: 16px;
    fill: transparent;
    stroke: $color-gray;
}

.dropdown__icon-exit {
    width: 20px;
    height: 20px;
    stroke: $color-gray;
}

.dropdown__button {
    width: 204px;
    height: 55px;
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 16px;
}

.dropdown__icon-premium {
    width: 17px;
    height: 17px;
    fill: $color-white;
    margin-right: 9px;
}

@media screen and (max-width: 1023px) {
    .dropdown__icon-user {
        width: 38px;
        height: 38px;
        padding: 11px;
        margin-right: 16px;
    }

    .dropdown__name {
        max-width: 140px;
    }

    .dropdown {
        top: 80px;
        right: -52px;
        padding: 0 28px 22px 28px;
    }

    .dropdown__item-first {
        display: flex;
        align-items: center;
    }

    .dropdown__item {
        &:nth-child(2) {
            border-top: 1px solid #f2f2f2;
        } 
    }
}
</style>