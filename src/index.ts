/// <reference types="@types/google.maps" />

import { Company } from "./Company";
import { User } from "./User";

const user = new User();
const company = new Company();

console.log("user", user);
console.log("company", company);
console.log("google", google);

new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: { lat: 0, lng: 0 },
});
