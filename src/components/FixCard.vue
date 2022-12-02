<template>
    <div class="card">
      <div class="front">
        <img
        v-if="imgUrl" :src="imgUrl" :alt="title">
        <img class="not_found"
          v-else src="https://static.wikia.nocookie.net/spaceflight-simulator/images/f/fd/Image_not_found.jpeg/revision/latest/top-crop/width/360/height/360?cb=20211009052647" alt="title"
        >
      </div>
      <div class="back">
        <div>{{title}}</div>
        <div>{{originalTitle}}</div>
        <div><lang-flag :iso="language"/></div>
        <div>{{overview}}</div>
        <div>{{score}}</div>
        <font-awesome-icon v-for="i in score.score" :key="i" icon="fa-solid fa-star"
        :style="{color:'yellow'}"/>
        <font-awesome-icon v-for="i in (score.maxScore - score.score)" :key="i"
        icon="fa-regular fa-star" :style="{color:'yellow'}"/>
      </div>
    </div>

</template>

<script>
export default {
  name: 'FixCard',
  props: {
    title: String,
    originalTitle: String,
    language: String,
    score: Object,
    imgUrl: String,
    overview: String,
  },
};
</script>

<style lang="scss" scoped>
img{
  width: 100%;
}
.card{
  perspective: 1000px;
  height: 552px;
  width: 433px;
  background-color:black;
  color: white;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.card .front {
    position: absolute;
    transform: rotateY(0deg);
    backface-visibility: hidden;
    transition: 0.4s linear;
    text-align: center;
}
.card .back {
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: 0.4s linear;
}
.card:hover .front {
    transform: rotateY(-180deg);
    cursor: pointer;
}
.card:hover .back {
    transform: rotateY(0deg);
    cursor: pointer;
}

</style>
