export class AddressFilters {
    id: number;
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;

    constructor(data: any) {
        this.id = data.id;
        this.line1 = data.line1;
        this.line2 = data.line2;
        this.city = data.city;
        this.state = data.state;
        this.zip = data.zip;
    }

    getCondition() {
        return [
            this.id ? `id = ${this.id}` : '',
            this.line1 ? `line1 LIKE '%${this.line1}%'` : '',
            this.line2 ? `line2 LIKE '%${this.line2}%'` : '',
            this.city ? `city LIKE '%${this.city}%'` : '',
            this.state ? `state LIKE '%${this.state}%'` : '',
            this.zip ? `zip LIKE '%${this.zip}%'` : '',
        ].filter(Boolean).join(' AND ');
    }
}
