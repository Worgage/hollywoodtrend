import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    /*
    const header = new HttpHeaders();
    this.http.post('http://localhost/database.php', header).subscribe(
      result => {
        console.log(result);
      }
    ); */
  }
}
