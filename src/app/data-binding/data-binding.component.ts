import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  user = {
    name: "Vefa",
    surname: "Altıntop",
    job: "Software Developer",
    favorite_place: "Kız Kulesi",
    favorite_place_image: "https://www.cumhuriyet.com.tr/Archive/2021/9/4/1866163/kapak_175413.jpg",
    isEditable: false
  }

  type = "text";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    alert("clicked");
  }

  inputSubmit(value: any) {
    alert(value.target.value + " geldi...");
  }

}
