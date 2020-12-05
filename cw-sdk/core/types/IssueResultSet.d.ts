import { MaterialCost } from './MaterialCost';
import { Issue } from './Issue';
export interface IssueResultSet {
    Issues?: Issue[];
    WorkOrderMaterialCosts?: MaterialCost[];
}
