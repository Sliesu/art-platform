<template>
  <div>
    <div class="block text-center" id="topNav">
      <el-carousel height="400px">
        <el-carousel-item v-for="image in images" :key="image.url">
          <img :src="image.url" :alt="image.alt" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <el-menu-item index="0" class="type-option">优美摄影作品</el-menu-item>
      <el-menu-item index="1" class="type-option">创意艺术作品</el-menu-item>
      <div class="flex-grow" />
      <!--      <el-menu-item index="1">Processing Center</el-menu-item>-->
      <el-sub-menu index="2">
        <template #title>优先显示</template>
        <el-menu-item index="2-1">人气</el-menu-item>
        <el-menu-item index="2-2">最新</el-menu-item>
        <el-menu-item index="2-3">关注</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
    <WaterfallPage/>
  </div>
</template>

<script>

import WaterfallPage from "@/components/home/WaterfallPage";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {WaterfallPage},
  data() {
    return {
      activeIndex: '0', //展示类型选项
      images: [
        {
          url: require('@/assets/carousel/1.jpg'),
          alt: 'Image 1'
        },
        {
          url: require('@/assets/carousel/2.png'),
          alt: 'Image 2'
        },
        {
          url: require('@/assets/carousel/3.jpg'),
          alt: 'Image 3'
        },
        {
          url: require('@/assets/carousel/4.jpg'),
          alt: 'Image 4'
        }
      ],
      cards: [
        {
          id: 1,
          title: 'Card 1',
          description: 'This is the description for Card 1.',
          imageUrl: require('@/assets/pictureMaterial/luoyang/白马寺_1.jpg'),
        },
        {
          id: 2,
          title: 'Card 2',
          description: 'This is the description for Card 2.',
          imageUrl: require('@/assets/pictureMaterial/luoyang/白马寺_2.jpg'),
        },
        {
          id: 3,
          title: 'Card 3',
          description: 'This is the description for Card 3.',
          imageUrl: require('@/assets/pictureMaterial/luoyang/白马寺_3.jpg'),
        },
        {
          id: 4,
          title: 'Card 4',
          description: 'This is the description for Card 4.',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_1.jpg'),
        },
        {
          id: 5,
          title: 'Card 5',
          description: 'This is the description for Card 5.',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_台阶1.jpg'),
        },
        {
          id: 6,
          title: 'Card 6',
          description: 'This is the description for Card 6.',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_台阶2.jpg'),
        },
        {
          id: 7,
          title: 'Card 7',
          description: 'This is the description for Card 7.',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_瀑布.jpg'),
        },
        {
          id: 8,
          title: 'Card 8',
          description: 'This is the description for Card 8.',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_红花.jpg'),
        },
        // Add more cards as needed
      ],
      cardHeight: 'auto',
    };
  },
  methods: {
    generateInfiniteCards() {
      const infiniteCards = [];
      const numCards = 10; // Number of cards to render initially
      const numVisibleCards = 4; // Number of visible cards at a time

      for (let i = 0; i < numCards; i++) {
        const cardIndex = i % this.cards.length;
        infiniteCards.push(this.cards[cardIndex]);
      }

      // Calculate card height based on visible cards
      const visibleCardHeight = 100 / numVisibleCards;
      this.cardHeight = `${visibleCardHeight}%`;

      return infiniteCards;
    },
  },
};
</script>

<style scoped>
#topNav {
  margin-top: 80px;
  height: 300px;
  margin-bottom: 300px;
}

/*下沉式卡片*/
.carousel-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.card-container {
  margin-top: 20px;
}

.card-image {
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.row-bg {
  margin-bottom: 20px;
}

.row-bg:last-child {
  margin-bottom: 0;
}

.card-item {
  margin-bottom: 20px; /* 调整卡片之间的高度间距 */
}
/*二级菜单*/
.flex-grow {
  flex-grow: 1;
}
.type-option {
  font-weight: bold;
  font-size: 20px;
}
</style>
