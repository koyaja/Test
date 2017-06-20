import { Component } from '@angular/core';
import { ServiceTest } from "./test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServiceTest]
})
export class AppComponent {
  /**
   *
   */
  patdata:any;
  data:{};
  title = 'app';
  constructor(private serviceTest:ServiceTest  ) {
    /*this.serviceTest.load().then((data) => {
      console.log("what is in the data ", data);
      this.patdata= data;
    });*/
    this.getData();


  }
  getData(){
  this.serviceTest.getFromgson().subscribe((res)=>{
    console.log('test');
    this.data=res;
    console.log(this.data)

  });
}



}
