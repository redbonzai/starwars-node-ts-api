export class AddressSummary {
    id: number
    line1: string
    line2: string
    city: string
    state: string
    zip: string

    constructor(data: any) {
        this.id = data.id
        this.line1 = data.line1;
        this.line2 = data.line2;
        this.city = data.city;
        this.state = data.state;
        this.zip = data.zip;
    }
}
