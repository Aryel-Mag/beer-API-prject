import { IBeerAdd } from "src/app/interfaces/beerInterface";
import HttpService from "../../../services/HttpService";
class CreateBeerModel {
  // HTTP CLIENT INJECTION
  constructor(private readonly _http: HttpService) { }

  // FUNCTION WHICH CHECKS THE DATA FROM VIEW
  static checkData(data: IBeerAdd): string {
    if (
      !!data.name &&
      !!data.tagline &&
      !!data.firstBrewed &&
      !!data.description &&
      !!data.imageUrl &&
      !!data.foodPairingOne &&
      !!data.foodPairingTwo &&
      !!data.foodPairingThree &&
      !!data.brewerTips &&
      !!data.contributor
    ) {
      // CHECKS IF THE INSERTED DATE IS CORRECT
      let today = new Date();
      let tempTable: string[] = data.firstBrewed.split("/");
      let months: number = parseInt(tempTable[0]);
      let years: number = parseInt(tempTable[1]);

      if (Number.isInteger(months) && Number.isInteger(years)) {
        if (months < 1 || months > 12 || years < 1900 || years > today.getFullYear()) {
          return "Invalid date";
        } else {
          return ''
          // return this.createBeer(data, http);
        }
      } else {
        return "Invalid date";
      }
      return ''
    } else {
      return "Please fill all the fields";
    }
  }

  protected static createBeer(data: IBeerAdd, http: Object): string {
    console.log(http)
    return ''
  }
}

export default CreateBeerModel