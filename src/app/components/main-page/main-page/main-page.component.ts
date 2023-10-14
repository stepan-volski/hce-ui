import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Entry } from 'src/app/models/Entry';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-main-page',
  styleUrls: ['./main-page.component.scss'],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name_ru',
    'name_transcript',
    'nationality',
    'date_of_birth',
    'date_of_listing',
    'current_location',
    'cause_of_listing',
    'additional_info',
  ];

  dataSource: MatTableDataSource<Entry>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: PeopleService) {
    const data = this.service.getPeople();
    this.dataSource = new MatTableDataSource(data);

    // this.service.getPeople().subscribe(data => {
    //   this.people = data;
    //   console.log(data);
    // })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
