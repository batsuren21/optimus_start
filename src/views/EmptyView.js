import { View } from "dhx-optimus";

export class EmptyView extends View {
    init() {
        return `
        <div className="empty__container">
            This is the ${this.params.content || "empty"} view
        </div>`;
    }
}