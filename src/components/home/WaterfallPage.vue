<template>
  <el-container>
    <el-header>
      <h1>"文化古都"洛阳</h1>
    </el-header>
    <el-main>
      <div class="card-container">
        <Waterfall :list="cards1" :width="500" :gutter="20" srcKey="imageUrl">
          <template #item="{ item }">
            <div class="card-item">
              <el-card :body-style="{ padding: '0' }">
                <LazyImg :url="item.imageUrl" />
                <div style="padding: 14px;">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </el-card>
            </div>
          </template>
        </Waterfall>
      </div>
    </el-main>

    <el-header>
      <h1>"道教圣地"茅山</h1>
    </el-header>
    <el-main>
      <div class="card-container">
        <Waterfall :list="cards2" :width="500" :gutter="20" srcKey="imageUrl">
          <template #item="{ item }">
            <div class="card-item">
              <el-card :body-style="{ padding: '0' }">
                <LazyImg :url="item.imageUrl" />
                <div style="padding: 14px;">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </el-card>
            </div>
          </template>
        </Waterfall>
      </div>
    </el-main>
  </el-container>

  <el-header>
    <h1>"六朝古都"南京</h1>
  </el-header>
  <el-main>
    <div class="card-container">
      <Waterfall :list="cards3" :width="500" :gutter="20" srcKey="imageUrl">
        <template #item="{ item }">
          <div class="card-item">
            <el-card :body-style="{ padding: '0' }">
              <LazyImg :url="item.imageUrl" />
              <div style="padding: 14px;">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </el-card>
          </div>
        </template>
      </Waterfall>
    </div>
  </el-main>
</template>

<script>
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next';
import 'vue-waterfall-plugin-next/dist/style.css';
import { ElContainer, ElHeader, ElMain, ElCard } from 'element-plus';

