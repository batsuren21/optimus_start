import { View } from "dhx-optimus";

export class ToolbarView extends View {
    init() {
        this.toolbar = new dhx.Toolbar(null, {
            css: "toolbar",
            data: [
                {
                    type: "spacer",
                },
                {
                    id: "first",
                    value: "First",
                    group: "views",
                },
                {
                    id: "second",
                    value: "Second",
                    group: "views",
                },
                {
                    id: "third",
                    value: "Third",
                    group: "views",
                },
                {
                    type: "spacer",
                },
            ],
        });

        return this.toolbar;
    }
    ready() {
        this.toolbar.events.on("click", id => {
            this.fire("viewChange", [id]);
        });
    }
}