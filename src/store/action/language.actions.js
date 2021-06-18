import { action } from "../../utils/redux";

export const CHANGE_LANG = "CHANGE_LANG";

export const changeLanguage = {
    changeLang: (lang)=>action(CHANGE_LANG,lang)
}