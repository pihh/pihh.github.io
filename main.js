(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_animations/fade-out.animation.ts":
/*!***************************************************!*\
  !*** ./src/app/_animations/fade-out.animation.ts ***!
  \***************************************************/
/*! exports provided: fadeOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutAnimation", function() { return fadeOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeOutAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);


/***/ }),

/***/ "./src/app/_components/block-about/block-about.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/block-about/block-about.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-blocks about {{contentBlocksClass}} {{blockClass}}\">\n    <section id=\"about\" class=\"content\">\n        <div class=\"block-content\">\n            <h3 class=\"block-title\">Profile</h3>\n            <div class=\"row\">\n                <div class=\"col-md-7\">\n                    {{profile.about}}\n                    <img class=\"sign\" alt=\"\" src=\"assets/images/signature.png\">\n                </div>\n                <div class=\"col-md-5\">\n                    <ul class=\"info-list\">\n                        <li>\n                            <strong>Name : </strong>\n                            {{profile.name}}\n                        </li>\n                        <li>\n                            <strong>Date of birth : </strong>\n                            {{profile.birth_date}}\n                        </li>\n                        <li >\n                            <strong>Address : </strong>\n                            {{profile.address}}\n                        </li>\n                        <li>\n                            <strong>Email : </strong>\n                            {{profile.email}}\n                        </li>\n                        <!-- <li>\n                            <strong>Phone : </strong>\n                            + 351 919 373 033\n                        </li> -->\n                        <li>\n                            <strong>Skype : </strong>\n                            {{profile.skype}}\n                        </li>\n                        <li>\n                            <strong>Interests : </strong>\n                            {{profile.interests}}\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"block-content \">\n            <h3 class=\"block-title\">Skills</h3>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <h4>Technical Skills</h4>\n                    <div *ngFor=\"let skill of skillSubscription | async\">\n                      <label class=\"progress-bar-label\" >\n                          {{skill.name}} -\n                          <span>{{skill.years}} years experience</span>\n                      </label>\n                      <div class=\"progress\" >\n                        <ngb-progressbar type=\"warning\" [value]=\"skill.experience_level\" [striped]=\"true\" [animated]=\"true\">\n                          <span>{{skill.experience_level}}%</span>\n                        </ngb-progressbar>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <h4>Know-how + Good Practices</h4>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <ul class=\"icon-list\">\n                              <ng-container *ngFor=\"let know of knowSubscription | async\">\n                                <li *ngIf=\"know.type === 'know-how'\">{{know.text}}</li>\n                              </ng-container>\n                            </ul>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <ul class=\"icon-list\">\n                              <ng-container *ngFor=\"let know of knowSubscription | async\">\n                                <li *ngIf=\"know.type === 'good-practice'\">{{know.text}}</li>\n                              </ng-container>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"block-content \">\n            <h3 class=\"block-title\">Experience</h3>\n            <div class=\"timeline experience\">\n                <div class=\"row \">\n                    <div class=\"col-md-12\">\n                        <div class=\"exp-holder\">\n                            <div class=\"exp\" *ngFor=\"let experience of experienceSubscription | async\">\n                                <div class=\"hgroup\">\n                                    <h4>{{experience.name}} </h4>\n                                    <h5>\n                                        {{experience.from}} -\n                                        <span class=\"current\" [ngClass]=\"(experience.to === 'current') ? 'current': ''\">{{experience.to}}</span>\n                                    </h5>\n                                </div>\n                                <p>{{experience.description}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"block-content\">\n            <h3 class=\"block-title\">Education</h3>\n            <div class=\"timeline education\">\n                <div class=\"row \">\n                    <div class=\"col-md-12\">\n                        <div class=\"exp-holder\">\n                            <div class=\"exp\" *ngFor=\"let education of educationSubscription | async\">\n                                <div class=\"hgroup\">\n                                    <h4>{{education.name}} </h4>\n                                    <h5>{{education.from}} - {{education.to}}</h5>\n                                </div>\n                                <p>{{education.description}}</p>\n                            </div>\n                            <!-- <div class=\"exp\">\n                                <div class=\"hgroup\">\n                                    <h4>Master Degree – Mutation Media </h4>\n                                    <h5>Sept 2015 - Nov 2015</h5>\n                                </div>\n                                <p>Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n                            </div>\n                            <div class=\"exp\">\n                                <div class=\"hgroup\">\n                                    <h4>School Of Science – Mutation Media </h4>\n                                    <h5>May 2015 - Sept 2015</h5>\n                                </div>\n                                <p>Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"block-content\">\n            <h3 class=\"block-title\">Courses</h3>\n            <div class=\"row\">\n                <div class=\"col-sm-4 service\" *ngFor=\"let course of courseSubscription | async\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-{{course.icon}}\"></i>\n                    </div>\n                    <h4>{{course.name}}</h4>\n                    <p>\n                        {{course.description}}\n                    </p>\n                </div>\n                <!-- <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-building\"></i>\n                    </div>\n                    <h4>PHP</h4>\n                    <p>Certified Secure Coder PHP</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-image\"></i>\n                    </div>\n                    <h4>HTML5 CSS3</h4>\n                    <p>Learn Bootstrap Development By Building 10 Projects</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>Javascript (NodeJS)</h4>\n                    <p>Learn Nodejs by building 10 projects</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-image\"></i>\n                    </div>\n                    <h4>Javasctipt /Typescript</h4>\n                    <p>Compreensive Typescript</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>Git</h4>\n                    <p>Learning Git - A Beginners Git Course From Infinite Skills</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>Javascript</h4>\n                    <p>JavaScript: Understanding the Weird Parts</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>Javascript</h4>\n                    <p>Javascript Design Patterns</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>PHP (Laravel)</h4>\n                    <p>Build a CMS with Laravel</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>PHP (Laravel)</h4>\n                    <p>Build a eCommerce with Laravel</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>Asp + Javascript</h4>\n                    <p>Build a social network from scratch</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>AngularJS + Ionic</h4>\n                    <p>Ionic by example</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>Javascript ( AngularJs )</h4>\n                    <p>Learn and understand AngularJS</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>MySQL</h4>\n                    <p>Database Design</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>PHP</h4>\n                    <p>Design Patterns Through PHP</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>AngularJs</h4>\n                    <p>Angular Application Development</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>AngularJS + Typescript</h4>\n                    <p>Angular 2 Jumpstart with typescript (ongoing)</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>PHP</h4>\n                    <p>Create your own PHP MVC Framework</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>Linux CLI</h4>\n                    <p>Linux comand line essentials</p>\n                </div>\n                <div class=\"col-sm-4 service\">\n                    <div class=\"service-icon\">\n                        <i class=\" fa fa-print\"></i>\n                    </div>\n                    <h4>NodeJs</h4>\n                    <p>Learn and understand NodeJS</p>\n                </div> -->\n            </div>\n        </div>\n        <div class=\"block-content\">\n            <h3 class=\"block-title\">Prizes</h3>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"col-sm-3 awards\" *ngFor=\"let prize of prizeSubscription | async\">\n                        <img alt=\"\" src=\"{{prize.image}}\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--<div class=\"block-content\">\n            <h3 class=\"block-title\">Testimonials</h3>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <ul class=\"testimonials\">\n                        <li>\n                            <img alt=\"\" src=\"assets/images/testimonials/1.jpg\">\n                            <blockquote>\n                                This template is exactly what we were looking for!\n                                <p class=\"quote\">\n                                    <span>Brendon Rodgers</span>\n                                    - CEO of xyz.com\n                                </p>\n                            </blockquote>\n                        </li>\n                        <li>\n                            <img alt=\"\" src=\"assets/images/testimonials/2.jpg\">\n                            <blockquote>\n                                This template is very nice! Great work\n                                <p class=\"quote\">\n                                    <span>Becky Allwood</span>\n                                    - CEO of abc.com\n                                </p>\n                            </blockquote>\n                        </li>\n                        <li>\n                            <img alt=\"\" src=\"assets/images/testimonials/3.jpg\">\n                            <blockquote>\n                                My work has been significantly simplified.\n                                <p class=\"quote\">\n                                    <span>Elly Page</span>\n                                    - CEO of nfl.com\n                                </p>\n                            </blockquote>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"row text-center\">\n                <div class=\"col-md-12 btn-email\">\n                    <a class=\"btn lowercase\">hello@james.com</a>\n                    <br>\n                    <small>I am available for freelance</small>\n                </div>\n            </div>\n        </div>-->\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/block-about/block-about.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/_components/block-about/block-about.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/block-about/block-about.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/_components/block-about/block-about.component.ts ***!
  \******************************************************************/
