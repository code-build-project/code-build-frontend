<template>
    <div class="main">
        <div class="main__row">
            <div class="main__title">
                Мой<br />
                профиль
            </div>

            <div class="main__fields">
                <cabinet-input :value="user.name">
                    Имя
                </cabinet-input>

                <cabinet-input 
                    class="main__field"
                    :value="user.email" 
                >
                    E-mail
                </cabinet-input>
            </div>
        </div>

        <v-button
            class="main__button"
            @click="isPopup = true"
        >
            Изменить
        </v-button>
        
        <popup-form 
            v-if="isPopup" 
            @close="isPopup = false" 
        />
    </div>
</template>

<script>
import VButton from '@/components/common/VButton';
import PopupForm from '@/components/pageCabinet/PopupForm';
import CabinetInput from '@/components/pageCabinet/CabinetInput';
import { mapGetters } from 'vuex';

export default {
    name: 'BlockMain',

    components: {
        VButton,
        PopupForm,
        CabinetInput,
    },

    data() {
        return {
            isPopup: false,
        };
    },
    
    computed: {
        ...mapGetters(['user'])
    }
};
</script>

<style lang="scss" scoped>
.main {
    @extend .flex_column;
    width: 100%;
    max-width: 1160px;
    padding: 58px 80px 50px 72px;
    background: $color-white;
    border-radius: 29px;
}

.main__row {
    @extend .flex_row-start-between;
}

.main__title {
    height: 100%;
    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -1px;
    color: $color-black;
}

.main__fields {
    height: 100%;
}

.main__field {
    margin-top: 30px;
}

.main__button {
    align-self: center;
    width: 200px;
    height: 60px;
    margin-top: 70px;
    font-family: 'EuclidCircular';
    font-size: 18px;
    color: $color-blue;
    border: 1px solid $color-blue;
    margin-left: 110px;

    @media screen and (min-width: 1160px) {
        &:hover {
            color: $color-white;
            background: $color-blue;
        }
    }
}

@media screen and (max-width: 1160px) {
    .main {
        height: auto;
    }

    .main__row {
        flex-direction: column;
        align-items: center;
    }

    .main__title {
       text-align: center;
    }

    .main__fields {
        margin-top: 50px;
    }

    .main__button {
        margin-left: 0;
    }
}

@media screen and (max-width: 767px) {
    .main {
        padding: 37px 13px 21px 13px;
    }

    .main__title {
        font-size: 32px;
        line-height: 30px;
    }

    .main__fields {
        width: 100%;
        max-width: 400px;
        margin-top: 30px;
    }

    .main__button {
        width: 100%;
        max-width: 254px;
        height: 58px;
        margin-top: 30px;
    }
}
</style>