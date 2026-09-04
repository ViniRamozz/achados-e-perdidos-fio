import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria-module').then(m => m.CategoriaModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto-module').then(m => m.ProdutoModule)
  },
  {
    path: 'lista-exercicios',
    loadChildren: () => import('./lista-exercicios/lista-exercicios-module').then(m => m.ListaExerciciosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }