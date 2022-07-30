<template>
    <div class="icons">
        <div v-for="(item, index) in iconsList" :key="index" :title="item.name">
            <v-icon
                class="icon"
                width="50"
                height="50"
                :path="item.path"
                fill="#ffffff"
                stroke="black"
            />
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
    name: 'Icons',

    components: { VIcon },

    data() {
        return {
            iconsList: []
        };
    },

    created() {
        // получаем названия все файлы в папке @/icons
        const icons = require.context('../../public/img', true, /^.*\.svg$/);

        // // заполняем массив импортами и названиями каждого компонента иконки
        icons.keys().forEach(item => {
            this.iconsList.push({
                path: 'img' + item.substring(1),
                name: item.substring(2)
            });
        });
    }
};
</script>

<style lang="scss" scoped>
.icons {
    background: turquoise;
    display: flex;
    flex-direction: row !important;
    height: 100%;
    align-items: flex-start !important;
    justify-content: flex-start !important;
    flex-wrap: wrap;
    padding: 40px;
}

.icon {
    margin-right: 50px;
}
</style>