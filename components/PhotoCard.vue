<template>
  <div class="container">
    <div class="photo-card" v-for="member in membersList" :key="member.id">
      <div class="photo-card-inner" @click="toggleModal(member)">
        <img class="photo" :src="imgUrl(member.imgUrl)" />
        <p class="name">{{ member.name }}</p>
        <span class="designation">{{ member.designation }}</span>
      </div>
    </div>
    <div class="modal-parent" v-if="currentMember" v-show="showModal">
      <div class="modal">
        <div class="row model-image">
          <div class="column image-section">
            <img :src="imgUrl(currentMember.imgUrl)" alt="" srcset="" />
          </div>
          <div class="column description" style="text-align: justify">
            <h3>
              <strong>{{ currentMember.name }}</strong>
            </h3>
            <span>{{ currentMember.description }}</span>
          </div>
        </div>
        <span class="X" @click="toggleModal()">&times;</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    membersList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      currentMember: null,
    };
  },
  methods: {
    toggleModal(member) {
      if (this.$device.mobile) {
        return;
      }
      this.showModal = !this.showModal;
      this.currentMember = member;
    },
    imgUrl(src) {
      /* eslint-disable */
      try {
        return require(`@/assets/imgs/${src}`);
      } catch (error) {
        return require(`@/assets/imgs/step-image.png`);
      }
      /* eslint-disable */
    },
  },
};
</script>
<style scoped>
.photo-card:not(:first-child) {
  display: block;
  margin-left: 10px;
}

.photo-card-inner {
  height: auto;
  width: 200px;
  max-height: 250px;
  min-height: 300px;
  text-align: center;
  float: left;
  /* border-radius: 10px; */
  border-radius: 24px;
  padding: 12px;
  margin: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.photo {
  border-radius: 10px;
  height: 180px;
  width: 200px;
  padding: 5px;
  filter: grayscale(100);
}

.photo:hover {
  filter: grayscale(0);
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
  color: #76787a;
  font-size: 13px;
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
  height: fit-content;
  padding: 30px;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  animation: 0.5s drop;
}

.model-image {
  align-items: center;
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
  font-size: 14px;
}

.description h3 {
  margin-bottom: 20px;
}
</style>
