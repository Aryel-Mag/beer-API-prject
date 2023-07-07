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
  id: number,
  name: string,
  tagline: string,
  image_url: string,
  description: string
}

interface IBeerRaw {
  metadata: Object,
  data: Object[]
}

enum payloadStatus {
  pending = 'pending',
  loading = 'loading',
  success = 'success',
  error = 'error'
}

interface IPayloadStatus {
  data: IBeer[];
  pStatus: payloadStatus;
  error: string;
}

interface AppState {
  beers: IPayloadStatus;
}

export { IBeer, IBeerRaw, IBeerAdd, AppState, IPayloadStatus, payloadStatus }