/*! exports provided: BlockAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockAboutComponent", function() { return BlockAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/pub-sub.service */ "./src/app/_services/pub-sub.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/database.service */ "./src/app/_services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockAboutComponent = /** @class */ (function () {
    function BlockAboutComponent(pubSubService, db) {
        this.pubSubService = pubSubService;
        this.db = db;
        this.block = 'about';
        this.skillSubscription = [];
        this.knowSubscription = [];
        this.educationSubscription = [];
        this.experienceSubscription = [];
        this.courseSubscription = [];
        this.prizeSubscription = [];
        this.contentBlocksClass = 'hidex';
        this.blockClass = '';
        this.profile = {
            name: '',
            about: '',
            address: '',
            birth_date: '',
            email: '',
            interests: '',
            phone: '',
            skype: ''
        };
        this.profile = {
            name: '',
            about: '',
            address: '',
            birth_date: '',
            email: '',
            interests: '',
            phone: '',
            skype: ''
        };
    }
    BlockAboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentBlocksSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe(function (block) { return _this.showBlock(block); });
        this.showBlockAboutSubscription = this.pubSubService.on('showBlockAbout').subscribe(function () { return _this.openBlock(); });
        this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(function () { return _this.showBlock('none'); });
        this.skillSubscription = this.db.technical_skills;
        this.knowSubscription = this.db.know_how;
        this.educationSubscription = this.db.education;
        this.experienceSubscription = this.db.experience;
        this.courseSubscription = this.db.courses;
        this.prizeSubscription = this.db.prizes;
        this.profileSubscription = this.db.profile.subscribe(function (data) {
            if (data && Array.isArray(data) && data[0]) {
                _this.profile = data[0];
            }
        });
    };
    BlockAboutComponent.prototype.ngOnDestroy = function () {
        this.contentBlocksSubscription.unsubscribe();
        this.showBlockAboutSubscription.unsubscribe();
        this.closeMenuSubscription.unsubscribe();
        this.profileSubscription.unsubscribe();
    };
    BlockAboutComponent.prototype.showBlock = function (block) {
        this.contentBlocksClass = 'hidex';
        this.blockClass = '';
        if (block == this.block) {
            this.pubSubService.publish('showBlockAbout');
        }
    };
    BlockAboutComponent.prototype.openBlock = function () {
        this.contentBlocksClass = '';
        this.blockClass = 'showx';
    };
    BlockAboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-about',
            template: __webpack_require__(/*! ./block-about.component.html */ "./src/app/_components/block-about/block-about.component.html"),
            styles: [__webpack_require__(/*! ./block-about.component.scss */ "./src/app/_components/block-about/block-about.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__["PubSubService"], _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], BlockAboutComponent);
    return BlockAboutComponent;
}());



/***/ }),

