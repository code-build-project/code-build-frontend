<template>
  <div class="checkbox">
    <input
      :id="keyField"
      class="checkbox-input"
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    />
    <label class="checkbox-label" :for="keyField"> </label>
  </div>
</template>

<script>
export default {
  name: 'VCheckBox',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    keyField: {
      type: [Number, String],
      default: 1,
    },
    checked: Boolean,
  },
}
</script>

<style lang="scss" scoped>
/* для элемента input c type="checkbox" */
.checkbox-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label, связанного с .custom-checkbox */
.checkbox-input + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  padding-top: 2px;
}

/* создание в label псевдоэлемента before со следующими стилями */
.checkbox-input + label::before {
  content: '';
  display: inline-block;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #B1B8C6;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 70% 70%;
  cursor: pointer;
}

/* стили при наведении курсора на checkbox */
.checkbox-input:not(:disabled):not(:checked) + label:hover::before {
  border-color: #0083f5;
}

/* стили для активного чекбокса (при нажатии на него) */
.checkbox-input:not(:disabled):active + label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.checkbox-input:focus:not(:checked) + label::before {
  border-color: #0083f5;
}

/* стили для чекбокса, находящегося в состоянии checked */
.checkbox-input:checked + label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 11'%3e%3cpath fill='white' d='M5.75014 8.2755L13.7931 0.231628L15.0313 1.46888L5.75014 10.75L0.181641 5.1815L1.41889 3.94425L5.75014 8.2755Z'/%3e%3c/svg%3e");
}

/* стили для чекбокса, находящегося в состоянии disabled */
.checkbox-input:disabled + label::before {
  background-color: #e9ecef;
}
</style>
