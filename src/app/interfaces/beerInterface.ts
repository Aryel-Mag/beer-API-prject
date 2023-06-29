import { HttpClientModule } from "@angular/common/http"

interface IBeer {
  name: string,
  tagline: string,
  image_url: string,
  description: string
}

export { IBeer }