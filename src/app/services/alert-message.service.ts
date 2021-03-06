import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { IInvoice } from '../interfaces/IUser';
import { AppState } from '../store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService  {
  invoices:IInvoice[]=[];

  constructor(private store:Store<AppState>){
    this.store.select('user').subscribe(( { user, loading, error} )=>{
      this.invoices = user.invoices;
    });
  }
  messageLoginFail(){
   return Swal.fire({
      icon:'error',
      title: 'Usuario o Contraseña incorrectas',
      timer:2500
    })
  }
  messageAttempsPassed(){
    Swal.fire({
      icon:'error',
      title: 'Intentos Superados',
      text: 'Contacta con el administrador',
      confirmButtonText:'<i class="fab fa-whatsapp fa-2x pr-2">Whatsapp</i>'
    })
  }
  messageResetNumAttempsPassed(){
    Swal.fire({
      icon:'info',
      title: 'Numero de intentos reseteados',
      timer:2000
    })
  }
  messageDetailInvoices(){
    Swal.fire({
      icon: 'info',
      title: 'Facturación',
      html: `Usted tiene <b>${this.invoices.length}</b> 
            facturas en mora, la suma total equivale a <b>COP${this.getTotalValues()}</b>`,
    });
    
  }
  messageNoPay(){
     Swal.fire({
        icon: 'question',
        title: 'Cuentanos por que no puedes realizar el pago',
        input: 'textarea',
        inputAttributes: {
          autocapitalize: 'off'
        },
        confirmButtonText:'Enviar',
        inputValidator: (value) => {
          if (!value) {
          return '¡Necesitas escribir algo!'
          }
        }
      }).then((result)=>{
        if (result.isConfirmed){
          Swal.fire({
            icon:'success',
            title:'Mensaje enviado con exito',
            text: 'Esperamos tengas un excelente día',
            timer:2000
          })
        }
      })
  }
  getTotalValues(){
    const total = this.invoices.map(invoice=> invoice.value).reduce((acc,value)=>acc + value , 0);
    return new Intl.NumberFormat('co-ES').format(total);
  }
}
