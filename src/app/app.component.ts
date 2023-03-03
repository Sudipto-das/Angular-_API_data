import { Component } from '@angular/core';
import { TestApiServiceService } from './test-api-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public food_data:any=[]
  public searchTerm:any=''
  public total_fooddata_list:number=0
  public page:number=1
  constructor(private service:TestApiServiceService){
    const api_data=this.service.getapi().subscribe((res:any)=>{
      
       const Food_data=res
       //remove duplicate value 
       this.food_data=Food_data.filter((value:any, index:any) => {
        const firstIndex = Food_data.findIndex((item:any) => item.food_name === value.food_name);
        return firstIndex === index;
      });
       console.log(this.food_data);
       this.total_fooddata_list=this.food_data.length
      // console.log(res)
    
    })
  }
}
