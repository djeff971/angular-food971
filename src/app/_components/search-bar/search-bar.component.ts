import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../_services/search.service';
import { Post } from '../../_models/post';


@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  myControl = new FormControl();
  formGroup: FormGroup;
  filteredOptions: Observable<string[]>;
  allPosts: Post[];
  autoCompleteList: any[];
  searchOptions = this.dataService.searchOption;

  name: any = '';


  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    
    this.dataService.getPosts().subscribe(posts => {
      this.allPosts = posts

    });

    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })
  }
  onSubmit(name) {
    // TODO: Use EventEmitter with form value
    
    console.warn("ok formulaire envoyé");
    console.warn(this.myControl.value);
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'name': [null, Validators.required]
    });
  }

  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val) {
    var categoryList = []
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allPosts.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allPosts;
  }

  displayFn(post: Post) {
    let k = post ? post.title : post;
    return k;
  }

  filterPostList(event) {


    var posts = event.source.value;
    if (!posts) {
      this.dataService.searchOption = []
    }
    else {
      console.log("not")

      this.dataService.searchOption.push(posts);
      this.onSelectedOption.emit(this.dataService.searchOption)
    }

    this.focusOnPlaceInput();
  }


  removeOption(option) {

    let index = this.dataService.searchOption.indexOf(option);
    if (index >= 0)
      this.dataService.searchOption.splice(index, 1);
    this.focusOnPlaceInput();

    this.onSelectedOption.emit(this.dataService.searchOption)
  }

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }


}


