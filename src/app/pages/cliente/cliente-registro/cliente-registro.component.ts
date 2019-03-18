import { Component, OnInit } from '@angular/core';
import { ServiceClientesService } from 'src/app/services/service-clientes/service-clientes.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.scss']
})
export class ClienteRegistroComponent implements OnInit {
  selectedPerson;
  persons = [{ title: 'producto1'}, {title: 'producto2'}];
  public personForm: FormGroup;
  constructor(private api:ServiceClientesService) { 
    this.selectedPerson = {id: -1, nombre: '', apePater: '', apeMater: '', edad: '', fecNacim: '',
    dni: '', email: '', celular: '', image: '', estado: ''};  
  }

  ngOnInit() {
    // this.buildForm();
    // this.createsPerson('');
  }
  createPersons = () => {
    alert('gracias por su registro');
    this.api.createPerson(this.selectedPerson).subscribe(
      data => {
        this.persons.push(data);
      },
      error=>{
        console.log(this.persons.push);
        
      }
     
    );

  } 
  limpiar () {
    this.selectedPerson = {id: -1, nombre: '', apePater: '', apeMater: '', edad: '', fecNacim: '',
    dni: '', email: '', celular: '', image: '', estado: ''};
    }
  //   refresh(): void {
  //     window.location.reload();
  // }
//   private createsPerson(value: any) {
//     const valid = this.personForm.valid;
//     const data: any = {
//       nombre: value.nombre,
//       apePater: value.apePater,
//       apeMater: value.apeMater,
//       edad: value.edad,
//       fecNacim: this.getDateFormat(value.fecNacim),
//       dni: value.dni,
//       email: value.email,
//       celular: value.celular,
//       image: '',
//       estado: value.estado,
//     };
//     if (valid) {
//       this.api.createPerson(data).subscribe(res => { });
//       // console.log('desde cabecera y los', dataChecked, value);
//      }
// }
// private buildForm() {
//   const controls = {
//     nombre: ['', [Validators.required]],
//     apePater: ['', [Validators.required]],
//     apeMater: ['', [Validators.required]], // Falta
//     edad: ['', [Validators.required]],
//     fecNacim: ['', [Validators.required]],
//     dni: ['', [Validators.required]],
//     email: ['', [Validators.required]],
//     celular: ['', [Validators.required]],
//     estado: ['', [Validators.required]],

//   };
//   this.personForm = this.formBuilder.group(controls);
// }
private getDateFormat(date: any) {
  const newDate = {
    day: date.day,
    month: date.month,
    year: date.year,
  };
  if (date.day < 10) {
    newDate.day = `0${(parseInt(date.day, 10))}`;
  }
  if (date.month < 10) {
    newDate.month = `0${(parseInt(date.month, 10))}`;
  }
  return `${newDate.year}/${newDate.month}/${newDate.day}`;
}

// public goBack() {
//   this.router.navigate(['../'], { relativeTo: this.activatedRoute });
// }


}
