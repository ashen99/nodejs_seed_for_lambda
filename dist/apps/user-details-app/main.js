/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/user-details-app/src/user-details-app.controller.ts":
/*!******************************************************************!*\
  !*** ./apps/user-details-app/src/user-details-app.controller.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDetailsAppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_details_app_service_1 = __webpack_require__(/*! ./user-details-app.service */ "./apps/user-details-app/src/user-details-app.service.ts");
let UserDetailsAppController = class UserDetailsAppController {
    constructor(userDetailsAppService) {
        this.userDetailsAppService = userDetailsAppService;
    }
    getHello() {
        return this.userDetailsAppService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserDetailsAppController.prototype, "getHello", null);
UserDetailsAppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_details_app_service_1.UserDetailsAppService !== "undefined" && user_details_app_service_1.UserDetailsAppService) === "function" ? _a : Object])
], UserDetailsAppController);
exports.UserDetailsAppController = UserDetailsAppController;


/***/ }),

/***/ "./apps/user-details-app/src/user-details-app.module.ts":
/*!**************************************************************!*\
  !*** ./apps/user-details-app/src/user-details-app.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDetailsAppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_details_app_controller_1 = __webpack_require__(/*! ./user-details-app.controller */ "./apps/user-details-app/src/user-details-app.controller.ts");
const user_details_app_service_1 = __webpack_require__(/*! ./user-details-app.service */ "./apps/user-details-app/src/user-details-app.service.ts");
const user_details_module_1 = __webpack_require__(/*! ./user-details/user-details.module */ "./apps/user-details-app/src/user-details/user-details.module.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const path_1 = __webpack_require__(/*! path */ "path");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_detail_entity_1 = __webpack_require__(/*! ./user-details/entities/user-detail.entity */ "./apps/user-details-app/src/user-details/entities/user-detail.entity.ts");
let UserDetailsAppModule = class UserDetailsAppModule {
};
UserDetailsAppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_details_module_1.UserDetailsModule, graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/user-detail-schema.gql'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 7000,
                username: 'postgres',
                password: '1234',
                database: 'user-details',
                entities: [user_detail_entity_1.UserDetail],
                synchronize: true,
            })],
        controllers: [user_details_app_controller_1.UserDetailsAppController],
        providers: [user_details_app_service_1.UserDetailsAppService],
    })
], UserDetailsAppModule);
exports.UserDetailsAppModule = UserDetailsAppModule;


/***/ }),

/***/ "./apps/user-details-app/src/user-details-app.service.ts":
/*!***************************************************************!*\
  !*** ./apps/user-details-app/src/user-details-app.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDetailsAppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UserDetailsAppService = class UserDetailsAppService {
    getHello() {
        return 'Hello World!';
    }
};
UserDetailsAppService = __decorate([
    (0, common_1.Injectable)()
], UserDetailsAppService);
exports.UserDetailsAppService = UserDetailsAppService;


/***/ }),

/***/ "./apps/user-details-app/src/user-details/dto/create-user-detail.input.ts":
/*!********************************************************************************!*\
  !*** ./apps/user-details-app/src/user-details/dto/create-user-detail.input.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDetailInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateUserDetailInput = class CreateUserDetailInput {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], CreateUserDetailInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CreateUserDetailInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], CreateUserDetailInput.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], CreateUserDetailInput.prototype, "last_name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CreateUserDetailInput.prototype, "user_name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CreateUserDetailInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [String]),
    __metadata("design:type", Array)
], CreateUserDetailInput.prototype, "sbu", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CreateUserDetailInput.prototype, "customer", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CreateUserDetailInput.prototype, "status", void 0);
CreateUserDetailInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUserDetailInput);
exports.CreateUserDetailInput = CreateUserDetailInput;


/***/ }),

/***/ "./apps/user-details-app/src/user-details/dto/update-user-detail.input.ts":
/*!********************************************************************************!*\
  !*** ./apps/user-details-app/src/user-details/dto/update-user-detail.input.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDetailInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdateUserDetailInput = class UpdateUserDetailInput {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateUserDetailInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateUserDetailInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateUserDetailInput.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateUserDetailInput.prototype, "last_name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateUserDetailInput.prototype, "user_name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateUserDetailInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], UpdateUserDetailInput.prototype, "sbu", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateUserDetailInput.prototype, "customer", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateUserDetailInput.prototype, "status", void 0);
UpdateUserDetailInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserDetailInput);
exports.UpdateUserDetailInput = UpdateUserDetailInput;


/***/ }),

/***/ "./apps/user-details-app/src/user-details/entities/user-detail.entity.ts":
/*!*******************************************************************************!*\
  !*** ./apps/user-details-app/src/user-details/entities/user-detail.entity.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDetail = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let UserDetail = class UserDetail {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    (0, typeorm_1.Column)({ nullable: false }),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], UserDetail.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserDetail.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserDetail.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserDetail.prototype, "last_name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserDetail.prototype, "user_name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserDetail.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [String]),
    (0, typeorm_1.Column)('text', { nullable: false, array: true }),
    __metadata("design:type", Array)
], UserDetail.prototype, "sbu", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserDetail.prototype, "customer", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserDetail.prototype, "status", void 0);
UserDetail = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], UserDetail);
exports.UserDetail = UserDetail;


/***/ }),

