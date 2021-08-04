type EquipmentType = 'Armor' | 'Weapon' | 'Trinket'

export interface EquipmentModel {
    id: string;
    name: string;
    type: EquipmentType;
    hpModifier: number,
    luckModifier: number,
    value: number    

}