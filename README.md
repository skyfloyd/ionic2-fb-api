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

`init( permissions?:Array<string> )` by this function you can initialize ionic2-fb-api. It takes one optional parameter. Here you can give permissions list which your application require from user to login.

### Login

`login()` by this function application will open Facebook authorization dialog.

### Subscribe to `ionic2-fb-api` status changes

`subscribeToStatusChange( func:any, status:string=null )` using this function it will call your function each time `ionic2-fb-api` will change it's status. Also it can call your function only for actual status if you will specify second `status` parameter.

#### Statuses

Basically you will use this functions to specify `subscribeToStatusChange` function second `status` parameter.

`SocialApiService.getApiStatus_appUser()` - user authorized your application

`SocialApiService.getApiStatus_notAppUser()` - user doesn't authorize your application yet

`getApiStatus_notSocialUser()` - user doesn't logged in in facebook yet

`getApiStatus_loading()` - api initalization or user authorization is in progress

## Current state

`isApiStatus_default()` - default state

`isApiStatus_appUser()` - user authorized your application

`isApiStatus_notAppUser()` - user doesn't authorize your application yet

`isApiStatus_notSocialUser()` - user doesn't logged in in facebook yet

`isApiStatus_loading()` - api initalization or user authorization is in progress

`isApiStatus_notInit()` - `init` function has not been called yet

## Current user id

`getCurrentUserId()` get current user facebook id

## Current user access token

`getCurrentSessionKey()` get current user facebook access token

## User info

`getUserInfo( userId:string, readyFunc:any, funcPar:any=null )` get user facebook info.

`userId` - facebook user id

`readyFunc( response:any, funcPar:any=null )` - callback function

`funcPar` - optional parameters you can set to callback

## Current user album

`getCurrentUserAlbums( readyFunc:any, funcPar:any=null, next:boolean=null )` get current user album

`readyFunc( response:any, funcPar:any=null )` - callback function

`funcPar` - optional parameters you can set to callback

`next` - by this property you can manage Facebook data pagination. Values: **null** - load first page. **true** - load next page. **false** - load previous page.

## Current user album photos

`getAlbumPhotos( albumId:string, readyFunc:any, funcPar:any=null, next:boolean=null )` get current user selected album photos

`albumId` - selected album id

`readyFunc( response:any, funcPar:any=null )` - callback function

`funcPar` - optional parameters you can set to callback

`next` - by this property you can manage Facebook data pagination. Values: **null** - load first page. **true** - load next page. **false** - load previous page.
