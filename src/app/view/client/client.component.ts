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

          { originalProjectName: 'ProjectA', productName: 'Saw A1',logo:'../../../assets/BAIC-YX.jpeg', description:'Alaa' },
        ],
      },
      {
        projectName: 'Lead',
        products: [
          { originalProjectName: 'ProjectB', productName: 'Scrap',logo:'../../../assets/Crystal-Ind.jpeg', description:'Iheb' },

        ],
      },
      {
        projectName: 'Engaged',
        products: [
          { originalProjectName: 'ProjectC', productName: 'Electric ' ,logo:'../../../assets/GI.png', description:'Ahmed'},

        ],
      },
      {
        projectName: 'Negociation',
        products: [
          { originalProjectName: 'ProjectA', productName: 'Drill A1' ,logo:'../../../assets/Al-Khatt.jpeg', description:'Sami'},
        ],
      },
      {
        projectName: 'Signed',
        products: [

          { originalProjectName: 'ProjectC', productName: 'Pump A1' ,logo:'../../../assets/HAI.png', description:'Responsable societé'},

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
