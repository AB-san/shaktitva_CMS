import {details} from '../components/AllCard'
export const routes = ["/signup",
"/signin",
"/story",
"/story/:StoryID",
"/ngo",
"/ngo/:NgoID",
"/legal",
"/legal/:LegalID",
"/legal/misuse/:LegalID",
"/legal/example/:LegalID",
"/users",
"/mailinglist",
"/config",
"/category",
"/states",
"/defaultprofilepic"];
export const StoryDetailedRoute =  "";
// `/story/${details.id}`
export const LegalDetailedRoute = "";
// `/legal/${details._id}`
export const LegalMisuseRoute = "";
// `/legal/misuse/${details._id}`
export const LegalExampleRoute = "";
// `/legal/example/${details._id}`
export const NGODetailedRoute = "";
// `/ngo/${details._id}`;