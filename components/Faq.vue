<template>
  <div class="main-faq">
    <div v-for="faq in FaqData" class="faq-list">
      <div class="question-block" @click="toggleExpanded(faq.id)">
        <div class="question">Q. {{ faq.id }} {{ faq.question }}</div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </span>
      </div>

      <Transition>
        <div class="answer-block" :id="faq.id" v-show="faq.isShown">
          {{ faq.answer }}
        </div>
      </Transition>
    </div>
  </div>
</template>
<style scoped>
.main-faq {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.faq-list {
  width: 100%;
  height: auto;
}

.question-block {
  width: 100%;
  background-color: #f2f4f8;
  margin: 15px;
  padding: 10px;
  margin-bottom: 0px;
  display: inline-flex;
}

.answer-block {
  text-align: left;
  width: 100%;
  padding: 10px;
  margin: 15px;
  margin-top: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.question {
  width: 95%;
  text-align: initial;
  padding-left: 15px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s cubic-bezier(0, 1, 0.5, 1) \;;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<script lang="js">
export default {
    props: {
        FaqData: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            currentIndex : 0,
        }
    },
    methods:{
        toggleExpanded(faqId){
            if(this.currentIndex !== faqId) {
            this.currentIndex = faqId;
            this.FaqData.forEach(ele=>{ele.isShown=false});
            }
            this.FaqData[faqId-1].isShown = !this.FaqData[faqId-1].isShown;
        }
    }

}
</script>