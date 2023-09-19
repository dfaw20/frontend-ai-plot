import { Character } from "./Character";
import { Plot } from "./Plot";
import { Story } from "./Story";

export type SensitiveTarget = Character | Plot | Story

export type SensitiveItem = {
    target: SensitiveTarget
    targetCode: 'Character' | 'Plot' | 'Story'
}