// 时间轴滚动动画
const timelineItems = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {threshold: 0.3});

timelineItems.forEach(item => observer.observe(item));
// 热销商品数据
const hotProducts = [
  {
    rank: 1,
    category: "📱 手机",
    name: "RX Phone Pro",
    price: 6999,
    sales: 2580
  },
  {
    rank: 2,
    category: "💻 笔记本",
    name: "雷霆Gaming Pro",
    price: 12999,
    sales: 1820
  },
  {
    rank: 3,
    category: "⌚ 智能手表",
    name: "Health Watch 3",
    price: 1999,
    sales: 1560
  },
  {
    rank: 4,
    category: "📷 摄像机",
    name: "4K Camera X",
    price: 8999,
    sales: 1280
  },
  {
    rank: 5,
    category: "📱 手机",
    name: "Photo Master",
    price: 5999,
    sales: 980
  }
];

// 动态生成排行榜
function renderRanking() {
  const container = document.querySelector('.product-list');
  container.innerHTML = hotProducts
    .sort((a, b) => a.rank - b.rank)
    .map(product => `
            <div class="product-item top${product.rank}">
                <span class="rank">${product.rank}</span>
                <span class="category">${product.category}</span>
                <span class="name">${product.name}</span>
                <span class="price">¥${product.price.toLocaleString()}</span>
                <span class="sales">周销 ${product.sales}台</span>
            </div>
        `)
    .join('');
}

// 初始化
document.addEventListener('DOMContentLoaded', renderRanking);
