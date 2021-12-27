/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRolesAppModule = void 0;
const common_1 = __webpack_require__(3);
const user_roles_app_controller_1 = __webpack_require__(4);
const user_roles_app_service_1 = __webpack_require__(5);
const user_role_module_1 = __webpack_require__(6);
const graphql_1 = __webpack_require__(11);
const path_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(8);
const user_role_entity_1 = __webpack_require__(10);
let UserRolesAppModule = class UserRolesAppModule {
};
UserRolesAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_role_module_1.UserRoleModule,
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '1234',
                database: 'userroles',
                entities: [user_role_entity_1.UserRole],
                synchronize: true,
            }),
        ],
        controllers: [user_roles_app_controller_1.UserRolesAppController],
        providers: [user_roles_app_service_1.UserRolesAppService],
    })
], UserRolesAppModule);
exports.UserRolesAppModule = UserRolesAppModule;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
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
exports.UserRolesAppController = void 0;
const common_1 = __webpack_require__(3);
const user_roles_app_service_1 = __webpack_require__(5);
let UserRolesAppController = class UserRolesAppController {
    constructor(userRolesAppService) {
        this.userRolesAppService = userRolesAppService;
    }
    getHello() {
        return this.userRolesAppService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserRolesAppController.prototype, "getHello", null);
UserRolesAppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_roles_app_service_1.UserRolesAppService !== "undefined" && user_roles_app_service_1.UserRolesAppService) === "function" ? _a : Object])
], UserRolesAppController);
exports.UserRolesAppController = UserRolesAppController;


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRolesAppService = void 0;
const common_1 = __webpack_require__(3);
let UserRolesAppService = class UserRolesAppService {
    getHello() {
        return 'Hello World!';
    }
};
UserRolesAppService = __decorate([
    (0, common_1.Injectable)()
], UserRolesAppService);
exports.UserRolesAppService = UserRolesAppService;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRoleModule = void 0;
const common_1 = __webpack_require__(3);
const user_role_service_1 = __webpack_require__(7);
const user_role_resolver_1 = __webpack_require__(12);
const typeorm_1 = __webpack_require__(8);
const user_role_entity_1 = __webpack_require__(10);
let UserRoleModule = class UserRoleModule {
};
UserRoleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_role_entity_1.UserRole])],
        providers: [user_role_service_1.UserRoleService, user_role_resolver_1.UserRoleResolver],
    })
], UserRoleModule);
exports.UserRoleModule = UserRoleModule;


/***/ }),
/* 7 */
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
exports.UserRoleService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(8);
const typeorm_2 = __webpack_require__(9);
const user_role_entity_1 = __webpack_require__(10);
let UserRoleService = class UserRoleService {
    constructor(userRoleRepository) {
        this.userRoleRepository = userRoleRepository;
    }
    async getAll() {
        return this.userRoleRepository.find();
    }
    async create(userole) {
        const userRole = this.userRoleRepository.create(userole);
        return this.userRoleRepository.save(userRole);
    }
    async update(id, userrole) {
        const { roleName } = userrole;
        const user = await this.findOne(id);
        if (roleName) {
            user.roleName = roleName;
        }
        return this.userRoleRepository.save(user);
    }
    findOne(id) {
        return this.userRoleRepository.findOne(id);
    }
    async remove(id) {
        let usr = this.findOne(id);
        if (usr) {
            let ret = await this.userRoleRepository.delete(id);
            if (ret.affected === 1) {
                return usr;
            }
        }
        throw new common_1.NotFoundException(`Record cannot find by id ${id}`);
    }
};
UserRoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_role_entity_1.UserRole)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserRoleService);
exports.UserRoleService = UserRoleService;


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 10 */
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
exports.UserRole = void 0;
const graphql_1 = __webpack_require__(11);
const typeorm_1 = __webpack_require__(9);
let UserRole = class UserRole {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserRole.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserRole.prototype, "roleName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    (0, typeorm_1.Column)('uuid', { array: true }),
    __metadata("design:type", Array)
], UserRole.prototype, "permission", void 0);
UserRole = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], UserRole);
exports.UserRole = UserRole;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 12 */
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
exports.UserRoleResolver = void 0;
const graphql_1 = __webpack_require__(11);
const create_user_role_input_1 = __webpack_require__(13);
const update_user_role_input_1 = __webpack_require__(14);
const user_role_entity_1 = __webpack_require__(10);
const user_role_service_1 = __webpack_require__(7);
let UserRoleResolver = class UserRoleResolver {
    constructor(userRoleService) {
        this.userRoleService = userRoleService;
    }
    getAll() {
        return this.userRoleService.getAll();
    }
    create(userrole) {
        return this.userRoleService.create(userrole);
    }
    updateUserRole(UserRoleUpdateDto) {
        return this.userRoleService.update(UserRoleUpdateDto.id, UserRoleUpdateDto);
    }
    removeUserRole(id) {
        return this.userRoleService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [user_role_entity_1.UserRole], { name: 'getAllUserRoles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserRoleResolver.prototype, "getAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_role_entity_1.UserRole, { name: 'createUserRole' }),
    __param(0, (0, graphql_1.Args)('userroleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_user_role_input_1.UserRoleCreateDto !== "undefined" && create_user_role_input_1.UserRoleCreateDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], UserRoleResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_role_entity_1.UserRole, { name: 'updateUserRole' }),
    __param(0, (0, graphql_1.Args)('updateUserRole')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_user_role_input_1.UserRoleUpdateDto !== "undefined" && update_user_role_input_1.UserRoleUpdateDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UserRoleResolver.prototype, "updateUserRole", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_role_entity_1.UserRole, { name: 'deleteUserRole' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserRoleResolver.prototype, "removeUserRole", null);
UserRoleResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_role_entity_1.UserRole),
    __metadata("design:paramtypes", [typeof (_c = typeof user_role_service_1.UserRoleService !== "undefined" && user_role_service_1.UserRoleService) === "function" ? _c : Object])
], UserRoleResolver);
exports.UserRoleResolver = UserRoleResolver;


/***/ }),
/* 13 */
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
exports.UserRoleCreateDto = void 0;
const graphql_1 = __webpack_require__(11);
let UserRoleCreateDto = class UserRoleCreateDto {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserRoleCreateDto.prototype, "roleName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], UserRoleCreateDto.prototype, "permission", void 0);
UserRoleCreateDto = __decorate([
    (0, graphql_1.InputType)()
], UserRoleCreateDto);
exports.UserRoleCreateDto = UserRoleCreateDto;


/***/ }),
/* 14 */
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
exports.UserRoleUpdateDto = void 0;
const graphql_1 = __webpack_require__(11);
let UserRoleUpdateDto = class UserRoleUpdateDto {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserRoleUpdateDto.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserRoleUpdateDto.prototype, "roleName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], UserRoleUpdateDto.prototype, "permission", void 0);
UserRoleUpdateDto = __decorate([
    (0, graphql_1.InputType)()
], UserRoleUpdateDto);
exports.UserRoleUpdateDto = UserRoleUpdateDto;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("path");

/***/ })
/******/ 	]);
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

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const user_roles_app_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(user_roles_app_module_1.UserRolesAppModule);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;