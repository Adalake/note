# test-npm

## 安装
### 安装依赖
```
npm install
```

### 开发调试
```
npm run serve
```

## 参考
### 搭建组件库并发布到npm
https://juejin.cn/post/6844903687668629518#heading-0

### 按需引入、打包
https://segmentfault.com/a/1190000015884948#articleHeader1

## 此版本缺陷 2021.5.31
- 发布到npm的话，是所有的组件一起发布成一个包。那么引入的也是所有的组件一起引入。需要做到：按需引入