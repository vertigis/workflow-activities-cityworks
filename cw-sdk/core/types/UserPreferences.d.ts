import { UserPreference } from './UserPreference';
export interface UserPreferences {
    ClusterEventLayers?: boolean;
    Data?: UserPreference[];
    DistrictFieldName?: string;
    DistrictLayerName?: string;
    EquipmentTreeDisplayText?: string;
    MapFavorites?: string[];
    MapPageFieldName?: string;
    MapPageLayerName?: string;
    MapSelectionBaseColor?: string;
    MapSelectionBaseFill?: string;
    MapSelectionBaseStroke?: string;
    MapSelectionSelectedColor?: string;
    MapSelectionSelectedFill?: string;
    MapSelectionSelectedStroke?: string;
    MaterialTreeDisplayText?: string;
    ShopFieldName?: string;
    ShopLayerName?: string;
    SpatialReference?: number;
    TileNoFieldName?: string;
    TileNoLayerName?: string;
}
