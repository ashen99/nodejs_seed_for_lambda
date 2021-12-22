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
exports.UserPermissionAppModule = void 0;
const common_1 = __webpack_require__(3);
const user_permission_app_controller_1 = __webpack_require__(4);
const user_permission_app_service_1 = __webpack_require__(5);
const permission_module_1 = __webpack_require__(6);
const graphql_1 = __webpack_require__(10);
const path_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(8);
const permission_entity_1 = __webpack_require__(9);
let UserPermissionAppModule = class UserPermissionAppModule {
};
UserPermissionAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            permission_module_1.PermissionModule,
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/permission-schema.gql'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                username: 'postgres',
                password: '1234',
                database: 'permission',
                entities: [permission_entity_1.Permission],
                synchronize: true,
            }),
        ],
        controllers: [user_permission_app_controller_1.UserPermissionAppController],
        providers: [user_permission_app_service_1.UserPermissionAppService],
    })
], UserPermissionAppModule);
exports.UserPermissionAppModule = UserPermissionAppModule;


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
exports.UserPermissionAppController = void 0;
const common_1 = __webpack_require__(3);
const user_permission_app_service_1 = __webpack_require__(5);
let UserPermissionAppController = class UserPermissionAppController {
    constructor(userPermissionAppService) {
        this.userPermissionAppService = userPermissionAppService;
    }
    getHello() {
        return this.userPermissionAppService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserPermissionAppController.prototype, "getHello", null);
UserPermissionAppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_permission_app_service_1.UserPermissionAppService !== "undefined" && user_permission_app_service_1.UserPermissionAppService) === "function" ? _a : Object])
], UserPermissionAppController);
exports.UserPermissionAppController = UserPermissionAppController;


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
exports.UserPermissionAppService = void 0;
const common_1 = __webpack_require__(3);
let UserPermissionAppService = class UserPermissionAppService {
    getHello() {
        return 'Hello World!';
    }
};
UserPermissionAppService = __decorate([
    (0, common_1.Injectable)()
], UserPermissionAppService);
exports.UserPermissionAppService = UserPermissionAppService;


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
exports.PermissionModule = void 0;
const common_1 = __webpack_require__(3);
const permission_service_1 = __webpack_require__(7);
const permission_resolver_1 = __webpack_require__(12);
const typeorm_1 = __webpack_require__(8);
const permission_entity_1 = __webpack_require__(9);
let PermissionModule = class PermissionModule {
};
PermissionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([permission_entity_1.Permission])],
        providers: [permission_resolver_1.PermissionResolver, permission_service_1.PermissionService],
    })
], PermissionModule);
exports.PermissionModule = PermissionModule;


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
exports.PermissionService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(8);
const permission_entity_1 = __webpack_require__(9);
const typeorm_2 = __webpack_require__(11);
let PermissionService = class PermissionService {
    constructor(permissionRepository) {
        this.permissionRepository = permissionRepository;
    }
    async create(createPermissionInput) {
        const permission = this.permissionRepository.create(createPermissionInput);
        return this.permissionRepository.save(permission);
    }
    async findAll() {
        return this.permissionRepository.find();
    }
    async findOne(id) {
        try {
            return await this.permissionRepository.findOneOrFail(id);
        }
        catch (e) {
            throw new common_1.NotFoundException('Permission not found!');
        }
    }
    async update(id, updatePermissionInput) {
        const existPermission = await this.findOne(id);
        Object.assign(existPermission, updatePermissionInput);
        return this.permissionRepository.save(existPermission);
    }
    async remove(id) {
        const existPermission = await this.findOne(id);
        await this.permissionRepository.remove(existPermission);
        return existPermission;
    }
};
PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(permission_entity_1.Permission)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PermissionService);
exports.PermissionService = PermissionService;


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 9 */
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
exports.Permission = void 0;
const graphql_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(11);
let Permission = class Permission {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Permission.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Permission.prototype, "permission", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Permission.prototype, "status", void 0);
Permission = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Permission);
exports.Permission = Permission;


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("typeorm");

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
exports.PermissionResolver = void 0;
const graphql_1 = __webpack_require__(10);
const permission_service_1 = __webpack_require__(7);
const permission_entity_1 = __webpack_require__(9);
const create_permission_input_1 = __webpack_require__(13);
const update_permission_input_1 = __webpack_require__(14);
let PermissionResolver = class PermissionResolver {
    constructor(permissionService) {
        this.permissionService = permissionService;
    }
    createPermission(createPermissionInput) {
        return this.permissionService.create(createPermissionInput);
    }
    findAll() {
        return this.permissionService.findAll();
    }
    findOne(id) {
        return this.permissionService.findOne(id);
    }
    updatePermission(updatePermissionInput) {
        return this.permissionService.update(updatePermissionInput.id, updatePermissionInput);
    }
    removePermission(id) {
        return this.permissionService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => permission_entity_1.Permission, { name: 'createPermission' }),
    __param(0, (0, graphql_1.Args)('createPermissionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_permission_input_1.CreatePermissionInput !== "undefined" && create_permission_input_1.CreatePermissionInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], PermissionResolver.prototype, "createPermission", null);
__decorate([
    (0, graphql_1.Query)(() => [permission_entity_1.Permission], { name: 'findAllPermission' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PermissionResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => permission_entity_1.Permission, { name: 'findOnePermission' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PermissionResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => permission_entity_1.Permission, { name: 'updatePermission' }),
    __param(0, (0, graphql_1.Args)('updatePermissionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_permission_input_1.UpdatePermissionInput !== "undefined" && update_permission_input_1.UpdatePermissionInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PermissionResolver.prototype, "updatePermission", null);
__decorate([
    (0, graphql_1.Mutation)(() => permission_entity_1.Permission, { name: 'removePermission' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PermissionResolver.prototype, "removePermission", null);
PermissionResolver = __decorate([
    (0, graphql_1.Resolver)(() => permission_entity_1.Permission),
    __metadata("design:paramtypes", [typeof (_c = typeof permission_service_1.PermissionService !== "undefined" && permission_service_1.PermissionService) === "function" ? _c : Object])
], PermissionResolver);
exports.PermissionResolver = PermissionResolver;


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
exports.CreatePermissionInput = void 0;
const graphql_1 = __webpack_require__(10);
let CreatePermissionInput = class CreatePermissionInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePermissionInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePermissionInput.prototype, "permission", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], CreatePermissionInput.prototype, "status", void 0);
CreatePermissionInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePermissionInput);
exports.CreatePermissionInput = CreatePermissionInput;


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
exports.UpdatePermissionInput = void 0;
const create_permission_input_1 = __webpack_require__(13);
const graphql_1 = __webpack_require__(10);
let UpdatePermissionInput = class UpdatePermissionInput extends (0, graphql_1.PartialType)(create_permission_input_1.CreatePermissionInput) {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdatePermissionInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePermissionInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePermissionInput.prototype, "permission", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], UpdatePermissionInput.prototype, "status", void 0);
UpdatePermissionInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePermissionInput);
exports.UpdatePermissionInput = UpdatePermissionInput;


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
const user_permission_app_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(user_permission_app_module_1.UserPermissionAppModule);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;