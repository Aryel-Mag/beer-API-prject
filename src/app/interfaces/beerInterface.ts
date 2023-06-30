import { HttpClientModule } from "@angular/common/http"

interface IBeerAdd {
  name: string | null,
  tagline: string | null,
  firstBrewed: string | null,
  description: string | null,
  imageUrl: string | null,
  foodPairingOne: string | null,
  foodPairingTwo: string | null,
  foodPairingThree: string | null,
  brewerTips: string | null,
  contributor: string | null
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