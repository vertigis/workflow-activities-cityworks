var CaseAssetService = /** @class */ (function () {
    function CaseAssetService(service) {
        this._service = service;
    }
    CaseAssetService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseAsset/ByCaObjectId');
    };
    CaseAssetService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseAsset/DeleteByCaObjectId');
    };
    CaseAssetService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseAsset/Search');
    };
    CaseAssetService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseAsset/SearchObject');
    };
    return CaseAssetService;
}());
export { CaseAssetService };
