# hj-components-rn

react native 的组件库

## TODO

- [ ] 组件库文档,dumi beta 版才支持 rn，所有等他更新了再上文档
- [ ] 组件库在线化演示
- [ ] sku 选择组件
- [ ] 商品分类滑动组件
- [ ] 商品加减组件

## 发布

```sh
# 打包发布
npm run release
```

## 安装

```sh
yarn add hj-components-rn
```

## Usage

```js
import { button } from 'hj-components-rn';

// ...
```

## 注意

- release 需要 githubtoken 环境变量,window 可在在根目录添加.env 文件内添加 token

```
GITHUB_TOKEN="你的token"
```

## commit 提交格式（注意冒号后面有空格）

常用的 type 类别

- build
- ci
- chore：构建过程或辅助工具的变动
- docs：文档（documentation）
- feat：新功能（feature）
- fix：修补 bug
- perf：性能优化
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- revert：复原
- style： 格式（不影响代码运行的变动）
- test：增加测试

## License

MIT