/***/ "./src/app/_components/block-blog/block-blog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/_components/block-blog/block-blog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-blocks blog {{contentBlocksClass}} {{blockClass}}\">\n    <section class=\"content\">\n        <div class=\"block-content\">\n            <h3 class=\"block-title\">My Blog</h3>\n            <div class=\"col-md-10 col-md-offset-1\">\n                <div class=\"post\">\n                    <div class=\"post-thumbnail\">\n                        <a class=\"open-post\" href=\"post-single.html\">\n                            <img alt=\"\" src=\"assets/images/blog/4.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"post-title\">\n                        <a class=\"open-post\" href=\"post-single.html\">\n                            <h2>Typography for web</h2>\n                        </a>\n                        <p class=\"post-info\">\n                            <span class=\"post-author\">Posted by John Sparrow</span>\n                            <span class=\"slash\"></span>\n                            <span class=\"post-date\">Dec 08, 2015</span>\n                            <span class=\"slash\"></span>\n                            <span class=\"post-catetory\">Food</span>\n                        </p>\n                    </div>\n                    <div class=\"post-body\">\n                        <p>\n                            Omnium nominati prodesset pri no. Per dolor gloriatur\n                            <span class=\"selected\"> persequer</span>\n                            is ad, te his aliquip molestie. Veri tantas ad usu, mel ne sonet quaeque assueverit. Enim eruditi euripidis his et, dictas admodum posidonium ei pro. An duo tempor maluisset honestatis. Ne cum invidunt constituto, sanctus accusam an usu, ea mandamus incorrupte mel. Pro cu purto graeco. Wisi sonet elitr eos in. Est sint magna mucius te, iudico integre gubergren no vis. Assum doming et pro, est ei inermis corpora argumentum. Eos graece sadipscing et, pri dico salutandi consetetur et, explicari voluptatum mei at. Ex cum nisl epicurei, sea in molestie theophrastus, nibh tollit apeirian no vis.\n                        </p>\n                        <a class=\"btn open-post\" href=\"post-single.html\">Read More</a>\n                    </div>\n                </div>\n                <div class=\"post\">\n                    <div class=\"post-thumbnail\">\n                        <a class=\"open-post\" href=\"post-single.html\">\n                            <img alt=\"\" src=\"assets/images/blog/3.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"post-title\">\n                        <a class=\"open-post\" href=\"post-single.html\">\n                            <h2>Typography for web</h2>\n                        </a>\n                        <p class=\"post-info\">\n                            <span class=\"post-author\">Posted by John Sparrow</span>\n                            <span class=\"slash\"></span>\n                            <span class=\"post-date\">Dec 08, 2015</span>\n                            <span class=\"slash\"></span>\n                            <span class=\"post-catetory\">Food</span>\n                        </p>\n                    </div>\n                    <div class=\"post-body\">\n                        <p>\n                            Omnium nominati prodesset pri no. Per dolor gloriatur\n                            <span class=\"selected\"> persequer</span>\n                            is ad, te his aliquip molestie. Veri tantas ad usu, mel ne sonet quaeque assueverit. Enim eruditi euripidis his et, dictas admodum posidonium ei pro. An duo tempor maluisset honestatis. Ne cum invidunt constituto, sanctus accusam an usu, ea mandamus incorrupte mel. Pro cu purto graeco. Wisi sonet elitr eos in. Est sint magna mucius te, iudico integre gubergren no vis. Assum doming et pro, est ei inermis corpora argumentum. Eos graece sadipscing et, pri dico salutandi consetetur et, explicari voluptatum mei at. Ex cum nisl epicurei, sea in molestie theophrastus, nibh tollit apeirian no vis.\n                        </p>\n                        <a class=\"btn open-post\" href=\"post-single.html\">Read More</a>\n                    </div>\n                </div>\n                <div class=\"post\">\n                    <div class=\"post-thumbnail\">\n                        <a class=\"open-post\" href=\"post-single.html\">\n                            <img alt=\"\" src=\"assets/images/blog/2.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"post-title\">\n                        <a class=\"open-post\" href=\"post-single.html\">\n                            <h2>Typography for web</h2>\n                        </a>\n                        <p class=\"post-info\">\n                            <span class=\"post-author\">Posted by John Sparrow</span>\n                            <span class=\"slash\"></span>\n                            <span class=\"post-date\">Dec 08, 2015</span>\n                            <span class=\"slash\"></span>\n                            <span class=\"post-catetory\">Food</span>\n                        </p>\n                    </div>\n                    <div class=\"post-body\">\n                        <p>\n                            Omnium nominati prodesset pri no. Per dolor gloriatur\n                            <span class=\"selected\"> persequer</span>\n                            is ad, te his aliquip molestie. Veri tantas ad usu, mel ne sonet quaeque assueverit. Enim eruditi euripidis his et, dictas admodum posidonium ei pro. An duo tempor maluisset honestatis. Ne cum invidunt constituto, sanctus accusam an usu, ea mandamus incorrupte mel. Pro cu purto graeco. Wisi sonet elitr eos in. Est sint magna mucius te, iudico integre gubergren no vis. Assum doming et pro, est ei inermis corpora argumentum. Eos graece sadipscing et, pri dico salutandi consetetur et, explicari voluptatum mei at. Ex cum nisl epicurei, sea in molestie theophrastus, nibh tollit apeirian no vis.\n                        </p>\n                        <a class=\"btn open-post\" href=\"post-single.html\">Read More</a>\n                    </div>\n                </div>\n                <div class=\"post\">\n                    <div class=\"post-thumbnail\">\n                        <a class=\"open-post\" href=\"post-single.html\">\n                            <img alt=\"\" src=\"assets/images/blog/1.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"post-title\">\n                        <a class=\"open-post\" href=\"post-single.html\">\n                            <h2>Typography for web</h2>\n                        </a>\n                        <p class=\"post-info\">\n                            <span class=\"post-author\">Posted by John Sparrow</span>\n                            <span class=\"slash\"></span>\n                            <span class=\"post-date\">Dec 08, 2015</span>\n                            <span class=\"slash\"></span>\n                            <span class=\"post-catetory\">Food</span>\n                        </p>\n                    </div>\n                    <div class=\"post-body\">\n                        <p>\n                            Omnium nominati prodesset pri no. Per dolor gloriatur\n                            <span class=\"selected\"> persequer</span>\n                            is ad, te his aliquip molestie. Veri tantas ad usu, mel ne sonet quaeque assueverit. Enim eruditi euripidis his et, dictas admodum posidonium ei pro. An duo tempor maluisset honestatis. Ne cum invidunt constituto, sanctus accusam an usu, ea mandamus incorrupte mel. Pro cu purto graeco. Wisi sonet elitr eos in. Est sint magna mucius te, iudico integre gubergren no vis. Assum doming et pro, est ei inermis corpora argumentum. Eos graece sadipscing et, pri dico salutandi consetetur et, explicari voluptatum mei at. Ex cum nisl epicurei, sea in molestie theophrastus, nibh tollit apeirian no vis.\n                        </p>\n                        <a class=\"btn open-post\" href=\"post-single.html\">Read More</a>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <ul class=\"pagination\">\n                        <li>\n                            <a aria-label=\"Previous\" href=\"#\">\n                                <span aria-hidden=\"true\">«</span>\n                            </a>\n                        </li>\n                        <li class=\"active\">\n                            <a href=\"#\">1</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">2</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">3</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">4</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">5</a>\n                        </li>\n                        <li>\n                            <a aria-label=\"Next\" href=\"#\">\n                                <span aria-hidden=\"true\">»</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/block-blog/block-blog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/_components/block-blog/block-blog.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/block-blog/block-blog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/_components/block-blog/block-blog.component.ts ***!
  \****************************************************************/
