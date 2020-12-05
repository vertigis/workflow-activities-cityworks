export class EquipmentChangeOutService {
    constructor(service) { this._service = service; }
    AddChangeOutRead(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/AddChangeOutRead');
    }
    AddOperation(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/AddOperation');
    }
    Attach(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Attach');
    }
    ById(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Delete');
    }
    DeleteChangeOutReads(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DeleteChangeOutReads');
    }
    DeleteOperations(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DeleteOperations');
    }
    Detach(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Detach');
    }
    DirectParent(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DirectParent');
    }
    Entities(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Entities');
    }
    Entity(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Entity');
    }
    History(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/History');
    }
    Read(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Read');
    }
    ReadConfigs(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ReadConfigs');
    }
    Related(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Related');
    }
    Replace(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Replace');
    }
    UpdateChangeOutRead(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/UpdateChangeOutRead');
    }
    UpdateOperation(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/UpdateOperation');
    }
}
