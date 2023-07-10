import { HttpClientModule } from "@angular/common/http"

interface IBeer {
  id: number | null,
  name: string | null,
  tagline: string | null,
  firstBrewed: string | null,
  description: string | null,
  image_url: string | null,
  foodPairingOne: string | null,
  foodPairingTwo: string | null,
  foodPairingThree: string | null,
  brewerTips: string | null,
  contributor: string | null
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
  beer: IPayloadStatus;
}

export { IBeer, IBeerRaw, AppState, IPayloadStatus, payloadStatus }
