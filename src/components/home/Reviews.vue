<template>
  <div class="reviews">
    <div class="reviews__title">Отзывы о наших курсах</div>

    <div class="reviews__list">
      <div v-for="(item, index) in reviewList" :key="index">
        <v-review-card 
          class="reviews__list-item" 
          :height="index === 1 ? '700' : '335'"
          :score="item.score"
          :text="item.text"
          :name="item.name"
          :date="item.date"/>
      </div>
    </div>

    <div class="reviews_row">
      <v-button 
        fontFamily="EuclidCircular"
        fontSize="18"
        :isIcon="false"
      >
        Показать еще
      </v-button>
    </div>
  </div>
</template>

<script>
import VReviewCard from '@/components/common/VReviewCard.vue';
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Reviews',

  components: { 
    VReviewCard,
    VButton,
  },

  data() {
    return {
      reviewList: [
        { 
          score: '3,2',
      
          name: 'Кристина Белова',
          date: '21 апреля 2012'
        },
        {
          score: '2,2',
          text: `Всем привет! Мне 27, я из Королёва.  
            По окончании школы я связал свою жизнь 
            с полиграфией и поступил в Университет Печати им. Ивана Фёдорова. Работаю дизайнером наружной рекламы и мне надоело. Всем привет! Мне 27, я из. Всем привет! Мне 27, я из Королёва.  По окончании школы я связал свою жизнь 
            с полиграфией и поступил в Университет Печати им. Ивана Фёдорова. Работаю дизайнером наружной рекламы и мне надоело. Всем привет! Мне 27, я из.Всем привет! Мне 27, я из Королёва.  По окончании школы я связал свою жизнь 
            с полиграфией и поступил в Университет Печати им. Ивана Фёдорова. Работаю дизайнером наружной рекламы и мне надоело. Всем привет! Мне 27, я из. Всем привет! Мне 27, я из Королёва.  
            По окончании школы я связал свою жизнь.`,
          name: 'Виталий Пароходов',
          date: '1 сентября 2019'
        },
        {
          score: '1,2',
        
          name: 'Дядя Степа',
          date: '11 сентября 2015'
        },
        { 
          score: '4,2',
     
          name: 'Жора Прохоров',
          date: '6 мая 2018'
        },
        {
          score: '1,3',
        
          name: 'Арсений Белов',
          date: '14 декабря 2021'
        },
        {
          score: '3,2',
      
          name: 'Федор Емельяненко',
          date: '22 августа 2012'
        },
        { 
          score: '4,7',
      
          name: 'Катя Старшова',
          date: '16 июня 2011'
        },
        {
          score: '2,8',
   
          name: 'Арсений Белов',
          date: '14 октября 2013'
        },
        {
          score: '1,2',
    
          name: 'Федор Емельяненко',
          date: '2 января 2015'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.reviews {
  width: 1160px;
  padding: 100px 0px 80px 0px;

  &__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -1.5px;
    color: #18214D;
  }

  &__list {
    height: 800px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 50px;
    overflow: hidden;
  }

  &__list-item {
    margin-bottom: 30px;
  }

  // общие классы
  &_row {
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 20px;
  }
}
</style>
