var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<app-navigation *ngIf= 'svc.islogin'></app-navigation> \n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/photos/photos.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cards/photos/photos.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>photos works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/posts/posts.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cards/posts/posts.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>title of post:  {{post.title}}</mat-card-title>\n      <mat-card-subtitle>  id of post: {{post.id}}</mat-card-subtitle>\n    </mat-card-header>\n    \n    <mat-card-content>\n      <p>\n      body of post: {{post.body}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n     \n    </mat-card-actions>\n  </mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/todo/todo.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cards/todo/todo.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>title of todo:  {{todo.title}}</mat-card-title>\n      <mat-card-subtitle>  id of todo: {{todo.id}}</mat-card-subtitle>\n    </mat-card-header>\n    \n    <mat-card-content>\n      <p>\n     completed of todo: {{todo.completed}} \n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      \n    </mat-card-actions>\n  </mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/user/user.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cards/user/user.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>user works!</p>\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>username :  {{user.username}}</mat-card-title>\n      <mat-card-subtitle>email :  {{user.email}}  </mat-card-subtitle>\n    </mat-card-header>\n    \n    <mat-card-content>\n      <p>\n        address= \n        street : {{ user.address.street}} \n        suite: {{ user.address.suite}} \n        city: {{ user.address.city}} \n        zipcode : {{ user.address.zipcode}} \n        \n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n     \n    </mat-card-actions>\n  </mat-card>\n \n   ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/addphotos/addphotos.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/addphotos/addphotos.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-mcf-c512=\"\" class=\"component-page-header docs-primary-header\"><button _ngcontent-mcf-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\"><span class=\"mat-button-wrapper\"></span><div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div><div class=\"mat-button-focus-overlay\"></div></button><h1 _ngcontent-mcf-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">wolcom to page add photos </h1></div> \n\n\n<div class=\"example-container\">\n    <form [formGroup]='newphoto' >\n        <mat-form-field>\n          <input formControlName=\"albumId\" matInput placeholder=\"albumId\">\n     </mat-form-field> <br>\n\n     <mat-form-field>\n          <input formControlName=\"id\" matInput placeholder=\"Id\">\n     </mat-form-field> <br>\n      \n     <mat-form-field>\n            <input  formControlName=\"title\"matInput placeholder=\"title\">\n       </mat-form-field> <br>\n       <mat-form-field>\n        <input  formControlName=\"url\"matInput placeholder=\"url\">\n   </mat-form-field> <br>\n\n\n\n    \n   \n</form>\n<button (click)= 'addphotos()' mat-raised-button>addphoto</button>\n      \n       \n     </div>\n    \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/addpost/addpost.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/addpost/addpost.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div _ngcontent-mcf-c512=\"\" class=\"component-page-header docs-primary-header\"><button _ngcontent-mcf-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\"><span class=\"mat-button-wrapper\"></span><div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div><div class=\"mat-button-focus-overlay\"></div></button><h1 _ngcontent-mcf-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">wolcom to add posts </h1></div> \n    \n\n<div class=\"example-container\">\n    <form [formGroup]='newpost' >\n        <mat-form-field>\n          <input formControlName=\"userId\" matInput placeholder=\"userid\">\n     </mat-form-field> <br>\n\n     <mat-form-field>\n          <input formControlName=\"id\" matInput placeholder=\"Id\">\n     </mat-form-field> <br>\n      \n     <mat-form-field>\n            <input  formControlName=\"title\"matInput placeholder=\"title\">\n       </mat-form-field> <br>\n\n    <mat-form-field>\n            <input formControlName=\"body\" matInput placeholder=\"body\">\n    </mat-form-field> <br>\n\n</form>\n<button (click)= 'addpost()' mat-raised-button>addpost</button>\n      \n       \n      </div>\n\n\n\n      \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/addtodos/addtodos.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/addtodos/addtodos.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-mcf-c512=\"\" class=\"component-page-header docs-primary-header\"><button _ngcontent-mcf-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\"><span class=\"mat-button-wrapper\"></span><div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div><div class=\"mat-button-focus-overlay\"></div></button><h1 _ngcontent-mcf-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">wolcom to page  add todo </h1></div> \n\n\n<div class=\"example-container\">\n    <form [formGroup]='newtodo' >\n        <mat-form-field>\n          <input formControlName=\"userId\" matInput placeholder=\"userid\">\n     </mat-form-field> <br>\n\n     <mat-form-field>\n          <input formControlName=\"id\" matInput placeholder=\"Id\">\n     </mat-form-field> <br>\n      \n     <mat-form-field>\n            <input  formControlName=\"title\"matInput placeholder=\"title\">\n       </mat-form-field> <br>\n\n    \n    <!-- <mat-checkbox  (click)=\"complet()\" class=\"example-margin\">Checked</mat-checkbox> -->\n</form>\n<button (click)= 'addtodo()' mat-raised-button>addtodo</button>\n      \n       \n     </div>\n    \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/adduser/adduser.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/adduser/adduser.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-mcf-c512=\"\" class=\"component-page-header docs-primary-header\"><button _ngcontent-mcf-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\"><span class=\"mat-button-wrapper\"></span><div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div><div class=\"mat-button-focus-overlay\"></div></button><h1 _ngcontent-mcf-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">wolcom to page  add user </h1></div> \n\n<div class=\"example-container\">\n    <form [formGroup]='newuser' >\n        <mat-form-field>\n          <input formControlName=\"id\" matInput placeholder=\"id\">\n     </mat-form-field> <br>\n\n     <mat-form-field>\n          <input formControlName=\"name\" matInput placeholder=\"name\">\n     </mat-form-field> <br>\n      \n     <mat-form-field>\n            <input  formControlName=\"username\"matInput placeholder=\"username\">\n       </mat-form-field> <br>\n       <mat-form-field>\n        <input  formControlName=\"email\"matInput placeholder=\"email\">\n   </mat-form-field> <br>\n       <div formGroupName=\"address\">\n\n    <mat-form-field>\n            <input formControlName=\"street\" matInput placeholder=\"street\">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"suite\" matInput placeholder=\"suite\">\n       \n   </mat-form-field> <br>\n   <mat-form-field>\n    <input formControlName=\"city\" matInput placeholder=\"city\">\n   </mat-form-field> <br>\n   <mat-form-field>\n    <input formControlName=\"zipcode\" matInput placeholder=\"zipcode\">\n   </mat-form-field> <br>\n   </div> \n\n</form>\n<button (click)= 'adduser()' mat-raised-button>adduser</button>\n      \n       \n      </div> \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/homepage/homepage.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/homepage/homepage.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<h1>w</h1>\n\n\n \n<ul *ngIf ='psvc.data' class=\"ulone\">\n        <li class=\"lione\"  *ngFor=\"let phot of psvc.tenlastphos\" >\n           \n            \n            <img src=\"{{phot.url}}\" alt=\"\">\n            <div class=\"divone\"> {{phot.id}}-{{phot.title}}  </div>\n           \n    \n        </li>\n    </ul> \n\n\n\n<h5> ברוכים הבאים לדף הבית . <br> דף הבית טוען 5000 תמונות ומציג את עשרת האחרונים (על פי דרישת לקוח) בינתיים תוכל לשוטט באתר ולנווט שוב לדף הבית </h5>\n\n<div class=\"divtow\" *ngIf = \"sves.data\"> \n    <h2>this ten last post</h2>\n    <p *ngIf =\"svc.data\" >\n<mat-accordion  *ngFor=\"let p of  svc.tenlastpos\" >\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n       name : {{sves.getname(p.userId)}}\n    </mat-panel-title>\n    <mat-panel-description>\n       username : {{sves.getusername(p.userId)}} \n    </mat-panel-description>\n  </mat-expansion-panel-header>\n\n    <app-posts [post]='p'></app-posts>\n  \n</mat-expansion-panel>\n<mat-expansion-panel (opened)=\"panelOpenState = true\"\n                     (closed)=\"panelOpenState = false\">\n  \n</mat-expansion-panel>\n</mat-accordion>\n</p>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/login/login.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/login/login.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"username\" >\n        </mat-form-field>\n        <br><br>\n      \n        <mat-form-field class=\"example-full-width\">\n          <input (input)='id=$event.target.value' matInput placeholder=\"pasword-id\">\n        </mat-form-field>\n     \n      </form>\n      <button (click)='login()' mat-raised-button  color=\"primary\">login</button>\n\n     \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navi/navi.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navi/navi.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>navi works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navigation/navigation.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navigation/navigation.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"mat-elevation-z6\">\n  <a mat-button (click)='moveto(\"homepage\")' > homepage </a>\n  <a mat-button (click)='moveto(\"users\")' >users  </a>\n  <a mat-button (click)='moveto(\"posts\")' >posts </a>\n  <a mat-button (click)='moveto(\"todo\")' > todo</a>\n  <a mat-button (click)='moveto(\"photos\")' > photos</a>\n  </nav>\n \n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/pohtos/pohtos.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/pohtos/pohtos.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div _ngcontent-mcf-c512=\"\" class=\"component-page-header docs-primary-header\"><button _ngcontent-mcf-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\"><span class=\"mat-button-wrapper\"></span><div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div><div class=\"mat-button-focus-overlay\"></div></button><h1 _ngcontent-mcf-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">wolcom to page photos </h1></div> \n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n   <input (input) = 'title=$event.target.value'  matInput placeholder=\"serch by title\" value=\"\">\n  </mat-form-field>\n         <mat-form-field class=\"example-full-width\">\n        <input (input) ='albumId=$event.target.value'  matInput placeholder=\"serch by albumId\" value=\"\">\n      </mat-form-field> \n  <mat-form-field class=\"example-full-width\">\n          <input (input) = 'id=$event.target.value'  matInput placeholder=\"serch by id\" value=\"\">\n        </mat-form-field>\n     </form>\n\n     <button (click)='pageaddphotos()' mat-raised-button>addphotos</button>\n<ul>\n\n  <li *ngFor= \"let p of svc.data | pipestr : title : 'title' | pipenumber : albumId : 'albumId'  | pipenumber : id : 'id'\">   \nalbumId= {{p.albumId}} <br>\nphotoid= {{p.id}} <br>\ntitle= {{p.title}} <br>\n<img src=\"{{p.url}}\" alt=\"\">\n\n  </li>\n</ul>\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/post/post.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/post/post.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-mcf-c512=\"\" class=\"component-page-header docs-primary-header\"><button _ngcontent-mcf-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\"><span class=\"mat-button-wrapper\"></span><div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div><div class=\"mat-button-focus-overlay\"></div></button><h1 _ngcontent-mcf-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">wolcom to page posts </h1></div> \n    \n<form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n     <input (input) = 'title=$event.target.value'  matInput placeholder=\"serch by title\" value=\"\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input (input) = 'body=$event.target.value' matInput placeholder=\"serch by body\" value=\"\">\n      </mat-form-field>\n   \n        <mat-form-field class=\"example-full-width\">\n          <input (input) ='userid=$event.target.value'  matInput placeholder=\"serch by userid\" value=\"\">\n        </mat-form-field> \n           <mat-form-field class=\"example-full-width\">\n        <input (input) = 'id=$event.target.value'  matInput placeholder=\"serch by id\" value=\"\">\n      </mat-form-field>\n       \n  \n    \n       \n  </form>\n\n  \n  <button (click)= 'postofmyuser()' mat-raised-button>postmyuser</button>\n  \n  <button (click)= 'pageaddpost()' mat-raised-button>addpost</button>\n\n  <button (click)= 'allpost()' mat-raised-button>allpost</button>\n  \n  \n\n\n   <div *ngIf = \"sves.data\"> \n      <p *ngIf =\"svc.data\" >\n<mat-accordion  *ngFor=\"let p of svc.data | pipe1 : title : body : id : userid \" >\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n         name : {{sves.getname(p.userId)}}\n      </mat-panel-title>\n      <mat-panel-description>\n         username : {{sves.getusername(p.userId)}} \n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n      <app-posts [post]='p'></app-posts>\n    \n  </mat-expansion-panel>\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    \n  </mat-expansion-panel>\n</mat-accordion>\n  </p>\n \n\n\n\n\n\n \n\n\n\n<!-- <h1>wolcom to posts</h1>\n     <ul *ngIf=\"svc.data\"> \n         <li *ngFor=\"let p of svc.data\">\n               {{p.userId}}\n               {{p.id}}\n               {{p.title}}\n               {{p.body}}\n        </li> \n\n\n     </ul> -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/todos/todos.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/todos/todos.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-mcf-c512=\"\" class=\"component-page-header docs-primary-header\"><button _ngcontent-mcf-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\"><span class=\"mat-button-wrapper\"></span><div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div><div class=\"mat-button-focus-overlay\"></div></button><h1 _ngcontent-mcf-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">wolcom to page todos </h1></div> \n<div>\n    <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n         <input (input) = 'title=$event.target.value'  matInput placeholder=\"serch by title\" value=\"\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input (input) = 'body=$event.target.value' matInput placeholder=\"serch by completed\" value=\"\">\n          </mat-form-field>\n         \n            <mat-form-field class=\"example-full-width\">\n              <input (input) ='userid=$event.target.value'  matInput placeholder=\"serch by userid\" value=\"\">\n            </mat-form-field> \n        <mat-form-field class=\"example-full-width\">\n                <input (input) = 'id=$event.target.value'  matInput placeholder=\"serch by id\" value=\"\">\n              </mat-form-field>\n           \n      \n        \n           \n      </form>\n\n\n\n<button (click)= 'pageaddtodo()' mat-raised-button>addtodo</button>\n\n\n</div>\n\n\n\n\n<p *ngIf='svc.data && usvc.data' >\n    <mat-accordion  *ngFor='let t of svc.data | pipetodo : title : userid : id'>\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                 name : {{usvc.getname(t.userId)}}\n              </mat-panel-title>\n              <mat-panel-description>\n                 userid : {{usvc.getid(t.userId)}} \n              </mat-panel-description>\n            </mat-expansion-panel-header>\n          \n             \n               <app-todo [todo]='t'></app-todo> \n             \n          </mat-expansion-panel>\n          <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                               (closed)=\"panelOpenState = false\">\n            \n          </mat-expansion-panel>\n          </mat-accordion>\n          </p>\n\n\n\n\n\n  \n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/users/users.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/users/users.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-mcf-c512=\"\" class=\"component-page-header docs-primary-header\"><button _ngcontent-mcf-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\"><span class=\"mat-button-wrapper\"></span><div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div><div class=\"mat-button-focus-overlay\"></div></button><h1 _ngcontent-mcf-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">wolcom to page users </h1></div>\n<form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n     <input (input) = 'name=$event.target.value'  matInput placeholder=\"serch by name \" value=\"\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input (input) = 'username=$event.target.value' matInput placeholder=\"serch by username \" value=\"\">\n      </mat-form-field>\n   \n        <mat-form-field class=\"example-full-width\">\n          <input (input) ='email=$event.target.value'  matInput placeholder=\"serch by email \" value=\"\">\n        </mat-form-field> \n           <mat-form-field class=\"example-full-width\">\n        <input (input) = 'id=$event.target.value'  matInput placeholder=\"serch by id\" value=\"\">\n      </mat-form-field>\n\n </form>\n\n\n  <button (click)= 'pageadduser()' mat-raised-button>adduser</button>\n\n<p *ngIf =\"svc.data\" >\n    <mat-accordion  *ngFor=\"let u of svc.data | pipestr : name : 'name' |  pipestr :  username : 'username' |  pipestr :email : 'email' | pipenumber : id : 'id' \" >  \n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n             name : {{u.name}}\n          </mat-panel-title>\n          <mat-panel-description>\n             id : {{u.id}} \n          </mat-panel-description>\n        </mat-expansion-panel-header>\n       <app-user [user]='u'></app-user>\n       \n        \n      </mat-expansion-panel>\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                           (closed)=\"panelOpenState = false\">\n        \n      </mat-expansion-panel>\n    </mat-accordion>\n      </p>\n     ");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _comps_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/login/login.component */ "./src/app/comps/login/login.component.ts");
            /* harmony import */ var _comps_todos_todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/todos/todos.component */ "./src/app/comps/todos/todos.component.ts");
            /* harmony import */ var _comps_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/navigation/navigation.component */ "./src/app/comps/navigation/navigation.component.ts");
            /* harmony import */ var _comps_post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/post/post.component */ "./src/app/comps/post/post.component.ts");
            /* harmony import */ var _comps_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/addpost/addpost.component */ "./src/app/comps/addpost/addpost.component.ts");
            /* harmony import */ var _comps_addtodos_addtodos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/addtodos/addtodos.component */ "./src/app/comps/addtodos/addtodos.component.ts");
            /* harmony import */ var _comps_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/users/users.component */ "./src/app/comps/users/users.component.ts");
            /* harmony import */ var _comps_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/adduser/adduser.component */ "./src/app/comps/adduser/adduser.component.ts");
            /* harmony import */ var _comps_pohtos_pohtos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/pohtos/pohtos.component */ "./src/app/comps/pohtos/pohtos.component.ts");
            /* harmony import */ var _comps_addphotos_addphotos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/addphotos/addphotos.component */ "./src/app/comps/addphotos/addphotos.component.ts");
            /* harmony import */ var _comps_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/homepage/homepage.component */ "./src/app/comps/homepage/homepage.component.ts");
            var routes = [
                { path: "login", component: _comps_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: "todo", component: _comps_todos_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"] },
                { path: "posts", component: _comps_post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"] },
                { path: "addpost", component: _comps_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_7__["AddpostComponent"] },
                { path: "addtodo", component: _comps_addtodos_addtodos_component__WEBPACK_IMPORTED_MODULE_8__["AddtodosComponent"] },
                { path: "navi", component: _comps_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"] },
                { path: "users", component: _comps_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"] },
                { path: "adduser", component: _comps_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_10__["AdduserComponent"] },
                { path: "photos", component: _comps_pohtos_pohtos_component__WEBPACK_IMPORTED_MODULE_11__["PohtosComponent"] },
                { path: "homepage", component: _comps_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"] },
                { path: "addphotos", component: _comps_addphotos_addphotos_component__WEBPACK_IMPORTED_MODULE_12__["AddphotosComponent"] },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: "**", component: _comps_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(svc) {
                    this.svc = svc;
                    this.title = 'dataprogectwithall';
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _comps_login_matrial_modo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/login/matrial/modo */ "./src/app/comps/login/matrial/modo.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _comps_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/login/login.component */ "./src/app/comps/login/login.component.ts");
            /* harmony import */ var _comps_todos_todos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/todos/todos.component */ "./src/app/comps/todos/todos.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _comps_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/navigation/navigation.component */ "./src/app/comps/navigation/navigation.component.ts");
            /* harmony import */ var _comps_post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/post/post.component */ "./src/app/comps/post/post.component.ts");
            /* harmony import */ var _cards_posts_posts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cards/posts/posts.component */ "./src/app/cards/posts/posts.component.ts");
            /* harmony import */ var _pips_pipe1_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pips/pipe1.pipe */ "./src/app/pips/pipe1.pipe.ts");
            /* harmony import */ var _comps_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comps/addpost/addpost.component */ "./src/app/comps/addpost/addpost.component.ts");
            /* harmony import */ var _comps_navi_navi_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comps/navi/navi.component */ "./src/app/comps/navi/navi.component.ts");
            /* harmony import */ var _comps_addtodos_addtodos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comps/addtodos/addtodos.component */ "./src/app/comps/addtodos/addtodos.component.ts");
            /* harmony import */ var _cards_todo_todo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cards/todo/todo.component */ "./src/app/cards/todo/todo.component.ts");
            /* harmony import */ var _pips_pipetodo_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pips/pipetodo.pipe */ "./src/app/pips/pipetodo.pipe.ts");
            /* harmony import */ var _comps_users_users_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./comps/users/users.component */ "./src/app/comps/users/users.component.ts");
            /* harmony import */ var _cards_user_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cards/user/user.component */ "./src/app/cards/user/user.component.ts");
            /* harmony import */ var _pips_pipestr_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pips/pipestr.pipe */ "./src/app/pips/pipestr.pipe.ts");
            /* harmony import */ var _pips_pipenumber_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pips/pipenumber.pipe */ "./src/app/pips/pipenumber.pipe.ts");
            /* harmony import */ var _comps_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./comps/adduser/adduser.component */ "./src/app/comps/adduser/adduser.component.ts");
            /* harmony import */ var _comps_addphotos_addphotos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./comps/addphotos/addphotos.component */ "./src/app/comps/addphotos/addphotos.component.ts");
            /* harmony import */ var _comps_pohtos_pohtos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./comps/pohtos/pohtos.component */ "./src/app/comps/pohtos/pohtos.component.ts");
            /* harmony import */ var _cards_photos_photos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cards/photos/photos.component */ "./src/app/cards/photos/photos.component.ts");
            /* harmony import */ var _comps_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./comps/homepage/homepage.component */ "./src/app/comps/homepage/homepage.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                        _comps_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                        _comps_todos_todos_component__WEBPACK_IMPORTED_MODULE_9__["TodosComponent"],
                        _comps_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                        _comps_post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"],
                        _cards_posts_posts_component__WEBPACK_IMPORTED_MODULE_13__["PostsComponent"],
                        _pips_pipe1_pipe__WEBPACK_IMPORTED_MODULE_14__["Pipe1Pipe"],
                        _comps_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__["AddpostComponent"],
                        _comps_navi_navi_component__WEBPACK_IMPORTED_MODULE_16__["NaviComponent"],
                        _comps_addtodos_addtodos_component__WEBPACK_IMPORTED_MODULE_17__["AddtodosComponent"],
                        _cards_todo_todo_component__WEBPACK_IMPORTED_MODULE_18__["TodoComponent"],
                        _pips_pipetodo_pipe__WEBPACK_IMPORTED_MODULE_19__["PipetodoPipe"],
                        _comps_users_users_component__WEBPACK_IMPORTED_MODULE_20__["UsersComponent"],
                        _cards_user_user_component__WEBPACK_IMPORTED_MODULE_21__["UserComponent"],
                        _pips_pipestr_pipe__WEBPACK_IMPORTED_MODULE_22__["PipestrPipe"],
                        _pips_pipenumber_pipe__WEBPACK_IMPORTED_MODULE_23__["PipenumberPipe"],
                        _comps_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_24__["AdduserComponent"],
                        _comps_addphotos_addphotos_component__WEBPACK_IMPORTED_MODULE_25__["AddphotosComponent"],
                        _comps_pohtos_pohtos_component__WEBPACK_IMPORTED_MODULE_26__["PohtosComponent"],
                        _cards_photos_photos_component__WEBPACK_IMPORTED_MODULE_27__["PhotosComponent"],
                        _comps_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_28__["HomepageComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                        _comps_login_matrial_modo__WEBPACK_IMPORTED_MODULE_5__["Modo"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/cards/photos/photos.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/cards/photos/photos.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL3Bob3Rvcy9waG90b3MuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/cards/photos/photos.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/cards/photos/photos.component.ts ***!
          \**************************************************/
        /*! exports provided: PhotosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function () { return PhotosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PhotosComponent = /** @class */ (function () {
                function PhotosComponent() {
                }
                PhotosComponent.prototype.ngOnInit = function () {
                };
                return PhotosComponent;
            }());
            PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-photos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/photos/photos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photos.component.css */ "./src/app/cards/photos/photos.component.css")).default]
                })
            ], PhotosComponent);
            /***/ 
        }),
        /***/ "./src/app/cards/posts/posts.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/cards/posts/posts.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/cards/posts/posts.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/cards/posts/posts.component.ts ***!
          \************************************************/
        /*! exports provided: PostsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function () { return PostsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PostsComponent = /** @class */ (function () {
                function PostsComponent() {
                }
                PostsComponent.prototype.ngOnInit = function () {
                };
                return PostsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PostsComponent.prototype, "post", void 0);
            PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-posts',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/posts/posts.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.component.css */ "./src/app/cards/posts/posts.component.css")).default]
                })
            ], PostsComponent);
            /***/ 
        }),
        /***/ "./src/app/cards/todo/todo.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/cards/todo/todo.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/cards/todo/todo.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/cards/todo/todo.component.ts ***!
          \**********************************************/
        /*! exports provided: TodoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function () { return TodoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TodoComponent = /** @class */ (function () {
                function TodoComponent() {
                }
                TodoComponent.prototype.ngOnInit = function () {
                };
                return TodoComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TodoComponent.prototype, "todo", void 0);
            TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-todo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/todo/todo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo.component.css */ "./src/app/cards/todo/todo.component.css")).default]
                })
            ], TodoComponent);
            /***/ 
        }),
        /***/ "./src/app/cards/user/user.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/cards/user/user.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/cards/user/user.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/cards/user/user.component.ts ***!
          \**********************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserComponent = /** @class */ (function () {
                function UserComponent() {
                }
                UserComponent.prototype.ngOnInit = function () {
                };
                return UserComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UserComponent.prototype, "user", void 0);
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/user/user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/cards/user/user.component.css")).default]
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/addphotos/addphotos.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/comps/addphotos/addphotos.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-container{\n    margin: 7% 15% 20% 30%;\n}\nh1{\n    margin: 4% 15% 0% 25%;\n}\n.component-page-header{\n    margin-top: 2.8%;\n}\n.component-page-header[_ngcontent-mcf-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWRkcGhvdG9zL2FkZHBob3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9hZGRwaG90b3MvYWRkcGhvdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXJ7XG4gICAgbWFyZ2luOiA3JSAxNSUgMjAlIDMwJTtcbn1cbmgxe1xuICAgIG1hcmdpbjogNCUgMTUlIDAlIDI1JTtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJ7XG4gICAgbWFyZ2luLXRvcDogMi44JTtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJbX25nY29udGVudC1tY2YtYzUxMl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/comps/addphotos/addphotos.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/comps/addphotos/addphotos.component.ts ***!
          \********************************************************/
        /*! exports provided: AddphotosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddphotosComponent", function () { return AddphotosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_photos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/photos.service */ "./src/app/services/photos.service.ts");
            var AddphotosComponent = /** @class */ (function () {
                function AddphotosComponent(svc) {
                    this.svc = svc;
                    this.newphoto = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        albumId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                    });
                }
                AddphotosComponent.prototype.ngOnInit = function () {
                };
                AddphotosComponent.prototype.addphotos = function () {
                    this.photnew = this.newphoto.value;
                    this.svc.addmoreitem(this.photnew);
                };
                return AddphotosComponent;
            }());
            AddphotosComponent.ctorParameters = function () { return [
                { type: src_app_services_photos_service__WEBPACK_IMPORTED_MODULE_3__["PhotosService"] }
            ]; };
            AddphotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-addphotos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addphotos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/addphotos/addphotos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addphotos.component.css */ "./src/app/comps/addphotos/addphotos.component.css")).default]
                })
            ], AddphotosComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/addpost/addpost.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/comps/addpost/addpost.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-container{\n    margin: 7% 15% 20% 30%;\n}\nh1{\n    margin: 4% 15% 0% 25%;\n}\n.component-page-header{\n    margin-top: 2.8%;\n}\n.component-page-header[_ngcontent-mcf-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWRkcG9zdC9hZGRwb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2FkZHBvc3QvYWRkcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVye1xuICAgIG1hcmdpbjogNyUgMTUlIDIwJSAzMCU7XG59XG5oMXtcbiAgICBtYXJnaW46IDQlIDE1JSAwJSAyNSU7XG59XG4uY29tcG9uZW50LXBhZ2UtaGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDIuOCU7XG59XG4uY29tcG9uZW50LXBhZ2UtaGVhZGVyW19uZ2NvbnRlbnQtbWNmLWM1MTJdIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZG9jcy1wcmltYXJ5LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzNmNTFiNTtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/addpost/addpost.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/comps/addpost/addpost.component.ts ***!
          \****************************************************/
        /*! exports provided: AddpostComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostComponent", function () { return AddpostComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            var AddpostComponent = /** @class */ (function () {
                function AddpostComponent(svc, svec) {
                    this.svc = svc;
                    this.svec = svec;
                    this.newpost = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
                        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
                        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        body: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                    });
                }
                AddpostComponent.prototype.ngOnInit = function () {
                };
                AddpostComponent.prototype.addpost = function () {
                    this.newpos = this.newpost.value;
                    var us = this.svec.getifuser(this.newpos.userId);
                    if (us) {
                        this.svc.addmoreitem(this.newpos);
                    }
                    else {
                        alert('plese input user id anather');
                    }
                    console.log(this.svc.data.length);
                };
                return AddpostComponent;
            }());
            AddpostComponent.ctorParameters = function () { return [
                { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            AddpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-addpost',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addpost.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/addpost/addpost.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addpost.component.css */ "./src/app/comps/addpost/addpost.component.css")).default]
                })
            ], AddpostComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/addtodos/addtodos.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/comps/addtodos/addtodos.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-container{\n    margin: 7% 15% 20% 30%;\n}\nh1{\n    margin: 4% 15% 0% 25%;\n}\n.component-page-header{\n    margin-top: 2.8%;\n}\n.component-page-header[_ngcontent-mcf-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWRkdG9kb3MvYWRkdG9kb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvYWRkdG9kb3MvYWRkdG9kb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lcntcbiAgICBtYXJnaW46IDclIDE1JSAyMCUgMzAlO1xufVxuaDF7XG4gICAgbWFyZ2luOiA0JSAxNSUgMCUgMjUlO1xufVxuLmNvbXBvbmVudC1wYWdlLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAyLjglO1xufVxuLmNvbXBvbmVudC1wYWdlLWhlYWRlcltfbmdjb250ZW50LW1jZi1jNTEyXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG59XG4uZG9jcy1wcmltYXJ5LWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/comps/addtodos/addtodos.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/comps/addtodos/addtodos.component.ts ***!
          \******************************************************/
        /*! exports provided: AddtodosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtodosComponent", function () { return AddtodosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");
            var AddtodosComponent = /** @class */ (function () {
                function AddtodosComponent(svc, tsvc) {
                    this.svc = svc;
                    this.tsvc = tsvc;
                    this.newtodo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                    });
                }
                AddtodosComponent.prototype.ngOnInit = function () {
                };
                AddtodosComponent.prototype.addtodo = function () {
                    this.todonew = this.newtodo.value;
                    this.todonew.completed = false;
                    var us = this.svc.getifuser(this.todonew.userId);
                    if (us) {
                        this.tsvc.addmoreitem(this.todonew);
                    }
                    else {
                        alert('plese input user id anather');
                    }
                };
                return AddtodosComponent;
            }());
            AddtodosComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"] }
            ]; };
            AddtodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-addtodos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addtodos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/addtodos/addtodos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addtodos.component.css */ "./src/app/comps/addtodos/addtodos.component.css")).default]
                })
            ], AddtodosComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/adduser/adduser.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/comps/adduser/adduser.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-container{\n    margin: 7% 15% 20% 30%;\n}\nh1{\n    margin: 4% 15% 0% 25%;\n}\n.component-page-header{\n    margin-top: 2.8%;\n}\n.component-page-header{\n    margin-top: 2.8%;\n}\n.component-page-header[_ngcontent-mcf-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWRkdXNlci9hZGR1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUFDO0lBQ0csZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFBQztJQUNHLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvYWRkdXNlci9hZGR1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXJ7XG4gICAgbWFyZ2luOiA3JSAxNSUgMjAlIDMwJTtcbn1cbmgxe1xuICAgIG1hcmdpbjogNCUgMTUlIDAlIDI1JTtcbn0uY29tcG9uZW50LXBhZ2UtaGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDIuOCU7XG59XG4uY29tcG9uZW50LXBhZ2UtaGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDIuOCU7XG59LmNvbXBvbmVudC1wYWdlLWhlYWRlcltfbmdjb250ZW50LW1jZi1jNTEyXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG59XG4uZG9jcy1wcmltYXJ5LWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/comps/adduser/adduser.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/comps/adduser/adduser.component.ts ***!
          \****************************************************/
        /*! exports provided: AdduserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function () { return AdduserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            var AdduserComponent = /** @class */ (function () {
                function AdduserComponent(svc) {
                    this.svc = svc;
                    this.newuser = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                            suite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                            zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        })
                    });
                }
                AdduserComponent.prototype.ngOnInit = function () {
                };
                AdduserComponent.prototype.adduser = function () {
                    this.usernew = this.newuser.value;
                    this.svc.addmoreitem(this.usernew);
                };
                return AdduserComponent;
            }());
            AdduserComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            AdduserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-adduser',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adduser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/adduser/adduser.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adduser.component.css */ "./src/app/comps/adduser/adduser.component.css")).default]
                })
            ], AdduserComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/homepage/homepage.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/comps/homepage/homepage.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".divone{\n    position: absolute;\n    top: 0%;\n    left:0%;\n  }\n  img{\n      width:100%;\n      max-height: 200px;\n      position: absolute;\n     \n  }\n  .ulone{\n      position: relative;\n      width: 100%;\n  }\n  .lione.shoo{\n      left:0%;\n  }\n  .lione{\n      position: absolute;\n      left:-100%;\n      top: 0%;\n      width: 100%;\n      transition: left 2s;\n  }\n  h5{\n    display: inline-block;\n    background-color:gray;\n    margin-top: 15%\n   }\n  .divtow{\n      margin-top: 0.5%\n  }\n  ul{\n      margin: 0%;\n  }\n  h2{\n      display: inline-block;\n      background-color:gray;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsT0FBTztFQUNUO0VBQ0E7TUFDSSxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGtCQUFrQjs7RUFFdEI7RUFDQTtNQUNJLGtCQUFrQjtNQUNsQixXQUFXO0VBQ2Y7RUFDQTtNQUNJLE9BQU87RUFDWDtFQUNBO01BQ0ksa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixPQUFPO01BQ1AsV0FBVztNQUNYLG1CQUFtQjtFQUN2QjtFQUNDO0lBQ0MscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQjtHQUNEO0VBQ0Q7TUFDSTtFQUNKO0VBQUM7TUFDRyxVQUFVO0VBQ2Q7RUFDQTtNQUNJLHFCQUFxQjtNQUNyQixxQkFBcUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdm9uZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwJTtcbiAgICBsZWZ0OjAlO1xuICB9XG4gIGltZ3tcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgXG4gIH1cbiAgLnVsb25le1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmxpb25lLnNob297XG4gICAgICBsZWZ0OjAlO1xuICB9XG4gIC5saW9uZXtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6LTEwMCU7XG4gICAgICB0b3A6IDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0cmFuc2l0aW9uOiBsZWZ0IDJzO1xuICB9XG4gICBoNXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xuICAgIG1hcmdpbi10b3A6IDE1JVxuICAgfVxuICAuZGl2dG93e1xuICAgICAgbWFyZ2luLXRvcDogMC41JVxuICB9dWx7XG4gICAgICBtYXJnaW46IDAlO1xuICB9XG4gIGgye1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/comps/homepage/homepage.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/comps/homepage/homepage.component.ts ***!
          \******************************************************/
        /*! exports provided: HomepageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () { return HomepageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var src_app_services_photos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/photos.service */ "./src/app/services/photos.service.ts");
            var HomepageComponent = /** @class */ (function () {
                function HomepageComponent(svc, sves, psvc) {
                    this.svc = svc;
                    this.sves = sves;
                    this.psvc = psvc;
                    this.index = 0;
                    this.maxindex = 9;
                    svc.tenlastpost();
                    psvc.tenlastphost();
                    this.setinterval1();
                }
                HomepageComponent.prototype.ngOnInit = function () {
                };
                HomepageComponent.prototype.chengclass = function () {
                    var one = document.querySelectorAll('.lione')[this.index];
                    console.log(one.className);
                    one.className = "lione";
                    console.log(one.className);
                    if (this.index == 9) {
                        this.index = -1;
                    }
                    var to = document.querySelectorAll('.lione')[++this.index];
                    console.log(to.className);
                    to.className = "lione shoo";
                    console.log(to.className);
                };
                HomepageComponent.prototype.setinterval1 = function () {
                    var _this = this;
                    this.numberofinterval = window.setInterval(function () { _this.chengclass(); }, 3000);
                    console.log(this.numberofinterval);
                };
                HomepageComponent.prototype.ngOnDestroy = function () {
                    clearInterval(this.numberofinterval);
                };
                return HomepageComponent;
            }());
            HomepageComponent.ctorParameters = function () { return [
                { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: src_app_services_photos_service__WEBPACK_IMPORTED_MODULE_4__["PhotosService"] }
            ]; };
            HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-homepage',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/homepage/homepage.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/comps/homepage/homepage.component.css")).default]
                })
            ], HomepageComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/login/login.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/comps/login/login.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-form{\n    margin-top: 18%;\n    margin-left: 38%;\n\n}\n.mat-form-field {\n    display: inline-block;\n    position: relative;\n    text-align: center;\n    padding-bottom: 4.25em;\n    background-color: burlywood;\n}\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n    padding: 23px 0;\n}\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n    padding-bottom: 4.25em;\n}\nbutton{\n    margin-top: 0%;\n    \n    margin-left: 41.5%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7O0lBRWQsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3Jte1xuICAgIG1hcmdpbi10b3A6IDE4JTtcbiAgICBtYXJnaW4tbGVmdDogMzglO1xuXG59XG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA0LjI1ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogMjNweCAwO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC4yNWVtO1xufVxuYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIFxuICAgIG1hcmdpbi1sZWZ0OiA0MS41JTtcblxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/comps/login/login.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/comps/login/login.component.ts ***!
          \************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(rot, svc, logsvc) {
                    this.rot = rot;
                    this.svc = svc;
                    this.logsvc = logsvc;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.login = function () {
                    var us = this.svc.getifuser(this.id);
                    if (us) {
                        this.svc.myuser = us;
                        this.logsvc.islogin = true;
                        this.rot.navigateByUrl('/navi');
                    }
                    else {
                        alert('usreid ' + this.id + ' undenfind ples input user  that find in group');
                    }
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/comps/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/login/matrial/modo.ts": 
        /*!*********************************************!*\
          !*** ./src/app/comps/login/matrial/modo.ts ***!
          \*********************************************/
        /*! exports provided: Modo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modo", function () { return Modo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
            /* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
            /* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
            /* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
            /* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
            /* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
            /* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
            /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
            /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
            var Modo = /** @class */ (function () {
                function Modo() {
                }
                return Modo;
            }());
            Modo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    exports: [
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                    ]
                })
            ], Modo);
            /**  Copyright 2019 Google LLC. All Rights Reserved.
                Use of this source code is governed by an MIT-style license that
                can be found in the LICENSE file at http://angular.io/license */
            /***/ 
        }),
        /***/ "./src/app/comps/navi/navi.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/comps/navi/navi.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL25hdmkvbmF2aS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/navi/navi.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/comps/navi/navi.component.ts ***!
          \**********************************************/
        /*! exports provided: NaviComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaviComponent", function () { return NaviComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NaviComponent = /** @class */ (function () {
                function NaviComponent() {
                }
                NaviComponent.prototype.ngOnInit = function () {
                };
                return NaviComponent;
            }());
            NaviComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navi',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navi/navi.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navi.component.css */ "./src/app/comps/navi/navi.component.css")).default]
                })
            ], NaviComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/navigation/navigation.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/comps/navigation/navigation.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\nnav {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 8px 16px;\n    background: #3f51b5;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/comps/navigation/navigation.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/comps/navigation/navigation.component.ts ***!
          \**********************************************************/
        /*! exports provided: NavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () { return NavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NavigationComponent = /** @class */ (function () {
                function NavigationComponent(rot) {
                    this.rot = rot;
                }
                NavigationComponent.prototype.ngOnInit = function () {
                };
                NavigationComponent.prototype.moveto = function (page) {
                    this.rot.navigateByUrl(page);
                };
                return NavigationComponent;
            }());
            NavigationComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navigation/navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/comps/navigation/navigation.component.css")).default]
                })
            ], NavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/pohtos/pohtos.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/comps/pohtos/pohtos.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".component-page-header[_ngcontent-mcf-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\nimg{\n    width: 30px;\n    height: 30px;\n}\n.example-full-width{\n    margin: 2%;\n}\n.component-page-header{\n    margin-top: 2.8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcG9odG9zL3BvaHRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BvaHRvcy9wb2h0b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtcGFnZS1oZWFkZXJbX25nY29udGVudC1tY2YtYzUxMl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xufVxuaW1ne1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cbi5leGFtcGxlLWZ1bGwtd2lkdGh7XG4gICAgbWFyZ2luOiAyJTtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJ7XG4gICAgbWFyZ2luLXRvcDogMi44JTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/pohtos/pohtos.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/comps/pohtos/pohtos.component.ts ***!
          \**************************************************/
        /*! exports provided: PohtosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PohtosComponent", function () { return PohtosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_photos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/photos.service */ "./src/app/services/photos.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PohtosComponent = /** @class */ (function () {
                function PohtosComponent(svc, rot) {
                    this.svc = svc;
                    this.rot = rot;
                    this.title = "";
                }
                PohtosComponent.prototype.ngOnInit = function () {
                };
                PohtosComponent.prototype.pageaddphotos = function () {
                    this.rot.navigateByUrl('addphotos');
                };
                return PohtosComponent;
            }());
            PohtosComponent.ctorParameters = function () { return [
                { type: src_app_services_photos_service__WEBPACK_IMPORTED_MODULE_2__["PhotosService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            PohtosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pohtos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pohtos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/pohtos/pohtos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pohtos.component.css */ "./src/app/comps/pohtos/pohtos.component.css")).default]
                })
            ], PohtosComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/post/post.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/comps/post/post.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".component-page-header[_ngcontent-mcf-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\nbody {\n    font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n    margin: 0;\n}\np{\n    margin:8% 20% 8% 20% ;\n}\n.mat-expansion-panel{\n    margin: 1%;\n\n}\nbutton{\n    margin: 1%;\n}\n.example-full-width{\n    margin: 1%;\n}\n.component-page-header{\n    margin-top: 2.8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0dBQXNHO0lBQ3RHLFNBQVM7QUFDYjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVOztBQUVkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcG9uZW50LXBhZ2UtaGVhZGVyW19uZ2NvbnRlbnQtbWNmLWM1MTJdIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZG9jcy1wcmltYXJ5LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzNmNTFiNTtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsXCJMdWNpZGEgR3JhbmRlXCIsc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG59XG5we1xuICAgIG1hcmdpbjo4JSAyMCUgOCUgMjAlIDtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVse1xuICAgIG1hcmdpbjogMSU7XG5cbn1cbmJ1dHRvbntcbiAgICBtYXJnaW46IDElO1xufVxuLmV4YW1wbGUtZnVsbC13aWR0aHtcbiAgICBtYXJnaW46IDElO1xufVxuLmNvbXBvbmVudC1wYWdlLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAyLjglO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/comps/post/post.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/comps/post/post.component.ts ***!
          \**********************************************/
        /*! exports provided: PostComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function () { return PostComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PostComponent = /** @class */ (function () {
                function PostComponent(svc, sves, rot) {
                    this.svc = svc;
                    this.sves = sves;
                    this.rot = rot;
                    this.title = "";
                    this.body = "";
                }
                PostComponent.prototype.ngOnInit = function () {
                };
                PostComponent.prototype.pageaddpost = function () {
                    this.rot.navigateByUrl('/addpost');
                };
                PostComponent.prototype.postofmyuser = function () {
                    this.userid = this.sves.myuser.id;
                };
                PostComponent.prototype.allpost = function () {
                    this.userid = null;
                };
                return PostComponent;
            }());
            PostComponent.ctorParameters = function () { return [
                { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-post',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/post/post.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.css */ "./src/app/comps/post/post.component.css")).default]
                })
            ], PostComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/todos/todos.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/comps/todos/todos.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".component-page-header[_ngcontent-mcf-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\np{\n    margin:8% 20% 8% 20% ;\n}\n.example-full-width{\n    margin: 1%;\n}\n.component-page-header{\n    margin-top: 2.8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtcGFnZS1oZWFkZXJbX25nY29udGVudC1tY2YtYzUxMl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xufVxucHtcbiAgICBtYXJnaW46OCUgMjAlIDglIDIwJSA7XG59XG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xuICAgIG1hcmdpbjogMSU7XG59XG4uY29tcG9uZW50LXBhZ2UtaGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDIuOCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/comps/todos/todos.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/comps/todos/todos.component.ts ***!
          \************************************************/
        /*! exports provided: TodosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function () { return TodosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            var TodosComponent = /** @class */ (function () {
                function TodosComponent(svc, rot, usvc) {
                    this.svc = svc;
                    this.rot = rot;
                    this.usvc = usvc;
                    this.title = "";
                }
                TodosComponent.prototype.ngOnInit = function () {
                };
                TodosComponent.prototype.pageaddtodo = function () {
                    this.rot.navigateByUrl('addtodo');
                };
                return TodosComponent;
            }());
            TodosComponent.ctorParameters = function () { return [
                { type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-todos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/todos/todos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todos.component.css */ "./src/app/comps/todos/todos.component.css")).default]
                })
            ], TodosComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/users/users.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/comps/users/users.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".component-page-header[_ngcontent-mcf-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\np{\n    margin:8% 20% 8% 20% ;\n}\n.example-full-width{\n    margin: 1%;\n}\n.component-page-header{\n    margin-top: 2.8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtcGFnZS1oZWFkZXJbX25nY29udGVudC1tY2YtYzUxMl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xufVxucHtcbiAgICBtYXJnaW46OCUgMjAlIDglIDIwJSA7XG59XG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xuICAgIG1hcmdpbjogMSU7XG59XG4uY29tcG9uZW50LXBhZ2UtaGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDIuOCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/comps/users/users.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/comps/users/users.component.ts ***!
          \************************************************/
        /*! exports provided: UsersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function () { return UsersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var UsersComponent = /** @class */ (function () {
                function UsersComponent(svc, rot) {
                    this.svc = svc;
                    this.rot = rot;
                    this.name = "";
                    this.username = "";
                    this.email = "";
                }
                UsersComponent.prototype.ngOnInit = function () {
                };
                UsersComponent.prototype.pageadduser = function () {
                    this.rot.navigateByUrl('/adduser');
                };
                return UsersComponent;
            }());
            UsersComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-users',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/users/users.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/comps/users/users.component.css")).default]
                })
            ], UsersComponent);
            /***/ 
        }),
        /***/ "./src/app/pips/pipe1.pipe.ts": 
        /*!************************************!*\
          !*** ./src/app/pips/pipe1.pipe.ts ***!
          \************************************/
        /*! exports provided: Pipe1Pipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipe1Pipe", function () { return Pipe1Pipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var Pipe1Pipe = /** @class */ (function () {
                function Pipe1Pipe() {
                }
                Pipe1Pipe.prototype.transform = function (arr, title, body, id, userid) {
                    var arey = arr.filter(function (data) { return data.title.includes(title) && data.body.includes(body); });
                    if (userid) {
                        arey = arey.filter(function (data) { return data.userId == userid; });
                    }
                    if (id) {
                        console.log("g");
                        return arey.filter(function (data) { return data.id == id; });
                    }
                    return arey;
                };
                return Pipe1Pipe;
            }());
            Pipe1Pipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'pipe1'
                })
            ], Pipe1Pipe);
            /***/ 
        }),
        /***/ "./src/app/pips/pipenumber.pipe.ts": 
        /*!*****************************************!*\
          !*** ./src/app/pips/pipenumber.pipe.ts ***!
          \*****************************************/
        /*! exports provided: PipenumberPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipenumberPipe", function () { return PipenumberPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PipenumberPipe = /** @class */ (function () {
                function PipenumberPipe() {
                }
                PipenumberPipe.prototype.transform = function (arr, serc, value) {
                    if (serc) {
                        arr = arr.filter(function (i) { return i[value] == serc; });
                    }
                    return arr;
                };
                return PipenumberPipe;
            }());
            PipenumberPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'pipenumber'
                })
            ], PipenumberPipe);
            /***/ 
        }),
        /***/ "./src/app/pips/pipestr.pipe.ts": 
        /*!**************************************!*\
          !*** ./src/app/pips/pipestr.pipe.ts ***!
          \**************************************/
        /*! exports provided: PipestrPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipestrPipe", function () { return PipestrPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PipestrPipe = /** @class */ (function () {
                function PipestrPipe() {
                }
                PipestrPipe.prototype.transform = function (arr, serc, value) {
                    arr = arr.filter(function (t) { return t[value].includes(serc); });
                    return arr;
                };
                return PipestrPipe;
            }());
            PipestrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'pipestr'
                })
            ], PipestrPipe);
            /***/ 
        }),
        /***/ "./src/app/pips/pipetodo.pipe.ts": 
        /*!***************************************!*\
          !*** ./src/app/pips/pipetodo.pipe.ts ***!
          \***************************************/
        /*! exports provided: PipetodoPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipetodoPipe", function () { return PipetodoPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PipetodoPipe = /** @class */ (function () {
                function PipetodoPipe() {
                }
                PipetodoPipe.prototype.transform = function (arr, title, userid, id) {
                    arr = arr.filter(function (t) { return t.title.includes(title); });
                    if (userid) {
                        arr = arr.filter(function (i) { return i.userId == userid; });
                    }
                    if (id) {
                        arr = arr.filter(function (i) { return i.id == id; });
                        return arr;
                    }
                    return arr;
                };
                return PipetodoPipe;
            }());
            PipetodoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'pipetodo'
                })
            ], PipetodoPipe);
            /***/ 
        }),
        /***/ "./src/app/services/basic.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/basic.service.ts ***!
          \*******************************************/
        /*! exports provided: BasicService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicService", function () { return BasicService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BasicService = /** @class */ (function () {
                function BasicService(http, api) {
                    this.http = http;
                    this.api = api;
                    this.setaray(http, api);
                }
                BasicService.prototype.setaray = function (http, api) {
                    var _this = this;
                    var loc = localStorage.getItem(api);
                    if (loc != null) {
                        this.data = JSON.parse(loc);
                    }
                    else {
                        api = "https://jsonplaceholder.typicode.com/" + this.api;
                        this.http.get(api).subscribe(function (d) {
                            _this.data = d;
                            console.log("iiiii", _this.data);
                        });
                    }
                };
                BasicService.prototype.addmoreitem = function (objec) {
                    this.data.push(objec);
                    localStorage.setItem(this.api, JSON.stringify(this.data));
                };
                return BasicService;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/login.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/login.service.ts ***!
          \*******************************************/
        /*! exports provided: LoginService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function () { return LoginService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginService = /** @class */ (function () {
                function LoginService(rowter) {
                    var _this = this;
                    this.rowter = rowter;
                    this.islogin = false;
                    this.rowter.events.subscribe(function (roternav) {
                        if (roternav instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                            if (_this.rowter.url.includes('login') == false) {
                                if (_this.islogin == false) {
                                    _this.rowter.navigateByUrl('/login');
                                }
                            }
                        }
                    });
                }
                return LoginService;
            }());
            LoginService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoginService);
            // this.rowter.events.subscribe(nativrowter=>{
            //   if(nativrowter instanceof NavigationEnd){
            //     if(this.islogin==false){
            //       this.rowter.navigateByUrl('login')
            //     }
            //   }
            // })
            /***/ 
        }),
        /***/ "./src/app/services/photos.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/photos.service.ts ***!
          \********************************************/
        /*! exports provided: PhotosService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosService", function () { return PhotosService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _basic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic.service */ "./src/app/services/basic.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PhotosService = /** @class */ (function (_super) {
                __extends(PhotosService, _super);
                function PhotosService(http) {
                    var _this = _super.call(this, http, "photos") || this;
                    _this.http = http;
                    _this.tenlastphos = [];
                    return _this;
                }
                PhotosService.prototype.tenlastphost = function () {
                    if (this.data) {
                        for (var index = (this.data.length - 10); index < this.data.length; index++) {
                            this.tenlastphos.push(this.data[index]);
                        }
                    }
                };
                return PhotosService;
            }(_basic_service__WEBPACK_IMPORTED_MODULE_2__["BasicService"]));
            PhotosService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            PhotosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PhotosService);
            /***/ 
        }),
        /***/ "./src/app/services/post.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/post.service.ts ***!
          \******************************************/
        /*! exports provided: PostService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function () { return PostService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _basic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic.service */ "./src/app/services/basic.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PostService = /** @class */ (function (_super) {
                __extends(PostService, _super);
                function PostService(http) {
                    var _this = _super.call(this, http, 'posts') || this;
                    _this.tenlastpos = [];
                    return _this;
                }
                PostService.prototype.tenlastpost = function () {
                    if (this.data) {
                        for (var index = (this.data.length - 10); index < this.data.length; index++) {
                            this.tenlastpos.push(this.data[index]);
                        }
                    }
                };
                return PostService;
            }(_basic_service__WEBPACK_IMPORTED_MODULE_2__["BasicService"]));
            PostService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PostService);
            /***/ 
        }),
        /***/ "./src/app/services/todo.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/todo.service.ts ***!
          \******************************************/
        /*! exports provided: TodoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function () { return TodoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _basic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic.service */ "./src/app/services/basic.service.ts");
            var TodoService = /** @class */ (function (_super) {
                __extends(TodoService, _super);
                // todos:Todos[]
                function TodoService(http) {
                    var _this = _super.call(this, http, 'todos') || this;
                    _this.http = http;
                    return _this;
                }
                return TodoService;
            }(_basic_service__WEBPACK_IMPORTED_MODULE_3__["BasicService"]));
            TodoService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TodoService);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _basic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic.service */ "./src/app/services/basic.service.ts");
            var UserService = /** @class */ (function (_super) {
                __extends(UserService, _super);
                function UserService(http) {
                    var _this = _super.call(this, http, 'users') || this;
                    _this.http = http;
                    return _this;
                }
                UserService.prototype.getname = function (id) {
                    var nameo = this.data.find(function (user) { return id == user.id; });
                    return nameo.name;
                };
                UserService.prototype.getid = function (id) {
                    var num = this.data.find(function (user) { return id == user.id; });
                    return num.id;
                };
                UserService.prototype.getusername = function (id) {
                    var usernameo = this.data.find(function (user) { return id == user.id; });
                    return usernameo.username;
                };
                UserService.prototype.getifuser = function (userid) {
                    var u = this.data.find(function (user) { return user.id == userid; });
                    return u;
                };
                return UserService;
            }(_basic_service__WEBPACK_IMPORTED_MODULE_3__["BasicService"]));
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/student/Desktop/projectend/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map