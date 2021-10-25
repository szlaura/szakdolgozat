import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, updatePassword, updateEmail } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {
 // firebaseAuth: FirebaseAuth;
  //private firebase: Firebase;
  auth = getAuth();
  user = this.auth.currentUser;
  newPassword: any;
  pwd: any;

  constructor(private alertCtrl: AlertController, private authService: AuthService) {
    this.pwd=this.authService.currentUserPwd;
   }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Jelszó megváltoztatás',
      inputs: [
        {
          name: 'oldpassword',
          type: 'password',
          placeholder: 'Régi jelszó',
          cssClass: 'specialClass',
          attributes: {
            minLength: 6,
            inputmode: 'decimal'
          }
        },
        {
          name: 'newpassowrd',
          type: 'password',
          placeholder: 'Új jelszó',
          cssClass: 'specialClass',
          attributes: {
            minLength: 6,
            inputmode: 'decimal'
          }
        },
        {
          name: 'newpassowrdagain',
          type: 'password',
          placeholder: 'Új jelszó mégegyszer',
          cssClass: 'specialClass',
          attributes: {
            minLength: 6,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          /*handler: (alertData) => {
            if(alertData.oldpassword === '' || alertData.newpassowrd ==='' || alertData.newpassowrdagain ===''){
              console.log('ERRRORRR '+this.pwd);
            }else if(alertData.newpassowrd === alertData.newpassowrdagain){
              console.log('OKOKOK '+this.pwd);
              this.newPassword = alertData.newpassword;
              updatePassword(this.user, this.newPassword).then(() => {
                console.log('success');
              }).catch((error) => {
                console.log('failed');
                // ...
              });

            }
          }*/
          handler: (data) => {
            //First you get the current logged in user
            //const cpUser = firebase.auth().currentUser;
            const cpUser = this.authService.currentUserObservable();

            //Then you set credentials to be the current logged in user's email
            //and the password the user typed in the input named "old password"
            //where he is basically confirming his password just like facebook for example.*/

            //const credentials = firebase.auth.EmailAuthProvider.credential(cpUser.email, data.oldPassword);
          }
        }
      ]
    });

    await alert.present();
  }



  /*async changePassword(){
    console.log('Change Password Button Clicked');
    //Creating the promt alert with inputs
    const alert = await this.alertCtrl.create({
      header: 'Change Password',
      inputs: [
        {
          name: 'oldPassword',
          placeholder: 'Your old password..',
          type: 'password'
        },
        {
          name: 'newPassword',
          placeholder: 'Your new password..',
          type: 'password'
        },
        {
          name: 'newPasswordConfirm',
          placeholder: 'Confirm your new password..',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
         {
          text: 'Update Password',
          handler: data => {
            //First you get the current logged in user
            const cpUser = firebase.auth().currentUser;

            /*Then you set credentials to be the current logged in user's email
            and the password the user typed in the input named "old password"
            where he is basically confirming his password just like facebook for example.*/

            /*const credentials = firebase.auth.EmailAuthProvider.credential(
              cpUser.email, data.oldPassword);

              //Reauthenticating here with the data above
              cpUser.reauthenticateWithCredential(credentials).then(
                async success => {
                  if(data.newPassword !== data.newPasswordConfirm){
                    const alert2 = await this.alertCtrl.create({
                      header: 'Change Password Failed',
                      message: 'You did not confirm your password correctly.',
                      buttons: ['Try Again']
                    });
                    alert2.present();
                  } else if(data.newPassword.length < 6){
                    const alert3 = await this.alertCtrl.create({
                      header: 'Change Password Failed',
                      message: 'Your password should be at least 6 characters long',
                      buttons: ['Try Again']
                    });
                    alert.present();
                  } else {
                    const alert4 = await this.alertCtrl.create({
                      header: 'Change Password Success',
                      message: 'Your password has been updated!',
                      buttons: ['OK']
                    });
                    alert.present();
                  /* Update the password to the password the user typed into the
                    new password input field */
                  /*cpUser.updatePassword(data.newPassword).then(function(){
                    //Success
                  }).catch(function(error){
                    //Failed
                  });
                  }
                },
                error => {
                  console.log(error);
                  if(error.code === 'auth/wrong-password'){
                    const alert5 = this.alertCtrl.create({
                      header: 'Change Password Failed',
                      message: 'Your old password is invalid.',
                      buttons: ['Try Again']
                    });
                    alert.present();
                  }
                }
              );
              console.log(credentials);
            }
          }
      ]
    });
    alert.present();
  }*/

getASecureRandomPassword() {
  return 'adasdsads2323xd';
}

/*updateEmail(this.auth.currentUser, 'user@example.com').then(() => {
  // Email updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});*/


}

