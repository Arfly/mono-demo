# Nx&PNPM 项目简介

## 安装

- [安装 pnpm](https://pnpm.io/installation)
  使用 npm 的方式安装

  ```shell
  npm install -g pnpm
  ```

- [安装 nx](https://nx.dev/getting-started/installation)
  使用 pnpm 全局安装

  ```shell
  pnpm install --global nx@latest
  ```

- 安装依赖

  ```shell
  # 为project-name项目安装depend-name依赖
  pnpm add --filter <project-name> <depend-name>

  # 为project-name项目安装depend-name依赖，depend从workspace空间中检索
  pnpm add --filter <project-name> <depend-name> -workspace
  ```

- 项目 clone 后安装所有项目的依赖包
  ```shell
  pnpm install
  ```

## 运行

```shell
# 相当于 cd apps/vite-project && npm run dev
nx dev vite-project
```

## 创建项目

- 创建一个 js 的功能模块，例如下面会创建一个名为 test 的功能模块

  ```shell
  # 在packages文件夹下生成一个名为test功能模块，引入路径为packages下的test文件夹
  nx g @nx/js:lib test --publishable --importPath test

   # 在apps文件夹下生成一个名为test功能模块，引入路径为apps下的test文件夹
  nx g @nx/js:lib test --publishable --importPath test --directory=apps
  ```
