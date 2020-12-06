import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { ServiceTypes } from "cw-sdk/core";
import { checkResponse } from "./utils";

/** An interface that defines the inputs of the activity. */
export interface UseCityworksServiceInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The Cityworks service operation.
     * @required
     */
    path:
    "General/ActivityLink/AddActivity" |
    "General/ActivityLink/ByActivitySids" |
    "General/ActivityLink/CloneByActivitySid" |
    "General/ActivityLink/Delete" |
    "General/ActivityLink/Remove" |
    "General/AppData/CurrentLocation" |
    "General/AppData/SelectedEntities" |
    "General/Authentication/Authenticate" |
    "General/Authentication/CityworksOnlineAuthenticate" |
    "General/Authentication/CityworksOnlineSites" |
    "General/Authentication/Domains" |
    "General/Authentication/User" |
    "General/Authentication/Validate" |
    "General/Authentication/Version" |
    "General/CostSummary/WorkOrderEntity" |
    "General/CostSummary/WorkOrderEntitySearch" |
    "General/CwMetaData/ByTableNameSids" |
    "General/Localization/LocalizationSettings" |
    "General/Localization/TimeZones" |
    "Ams/Crew/ByEmployee" |
    "Ams/Crew/ByIds" |
    "Ams/Crew/Employees" |
    "Ams/Crew/Equipment" |
    "Ams/Crew/Material" |
    "Ams/Codes/All" |
    "Ams/Employee/All" |
    "Ams/Preferences/Global" |
    "Ams/ServiceRequest/AddComments" |
    "Ams/ServiceRequest/AllStreet" |
    "Ams/ServiceRequest/AuditLog" |
    "Ams/ServiceRequest/ById" |
    "Ams/ServiceRequest/ByIds" |
    "Ams/ServiceRequest/ByIncidentAndEmail" |
    "Ams/ServiceRequest/ByOtherSystemId" |
    "Ams/ServiceRequest/Cancel" |
    "Ams/ServiceRequest/ChangeCustomFieldCategory" |
    "Ams/ServiceRequest/ChangeProblem" |
    "Ams/ServiceRequest/Close" |
    "Ams/ServiceRequest/Combine" |
    "Ams/ServiceRequest/CreateRequestBase" |
    "Ams/ServiceRequest/Create" |
    "Ams/ServiceRequest/CustomFieldCategories" |
    "Ams/ServiceRequest/CustomFields" |
    "Ams/ServiceRequest/DefaultStatus" |
    "Ams/ServiceRequest/Delete" |
    "Ams/ServiceRequest/DispatchTo" |
    "Ams/ServiceRequest/Move" |
    "Ams/ServiceRequest/Priorities" |
    "Ams/ServiceRequest/ProblemLeafByOtherSysCodeDescs" |
    "Ams/ServiceRequest/ProblemLeafBySid" |
    "Ams/ServiceRequest/ProblemNodes" |
    "Ams/ServiceRequest/Problems" |
    "Ams/ServiceRequest/ProblemsByKeywords" |
    "Ams/ServiceRequest/QA" |
    "Ams/ServiceRequest/Reopen" |
    "Ams/ServiceRequest/Search" |
    "Ams/ServiceRequest/SearchObject" |
    "Ams/ServiceRequest/Statuses" |
    "Ams/ServiceRequest/SubmitTo" |
    "Ams/ServiceRequest/TemplateCustomFields" |
    "Ams/ServiceRequest/Uncancel" |
    "Ams/ServiceRequest/Update" |
    "Ams/Tasks/ById" |
    "Ams/WorkOrder/ById" |
    "Ams/WorkOrder/ByIds" |
    "Ams/WorkOrder/Search" |
    "Ams/WorkOrderTemplate/ByIds" |
    "Ams/WorkOrderTemplate/Search" |
    "Gis/MapService/Configuration" |
    "Gis/MapService/Domain" |
    "Gis/MapService/DownloadMobileMapCache" |
    "Gis/MapService/InitialExtent" |
    "Gis/MapService/InspectionConfiguration" |
    "Gis/MapService/ServiceRequestConfiguration" |
    "Gis/MapService/User" |
    "Gis/MapService/WorkOrderConfiguration" |
    "PLL/CaseObject/ByIds" |
    "PLL/CaseObject/CreateCaseFromServiceRequest" |
    "PLL/CaseObject/DeleteCase" |
    "PLL/CaseObject/Move" |
    "PLL/CaseObject/Search" |
    string;

    /**
     * @description The data object to pass to the services operation. 
     */
    data?: any;
}

/** An interface that defines the outputs of the activity. */
export interface UseCityworksServiceOutputs {
    /**
     * @description The result of the service operation.
     */
    result?: any;
}

/**
 * @category Cityworks
 * @defaultName cwService
 * @description Utility activity to generically access any Cityworks REST API operation.
 */
export class UseCityworksService implements IActivityHandler {
    async execute(inputs: UseCityworksServiceInputs): Promise<UseCityworksServiceOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.path) {
            throw new Error("path is required");
        }

        const response = await inputs.service.call(inputs.data || {}, inputs.path) as ServiceTypes.CoreResponseBase_<any>;
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
