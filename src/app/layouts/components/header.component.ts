import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { CacheService } from '@core/services/cache.service';

@Component({
    selector: 'app-header',
    templateUrl: '../templates/template1/views/app-header.component.html'
})
export class HeaderComponent implements OnInit {

    displayUserActionPane = false;
    logoPath = '';
    constructor(private _authService: AuthService,
        private _cacheService: CacheService,
        private _router: Router) {

    }

    ngOnInit(): void {
        this.setUserActionPanelDisplayMode();
        this.setImagePath();
    }
    setUserActionPanelDisplayMode(): void {
        this.displayUserActionPane = this._authService.isUserLoggedIn() ? true : false;
        console.log(this.displayUserActionPane);
    }

    setImagePath(): void {
        this.logoPath = (environment.production === true ? 'img/logo.png' : 'assets/img/logo.png');
    }

    logout() {
        this.displayUserActionPane = false;
        this._authService.logout();
        this._router.navigateByUrl('auth/login');
    }
}