import { CwGroupEmployees } from '../core/types/CwGroupEmployees';
import { EmployeeBase } from '../core/types/EmployeeBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace EmployeeServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AdDomain?: string;
            BenefitRate?: number;
            BenefitType?: number;
            CustomFieldValues?: {
                [key: number]: string;
            };
            DefaultImgPath?: string;
            DomainId?: number;
            Email?: string;
            EmailReq?: string;
            EmployeeId?: string;
            FirstName?: string;
            GroupIds?: number[];
            HolidayRate?: number;
            HolidayType?: number;
            HourlyRate?: number;
            IsActive?: boolean;
            IsDomainAdmin?: boolean;
            LastName: string;
            LicenseCodes?: string[];
            LoginName?: string;
            MapServiceId?: number;
            MiddleInitial?: string;
            MobileMapCacheId?: number;
            Organization?: string;
            OtherRate?: number;
            OtherRateType?: number;
            OverheadRate?: number;
            OverheadType?: number;
            OvertimeRate?: number;
            OvertimeType?: number;
            Pager?: string;
            Password?: string;
            ShiftDiffRate?: number;
            ShiftDiffType?: number;
            StandbyRate?: number;
            StandbyType?: number;
            Title?: string;
            UniqueName?: string;
            WorkPhone?: string;
        }
        interface AddLicensedItems extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            LicenseCodes: string[];
        }
        interface All extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
        }
        interface ByGroupId extends ServiceTypes.CoreRequestBase {
            GroupId: number;
            IncludeInactive?: boolean;
        }
        interface ById extends ServiceTypes.CoreRequestBase {
            EmployeeSid: number;
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        interface DeleteLicensedItems extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            LicenseCodes: string[];
        }
        interface Groups extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
        }
        interface NamesAreUnique extends ServiceTypes.CoreRequestBase {
            Names?: string[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AdDomain?: string[];
            DomainId?: number[];
            Email?: string[];
            EmployeeId?: string[];
            EmployeeSid?: number[];
            FirstName?: string[];
            FullName?: string[];
            IsActive?: boolean;
            IsUser?: boolean;
            LastName?: string[];
            LoginName?: string[];
            MaxResults?: number;
            Organization?: string[];
            UniqueName?: string[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            AdDomain?: string;
            BenefitRate?: number;
            BenefitType?: number;
            CustomFieldValues?: {
                [key: number]: string;
            };
            DefaultImgPath?: string;
            DomainId?: number;
            Email?: string;
            EmailReq?: string;
            EmployeeId?: string;
            EmployeeSids: number[];
            FirstName?: string;
            HolidayRate?: number;
            HolidayType?: number;
            HourlyRate?: number;
            IsActive?: boolean;
            LastName?: string;
            LoginName?: string;
            MapServiceId?: number;
            MiddleInitial?: string;
            MobileMapCacheId?: number;
            Organization?: string;
            OtherRate?: number;
            OtherRateType?: number;
            OverheadRate?: number;
            OverheadType?: number;
            OvertimeRate?: number;
            OvertimeType?: number;
            Pager?: string;
            Password?: string;
            ShiftDiffRate?: number;
            ShiftDiffType?: number;
            StandbyRate?: number;
            StandbyType?: number;
            Title?: string;
            UniqueName?: string;
            WorkPhone?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<EmployeeBase> {
        }
        interface AddLicensedItems extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface All extends ServiceTypes.CoreResponseBase_<EmployeeBase[]> {
        }
        interface ByGroupId extends ServiceTypes.CoreResponseBase_<EmployeeBase[]> {
        }
        interface ById extends ServiceTypes.CoreResponseBase_<EmployeeBase> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_<EmployeeBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteLicensedItems extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface Groups extends ServiceTypes.CoreResponseBase_<CwGroupEmployees[]> {
        }
        interface NamesAreUnique extends ServiceTypes.CoreResponseBase_<{
            [key: string]: boolean;
        }> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<EmployeeBase[]> {
        }
    }
    interface IEmployeeService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        AddLicensedItems?: (request: Requests.AddLicensedItems) => Promise<Responses.AddLicensedItems>;
        All?: (request: Requests.All) => Promise<Responses.All>;
        ByGroupId?: (request: Requests.ByGroupId) => Promise<Responses.ByGroupId>;
        ById?: (request: Requests.ById) => Promise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteLicensedItems?: (request: Requests.DeleteLicensedItems) => Promise<Responses.DeleteLicensedItems>;
        Groups?: (request: Requests.Groups) => Promise<Responses.Groups>;
        NamesAreUnique?: (request: Requests.NamesAreUnique) => Promise<Responses.NamesAreUnique>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
