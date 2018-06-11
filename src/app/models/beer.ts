export class Beer{
  public id: number;
  public name: string;
  public description: string;
  public abv: number;
  public ibu: number;
  public image_url: string;

  constructor(json?){
    if(json){
      this.id = json.id;
      this.name = json.name;
      this.description = json.description;
      this.abv = json.abv;
      this.ibu = json.abv;
      this.image_url = json.image_url;
    }
  }

  public update(beer){
    this.id = beer.id;
    this.name = beer.name;
    this.description = beer.description;
    this.abv = beer.abv;
    this.ibu = beer.ibu;
    this.image_url = beer.image_url;
  }

}
