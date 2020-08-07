import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'hc-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent {
    searchBar = new FormControl("");
    searchResultsData = [
        { title: "Navbar Component1", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component2", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component3", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component4", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component5", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component6", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component7", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component8", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component9", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component10", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component11", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component12", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component13", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component14", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component15", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component16", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component17", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component18", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component19", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
        { title: "Navbar Component20", description: "Created 10 months ago • Jared Ammerman • Platform", subContent: "In order to edit the descriptions within ATLAS does a user have to be an Admin and" },
    ];
    searchDisplay = this.searchResultsData.slice(0, 10);

    length = this.searchResultsData.length;

    // Functions to get the current page
    pageNumberControl = new FormControl(1);
    get pageNumber() {
        return this.pageNumberControl.value;
    }
    set pageNumber(value: number) {
        this.pageNumberControl.setValue(value);
        let tempStartIndex = 10 * (value - 1);
        this.searchDisplay = this.searchResultsData.slice(tempStartIndex, tempStartIndex + 10);
    }
}