/*! exports provided: BlockBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockBlogComponent", function() { return BlockBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/pub-sub.service */ "./src/app/_services/pub-sub.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockBlogComponent = /** @class */ (function () {
    function BlockBlogComponent(pubSubService) {
        this.pubSubService = pubSubService;
        this.block = 'blog';
        this.contentBlocksClass = 'hidex';
        this.blockClass = '';
    }
    BlockBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentBlocksSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe(function (block) { return _this.showBlock(block); });
        this.showBlockAboutSubscription = this.pubSubService.on('showBlockBlog').subscribe(function () { return _this.openBlock(); });
        this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(function () { return _this.showBlock('none'); });
    };
    BlockBlogComponent.prototype.ngOnDestroy = function () {
        this.contentBlocksSubscription.unsubscribe();
        this.showBlockAboutSubscription.unsubscribe();
        this.closeMenuSubscription.unsubscribe();
    };
    BlockBlogComponent.prototype.showBlock = function (block) {
        this.contentBlocksClass = 'hidex';
        this.blockClass = '';
        if (block == this.block) {
            this.pubSubService.publish('showBlockBlog');
        }
    };
    BlockBlogComponent.prototype.openBlock = function () {
        this.contentBlocksClass = '';
        this.blockClass = 'showx';
    };
    BlockBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-blog',
            template: __webpack_require__(/*! ./block-blog.component.html */ "./src/app/_components/block-blog/block-blog.component.html"),
            styles: [__webpack_require__(/*! ./block-blog.component.scss */ "./src/app/_components/block-blog/block-blog.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__["PubSubService"]])
    ], BlockBlogComponent);
    return BlockBlogComponent;
}());



/***/ }),

/***/ "./src/app/_components/block-contact/block-contact.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_components/block-contact/block-contact.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-blocks contact {{contentBlocksClass}} {{blockClass}}\">\n    <section class=\"content\">\n        <div class=\"block-content\">\n            <h3 class=\"block-title\">Get in touch</h3>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"contact-content \">\n                        <div class=\"contact-icon\">\n                            <i class=\"fa fa-map-marker\"></i>\n                        </div>\n                        <div class=\"contact-details\">\n                            <h5>Address</h5>\n                            <p>234, London Street, EL10 6 BG</p>\n                        </div>\n                    </div>\n                    <div class=\"contact-content \">\n                        <div class=\"contact-icon\">\n                            <i class=\"fa fa-phone\"></i>\n                        </div>\n                        <div class=\"contact-details\">\n                            <h5>Call Us</h5>\n                            <p> +44 - 02920111222</p>\n                        </div>\n                    </div>\n                    <div class=\"contact-content \">\n                        <div class=\"contact-icon\">\n                            <i class=\"fa fa-envelope\"></i>\n                        </div>\n                        <div class=\"contact-details\">\n                            <h5>Enquiries</h5>\n                            <p>hello@james.com</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <form id=\"formcontactus\" class=\"\" action=\"php/contact_me.php\" method=\"POST\">\n                        <div class=\"form-group\">\n                            <input class=\"form-control requiretop\" type=\"text\" placeholder=\"* Your Name\" name=\"name\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control requiretop\" type=\"email\" placeholder=\"* Your Email\" name=\"email\">\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control requiretop\" placeholder=\"* Your Message\" name=\"message\" rows=\"6\"></textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-dark selected\" type=\"submit\">Send Message</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/block-contact/block-contact.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/_components/block-contact/block-contact.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/block-contact/block-contact.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_components/block-contact/block-contact.component.ts ***!
  \**********************************************************************/
/*! exports provided: BlockContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockContactComponent", function() { return BlockContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/pub-sub.service */ "./src/app/_services/pub-sub.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockContactComponent = /** @class */ (function () {
    function BlockContactComponent(pubSubService) {
        this.pubSubService = pubSubService;
        this.block = 'contact';
        this.contentBlocksClass = 'hidex';
        this.blockClass = '';
    }
    BlockContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentBlocksSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe(function (block) { return _this.showBlock(block); });
        this.showBlockAboutSubscription = this.pubSubService.on('showBlockContact').subscribe(function () { return _this.openBlock(); });
        this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(function () { return _this.showBlock('none'); });
    };
    BlockContactComponent.prototype.ngOnDestroy = function () {
        this.contentBlocksSubscription.unsubscribe();
        this.showBlockAboutSubscription.unsubscribe();
        this.closeMenuSubscription.unsubscribe();
    };
    BlockContactComponent.prototype.showBlock = function (block) {
        this.contentBlocksClass = 'hidex';
        this.blockClass = '';
        if (block == this.block) {
            this.pubSubService.publish('showBlockContact');
        }
    };
    BlockContactComponent.prototype.openBlock = function () {
        this.contentBlocksClass = '';
        this.blockClass = 'showx';
    };
    BlockContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-contact',
            template: __webpack_require__(/*! ./block-contact.component.html */ "./src/app/_components/block-contact/block-contact.component.html"),
            styles: [__webpack_require__(/*! ./block-contact.component.scss */ "./src/app/_components/block-contact/block-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__["PubSubService"]])
    ], BlockContactComponent);
    return BlockContactComponent;
}());



/***/ }),

