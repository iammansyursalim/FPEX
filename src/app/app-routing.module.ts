import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pilihkelas',
    loadChildren: () => import('./halaman/pilihkelas/pilihkelas.module').then( m => m.PilihkelasPageModule)
  },
  {
    path: 'pilihminggu',
    loadChildren: () => import('./halaman/pilihminggu/pilihminggu.module').then( m => m.PilihmingguPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./halaman/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'term',
    loadChildren: () => import('./term/term.module').then( m => m.TermPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
