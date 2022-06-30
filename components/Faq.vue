<template>
<div class="main-faq">
<div v-for="faq in FaqData" class="faq-list">
    <div class="question-block" @click="toggleExpanded(faq.id)">
        <div class="question">
            Q. {{faq.id}} {{faq.question}}
        </div>
         <span v-if="!faq.isShown">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
        </span>
        <span v-if="faq.isShown">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>
        </span>
    </div>

<Transition enter-active-class="enter-active"
    leave-active-class="leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave">
    <div class="answer-block" :id="faq.id" v-show="faq.isShown">
    {{faq.answer}}
</div>
</Transition>
</div>
</div>
</template>
<style scoped>
.main-faq{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.faq-list{
    width:100%;
    height: auto;
}

.question-block{
    width: 100%;
    background-color: #f2f4f8;
    margin: 15px;
    padding: 20px;
    margin-bottom: 0px;
    display: inline-flex;
    border-radius: 10px;
}

.answer-block{
    /* text-align: left; */
    width: 100%;
    padding: 10px 50px;
    margin: 15px;
    margin-top: 0px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    text-align: justify;
}

.question{
    width: 95%;
    text-align: initial;
    padding-left: 15px;
}

.enter-active,
.leave-active {
  overflow: hidden;
  transition: height .2s linear;
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
        beforeEnter(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = '0px';
        }

        element.style.display = null;
      });
    },
    enter(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = `${element.scrollHeight}px`;
        });
      });
    },
    afterEnter(element) {
      element.style.height = null;
    },
    beforeLeave(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = `${element.offsetHeight}px`;
        }
      });
    },
    leave(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = '0px';
        });
      });
    },
    afterLeave(element) {
      element.style.height = null;
    },
    
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