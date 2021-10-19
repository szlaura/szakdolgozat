import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';




@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  constructor(private alertCtrl: AlertController, private auth: AngularFireAuth) { }

  /*changePassword(){
    console.log('Change Password Button Clicked');
    // eslint-disable-next-line prefer-const
    let alert = this.alertCtrl.create({
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
          handler: async data => {
            //First you get the current logged in user
            const cpUser = this.auth.currentUser;

            /*Then you set credentials to be the current logged in user's email
            and the password the user typed in the input named "old password"
            where he is basically confirming his password just like facebook for example.*/

            /*const credentials = this.auth.EmailAuthProvider.credential(
              (await cpUser).email, data.oldPassword);

              //Reauthenticating here with the data above
              cpUser.reauthenticateWithCredential(credentials).then(
                async success => {
                  if(data.newPassword !== data.newPasswordConfirm){
                    // eslint-disable-next-line prefer-const
                     let alert2 = this.alertCtrl.create({
                      header: 'Change Password Failed',
                      message: 'You did not confirm your password correctly.',
                      buttons: ['Try Again']
                    });
                    (await alert2).present();
                  } else if(data.newPassword.length < 6){
                    // eslint-disable-next-line prefer-const
                    let alert3 = this.alertCtrl.create({
                      header: 'Change Password Failed',
                      message: 'Your password should be at least 6 characters long',
                      buttons: ['Try Again']
                    });
                    (await alert3).present();
                  } else {
                    // eslint-disable-next-line prefer-const
                    let alert4 = this.alertCtrl.create({
                      header: 'Change Password Success',
                      message: 'Your password has been updated!',
                      buttons: ['OK']
                    });
                    (await alert4).present();
                  /* Update the password to the password the user typed into the
                    new password input field */
                  //cpUser.updatePassword(data.newPassword).then(function(){
                    //Success
                 // }).catch(function(error){
                    //Failed
                  //});
                 // }
                //},
               /* async error => {
                  console.log(error);
                  if(error.code === "auth/wrong-password"){
                    // eslint-disable-next-line prefer-const
                    let alert5 = this.alertCtrl.create({
                      header: 'Change Password Failed',
                      message: 'Your old password is invalid.',
                      buttons: ['Try Again']
                    });
                    (await alert5).present();
                  }
                }
              )
              console.log(credentials);
            }
          }
      ]
    });
    alert.present();
  }*/

}
