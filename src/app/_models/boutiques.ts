import { Injectable } from "@angular/core";

@Injectable()
export class BoutiquesModel {
  public data: any = [
    {
      p_id: "1",
      name: "Epicerie du centre",
      description: "Achat de produits de première nécessité",
      ville: "Saint-françois",
      product_image:
        "https://rukminim1.flixcart.com/image/832/832/jg6v24w0/washing-powder/3/r/d/2-2-kg-top-load-surf-excel-original-imaf3udkm4v5mdrq.jpeg?q=70"
    },
    {
        p_id: "2",
        name: "Boulangerie AZ",
        description: "Vente de pains",
        ville: "Abymes",
        product_image:
        "https://rukminim1.flixcart.com/image/832/832/j4n1x8w0/moisturizer-cream/k/m/b/200-body-lotion-whitening-even-tone-uv-protect-all-skin-types-original-imaeva7e4hvqn7dz.jpeg?q=70"
      }
  ];
}