/***/ "./src/app/_components/block-menu/block-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/_components/block-menu/block-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-blocks\">\n    <div class=\"about-block\">\n        <div class=\"about-block-container\">\n            <h2 class=\"about menu-item {{about}}\" (click)=\"openResume()\">Resume</h2>\n        </div>\n    </div>\n    <div class=\"portfolio-block\">\n        <div class=\"portfolio-block-container\">\n            <h2 class=\"portfolio menu-item {{portfolio}}\" (click)=\"openPortfolio()\">Portfolio</h2>\n        </div>\n    </div>\n    <div class=\"blog-block\">\n        <div class=\"blog-block-container\">\n            <h2 class=\"blog menu-item {{blog}}\" (click)=\"openBlog()\">Blog</h2>\n        </div>\n    </div>\n    <div class=\"contact-block\">\n        <div class=\"contact-block-container\">\n            <h2 class=\"contact menu-item {{contact}}\" (click)=\"openContact()\">Contact</h2>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/block-menu/block-menu.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/_components/block-menu/block-menu.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/block-menu/block-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/_components/block-menu/block-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: BlockMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockMenuComponent", function() { return BlockMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/pub-sub.service */ "./src/app/_services/pub-sub.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockMenuComponent = /** @class */ (function () {
    function BlockMenuComponent(pubSubService) {
        this.pubSubService = pubSubService;
        this.about = '';
        this.portfolio = '';
        this.blog = '';
        this.contact = '';
    }
    BlockMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hideAllAndShowOneSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe(function (menu) { return _this.updateMenu(menu); });
        this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(function () { return _this.close(); });
    };
    BlockMenuComponent.prototype.ngOnDestroy = function () {
        this.hideAllAndShowOneSubscription.unsubscribe();
        this.closeMenuSubscription.unsubscribe();
    };
    BlockMenuComponent.prototype.hideAllAndShowOne = function (what) {
        this.pubSubService.publish('hideAllAndShowOne', what);
    };
    BlockMenuComponent.prototype.openResume = function () {
        this.hideAllAndShowOne('about');
    };
    BlockMenuComponent.prototype.openPortfolio = function () {
        this.hideAllAndShowOne('portfolio');
    };
    BlockMenuComponent.prototype.openBlog = function () {
        this.hideAllAndShowOne('blog');
    };
    BlockMenuComponent.prototype.openContact = function () {
        this.hideAllAndShowOne('contact');
    };
    BlockMenuComponent.prototype.close = function () {
        this.about = '';
        this.portfolio = '';
        this.blog = '';
        this.contact = '';
    };
    BlockMenuComponent.prototype.updateMenu = function (menu) {
        this.close();
        this[menu] = 'active';
    };
    BlockMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-menu',
            template: __webpack_require__(/*! ./block-menu.component.html */ "./src/app/_components/block-menu/block-menu.component.html"),
            styles: [__webpack_require__(/*! ./block-menu.component.scss */ "./src/app/_components/block-menu/block-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__["PubSubService"]])
    ], BlockMenuComponent);
    return BlockMenuComponent;
}());



/***/ }),

/***/ "./src/app/_components/block-name/block-name.component.html":
/*!******************************************************************!*\
  !*** ./src/app/_components/block-name/block-name.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"name-block\">\n    <div class=\"name-block-container\" >\n        <h1>\n            <span>Hi, I'm</span>\n            {{profile.name}}\n        </h1>\n        <h2>{{profile.profession}}</h2>\n        <a class=\"btn btn-download\">Download Resume</a>\n        <ul class=\"social\">\n            <li>\n                <a href=\"{{facebook}}\" target=\"_blank\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </li>\n            <li>\n                <a href=\"{{linkedin}}\" target=\"_blank\">\n                    <i class=\"fa fa-linkedin\"></i>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/block-name/block-name.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/_components/block-name/block-name.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/block-name/block-name.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/_components/block-name/block-name.component.ts ***!
  \****************************************************************/
/*! exports provided: BlockNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockNameComponent", function() { return BlockNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockNameComponent = /** @class */ (function () {
    function BlockNameComponent(db) {
        this.db = db;
        this.facebook = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].SOCIAL.FACEBOOK;
        this.linkedin = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].SOCIAL.LINKEDIN;
        this.profile = {
            name: '',
            about: '',
            address: '',
            birth_date: '',
            email: '',
            interests: '',
            phone: '',
            skype: '',
            profession: ''
        };
        this.profile = {
            name: '',
            about: '',
            address: '',
            birth_date: '',
            email: '',
            interests: '',
            phone: '',
            skype: '',
            profession: ''
        };
    }
    BlockNameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileSubscription = this.db.profile.subscribe(function (data) {
            if (data && Array.isArray(data) && data[0]) {
                _this.profile = data[0];
            }
        });
    };
    BlockNameComponent.prototype.ngOnDestroy = function () {
        this.profileSubscription.unsubscribe();
    };
    BlockNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-name',
            template: __webpack_require__(/*! ./block-name.component.html */ "./src/app/_components/block-name/block-name.component.html"),
            styles: [__webpack_require__(/*! ./block-name.component.scss */ "./src/app/_components/block-name/block-name.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], BlockNameComponent);
    return BlockNameComponent;
}());



/***/ }),

