import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';

@NgModule({
  declarations: [ClienteCadastroComponent],
  imports: [CommonModule],
  exports: [ClienteCadastroComponent]
})
export class ClienteModule { }
