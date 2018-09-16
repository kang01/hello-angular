# HelloAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## use
@NgModule装饰器用来为模块定义元数据。declarations列出了应用中的顶层组件
providers列出会在此模块中“注入”的服务（Service）
BrowserModule提供了运行在浏览器中的应用所需要的关键服务（Service）和指令（Directive），这个模块所有需要在浏览器中跑的应用都必须引用；
FormsModule提供了表单处理和双向绑定等服务和指令
HttpModule提供Http请求和响应的服务

@Inject('auth')，这个修饰符的意思是请到系统配置中找到名称为auth的那个依赖注入到我修饰的变量中,有一个问题，就是在 VSCode 中没有方法的提示和类型检查了

方括号的含义是单向绑定，就是说我们在组件中给 model 赋的值会设置到 HTML 的 input 控件中。 [()] 是双向绑定的意思，就是说HTML对应控件的状态的改变会反射设置到组件的 model 中。ngModel 是 FormModule 中提供的指令，它负责从Domain Model（这里就是 username 或 password ，以后我们可用绑定更复杂的对象）中创建一个 FormControl 的实例，并将这个实例和表单的控件绑定起来。
usernameRef.errors?.required ?就是标明errors可能为空，在其为空时就不用调用后面的属性了

