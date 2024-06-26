import { View } from "dhx-optimus";

export class DataView extends View {
    init() {
        this.dataView = new dhx.DataView(null, {
            data: this.params.dataCollection,
            itemsInRow: 2,
            gap: 20,
            template: ({ name, post }) => `
                <div className="personal-card">
                    <div className="personal-card__container">
                        <h3>${name}</h3>
                        <p>${post}</p>
                    </div>
                </div>
            `,
        });
        return this.dataView;
    }
}