const { createApp, ref } = Vue;

const DESCRIPTION = `花生營養豐富，富含膳食纖維以及維生素B1、B2、 B3、C、E之外，還富含對人體有益的不飽和脂肪酸，降低罹患心血管疾病的風險，白藜蘆醇可以抗老化，多酚讓記憶力得到明顯的改善，還可以降低焦慮及憂鬱程度。

60年前二戰後貧窮的南台灣，一般的人想吃顆糖是多麼不容易。然而在花生的故鄉–嘉義，有一位鄭媽媽，憑藉著製作花生糖的的好手藝，讓孩子有了好吃的零嘴，親朋好友還有鄰居吃過之後更是個個讚不絕口！ 鄭秀蘭傳承自鄭媽媽的好手藝，秉持著少油、少糖、少鹽的健康元素，在歷經了多年無數次嘗試之後，加入了糙米、蔓越莓、小麥等天然食材，成功讓老產品注入了活力新元素。

鄭秀蘭手工花生糖只選用北港上等花生仁，還有國產沙拉油製作而成，食材通過SGS檢驗，堅持不含防腐劑，每年投保2千萬產品責任險，堅持做到`;
const SLOGAN = `『 讓朋友吃了安心；客人吃的放心！ 』`;

let i = 1;
const PRODUCTS = [
  {
    id: i++,
    img: "/assets/images/product.1.webp",
    name: "古早原味",
    price: 160,
  },
  {
    id: i++,
    img: "/assets/images/product.2.webp",
    name: "糙米口味",
    price: 120,
  },
  {
    id: i++,
    img: "/assets/images/product.3.webp",
    name: "蔓越莓口味",
    price: 120,
  },
  {
    id: i++,
    img: "/assets/images/product.4.webp",
    name: "小麥口味",
    price: 120,
  },
  {
    id: i++,
    img: "/assets/images/product.5.webp",
    name: "鹽炒花生",
    price: 120,
  },
  {
    id: i++,
    img: "/assets/images/product.6.webp",
    name: "雪霸 (雨) 觀霧茶園 春/冬茶",
    price: "625 / 四兩裝",
  },
];

const PHONE = `0910-448480`;
const ADDRESS = `南投縣鹿谷鄉瑞田村集連巷21號`;

createApp({
  setup() {
    const description = ref(DESCRIPTION);
    const slogan = ref(SLOGAN);
    const products = ref(PRODUCTS);
    const phone = ref(PHONE);
    const address = ref(ADDRESS);
    return {
      description,
      slogan,
      products,
      phone,
      address,
    };
  },
}).mount("#app");