/***/ "./src/app/_components/block-portfolio/block-portfolio.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/_components/block-portfolio/block-portfolio.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-blocks portfolio {{contentBlocksClass}} {{blockClass}}\">\n    <section class=\"content\">\n        <div class=\"block-content\">\n            <h3 class=\"block-title\">Portfolio</h3>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <ul id=\"filters\">\n                        <li class=\"active\" data-filter=\"*\">All</li>\n                        <li data-filter=\".graphic\">Graphic</li>\n                        <li data-filter=\".web\">Web</li>\n                        <li data-filter=\".video\">Video</li>\n                        <li data-filter=\".apps\">Apps</li>\n                    </ul>\n                    <div id=\"projects\">\n                        <div class=\"project graphic apps\" *ngFor=\"let portfolio of portfolioSubscription | async\">\n                            <a class=\"open-project\" >\n                                <div class=\"project-overlay\">\n                                    <div class=\"vcenter\">\n                                        <div class=\"centrize\">\n                                            <h4>{{portfolio.name}}</h4>\n                                            <p>{{portfolio.description | ellipsis}}</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </a>\n                            <img alt=\"\" src=\"{{portfolio.image}}\">\n                        </div>\n                        <!-- <div class=\"project web apps\">\n                            <a class=\"open-project\" href=\"project-2.html\">\n                                <div class=\"project-overlay\">\n                                    <div class=\"vcenter\">\n                                        <div class=\"centrize\">\n                                            <h4>Colorful Tees</h4>\n                                            <p>Web / Apps</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </a>\n                            <img alt=\"\" src=\"assets/images/portfolio/2.jpg\">\n                        </div>\n                        <div class=\"project graphic video\">\n                            <a class=\"open-project\" href=\"project-1.html\">\n                                <div class=\"project-overlay\">\n                                    <div class=\"vcenter\">\n                                        <div class=\"centrize\">\n                                            <h4>Coffee Cups</h4>\n                                            <p>Graphic / Video</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </a>\n                            <img alt=\"\" src=\"assets/images/portfolio/3.jpg\">\n                        </div>\n                        <div class=\"project graphic\">\n                            <a class=\"open-project\" href=\"project-1.html\">\n                                <div class=\"project-overlay\">\n                                    <div class=\"vcenter\">\n                                        <div class=\"centrize\">\n                                            <h4>Stationary Branding</h4>\n                                            <p>Web</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </a>\n                            <img alt=\"\" src=\"assets/images/portfolio/4.jpg\">\n                        </div>\n                        <div class=\"project web video\">\n                            <a class=\"open-project\" href=\"project-2.html\">\n                                <div class=\"project-overlay\">\n                                    <div class=\"vcenter\">\n                                        <div class=\"centrize\">\n                                            <h4>Typewriter</h4>\n                                            <p>Graphic / Video</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </a>\n                            <img alt=\"\" src=\"assets/images/portfolio/5.jpg\">\n                        </div>\n                        <div class=\"project apps web\">\n                            <a class=\"open-project\" href=\"project-1.html\">\n                                <div class=\"project-overlay\">\n                                    <div class=\"vcenter\">\n                                        <div class=\"centrize\">\n                                            <h4>Magazine Cover</h4>\n                                            <p>Web / Apps</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </a>\n                            <img alt=\"\" src=\"assets/images/portfolio/6.jpg\">\n                        </div>\n                        <div class=\"project video web\">\n                            <a class=\"open-project\" href=\"project-1.html\">\n                                <div class=\"project-overlay\">\n                                    <div class=\"vcenter\">\n                                        <div class=\"centrize\">\n                                            <h4>An Ipad</h4>\n                                            <p>Video / Web</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </a>\n                            <img alt=\"\" src=\"assets/images/portfolio/7.jpg\">\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"row text-center\">\n              <br />\n                <div class=\"col-md-12\">\n                    <h4>Interested in working together?</h4>\n                    <a class=\"btn lowercase\">{{profile.email}}</a>\n                    <br>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/block-portfolio/block-portfolio.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/_components/block-portfolio/block-portfolio.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/block-portfolio/block-portfolio.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_components/block-portfolio/block-portfolio.component.ts ***!
  \**************************************************************************/
/*! exports provided: BlockPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPortfolioComponent", function() { return BlockPortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/pub-sub.service */ "./src/app/_services/pub-sub.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/database.service */ "./src/app/_services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockPortfolioComponent = /** @class */ (function () {
    function BlockPortfolioComponent(pubSubService, db) {
        this.pubSubService = pubSubService;
        this.db = db;
        this.block = 'portfolio';
        this.portfolioSubscription = [];
        this.contentBlocksClass = 'hidex';
        this.blockClass = '';
        this.profile = {
            name: '',
            about: '',
            address: '',
            birth_date: '',
            email: '',
            interests: '',
            phone: '',
            skype: ''
        };
        this.profile = {
            name: '',
            about: '',
            address: '',
            birth_date: '',
            email: '',
            interests: '',
            phone: '',
            skype: ''
        };
    }
    BlockPortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentBlocksSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe(function (block) { return _this.showBlock(block); });
        this.showBlockAboutSubscription = this.pubSubService.on('showPortfolioContact').subscribe(function () { return _this.openBlock(); });
        this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(function () { return _this.showBlock('none'); });
        this.portfolioSubscription = this.db.portfolio;
        this.profileSubscription = this.db.profile.subscribe(function (data) {
            if (data && Array.isArray(data) && data[0]) {
                _this.profile = data[0];
            }
        });
    };
    BlockPortfolioComponent.prototype.ngOnDestroy = function () {
        this.contentBlocksSubscription.unsubscribe();
        this.showBlockAboutSubscription.unsubscribe();
        this.closeMenuSubscription.unsubscribe();
        this.portfolioSubscription.unsubscribe();
        this.profileSubscription.unsubscribe();
    };
    BlockPortfolioComponent.prototype.showBlock = function (block) {
        this.contentBlocksClass = 'hidex';
        this.blockClass = '';
        if (block == this.block) {
            this.pubSubService.publish('showPortfolioContact');
        }
    };
    BlockPortfolioComponent.prototype.openBlock = function () {
        this.contentBlocksClass = '';
        this.blockClass = 'showx';
    };
    BlockPortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-portfolio',
            template: __webpack_require__(/*! ./block-portfolio.component.html */ "./src/app/_components/block-portfolio/block-portfolio.component.html"),
            styles: [__webpack_require__(/*! ./block-portfolio.component.scss */ "./src/app/_components/block-portfolio/block-portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__["PubSubService"], _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], BlockPortfolioComponent);
    return BlockPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/_components/inline-menu/inline-menu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/inline-menu/inline-menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inline-menu-container {{menuClass}}\">\n    <ul class=\"inline-menu\">\n        <li class=\"about menu-item {{about}}\" (click)=\"openResume()\">Resume</li>\n        <li class=\"portfolio menu-item {{portfolio}}\" (click)=\"openPortfolio()\">Portfolio</li>\n        <li class=\"blog menu-item {{blog}}\" (click)=\"openBlog()\">Blog</li>\n        <li class=\"contact menu-item {{contact}}\" (click)=\"openContact()\">Contact</li>\n        <li id=\"close\" (click)=\"close()\">×</li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/inline-menu/inline-menu.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/_components/inline-menu/inline-menu.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/inline-menu/inline-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/_components/inline-menu/inline-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: InlineMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineMenuComponent", function() { return InlineMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/pub-sub.service */ "./src/app/_services/pub-sub.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InlineMenuComponent = /** @class */ (function () {
    function InlineMenuComponent(pubSubService) {
        this.pubSubService = pubSubService;
        this.menuClass = 'hidex';
        this.about = '';
        this.portfolio = '';
        this.blog = '';
        this.contact = '';
    }
    InlineMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hideAllAndShowOneSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe(function (menu) { return _this.updateMenu(menu); });
        this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(function () { return _this.closeMenu(); });
    };
    InlineMenuComponent.prototype.ngOnDestroy = function () {
        this.hideAllAndShowOneSubscription.unsubscribe();
        this.closeMenuSubscription.unsubscribe();
    };
    InlineMenuComponent.prototype.hideAllAndShowOne = function (what) {
        this.pubSubService.publish('hideAllAndShowOne', what);
    };
    InlineMenuComponent.prototype.openResume = function () {
        this.hideAllAndShowOne('about');
    };
    InlineMenuComponent.prototype.openPortfolio = function () {
        this.hideAllAndShowOne('portfolio');
    };
    InlineMenuComponent.prototype.openBlog = function () {
        this.hideAllAndShowOne('blog');
    };
    InlineMenuComponent.prototype.openContact = function () {
        this.hideAllAndShowOne('contact');
    };
    InlineMenuComponent.prototype.close = function () {
        this.pubSubService.publish('closeMenu');
    };
    InlineMenuComponent.prototype.closeMenu = function () {
        this.menuClass = 'hidex';
    };
    InlineMenuComponent.prototype.updateMenu = function (menu) {
        this.about = '';
        this.portfolio = '';
        this.blog = '';
        this.contact = '';
        this[menu] = 'active';
        this.menuClass = 'showx';
    };
    InlineMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inline-menu',
            template: __webpack_require__(/*! ./inline-menu.component.html */ "./src/app/_components/inline-menu/inline-menu.component.html"),
            styles: [__webpack_require__(/*! ./inline-menu.component.scss */ "./src/app/_components/inline-menu/inline-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__["PubSubService"]])
    ], InlineMenuComponent);
    return InlineMenuComponent;
}());



/***/ }),

