import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';
import { AuthGuard } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'post/index', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'post/:postId/view', component: ViewComponent, canActivate: [AuthGuard] },
  { path: 'post/create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'post/:postId/edit', component: EditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
