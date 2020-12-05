export class CodesService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'Ams/Codes/All');
    }
    AllCCTVCodeDescScore(request) {
        return this._service.call(request, 'Ams/Codes/AllCCTVCodeDescScore');
    }
    AllDescScore(request) {
        return this._service.call(request, 'Ams/Codes/AllDescScore');
    }
    ByCodeType(request) {
        return this._service.call(request, 'Ams/Codes/ByCodeType');
    }
    Export(request) {
        return this._service.call(request, 'Ams/Codes/Export');
    }
    ExportCCTVCodeDescScore(request) {
        return this._service.call(request, 'Ams/Codes/ExportCCTVCodeDescScore');
    }
    ExportDescScore(request) {
        return this._service.call(request, 'Ams/Codes/ExportDescScore');
    }
    Import(request) {
        return this._service.call(request, 'Ams/Codes/Import');
    }
    ImportCCTVCodeDescScore(request) {
        return this._service.call(request, 'Ams/Codes/ImportCCTVCodeDescScore');
    }
    ImportDescScore(request) {
        return this._service.call(request, 'Ams/Codes/ImportDescScore');
    }
}