/***/ "./src/app/_components/preloader/preloader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_components/preloader/preloader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader\" [@fadeOutAnimation]>\n    <div class=\"spinner\">\n        <strong>\n            Loading...\n            <br />\n            <i class=\"fa-li fa fa-spinner fa-spin\"></i>\n        </strong>\n    </div>\n</div>\n<div class=\"preloader-left slide-left\" [ngClass]=\"leftClass\"></div>\n<div class=\"preloader-right slide-right\" [ngClass]=\"rightClass\"></div>\n"

/***/ }),

/***/ "./src/app/_components/preloader/preloader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/_components/preloader/preloader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preloader {\n  background: #FFF; }\n"

/***/ }),

/***/ "./src/app/_components/preloader/preloader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_components/preloader/preloader.component.ts ***!
  \**************************************************************/
/*! exports provided: PreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function() { return PreloaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_fade_out_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_animations/fade-out.animation */ "./src/app/_animations/fade-out.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloaderComponent = /** @class */ (function () {
    function PreloaderComponent(myElement) {
        this.myElement = myElement;
        this.leftClass = false;
        this.rightClass = false;
        this.loaded = false;
    }
    PreloaderComponent.prototype.ngOnInit = function () {
    };
    PreloaderComponent.prototype.ngAfterViewInit = function () {
        if (!this.loaded) {
            var appRootRef_1 = this.myElement; // Necesarry because after setTimeout, 'this' becomes window
            this.loaded = true;
            setTimeout(function () {
                appRootRef_1.nativeElement.remove();
            }, 1000);
            // this.leftClass = 'slide-left';
            // this.rightClass = 'slide-right';
        }
    };
    PreloaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preloader',
            template: __webpack_require__(/*! ./preloader.component.html */ "./src/app/_components/preloader/preloader.component.html"),
            styles: [__webpack_require__(/*! ./preloader.component.scss */ "./src/app/_components/preloader/preloader.component.scss")],
            animations: [
                _animations_fade_out_animation__WEBPACK_IMPORTED_MODULE_1__["fadeOutAnimation"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PreloaderComponent);
    return PreloaderComponent;
}());



/***/ }),

/***/ "./src/app/_pages/blog/blog.component.html":
/*!*************************************************!*\
  !*** ./src/app/_pages/blog/blog.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/_pages/blog/blog.component.scss":
/*!*************************************************!*\
  !*** ./src/app/_pages/blog/blog.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_pages/blog/blog.component.ts":
/*!***********************************************!*\
  !*** ./src/app/_pages/blog/blog.component.ts ***!
  \***********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/_pages/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/_pages/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/_pages/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/_pages/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-preloader></app-preloader>\n<app-inline-menu></app-inline-menu>\n<section class=\"home\">\n    <div class=\"container\">\n      <app-block-name></app-block-name>\n        <app-block-menu></app-block-menu>\n        <app-block-about></app-block-about>\n        <app-block-portfolio></app-block-portfolio>\n        <app-block-blog></app-block-blog>\n        <app-block-contact></app-block-contact>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/_pages/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/_pages/home/home.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_pages/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/_pages/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/_pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/_pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/_pipes/ellipsis.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/_pipes/ellipsis.pipe.ts ***!
  \*****************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @name: Ellipsis pipe
 * @desc: One of the requirements of the project was, if a description is greater
     100 characters, it should be trimmed. I decided to trim it by 97 characters
     and add extra 3 dots ( so it keeps the original 100 asked ).
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CONSTANTS } from '../../constants';
var EllipsisPipe = /** @class */ (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (value, args) {
        if (value === void 0) { value = ''; }
        if (args === void 0) { args = []; }
        var limit = args.length > 0 ? parseInt(args[0], 10) : 50;
        var trail = args.length > 1 ? args[1] : '[read more...]';
        // -3 just to be 100 characters as defined and not 103
        return value.length > limit ? value.substring(0, limit - 5) + trail : value;
    };
    EllipsisPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ellipsis'
        })
    ], EllipsisPipe);
    return EllipsisPipe;
}());



