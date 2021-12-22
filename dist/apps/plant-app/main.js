/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/plant-app/src/plant-app.controller.ts":
/*!****************************************************!*\
  !*** ./apps/plant-app/src/plant-app.controller.ts ***!
  \****************************************************/
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
exports.PlantAppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const plant_app_service_1 = __webpack_require__(/*! ./plant-app.service */ "./apps/plant-app/src/plant-app.service.ts");
let PlantAppController = class PlantAppController {
    constructor(plantAppService) {
        this.plantAppService = plantAppService;
    }
    getHello() {
        return this.plantAppService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PlantAppController.prototype, "getHello", null);
PlantAppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof plant_app_service_1.PlantAppService !== "undefined" && plant_app_service_1.PlantAppService) === "function" ? _a : Object])
], PlantAppController);
exports.PlantAppController = PlantAppController;


/***/ }),

/***/ "./apps/plant-app/src/plant-app.module.ts":
/*!************************************************!*\
  !*** ./apps/plant-app/src/plant-app.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlantAppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const plant_app_controller_1 = __webpack_require__(/*! ./plant-app.controller */ "./apps/plant-app/src/plant-app.controller.ts");
const plant_app_service_1 = __webpack_require__(/*! ./plant-app.service */ "./apps/plant-app/src/plant-app.service.ts");
const plant_module_1 = __webpack_require__(/*! ./plant/plant.module */ "./apps/plant-app/src/plant/plant.module.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const path_1 = __webpack_require__(/*! path */ "path");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const plant_entity_1 = __webpack_require__(/*! ./plant/entities/plant.entity */ "./apps/plant-app/src/plant/entities/plant.entity.ts");
let PlantAppModule = class PlantAppModule {
};
PlantAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            plant_module_1.PlantModule,
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/plant-schema.gql'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 7000,
                username: 'postgres',
                password: '1234',
                database: 'plant',
                entities: [plant_entity_1.Plant],
                synchronize: true,
            }),
        ],
        controllers: [plant_app_controller_1.PlantAppController],
        providers: [plant_app_service_1.PlantAppService],
    })
], PlantAppModule);
exports.PlantAppModule = PlantAppModule;


/***/ }),

/***/ "./apps/plant-app/src/plant-app.service.ts":
/*!*************************************************!*\
  !*** ./apps/plant-app/src/plant-app.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlantAppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PlantAppService = class PlantAppService {
    getHello() {
        return 'Hello World!';
    }
};
PlantAppService = __decorate([
    (0, common_1.Injectable)()
], PlantAppService);
exports.PlantAppService = PlantAppService;


/***/ }),

/***/ "./apps/plant-app/src/plant/dto/create-plant.input.ts":
/*!************************************************************!*\
  !*** ./apps/plant-app/src/plant/dto/create-plant.input.ts ***!
  \************************************************************/
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
exports.CreatePlantInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreatePlantInput = class CreatePlantInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePlantInput.prototype, "address", void 0);
CreatePlantInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePlantInput);
exports.CreatePlantInput = CreatePlantInput;


/***/ }),

/***/ "./apps/plant-app/src/plant/dto/update-plant.input.ts":
/*!************************************************************!*\
  !*** ./apps/plant-app/src/plant/dto/update-plant.input.ts ***!
  \************************************************************/
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
exports.UpdatePlantInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdatePlantInput = class UpdatePlantInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePlantInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePlantInput.prototype, "address", void 0);
UpdatePlantInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePlantInput);
exports.UpdatePlantInput = UpdatePlantInput;


/***/ }),

/***/ "./apps/plant-app/src/plant/entities/plant.entity.ts":
/*!***********************************************************!*\
  !*** ./apps/plant-app/src/plant/entities/plant.entity.ts ***!
  \***********************************************************/
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
exports.Plant = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Plant = class Plant {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Plant.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plant.prototype, "address", void 0);
Plant = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Plant);
exports.Plant = Plant;


/***/ }),

/***/ "./apps/plant-app/src/plant/plant.module.ts":
/*!**************************************************!*\
  !*** ./apps/plant-app/src/plant/plant.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlantModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const plant_service_1 = __webpack_require__(/*! ./plant.service */ "./apps/plant-app/src/plant/plant.service.ts");
const plant_resolver_1 = __webpack_require__(/*! ./plant.resolver */ "./apps/plant-app/src/plant/plant.resolver.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const plant_entity_1 = __webpack_require__(/*! ./entities/plant.entity */ "./apps/plant-app/src/plant/entities/plant.entity.ts");
let PlantModule = class PlantModule {
};
PlantModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([plant_entity_1.Plant])],
        providers: [plant_resolver_1.PlantResolver, plant_service_1.PlantService]
    })
], PlantModule);
exports.PlantModule = PlantModule;


