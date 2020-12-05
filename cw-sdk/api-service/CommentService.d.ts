import { IApiService } from './i-api-service';
import { CommentServiceTypes as SvcDef } from '../api-interface/CommentService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICommentService = SvcDef.ICommentService;
export declare class CommentService implements ICommentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByActivityIds(request: Requests.ByActivityIds): Promise<Responses.ByActivityIds>;
    ByActivitySids(request: Requests.ByActivitySids): Promise<Responses.ByActivitySids>;
    ByActivityTypes(request: Requests.ByActivityTypes): Promise<Responses.ByActivityTypes>;
    ProblemComments(request: Requests.ProblemComments): Promise<Responses.ProblemComments>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
