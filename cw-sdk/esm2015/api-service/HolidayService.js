export class HolidayService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/Holiday/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/Holiday/Delete');
    }
}
