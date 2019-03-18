import { Component, OnInit } from '@angular/core';
import { ServiceClientesService } from 'src/app/services/service-clientes/service-clientes.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cliente-mantenimiento',
  templateUrl: './cliente-mantenimiento.component.html',
  styleUrls: ['./cliente-mantenimiento.component.scss']
})
export class ClienteMantenimientoComponent implements OnInit {
  
  ngOnInit(): void {
  }

  persons = [{ title: 'producto1'}, {title: 'producto2'}];
  title = 'Al Catlogo obten tu..';
  title1 = 'Actualizar Datos';
  title2 = 'Alerta piensalo bien';
  selectedPerson;
  public searchableList: any[] = [];
  public queryString: {};
  constructor(private api:ServiceClientesService,
    config: NgbModalConfig, private modalService: NgbModal) {
      config.backdrop = 'static';
    config.keyboard = false;

    this.getPersons();
    this.selectedPerson = {id: -1, nombre: '', apePater: '', apeMater: '', edad: '', fecNacim: '',
    dni: '', email: '', celular: '', image: '', estado: ''};
    this.searchableList = ['nombre', 'apePater', 'apeMater', 'edad', 'fecNacim'];
  }
  getPersons = () =>{
    this.api.getAllPerson().subscribe(
      data =>{
        this.persons = data;
        console.log(this.persons );
      },
      error=>{
     console.log(error);
      }
    );
  }
  personClicked = (person) => {
    this.api.getOnePerson(person.id).subscribe(
      data => {
        this.selectedPerson = data;
      },
      error=>{
        console.log(person.id);
      }
    );
  }

  updatePersons = () => {
    this.api.updatePerson(this.selectedPerson).subscribe(
      data => {
        this.getPersons();
      },
      error=>{
        console.log(this.getPersons);
      }
    );
  }
  createPersons = () => {
    this.api.createPerson(this.selectedPerson).subscribe(
      data => {
        this.persons.push(data);
      },
      error=>{
        console.log(this.persons.push);
      }
    );
  }
  deletePersons = () =>{
    this.api.deletePerson(this.selectedPerson.id).subscribe(
      data =>{
        this.getPersons();
        console.log(this.getPersons);
      },
      error=>{
     console.log(error);
      }
    );
  }
  open(content) {
    this.modalService.open(content, { centered: true });
  }
  open2(content2) {
    this.modalService.open(content2, { centered: true });
  }
  open3(content3) {
    this.modalService.open(content3 , { centered: true });
  }
}
