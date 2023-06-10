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

- 项目 clone 后安装所有项目的依赖包
  ```shell
  pnpm install
  ```

## 运行

```
nx dev vite-project
```

## 创建项目

- 创建一个 js 的功能模块，例如下面会创建一个名为 test 的功能模块
  ```shell
  nx g @nx/js:lib test --publishable --importPath test
  ```
