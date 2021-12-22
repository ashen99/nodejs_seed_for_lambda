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
exports.SbuAppModule = void 0;
const common_1 = __webpack_require__(3);
const sbu_app_controller_1 = __webpack_require__(4);
const sbu_app_service_1 = __webpack_require__(5);
const sbu_module_1 = __webpack_require__(6);
const graphql_1 = __webpack_require__(10);
const path_1 = __webpack_require__(15);
const sbu_entity_1 = __webpack_require__(9);
const typeorm_1 = __webpack_require__(8);
let SbuAppModule = class SbuAppModule {
};
SbuAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sbu_module_1.SbuModule,
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/sbu-schema.gql'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                username: 'postgres',
                password: '1234',
                database: 'sbu',
                entities: [sbu_entity_1.Sbu],
                synchronize: true,
            }),
        ],
        controllers: [sbu_app_controller_1.SbuAppController],
        providers: [sbu_app_service_1.SbuAppService],
    })
], SbuAppModule);
exports.SbuAppModule = SbuAppModule;


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
exports.SbuAppController = void 0;
const common_1 = __webpack_require__(3);
const sbu_app_service_1 = __webpack_require__(5);
let SbuAppController = class SbuAppController {
    constructor(sbuAppService) {
        this.sbuAppService = sbuAppService;
    }
    getHello() {
        return this.sbuAppService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SbuAppController.prototype, "getHello", null);
SbuAppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof sbu_app_service_1.SbuAppService !== "undefined" && sbu_app_service_1.SbuAppService) === "function" ? _a : Object])
], SbuAppController);
exports.SbuAppController = SbuAppController;


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
exports.SbuAppService = void 0;
const common_1 = __webpack_require__(3);
let SbuAppService = class SbuAppService {
    getHello() {
        return 'Hello World!';
    }
};
SbuAppService = __decorate([
    (0, common_1.Injectable)()
], SbuAppService);
exports.SbuAppService = SbuAppService;


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
exports.SbuModule = void 0;
const common_1 = __webpack_require__(3);
const sbu_service_1 = __webpack_require__(7);
const sbu_resolver_1 = __webpack_require__(12);
const typeorm_1 = __webpack_require__(8);
const sbu_entity_1 = __webpack_require__(9);
let SbuModule = class SbuModule {
};
SbuModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sbu_entity_1.Sbu])],
        providers: [sbu_resolver_1.SbuResolver, sbu_service_1.SbuService],
    })
], SbuModule);
exports.SbuModule = SbuModule;


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
exports.SbuService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(8);
const sbu_entity_1 = __webpack_require__(9);
const typeorm_2 = __webpack_require__(11);
let SbuService = class SbuService {
    constructor(sbuRepository) {
        this.sbuRepository = sbuRepository;
    }
    async create(createSbuInput) {
        const sbu = this.sbuRepository.create(createSbuInput);
        return this.sbuRepository.save(sbu);
    }
    async findAll() {
        return this.sbuRepository.find();
    }
    async findOne(id) {
        try {
            return await this.sbuRepository.findOneOrFail(id);
        }
        catch (e) {
            throw new common_1.NotFoundException('Sbu not found!');
        }
    }
    async update(id, updateSbuInput) {
        const existSbu = await this.findOne(id);
        Object.assign(existSbu, updateSbuInput);
        return this.sbuRepository.save(existSbu);
    }
    async remove(id) {
        const existSbu = await this.findOne(id);
        await this.sbuRepository.remove(existSbu);
        return existSbu;
    }
};
SbuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sbu_entity_1.Sbu)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SbuService);
exports.SbuService = SbuService;


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
exports.Sbu = void 0;
const graphql_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(11);
let Sbu = class Sbu {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Sbu.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sbu.prototype, "name", void 0);
Sbu = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Sbu);
exports.Sbu = Sbu;


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
exports.SbuResolver = void 0;
const graphql_1 = __webpack_require__(10);
const sbu_service_1 = __webpack_require__(7);
const sbu_entity_1 = __webpack_require__(9);
const create_sbu_input_1 = __webpack_require__(13);
const update_sbu_input_1 = __webpack_require__(14);
let SbuResolver = class SbuResolver {
    constructor(sbuService) {
        this.sbuService = sbuService;
    }
    createSbu(createSbuInput) {
        return this.sbuService.create(createSbuInput);
    }
    findAll() {
        return this.sbuService.findAll();
    }
    findOne(id) {
        return this.sbuService.findOne(id);
    }
    updateSbu(updateSbuInput) {
        return this.sbuService.update(updateSbuInput.id, updateSbuInput);
    }
    removeSbu(id) {
        return this.sbuService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => sbu_entity_1.Sbu, { name: 'createSbu' }),
    __param(0, (0, graphql_1.Args)('createSbuInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_sbu_input_1.CreateSbuInput !== "undefined" && create_sbu_input_1.CreateSbuInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], SbuResolver.prototype, "createSbu", null);
__decorate([
    (0, graphql_1.Query)(() => [sbu_entity_1.Sbu], { name: 'findAllSbu' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SbuResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => sbu_entity_1.Sbu, { name: 'findOneSbu' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SbuResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => sbu_entity_1.Sbu, { name: 'updateSbu' }),
    __param(0, (0, graphql_1.Args)('updateSbuInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_sbu_input_1.UpdateSbuInput !== "undefined" && update_sbu_input_1.UpdateSbuInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SbuResolver.prototype, "updateSbu", null);
__decorate([
    (0, graphql_1.Mutation)(() => sbu_entity_1.Sbu, { name: 'removeSbu' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SbuResolver.prototype, "removeSbu", null);
SbuResolver = __decorate([
    (0, graphql_1.Resolver)(() => sbu_entity_1.Sbu),
    __metadata("design:paramtypes", [typeof (_c = typeof sbu_service_1.SbuService !== "undefined" && sbu_service_1.SbuService) === "function" ? _c : Object])
], SbuResolver);
exports.SbuResolver = SbuResolver;


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
exports.CreateSbuInput = void 0;
const graphql_1 = __webpack_require__(10);
let CreateSbuInput = class CreateSbuInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateSbuInput.prototype, "name", void 0);
CreateSbuInput = __decorate([
    (0, graphql_1.InputType)()
], CreateSbuInput);
exports.CreateSbuInput = CreateSbuInput;


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
exports.UpdateSbuInput = void 0;
const create_sbu_input_1 = __webpack_require__(13);
const graphql_1 = __webpack_require__(10);
let UpdateSbuInput = class UpdateSbuInput extends (0, graphql_1.PartialType)(create_sbu_input_1.CreateSbuInput) {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateSbuInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateSbuInput.prototype, "name", void 0);
UpdateSbuInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateSbuInput);
exports.UpdateSbuInput = UpdateSbuInput;


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
const sbu_app_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(sbu_app_module_1.SbuAppModule);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;