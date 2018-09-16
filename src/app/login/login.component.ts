import { Component, OnInit, Inject } from '@angular/core';
// import { AuthService } from '../core/auth.service';


// 方括号[]的作用是说把等号后面当成表达式来解析而不是当成字符串
// [()] 是双向绑定的意思，就是说HTML对应控件的状态的改变会反射设置到组件的 model 中
@Component({
  selector: 'app-login',
  template: `
   <div>
   <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
   <fieldset ngModelGroup="login">
    <input  required type=text [(ngModel)]="username" name="username" #usernameRef="ngModel" minlength="3">{{usernameRef.errors | json}}
    <div *ngIf="usernameRef.errors?.required">this is required</div>
    <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
    <input  required type="password" [(ngModel)]="password" name="password" #passwordRef="ngModel">{{passwordRef.errors | json}}
    <div *ngIf="passwordRef.errors?.required">this is required</div>
    <button (click)="onClick()">Login</button>
    <button type="submit">Submit</button>
    </fieldset>
    </form>
   </div>
  `,
  styles: [
    `
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }`
  ],
  // providers:[AuthService]
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  // @Inject('auth')，这个修饰符的意思是请到系统配置中找到名称为auth的那个依赖注入到我修饰的变量中
  // 有一个问题，就是在 VSCode 中没有方法的提示和类型检查了
  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }
  // onClick(username,password) {
  //   console.log(this.service.loginWithCredentials(username,password));
  // }
  // 双向绑定
  onClick() {
    console.log(this.service.loginWithCredentials(this.username,this.password));
  }
  onSubmit(formValue) {
    console.log(formValue);
  }
}
