import * as firebase from 'firebase';

export class AuthService {
    private token: string;

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
                })
                console.log(resolve);
            })
            .catch(error => {
                console.log(error);
            })
    }

    getToken(){
        firebase.auth().currentUser.getToken()
        .then((token: string) => {
            this.token = token;
        })

        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }
}