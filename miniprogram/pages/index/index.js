// pages/index/index.js - 主页面逻辑
Page({
  // 页面的初始数据
  data: {
    currentFood: '',      // 当前显示的食物名称
    isAnimating: false,   // 是否正在进行动画
    resultOpacity: 1,     // 结果文字的透明度
    resultScale: 1        // 结果文字的缩放比例
  },

  // 页面加载时执行的函数
  onLoad() {
    // 页面加载时可以进行一些初始化操作
  },

  // 随机选择食物的函数
  randomFood() {
    // 如果正在动画中，不执行新的随机选择
    if (this.data.isAnimating) return;

    // 获取全局数据中的食物类型列表
    const app = getApp();
    const foodTypes = app.globalData.foodTypes;
    const allFoods = [];

    // 将所有食物类型的数组合并成一个大数组
    Object.values(foodTypes).forEach(foods => {
      allFoods.push(...foods);
    });

    // 开始动画，设置动画状态和视觉效果
    this.setData({
      isAnimating: true,      // 标记动画开始
      resultOpacity: 0.5,     // 降低透明度
      resultScale: 0.9        // 缩小显示
    });

    // 动画相关参数
    let count = 0;                    // 当前动画次数计数
    const maxCount = 10;              // 动画总共循环次数
    const interval = 100;             // 每次切换间隔时间（毫秒）

    // 动画函数
    const animate = () => {
      // 当达到最大动画次数时
      if (count >= maxCount) {
        // 生成最终的随机食物
        const randomIndex = Math.floor(Math.random() * allFoods.length);
        const finalFood = allFoods[randomIndex];

        // 更新状态，显示最终结果
        this.setData({
          currentFood: finalFood,   // 设置最终选中的食物
          isAnimating: false,      // 结束动画状态
          resultOpacity: 1,        // 恢复完全不透明
          resultScale: 1           // 恢复原始大小
        });
        return;
      }

      // 随机显示一个食物（动画过程中）
      const randomIndex = Math.floor(Math.random() * allFoods.length);
      this.setData({
        currentFood: allFoods[randomIndex]
      });

      // 继续下一次动画
      count++;
      setTimeout(animate, interval);
    };

    // 开始执行动画
    animate();
  }
})