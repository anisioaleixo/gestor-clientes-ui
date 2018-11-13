import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';


import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';

@NgModule({
  declarations: [ClienteCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    InputMaskModule,
  ],
  exports: [ClienteCadastroComponent]
})
export class ClienteModule { }