/***/ "./apps/user-details-app/src/user-details/user-details.module.ts":
/*!***********************************************************************!*\
  !*** ./apps/user-details-app/src/user-details/user-details.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDetailsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_details_service_1 = __webpack_require__(/*! ./user-details.service */ "./apps/user-details-app/src/user-details/user-details.service.ts");
const user_details_resolver_1 = __webpack_require__(/*! ./user-details.resolver */ "./apps/user-details-app/src/user-details/user-details.resolver.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_detail_entity_1 = __webpack_require__(/*! ./entities/user-detail.entity */ "./apps/user-details-app/src/user-details/entities/user-detail.entity.ts");
let UserDetailsModule = class UserDetailsModule {
};
UserDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_detail_entity_1.UserDetail])],
        providers: [user_details_resolver_1.UserDetailsResolver, user_details_service_1.UserDetailsService]
    })
], UserDetailsModule);
exports.UserDetailsModule = UserDetailsModule;


/***/ }),

/***/ "./apps/user-details-app/src/user-details/user-details.resolver.ts":
/*!*************************************************************************!*\
  !*** ./apps/user-details-app/src/user-details/user-details.resolver.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDetailsResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const user_details_service_1 = __webpack_require__(/*! ./user-details.service */ "./apps/user-details-app/src/user-details/user-details.service.ts");
const user_detail_entity_1 = __webpack_require__(/*! ./entities/user-detail.entity */ "./apps/user-details-app/src/user-details/entities/user-detail.entity.ts");
const create_user_detail_input_1 = __webpack_require__(/*! ./dto/create-user-detail.input */ "./apps/user-details-app/src/user-details/dto/create-user-detail.input.ts");
const update_user_detail_input_1 = __webpack_require__(/*! ./dto/update-user-detail.input */ "./apps/user-details-app/src/user-details/dto/update-user-detail.input.ts");
let UserDetailsResolver = class UserDetailsResolver {
    constructor(userDetailsService) {
        this.userDetailsService = userDetailsService;
    }
    createUserDetail(createUserDetailInput) {
        return this.userDetailsService.create(createUserDetailInput);
    }
    findAll() {
        return this.userDetailsService.findAll();
    }
    findOne(id) {
        return this.userDetailsService.findOne(id);
    }
    updateUserDetail(updateUserDetailInput) {
        return this.userDetailsService.update(updateUserDetailInput.id, updateUserDetailInput);
    }
    removeUserDetail(id) {
        return this.userDetailsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_detail_entity_1.UserDetail, { name: 'createUserDetail' }),
    __param(0, (0, graphql_1.Args)('createUserDetailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_user_detail_input_1.CreateUserDetailInput !== "undefined" && create_user_detail_input_1.CreateUserDetailInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], UserDetailsResolver.prototype, "createUserDetail", null);
__decorate([
    (0, graphql_1.Query)(() => [user_detail_entity_1.UserDetail], { name: 'findAllUserDetails' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserDetailsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => user_detail_entity_1.UserDetail, { name: 'findOneUserDetail' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserDetailsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_detail_entity_1.UserDetail, { name: 'updateUserDetail' }),
    __param(0, (0, graphql_1.Args)('updateUserDetailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_user_detail_input_1.UpdateUserDetailInput !== "undefined" && update_user_detail_input_1.UpdateUserDetailInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UserDetailsResolver.prototype, "updateUserDetail", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, { name: 'deleteUserDetail' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserDetailsResolver.prototype, "removeUserDetail", null);
UserDetailsResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_detail_entity_1.UserDetail),
    __metadata("design:paramtypes", [typeof (_c = typeof user_details_service_1.UserDetailsService !== "undefined" && user_details_service_1.UserDetailsService) === "function" ? _c : Object])
], UserDetailsResolver);
exports.UserDetailsResolver = UserDetailsResolver;


/***/ }),

/***/ "./apps/user-details-app/src/user-details/user-details.service.ts":
/*!************************************************************************!*\
  !*** ./apps/user-details-app/src/user-details/user-details.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDetailsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_detail_entity_1 = __webpack_require__(/*! ./entities/user-detail.entity */ "./apps/user-details-app/src/user-details/entities/user-detail.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let UserDetailsService = class UserDetailsService {
    constructor(userDetailRepository) {
        this.userDetailRepository = userDetailRepository;
    }
    async create(userDetail) {
        const uDetail = this.userDetailRepository.create(userDetail);
        return this.userDetailRepository.save(uDetail);
    }
    async findAll() {
        return this.userDetailRepository.find();
    }
    async findOne(id) {
        return this.userDetailRepository.findOne({ id: id });
    }
    async update(id, updateUserDetailInput) {
        const userDetail = await this.userDetailRepository.findOne({ id: id });
        if (!userDetail) {
            throw new Error(`The User Details with id: ${id} does not exist!`);
        }
        Object.assign(userDetail, updateUserDetailInput);
        return this.userDetailRepository.save(userDetail);
    }
    async remove(id) {
        const res = await this.userDetailRepository.delete({ id: id });
        return res.affected;
    }
};
UserDetailsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_detail_entity_1.UserDetail)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserDetailsService);
exports.UserDetailsService = UserDetailsService;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************************!*\
  !*** ./apps/user-details-app/src/main.ts ***!
  \*******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const user_details_app_module_1 = __webpack_require__(/*! ./user-details-app.module */ "./apps/user-details-app/src/user-details-app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(user_details_app_module_1.UserDetailsAppModule);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;