/***/ }),

/***/ "./src/app/_services/database.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/database.service.ts ***!
  \***********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseService = /** @class */ (function () {
    function DatabaseService(db) {
        this.db = db;
        this.blog = [];
        this.courses = [];
        this.education = [];
        this.know_how = [];
        this.prizes = [];
        this.technical_skills = [];
        this.experience = [];
        this.portfolio = [];
        this.profile = {};
        this.loaded = false;
        if (!this.loaded) {
            this.loaded = true;
            for (var _i = 0, _a = ['profile', 'blog', 'courses', 'education',
                'know_how', 'prizes', 'technical_skills', 'experience', 'portfolio']; _i < _a.length; _i++) {
                var subscription = _a[_i];
                this[subscription] = this.db.collection(subscription).valueChanges();
            }
        }
    }
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/_services/pub-sub.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/pub-sub.service.ts ***!
  \**********************************************/
/*! exports provided: PubSubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubSubService", function() { return PubSubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PubSubService = /** @class */ (function () {
    function PubSubService() {
        this.subjects = [];
    }
    PubSubService.prototype.publish = function (eventName, data) {
        if (data === void 0) { data = false; }
        // ensure a subject for the event name exists
        this.subjects[eventName] = this.subjects[eventName] || new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // publish event
        this.subjects[eventName].next(data);
    };
    PubSubService.prototype.on = function (eventName) {
        // ensure a subject for the event name exists
        this.subjects[eventName] = this.subjects[eventName] || new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // return observable
        return this.subjects[eventName].asObservable();
    };
    PubSubService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PubSubService);
    return PubSubService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_pages/home/home.component */ "./src/app/_pages/home/home.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_pages/blog/blog.component */ "./src/app/_pages/blog/blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'blog/:id', component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
    { path: '**', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/database.service */ "./src/app/_services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(db) {
        this.db = db;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_pages/home/home.component */ "./src/app/_pages/home/home.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_pages/blog/blog.component */ "./src/app/_pages/blog/blog.component.ts");
/* harmony import */ var _components_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/preloader/preloader.component */ "./src/app/_components/preloader/preloader.component.ts");
/* harmony import */ var _components_inline_menu_inline_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/inline-menu/inline-menu.component */ "./src/app/_components/inline-menu/inline-menu.component.ts");
/* harmony import */ var _components_block_menu_block_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_components/block-menu/block-menu.component */ "./src/app/_components/block-menu/block-menu.component.ts");
/* harmony import */ var _components_block_about_block_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_components/block-about/block-about.component */ "./src/app/_components/block-about/block-about.component.ts");
/* harmony import */ var _components_block_portfolio_block_portfolio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_components/block-portfolio/block-portfolio.component */ "./src/app/_components/block-portfolio/block-portfolio.component.ts");
/* harmony import */ var _components_block_blog_block_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_components/block-blog/block-blog.component */ "./src/app/_components/block-blog/block-blog.component.ts");
/* harmony import */ var _components_block_contact_block_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_components/block-contact/block-contact.component */ "./src/app/_components/block-contact/block-contact.component.ts");
/* harmony import */ var _components_block_name_block_name_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_components/block-name/block-name.component */ "./src/app/_components/block-name/block-name.component.ts");
/* harmony import */ var _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_services/pub-sub.service */ "./src/app/_services/pub-sub.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _pipes_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_pipes/ellipsis.pipe */ "./src/app/_pipes/ellipsis.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ORIGINAL




// PACKAGES





// MODULES

// COMPONENTS











// SERVICES



// PIPES
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"],
                _components_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_13__["PreloaderComponent"],
                _components_inline_menu_inline_menu_component__WEBPACK_IMPORTED_MODULE_14__["InlineMenuComponent"],
                _components_block_menu_block_menu_component__WEBPACK_IMPORTED_MODULE_15__["BlockMenuComponent"],
                _components_block_about_block_about_component__WEBPACK_IMPORTED_MODULE_16__["BlockAboutComponent"],
                _components_block_portfolio_block_portfolio_component__WEBPACK_IMPORTED_MODULE_17__["BlockPortfolioComponent"],
                _components_block_blog_block_blog_component__WEBPACK_IMPORTED_MODULE_18__["BlockBlogComponent"],
                _components_block_contact_block_contact_component__WEBPACK_IMPORTED_MODULE_19__["BlockContactComponent"],
                _components_block_name_block_name_component__WEBPACK_IMPORTED_MODULE_20__["BlockNameComponent"],
                _pipes_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_23__["EllipsisPipe"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"] // imports firebase/storage only needed for storage features
            ],
            providers: [_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_21__["PubSubService"], _services_database_service__WEBPACK_IMPORTED_MODULE_22__["DatabaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CONSTANTS = {
    SOCIAL: {
        FACEBOOK: 'https://www.facebook.com/pihhhhh',
        LINKEDIN: 'https://www.linkedin.com/in/filipe-mota-de-s%C3%A1-257639134/'
    },
    FIREBASE: {
        apiKey: 'AIzaSyCGSj1ZOt1YuA0EJ_TtqSn9J-a6xklUQoA',
        authDomain: 'portfolio-8bb32.firebaseapp.com',
        databaseURL: 'https://portfolio-8bb32.firebaseio.com',
        projectId: 'portfolio-8bb32',
        storageBucket: '',
        messagingSenderId: '757005383282'
    },
    ELLIPSIS: {
        LIMIT: 25
    }
};
/* harmony default export */ __webpack_exports__["default"] = (CONSTANTS);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    firebase: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].FIREBASE
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Utilizador\Desktop\Code\github\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map