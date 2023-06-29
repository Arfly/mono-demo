# Nx Monorepo Demo

This is a integrated monorepo workspace. It's managed by pnpm and nx.  
This project is created by command below:

```shell
pnpm create nx-workspace
```

## Usage

| Command                                  | Description                                                                                                                                    |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm create:app`                        | Create app command will create a folder width some default files in apps folder.These files are same as vite's `vue-ts` template.              |
| `pnpm create:comp`                       | Create component command will create a folder width some default files in packages folder.                                                     |
| `pnpm create:lib`                        | Create lib command is same as `nx g @nx/js:lib`.We put this command into the root package.json scripts attributes.                             |
| `pnpm del <package-name>`                | Delete command will remove the project folder you choose.And it will remove related config in tsconfig.json file.                              |
| `nx <dev-server-command> <package-name>` | Run the dev server for the package you choose if the project's configure file has the dev task.                                                |
| `nx <build-command> <package-name>`      | Build the package you choose.The outputs content will be placed in `<root>/dist/apps/<name>/dist` or `<root>/dist/packages/<name>/dist`folder. |

If you created a package or app.You can use the below command to run the dev server if the project has the dev server command.You can check the command in project.json file.When you are develop a project you can use any local packages with `import` statement like:

```javascript
import { isEven } from '@org/is-even';
```
