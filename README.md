# Nx Monorepo Demo

This is a integrated monorepo workspace. It's managed by pnpm and nx.  
This project is created by command below:

```shell
pnpm create nx-workspace
```

## Usage

### Create App

Create app command will create a folder width some default files.These files are same as vite's `vue-ts` template.

```shell
pnpm create:app
```

### Create Component

```shell
#TODO
pnpm create:comp
```

### Create Lib

Create lib command is same as `nx g @nx/js:lib`.We put this command into the root package.json scripts attributes.

```shell
pnpm create:lib
```

### Remove Package

```shell
nx g @nx/workspace:remove <package-name>
#or
pnpm del <package-name>
```

### Dev Server

If you created a package or app.You can use the below command to run the dev server if the project has the dev server command.You can check the command in project.json file.When you are develop a project you can use any local packages with `import` statement like:

```javascript
import { isEven } from '@org/is-even';
```

```
nx <dev-server-command> <package-name>
```

## Build

The build command will compile and bundle the source code into `<root>/dist/packages/<package-name>/dist` or `<root>/dist/apps/<app-name>/dist`

```shell
nx build <package-name>
```
