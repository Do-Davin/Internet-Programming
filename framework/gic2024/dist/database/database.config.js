"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBaseConfig = void 0;
const category_entity_1 = require("../category/entities/category.entity");
exports.dataBaseConfig = {
    dialect: 'sqlite',
    storage: '.db/data.sqlite3',
    models: [category_entity_1.Category],
    autoLoadModels: true,
    synchronize: true,
};
//# sourceMappingURL=database.config.js.map