# ionic2-fb-api
This is Facebook API cover for Ionic 2

## Installation

1. Create Ionic project
2. Install `cordova-plugin-facebook4` by this command 
```bash
$ ionic plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"
```
Find more details here [https://ionicframework.com/docs/v2/native/facebook/](https://ionicframework.com/docs/v2/native/facebook/)
3. Copy `ionic2-fb-api` `module` folder to `app` folder
4. Import `FbModule` to your `@NgModule`
Thats all.


## Usage

Call init() method of SocialApiService class object. Example here:
```bash
    constructor( private socialApi:SocialApiService ) {
        this.socialApi.subscribeToStatusChange( ()=>{ /* onApiReady(); */  }, SocialApiService.getApiStatus_appUser() );
        this.socialApi.init();
    }
```
Now you can use all other functionality provided by this plugin.


## API

### Init



