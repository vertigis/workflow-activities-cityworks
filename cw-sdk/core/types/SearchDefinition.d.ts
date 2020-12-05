import { SearchQANumericField } from './SearchQANumericField';
import { SearchQAField } from './SearchQAField';
import { SearchPolygonField } from './SearchPolygonField';
import { SearchNumericField } from './SearchNumericField';
import { SearchMapLayerField } from './SearchMapLayerField';
import { SearchResultField } from './SearchResultField';
import { SearchField } from './SearchField';
import { SearchDateField } from './SearchDateField';
import { SearchCustomField } from './SearchCustomField';
import { SearchDefinitionName } from './SearchDefinitionName';
export interface SearchDefinition extends SearchDefinitionName {
    SearchCustomFields?: SearchCustomField[];
    SearchDateFields?: SearchDateField[];
    SearchFields?: SearchField[];
    SearchGroupByFields?: SearchResultField[];
    SearchMapLayerFields?: SearchMapLayerField[];
    SearchNumericFields?: SearchNumericField[];
    SearchPolygonFields?: SearchPolygonField[];
    SearchQAFields?: SearchQAField[];
    SearchQANumericFields?: SearchQANumericField[];
    SearchResultFields?: SearchResultField[];
}
