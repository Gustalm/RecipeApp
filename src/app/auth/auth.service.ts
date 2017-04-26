import * as firebase from 'firebase';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {  ToasterService } from "angular2-toaster";


@Injectable()
export class AuthService {
    private token: string;

    constructor(private router: Router, private toasterService: ToasterService) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;  
     }

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error);
            })
    }

    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((resolve: any) => {
                firebase.auth().currentUser.getToken()
                    .then((resolve) => {
                        this.token = resolve;
                        localStorage.setItem('currentUser', JSON.stringify({ username: email, token: this.token }));
                    })
                this.toasterService.pop('success','Log in', 'User logged');
                this.router.navigate(['/']);
                console.log(resolve);
            })
            .catch(error => {
                console.log(error);
            })
    }

    getToken() {
        // firebase.auth().currentUser.getToken()
        //     .then((token: string) => {
        //         this.token = token;
        //     })

        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logOut() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['signin']);
    }
}