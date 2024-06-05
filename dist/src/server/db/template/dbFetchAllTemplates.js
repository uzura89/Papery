"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbFetchAllTemplates = void 0;
function dbFetchAllTemplates(mongoose, userParmId) {
    return __awaiter(this, void 0, void 0, function* () {
        const Template = mongoose.model("Template");
        try {
            // fetch all Templates
            const templateSchemas = yield Template.find({ userParmId });
            const templates = templateSchemas.map((templateSchema) => {
                return {
                    id: templateSchema.id,
                    name: templateSchema.name,
                    bodies: templateSchema.bodies,
                    index: templateSchema.index,
                };
            });
            // return
            return templates;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.dbFetchAllTemplates = dbFetchAllTemplates;
