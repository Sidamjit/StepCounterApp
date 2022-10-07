import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },

  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'step-length-setter',
    loadChildren: () => import('./pages/step-length-setter/step-length-setter.module').then( m => m.StepLengthSetterPageModule)
  },
  {
    path: 'body-setting',
    loadChildren: () => import('./pages/body-setting/body-setting.module').then( m => m.BodySettingPageModule)
  },
  {
    path: 'instruction',
    loadChildren: () => import('./pages/instruction/instruction.module').then( m => m.InstructionPageModule)
  },
  {
    path: 'motivation',
    loadChildren: () => import('./pages/motivation/motivation.module').then( m => m.MotivationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
