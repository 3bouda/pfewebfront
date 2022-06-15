import { Component, OnInit } from '@angular/core';
import {CdkDragDrop,moveItemInArray,transferArrayItem,} from '@angular/cdk/drag-drop';
export interface DragAndDropDemoList {
  projectName: string;
  products: Product[];
}

export interface Product {
  originalProjectName: string;
  productName: string;
  logo:string;
  description:string;
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  projectLists: DragAndDropDemoList[] = [];
  constructor() {
    this.projectLists = [
      {
        projectName: 'Prospect',
        products: [
          { originalProjectName: 'ProjectA', productName: 'Drill A1' ,logo:'../../../assets/Al-Khatt.jpeg', description:'Responsable societé'},
          { originalProjectName: 'ProjectA', productName: 'Saw A1',logo:'../../../assets/BAIC-YX.jpeg', description:'Responsable societé' },
        ],
      },
      {
        projectName: 'Lead',
        products: [
          { originalProjectName: 'ProjectB', productName: 'Scrap',logo:'../../../assets/Crystal-Ind.jpeg', description:'Responsable societé' },
          { originalProjectName: 'ProjectB', productName: 'Drill A3',logo:'../../../assets/CS.jpeg', description:'Responsable societé' },
          { originalProjectName: 'ProjectB', productName: 'Drill A4',logo:'../../../assets/ENA.png', description:'Responsable societé' },
        ],
      },
      {
        projectName: 'Engaged',
        products: [
          { originalProjectName: 'ProjectC', productName: 'Electric Motor A1' ,logo:'../../../assets/GI.png', description:'Responsable societé'},
          { originalProjectName: 'ProjectC', productName: 'Pump A1' ,logo:'../../../assets/HAI.png', description:'Responsable societé'},
        ],
      },
      {
        projectName: 'Negociation',
        products: [
          { originalProjectName: 'ProjectA', productName: 'Drill A1' ,logo:'../../../assets/hcv_hbs_logo.jpg', description:'Responsable societé'},
        ],
      },
      {
        projectName: 'Signed',
        products: [
          { originalProjectName: 'ProjectA', productName: 'Drill A1',logo:'../../../assets/IMS.png', description:'Responsable societé' },
          { originalProjectName: 'ProjectA', productName: 'Saw A1',logo:'../../../assets/Taysir-Conseil.jpeg', description:'Responsable societé' },
          { originalProjectName: 'ProjectA', productName: 'Container A1' ,logo:'../../../assets/Jamaity.jpeg', description:'Responsable societé'},
          { originalProjectName: 'ProjectA', productName: 'Drill A2',logo:'../../../assets/UGTT.jpeg', description:'Responsable societé' },
        ],
      },
    ];
  }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  get workTask(): string {
    // this could be an emit function passing data back to the backend, instead of a display function
    let result = '';
    this.projectLists.forEach((list) => {
      list.products.forEach((product) => {
        if (product.originalProjectName !== list.projectName)
          result = `${result}Move ${product.productName} from ${product.originalProjectName} to ${list.projectName}\n`;
      });
    });
    return result;
  }
  add(){}
}
