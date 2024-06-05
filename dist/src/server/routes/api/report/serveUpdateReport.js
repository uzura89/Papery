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
exports.serveUpdateReport = void 0;
const dbUpdateReport_1 = require("../../../db/report/dbUpdateReport");
function serveUpdateReport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userParmId } = req;
        const { id, reportName, filterByTagIds, divideBy, reportType, duration, order, } = req.body.reportBase;
        try {
            yield (0, dbUpdateReport_1.dbUpdateReport)(req.mongoose, userParmId, {
                id,
                reportName,
                filterByTagIds,
                divideBy,
                reportType,
                duration,
                order,
            });
            return res.status(200).json({});
        }
        catch (error) {
            return res.status(500).json({
                message: "Something went wrong",
            });
        }
    });
}
exports.serveUpdateReport = serveUpdateReport;
