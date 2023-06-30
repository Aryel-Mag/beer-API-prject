import { HttpClientModule } from "@angular/common/http"

interface IBeerAdd {
  name: string,
  tagline: string,
  firstBrewed: Date,
  description: string,
  imageUrl: string,
  foodPairingOne: string,
  foodPairingTwo: string,
  foodPairingThree: string,
  brewerTips: string,
  contributor: string
}

interface IBeer {
  name: string,
  tagline: string,
  image_url: string,
  description: string
}

interface IBeerRaw {
  metadata: Object,
  data: Object[]
}

export { IBeer, IBeerRaw, IBeerAdd }