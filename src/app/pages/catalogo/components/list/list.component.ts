import { Component, OnInit } from '@angular/core';
import { ServiceCatalogoService } from '../../providers/service/service-catalogo.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
catalogos: any[];
  constructor(private catalogoser: ServiceCatalogoService,
    ) { }

  ngOnInit() {
    this.listarCatalogo();
  }
public listarCatalogo() {
  this.catalogoser.getAll$().subscribe(response =>{
    this.catalogos = response || [];
    console.log('listando catalogos', this.catalogos, response);
  });
}

}
