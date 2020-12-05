export class CaseAssetService {
    constructor(service) { this._service = service; }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseAsset/ByCaObjectId');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseAsset/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseAsset/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseAsset/SearchObject');
    }
}
