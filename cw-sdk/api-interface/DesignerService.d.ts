import { CwUserStatus } from '../core/types/CwUserStatus';
import { CWUser } from '../core/types/CWUser';
import { CctvCode } from '../core/types/CctvCode';
import { CWGroup } from '../core/types/CWGroup';
import { CWDomain } from '../core/types/CWDomain';
import { DescScore } from '../core/types/DescScore';
import { CWCodeType } from '../core/types/CWCodeType';
import { CodeDescScore } from '../core/types/CodeDescScore';
import { CodeDesc } from '../core/types/CodeDesc';
import { AttachmentMapping } from '../core/types/AttachmentMapping';
import { ServiceTypes } from '../core/service-types';
export declare namespace DesignerServiceTypes {
    namespace Requests {
        interface AddAttachmentMapping extends ServiceTypes.CoreRequestBase {
            Alias?: string;
            Source: string;
        }
        interface AddCodeDescription extends ServiceTypes.CoreRequestBase {
            Code: string;
            CodeType: string;
            Description: string;
            IsActive?: boolean;
        }
        interface AddCodeDescScore extends ServiceTypes.CoreRequestBase {
            Code: string;
            Description: string;
            Score?: number;
        }
        interface AddCodeType extends ServiceTypes.CoreRequestBase {
            CodeFormat: string;
            CodeType: string;
            Description: string;
            Module: string;
        }
        interface AddDescScore extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            Description: string;
            Score?: number;
        }
        interface AddDomain extends ServiceTypes.CoreRequestBase {
            Description?: string;
            DomainName?: string;
            WKID?: number;
        }
        interface AddEmployeeSkillCode extends ServiceTypes.CoreRequestBase {
            Code: string;
            Description: string;
            IsActive?: boolean;
        }
        interface AddGroup extends ServiceTypes.CoreRequestBase {
            Description?: string;
            DomainId?: number;
            EmployeeSids?: number[];
            GISRight?: number;
            GroupName: string;
            MapServiceId?: number;
        }
        interface AddRole extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
            Role: string;
        }
        interface AddUsersToRole extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            Role: string;
        }
        interface AttachmentMappings extends ServiceTypes.CoreRequestBase {
        }
        interface CctvCodes extends ServiceTypes.CoreRequestBase {
        }
        interface CodeDescriptions extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            IncludeInactive?: boolean;
        }
        interface CodeDescScores extends ServiceTypes.CoreRequestBase {
        }
        interface CodeTypes extends ServiceTypes.CoreRequestBase {
            Format: string;
        }
        interface CreateUser extends ServiceTypes.CoreRequestBase {
            Answer: string;
            Email: string;
            EmployeeSid: number;
            Password: string;
            Question: string;
            Username?: string;
        }
        interface DeleteAttachmentMappings extends ServiceTypes.CoreRequestBase {
            Ids: number[];
        }
        interface DeleteCodeDescriptions extends ServiceTypes.CoreRequestBase {
            Codes: string[];
            CodeType: string;
        }
        interface DeleteDomains extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        interface DeleteEmployeeSkillCodes extends ServiceTypes.CoreRequestBase {
            Codes: string[];
        }
        interface DeleteGroups extends ServiceTypes.CoreRequestBase {
            GroupIds?: number[];
        }
        interface DeleteLogin extends ServiceTypes.CoreRequestBase {
            LoginName: string;
        }
        interface DeleteRoles extends ServiceTypes.CoreRequestBase {
            Roles?: string[];
        }
        interface DescScores extends ServiceTypes.CoreRequestBase {
            CodeType: string;
        }
        interface Domains extends ServiceTypes.CoreRequestBase {
        }
        interface EmployeeGroups extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        interface GroupMembers extends ServiceTypes.CoreRequestBase {
            GroupId?: number;
        }
        interface Groups extends ServiceTypes.CoreRequestBase {
            GroupIds?: number[];
        }
        interface RemoveUsersFromRole extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
            Role?: string;
        }
        interface Roles extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        interface SaveCctvCode extends ServiceTypes.CoreRequestBase {
            Cause: string;
            Code: string;
            CodeGroup: string;
            Description: string;
            Grade?: number;
            HRange?: number;
            LoRange?: number;
            ValueField?: string;
        }
        interface UnlockUsers extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        interface UpdateAttachmentMapping extends ServiceTypes.CoreRequestBase {
            Alias?: string;
            Id: number;
            Source?: string;
        }
        interface UpdateCodeDescription extends ServiceTypes.CoreRequestBase {
            Code: string;
            CodeType: string;
            Description: string;
            IsActive?: boolean;
        }
        interface UpdateCodeDescScore extends ServiceTypes.CoreRequestBase {
            Code: string;
            Description: string;
            Score?: number;
        }
        interface UpdateCodeType extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            Description: string;
            Module: string;
        }
        interface UpdateDescScore extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            Description: string;
            Score?: number;
        }
        interface UpdateDomain extends ServiceTypes.CoreRequestBase {
            Description?: string;
            DomainId: number;
            DomainName?: string;
            MapServiceId?: number;
        }
        interface UpdateGroup extends ServiceTypes.CoreRequestBase {
            Description?: string;
            EmployeeSids?: number[];
            GISRight?: number;
            GroupId: number;
            GroupName?: string;
            MapServiceId?: number;
        }
        interface UserRoles extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        interface UsersInRole extends ServiceTypes.CoreRequestBase {
            Role?: string;
        }
        interface UserStatus extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
    }
    namespace Responses {
        interface AddAttachmentMapping extends ServiceTypes.CoreResponseBase_<AttachmentMapping> {
        }
        interface AddCodeDescription extends ServiceTypes.CoreResponseBase_<CodeDesc> {
        }
        interface AddCodeDescScore extends ServiceTypes.CoreResponseBase_<CodeDescScore> {
        }
        interface AddCodeType extends ServiceTypes.CoreResponseBase_<CWCodeType> {
        }
        interface AddDescScore extends ServiceTypes.CoreResponseBase_<DescScore> {
        }
        interface AddDomain extends ServiceTypes.CoreResponseBase_<CWDomain> {
        }
        interface AddEmployeeSkillCode extends ServiceTypes.CoreResponseBase_<CodeDesc> {
        }
        interface AddGroup extends ServiceTypes.CoreResponseBase_<CWGroup> {
        }
        interface AddRole extends ServiceTypes.CoreResponseBase_<boolean> {
        }
        interface AddUsersToRole extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface AttachmentMappings extends ServiceTypes.CoreResponseBase_<AttachmentMapping[]> {
        }
        interface CctvCodes extends ServiceTypes.CoreResponseBase_<CctvCode[]> {
        }
        interface CodeDescriptions extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface CodeDescScores extends ServiceTypes.CoreResponseBase_<CodeDescScore[]> {
        }
        interface CodeTypes extends ServiceTypes.CoreResponseBase_<CWCodeType[]> {
        }
        interface CreateUser extends ServiceTypes.CoreResponseBase_<CWUser> {
        }
        interface DeleteAttachmentMappings extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteCodeDescriptions extends ServiceTypes.CoreResponseBase_<{
            [key: string]: boolean;
        }> {
        }
        interface DeleteDomains extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteEmployeeSkillCodes extends ServiceTypes.CoreResponseBase_<{
            [key: string]: boolean;
        }> {
        }
        interface DeleteGroups extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteLogin extends ServiceTypes.CoreResponseBase_<boolean> {
        }
        interface DeleteRoles extends ServiceTypes.CoreResponseBase_<{
            [key: string]: boolean;
        }> {
        }
        interface DescScores extends ServiceTypes.CoreResponseBase_<DescScore[]> {
        }
        interface Domains extends ServiceTypes.CoreResponseBase_<CWDomain[]> {
        }
        interface EmployeeGroups extends ServiceTypes.CoreResponseBase_obsolete_<{
            [key: number]: number[];
        }> {
        }
        interface GroupMembers extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Groups extends ServiceTypes.CoreResponseBase_<CWGroup[]> {
        }
        interface RemoveUsersFromRole extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface Roles extends ServiceTypes.CoreResponseBase_<string[]> {
        }
        interface SaveCctvCode extends ServiceTypes.CoreResponseBase_<CctvCode> {
        }
        interface UnlockUsers extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface UpdateAttachmentMapping extends ServiceTypes.CoreResponseBase_<AttachmentMapping> {
        }
        interface UpdateCodeDescription extends ServiceTypes.CoreResponseBase_<CodeDesc> {
        }
        interface UpdateCodeDescScore extends ServiceTypes.CoreResponseBase_<CodeDescScore> {
        }
        interface UpdateCodeType extends ServiceTypes.CoreResponseBase_<CWCodeType> {
        }
        interface UpdateDescScore extends ServiceTypes.CoreResponseBase_<DescScore> {
        }
        interface UpdateDomain extends ServiceTypes.CoreResponseBase_<CWDomain> {
        }
        interface UpdateGroup extends ServiceTypes.CoreResponseBase_<CWGroup> {
        }
        interface UserRoles extends ServiceTypes.CoreResponseBase_<{
            [key: number]: string[];
        }> {
        }
        interface UsersInRole extends ServiceTypes.CoreResponseBase_<string[]> {
        }
        interface UserStatus extends ServiceTypes.CoreResponseBase_<{
            [key: number]: CwUserStatus;
        }> {
        }
    }
    interface IDesignerService {
        AddAttachmentMapping?: (request: Requests.AddAttachmentMapping) => Promise<Responses.AddAttachmentMapping>;
        AddCodeDescription?: (request: Requests.AddCodeDescription) => Promise<Responses.AddCodeDescription>;
        AddCodeDescScore?: (request: Requests.AddCodeDescScore) => Promise<Responses.AddCodeDescScore>;
        AddCodeType?: (request: Requests.AddCodeType) => Promise<Responses.AddCodeType>;
        AddDescScore?: (request: Requests.AddDescScore) => Promise<Responses.AddDescScore>;
        AddDomain?: (request: Requests.AddDomain) => Promise<Responses.AddDomain>;
        AddEmployeeSkillCode?: (request: Requests.AddEmployeeSkillCode) => Promise<Responses.AddEmployeeSkillCode>;
        AddGroup?: (request: Requests.AddGroup) => Promise<Responses.AddGroup>;
        AddRole?: (request: Requests.AddRole) => Promise<Responses.AddRole>;
        AddUsersToRole?: (request: Requests.AddUsersToRole) => Promise<Responses.AddUsersToRole>;
        AttachmentMappings?: (request: Requests.AttachmentMappings) => Promise<Responses.AttachmentMappings>;
        CctvCodes?: (request: Requests.CctvCodes) => Promise<Responses.CctvCodes>;
        CodeDescriptions?: (request: Requests.CodeDescriptions) => Promise<Responses.CodeDescriptions>;
        CodeDescScores?: (request: Requests.CodeDescScores) => Promise<Responses.CodeDescScores>;
        CodeTypes?: (request: Requests.CodeTypes) => Promise<Responses.CodeTypes>;
        CreateUser?: (request: Requests.CreateUser) => Promise<Responses.CreateUser>;
        DeleteAttachmentMappings?: (request: Requests.DeleteAttachmentMappings) => Promise<Responses.DeleteAttachmentMappings>;
        DeleteCodeDescriptions?: (request: Requests.DeleteCodeDescriptions) => Promise<Responses.DeleteCodeDescriptions>;
        DeleteDomains?: (request: Requests.DeleteDomains) => Promise<Responses.DeleteDomains>;
        DeleteEmployeeSkillCodes?: (request: Requests.DeleteEmployeeSkillCodes) => Promise<Responses.DeleteEmployeeSkillCodes>;
        DeleteGroups?: (request: Requests.DeleteGroups) => Promise<Responses.DeleteGroups>;
        DeleteLogin?: (request: Requests.DeleteLogin) => Promise<Responses.DeleteLogin>;
        DeleteRoles?: (request: Requests.DeleteRoles) => Promise<Responses.DeleteRoles>;
        DescScores?: (request: Requests.DescScores) => Promise<Responses.DescScores>;
        Domains?: (request: Requests.Domains) => Promise<Responses.Domains>;
        EmployeeGroups?: (request: Requests.EmployeeGroups) => Promise<Responses.EmployeeGroups>;
        GroupMembers?: (request: Requests.GroupMembers) => Promise<Responses.GroupMembers>;
        Groups?: (request: Requests.Groups) => Promise<Responses.Groups>;
        RemoveUsersFromRole?: (request: Requests.RemoveUsersFromRole) => Promise<Responses.RemoveUsersFromRole>;
        Roles?: (request: Requests.Roles) => Promise<Responses.Roles>;
        SaveCctvCode?: (request: Requests.SaveCctvCode) => Promise<Responses.SaveCctvCode>;
        UnlockUsers?: (request: Requests.UnlockUsers) => Promise<Responses.UnlockUsers>;
        UpdateAttachmentMapping?: (request: Requests.UpdateAttachmentMapping) => Promise<Responses.UpdateAttachmentMapping>;
        UpdateCodeDescription?: (request: Requests.UpdateCodeDescription) => Promise<Responses.UpdateCodeDescription>;
        UpdateCodeDescScore?: (request: Requests.UpdateCodeDescScore) => Promise<Responses.UpdateCodeDescScore>;
        UpdateCodeType?: (request: Requests.UpdateCodeType) => Promise<Responses.UpdateCodeType>;
        UpdateDescScore?: (request: Requests.UpdateDescScore) => Promise<Responses.UpdateDescScore>;
        UpdateDomain?: (request: Requests.UpdateDomain) => Promise<Responses.UpdateDomain>;
        UpdateGroup?: (request: Requests.UpdateGroup) => Promise<Responses.UpdateGroup>;
        UserRoles?: (request: Requests.UserRoles) => Promise<Responses.UserRoles>;
        UsersInRole?: (request: Requests.UsersInRole) => Promise<Responses.UsersInRole>;
        UserStatus?: (request: Requests.UserStatus) => Promise<Responses.UserStatus>;
    }
}
