export class CwMetaDataService {
    constructor(service) { this._service = service; }
    ByTableNameSids(request) {
        return this._service.call(request, 'General/CwMetaData/ByTableNameSids');
    }
}
