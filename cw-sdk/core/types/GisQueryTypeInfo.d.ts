import { PWModule } from './PWModule';
import { PWEntity } from './PWEntity';
import { QueryTypeInfo } from './QueryTypeInfo';
export interface GisQueryTypeInfo extends QueryTypeInfo {
    Entity?: PWEntity;
    Module?: PWModule;
}
