import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/services/error-handling-service/error-handler.service';
import { PrivateModeService } from 'src/app/core/services/private-mode-service/private-mode.service';
import { SideNavsService } from '../../../core/services/side-nav-service/side-navs.service'

@Component({
  selector: 'app-private-enter',
  templateUrl: './private-enter.component.html',
  styleUrls: ['./private-enter.component.css']
})
export class PrivateEnterComponent implements OnInit {
  password: string = "";
  errorMessage: string = "";
  constructor(public sideNavService: SideNavsService, public privateModeService: PrivateModeService, private errorHandlerService: ErrorHandlerService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      if (this.privateModeService.isPrivateModeEnabled && !this.privateModeService.isCurrentlyInPrivateMode) {
        if (await this.privateModeService.checkIfPasswordIsCorrect(this.password)) {
          this.privateModeService.goInPrivateMode();
          this.sideNavService.togglePrivatePopUpVisible();
        } else {
          this.privateModeService.isCurrentlyInPrivateMode = false;
          this.setError("incorrect password");
          this.password = "";
        }
      } else if (this.privateModeService.isCurrentlyInPrivateMode) {
        this.password = "";
        this.privateModeService.goOutPrivateMode();
        this.sideNavService.togglePrivatePopUpVisible();
      } else {
        if (this.password && this.password.length > 4) {
          await this.privateModeService.setPrivateModePassword(this.password)
          this.sideNavService.togglePrivatePopUpVisible();
          this.privateModeService.goInPrivateMode();
        } else {
          this.setError("Password must contain atleast 4 characters");
          this.password = "";
        }
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }

  async setError(error: string) {
    this.errorMessage = error;
    setTimeout(() => {
      this.errorMessage = "";
    }, 3000);
  }
}
