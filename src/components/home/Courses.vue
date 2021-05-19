<template>
  <div class="courses__wrap">
    <div class="courses">
      <!-- Левая часть -->
      <div class="courses_column">
        <div class="courses__icon">
          <icon-play />
        </div>

        <div class="courses__title">
          В нашем сервисе 
          большинство курсов 
          являются полностью
          бесплатными
        </div>

        <div class="courses__subtitle">
          Вы можете приступить к изучению 
          как платных, так и бесплатных 
          курсов прямо сейчас
        </div>

        <v-button 
          class="courses_top70"
          fontFamily="EuclidCircular"
          fontSize="18"
          textColor="#FFFFFF"
          iconWidth="24"
          iconHeight="24"
        >
          Все курсы
        </v-button>
      </div>
      <!-- Левая часть -->

      <!-- Правая часть -->
      <div class="courses_row">
        <div class="courses_column">
          <v-course-card class="courses_top70">
            <template #text>
              Создание сайта с нуля на CMS WordPress
            </template>
          </v-course-card>

          <v-course-card class="courses_top35">
            <template #text>
              Изучение языка Ruby для начинающих
            </template>
          </v-course-card>
        </div>

        <div class="courses_column courses_left30">
          <v-course-card fire >
            <template #text>
              Изучение языка Си для начинающих
            </template>
          </v-course-card>

          <v-course-card class="courses_top35" level="Intermediate">
            <template #text>
              Уроки Java Android программирования
            </template>
          </v-course-card>
        </div>
      </div>
      <!-- Правая часть -->
    </div>
  </div>
</template>

<script>
import IconPlay from '@/icons/IconPlay.vue'

import VCourseCard from '@/components/common/VCourseCard.vue'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Courses',
  components: { 
    IconPlay, 
    VCourseCard,
    VButton,
  }
}
</script>

<style lang="scss" scoped>
.courses__wrap {
  @extend .courses_center;
  width: 100%;
  background: #17191f;
}

.courses {
  width: 1160px;
  height: 1045px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &__icon {
    @extend .courses_center;
    width: 90px;
    height: 90px;

    border: 2px solid #272A37;
    border-radius: 20px;
  }

  &__title {
    width: 450px;

    margin-top: 65px;

    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.01em;

    color: #ffffff;

    &:after {
      content: "FREE";

      position: absolute;
      width: 56px;
      height: 29px;
  
      background: #EE3465;
      border-radius: 5px;

      display: inline-flex;
      align-items: center;
      justify-content: center;
      
      font-weight: 500;
      font-size: 11px;
      line-height: 24px;
      color: #FFFFFF;

      margin-top: 15px;
      margin-left: 10px;
    }
  }

  &__subtitle {
    width: 340px;

    margin-top: 35px;

    font-family: 'Circe';
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.025em;

    color: #43485E;
  }

  // общие классы
  &_center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &_column {
    display: flex;
    flex-direction: column;
  }

  &_row {
    display: flex;
    flex-direction: row;
  }

  &_top35 {
    margin-top: 35px;
  }

  &_top70 {
    margin-top: 70px;
  }

  &_left30 {
    margin-left: 30px;
  }
}
</style>
