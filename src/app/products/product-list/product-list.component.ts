import { Component, OnInit } from '@angular/core';
import {ProductServices} from '../../services/product-services.service';
import {PageContent} from '../../domain/PageContent';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  data: PageContent = {
    content: null,
    page: 0,
    pageSize: 20,
    totalPages: 0,
    totalElements: 0
  };

  constructor(private productServices: ProductServices) {
    productServices.getProducts().subscribe((data: PageContent) => {
      this.data = data;
      console.log(this.data);
    });
  }

  edit(id) {
    console.log(id);
  }

  confirm(data): void {
    console.log(this.data);
  }

  cancel(): void {
  }

  getTableData($event): void {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        key: '3',
        name: 'Joe Black',
        age: i + ($event - 1) * 20,
        address: 'Sidney No. 1 Lake Park'
      });
    }
  }

}
