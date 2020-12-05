var CodesService = /** @class */ (function () {
    function CodesService(service) {
        this._service = service;
    }
    CodesService.prototype.All = function (request) {
        return this._service.call(request, 'Ams/Codes/All');
    };
    CodesService.prototype.AllCCTVCodeDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/AllCCTVCodeDescScore');
    };
    CodesService.prototype.AllDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/AllDescScore');
    };
    CodesService.prototype.ByCodeType = function (request) {
        return this._service.call(request, 'Ams/Codes/ByCodeType');
    };
    CodesService.prototype.Export = function (request) {
        return this._service.call(request, 'Ams/Codes/Export');
    };
    CodesService.prototype.ExportCCTVCodeDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/ExportCCTVCodeDescScore');
    };
    CodesService.prototype.ExportDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/ExportDescScore');
    };
    CodesService.prototype.Import = function (request) {
        return this._service.call(request, 'Ams/Codes/Import');
    };
    CodesService.prototype.ImportCCTVCodeDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/ImportCCTVCodeDescScore');
    };
    CodesService.prototype.ImportDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/ImportDescScore');
    };
    return CodesService;
}());
export { CodesService };