/***/ }),

/***/ "./apps/plant-app/src/plant/plant.resolver.ts":
/*!****************************************************!*\
  !*** ./apps/plant-app/src/plant/plant.resolver.ts ***!
  \****************************************************/
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
exports.PlantResolver = void 0;
const plant_service_1 = __webpack_require__(/*! ./plant.service */ "./apps/plant-app/src/plant/plant.service.ts");
const plant_entity_1 = __webpack_require__(/*! ./entities/plant.entity */ "./apps/plant-app/src/plant/entities/plant.entity.ts");
const create_plant_input_1 = __webpack_require__(/*! ./dto/create-plant.input */ "./apps/plant-app/src/plant/dto/create-plant.input.ts");
const update_plant_input_1 = __webpack_require__(/*! ./dto/update-plant.input */ "./apps/plant-app/src/plant/dto/update-plant.input.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let PlantResolver = class PlantResolver {
    constructor(plantService) {
        this.plantService = plantService;
    }
    createPlant(createPlantInput) {
        return this.plantService.create(createPlantInput);
    }
    findAll() {
        return this.plantService.findAll();
    }
    findOne(id) {
        return this.plantService.findOne(id);
    }
    updatePlant(updatePlantInput) {
        return this.plantService.update(updatePlantInput.id, updatePlantInput);
    }
    removePlant(id) {
        return this.plantService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => plant_entity_1.Plant, { name: 'createPlant' }),
    __param(0, (0, graphql_1.Args)('createPlantInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_plant_input_1.CreatePlantInput !== "undefined" && create_plant_input_1.CreatePlantInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], PlantResolver.prototype, "createPlant", null);
__decorate([
    (0, graphql_1.Query)(() => [plant_entity_1.Plant], { name: 'findAllPlants' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlantResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => plant_entity_1.Plant, { name: 'findOnePlant' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlantResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => plant_entity_1.Plant, { name: 'updatePlant' }),
    __param(0, (0, graphql_1.Args)('updatePlantInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_plant_input_1.UpdatePlantInput !== "undefined" && update_plant_input_1.UpdatePlantInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PlantResolver.prototype, "updatePlant", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, { name: 'removePlant' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlantResolver.prototype, "removePlant", null);
PlantResolver = __decorate([
    (0, graphql_1.Resolver)(() => plant_entity_1.Plant),
    __metadata("design:paramtypes", [typeof (_c = typeof plant_service_1.PlantService !== "undefined" && plant_service_1.PlantService) === "function" ? _c : Object])
], PlantResolver);
exports.PlantResolver = PlantResolver;


/***/ }),

/***/ "./apps/plant-app/src/plant/plant.service.ts":
/*!***************************************************!*\
  !*** ./apps/plant-app/src/plant/plant.service.ts ***!
  \***************************************************/
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
exports.PlantService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const plant_entity_1 = __webpack_require__(/*! ./entities/plant.entity */ "./apps/plant-app/src/plant/entities/plant.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let PlantService = class PlantService {
    constructor(plantRepository) {
        this.plantRepository = plantRepository;
    }
    async create(createPlantInput) {
        const plant = this.plantRepository.create(createPlantInput);
        return this.plantRepository.save(plant);
    }
    async findAll() {
        return this.plantRepository.find();
    }
    async findOne(id) {
        return this.plantRepository.findOne(id);
    }
    async update(id, updatePlantInput) {
        const plant = await this.plantRepository.findOne({ where: { id } });
        console.log(plant);
        if (!plant) {
            throw new Error(`The plant with id: ${id} does not exist!`);
        }
        Object.assign(plant, updatePlantInput);
        console.log(plant);
        const savedPlant = await this.plantRepository.save(plant);
        console.log(savedPlant);
        return plant;
    }
    async remove(id) {
        const plant = await this.plantRepository.findOne({ where: { id } });
        if (!plant) {
            throw new Error(`The plant with id: ${id} does not exist!`);
        }
        const res = await this.plantRepository.remove(plant);
        console.log(res);
        return true;
    }
};
PlantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(plant_entity_1.Plant)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PlantService);
exports.PlantService = PlantService;


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
/*!************************************!*\
  !*** ./apps/plant-app/src/main.ts ***!
  \************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const plant_app_module_1 = __webpack_require__(/*! ./plant-app.module */ "./apps/plant-app/src/plant-app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(plant_app_module_1.PlantAppModule);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;