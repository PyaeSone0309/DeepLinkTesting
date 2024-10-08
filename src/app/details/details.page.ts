import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-details',
	templateUrl: './details.page.html',
	styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {
	id: any;
  private activatedRoute = inject(ActivatedRoute);

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		// this.id = this.route.snapshot.paramMap.get('id');
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log("id", this.id)
	}
}