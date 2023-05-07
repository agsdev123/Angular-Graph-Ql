import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() hasCardTitle: boolean = false;
  @Input() hasTitleDropdown: boolean = false;
  @Input() hasDaysDropdown: boolean = false;
  @Input() hasViewAllLink: boolean = false;
  @Input() hasEditTableLink: boolean = false;
  @Input() tableView: boolean = false;
  @Input() cardTitle: string = '';
  @Input() cardTitleDropdownData: SelectItem[];
  @Input() cardTitleDropdownPlaceholder: string;
  @Input() filterOptions: boolean = true;
  @Input() moreOptions: boolean = true;
  @Input() download: boolean = false;
  @Input() resetBtn: boolean = true;
  @Input() showExport: boolean = false;
  @Input() daysDropdownPlaceholder: string;
  @Input() bodyPadding: string;
  @Input() cardFilterData: any;
  @Input() changeDetect: boolean;
  @Input() viewEnabled: string = '';
  @Input() viewListEnabled: string = ''
  @Input() siteView: string = '';
  @Input() addNewBtn: boolean = false;
  @Input() reopenBtn: boolean = false;
  @Input() isFulltable: boolean = false;
  @Input() tooltipData: string;
  @Input() assetWidgetDate: any;
  @Output() viewChanged = new EventEmitter<any>();
  @Output() viewListChanged = new EventEmitter<any>();
  @Output() transferFilter = new EventEmitter<any>();
  @Output() resetCard = new EventEmitter<any>();
  @Output() export = new EventEmitter<any>();
  @Output() editTable = new EventEmitter<any>();
  @Output() addNewEvent = new EventEmitter<any>();
  @Output() reopenEvent = new EventEmitter<any>();
  @Output() titleDropdownChange = new EventEmitter<any>();
  @Output() globalFilters = new EventEmitter<any>();
  @Input() services: any;
  selectedCardTitle: string;
  selectedDaysTitle: string;
  showFilter: boolean = false;
  viewMode: string = 'tab1';
  show: boolean = false;

  constructor() {}

  ngOnChanges() {
  }

  ngOnInit(): void {
  }

  /** Grid View / List View */
  viewChange($event) {
    if ($event === 'list') {
      this.viewChanged.emit('grid');
    } else {
      this.viewChanged.emit('list');
    }
  }

  /** Grid View / List View */
  onlyListView($event) {
    this.viewListChanged.emit(this.viewListEnabled);
  }

  toggle() {
    this.show = !this.show;
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
    if (this.showFilter) {
      document
        .querySelector('body')
        .setAttribute('style', 'overflow:hidden;height:100vh;');
    }
  }

  openEditTablePopup($event) {
    this.editTable.emit($event);
    document
      .querySelector('body')
      .setAttribute('style', 'overflow:hidden;height:100vh;');
  }

  /** For Setting Organization Card */
  addNewBtnFn($event) {
    this.addNewEvent.emit($event);
  }

  reopenFn($event) {
    this.reopenEvent.emit($event);
  }

  /** Table view*/
  tableViewFn($event) {
    this.changeDetect = true;
  }

  /** Calling Reset Function */
  ResetCardFn() {
    this.resetCard.emit('reset clicked');
    this.changeDetect = false;
  }

  /** Export View*/ 
  exportFn() {
    this.export.emit('export clicked');
  }

  /** Title Dropdown Change */
  changeDropdown($event) {
    this.titleDropdownChange.emit($event.value);
  }
}