<template>
    <div class="container" style="padding-left: 134px;">
        <div class="photo-card" v-for="member in mediaList">
            <div class="photo-card-inner" @click="toggleModal(member)">
                <img class="magzine-logo" src="~/assets/imgs/brand-equity-logo.png" alt="logo" />
                <img class="photo" src="~/assets/imgs/Rectangle-719.png" />
                <p class="headline">{{ member.headline }}</p>
                <hr />
                <div class="row">
                    <div class="col photo-date">{{ member.date }}</div>
                    <div class="col photo-read">Read more</div>
                </div>
            </div>
        </div>
        <!-- <div class="modal-parent" v-if="currentMember" v-show="showModal">
            <div class="modal">
                <div class="row">
                    <div class="column image-section">
                        <img :src="currentMember.fullImageSrc" alt="" srcset="">
                    </div>
                    <div class="column description" style="text-align: start;">
                        <h3>About {{ currentMember.name }}</h3>
                        <span>{{ currentMember.description }}</span>
                    </div>
                </div>
                <span class="X" @click="toggleModal()">&times;</span>
            </div>
        </div>-->
    </div>
</template> 

<script>
export default {
    props: {
        mediaList: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            showModal: false,
            currentMember: null
        }
    },
    methods: {
        toggleModal(member) {
            console.log(this.$config);
            this.showModal = !this.showModal;
            this.currentMember = member
        }
    }
}
</script>
<style scoped>
.magzine-logo {
    padding: 9px;
}

.photo {
    padding: 8px;
}

.media-button {
    text-align: center;
}

.button1 {
    border-radius: 10px;
    background-color: white;
}

.photo-card-inner p {
    font-size: 11px;
    padding: 11px;
    text-align: left;
    font-weight: bold;
}

.photo-date,
.photo-read {
    font-size: 13px;
    color: #4D5358;
}


.photo-card:not(:first-child) {
    display: block;
    margin-left: 10px;
}

.photo-card-inner {
    height: 349px;
    width: 228px;
    text-align: center;
    float: left;
    border-radius: 22px;
    padding: 5px;
    margin: 35px;
    box-shadow: rgb(99 99 99 / 10%) 0px 5px 5px 5px;
}

.photo {
    border-radius: 15px;
    height: auto;
    width: 200px;
    padding: 5px;
}

.name {
    margin-top: 15px;
    font-weight: 400;
    font-size: 20px;
}

.designation {
    padding: 0 10px;
    margin-left: 20px;
    max-width: 150px;
    display: block;
    font-size: x-small;
}

.modal-parent {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #00000052;
    backdrop-filter: blur(4px);
    z-index: 9999;
}

.modal {
    position: relative;
    background: white;
    width: 50%;
    height: 60%;
    padding: 30px;
    border-radius: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 22px;
    animation: 0.5s drop;
}

@keyframes drop {
    0% {
        top: -100px;
    }

    100% {
        top: 50%;
    }
}

.X {
    position: absolute;
    right: 20px;
    top: 5px;
    font-size: 40px;
    cursor: pointer;

}

section {
    transition: 2s;
}

.row {
    display: grid;
    grid-auto-flow: column;
}

.column {
    padding: 10px;
}

.image-section img {
    border-radius: 15px;
}

.description {
    padding: 20px;
    font-size: 15px;
}

.description h3 {
    margin-bottom: 20px;
}
</style>