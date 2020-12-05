import { CoreDomainBase } from './CoreDomainBase';
export interface AttachmentMapping extends CoreDomainBase {
    Alias?: string;
    DomainId?: number;
    Source?: string;
}