export default {
  components: {
    LazyImg,
    Waterfall,
    ElContainer,
    ElHeader,
    ElMain,
    ElCard,
  },
  data() {
    return {
      cards1: [
        {
          id: 1,
          title: '白马寺院内走廊',
          description: '红墙黄瓦，拱形门廊，石阶通向前方的庭院。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/白马寺_1.jpg'),
        },
        {
          id: 2,
          title: '宁静自然',
          description: '窗户内的自然和窗户外的自然。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/白马寺_2.jpg'),
        },
        {
          id: 3,
          title: '竹林庙宇',
          description: '一座古老的寺庙，在绿荫环绕中矗立着。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/白马寺_3.jpg'),
        },
        {
          id: 4,
          title: '万安山林中小道',
          description: '树木葱茏茂密，阳光透过树叶洒下斑驳的光影。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_1.jpg'),
        },
        {
          id: 5,
          title: '万安山台阶1',
          description: '在它的周围，树木葱茏、生机勃勃，仿佛一片绿色的海洋。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_台阶1.jpg'),
        },
        {
          id: 6,
          title: '万安山台阶2',
          description: '沿着石阶，穿过茂密的树林和竹林，通向山顶',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_台阶2.jpg'),
        },
        {
          id: 7,
          title: '万安山瀑布',
          description: '瀑布从悬崖上直冲而下，水花四溅，发出巨大的轰鸣声，犹如瀑布在山谷中回荡着一曲壮丽的乐章。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_瀑布.jpg'),
        },
        {
          id: 8,
          title: '湖畔红花',
          description: '宁静的湖泊和绿色植中生长着被点缀着红花。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_红花.jpg'),
        },
        {
          id: 9,
          title: '万安山自然风貌1',
          description: '壮丽的山峦与蓝天相映成趣。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_自然风貌1.jpg'),
        },
        {
          id: 10,
          title: '万安山自然风貌2',
          description: '神秘的岩石构成了独特的山景。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/万安山_自然风貌2.jpg'),
        },
        {
          id: 11,
          title: '荷花1',
          description: '盛开的荷花在清澈的水面上绽放。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/荷花_1.jpg'),
        },
        {
          id: 12,
          title: '荷花2',
          description: '湖泊中的荷花与天鹅构成了一幅繁茂的景象。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/荷花_2.jpg'),
        },
        {
          id: 13,
          title: '洛阳天际线1',
          description: '洛阳城市的壮丽天际线。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/洛阳_天际线1.jpg'),
        },
        {
          id: 14,
          title: '洛阳天际线2',
          description: '俯瞰洛阳城市繁华的天际线。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/洛阳_天际线2.jpg'),
        },
        {
          id: 15,
          title: '洛阳天际线3',
          description: '城市的天际线。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/洛阳_天际线3.jpg'),
        },
        {
          id: 16,
          title: '泰庙1',
          description: '泰庙的宏伟建筑和精美细节。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/泰庙_1.jpg'),
        },
        {
          id: 17,
          title: '天堂塔',
          description: '高耸入云的天堂塔，是洛阳的标志性建筑。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/天堂塔.jpg'),
        },
        {
          id: 18,
          title: '洛阳博物馆-石辟邪',
          description: '洛阳博物馆收藏的珍贵石辟邪文物。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/洛阳博物馆_石辟邪.jpg'),
        },
        {
          id: 19,
          title: '相伴相行',
          description: '两个人一同前行的美好时刻。',
          imageUrl: require('@/assets/pictureMaterial/luoyang/相伴相行.jpg'),
        }

      ],
      cards2:[
        {
          id: 1,
          title: '茅山小镇1',
          description: '茅山小镇宁静迷人的景色。',
          imageUrl: require('@/assets/pictureMaterial/maoshan/茅山小镇_1.jpg'),
        },
        {
          id: 2,
          title: '茅山小镇2',
          description: '茅山小镇的古色古香建筑。',
          imageUrl: require('@/assets/pictureMaterial/maoshan/茅山小镇_2.jpg'),
        },
        {
          id: 3,
          title: '茅山小镇3',
          description: '茅山小镇的美丽山水风景。',
          imageUrl: require('@/assets/pictureMaterial/maoshan/茅山小镇_3.jpg'),
        },
        {
          id: 4,
          title: '茅山小镇4',
          description: '茅山小镇的古道石桥与流水相映。',
          imageUrl: require('@/assets/pictureMaterial/maoshan/茅山小镇_4.jpg'),
        },
        {
          id: 5,
          title: '茅山小镇5',
          description: '茅山小镇的民俗风情和传统文化。',
          imageUrl: require('@/assets/pictureMaterial/maoshan/茅山小镇_5.jpg'),
        },
        {
          id: 6,
          title: '茅山水车',
          description: '茅山小镇上的传统水车。',
          imageUrl: require('@/assets/pictureMaterial/maoshan/茅山_水车.jpg'),
        }
      ],
      cards3:[
        {
          id: 1,
          title: '叶中初升的太阳',
          description: '清晨的阳光透过树叶洒落在大地上，照亮了一片新的一天。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/叶中初升的太阳.png'),
        },
        {
          id: 2,
          title: '夕阳教学楼',
          description: '夕阳西下，温暖的光线洒在教学楼上，营造出一种宁静而温馨的氛围。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/夕阳教学楼.png'),
        },
        {
          id: 3,
          title: '夕阳玄武湖',
          description: '夕阳映照在玄武湖上，湖水泛起一层金色的光泽，美不胜收。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/夕阳玄武湖.jpg'),
        },
        {
          id: 4,
          title: '悠悠校园与匆匆奔向',
          description: '悠悠校园里，学子们匆匆赶往各自的修习之地，追求知识的道路永不停歇。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/悠悠校园与匆匆奔向修图.png'),
        },
        {
          id: 5,
          title: '折柳红亭',
          description: '红亭之下，垂柳折枝，柔美的景色让人陶醉其中。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/折柳红亭.jpg'),
        },
        {
          id: 6,
          title: '教学楼一隅',
          description: '教学楼的一隅，静静地承载着学生们的求知之梦。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/教学楼一隅.jpg'),
        },
        {
          id: 7,
          title: '梧桐树-多云-宿舍楼',
          description: '多云的天空下，梧桐树与宿舍楼交相辉映，构成了一幅宜人的风景画。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/梧桐树-多云-宿舍楼.jpg'),
        },
        {
          id: 8,
          title: '砖台上的落叶',
          description: '秋风送来了落叶，它们轻轻地铺在砖台上，仿佛是大自然为我们准备的美丽装饰。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/砖台上的落叶.jpg'),
        },
        {
          id: 9,
          title: '紫金山',
          description: '紫金山脚下，山水交融，构成了一幅壮丽的自然画卷。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/紫金山.jpg'),
        },
        {
          id: 10,
          title: '自然与平静',
          description: '大自然的景色总是给人一种平静的感觉，让人心境宁静。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/自然与平静.jpg'),
        },
        {
          id: 11,
          title: '落日江景图',
          description: '夕阳西下，映照在江面上的余晖，营造出一种宁静而美丽的景象。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/落日江景图.jpg'),
        },
        {
          id: 12,
          title: '落日芦苇荡',
          description: '夕阳下的芦苇荡，金色的光辉映射在湖面上，美不胜收。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/落日芦苇荡.jpg'),
        },
        {
          id: 13,
          title: '薰衣草',
          description: '紫色的薰衣草田，芬芳的香气弥漫在空气中，令人陶醉。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/薰衣草.jpg'),
        },
        {
          id: 14,
          title: '长江落日图',
          description: '长江边的落日景色，夕阳映照在江面上，波光粼粼，美不胜收。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/长江落日图.jpg'),
        },
        {
          id: 15,
          title: '鱼嘴湿地公园',
          description: '鱼嘴湿地公园的美景，湖水清澈见底，倒映着周围的景色，宛如仙境。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/鱼嘴湿地公园.jpg'),
        },
        {
          id: 16,
          title: '黄金樱',
          description: '黄金樱绽放的季节，金黄色的花朵点缀在枝头，美轮美奂。',
          imageUrl: require('@/assets/pictureMaterial/nanjing/黄金樱放大1.jpg'),
        }
      ],
    };
  },
};
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.card-item {
  width: 100%;
}

/* 使用媒体查询，根据屏幕宽度，设置不同的卡片宽度 */
@media (max-width: 600px) {
  .card-container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
