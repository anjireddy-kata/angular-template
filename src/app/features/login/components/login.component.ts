import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { CacheService } from '@core/services/cache.service';
import { LoginService } from '@core/services/login.service';

@Component({
    selector: 'login',
    templateUrl: '../templates/template1/views/login.component.html',
    styleUrls: ['../templates/template1/themes/less/login.component.less']

})
export class LoginComponent implements OnInit {

    error: string;
    isLoading: boolean;
    loginForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,
        private _router: Router,
        private _authService: AuthService, private _cacheService: CacheService,
        private _loginService: LoginService) {
        this.buildLoginForm();
    }
    ngOnInit() {
        console.log('Loading login component');
        
    }

    login(loginModel: LoginModel, isValid) {
        console.log(loginModel, {});
        this._router.navigate(['/dashboard/home']);
        // this._loginService.authenticateUser(loginModel).subscribe(x => {
        //     if (x.authToken) {
        //         this._authService.setUserName("Admin");
        //         this._cacheService.set('UserName', 'Admin');
        //     }
        //     else {
        //         this.error = x.errorMessage;
        //     }
        //     this._router.navigate(['/dashboard/home']);
        // });
    }

    displayLoginFailure() {
        return this.error ? true : false;
    }

    private buildLoginForm() {
        this.loginForm = this._formBuilder.group({
            loginId: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}