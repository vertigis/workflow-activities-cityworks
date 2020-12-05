export class TvInspectionService {
    constructor(service) { this._service = service; }
    AddObservation(request) {
        return this._service.call(request, 'Ams/TvInspection/AddObservation');
    }
    ById(request) {
        return this._service.call(request, 'Ams/TvInspection/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/TvInspection/ByIds');
    }
    ByWorkOrder(request) {
        return this._service.call(request, 'Ams/TvInspection/ByWorkOrder');
    }
    CctvObservationCodeTypes(request) {
        return this._service.call(request, 'Ams/TvInspection/CctvObservationCodeTypes');
    }
    ChangeCustomFieldCategory(request) {
        return this._service.call(request, 'Ams/TvInspection/ChangeCustomFieldCategory');
    }
    CodeDescriptions(request) {
        return this._service.call(request, 'Ams/TvInspection/CodeDescriptions');
    }
    ConfirmDyeLeaks(request) {
        return this._service.call(request, 'Ams/TvInspection/ConfirmDyeLeaks');
    }
    ConfirmSmokeTests(request) {
        return this._service.call(request, 'Ams/TvInspection/ConfirmSmokeTests');
    }
    Create(request) {
        return this._service.call(request, 'Ams/TvInspection/Create');
    }
    CreateFromPacp(request) {
        return this._service.call(request, 'Ams/TvInspection/CreateFromPacp');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/TvInspection/CreateSearchDefinition');
    }
    DescriptionScores(request) {
        return this._service.call(request, 'Ams/TvInspection/DescriptionScores');
    }
    DownstreamNode(request) {
        return this._service.call(request, 'Ams/TvInspection/DownstreamNode');
    }
    InspectedBy(request) {
        return this._service.call(request, 'Ams/TvInspection/InspectedBy');
    }
    Observation(request) {
        return this._service.call(request, 'Ams/TvInspection/Observation');
    }
    ObservationCauseCodeDescriptions(request) {
        return this._service.call(request, 'Ams/TvInspection/ObservationCauseCodeDescriptions');
    }
    ObservationCodeTypes(request) {
        return this._service.call(request, 'Ams/TvInspection/ObservationCodeTypes');
    }
    Observations(request) {
        return this._service.call(request, 'Ams/TvInspection/Observations');
    }
    ReviewedBy(request) {
        return this._service.call(request, 'Ams/TvInspection/ReviewedBy');
    }
    Search(request) {
        return this._service.call(request, 'Ams/TvInspection/Search');
    }
    UnitsOfMeasure(request) {
        return this._service.call(request, 'Ams/TvInspection/UnitsOfMeasure');
    }
    Update(request) {
        return this._service.call(request, 'Ams/TvInspection/Update');
    }
    UpdateObservation(request) {
        return this._service.call(request, 'Ams/TvInspection/UpdateObservation');
    }
    UpstreamNode(request) {
        return this._service.call(request, 'Ams/TvInspection/UpstreamNode');
    }
}
