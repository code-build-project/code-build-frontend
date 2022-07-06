<template>
    <div class="main">
        <div class="main__title">
            Мой<br />
            профиль
        </div>

        <div class="main__fields">
            <cabinet-input 
                :value="user.name" 
                @change="changeName($event)" 
                @blur="getPopup()"
            >
                Имя
            </cabinet-input>

            <cabinet-input 
                class="main__field"
                :value="user.email" 
                readonly
            >
                E-mail
            </cabinet-input>
        </div>
        
        <popup-cabinet 
            v-if="isPopup" 
            :newName="newName" 
            @close="isPopup = false" 
        />
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import PopupCabinet from '@/components/pageCabinet/Popup';
import CabinetInput from '@/components/pageCabinet/CabinetInput';
import { mapGetters } from 'vuex';

export default {
    name: 'BlockMain',

    components: {
        VIcon,
        VButton,
        PopupCabinet,
        CabinetInput,
    },

    computed: {
        ...mapGetters(['user'])
    },

    data() {
        return {
            newName: '',
            isPopup: false,
            isChange: false
        };
    },

    methods: {
        getPopup() {
            if (this.isChange) {
                this.isPopup = true;
                this.isChange = false;
            }
        },

        changeName(name) {
            this.isChange = true;
            this.newName = name;
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
    @extend .flex_row-center-between;
    width: 100%;
    max-width: 1160px;
    height: 403px;
    padding: 58px 80px 72px 72px;
    background: $color-white;
    border-radius: 29px;
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

@media screen and (max-width: 1160px) {
    .main {
        flex-direction: column;
        height: auto;
    }

    .main__title {
       text-align: center;
    }

    .main__fields {
        margin-top: 50px;
    }
}

@media screen and (max-width: 767px) {
    .main {
        padding: 37px 6px 21px 6px;
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
}
</style>