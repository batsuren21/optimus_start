import { View } from "dhx-optimus";
import { ToolbarView } from "./ToolbarView";
import { EmptyView } from "./EmptyView";

export class TopLayout extends View {
	init() {
        return (this.layout = new dhx.Layout(null, {
            rows: [
                {
                    id: "toolbar",
                    height: "content",
                    init: cell => this.show(cell, ToolbarView),
                },
                {
                    id: "content",
                    init: cell => this.show(cell, EmptyView),
                },
            ],
        }));
    }
    ready() {
        // initialize the global event handler
        this.on("viewChange", id => {
            this.show(this.layout.getCell("content"), EmptyView, { content: id });
        });
    }
}
