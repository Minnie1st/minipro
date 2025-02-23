# 今天吃什么 - 微信小程序

## 项目介绍
这是一个帮助用户随机选择今天吃什么的微信小程序。当用户感到纠结不知道吃什么的时候，可以通过这个小程序快速获得建议。

## 主要功能
- 随机推荐：点击按钮随机推荐不同类型的美食
- 动画效果：推荐过程中有流畅的动画效果
- 多种美食：包含中餐、西餐、日料、韩餐、快餐和小吃等多种类型

## 目录结构说明
```
项目根目录/
├── miniprogram/           # 小程序主目录
│   ├── app.js            # 全局配置文件，包含所有食物数据
│   ├── app.json          # 小程序配置文件
│   ├── app.wxss          # 全局样式文件
│   └── pages/            # 页面文件夹
│       └── index/        # 主页面
│           ├── index.js   # 主页面逻辑
│           ├── index.wxml # 主页面结构
│           └── index.wxss # 主页面样式
└── project.config.json   # 项目配置文件
```

## 维护指南

### 如何添加新的食物选项
1. 打开 `miniprogram/app.js` 文件
2. 在 `globalData.foodTypes` 中找到对应的分类（如中餐、西餐等）
3. 在数组中添加新的食物名称

例如，要添加新的中餐选项：
```javascript
chinese: ['火锅', '炒菜', '面食', '烧烤', '粤菜', '川菜', '湘菜', '早茶', '新增菜品'],
```

### 如何修改界面样式
- 全局样式：修改 `miniprogram/app.wxss`
- 主页样式：修改 `miniprogram/pages/index/index.wxss`

### 如何修改动画效果
在 `miniprogram/pages/index/index.js` 文件中：
- 修改 `maxCount`：控制动画持续时间
- 修改 `interval`：控制动画切换速度

## 注意事项
1. 修改代码时请保持原有的注释，便于理解
2. 添加新功能时建议先备份原有代码
3. 修改完成后在微信开发者工具中测试，确保功能正常

## 技术支持
如遇到技术问题，请参考：
- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- 或联系技术支持人员