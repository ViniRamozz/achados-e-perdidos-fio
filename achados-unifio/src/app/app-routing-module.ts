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
  },
   {
    path: 'lista-exercicios2',
    loadChildren: () => import('./lista-exercicios2/lista-exercicios2-module').then(m => m.ListaExercicios2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }