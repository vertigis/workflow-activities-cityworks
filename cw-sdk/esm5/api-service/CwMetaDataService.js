var CwMetaDataService = /** @class */ (function () {
    function CwMetaDataService(service) {
        this._service = service;
    }
    CwMetaDataService.prototype.ByTableNameSids = function (request) {
        return this._service.call(request, 'General/CwMetaData/ByTableNameSids');
    };
    return CwMetaDataService;
}());
export { CwMetaDataService };
