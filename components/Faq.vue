<template>
<div class="main-faq">
<div v-for="faq in FaqData" class="faq-list">
    <div class="question-block" @click="toggleExpanded(faq.id)">
        <div class="question">
            Q. {{faq.id}} {{faq.question}}
        </div>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
        </span>
    </div>

<div class="answer-block" :id="faq.id" v-show="faq.isShown">
    {{faq.answer}}
</div>
</div>
</div>
</template>
<style scoped>
.main-faq{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
/* .faq-list{
    width:100%;
    height: auto;
} */

.question-block{
   width: 874px;
    height: 72px;
    border-radius: 12px;
    background-color: #f2f4f8;
    align-items: center;
    margin: 15px;
    padding: 10px;
    margin-bottom: 0px;
    display: inline-flex;
}

.answer-block{
    width: 874px;
    border-radius: 12px;
    padding: 10px;
    margin: 15px;
    text-align: left;
    margin-top: 0px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%)
}

.question{
    width: 95%;
    text-align: initial;
    padding-left: 15px;
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