import { IBeerAdd } from "src/app/interfaces/beerInterface";
class CreateBeerModel {

  static checkData(data: IBeerAdd): string {
    console.log("model", data);
    if (
      !!data.name &&
      !!data.description
    ) {

      return "OK"
    }
    return ""
  }
}

export default CreateBeerModel